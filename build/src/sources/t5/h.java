package t5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public enum h {
    NORMAL,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    HUE,
    SATURATION,
    COLOR,
    LUMINOSITY,
    ADD,
    HARD_MIX;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f49101a;

        static {
            int[] iArr = new int[h.values().length];
            f49101a = iArr;
            try {
                iArr[h.NORMAL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f49101a[h.MULTIPLY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f49101a[h.SCREEN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f49101a[h.OVERLAY.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f49101a[h.DARKEN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f49101a[h.LIGHTEN.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f49101a[h.ADD.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f49101a[h.COLOR_DODGE.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f49101a[h.COLOR_BURN.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f49101a[h.HARD_LIGHT.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f49101a[h.SOFT_LIGHT.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f49101a[h.DIFFERENCE.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f49101a[h.EXCLUSION.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f49101a[h.HUE.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f49101a[h.SATURATION.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f49101a[h.COLOR.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f49101a[h.LUMINOSITY.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                f49101a[h.HARD_MIX.ordinal()] = 18;
            } catch (NoSuchFieldError unused18) {
            }
        }
    }

    public r1.a d() {
        switch (a.f49101a[ordinal()]) {
            case 2:
                return r1.a.MODULATE;
            case 3:
                return r1.a.SCREEN;
            case 4:
                return r1.a.OVERLAY;
            case 5:
                return r1.a.DARKEN;
            case 6:
                return r1.a.LIGHTEN;
            case 7:
                return r1.a.PLUS;
            default:
                return null;
        }
    }
}
