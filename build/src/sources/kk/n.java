package kk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n extends Exception {

    /* renamed from: d  reason: collision with root package name */
    protected static boolean f32431d;

    /* renamed from: e  reason: collision with root package name */
    protected static final StackTraceElement[] f32432e;

    static {
        boolean z10;
        if (System.getProperty("surefire.test.class.path") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f32431d = z10;
        f32432e = new StackTraceElement[0];
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
