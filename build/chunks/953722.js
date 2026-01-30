/** chunk id: 953722, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => j
}), n(896048);
var l = n(627968),
    i = n(64700),
    s = n(158954),
    r = n(943457),
    a = n(424912),
    c = n(860689),
    o = n(208882),
    d = n(121004),
    u = n(880392),
    m = n(843580),
    x = n(851091),
    g = n(909806),
    C = n(946116);

function j(e) {
    let {
        directoryChannelId: t,
        transitionState: n,
        initialSlide: j = C.m8.CHOOSE_GUILD,
        onClose: h,
        directoryGuildName: p,
        directoryGuildId: f,
        currentCategoryId: b
    } = e, [L, _] = i.useState(j), [v, y] = i.useState(null), [O, S] = i.useState(null), [A, I] = i.useState(null), [N, T] = i.useState(null), [H, E] = i.useState(""), [M, k] = i.useState(null != b ? b : C.mU.UNCATEGORIZED), [G, D] = i.useState(!1), {
        availableGuilds: U,
        addedGuilds: w,
        loading: Z
    } = (0, d.A)(f, t);
    i.useEffect(() => {
        _(j)
    }, [_, j]);
    let P = async () => {
        let e = N;
        if (!G) {
            if (null == O || null == v) return;
            let t = await r.A.createGuildFromTemplate(O, A, v);
            T(e = (0, c.Y1)(t))
        }
        null != e && (await o.WD(t, e.id, H, M), _(C.m8.CONFIRMATION))
    }, R = null;
    switch (L) {
        case C.m8.CHOOSE_GUILD:
            R = (0, l.jsx)(u.A, {
                directoryChannelId: t,
                directoryGuildName: p,
                onGuildChosen: e => {
                    D(!0), _(C.m8.CUSTOMIZE_EXISTING_GUILD), T(e)
                },
                handleChooseCreate: () => {
                    D(!1), _(C.m8.GUILD_TEMPLATES)
                },
                availableGuilds: U,
                addedGuilds: w,
                loading: Z
            });
            break;
        case C.m8.GUILD_TEMPLATES:
            R = (0, l.jsx)(g.A, {
                directoryGuildName: p,
                onChooseTemplate: e => {
                    D(!1), _(C.m8.CUSTOMIZE_NEW_GUILD), y(e)
                },
                onBack: () => _(C.m8.CHOOSE_GUILD)
            });
            break;
        case C.m8.CUSTOMIZE_NEW_GUILD:
            R = (0, l.jsx)(a.A, {
                isSlideReady: !0,
                guildTemplate: v,
                onHubGuildInfoSet: (e, t) => {
                    S(e), I(t), _(C.m8.CUSTOMIZE_EXISTING_GUILD)
                },
                onBack: () => _(C.m8.GUILD_TEMPLATES)
            });
            break;
        case C.m8.CUSTOMIZE_EXISTING_GUILD:
            R = (0, l.jsx)(m.A, {
                directoryChannelId: t,
                description: H,
                onDescriptionChange: E,
                categoryId: M,
                onCategoryIdChange: k,
                onSubmit: P,
                onBack: () => _(G ? C.m8.CHOOSE_GUILD : C.m8.CUSTOMIZE_NEW_GUILD)
            });
            break;
        case C.m8.CONFIRMATION:
            R = (0, l.jsx)(x.A, {
                directoryGuildName: p,
                guildToAdd: N,
                isExistingGuildFlow: G,
                onClose: h
            })
    }
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(s.dWK, {
            transitionState: n,
            onClose: h,
            children: R
        })
    })
}