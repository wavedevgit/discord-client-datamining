package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements x0 {

    /* renamed from: a  reason: collision with root package name */
    private static final ThreadLocal f28419a = new ThreadLocal();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a implements a1 {

        /* renamed from: d  reason: collision with root package name */
        private final w0 f28420d;

        a(w0 w0Var) {
            this.f28420d = w0Var;
        }

        @Override // io.sentry.a1, java.lang.AutoCloseable
        public void close() {
            n.f28419a.set(this.f28420d);
        }
    }

    @Override // io.sentry.x0
    public void a() {
    }

    @Override // io.sentry.x0
    public a1 b(w0 w0Var) {
        w0 w0Var2 = get();
        f28419a.set(w0Var);
        return new a(w0Var2);
    }

    @Override // io.sentry.x0
    public void close() {
        f28419a.remove();
    }

    @Override // io.sentry.x0
    public w0 get() {
        return (w0) f28419a.get();
    }
}
