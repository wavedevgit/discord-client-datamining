/** chunk id: 325326, original params: e,t,n (module,exports,require) **/
n.d(t, {
    LF: () => p
}), n(896048);
var r = n(64700),
    l = n(311907),
    i = n(334738),
    s = n(964459),
    a = n(187508),
    o = n(245205),
    c = n(252431),
    u = n(810153),
    d = n(790782);
let p = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: p,
        loadMore: h
    } = (e => {
        let {
            isFocused: t,
            navigatedAway: n,
            isDesktop: p,
            withMentions: h = !1,
            initialPageSize: g
        } = e, f = (0, l.bG)([u.A], () => u.A.shouldReload()), m = r.useRef(!1), [b, A] = r.useState(!1), {
            initialized: y,
            loading: O,
            items: j,
            hasMore: x,
            cursor: _,
            errored: v
        } = (0, l.cf)([c.A], () => ({
            initialized: c.A.initialized,
            loading: c.A.loading,
            items: c.A.items,
            hasMore: c.A.hasMore,
            cursor: c.A.cursor,
            errored: c.A.errored
        })), {
            roleFilter: E,
            everyoneFilter: C
        } = (0, l.cf)([a.Ay], () => ({
            everyoneFilter: a.Ay.everyoneFilter,
            roleFilter: a.Ay.roleFilter
        }));
        r.useEffect(() => ((0, o.BZ)(!0), () => (0, o.BZ)(!1)), []), r.useEffect(() => {
            y && t && (0, i.d_)(d.P.NOTIFICATION_CENTER)
        }, [t, y]);
        let S = (0, s.A)();
        r.useEffect(() => () => {
            p ? !S() && (v || j.length > 100) && (0, o.S3)() : n && j.length > 100 && (0, o.S3)()
        }, [n, j, p, S, v]), r.useEffect(() => {
            let e = f && t;
            (!y || e) && (0, o.ni)({
                limit: null != g ? g : h ? 8 : 20,
                with_mentions: h,
                roles_filter: E,
                everyone_filter: C
            })
        }, [y, f, t, h, E, C, g]);
        let I = r.useCallback(async e => {
            !m.current && y && x && null != _ && (e || !v) && (m.current = !0, A(!0), await (0, o.ni)({
                after: _,
                with_mentions: h,
                roles_filter: E,
                everyone_filter: C,
                limit: h ? 8 : 20
            }, () => {
                m.current = !1
            }), A(!1))
        }, [y, x, _, v, h, E, C]);
        return {
            initialized: y,
            loading: O,
            items: j,
            hasMore: x,
            loadMore: I,
            loadingMore: b,
            setReadNotifItemToAcked: e => {
                e.acked || (e.acked = !0)
            },
            errored: v
        }
    })({
        isFocused: !0,
        isDesktop: !0
    });
    return {
        initialized: e,
        loading: t,
        items: n.filter(e => "notification-center-item" === e.kind),
        hasMore: p,
        loadMore: h
    }
}