package ms;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final boolean f38279a = false;

    /* renamed from: b  reason: collision with root package name */
    private static final ThreadLocal[] f38280b;

    static {
        ThreadLocal[] threadLocalArr = new ThreadLocal[4];
        for (int i10 = 0; i10 < 4; i10++) {
            threadLocalArr[i10] = new ThreadLocal();
        }
        f38280b = threadLocalArr;
    }

    public static final boolean a() {
        return f38279a;
    }
}
