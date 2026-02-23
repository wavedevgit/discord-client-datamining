/** chunk id: 397400, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ai: () => x,
    Jh: () => v,
    SX: () => m,
    ed: () => _,
    f7: () => p,
    ft: () => u,
    oT: () => f,
    tR: () => g,
    wN: () => o
});
var a = n(64700),
    i = n(390544),
    s = n(311907),
    l = n(954571),
    r = n(363487),
    d = n(522055),
    c = n(652215);

function o(e, t, n) {
    a.useEffect(() => {
        l.default.track(c.HAw.OPEN_MODAL, {
            type: "game_servers_perk_clicked",
            guild_id: e,
            location: n,
            location_stack: t
        })
    }, [e, t, n])
}

function u(e, t) {
    a.useEffect(() => {
        l.default.track(c.HAw.GAME_SERVER_GAME_SELECT_OPENED, {
            guild_id: e,
            type: t
        })
    }, [e, t])
}

function m(e, t, n) {
    a.useEffect(() => {
        l.default.track(c.HAw.GAME_SERVER_SETTINGS_OPENED, {
            guild_id: e,
            game_server_id: t,
            type: n
        })
    }, [e, t, n])
}

function g(e) {
    let t = (0, r.A)(e),
        n = (0, s.bG)([d.A], () => d.A.getStateForGuild(e)),
        o = a.useRef(!1);
    a.useEffect(() => {
        if (n?.instances == null) return;
        let a = Object.values(n.instances).length,
            s = Object.values(n.instances).filter(e => e.status === i.M.ONLINE).length;
        o.current || (o.current = !0, l.default.track(c.HAw.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
            guild_id: e,
            is_admin: t,
            num_game_servers: a,
            num_game_servers_online: s,
            num_game_servers_offline: a - s
        }))
    }, [e, t, n?.instances])
}

function f(e, t, n, a) {
    l.default.track(c.HAw.GAME_SERVER_GAME_CLICKED, {
        guild_id: e,
        product_id: t,
        product_name: n,
        location: a
    })
}

function v(e) {
    let {
        guildId: t,
        productId: n,
        productName: a,
        skuId: i,
        planName: s,
        planCost: r,
        previousPlanCost: d,
        region: o,
        type: u
    } = e;
    l.default.track(c.HAw.GAME_SERVER_SKU_SELECTED, {
        guild_id: t,
        product_id: n,
        product_name: a,
        sku_id: i,
        plan_name: s,
        plan_cost: r,
        previous_plan_cost: d,
        region: o,
        type: u
    })
}

function x(e, t, n, a) {
    l.default.track(c.HAw.GAME_SERVER_JOIN_CLICKED, {
        guild_id: e,
        game_id: t,
        game_name: n,
        game_server_id: a
    })
}

function _(e, t, n) {
    l.default.track(c.HAw.GAME_SERVER_COPY_IP_CLICKED, {
        guild_id: e,
        game_server_id: t,
        location: n
    })
}

function p(e, t) {
    l.default.track(c.HAw.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, {
        guild_id: e,
        game_server_id: t
    })
}