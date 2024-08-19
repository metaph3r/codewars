/*
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4)
helper.pageCount() // should == 2
helper.itemCount() // should == 6
helper.pageItemCount(0) // should == 4
helper.pageItemCount(1) // last page - should == 2
helper.pageItemCount(2) // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5) // should == 1 (zero based index)
helper.pageIndex(2) // should == 0
helper.pageIndex(20) // should == -1
helper.pageIndex(-10) // should == -1
*/
export class PaginationHelper {
  collection: any[];
  itemsPerPage: number;

  constructor(collection: any[], itemsPerPage: number) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount(): number {
    // returns the number of items within the entire collection
    return this.collection.length;
  }

  pageCount(): number {
    // returns the number of pages
    return (
      Math.floor(this.collection.length / this.itemsPerPage) +
      (this.collection.length % this.itemsPerPage === 0 ? 0 : 1)
    );
  }

  pageItemCount(pageIndex: number) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex < 0 || pageIndex > this.pageCount() - 1) return -1;
    else if (pageIndex < this.pageCount() - 1) return this.itemsPerPage;
    else if (this.collection.length % this.itemsPerPage === 0)
      return this.itemsPerPage;
    else return this.collection.length % this.itemsPerPage;
  }

  pageIndex(itemIndex: number) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex < 0 || itemIndex > this.collection.length - 1) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
