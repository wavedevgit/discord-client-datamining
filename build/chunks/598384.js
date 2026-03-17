/** chunk id: 598384 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153);
let r = "UPDATE_NOT_AVAILABLE";

function l(e) {
    r = e.type
}
class s extends i.Ay.Store {
    static displayName = "AutoUpdateStore";
    getState() {
        return r
    }
}
let o = new s(a.h, {
    CHECKING_FOR_UPDATES: l,
    UPDATE_NOT_AVAILABLE: l,
    UPDATE_AVAILABLE: l,
    UPDATE_MANUALLY: l,
    UPDATE_ERROR: l,
    UPDATE_DOWNLOADED: l
})