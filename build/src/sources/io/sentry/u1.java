package io.sentry;

import java.io.Writer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements f3 {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.vendor.gson.stream.c f30680a;

    /* renamed from: b  reason: collision with root package name */
    private final t1 f30681b;

    public u1(Writer writer, int i10) {
        this.f30680a = new io.sentry.vendor.gson.stream.c(writer);
        this.f30681b = new t1(i10);
    }

    @Override // io.sentry.f3
    public void A(boolean z10) {
        this.f30680a.A(z10);
    }

    @Override // io.sentry.f3
    /* renamed from: B */
    public u1 f(String str) {
        this.f30680a.O0(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: C */
    public u1 d(boolean z10) {
        this.f30680a.S0(z10);
        return this;
    }

    @Override // io.sentry.f3
    public String a() {
        return this.f30680a.y();
    }

    @Override // io.sentry.f3
    public f3 g(String str) {
        this.f30680a.z(str);
        return this;
    }

    @Override // io.sentry.f3
    public void h(String str) {
        this.f30680a.E0(str);
    }

    @Override // io.sentry.f3
    /* renamed from: m */
    public u1 x() {
        this.f30680a.i();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: n */
    public u1 u() {
        this.f30680a.m();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: o */
    public u1 v() {
        this.f30680a.p();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: p */
    public u1 D() {
        this.f30680a.s();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: q */
    public u1 e(String str) {
        this.f30680a.C(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: r */
    public u1 l() {
        this.f30680a.J();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: s */
    public u1 c(double d10) {
        this.f30680a.G0(d10);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: t */
    public u1 b(long j10) {
        this.f30680a.H0(j10);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: w */
    public u1 j(ILogger iLogger, Object obj) {
        this.f30681b.a(this, iLogger, obj);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: y */
    public u1 k(Boolean bool) {
        this.f30680a.L0(bool);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: z */
    public u1 i(Number number) {
        this.f30680a.N0(number);
        return this;
    }
}
