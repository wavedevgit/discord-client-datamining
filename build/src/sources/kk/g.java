package kk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends n {

    /* renamed from: i  reason: collision with root package name */
    private static final g f32418i;

    static {
        g gVar = new g();
        f32418i = gVar;
        gVar.setStackTrace(n.f32432e);
    }

    private g() {
    }

    public static g a() {
        if (n.f32431d) {
            return new g();
        }
        return f32418i;
    }

    public static g b(Throwable th2) {
        if (n.f32431d) {
            return new g(th2);
        }
        return f32418i;
    }

    private g(Throwable th2) {
        super(th2);
    }
}
