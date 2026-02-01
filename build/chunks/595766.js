/** chunk id: 595766, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => d
}), n(896048);
var r = n(141468),
    i = n(383233),
    l = n(222823),
    s = n(661191);

function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            a(e, t, n[t])
        })
    }
    return e
}

function o(e, t) {
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
class d {
    isLatest(e, t) {
        return this.messageGeneration(e, t) === t
    }
    messageGeneration(e, t) {
        let n = this.messages.get(e);
        return null == n ? -1 / 0 : n.generation !== t && null != n.message && n.message.id === l.Ay.lastMessageId(e) ? (this.messages.set(e, o(u({}, n), {
            generation: t
        })), t) : n.generation
    }
    messageId(e) {
        var t, n;
        let r = this.messages.get(e);
        return null != (t = null == r || null == (n = r.message) ? void 0 : n.id) ? t : null
    }
    messageRecord(e) {
        var t;
        let n = this.messages.get(e);
        return null == n || null == n.message || n.message instanceof i.Ay || (n.message = (0, r.rh)(n.message)), null != (t = null == n ? void 0 : n.message) ? t : null
    }
    has(e) {
        return this.messages.has(e)
    }
    put(e, t, n) {
        this.messages.set(e, {
            message: t,
            generation: n
        })
    }
    putNew(e, t, n) {
        var r, i, l;
        let a = this.messages.get(e);
        null != t && (i = t.id, null == (l = null == a || null == (r = a.message) ? void 0 : r.id) || s.default.compare(i, l) > 0) && this.put(e, t, n)
    }
    putMany(e, t) {
        for (let n of e) this.put(n.channel_id, n, t)
    }
    update(e) {
        var t;
        if (null == e.id || null == e.channel_id) return;
        let n = e.channel_id,
            l = this.messages.get(n);
        if ((null == l || null == (t = l.message) ? void 0 : t.id) !== e.id) return;
        let s = l.message instanceof i.Ay ? (0, r.IU)(l.message, e) : (0, r.SP)(l.message, e);
        this.messages.set(n, o(u({}, l), {
            message: s
        }))
    }
    delete(e) {
        this.messages.delete(e)
    }
    constructor() {
        a(this, "localNeeded", !0), a(this, "messages", new Map)
    }
}