/** chunk id: 193660, original params: t,e,i (module,exports,require) **/
i.d(e, {
    w: () => S
});
var n = i(311907),
    l = i(955572),
    s = i(775602),
    a = i(688810),
    r = i(259065),
    u = i(419954),
    o = i(780964),
    d = i(358776),
    A = i(985018),
    T = i(927961);
let S = (0, u.zD)(o.X.DISPLAY_NAME_STYLES, {
    useTitle: () => A.intl.string(T.default["2gFUEw"]),
    useSubtitle: () => {
        let {
            analyticsLocations: t
        } = (0, a.Ay)(), e = (0, d.bp)("DisplayNameStyles");
        return A.intl.format(e ? T.default.aEax6P : T.default.L8U56h, {
            onClickOpenModal() {
                (0, r.L)({
                    analyticsLocations: t
                })
            }
        })
    },
    useValue: () => (0, n.bG)([s.A], () => s.A.displayNameStylesEnabled),
    setValue: t => (0, l.Dm)(t)
})