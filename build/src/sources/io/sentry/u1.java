package io.sentry;

import java.io.Writer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements f3 {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.vendor.gson.stream.c f28928a;

    /* renamed from: b  reason: collision with root package name */
    private final t1 f28929b;

    public u1(Writer writer, int i10) {
        this.f28928a = new io.sentry.vendor.gson.stream.c(writer);
        this.f28929b = new t1(i10);
    }

    @Override // io.sentry.f3
    public void A(boolean z10) {
        this.f28928a.A(z10);
    }

    @Override // io.sentry.f3
    /* renamed from: B */
    public u1 f(String str) {
        this.f28928a.Y0(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: C */
    public u1 d(boolean z10) {
        this.f28928a.d1(z10);
        return this;
    }

    @Override // io.sentry.f3
    public String a() {
        return this.f28928a.y();
    }

    @Override // io.sentry.f3
    public f3 g(String str) {
        this.f28928a.z(str);
        return this;
    }

    @Override // io.sentry.f3
    public void h(String str) {
        this.f28928a.I0(str);
    }

    @Override // io.sentry.f3
    /* renamed from: m */
    public u1 x() {
        this.f28928a.k();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: n */
    public u1 u() {
        this.f28928a.m();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: o */
    public u1 v() {
        this.f28928a.p();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: p */
    public u1 D() {
        this.f28928a.s();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: q */
    public u1 e(String str) {
        this.f28928a.C(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: r */
    public u1 l() {
        this.f28928a.J();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: s */
    public u1 c(double d10) {
        this.f28928a.K0(d10);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: t */
    public u1 b(long j10) {
        this.f28928a.L0(j10);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: w */
    public u1 j(ILogger iLogger, Object obj) {
        this.f28929b.a(this, iLogger, obj);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: y */
    public u1 k(Boolean bool) {
        this.f28928a.O0(bool);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: z */
    public u1 i(Number number) {
        this.f28928a.V0(number);
        return this;
    }
}
