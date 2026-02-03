/** chunk id: 945830, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(134528), n(947204);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(582754),
    s = n(397927),
    o = n(687709),
    c = n(964486),
    u = n(202803),
    d = n(145530),
    h = n(835835),
    p = n(544028),
    f = n(966833),
    m = n(222823),
    g = n(985018);
let A = [];

function b(e) {
    let {
        channel: t,
        onJump: b
    } = e, {
        items: _,
        state: y
    } = (0, i.cf)([f.A], () => {
        var e, n;
        let l = f.A.getPins(t.id);
        return {
            items: null != (e = null == l ? void 0 : l.items) ? e : A,
            state: null != (n = null == l ? void 0 : l.state) ? n : f.e.LOADING
        }
    }), v = r.useMemo(() => _.map(e => e.message), [_]), E = (0, i.bG)([m.Ay], () => m.Ay.hasUnreadPins(t.id));
    r.useEffect(() => {
        E && o.A.ackPins(t.id)
    }, [E, t.id]), (0, c.Ay)(() => {
        v.some(u.$r) && o.A.fetchPins(t.id, {
            reset: !0
        })
    });
    let O = r.useCallback(() => {
            o.A.fetchPins(t.id)
        }, [t.id]),
        C = r.useCallback(() => {
            var e;
            o.A.fetchPins(t.id, {
                before: null == (e = _.at(-1)) ? void 0 : e.pinnedAt
            })
        }, [t.id, _]),
        S = (0, i.bG)([p.A], () => (0, a.qB)(p.A.theme));
    return (0, l.jsx)(s.lGe, {
        "aria-label": g.intl.string(g.t["mp1N/2"]),
        children: (0, l.jsx)(h.Ay, {
            channel: t,
            onFetch: O,
            messages: v,
            loading: y === f.e.LOADING,
            hasMore: y === f.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function() {
                if (_.length > 0) return;
                let e = g.intl.string(t.isPrivate() ? g.t.rhqcbJ : g.t.fmyaWJ),
                    r = S ? n(395236) : n(90367);
                return (0, l.jsx)(h.u9, {
                    msg: e,
                    image: r
                }, "emptystate")
            },
            renderHeader: () => (0, l.jsx)(h.Y9, {
                icon: s.tsw,
                title: g.intl.string(g.t["mp1N/2"])
            }),
            onCloseMessage: function(e, n) {
                null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : d.A.confirmUnpin(t, e))
            },
            onJump: b,
            loadMore: C,
            getProTip: function() {
                return t.isPrivate() ? g.intl.string(g.t["3dLGAs"]) : g.intl.string(g.t.KTbRcg)
            },
            listName: "pins",
            closeAriaLabel: g.intl.string(g.t["Bse+F/"])
        })
    })
}