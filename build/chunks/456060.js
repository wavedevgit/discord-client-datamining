/** chunk id: 456060 params = (module,exports,require) **/
n.d(t, {
    BE: () => u,
    SJ: () => _,
    Wf: () => d,
    YC: () => c,
    n$: () => o
});
var i = n(287809),
    a = n(562153),
    l = n(652215),
    r = n(985018),
    s = n(165500);

function o(e, t, n) {
    switch (t) {
        case l.xL.LISTEN:
            return r.intl.formatToPlainString(r.t["/8czH4"], {
                name: e
            });
        case l.xL.WATCH:
            return r.intl.formatToPlainString(r.t.BBJXVk, {
                name: e
            });
        case l.xL.JOIN:
            return n ? void 0 : r.intl.string(r.t.pkq6Vq);
        case l.xL.STREAM_REQUEST:
            return r.intl.string(s.default.DKHhec);
        case l.xL.JOIN_REQUEST:
        default:
            return r.intl.string(r.t.Ckxb6j)
    }
}

function d(e, t, n) {
    return e.author.id === n ? r.intl.string(s.default["8B3U5O"]) : r.intl.formatToPlainString(s.default["d/qbC0"], {
        username: (0, a.mG)(t.guild_id, t.id, e.author)
    })
}

function c(e, t, n, a, l) {
    if (e.author.id === a) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e) return l ? r.intl.formatToPlainString(r.t.JddpN2, {
                username: e.globalName,
                appName: t
            }) : r.intl.formatToPlainString(r.t.gYVkSW, {
                username: e.globalName,
                appName: t
            })
        }
        return l ? r.intl.formatToPlainString(r.t["2N1kNS"], {
            appName: t
        }) : r.intl.formatToPlainString(r.t.IA6uDV, {
            appName: t
        })
    }
    return l ? r.intl.formatToPlainString(r.t.XE8axA, {
        username: e.author.globalName,
        appName: t
    }) : r.intl.formatToPlainString(r.t.hgcjOn, {
        username: e.author.globalName,
        appName: t
    })
}

function u(e, t, n, i, a) {
    switch (e.activity?.type) {
        case l.xL.LISTEN:
        case l.xL.WATCH:
        case l.xL.JOIN:
            return r.intl.string(a ? r.t.x1UXGR : r.t["Ek+51n"]);
        case l.xL.STREAM_REQUEST:
            return d(e, n, i);
        case l.xL.JOIN_REQUEST:
        default:
            return c(e, t, n, i, !0)
    }
}

function _(e) {
    let {
        activityActionType: t,
        maxPartySize: n,
        partySize: i
    } = e;
    return t === l.xL.STREAM_REQUEST ? "" : t === l.xL.LISTEN ? n > 0 ? r.intl.formatToPlainString(r.t.Zogoou, {
        partySize: i,
        maxPartySize: n
    }) : r.intl.formatToPlainString(r.t.UGei0j, {
        partySize: i
    }) : n > 0 ? r.intl.formatToPlainString(r.t.gLu7NU, {
        partySize: i,
        maxPartySize: n
    }) : r.intl.formatToPlainString(r.t["65JnWC"], {
        partySize: i
    })
}