/** chunk id: 359047 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(397927),
    s = i(770666),
    r = i(823508),
    a = i(985018);

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        d = (0, s.A)(e),
        c = (0, r.A)();
    return d ? (0, n.jsx)(l.Drp, {
        id: "create-event",
        label: a.intl.string(a.t["60lJ0C"]),
        icon: t ? l.UC$ : void 0,
        leadingAccessory: t ? {
            type: "icon",
            icon: l.UC$
        } : void 0,
        action: () => {
            (0, l.mMO)(async () => {
                let {
                    default: t
                } = await Promise.all([i.e("68587"), i.e("51354"), i.e("342"), i.e("90749")]).then(i.bind(i, 21653));
                return i => (0, n.jsx)(t, {
                    ...i,
                    guildId: e
                })
            }, c)
        }
    }) : null
}