package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f35354c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f35355d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f35356e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f35357a;

    /* renamed from: b  reason: collision with root package name */
    private final e f35358b;

    private c() {
        d dVar = new d();
        this.f35358b = dVar;
        this.f35357a = dVar;
    }

    public static Executor f() {
        return f35356e;
    }

    public static c g() {
        if (f35354c != null) {
            return f35354c;
        }
        synchronized (c.class) {
            try {
                if (f35354c == null) {
                    f35354c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f35354c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f35357a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f35357a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f35357a.c(runnable);
    }
}
