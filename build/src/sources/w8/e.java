package w8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum e {
    YES,
    NO,
    UNSET;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51830a;

        static {
            int[] iArr = new int[e.values().length];
            f51830a = iArr;
            try {
                iArr[e.YES.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51830a[e.NO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f51830a[e.UNSET.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public static e e(boolean z10) {
        if (z10) {
            return YES;
        }
        return NO;
    }

    public boolean a() {
        int i10 = a.f51830a[ordinal()];
        if (i10 == 1) {
            return true;
        }
        if (i10 != 2) {
            if (i10 != 3) {
                throw new IllegalStateException("Unrecognized TriState value: " + this);
            }
            throw new IllegalStateException("No boolean equivalent for UNSET");
        }
        return false;
    }

    public boolean d() {
        if (this != UNSET) {
            return true;
        }
        return false;
    }
}
