package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f35574c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f35575d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f35576e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f35577a;

    /* renamed from: b  reason: collision with root package name */
    private final e f35578b;

    private c() {
        d dVar = new d();
        this.f35578b = dVar;
        this.f35577a = dVar;
    }

    public static Executor f() {
        return f35576e;
    }

    public static c g() {
        if (f35574c != null) {
            return f35574c;
        }
        synchronized (c.class) {
            try {
                if (f35574c == null) {
                    f35574c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f35574c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f35577a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f35577a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f35577a.c(runnable);
    }
}
