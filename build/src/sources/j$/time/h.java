package j$.time;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public abstract /* synthetic */ class h {

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ int[] f30520a;

    static {
        int[] iArr = new int[j$.time.temporal.a.values().length];
        f30520a = iArr;
        try {
            iArr[j$.time.temporal.a.INSTANT_SECONDS.ordinal()] = 1;
        } catch (NoSuchFieldError unused) {
        }
        try {
            f30520a[j$.time.temporal.a.OFFSET_SECONDS.ordinal()] = 2;
        } catch (NoSuchFieldError unused2) {
        }
    }
}
