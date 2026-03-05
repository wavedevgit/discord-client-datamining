/** chunk id: 664336, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => i
});
var n = a(162160);
class i {
    top = new n.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop)
    }
    get scrollPosition() {
        return this.top
    }
}