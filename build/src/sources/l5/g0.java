package l5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public enum g0 {
    AUTOMATIC,
    HARDWARE,
    SOFTWARE;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36936a;

        static {
            int[] iArr = new int[g0.values().length];
            f36936a = iArr;
            try {
                iArr[g0.HARDWARE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36936a[g0.SOFTWARE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36936a[g0.AUTOMATIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public boolean d(int i10, boolean z10, int i11) {
        int i12 = a.f36936a[ordinal()];
        if (i12 == 1) {
            return false;
        }
        if (i12 == 2) {
            return true;
        }
        if ((!z10 || i10 >= 28) && i11 <= 4 && i10 > 25) {
            return false;
        }
        return true;
    }
}
