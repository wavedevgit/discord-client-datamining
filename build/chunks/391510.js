/** chunk id: 391510 params = (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(938796);
var i = n(735438),
    l = n.n(i),
    r = n(179771),
    a = n(599026),
    s = n(73153),
    o = n(182892),
    d = n(587895),
    c = n(207371),
    u = n(954571),
    A = n(139675),
    h = n(927813),
    _ = n(636401),
    m = n(629471),
    g = n(613057),
    p = n(652215);
let E = ["1402418171662569542"],
    I = {
        [p.e$_.SET_ACTIVITY]: {
            scope: {
                [g.sm.ANY]: [r.F.RPC, r.F.RPC_ACTIVITIES_WRITE, g.hj]
            },
            validation: e => (0, m.A)(e).required().keys({
                pid: e.number().min(0),
                activity: (0, m.A)(e).keys({
                    name: e.string().min(1).max(128),
                    state: e.string().min(2).max(128),
                    state_url: e.string().uri().min(1).max(256),
                    details: e.string().min(2).max(128),
                    details_url: e.string().uri().min(1).max(256),
                    timestamps: (0, m.A)(e).keys({
                        start: e.number().min(1),
                        end: e.number().min(1)
                    }),
                    assets: (0, m.A)(e).keys({
                        large_image: e.string().min(1).max(300),
                        large_text: e.string().min(2).max(128),
                        large_url: e.string().uri().min(1).max(256),
                        small_image: e.string().min(1).max(300),
                        small_text: e.string().min(2).max(128),
                        small_url: e.string().uri().min(1).max(256),
                        invite_cover_image: e.string().min(1).max(300)
                    }),
                    party: (0, m.A)(e).keys({
                        id: e.string().min(2).max(128),
                        size: e.array().items(e.number().min(0)).length(2),
                        privacy: e.number().default(p.KIY.PRIVATE).valid([p.KIY.PRIVATE, p.KIY.PUBLIC])
                    }),
                    secrets: (0, m.A)(e).keys({
                        match: e.string().min(2).max(128),
                        join: e.string().min(2).max(128),
                        spectate: e.string().min(2).max(128)
                    }),
                    buttons: e.array().items((0, m.A)(e).keys({
                        label: e.string().min(1).max(32).required(),
                        url: e.string().uri().min(1).max(512).required()
                    })).min(1).max(2),
                    instance: e.boolean(),
                    supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
                    type: e.number().default(p.$pd.PLAYING).valid(p.$pd.PLAYING, p.$pd.LISTENING, p.$pd.WATCHING, p.$pd.COMPETING),
                    status_display_type: e.number().optional().valid(a.A.NAME, a.A.STATE, a.A.DETAILS)
                }).allow(null)
            }),
            handler(e) {
                let t, {
                    socket: n,
                    args: {
                        pid: i,
                        activity: r
                    },
                    isSocketConnected: a
                } = e;
                if (![g.z4.IPC, g.z4.WEBSOCKET, g.z4.POST_MESSAGE].includes(n.transport)) throw new _.A({
                    errorCode: p.Lw6.INVALID_COMMAND
                }, `command not available from "${n.transport}" transport`);
                if (null == i && g.z4.IPC === n.transport) throw new _.A({
                    errorCode: p.Lw6.INVALID_COMMAND
                }, "nonzero pid required");
                if (null == r) return s.h.dispatch({
                    type: "LOCAL_ACTIVITY_UPDATE",
                    socketId: n.id,
                    pid: i,
                    activity: r
                }), Promise.resolve(r);
                let m = {};
                r.name || (r.name = n.application.name);
                let I = n.application.id;
                r.application_id = I;
                let f = n.transport === g.z4.POST_MESSAGE;
                r.platform = f ? p.yTV.EMBEDDED : p.yTV.DESKTOP;
                let C = d.A.getApplication(I ?? void 0),
                    T = r.instance ?? !1,
                    S = r.party?.privacy;
                delete r.instance, delete r.party?.privacy;
                let N = (0, o.E)(r, T, f, null != C && (0, c.x)(C) && f, S);
                N > 0 && (r.flags = N);
                let {
                    assets: x,
                    party: v,
                    secrets: b,
                    timestamps: y,
                    buttons: O,
                    type: L
                } = r;
                if (null == L && (r.type = p.$pd.PLAYING), null != b) {
                    let e = l().values(b).filter(e => !!e);
                    if (null != v && l().intersection(e, [v.id]).length > 0 && !E.includes(n.application.id)) throw new _.A({
                        errorCode: p.Lw6.INVALID_ACTIVITY_SECRET
                    }, "secrets cannot match the party id");
                    if (l().uniq(e).length < e.length) throw new _.A({
                        errorCode: p.Lw6.INVALID_ACTIVITY_SECRET
                    }, "secrets must be unique");
                    if (null != O) throw new _.A({
                        errorCode: p.Lw6.INVALID_ACTIVITY_SECRET
                    }, "secrets cannot currently be sent with buttons")
                }
                if (null != O && (m.button_urls = O.map(e => e.url), r.buttons = O.map(e => e.label)), r.metadata = m, null != y)
                    for (let e of Object.keys(y)) Date.now().toString().length - y[e].toString().length > 2 && (y[e] = Math.floor(y[e] * h.A.Millis.SECOND));
                if (null == x) t = Promise.resolve([]);
                else {
                    if (null == n.application || null == n.application.id) throw Error();
                    t = (0, A.RG)(n.application.id, [x.large_image, x.small_image, x.invite_cover_image])
                }
                return t.then(e => {
                    let [t, l, o] = e;
                    if (null != x && (null != t ? x.large_image = t : delete x.large_image, null != l ? x.small_image = l : delete x.small_image, null != o ? x.invite_cover_image = o : delete x.invite_cover_image), !a()) return;
                    s.h.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: n.id,
                        pid: i,
                        activity: r,
                        partyPrivacy: S
                    });
                    let {
                        secrets: d,
                        party: c
                    } = r, A = {
                        application_id: n.application.id,
                        type: r.type,
                        name: r.name,
                        status_display_type: r.status_display_type,
                        details: r.details ?? "",
                        state: r.state ?? "",
                        has_urls: null != r.state_url || null != r.details_url || r.assets?.large_url != null || r.assets?.small_url != null
                    };
                    return null != d && (A.has_match_secret = !!d.match, A.has_join_secret = !!d.join), null != x && (A.has_images = !!(x.large_image || x.small_image || x.invite_cover_image)), null != c && (A.party_max = null != c.size && c.size[1] > 0 ? c.size[1] : void 0, A.party_id = c.id), u.default.track(p.HAw.ACTIVITY_UPDATED, A), r
                })
            }
        }
    }