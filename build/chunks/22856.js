/** Chunk was on web.js **/
/** chunk id: 22856, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => o,
    k: () => a
}), n(65821);
var r = n(64700),
    i = n(818348);

function a() {
    let e = r.useContext(o);
    if (null == e) throw Error("useModalContext must be used within a ModalContext.Provider");
    return e
}
let o = r.createContext({
    dismissable: !0,
    onClose: i.tE,
    id: "modal-id",
    headingId: "modal-heading-id"
})