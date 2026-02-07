package ms;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final boolean f38327a = false;

    /* renamed from: b  reason: collision with root package name */
    private static final ThreadLocal[] f38328b;

    static {
        ThreadLocal[] threadLocalArr = new ThreadLocal[4];
        for (int i10 = 0; i10 < 4; i10++) {
            threadLocalArr[i10] = new ThreadLocal();
        }
        f38328b = threadLocalArr;
    }

    public static final boolean a() {
        return f38327a;
    }
}
