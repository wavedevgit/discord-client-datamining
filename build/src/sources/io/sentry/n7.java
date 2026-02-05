package io.sentry;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n7 implements b0 {

    /* renamed from: d  reason: collision with root package name */
    private final String f29237d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29238e;

    public n7(String str, String str2) {
        this.f29237d = str;
        this.f29238e = str2;
    }

    private e5 b(e5 e5Var) {
        if (e5Var.C().i() == null) {
            e5Var.C().x(new io.sentry.protocol.z());
        }
        io.sentry.protocol.z i10 = e5Var.C().i();
        if (i10 != null && i10.d() == null && i10.e() == null) {
            i10.f(this.f29238e);
            i10.h(this.f29237d);
        }
        return e5Var;
    }

    @Override // io.sentry.b0
    public SentryEvent h(SentryEvent sentryEvent, Hint hint) {
        return (SentryEvent) b(sentryEvent);
    }

    @Override // io.sentry.b0
    public io.sentry.protocol.d0 k(io.sentry.protocol.d0 d0Var, Hint hint) {
        return (io.sentry.protocol.d0) b(d0Var);
    }

    public n7() {
        this(System.getProperty("java.version"), System.getProperty("java.vendor"));
    }
}
