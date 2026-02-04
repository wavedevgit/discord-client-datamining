package rt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum b {
    PROLEPTIC_JULIAN,
    PROLEPTIC_GREGORIAN,
    SWEDEN,
    INTRODUCTION_ON_1582_10_15,
    SINGLE_CUTOVER_DATE,
    PROLEPTIC_BYZANTINE;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f49120a;

        static {
            int[] iArr = new int[b.values().length];
            f49120a = iArr;
            try {
                iArr[b.PROLEPTIC_JULIAN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f49120a[b.PROLEPTIC_GREGORIAN.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f49120a[b.SWEDEN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f49120a[b.INTRODUCTION_ON_1582_10_15.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f49120a[b.PROLEPTIC_BYZANTINE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public int a() {
        int i10 = a.f49120a[ordinal()];
        if (i10 == 1) {
            return 2;
        }
        if (i10 == 2) {
            return 1;
        }
        if (i10 == 3) {
            return 4;
        }
        if (i10 != 4) {
            if (i10 == 5) {
                return 3;
            }
            return 0;
        }
        return 7;
    }
}
