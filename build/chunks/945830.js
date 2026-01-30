/** chunk id: 945830, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(134528), n(947204);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(582754),
    a = n(397927),
    o = n(687709),
    c = n(964486),
    u = n(202803),
    d = n(145530),
    h = n(835835),
    p = n(544028),
    g = n(966833),
    f = n(222823),
    m = n(985018);
let b = [];

function A(e) {
    let {
        channel: t,
        onJump: A
    } = e, {
        items: y,
        state: O
    } = (0, i.cf)([g.A], () => {
        var e, n;
        let r = g.A.getPins(t.id);
        return {
            items: null != (e = null == r ? void 0 : r.items) ? e : b,
            state: null != (n = null == r ? void 0 : r.state) ? n : g.e.LOADING
        }
    }), _ = l.useMemo(() => y.map(e => e.message), [y]), j = (0, i.bG)([f.Ay], () => f.Ay.hasUnreadPins(t.id));
    l.useEffect(() => {
        j && o.A.ackPins(t.id)
    }, [j, t.id]), (0, c.Ay)(() => {
        _.some(u.$r) && o.A.fetchPins(t.id, {
            reset: !0
        })
    });
    let x = l.useCallback(() => {
            o.A.fetchPins(t.id)
        }, [t.id]),
        v = l.useCallback(() => {
            var e;
            o.A.fetchPins(t.id, {
                before: null == (e = y.at(-1)) ? void 0 : e.pinnedAt
            })
        }, [t.id, y]),
        E = (0, i.bG)([p.A], () => (0, s.qB)(p.A.theme));
    return (0, r.jsx)(a.lGe, {
        "aria-label": m.intl.string(m.t["mp1N/2"]),
        children: (0, r.jsx)(h.Ay, {
            channel: t,
            onFetch: x,
            messages: _,
            loading: O === g.e.LOADING,
            hasMore: O === g.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function() {
                if (y.length > 0) return;
                let e = m.intl.string(t.isPrivate() ? m.t.rhqcbJ : m.t.fmyaWJ),
                    l = E ? n(395236) : n(90367);
                return (0, r.jsx)(h.u9, {
                    msg: e,
                    image: l
                }, "emptystate")
            },
            renderHeader: () => (0, r.jsx)(h.Y9, {
                icon: a.tsw,
                title: m.intl.string(m.t["mp1N/2"])
            }),
            onCloseMessage: function(e, n) {
                null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : d.A.confirmUnpin(t, e))
            },
            onJump: A,
            loadMore: v,
            getProTip: function() {
                return t.isPrivate() ? m.intl.string(m.t["3dLGAs"]) : m.intl.string(m.t.KTbRcg)
            },
            listName: "pins",
            closeAriaLabel: m.intl.string(m.t["Bse+F/"])
        })
    })
}