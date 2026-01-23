/** Chunk was on 77828 **/
/** chunk id: 491390, original params: e,r,t (module,exports,require) **/
"use strict";
t.d(r, {
    default: () => p
}), t(896048), t(693327), t(554719), t(680155), t(323874), t(14289), t(35956);
var n = t(627968),
    o = t(64700),
    s = t(158954),
    i = t(414121),
    a = t(985018),
    l = t(194536);
let c = [],
    p = function(e) {
        let {
            transitionState: r,
            onClose: t,
            questId: p
        } = e, u = o.useMemo(() => {
            let e = new URL("".concat(window.location.origin, "/quests/").concat(p));
            return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString()
        }, [p]);
        return (0, n.jsx)(s.Modal, {
            actions: c,
            onClose: t,
            size: "md",
            subtitle: a.intl.string(a.t.bBTjR9),
            title: a.intl.string(a.t.g3jrBu),
            transitionState: r,
            children: (0, n.jsx)("div", {
                className: l.m,
                children: (0, n.jsx)(i.Lx, {
                    size: 200,
                    text: u,
                    overlaySize: i.Zs.SIZE_40
                })
            })
        })
    }