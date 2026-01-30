/** chunk id: 302959, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x,
    M: () => j
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(833349),
    s = n(153331),
    o = n(592182),
    c = n(587895),
    u = n(806246),
    d = n(890330),
    p = n(172710),
    f = n(616356),
    m = n(734057),
    g = n(71393),
    y = n(977997),
    b = n(954571),
    _ = n(821589),
    A = n(652215),
    h = n(654471);

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function S(e) {
    let {
        type: t,
        source: n,
        activity: l,
        applicationStream: i,
        user: a,
        guildId: s,
        channelId: c,
        onAction: u
    } = e;
    return (0, r.jsx)(o.A, {
        className: (0, _.t)(h, "actions", t),
        type: t,
        source: n,
        activity: l,
        applicationStream: i,
        user: a,
        guildId: s,
        buttonVariant: "primary",
        channelId: c,
        onAction: u
    })
}
let j = s.A.Types,
    x = function(e) {
        let {
            activity: t,
            user: n,
            useStoreStream: o = !0,
            showActions: _ = !0,
            hideHeader: h = !1,
            showChannelDetails: j = !1
        } = e, x = function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }
            if (i = function(e, t) {
                    if (null == e) return {};
                    var n, r, l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l
                }(e, t), Object.getOwnPropertySymbols)
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]), I = (0, i.bG)([y.A, m.A], () => {
            var e;
            return m.A.getChannel(null == (e = y.A.getVoiceStateForUser(n.id)) ? void 0 : e.channelId)
        }), P = (0, d.v)("UserActivityContainer", I), E = (0, i.bG)([f.A], () => o ? f.A.getAnyStreamForUser(n.id) : null), T = (null == t ? void 0 : t.type) === A.$pd.HANG_STATUS && P ? I : null, N = (0, i.bG)([g.A, y.A, m.A], () => {
            var e, r;
            return (0, a.A)(t, A.jUm.EMBEDDED) ? g.A.getGuild(null == (e = m.A.getChannel(null == (r = y.A.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) ? void 0 : r.channelId)) ? void 0 : e.getGuildId()) : null != T ? g.A.getGuild(T.getGuildId()) : null
        }), w = (0, i.bG)([g.A], () => null != E ? g.A.getGuild(E.guildId) : null), C = (0, i.bG)([c.A], () => {
            if (null != t)
                if (null != t.application_id) return c.A.getApplication(t.application_id);
                else return c.A.getApplicationByName(t.name);
            return null
        });
        return (l.useEffect(() => {
            (null == t ? void 0 : t.type) === A.$pd.HANG_STATUS && P && b.default.track(A.HAw.VIEW_HANG_STATUS, v({
                source: "UserActivity",
                other_user_id: n.id
            }, (0, u.A)(null == T ? void 0 : T.id)))
        }, [null == t ? void 0 : t.type, P, T, n.id]), (null == t ? void 0 : t.type) !== A.$pd.HANG_STATUS || P) ? (0, r.jsx)(s.A, O(v({}, x), {
            activity: t,
            user: n,
            application: C,
            hideHeader: h,
            activityGuild: null != N ? N : w,
            showChannelDetails: j,
            channel: j ? I : void 0,
            renderActions: _ ? () => (0, r.jsx)(S, O(v({}, x), {
                applicationStream: E,
                activity: t,
                user: n
            })) : null,
            onOpenSpotifyTrack: p.Mp,
            onOpenSpotifyArtist: p.mN,
            onOpenSpotifyAlbum: p.QX
        })) : null
    }