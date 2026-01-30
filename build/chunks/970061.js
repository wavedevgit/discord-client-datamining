/** chunk id: 970061, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => en,
    I: () => B
}), n(896048), n(747238), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(142703), n(321073), n(938796);
var r, i = n(735438),
    a = n.n(i),
    o = n(481613),
    s = n.n(o),
    l = n(665260),
    c = n(77729),
    u = n(47167),
    d = n(626584),
    f = n(22007),
    p = n(794036),
    _ = n(975970),
    h = n(105613),
    m = n(474228),
    g = n(400492),
    E = n(312671),
    y = n(458640),
    b = n(378058),
    O = n(734057),
    v = n(803224),
    A = n(994500),
    I = n(351906),
    S = n(287809),
    T = n(954571),
    C = n(486020),
    N = n(562153),
    w = n(723702),
    R = n(837921),
    P = n(652215);

function D(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            D(e, t, n[t])
        })
    }
    return e
}

function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function M(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let j = w.isPlatformEmbedded && (0, w.isWindows)(),
    k = j && 10 > parseFloat(c.A.os.release),
    U = !0;
if (j && !k) {
    let [e, , t] = c.A.os.release.split(".");
    U = parseInt(e) > 10 || parseInt(t) >= 15063
}
let G = new d.A("NotificationUtils"),
    F = j && U || "Chrome" === s().name && 47 > parseFloat(s().version) || "Firefox" === s().name && 52 > parseFloat(s().version);
async function V() {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) try {
        return await R.Ay.invoke("NOTIFICATIONS_GET_SETTINGS")
    } catch (e) {
        G.warn("Fetching native notification settings failed with error: ", e)
    }
    return null
}

function B(e) {
    return "discord://".concat(location.host).concat(e)
}

function H(e) {
    try {
        let t = new URL(e, location.origin);
        if ("discord:" === t.protocol) return t.pathname
    } catch (e) {}
    return null
}
async function Y() {
    let e = await V();
    return (null == e ? void 0 : e.authorizationStatus) === "authorized" && (null == e ? void 0 : e.sound) === !0
}

function W(e, t) {
    var n;
    return null != (n = (0, y.A)(null != t ? t : E.A.getSoundpack())[e]) ? n : e
}
async function K(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (await Y()) try {
        await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", {
            sound: W(e, n)
        });
        return
    } catch (e) {
        G.warn("Native notification sound failed with error: ", e)
    }(0, g.Ak)(e, t, void 0, n)
}
let z = a().throttle(K, 1e3, {
    leading: !0
});

function q() {
    R.Ay.flashFrame(!1)
}
j && (window.addEventListener("focus", q), R.Ay.on("MAIN_WINDOW_FOCUS", q));
let Z = window.Notification;
if (k) {
    let e = {};
    R.Ay.on("NOTIFICATION_CLICK", (t, n) => {
        let r = e[n];
        null != r && (r.onclick(), r.close())
    }), R.Ay.send("NOTIFICATIONS_CLEAR"), r = class {
        static requestPermission(e) {
            e()
        }
        close() {
            null != e[this.id] && (delete e[this.id], R.Ay.send("NOTIFICATION_CLOSE", this.id), this.onclose())
        }
        constructor(t, {
            body: n,
            icon: r
        }) {
            D(this, "id", Z._id++), D(this, "title", void 0), D(this, "body", void 0), D(this, "icon", void 0), D(this, "onshow", function() {}), D(this, "onclick", function() {}), D(this, "onclose", function() {}), t.includes("\0") ? (G.warn("Notification title contains null character, setting to empty string"), this.title = "") : this.title = t, n.includes("\0") ? (G.warn("Notification body contains null character, setting to empty string"), this.body = "") : this.body = n, this.icon = r, setImmediate(() => this.onshow()), e[this.id] = this, R.Ay.send("NOTIFICATION_SHOW", {
                id: this.id,
                title: this.title,
                body: this.body,
                icon: this.icon
            })
        }
    }, D(r, "permission", "granted"), D(r, "_id", 0), Z = r
}
let Q = {};
if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) {
    try {
        R.Ay.on("NOTIFICATIONS_RECEIVED_RESPONSE", (e, t, n, r, i) => {
            if ("dismiss" === t) return void delete Q[n];
            {
                let e = Q[n];
                if (w.isPlatformEmbedded ? R.Ay.focus() : window.focus(), null != e) {
                    var a, o, s;
                    (null == (a = e.options) ? void 0 : a.omitClickTracking) || (T.default.track(P.HAw.NOTIFICATION_ACTION, L({
                        action: "CLICK"
                    }, e.trackingProps)), T.default.track(P.HAw.NOTIFICATION_CLICKED, e.clickTrackingProps)), null == (s = e.options) || null == (o = s.onClick) || o.call(s, r);
                    return
                }
                if (null != i) {
                    let e = H(i);
                    null != e && (0, f.A)(e)
                }
            }
        }), R.Ay.invoke("NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS")
    } catch (e) {
        G.warn("Native notification setup failed with error: ", e)
    }(null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications_provisional")) && $().then(e => {
        e || R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION", !0).catch(() => {})
    })
}

function X(e) {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) try {
        R.Ay.invoke("NOTIFICATIONS_GET_AUTHORIZATION").then(t => {
            e(t)
        }).catch(() => {
            e(!1)
        });
        return
    } catch (e) {
        G.warn("Native notification authorization failed with error: ", e)
    }
    null != Z && Z.requestPermission(async () => {
        null != e && e(await J())
    })
}
async function J() {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) {
        let e = await V();
        return (null == e ? void 0 : e.authorizationStatus) === "authorized" || (null == e ? void 0 : e.authorizationStatus) === "provisional"
    }
    return null != Z && "granted" === Z.permission
}
async function $() {
    if (null === c.A || void 0 === c.A ? void 0 : c.A.features.supports("notifications")) {
        var e;
        return (null == (e = await V()) ? void 0 : e.authorizationStatus) !== "undetermined"
    }
    return null != Z && "default" !== Z.permission
}

function ee(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = arguments.length > 2 ? arguments[2] : void 0;
    e.includes("message") ? z(e, t, n) : K(e, t, n)
}
async function et(e, t, n, r, i) {
    var a, o, s, c, d, f, g;
    let E, y = await V(),
        D = (null == y ? void 0 : y.authorizationStatus) === "authorized" || (null == y ? void 0 : y.authorizationStatus) === "provisional",
        x = null != y ? D : await J(),
        k = D,
        B = I.A.disableNotifications && null == i.overrideStreamerMode,
        H = !w.isPlatformEmbedded || (0, w.isMac)() && k || R.Ay.shouldDisplayNotifications(),
        Y = !B && x && H,
        K = M(L({}, r), {
            action: void 0,
            ping: void 0,
            banner: void 0,
            badge: void 0
        }),
        z = K,
        q = K;
    if (r.banner = await (0, h.N)(), !Y) {
        null != i.sound && !1 !== i.playSoundIfDisabled && (ee(i.sound, null != (o = i.volume) ? o : 1, i.soundpack), r.ping = !0, i.omitViewTracking || T.default.track(P.HAw.NOTIFICATION_ACTION, L({
            action: "VIEW"
        }, r)));
        return
    }
    t.includes("\0") && (G.warn("Notification title contains null character, setting to empty string"), t = ""), n.includes("\0") && (G.warn("Notification body contains null character, setting to empty string"), n = "");
    let X = null != (a = null == i ? void 0 : i.tag) ? a : null,
        $ = k && (null == y ? void 0 : y.sound) === !0 && (null == y ? void 0 : y.authorizationStatus) === "authorized",
        et = (e, t) => {
            var n;
            null == (n = i.onShown) || n.call(i), i.omitViewTracking || (T.default.track(P.HAw.NOTIFICATION_ACTION, L({
                action: "VIEW"
            }, t)), T.default.track(P.HAw.NOTIFICATION_VIEWED, q)), F && setTimeout(() => e.close(), 5e3)
        };
    if (null == i.sound || $ || (ee(i.sound, null != (s = i.volume) ? s : 1, i.soundpack), r.ping = !0), i.isUserAvatar && null != e && (e = await (0, m.w)(e)), j && v.A.taskbarFlash && R.Ay.flashFrame(!0), k) {
        let a = {
            title: t,
            body: n
        };
        null != e && (a.icon = e), (null == i ? void 0 : i.sound) != null && (a.sound = W(i.sound, i.soundpack)), (null == i ? void 0 : i.tag) != null && (a.identifier = i.tag), (null == i ? void 0 : i.fallbackDeepLink) != null && (a.fallbackDeepLink = i.fallbackDeepLink), Array.isArray(i.actions) && (a.actions = i.actions);
        let o = _.A.getCurrentConfig({
            location: "showNotification"
        }, {
            autoTrackExposure: !0,
            disable: null == i.messageRecord
        });
        if (null != i.messageRecord && o.enabled) {
            let e = i.messageRecord.channel_id,
                t = i.messageRecord.author;
            a.threadIdentifier = e;
            let n = O.A.getChannel(e);
            null != n && (a.groupName = (0, u.m1)(n, S.default, A.A));
            let r = null == n ? void 0 : n.getGuildId();
            if (a.senderIdentifier = t.id, a.senderDisplayName = N.Ay.getName(r, e, t), a.senderAvatar = t.getAvatarURL(r, 128, !1, !1), a.attachments = [], o.includeStickers)
                for (let e of (0, b.o6)(i.messageRecord)) {
                    let t = (0, b.zg)(e, {
                        isPreview: !0
                    });
                    null != t && a.attachments.push({
                        url: t,
                        type: "image/png"
                    })
                }
            if (o.includeImages)
                for (let e of i.messageRecord.attachments) !(0, l.Lt)(null != (c = e.flags) ? c : 0, P.sbO.CONTAINS_EXPLICIT_MEDIA) && !(0, l.Lt)(null != (d = e.flags) ? d : 0, P.sbO.IS_SPOILER) && (null == (f = e.content_type) ? void 0 : f.startsWith("image/")) && a.attachments.push({
                    url: e.proxy_url,
                    type: e.content_type
                });
            null != i.emoji && p.A.getConfig({
                location: "showNotification"
            }).enabled && (a.emoji = i.emoji.map(e => L({
                url: (0, C._O)({
                    id: e.id,
                    animated: !1,
                    size: 96
                })
            }, e)))
        }
        try {
            let e = await R.Ay.invoke("NOTIFICATIONS_SEND_NOTIFICATION", a);
            Q[e] = {
                options: i,
                trackingProps: r,
                clickTrackingProps: z
            };
            let t = {
                close() {
                    try {
                        R.Ay.invoke("NOTIFICATIONS_REMOVE_NOTIFICATIONS", [e])
                    } catch (e) {
                        G.warn("Native notification removal failed with error: ", e)
                    }
                }
            };
            return et(t, r), {
                notification: t,
                trackingProps: r
            }
        } catch (e) {
            G.warn("Native notification failed with error: ", e)
        }
    }
    null != i.sound && k && (ee(i.sound, null != (g = i.volume) ? g : 1, i.soundpack), r.ping = !0);
    let en = {
        icon: e,
        body: n,
        tag: X,
        silent: !0
    };
    try {
        E = new Z(t, en)
    } catch (e) {
        return
    }
    return (et(E, r), E.onclick = e => {
        var t;
        w.isPlatformEmbedded ? R.Ay.focus() : (window.focus(), E.close()), i.omitClickTracking || (T.default.track(P.HAw.NOTIFICATION_ACTION, L({
            action: "CLICK"
        }, r)), T.default.track(P.HAw.NOTIFICATION_CLICKED, z));
        let n = "";
        null == (t = i.onClick) || t.call(i, n)
    }, U) ? {
        notification: E,
        trackingProps: r
    } : {
        notification: {
            close() {
                var e;
                null == E || null == (e = E.onclose) || e.call(E)
            }
        },
        trackingProps: r
    }
}
let en = {
    hasPermission: J,
    requestPermission: X,
    showNotification: et,
    playNotificationSound: K
}