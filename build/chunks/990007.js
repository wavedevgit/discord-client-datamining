/** chunk id: 990007 params = (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(323874), n(14289), n(35956);
var i = n(488428),
    r = n(485845),
    l = n(179771),
    a = n(136722),
    s = n(562465),
    o = n(898467),
    d = n(420970),
    c = n(506774),
    u = n(73153),
    A = n(587895),
    h = n(224750),
    _ = n(20015),
    m = n(716965),
    g = n(671523),
    p = n(337095),
    E = n(611010),
    I = n(287809),
    f = n(927813),
    C = n(488926),
    T = n(636401),
    N = n(613057),
    S = n(652215);
let x = "CachedTokens",
    v = {
        "1273616940451102832": new o.A(2, +f.A.Millis.MINUTE)
    };
async function b(e, t, n) {
    let i, l, s, o, d, {
        client_id: c,
        response_type: u = "code",
        redirect_uri: f,
        code_challenge: N,
        code_challenge_method: x,
        state: b,
        nonce: y,
        scope: O,
        permissions: L,
        guild_id: R,
        channel_id: P,
        prompt: D,
        disable_guild_select: j,
        integration_type: M,
        pid: w,
        signal: U,
        isSocketRpcPrivateScope: G
    } = e;
    if (U?.aborted) throw new T.A({
        errorCode: S.Lw6.UNKNOWN_ERROR
    }, "Request aborted");
    if (null == c) throw new T.A({
        errorCode: S.Lw6.OAUTH2_ERROR
    }, "No Client ID provided");
    if (!G && null != f) throw new T.A({
        errorCode: S.Lw6.OAUTH2_ERROR
    }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
    let k = [];
    if ("string" == typeof O ? k = O.split(" ").filter(e => e.length > 0) : Array.isArray(O) && (k = O), null == I.default.getCurrentUser()) throw new T.A({
        errorCode: S.Lw6.OAUTH2_ERROR
    }, "Client is not logged in");
    if (null != M) l = Number(M);
    else {
        let e = e => (0, _.n)(e, S.gfo.EMBEDDED) && e?.integrationTypesConfig?.[r.b.USER_INSTALL] != null,
            t = A.A.getApplication(c);
        l = e(t) || e(t = E.Ay.createFromServer(await (0, p.TA)(c, U))) ? r.b.USER_INSTALL : r.b.GUILD_INSTALL
    }
    try {
        [s, {
            disclosures: o,
            allAcked: d
        }] = await Promise.all([(0, m.qY)({
            clientId: c,
            scopes: k,
            responseType: u,
            redirectUri: f,
            codeChallenge: N,
            codeChallengeMethod: x,
            state: b,
            integrationType: l,
            signal: U
        }), (0, h.vG)(c)])
    } catch (t) {
        let {
            body: e
        } = t;
        throw new T.A({
            errorCode: S.Lw6.OAUTH2_ERROR
        }, `OAuth2 Authorization Error: ${e?.message||"Unknown Error"}`)
    }
    if (D === g.l.NONE && null != s && s.authorized && d) try {
        return (await (0, m.Gq)({
            authorize: !0,
            clientId: c,
            scopes: k,
            responseType: u,
            redirectUri: f,
            codeChallenge: N,
            codeChallengeMethod: x,
            state: b,
            nonce: y,
            integrationType: l
        })).location
    } catch (t) {
        let {
            body: e
        } = t;
        throw new T.A({
            errorCode: S.Lw6.OAUTH2_ERROR
        }, `OAuth2 Authorize Error: ${e?.message||"Unknown Error"}`)
    }
    n?.(s.application, P, w);
    let V = C.x3;
    try {
        V = a.iu(L ?? 0)
    } catch (e) {}
    if (null != s.integration_type && Object.values(r.b).includes(s.integration_type) && (i = new Map).set(s.integration_type, s), null != v[s.application.id] && (await v[s.application.id].process(), U?.aborted)) throw new T.A({
        errorCode: S.Lw6.UNKNOWN_ERROR
    }, "Request aborted");
    return t({
        clientId: c,
        authorizations: i,
        scopes: k,
        parsedPermissions: V,
        responseType: u,
        redirectUri: f,
        codeChallenge: N,
        codeChallengeMethod: x,
        state: b,
        guildId: R,
        channelId: P,
        prompt: D,
        disableGuildSelect: j,
        disclosures: o,
        integrationType: l,
        pid: w,
        signal: U
    })
}

function y(e, t) {
    if (e.authorization.accessToken) throw new T.A({
        errorCode: S.Lw6.INVALID_COMMAND
    }, "Already authenticated");
    if (e.authorization.authing) throw new T.A({
        errorCode: S.Lw6.INVALID_COMMAND
    }, "Already authenticating");
    return e.authorization.authing = !0, s.Bo.get({
        url: S.Rsh.OAUTH2_CURRENT_AUTH,
        headers: {
            Authorization: `Bearer ${t}`
        },
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(n => {
        e.authorization.authing = !1;
        let {
            application: i,
            user: r,
            scopes: l,
            expires: a
        } = n.body;
        if (e.application.id !== i.id) throw new T.A({
            errorCode: S.Lw6.INVALID_CLIENTID
        }, "Application does not match the connection's");
        let s = I.default.getCurrentUser();
        if (null == s || !r || s.id !== r.id) throw new T.A({
            errorCode: S.Lw6.INVALID_TOKEN
        }, "Token does not match current user");
        return e.authorization.scopes = [...e.authorization.scopes, ...l, N.VH], e.authorization.accessToken = t, e.authorization.expires = new Date(a), u.h.dispatch({
            type: "RPC_APP_AUTHENTICATED",
            socketId: e.id,
            application: e.application
        }), {
            ...n.body,
            access_token: t
        }
    }, () => {
        throw new T.A({
            errorCode: S.Lw6.INVALID_TOKEN
        }, `Invalid access token: ${t}`)
    }).catch(t => {
        throw e.authorization.authing = !1, t
    })
}

function O(e, t) {
    return {
        [S.e$_.AUTHENTICATE]: (0, d.T)(S.e$_.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: r,
                    signal: a,
                    args: {
                        access_token: s
                    }
                } = n;
                if (null == s && r.transport === N.z4.IPC) {
                    let n = r.application.id;
                    if (null == n) throw new T.A({
                        errorCode: S.Lw6.INVALID_COMMAND
                    }, "No application.");
                    let o = l.F.IDENTIFY,
                        d = () => b({
                            client_id: n,
                            scope: o,
                            response_type: "token",
                            signal: a,
                            isSocketRpcPrivateScope: !1
                        }, e, t).then(e => {
                            var t, l, a;
                            let s;
                            if (null == e) throw new T.A({
                                errorCode: S.Lw6.UNKNOWN_ERROR
                            }, "Unknown error occurred");
                            let o = e.split(/#|\?/),
                                d = i.parse(o[o.length - 1]);
                            if (null != d.error) throw new T.A({
                                errorCode: S.Lw6.OAUTH2_ERROR
                            }, `OAuth2 Error: ${d.error}: ${d.error_description??"unknown error"}`);
                            return t = d.access_token, l = d.scope, a = d.expires_in, (s = c.w.get(x) ?? {})[n] = {
                                accessToken: t,
                                scope: l,
                                expires: Date.now() + a
                            }, c.w.set(x, s), y(r, d.access_token)
                        });
                    return null != (s = function(e, t) {
                        let n = c.w.get(x);
                        if (null != n && null != n[e]) {
                            let i = n[e];
                            if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                            delete n[e], c.w.set(x, n)
                        }
                    }(n, o)) ? y(r, s).catch(() => {
                        let e;
                        return e = c.w.get(x) ?? {}, delete e[n], c.w.set(x, e), d()
                    }) : d()
                }
                if (null == s) throw new T.A({
                    errorCode: S.Lw6.INVALID_TOKEN
                }, "No access token provided");
                return y(r, s)
            }
        }),
        [S.e$_.AUTHORIZE]: {
            handler(n) {
                let {
                    socket: i,
                    signal: r,
                    args: l
                } = n, a = l.client_id;
                if (!a) throw new T.A({
                    errorCode: S.Lw6.INVALID_CLIENTID
                }, "No client id provided");
                if (null != i.authorization.accessToken) throw new T.A({
                    errorCode: S.Lw6.INVALID_COMMAND
                }, "Already authenticated");
                if (i.authorization.authing) throw new T.A({
                    errorCode: S.Lw6.INVALID_COMMAND
                }, "Already authing");
                if (i.authorization.authing = !0, "token" === l.response_type) throw i.authorization.authing = !1, new T.A({
                    errorCode: S.Lw6.INVALID_COMMAND
                }, 'Authorization response_type "token" is not supported');
                let s = i.authorization.scopes.includes(N.LQ);
                if (!s && i.application.id !== a) throw i.authorization.authing = !1, new T.A({
                    errorCode: S.Lw6.INVALID_CLIENTID
                }, "Application does not match the connection's");
                let o = l.scopes || l.scope;
                return delete l.scopes, b({
                    ...l,
                    scope: o,
                    signal: r,
                    isSocketRpcPrivateScope: s
                }, e, t).then(e => {
                    if (i.authorization.authing = !1, null == e) throw new T.A({
                        errorCode: S.Lw6.UNKNOWN_ERROR
                    }, "Unknown error occurred");
                    let t = new URL(e),
                        n = t.searchParams.get("code");
                    if (s) return {
                        code: n,
                        location: e
                    };
                    let r = t.searchParams.get("error");
                    if (null != r && "" !== r) {
                        let e = t.searchParams.get("error_description") ?? "unknown error";
                        throw new T.A({
                            errorCode: S.Lw6.OAUTH2_ERROR
                        }, `OAuth2 Error: ${r}: ${e}`)
                    }
                    if (null == n) throw new T.A({
                        errorCode: S.Lw6.OAUTH2_ERROR
                    }, "OAuth2 Error: Unable to find auth code");
                    return {
                        code: n
                    }
                }).catch(e => {
                    throw i.authorization.authing = !1, e
                })
            }
        }
    }
}