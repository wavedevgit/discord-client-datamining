/** chunk id: 815484, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(284009),
    i = n.n(l),
    a = n(403918);

function r(e) {
    if (e !== a.yt.TODAY) return i()("number" == typeof e, "Invalid custom status clear timeout"), e;
    {
        let e = new Date;
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime()
    }
}