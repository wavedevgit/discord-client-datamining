/** chunk id: 216409 params = (module,exports,require) **/
s.d(t, {
    A: () => f
});
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(990078),
    o = s(397927),
    r = s(775602),
    u = s(773669),
    c = s(252424),
    d = s(341915),
    m = s(92246),
    x = s(453384),
    g = s(646764),
    h = s(793683),
    A = s(201257),
    C = s(985018),
    p = s(693086);
let S = async () => await s.e("40119").then(s.t.bind(s, 718698, 19));

function f() {
    let {
        quest: e,
        sourceQuestContent: t,
        onClose: s,
        progressSec: f,
        targetSec: v
    } = l.useContext(A.VideoQuestModalContext), [j, N] = l.useState(!1), O = (0, i.bG)([r.A], () => r.A.useReducedMotion), E = (0, i.bG)([u.default], () => u.default.locale), _ = l.useRef(e.userStatus?.completedAt), [M, T] = l.useState(!1), y = (0, m.mq)(e.config), D = e.userStatus?.completedAt != null, V = v > 0 ? Math.min(f / v, .99) : 0, P = D ? 1 : V, k = (0, c.l9)(E, P, {
        roundingMode: "floor"
    }), L = e.userStatus?.claimedAt != null, b = C.intl.formatToPlainString(D && !L ? C.t.NRp4K4 : C.t["12IWP2"], {
        rewardName: y
    });
    l.useEffect(() => {
        null == _.current && e.userStatus?.completedAt != null && T(!0), _.current = e.userStatus?.completedAt
    }, [e.userStatus?.completedAt]);
    let I = (0, h.v)({
        quest: e,
        questContent: d.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: s,
        shouldShowShopIfAlreadyClaimed: !1
    });
    return (0, n.jsxs)("div", {
        className: p.Tr,
        children: [D && (0, n.jsx)(o.akl, {
            importData: S,
            className: p.t_,
            loop: !1,
            autoplay: !1,
            shouldAnimate: M && !O
        }), (0, n.jsx)(a.m, {
            position: "top",
            text: b,
            onTooltipShow: () => {
                N(!0)
            },
            onTooltipHide: () => {
                N(!1)
            },
            children: (0, n.jsx)(o.DUT, {
                className: p.md,
                style: D ? {
                    cursor: "pointer"
                } : void 0,
                onClick: e => {
                    D && I(e)
                },
                children: (0, n.jsx)(x.A, {
                    size: 48,
                    percentComplete: P,
                    overlayText: j ? k : void 0,
                    overlayTextVariant: "text-sm/medium",
                    children: (0, n.jsx)(g.A, {
                        fullWidth: !0,
                        quest: e,
                        questContent: d.uF.VIDEO_MODAL,
                        autoplay: !1,
                        sourceQuestContent: t
                    })
                })
            })
        })]
    })
}