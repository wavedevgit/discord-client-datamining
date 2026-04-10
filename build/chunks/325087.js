/** chunk id: 325087 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    l = n(64700),
    r = n(342494),
    a = n(976860),
    s = n(652215),
    o = n(985018),
    d = n(78701);

function c(e) {
    let {
        onNavigateToQuestHome: t,
        onRender: n,
        onRequestClose: c,
        targetElementRef: u
    } = e, A = l.useCallback(() => {
        t(), (0, a.pX)(s.BVt.QUEST_HOME)
    }, [t]);
    return l.useEffect(() => {
        n()
    }, [n]), (0, i.jsx)(r.AM, {
        actions: [{
            text: o.intl.string(o.t.facYnD),
            variant: "primary",
            onClick: A
        }],
        alignmentStrategy: "edge",
        align: "top",
        body: o.intl.string(o.t.o4NGXc),
        caretConfig: {
            align: "start"
        },
        gradientColor: "purple",
        graphic: {
            type: "image",
            src: d.A
        },
        onRequestClose: c,
        position: "right",
        size: "lg",
        targetElementRef: u,
        title: o.intl.string(o.t.EDDchq)
    })
}