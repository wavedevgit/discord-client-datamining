/** chunk id: 664336 params = (module,exports,require) **/
a.d(t, {
    A: () => i
});
var n = a(773690);
class i {
    top = new n.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop)
    }
    get scrollPosition() {
        return this.top
    }
}