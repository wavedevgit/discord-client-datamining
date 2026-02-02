/** chunk id: 440891, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(311907),
    i = n(990078),
    s = n(397927),
    a = n(775602),
    c = n(341915),
    u = n(890687),
    d = n(92246),
    p = n(453384),
    f = n(646764),
    m = n(793683),
    v = n(717415),
    b = n(985018),
    E = n(500271);
let g = async () => await n.e("40119").then(n.t.bind(n, 718698, 19));

function h(e) {
    var t, n, h, y;
    let {
        tooltipPosition: O
    } = e, {
        quest: S,
        sourceQuestContent: _,
        onClose: C
    } = l.useContext(v.VideoQuestModalContext), [x, A] = l.useState(!1), j = (0, o.bG)([a.A], () => a.A.useReducedMotion), T = l.useRef(null == (t = S.userStatus) ? void 0 : t.completedAt), [D, w] = l.useState(!1), N = (0, d.mq)(S.config), {
        completedRatio: P,
        completedRatioDisplay: I
    } = (0, u.O9)(S), L = (null == (n = S.userStatus) ? void 0 : n.completedAt) != null, R = (null == (h = S.userStatus) ? void 0 : h.claimedAt) != null, k = b.intl.formatToPlainString(L && !R ? b.t.NRp4K4 : b.t["12IWP2"], {
        rewardName: N
    });
    l.useEffect(() => {
        var e, t;
        null == T.current && (null == (e = S.userStatus) ? void 0 : e.completedAt) != null && w(!0), T.current = null == (t = S.userStatus) ? void 0 : t.completedAt
    }, [null == (y = S.userStatus) ? void 0 : y.completedAt]);
    let M = (0, m.v)({
        quest: S,
        questContent: c.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: _,
        onCloseModal: C,
        shouldShowShopIfAlreadyClaimed: !1
    });
    return (0, r.jsxs)("div", {
        className: E.Tr,
        children: [L && (0, r.jsx)(s.akl, {
            importData: g,
            className: E.t_,
            loop: !1,
            autoplay: !1,
            shouldAnimate: D && !j
        }), (0, r.jsx)(i.m, {
            position: O,
            text: k,
            onTooltipShow: () => {
                A(!0)
            },
            onTooltipHide: () => {
                A(!1)
            },
            children: (0, r.jsx)(s.DUT, {
                className: E.md,
                style: L ? {
                    cursor: "pointer"
                } : void 0,
                onClick: e => {
                    L && M(e)
                },
                children: (0, r.jsx)(p.A, {
                    quest: S,
                    size: 48,
                    percentComplete: P,
                    percentCompleteText: x ? I : void 0,
                    percentCompleteTextVariant: "text-sm/medium",
                    children: (0, r.jsx)(f.A, {
                        className: E.vt,
                        quest: S,
                        questContent: c.uF.VIDEO_MODAL,
                        autoplay: !1,
                        sourceQuestContent: _
                    })
                })
            })
        })]
    })
}