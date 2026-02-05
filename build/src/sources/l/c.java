package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f36181c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f36182d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f36183e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f36184a;

    /* renamed from: b  reason: collision with root package name */
    private final e f36185b;

    private c() {
        d dVar = new d();
        this.f36185b = dVar;
        this.f36184a = dVar;
    }

    public static Executor f() {
        return f36183e;
    }

    public static c g() {
        if (f36181c != null) {
            return f36181c;
        }
        synchronized (c.class) {
            try {
                if (f36181c == null) {
                    f36181c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f36181c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f36184a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f36184a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f36184a.c(runnable);
    }
}
