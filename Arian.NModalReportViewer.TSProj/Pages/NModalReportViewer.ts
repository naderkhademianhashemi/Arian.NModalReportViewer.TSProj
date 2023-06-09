﻿class NModalReportViewer extends Card {
    constructor($mainPage: JQuery) {
        super(' ');

        this.$card.appendTo($mainPage);

        var $row = $('<div class="row" />').appendTo(this.$body);
        var $col4 = $('<div class="col col-4" />').append('&nbsp;').appendTo($row);
        var $col8 = $('<div class="col col-8 text-left" />').appendTo($row);

        var $actions = $('<div class="display-inline-block" />').appendTo($col4);

        Button("NDR", ev => new ModalReportViewer("NDR","")).appendTo($actions.append(' '));



    }
}

$(function () {
     new NModalReportViewer($("#mainPage"));

})