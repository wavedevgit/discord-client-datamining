/** chunk id: 945830 params = (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(582754),
    r = n(397927),
    o = n(687709),
    c = n(964486),
    d = n(202803),
    u = n(145530),
    h = n(835835),
    m = n(544028),
    A = n(966833),
    g = n(222823),
    p = n(985018);
let f = [];

function _(e) {
    let {
        channel: t,
        onJump: _
    } = e, {
        items: E,
        state: x
    } = (0, s.cf)([A.A], () => {
        let e = A.A.getPins(t.id);
        return {
            items: e?.items ?? f,
            state: e?.state ?? A.e.LOADING
        }
    }), C = l.useMemo(() => E.map(e => e.message), [E]), S = (0, s.bG)([g.Ay], () => g.Ay.hasUnreadPins(t.id));
    l.useEffect(() => {
        S && o.A.ackPins(t.id)
    }, [S, t.id]), (0, c.Ay)(() => {
        C.some(d.$r) && o.A.fetchPins(t.id, {
            reset: !0
        })
    });
    let T = l.useCallback(() => {
            o.A.fetchPins(t.id)
        }, [t.id]),
        N = l.useCallback(() => {
            o.A.fetchPins(t.id, {
                before: E.at(-1)?.pinnedAt
            })
        }, [t.id, E]),
        I = (0, s.bG)([m.A], () => (0, a.qB)(m.A.theme));
    return (0, i.jsx)(r.lGe, {
        "aria-label": p.intl.string(p.t["mp1N/2"]),
        children: (0, i.jsx)(h.Ay, {
            channel: t,
            onFetch: T,
            messages: C,
            loading: x === A.e.LOADING,
            hasMore: x === A.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function() {
                if (E.length > 0) return;
                let e = p.intl.string(t.isPrivate() ? p.t.rhqcbJ : p.t.fmyaWJ),
                    l = I ? n(395236) : n(90367);
                return (0, i.jsx)(h.u9, {
                    msg: e,
                    image: l
                }, "emptystate")
            },
            renderHeader: () => (0, i.jsx)(h.Y9, {
                icon: r.tsw,
                title: p.intl.string(p.t["mp1N/2"])
            }),
            onCloseMessage: function(e, n) {
                null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : u.A.confirmUnpin(t, e))
            },
            onJump: _,
            loadMore: N,
            getProTip: function() {
                return t.isPrivate() ? p.intl.string(p.t["3dLGAs"]) : p.intl.string(p.t.KTbRcg)
            },
            listName: "pins",
            closeAriaLabel: p.intl.string(p.t["Bse+F/"])
        })
    })
}