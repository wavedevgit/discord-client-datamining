/** chunk id: 401565, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var l, r = n(311907),
    i = n(73153),
    a = n(141468),
    s = n(287809),
    o = n(380335),
    c = n(157550);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = {},
    h = new Set;

function p(e) {
    return o.A.isMessageRequest(e) || c.A.isSpam(e)
}

function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!p(e) || null != t && e !== (null == t ? void 0 : t.channel_id)) return;
    let l = null == t ? null : (0, a.rh)(t);
    d[e] = {
        loaded: !0,
        error: n,
        message: l
    }
}
class m extends(l = r.Ay.Store) {
    initialize() {
        this.waitFor(o.A, c.A, s.default)
    }
    shouldLoadMessageRequestPreview(e) {
        return !h.has(e)
    }
    getMessageRequestPreview(e) {
        return e in d || (d[e] = {
            loaded: !1,
            error: !1,
            message: null
        }), d[e]
    }
}
u(m, "displayName", "MessageRequestPreviewStore");
let g = new m(i.h, {
    CONNECTION_OPEN: function() {
        d = {}, h.clear()
    },
    CHANNEL_CREATE: function(e) {
        let {
            channel: t
        } = e;
        p(t.id) && h.add(t.id)
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e;
        for (let e of t) p(e.id) || (h.delete(e.id), delete d[e.id])
    },
    CHANNEL_DELETE: function(e) {
        let {
            channel: t
        } = e;
        h.delete(t.id), delete d[t.id]
    },
    MESSAGE_CREATE: function(e) {
        if (e.isPushNotification) return !1;
        f(e.message.channel_id, e.message)
    },
    MESSAGE_UPDATE: function(e) {
        var t, n;
        let l = e.message.channel_id;
        if (null == l) return !1;
        let r = d[l];
        if (null == r || null == r.message) return !1;
        d[l] = (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                    u(e, t, n[t])
                })
            }
            return e
        }({}, r), n = n = {
            message: (0, a.IU)(r.message, e.message)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)
    },
    MESSAGE_DELETE: function(e) {
        if (!p(e.channelId)) return !1;
        d[e.channelId] = {
            loaded: !0,
            error: !1,
            message: null
        }
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
        let {
            requestedChannelIds: t,
            supplementalData: n
        } = e, l = new Set([...t]);
        for (let e of (n.forEach(e => {
                f(e.channel_id, e.message_preview), l.delete(e.channel_id)
            }), Array.from(l))) f(e, null)
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function(e) {
        let {
            requestedChannelIds: t
        } = e;
        t.forEach(e => {
            f(e, null, !0)
        })
    }
})