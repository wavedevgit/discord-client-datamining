package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f35923c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f35924d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f35925e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f35926a;

    /* renamed from: b  reason: collision with root package name */
    private final e f35927b;

    private c() {
        d dVar = new d();
        this.f35927b = dVar;
        this.f35926a = dVar;
    }

    public static Executor f() {
        return f35925e;
    }

    public static c g() {
        if (f35923c != null) {
            return f35923c;
        }
        synchronized (c.class) {
            try {
                if (f35923c == null) {
                    f35923c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f35923c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f35926a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f35926a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f35926a.c(runnable);
    }
}
