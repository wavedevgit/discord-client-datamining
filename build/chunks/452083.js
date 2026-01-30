/** chunk id: 452083, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
var r = {};
r = {
    deselectedItem: e => `${e.item} nije izabrano.`,
    longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
    select: "Izaberite",
    selectedAll: "Izabrane su sve stavke.",
    selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Nije izabrana nijedna stavka",one:()=>`Izabrana je ${t.number(e.count)} stavka`,other:()=>`Izabrano je ${t.number(e.count)} stavki`})}.`,
    selectedItem: e => `${e.item} je izabrano.`
}