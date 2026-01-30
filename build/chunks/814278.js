/** chunk id: 814278, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A5: () => j,
    Dh: () => N,
    Lu: () => D,
    Vw: () => G,
    W0: () => L,
    Z1: () => k,
    aW: () => w,
    bk: () => F,
    dc: () => O,
    iO: () => Y,
    kj: () => V,
    m8: () => W,
    tC: () => M,
    to: () => B,
    z4: () => z
}), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162), n(896048);
var r = n(827762),
    i = n(284009),
    a = n.n(i),
    o = n(989349),
    l = n.n(o),
    c = n(562465),
    u = n(149597),
    s = n(157559),
    E = n(961350),
    d = n(430452),
    f = n(383501),
    _ = n(162605),
    A = n(287809),
    S = n(927813),
    y = n(975571),
    h = n(562153),
    g = n(728458),
    p = n(427262),
    I = n(936388),
    R = n(714763),
    m = n(144485),
    T = n(798286),
    U = n(603266),
    C = n(652215),
    b = n(985018);

function w() {
    return y.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION)
}

function D() {
    return y.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION)
}

function O() {
    return y.A.getArticleURL(C.MVz.END_TO_END_ENCRYPTION)
}

function F(e, t, n, r, i) {
    n ? I.A.createSecureFramesVerifiedKey(e, t) : I.A.createSecureFramesTransientKey(e, t), (0, T.cw)({
        channelId: r,
        userId: e,
        analyticsLocation: i
    })
}

function N(e, t, n) {
    if (n) {
        let n = (0, u.uo)(new Uint8Array(t));
        I.A.deleteSecureFramesVerifiedKey(e, n)
    } else I.A.deleteSecureFramesTransientKey(e)
}

function L(e, t) {
    m.A.openSecureFramesUpdateConfirmation({
        title: b.intl.string(b.t.hdL152),
        subtitle: b.intl.string(b.t["8VGYKg"]),
        onConfirm: () => {
            I.A.deleteSecureFramesVerifiedKey(e, t), (0, T.Jk)()
        }
    })
}

function V(e) {
    let t = A.default.getUser(e),
        n = p.Ay.getName(t);
    m.A.openSecureFramesUpdateConfirmation({
        title: b.intl.formatToPlainString(b.t.K6NGBy, {
            username: n
        }),
        subtitle: b.intl.string(b.t.F1BQK3),
        onConfirm: () => {
            I.A.deleteSecureFramesUserVerifiedKeys(e), (0, T.YT)()
        }
    })
}

function M(e) {
    let t = l()(e),
        n = l()().diff(t, "s");
    if (n > 12 * S.A.Seconds.DAYS_30) {
        let e = Math.round(n / (12 * S.A.Seconds.DAYS_30));
        return b.intl.formatToPlainString(b.t.F1wqkD, {
            count: e
        })
    }
    if (n > S.A.Seconds.DAYS_30) {
        let e = Math.round(n / S.A.Seconds.DAYS_30);
        return b.intl.formatToPlainString(b.t["iT+b+2"], {
            count: e
        })
    }
    if (n > 7 * S.A.Seconds.DAY) {
        let e = Math.round(n / (7 * S.A.Seconds.DAY));
        return b.intl.formatToPlainString(b.t.dLurKZ, {
            count: e
        })
    }
    if (n > S.A.Seconds.DAY) {
        let e = Math.round(n / S.A.Seconds.DAY);
        return b.intl.formatToPlainString(b.t.LE8a2H, {
            count: e
        })
    }
    if (n > S.A.Seconds.HOUR) {
        let e = Math.round(n / S.A.Seconds.HOUR);
        return b.intl.formatToPlainString(b.t.KULxVS, {
            count: e
        })
    } else {
        if (!(n > S.A.Seconds.MINUTE)) return b.intl.formatToPlainString(b.t["/w0Qpw"], {
            count: n
        });
        let e = Math.round(n / S.A.Seconds.MINUTE);
        return b.intl.formatToPlainString(b.t.ws6rWq, {
            count: e
        })
    }
}

function k(e) {
    let {
        isCurrentUserKeyPersistent: t,
        isOtherUserKeyPersistent: n,
        otherUserNickname: r
    } = e;
    return t && n ? b.intl.format(b.t["FJN+kh"], {
        helpArticle: w()
    }) : t ? b.intl.format(b.t["p/9PGp"], {
        username: r,
        helpArticle: w()
    }) : n ? b.intl.format(b.t.qT5z87, {
        helpArticle: w()
    }) : b.intl.format(b.t["6JLy+i"], {
        helpArticle: w()
    })
}
async function K(e) {
    let t = E.default.getStaticAuthSessionId();
    return a()(null != t, "[getCurrentUserPublicKey] session id should not be null"), await d.A.getMLSSigningKey(t, e)
}

function P(e) {
    let t = r.fromByteArray(new Uint8Array(e));
    return "data:application/octet-stream;base64,".concat(t)
}
async function Y(e, t, n) {
    try {
        return (await c.Bo.post({
            url: C.Rsh.VOICE_MATCH_PUBLIC_KEY(e),
            body: {
                public_key: P(t),
                key_version: n
            },
            rejectWithError: !1
        })).body.is_match
    } catch (e) {
        throw g.A.captureException(e), e
    }
}
async function v(e) {
    let {
        key: t,
        signature: n
    } = await K(e);
    try {
        await c.Bo.put({
            url: C.Rsh.VOICE_PUBLIC_KEYS(),
            body: {
                public_key: P(t),
                signature: P(n),
                key_version: e
            },
            rejectWithError: !1
        }), I.A.addUploadedKeyVersion(e)
    } catch (e) {
        throw g.A.captureException(e), e
    }
}

function H(e) {
    return R.A.getUploadedKeyVersionsCached().includes(e)
}
async function B(e) {
    H(e) || await v(e)
}
async function j(e) {
    if (!H(e)) return await v(e), !0;
    let t = E.default.getId(),
        {
            key: n
        } = await K(e),
        r = await Y(t, n, e);
    return r || (0, T.XS)(e), r
}

function W(e, t) {
    let [n, r] = t;
    if (!n.isUserConnected(e)) return !1;
    let i = n.getSecureFramesRosterMapEntry(e);
    if (null == i) return !1;
    let a = new Uint8Array(i);
    for (let t of r.getAllActiveStreamKeys()) {
        if (!r.isUserConnected(t, e)) continue;
        let n = _.A.getSecureFramesRosterMapEntry(t, e);
        if (null == n) return !0;
        let i = new Uint8Array(n);
        for (let e = 0; e < a.length; e++)
            if (a[e] !== i[e]) return !0
    }
    return !1
}

function G(e) {
    let {
        userId: t,
        channelId: n,
        nickname: r
    } = e;
    (0, T.kF)({
        userId: t,
        channelId: n,
        keyVersion: 1,
        reason: U.m4.OTHER_USER_INCONSISTENT_KEYS
    }), s.A.show({
        title: b.intl.string(b.t.mznLyR),
        body: b.intl.format(b.t.WY6IKb, {
            username: r
        })
    })
}

function z(e) {
    let {
        userId: t,
        guildId: n,
        channelId: r
    } = e;
    if (!W(t, [f.A, _.A])) return !0;
    {
        let e = A.default.getUser(t),
            i = h.Ay.getName(n, r, e);
        return G({
            userId: t,
            channelId: r,
            nickname: i
        }), !1
    }
}