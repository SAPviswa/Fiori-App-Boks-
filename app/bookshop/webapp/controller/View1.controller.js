sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.app.bookshop.controller.View1", {
            onInit: function () {

            },
            onGoPress: function () {
                const oView = this.getView(),
                    iIDFilter = oView.byId("idIDFilterValue"),
                    iIDFilterValue = iIDFilter.getValue(),
                    iTitleFilter = oView.byId("idTitleFilterValue"),
                    iTitleFilterValue = iTitleFilter.getValue(),
                    sStockFilterLabel = oView.byId("idStockFilterValue"),
                    sStockValue = sStockFilterLabel.getValue(),
                    sGenreFilterLabel = oView.byId("idGenreFilterValue"),
                    sGenreValue = sGenreFilterLabel.getValue(),
                    oTable = oView.byId("idBooksTable"),
                    aFilters = [];

                iIDFilterValue ? aFilters.push(new Filter("ID", FilterOperator.EQ, iIDFilterValue)) : "";
                // oTable.getBinding("items").filter(aFilters);
                
                iTitleFilterValue ? aFilters.push(new Filter("title", FilterOperator.EQ, iTitleFilterValue)) : "";
                // oTable.getBinding("items").filter(aFilters);
                                
                sStockValue ? aFilters.push(new Filter("stock", FilterOperator.EQ, sStockValue)) : "";
                // oTable.getBinding("items").filter(aFilters);
                                                
                sGenreValue ? aFilters.push(new Filter("genre", FilterOperator.EQ, sGenreValue)) : "";

                
                oTable.getBinding("items").filter(aFilters);
            },
            
            onClearFilterPress: function () {
                const oView = this.getView(),
                iIDFilter = oView.byId("idIDFilterValue"),
                iTitleFilter = oView.byId("idTitleFilterValue"),
                sStockFilterLabel = oView.byId("idStockFilterValue"),
                sGenreFilterLabel = oView.byId("idGenreFilterValue"),
                 oTable = oView.byId("idEmployeeTable");
    
                    iIDFilter.setValue("");
                    iTitleFilter.setValue("");
                    sStockFilterLabel.setValue("");
                    sGenreFilterLabel.setValue("");

                oTable.getBinding("items").filter([]);
            }
            
        });
    });
