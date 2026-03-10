/** chunk id: 689906 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(64700),
    s = n(512750),
    l = n(397927),
    a = n(997509),
    r = n(568065),
    o = n(652215);

function c(e, t) {
    let n = i.useCallback(n => {
        if (n.stopPropagation(), t.type !== r.o9.LEVEL) switch ((0, l.OoC)(r.Fq), t.skuId) {
            case s.SL:
                a.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                return;
            case s.aN:
                a.A.open(e, o.BEX.ROLES, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                return;
            case s.FB:
                a.A.open(e, o.BEX.BOOST_PERKS, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD, o.nd0.BOOST_PERKS_VANITY_URL);
                return;
            case s.jF:
            case s.OJ:
            case s.Ht:
            case s.tv:
                (0, l.s7G)(), a.A.open(e, o.BEX.TAG, o.JJy.GUILD_POWERUPS_OVERVIEW_CARD);
                return;
            default:
                return
        }
    }, [e, t]);
    return t.type === r.o9.PERK ? n : void 0
}