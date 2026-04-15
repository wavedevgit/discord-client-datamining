/** chunk id: 945830 params = (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(134528), n(947204);
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(582754),
    r = n(397927),
    o = n(687709),
    c = n(964486),
    d = n(202803),
    u = n(145530),
    h = n(835835),
    m = n(544028),
    A = n(966833),
    g = n(222823),
    _ = n(985018);
let p = [];

function f(e) {
    let {
        channel: t,
        onJump: f
    } = e, {
        items: E,
        state: C
    } = (0, a.cf)([A.A], () => {
        let e = A.A.getPins(t.id);
        return {
            items: e?.items ?? p,
            state: e?.state ?? A.e.LOADING
        }
    }), x = l.useMemo(() => E.map(e => e.message), [E]), S = (0, a.bG)([g.Ay], () => g.Ay.hasUnreadPins(t.id));
    l.useEffect(() => {
        S && o.A.ackPins(t.id)
    }, [S, t.id]), (0, c.Ay)(() => {
        x.some(d.$r) && o.A.fetchPins(t.id, {
            reset: !0
        })
    });
    let I = l.useCallback(() => {
            o.A.fetchPins(t.id)
        }, [t.id]),
        T = l.useCallback(() => {
            o.A.fetchPins(t.id, {
                before: E.at(-1)?.pinnedAt
            })
        }, [t.id, E]),
        v = (0, a.bG)([m.A], () => (0, s.qB)(m.A.theme));
    return (0, i.jsx)(r.lGe, {
        "aria-label": _.intl.string(_.t["mp1N/2"]),
        children: (0, i.jsx)(h.Ay, {
            channel: t,
            onFetch: I,
            messages: x,
            loading: C === A.e.LOADING,
            hasMore: C === A.e.LOADED_HAS_MORE,
            analyticsName: "Channel Pins",
            renderEmptyState: function() {
                if (E.length > 0) return;
                let e = _.intl.string(t.isPrivate() ? _.t.rhqcbJ : _.t.fmyaWJ),
                    l = v ? n(395236) : n(90367);
                return (0, i.jsx)(h.u9, {
                    msg: e,
                    image: l
                }, "emptystate")
            },
            renderHeader: () => (0, i.jsx)(h.Y9, {
                icon: r.tsw,
                title: _.intl.string(_.t["mp1N/2"])
            }),
            onCloseMessage: function(e, n) {
                null != e && (n.shiftKey ? o.A.unpinMessage(t, e.id) : u.A.confirmUnpin(t, e))
            },
            onJump: f,
            loadMore: T,
            getProTip: function() {
                return t.isPrivate() ? _.intl.string(_.t["3dLGAs"]) : _.intl.string(_.t.KTbRcg)
            },
            listName: "pins",
            closeAriaLabel: _.intl.string(_.t["Bse+F/"])
        })
    })
}