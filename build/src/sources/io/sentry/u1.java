package io.sentry;

import java.io.Writer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements f3 {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.vendor.gson.stream.c f30365a;

    /* renamed from: b  reason: collision with root package name */
    private final t1 f30366b;

    public u1(Writer writer, int i10) {
        this.f30365a = new io.sentry.vendor.gson.stream.c(writer);
        this.f30366b = new t1(i10);
    }

    @Override // io.sentry.f3
    /* renamed from: A */
    public u1 k(Boolean bool) {
        this.f30365a.V0(bool);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: B */
    public u1 i(Number number) {
        this.f30365a.Y0(number);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: C */
    public u1 f(String str) {
        this.f30365a.Z0(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: D */
    public u1 d(boolean z10) {
        this.f30365a.e1(z10);
        return this;
    }

    @Override // io.sentry.f3
    public String a() {
        return this.f30365a.F();
    }

    @Override // io.sentry.f3
    public f3 g(String str) {
        this.f30365a.L(str);
        return this;
    }

    @Override // io.sentry.f3
    public void h(String str) {
        this.f30365a.J0(str);
    }

    @Override // io.sentry.f3
    /* renamed from: m */
    public u1 u() {
        this.f30365a.l();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: n */
    public u1 r() {
        this.f30365a.n();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: o */
    public u1 s() {
        this.f30365a.B();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: p */
    public u1 y() {
        this.f30365a.E();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: q */
    public u1 e(String str) {
        this.f30365a.N(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: t */
    public u1 l() {
        this.f30365a.t0();
        return this;
    }

    @Override // io.sentry.f3
    public void v(boolean z10) {
        this.f30365a.v(z10);
    }

    @Override // io.sentry.f3
    /* renamed from: w */
    public u1 c(double d10) {
        this.f30365a.L0(d10);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: x */
    public u1 b(long j10) {
        this.f30365a.O0(j10);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: z */
    public u1 j(ILogger iLogger, Object obj) {
        this.f30366b.a(this, iLogger, obj);
        return this;
    }
}
