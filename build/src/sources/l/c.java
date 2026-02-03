package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f36254c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f36255d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f36256e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f36257a;

    /* renamed from: b  reason: collision with root package name */
    private final e f36258b;

    private c() {
        d dVar = new d();
        this.f36258b = dVar;
        this.f36257a = dVar;
    }

    public static Executor f() {
        return f36256e;
    }

    public static c g() {
        if (f36254c != null) {
            return f36254c;
        }
        synchronized (c.class) {
            try {
                if (f36254c == null) {
                    f36254c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f36254c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f36257a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f36257a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f36257a.c(runnable);
    }
}
