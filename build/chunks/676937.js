/** chunk id: 676937 params = (module,exports,require) **/
n.d(t, {
    a: () => r,
    y: () => l
});
var a = n(223273),
    i = n(985018);

function l(e) {
    switch (e) {
        case a.vI.NO_USER_REVIEWS:
            return "text-subtle";
        case a.vI.OVERWHELMINGLY_POSITIVE:
        case a.vI.VERY_POSITIVE:
        case a.vI.POSITIVE:
        case a.vI.MOSTLY_POSITIVE:
            return "steam-review-text-positive";
        case a.vI.MIXED:
            return "steam-review-text-mixed";
        case a.vI.MOSTLY_NEGATIVE:
        case a.vI.NEGATIVE:
        case a.vI.VERY_NEGATIVE:
        case a.vI.OVERWHELMINGLY_NEGATIVE:
            return "steam-review-text-negative";
        default:
            return "text-subtle"
    }
}

function r(e) {
    switch (e) {
        case a.vI.NO_USER_REVIEWS:
            return i.intl.string(i.t.CLMt8J);
        case a.vI.OVERWHELMINGLY_POSITIVE:
            return i.intl.string(i.t["75sx1S"]);
        case a.vI.VERY_POSITIVE:
            return i.intl.string(i.t["EkOVg+"]);
        case a.vI.POSITIVE:
            return i.intl.string(i.t.ZUkFtr);
        case a.vI.MOSTLY_POSITIVE:
            return i.intl.string(i.t.M7Z09a);
        case a.vI.MIXED:
            return i.intl.string(i.t.c8yuHR);
        case a.vI.MOSTLY_NEGATIVE:
            return i.intl.string(i.t.H0MSjG);
        case a.vI.NEGATIVE:
            return i.intl.string(i.t.vpLrgz);
        case a.vI.VERY_NEGATIVE:
            return i.intl.string(i.t["5spYuX"]);
        case a.vI.OVERWHELMINGLY_NEGATIVE:
            return i.intl.string(i.t.A8uk5J);
        default:
            return null
    }
}