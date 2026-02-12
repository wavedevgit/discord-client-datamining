package l;

import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends e {

    /* renamed from: c  reason: collision with root package name */
    private static volatile c f35355c;

    /* renamed from: d  reason: collision with root package name */
    private static final Executor f35356d = new Executor() { // from class: l.a
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().c(runnable);
        }
    };

    /* renamed from: e  reason: collision with root package name */
    private static final Executor f35357e = new Executor() { // from class: l.b
        @Override // java.util.concurrent.Executor
        public final void execute(Runnable runnable) {
            c.g().a(runnable);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private e f35358a;

    /* renamed from: b  reason: collision with root package name */
    private final e f35359b;

    private c() {
        d dVar = new d();
        this.f35359b = dVar;
        this.f35358a = dVar;
    }

    public static Executor f() {
        return f35357e;
    }

    public static c g() {
        if (f35355c != null) {
            return f35355c;
        }
        synchronized (c.class) {
            try {
                if (f35355c == null) {
                    f35355c = new c();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f35355c;
    }

    @Override // l.e
    public void a(Runnable runnable) {
        this.f35358a.a(runnable);
    }

    @Override // l.e
    public boolean b() {
        return this.f35358a.b();
    }

    @Override // l.e
    public void c(Runnable runnable) {
        this.f35358a.c(runnable);
    }
}
