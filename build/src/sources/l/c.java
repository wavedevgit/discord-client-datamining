package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f36785c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f36786d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f36787e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f36788a;

    /* renamed from: b  reason: collision with root package name */
    private final e f36789b;

    private c() {
        d dVar = new d();
        this.f36789b = dVar;
        this.f36788a = dVar;
    }

    public static Executor f() {
        return f36787e;
    }

    public static c g() {
        if (f36785c != null) {
            return f36785c;
        }
        synchronized (c.class) {
            try {
                if (f36785c == null) {
                    f36785c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f36785c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f36788a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f36788a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f36788a.c(runnable);
    }
}
