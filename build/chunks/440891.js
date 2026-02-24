/** chunk id: 440891, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(990078),
    a = n(397927),
    o = n(775602),
    u = n(341915),
    c = n(890687),
    d = n(92246),
    m = n(453384),
    p = n(646764),
    E = n(793683),
    f = n(717415),
    v = n(985018),
    h = n(437413);
let x = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function g() {
    let {
        quest: e,
        sourceQuestContent: t,
        onClose: n
    } = i.useContext(f.VideoQuestModalContext), [g, S] = i.useState(!1), C = (0, s.bG)([o.A], () => o.A.useReducedMotion), A = i.useRef(e.userStatus?.completedAt), [_, b] = i.useState(!1), T = (0, d.mq)(e.config), {
        completedRatio: y,
        completedRatioDisplay: N
    } = (0, c.O9)(e), D = e.userStatus?.completedAt != null, L = e.userStatus?.claimedAt != null, j = v.intl.formatToPlainString(D && !L ? v.t.NRp4K4 : v.t["12IWP2"], {
        rewardName: T
    });
    i.useEffect(() => {
        null == A.current && e.userStatus?.completedAt != null && b(!0), A.current = e.userStatus?.completedAt
    }, [e.userStatus?.completedAt]);
    let I = (0, E.v)({
        quest: e,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: n,
        shouldShowShopIfAlreadyClaimed: !1
    });
    return (0, r.jsxs)("div", {
        className: h.Tr,
        children: [D && (0, r.jsx)(a.akl, {
            importData: x,
            className: h.t_,
            loop: !1,
            autoplay: !1,
            shouldAnimate: _ && !C
        }), (0, r.jsx)(l.m, {
            position: "top",
            text: j,
            onTooltipShow: () => {
                S(!0)
            },
            onTooltipHide: () => {
                S(!1)
            },
            children: (0, r.jsx)(a.DUT, {
                className: h.md,
                style: D ? {
                    cursor: "pointer"
                } : void 0,
                onClick: e => {
                    D && I(e)
                },
                children: (0, r.jsx)(m.A, {
                    size: 48,
                    percentComplete: y,
                    percentCompleteText: g ? N : void 0,
                    percentCompleteTextVariant: "text-sm/medium",
                    children: (0, r.jsx)(p.A, {
                        fullWidth: !0,
                        quest: e,
                        questContent: u.uF.VIDEO_MODAL,
                        autoplay: !1,
                        sourceQuestContent: t
                    })
                })
            })
        })]
    })
}