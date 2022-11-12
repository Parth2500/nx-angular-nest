import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './component/accordion/accordion.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { AvatarGroupComponent } from './component/avatar-group/avatar-group.component';
import { BadgeComponent } from './component/badge/badge.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { ButtonComponent } from './component/button/button.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { CardComponent } from './component/card/card.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { ChartComponent } from './component/chart/chart.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { ChipComponent } from './component/chip/chip.component';
import { ColorPickerComponent } from './component/color-picker/color-picker.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { ConfirmPopupComponent } from './component/confirm-popup/confirm-popup.component';
import { ContextMenuComponent } from './component/context-menu/context-menu.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { EditerComponent } from './component/editer/editer.component';
import { FieldsetComponent } from './component/fieldset/fieldset.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { InputComponent } from './component/input/input.component';
import { ListboxComponent } from './component/listbox/listbox.component';
import { MenuComponent } from './component/menu/menu.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { MultiSelectComponent } from './component/multi-select/multi-select.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { PaginatorComponent } from './component/paginator/paginator.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './component/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './component/radio-button/radio-button.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TableComponent } from './component/table/table.component';
import { TabViewComponent } from './component/tab-view/tab-view.component';
import { TagComponent } from './component/tag/tag.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { ToastComponent } from './component/toast/toast.component';
import { TooltipComponent } from './component/tooltip/tooltip.component';

const components = [
  AccordionComponent,
  AvatarComponent,
  AvatarGroupComponent,
  BadgeComponent,
  BreadcrumbComponent,
  ButtonComponent,
  CalendarComponent,
  CardComponent,
  CarouselComponent,
  ChartComponent,
  CheckboxComponent,
  ChipComponent,
  ColorPickerComponent,
  ConfirmDialogComponent,
  ConfirmPopupComponent,
  ContextMenuComponent,
  DialogComponent,
  DropdownComponent,
  EditerComponent,
  FieldsetComponent,
  FileUploadComponent,
  InputComponent,
  ListboxComponent,
  MenuComponent,
  MenubarComponent,
  MultiSelectComponent,
  OrderListComponent,
  PaginatorComponent,
  ProgressBarComponent,
  ProgressSpinnerComponent,
  RadioButtonComponent,
  SidebarComponent,
  TableComponent,
  TabViewComponent,
  TagComponent,
  TimelineComponent,
  ToastComponent,
  TooltipComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components],
})
export class UiModule {}
