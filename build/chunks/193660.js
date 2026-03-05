/** chunk id: 193660 params = (module,exports,require) **/
n.d(t, {
    w: () => g
});
var i = n(311907),
    s = n(955572),
    l = n(775602),
    a = n(688810),
    r = n(259065),
    o = n(419954),
    d = n(780964),
    c = n(358776),
    u = n(985018),
    _ = n(241015);
let g = (0, o.zD)(d.X.DISPLAY_NAME_STYLES, {
    useTitle: () => u.intl.string(_.default["2gFUEw"]),
    useSubtitle: () => {
        let {
            analyticsLocations: e
        } = (0, a.Ay)(), t = (0, c.bp)("DisplayNameStyles");
        return u.intl.format(t ? _.default.aEax6P : _.default.L8U56h, {
            onClickOpenModal() {
                (0, r.L)({
                    analyticsLocations: e
                })
            }
        })
    },
    useValue: () => (0, i.bG)([l.A], () => l.A.displayNameStylesEnabled),
    setValue: e => (0, s.Dm)(e)
})