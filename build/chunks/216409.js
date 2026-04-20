/** chunk id: 216409 params = (module,exports,require) **/
s.d(t, {
    A: () => v
});
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(990078),
    o = s(397927),
    r = s(775602),
    u = s(773669),
    d = s(252424),
    c = s(341915),
    m = s(92246),
    x = s(453384),
    g = s(646764),
    h = s(793683),
    A = s(201257),
    p = s(985018),
    C = s(693086);
let S = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));

function v() {
    let {
        quest: e,
        sourceQuestContent: t,
        onClose: s,
        progressSec: v,
        targetSec: f
    } = l.useContext(A.VideoQuestModalContext), [j, N] = l.useState(!1), O = (0, i.bG)([r.A], () => r.A.useReducedMotion), E = (0, i.bG)([u.default], () => u.default.locale), M = l.useRef(e.userStatus?.completedAt), [_, T] = l.useState(!1), y = (0, m.mq)(e.config), D = e.userStatus?.completedAt != null, V = f > 0 ? Math.min(v / f, .99) : 0, P = D ? 1 : V, L = (0, d.l9)(E, P, {
        roundingMode: "floor"
    }), b = e.userStatus?.claimedAt != null, k = p.intl.formatToPlainString(D && !b ? p.t.NRp4K4 : p.t["12IWP2"], {
        rewardName: y
    });
    l.useEffect(() => {
        null == M.current && e.userStatus?.completedAt != null && T(!0), M.current = e.userStatus?.completedAt
    }, [e.userStatus?.completedAt]);
    let I = (0, h.v)({
        quest: e,
        questContent: c.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1
    });
    return (0, n.jsxs)("div", {
        className: C.Tr,
        children: [D && (0, n.jsx)(o.akl, {
            importData: S,
            className: C.t_,
            loop: !1,
            autoplay: !1,
            shouldAnimate: _ && !O
        }), (0, n.jsx)(a.m, {
            position: "top",
            text: k,
            onTooltipShow: () => {
                N(!0)
            },
            onTooltipHide: () => {
                N(!1)
            },
            children: (0, n.jsx)(o.DUT, {
                className: C.md,
                style: D ? {
                    cursor: "pointer"
                } : void 0,
                onClick: e => {
                    D && I(e)
                },
                children: (0, n.jsx)(x.A, {
                    size: 48,
                    percentComplete: P,
                    overlayText: j ? L : void 0,
                    overlayTextVariant: "text-sm/medium",
                    children: (0, n.jsx)(g.A, {
                        fullWidth: !0,
                        quest: e,
                        questContent: c.uF.VIDEO_MODAL,
                        autoplay: !1,
                        sourceQuestContent: t
                    })
                })
            })
        })]
    })
}