package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s4 implements r4 {

    /* renamed from: a  reason: collision with root package name */
    private final p4 f30649a;

    public s4(p4 p4Var) {
        this.f30649a = (p4) io.sentry.util.y.c(p4Var, "SendFireAndForgetDirPath is required");
    }

    @Override // io.sentry.r4
    public o4 c(w0 w0Var, k7 k7Var) {
        io.sentry.util.y.c(w0Var, "Scopes are required");
        io.sentry.util.y.c(k7Var, "SentryOptions is required");
        String a10 = this.f30649a.a();
        if (a10 != null && d(a10, k7Var.getLogger())) {
            return a(new a0(w0Var, k7Var.getSerializer(), k7Var.getLogger(), k7Var.getFlushTimeoutMillis(), k7Var.getMaxQueueSize()), a10, k7Var.getLogger());
        }
        k7Var.getLogger().c(SentryLevel.ERROR, "No cache dir path is defined in options.", new Object[0]);
        return null;
    }
}
