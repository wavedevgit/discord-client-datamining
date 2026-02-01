/** chunk id: 163432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => b,
    Vp: () => p,
    i4: () => A
}), n(896048), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n(90575),
    s = n(961350),
    o = n(927813),
    c = n(403362),
    u = n(175203),
    d = n(806931),
    h = n(107826);
let p = 112,
    f = 16 / 9 * 112 + 8,
    m = 10 * o.A.Millis.SECOND;

function g(e) {
    var t;
    let n = s.default.getId();
    return e.type === d.lp.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo)
}

function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            tileWidth: f,
            tileMinWidth: 124,
            tileMargin: 8,
            limit: 12,
            cropSelfVideo: !1
        },
        {
            tileWidth: l,
            tileMinWidth: s,
            tileMargin: o,
            limit: u,
            cropSelfVideo: h,
            version: p
        } = n,
        [A, b] = r.useState(Date.now());
    r.useEffect(() => {
        let e = setTimeout(() => {
            b(Date.now())
        }, m);
        return () => {
            clearTimeout(e)
        }
    }, [t]);
    let _ = r.useRef({}),
        {
            visibleParticipants: y,
            participantTileWidth: v
        } = r.useMemo(() => {
            let n = Date.now(),
                r = (0, i.sortBy)(t, e => (function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    switch (e.type) {
                        case d.lp.ACTIVITY:
                            return "\x01".concat(e.sortKey);
                        case d.lp.HIDDEN_STREAM:
                        case d.lp.STREAM:
                            return "\x02".concat((0, a.A)(e.userNick, e.user));
                        case d.lp.USER:
                            var n, l;
                            let r, i = "\x06";
                            return e.speaking ? i = "\x03" : t - e.lastSpoke < m ? i = "\x04" : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (i = "\x05"), "".concat(i).concat((l = e.lastSpoke, r = String(864e13).length, String(864e13 - l).padStart(r, "0"))).concat((0, a.A)(e.userNick, e.user))
                    }
                })(e, n)),
                [p, f] = (0, i.partition)(r, d.Xw),
                A = p.findIndex(g),
                b = null; - 1 !== A && (b = p[A], p.splice(A, 1));
            let y = null == b || h ? e : e - l - o,
                v = Math.max(0, Math.min(Math.floor((y - o) / (s + o)), u, t.length)),
                E = Math.min((y - o) / v - o, l),
                O = Math.max(0, v - f.length),
                C = f.slice(0, v),
                x = p.slice(0, O),
                S = Array(O);
            if (O > 0) {
                let e = [];
                for (let t of x) {
                    let n = _.current[t.id];
                    null != n && n < O ? S[n] = t : e.push(t)
                }
                for (let t = 0; t < S.length; t++) {
                    if (null != S[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    S[t] = n
                }
            }
            let j = S.filter(c.Vq);
            _.current = (0, i.keyBy)((0, i.range)(j.length), e => j[e].id);
            let I = [...C, ...j];
            return null != b && (h && I.length >= v ? I[Math.max(0, I.length - 1)] = b : I.push(b)), {
                visibleParticipants: I,
                participantTileWidth: E
            }
        }, [e, t, A, p, h, u, o, s, l]);
    return {
        visibleParticipants: y,
        participantTileWidth: v
    }
}

function b(e) {
    let {
        participants: t,
        participantTileWidth: n,
        selectedParticipantId: r,
        onDoubleClick: i,
        onContextMenu: a,
        onClick: s,
        channel: o,
        inCall: c,
        popoutType: d,
        paused: p = !1
    } = e;
    return (0, l.jsx)("div", {
        className: h.zr,
        children: t.map(e => {
            if (null == e) return null;
            let t = g(e);
            return (0, l.jsx)("div", {
                className: h.eP,
                style: t ? {
                    flexShrink: 0
                } : void 0,
                children: (0, l.jsx)(u.Ay, {
                    participant: e,
                    selected: r === e.id,
                    channel: o,
                    className: h.Vs,
                    fit: u.Yl.COVER,
                    onClick: s,
                    onDoubleClick: i,
                    onContextMenu: a,
                    width: t ? f : n,
                    inCall: c,
                    paused: p,
                    popoutType: d
                })
            }, e.id)
        })
    })
}