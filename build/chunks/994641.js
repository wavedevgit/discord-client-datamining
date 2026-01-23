/** Chunk was on 21738 **/
/** chunk id: 994641, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(554146),
    u = n(342494),
    d = n(379848),
    p = n(58736),
    h = n(796104),
    g = n(719718),
    f = n(146104),
    m = n(861044),
    A = n(49999),
    _ = n(622865),
    b = n(985018),
    E = n(415449);

function O(e) {
    let {
        className: t
    } = e, [n, l] = (0, d.kn)([c.M.CHECKPOINT_2025_DESKTOP_UPSELL]), O = (0, o.bG)([g.A], () => g.A.hasOpenedCheckpointThisSession && !g.A.hasSeenRewatchPopover), y = i.useRef(null), I = n === c.M.CHECKPOINT_2025_DESKTOP_UPSELL, v = () => {
        (0, h._5)()
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.In, {
            ref: y,
            className: t,
            onClick: () => {
                (0, f.A)("header_bar"), I && l(A.i.INDIRECT_ACTION)
            },
            icon: s.MZT,
            tooltip: b.intl.string(_.default["CdU/PF"]),
            foreground: a()(E.t, I ? E.m : null)
        }), !I && O && (0, r.jsx)(u.AM, {
            targetElementRef: y,
            title: b.intl.string(_.default.goiR2u),
            body: b.intl.string(_.default.UYjWa5),
            onRequestClose: v,
            actions: [{
                text: b.intl.string(b.t["NX+WJN"]),
                onClick: v
            }]
        }), I && (0, r.jsx)(m.A, {
            markAsDismissed: l
        })]
    })
}