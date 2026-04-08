/** chunk id: 407217 params = (module,exports,require) **/
s.d(e, {
    K: () => o,
    default: () => l
});
var n = s(627968);
s(64700);
var i = s(397927),
    c = s(87719),
    a = s(244975),
    r = s(985018),
    d = s(880223);

function o(t) {
    let {
        onSubscribeFinish: e,
        stackingBehavior: c
    } = t;
    (0, i.mMO)(async () => {
        let {
            default: t
        } = await Promise.resolve().then(s.bind(s, 407217));
        return s => (0, n.jsx)(t, {
            onSubscribeFinish: e,
            ...s
        })
    }, {
        stackingBehavior: c
    })
}

function l(t) {
    let {
        onClose: e,
        ...s
    } = t;
    return (0, n.jsx)(a.F, {
        title: r.intl.string(r.t.reVc0M),
        subtitle: r.intl.string(r.t.KckEj7),
        graphic: {
            src: d.A,
            type: "image"
        },
        onSecondaryClick: () => {
            (0, c.x)(e)
        },
        secondaryCTA: r.intl.string(r.t.PcTCB7),
        onClose: e,
        ...s
    })
}