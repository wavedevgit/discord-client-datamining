/** Chunk was on 77870 **/
/** chunk id: 689906, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(64700),
    l = n(512750),
    i = n(397927),
    s = n(997509),
    a = n(568065),
    o = n(652215);

function c(e, t) {
    let n = r.useCallback(n => {
        if (n.stopPropagation(), t.type !== a.o9.LEVEL) switch ((0, i.OoC)(a.Fq), t.skuId) {
            case l.SL:
                s.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                return;
            case l.aN:
                s.A.open(e, o.BEX.ROLES, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                return;
            case l.FB:
                s.A.open(e, o.BEX.BOOST_PERKS, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD, o.nd0.BOOST_PERKS_VANITY_URL);
                return;
            case l.jF:
            case l.OJ:
                (0, i.s7G)(), s.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                return;
            default:
                return
        }
    }, [e, t]);
    return t.type === a.o9.PERK ? n : void 0
}