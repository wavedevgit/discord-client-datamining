/** chunk id: 456060 params = (module,exports,require) **/
n.d(t, {
    BE: () => u,
    SJ: () => m,
    Wf: () => d,
    YC: () => c,
    n$: () => o
});
var i = n(287809),
    l = n(562153),
    r = n(652215),
    s = n(985018),
    a = n(426127);

function o(e, t, n) {
    switch (t) {
        case r.xL.LISTEN:
            return s.intl.formatToPlainString(s.t["/8czH4"], {
                name: e
            });
        case r.xL.WATCH:
            return s.intl.formatToPlainString(s.t.BBJXVk, {
                name: e
            });
        case r.xL.JOIN:
            return n ? void 0 : s.intl.string(s.t.pkq6Vq);
        case r.xL.STREAM_REQUEST:
            return s.intl.string(a.default.DKHhec);
        case r.xL.JOIN_REQUEST:
        default:
            return s.intl.string(s.t.Ckxb6j)
    }
}

function d(e, t, n) {
    return e.author.id === n ? s.intl.string(a.default["8B3U5O"]) : s.intl.formatToPlainString(a.default["d/qbC0"], {
        username: (0, l.mG)(t.guild_id, t.id, e.author)
    })
}

function c(e, t, n, l, r) {
    if (e.author.id === l) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e) return r ? s.intl.formatToPlainString(s.t.JddpN2, {
                username: e.globalName,
                appName: t
            }) : s.intl.formatToPlainString(s.t.gYVkSW, {
                username: e.globalName,
                appName: t
            })
        }
        return r ? s.intl.formatToPlainString(s.t["2N1kNS"], {
            appName: t
        }) : s.intl.formatToPlainString(s.t.IA6uDV, {
            appName: t
        })
    }
    return r ? s.intl.formatToPlainString(s.t.XE8axA, {
        username: e.author.globalName,
        appName: t
    }) : s.intl.formatToPlainString(s.t.hgcjOn, {
        username: e.author.globalName,
        appName: t
    })
}

function u(e, t, n, i, l) {
    switch (e.activity?.type) {
        case r.xL.LISTEN:
        case r.xL.WATCH:
        case r.xL.JOIN:
            return s.intl.string(l ? s.t.x1UXGR : s.t["Ek+51n"]);
        case r.xL.STREAM_REQUEST:
            return d(e, n, i);
        case r.xL.JOIN_REQUEST:
        default:
            return c(e, t, n, i, !0)
    }
}

function m(e) {
    let {
        activityActionType: t,
        maxPartySize: n,
        partySize: i
    } = e;
    return t === r.xL.STREAM_REQUEST ? "" : t === r.xL.LISTEN ? n > 0 ? s.intl.formatToPlainString(s.t.Zogoou, {
        partySize: i,
        maxPartySize: n
    }) : s.intl.formatToPlainString(s.t.UGei0j, {
        partySize: i
    }) : n > 0 ? s.intl.formatToPlainString(s.t.gLu7NU, {
        partySize: i,
        maxPartySize: n
    }) : s.intl.formatToPlainString(s.t["65JnWC"], {
        partySize: i
    })
}