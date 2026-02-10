package kk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n extends Exception {

    /* renamed from: d  reason: collision with root package name */
    protected static boolean f31862d;

    /* renamed from: e  reason: collision with root package name */
    protected static final StackTraceElement[] f31863e;

    static {
        boolean z10;
        if (System.getProperty("surefire.test.class.path") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f31862d = z10;
        f31863e = new StackTraceElement[0];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n() {
    }

    @Override // java.lang.Throwable
    public final synchronized Throwable fillInStackTrace() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(Throwable th2) {
        super(th2);
    }
}
