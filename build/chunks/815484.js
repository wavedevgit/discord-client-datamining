/** chunk id: 815484, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => a
});
var l = n(284009),
    r = n.n(l),
    i = n(403918);

function a(t) {
    if (t !== i.yt.TODAY) return r()("number" == typeof t, "Invalid custom status clear timeout"), t;
    {
        let t = new Date;
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime()
    }
}