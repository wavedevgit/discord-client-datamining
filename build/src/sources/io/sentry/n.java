package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements x0 {

    /* renamed from: a  reason: collision with root package name */
    private static final ThreadLocal f30169a = new ThreadLocal();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a implements a1 {

        /* renamed from: d  reason: collision with root package name */
        private final w0 f30170d;

        a(w0 w0Var) {
            this.f30170d = w0Var;
        }

        @Override // io.sentry.a1, java.lang.AutoCloseable
        public void close() {
            n.f30169a.set(this.f30170d);
        }
    }

    @Override // io.sentry.x0
    public void a() {
    }

    @Override // io.sentry.x0
    public a1 b(w0 w0Var) {
        w0 w0Var2 = get();
        f30169a.set(w0Var);
        return new a(w0Var2);
    }

    @Override // io.sentry.x0
    public void close() {
        f30169a.remove();
    }

    @Override // io.sentry.x0
    public w0 get() {
        return (w0) f30169a.get();
    }
}
