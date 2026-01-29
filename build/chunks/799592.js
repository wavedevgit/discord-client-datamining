/** Chunk was on 2827 **/
/** chunk id: 799592, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => r
});
let r = {
    binds: ["shift+f10"],
    comboKeysBindGlobal: !0,
    action() {
        let e = document.activeElement;
        return null != e && e !== document.body && (e.dispatchEvent(new MouseEvent("contextmenu", {
            bubbles: !0,
            cancelable: !0,
            view: window,
            clientX: 0,
            clientY: 0
        })), !1)
    }
}