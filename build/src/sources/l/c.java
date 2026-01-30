package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f36671c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f36672d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f36673e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f36674a;

    /* renamed from: b  reason: collision with root package name */
    private final e f36675b;

    private c() {
        d dVar = new d();
        this.f36675b = dVar;
        this.f36674a = dVar;
    }

    public static Executor f() {
        return f36673e;
    }

    public static c g() {
        if (f36671c != null) {
            return f36671c;
        }
        synchronized (c.class) {
            try {
                if (f36671c == null) {
                    f36671c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f36671c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f36674a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f36674a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f36674a.c(runnable);
    }
}
