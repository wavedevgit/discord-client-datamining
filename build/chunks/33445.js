/** chunk id: 33445, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O,
    E: () => v
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    o = n(397927),
    a = n(475743),
    c = n(587895),
    s = n(200042),
    u = n(574172),
    d = n(933958),
    p = n(57220),
    f = n(969151),
    m = n(833147),
    A = n(780376),
    b = n(652215),
    y = n(405429);

function v(e) {
    let {
        activity: t,
        renderHeader: n,
        renderActivityIFrameWithLoadedData: d,
        isLoading: f = !1
    } = e, m = r.useRef(null), A = (0, a.A)(t);
    r.useEffect(() => {
        null != t ? clearTimeout(m.current) : null != A && null == t && (m.current = window.setTimeout(() => {
            (0, u.close)(b.MLl.ACTIVITY_POPOUT)
        }, 5e3))
    }, [A, t]);
    let v = (0, i.bG)([c.A], () => {
            let e = null == t ? void 0 : t.applicationId;
            return null == e ? void 0 : c.A.getApplication(e)
        }),
        O = (0, p.V)();
    return (0, l.jsx)("div", {
        className: y.kL,
        children: null == t || null == v || f ? (0, l.jsx)(o.y$y, {
            className: y.pU
        }) : (0, l.jsx)("div", {
            className: y.U$,
            children: (0, l.jsxs)("div", {
                className: y.kq,
                children: [(0, l.jsx)("div", {
                    className: y.N1,
                    children: n({
                        application: v
                    })
                }), (0, l.jsx)("div", {
                    className: y.Wc,
                    children: d({
                        application: v
                    })
                }), O ? (0, l.jsx)(s.A, {
                    isEmbeddedActivity: !0
                }) : null]
            })
        })
    })
}

function O() {
    let {
        embeddedActivity: e,
        channelId: t,
        guildId: n
    } = (0, i.cf)([d.Ay], () => {
        let e = d.Ay.getCurrentEmbeddedActivity(),
            t = (0, f.H)(null == e ? void 0 : e.location),
            n = (0, f.D)(null == e ? void 0 : e.location);
        return {
            embeddedActivity: e,
            channelId: t,
            guildId: n
        }
    }), o = (0, i.bG)([d.Ay], () => (null == e ? void 0 : e.applicationId) != null && d.Ay.isProxyTicketRefreshing(e.applicationId), [e]), a = r.useCallback(e => {
        let {
            application: n
        } = e;
        return (0, l.jsx)(A.A, {
            applicationId: n.id,
            channelId: t
        })
    }, [t]), c = r.useCallback(r => {
        let {
            application: i
        } = r, o = {};
        if (null != e) {
            var a, c, s;
            o.instance_id = null != (a = null != (c = e.compositeInstanceId) ? c : e.launchId) ? a : "", o.location_id = null == (s = e.location) ? void 0 : s.id, o.launch_id = e.launchId, o.referrer_id = e.referrerId, o.custom_id = e.customId, null != n && "" !== n && (o.guild_id = n), null != t && "" !== t && (o.channel_id = t)
        }
        let u = null == e ? void 0 : e.url;
        return (0, l.jsx)(m.A, {
            application: i,
            queryParams: o,
            url: u
        })
    }, [t, n, e]);
    return (0, l.jsx)(v, {
        activity: e,
        isLoading: o,
        renderHeader: a,
        renderActivityIFrameWithLoadedData: c
    })
}