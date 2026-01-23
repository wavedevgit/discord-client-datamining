/** Chunk was on 95153 **/
/** chunk id: 616621, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(114821), n(339614);
var i = n(627968),
    r = n(311907),
    l = n(397927),
    a = n(398590),
    o = n(944771),
    c = n(3258),
    s = n(287809),
    d = n(652215);

function u() {
    if (!(0, r.bG)([s.default], () => {
            var e, t;
            return (null == (e = s.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0 || (null == (t = s.default.getCurrentUser()) ? void 0 : t.isStaffPersonal()) === !0
        })) return null;
    let e = o.componentPlaygroundConfigs.flatMap(e => e.collections);
    return (0, i.jsx)(l.Drp, {
        id: "playgrounds",
        label: "Playgrounds",
        action: () => {
            c.PlaygroundStore.setState({
                selectedCollection: null,
                selectedStory: null
            }), (0, a.id)(d.zgK.COMPONENT_PLAYGROUND)
        },
        children: (0, i.jsx)(l.rXV, {
            children: e.map(e => (0, i.jsx)(l.Drp, {
                id: "".concat(e.id, "-playground"),
                label: e.name,
                action: () => {
                    c.PlaygroundStore.setState({
                        selectedCollection: e.id,
                        selectedStory: null
                    }), (0, a.id)(d.zgK.COMPONENT_PLAYGROUND)
                }
            }, e.id))
        }, "design-systems")
    }, "playgrounds")
}