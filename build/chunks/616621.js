/** chunk id: 616621, original params: e,i,n (module,exports,require) **/
n.d(i, {
    A: () => c
});
var l = n(627968),
    r = n(397927),
    t = n(398590),
    d = n(790271),
    o = n(944771),
    a = n(3258),
    s = n(652215);

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i = (0, d.ni)("playground_menu"),
        n = (0, o.useComponentPlaygroundConfigs)(i);
    if (!i) return null;
    let c = n.flatMap(e => e.collections);
    return (0, l.jsx)(r.Drp, {
        id: "playgrounds",
        label: "Playgrounds",
        leadingAccessory: e ? {
            type: "icon",
            icon: r.RgP
        } : void 0,
        action: () => {
            a.PlaygroundStore.setState({
                selectedCollection: null,
                selectedStory: null
            }), (0, t.id)(s.zgK.COMPONENT_PLAYGROUND)
        },
        children: (0, l.jsx)(r.rXV, {
            children: c.map(e => (0, l.jsx)(r.Drp, {
                id: `${e.id}-playground`,
                label: e.name,
                action: () => {
                    a.PlaygroundStore.setState({
                        selectedCollection: e.id,
                        selectedStory: null
                    }), (0, t.id)(s.zgK.COMPONENT_PLAYGROUND)
                }
            }, e.id))
        }, "design-systems")
    }, "playgrounds")
}