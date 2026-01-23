/** Chunk was on 31748 **/
/** chunk id: 163432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => y,
    Vp: () => p,
    i4: () => h
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(90575),
    o = n(961350),
    s = n(927813),
    c = n(403362),
    u = n(175203),
    d = n(806931),
    f = n(107826);
let p = 112,
    g = 16 / 9 * 112 + 8,
    m = 10 * s.A.Millis.SECOND;

function _(e) {
    var t;
    let n = o.default.getId();
    return e.type === d.lp.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo)
}

function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            tileWidth: g,
            tileMinWidth: 124,
            tileMargin: 8,
            limit: 12,
            cropSelfVideo: !1
        },
        {
            tileWidth: r,
            tileMinWidth: o,
            tileMargin: s,
            limit: u,
            cropSelfVideo: f,
            version: p
        } = n,
        [h, y] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            y(Date.now())
        }, m);
        return () => {
            clearTimeout(e)
        }
    }, [t]);
    let A = l.useRef({}),
        {
            visibleParticipants: b,
            participantTileWidth: E
        } = l.useMemo(() => {
            let n = Date.now(),
                l = (0, i.sortBy)(t, e => (function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    switch (e.type) {
                        case d.lp.ACTIVITY:
                            return "\x01".concat(e.sortKey);
                        case d.lp.HIDDEN_STREAM:
                        case d.lp.STREAM:
                            return "\x02".concat((0, a.A)(e.userNick, e.user));
                        case d.lp.USER:
                            var n, r;
                            let l, i = "\x06";
                            return e.speaking ? i = "\x03" : t - e.lastSpoke < m ? i = "\x04" : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (i = "\x05"), "".concat(i).concat((r = e.lastSpoke, l = String(864e13).length, String(864e13 - r).padStart(l, "0"))).concat((0, a.A)(e.userNick, e.user))
                    }
                })(e, n)),
                [p, g] = (0, i.partition)(l, d.Xw),
                h = p.findIndex(_),
                y = null; - 1 !== h && (y = p[h], p.splice(h, 1));
            let b = null == y || f ? e : e - r - s,
                E = Math.max(0, Math.min(Math.floor((b - s) / (o + s)), u, t.length)),
                v = Math.min((b - s) / E - s, r),
                O = Math.max(0, E - g.length),
                x = g.slice(0, E),
                S = p.slice(0, O),
                C = Array(O);
            if (O > 0) {
                let e = [];
                for (let t of S) {
                    let n = A.current[t.id];
                    null != n && n < O ? C[n] = t : e.push(t)
                }
                for (let t = 0; t < C.length; t++) {
                    if (null != C[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    C[t] = n
                }
            }
            let N = C.filter(c.Vq);
            A.current = (0, i.keyBy)((0, i.range)(N.length), e => N[e].id);
            let I = [...x, ...N];
            return null != y && (f && I.length >= E ? I[Math.max(0, I.length - 1)] = y : I.push(y)), {
                visibleParticipants: I,
                participantTileWidth: v
            }
        }, [e, t, h, p, f, u, s, o, r]);
    return {
        visibleParticipants: b,
        participantTileWidth: E
    }
}

function y(e) {
    let {
        participants: t,
        participantTileWidth: n,
        selectedParticipantId: l,
        onDoubleClick: i,
        onContextMenu: a,
        onClick: o,
        channel: s,
        inCall: c,
        popoutType: d,
        paused: p = !1
    } = e;
    return (0, r.jsx)("div", {
        className: f.zr,
        children: t.map(e => {
            if (null == e) return null;
            let t = _(e);
            return (0, r.jsx)("div", {
                className: f.eP,
                style: t ? {
                    flexShrink: 0
                } : void 0,
                children: (0, r.jsx)(u.Ay, {
                    participant: e,
                    selected: l === e.id,
                    channel: s,
                    className: f.Vs,
                    fit: u.Yl.COVER,
                    onClick: o,
                    onDoubleClick: i,
                    onContextMenu: a,
                    width: t ? g : n,
                    inCall: c,
                    paused: p,
                    popoutType: d
                })
            }, e.id)
        })
    })
}