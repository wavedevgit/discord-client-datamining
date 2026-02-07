package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f35622c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f35623d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f35624e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f35625a;

    /* renamed from: b  reason: collision with root package name */
    private final e f35626b;

    private c() {
        d dVar = new d();
        this.f35626b = dVar;
        this.f35625a = dVar;
    }

    public static Executor f() {
        return f35624e;
    }

    public static c g() {
        if (f35622c != null) {
            return f35622c;
        }
        synchronized (c.class) {
            try {
                if (f35622c == null) {
                    f35622c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f35622c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f35625a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f35625a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f35625a.c(runnable);
    }
}
