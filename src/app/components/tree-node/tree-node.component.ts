import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Children } from '../../models/childrennode.interface';
import { ControlFlatNode } from '../../models/controlflatnode.interface';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BookcategoryService } from '../../service/bookcategory.service';
import { ResponseInfo } from '../../models/response-info.interface';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeNodeComponent implements OnInit {

  private _transformer = (node: Children, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ControlFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private bookCategoryService: BookcategoryService) {
    // this.dataSource.data = EXAMPLE_DATA;
  }

  public ngOnInit(): void {
    this.cargarDatos();
  }

  hasChild = (_: number, node: ControlFlatNode) => node.expandable;

  public cargarDatos(): void {
    this.bookCategoryService
      .getNodeList('', '')
      .subscribe({
        next: (value: ResponseInfo) => {
          if (value && value.data) {
            this.dataSource.data = value.data;
          }
        },
        error: (err) => console.log(err)
      });
  }
}
