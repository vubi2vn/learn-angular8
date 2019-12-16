import { Component, OnInit, Input } from "@angular/core";
import { PropertyWrite } from '@angular/compiler';

@Component({
  templateUrl: "./unitlist.component.html",
  selector: "app-unitlist",
  styleUrls: ["./unitlist.component.css"]
})
export class UnitListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor() {}

  arrUnitList = [
    { id: 0, DVT: "KG", Name: "Kg", Note: "" },
    { id: 1, DVT: "LIT", Name: "Lít", Note: "" },
    { id: 2, DVT: "TAN", Name: "Tấn", Note: "" },
    { id: 3, DVT: "THUNG", Name: "Thùng", Note: "" },
    { id: 4, DVT: "CAN", Name: "Can 20 lít", Note: "" }
  ];

  public tmpDVT: string;
  public tmpName: string;
  public tmpNote: string;

  addNewItem() {
    this.arrUnitList.push({
      id: this.arrUnitList.length,
      DVT: this.tmpDVT,
      Name: this.tmpName,
      Note: this.tmpNote
    });
    this.tmpDVT = "";
    this.tmpName = "";
    this.tmpNote = "";
  }

  removeItem(id: number) {
    let confirmResult = confirm("Bạn có chắc muốn xóa dữ liệu không ?");
    if (confirmResult) {
      const index = this.arrUnitList.findIndex(item => item.id === id);
      this.arrUnitList.splice(index, 1);
    }
  }

  swapItem(after: number, before: number) {
    [this.arrUnitList[after].id, this.arrUnitList[before].id] = [this.arrUnitList[before].id,this.arrUnitList[after].id];
    [this.arrUnitList[after], this.arrUnitList[before]] = [this.arrUnitList[before],this.arrUnitList[after]];
  }

  updateItem(id: number) {
    alert("Xin thứ lỗi! Chức năng chưa hoàn thành");
    // const index = this.arrUnitList.findIndex(item => item.id === id);
    
  }

  Search() {
    alert("Xin thứ lỗi! Chức năng chưa hoàn thành");
  }
}
