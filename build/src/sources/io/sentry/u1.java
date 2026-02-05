package io.sentry;

import java.io.Writer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements f3 {

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.vendor.gson.stream.c f29784a;

    /* renamed from: b  reason: collision with root package name */
    private final t1 f29785b;

    public u1(Writer writer, int i10) {
        this.f29784a = new io.sentry.vendor.gson.stream.c(writer);
        this.f29785b = new t1(i10);
    }

    @Override // io.sentry.f3
    /* renamed from: A */
    public u1 k(Boolean bool) {
        this.f29784a.V0(bool);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: B */
    public u1 i(Number number) {
        this.f29784a.Y0(number);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: C */
    public u1 f(String str) {
        this.f29784a.Z0(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: D */
    public u1 d(boolean z10) {
        this.f29784a.e1(z10);
        return this;
    }

    @Override // io.sentry.f3
    public String a() {
        return this.f29784a.F();
    }

    @Override // io.sentry.f3
    public f3 g(String str) {
        this.f29784a.L(str);
        return this;
    }

    @Override // io.sentry.f3
    public void h(String str) {
        this.f29784a.I0(str);
    }

    @Override // io.sentry.f3
    /* renamed from: m */
    public u1 v() {
        this.f29784a.k();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: n */
    public u1 s() {
        this.f29784a.m();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: o */
    public u1 t() {
        this.f29784a.y();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: p */
    public u1 z() {
        this.f29784a.E();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: q */
    public u1 e(String str) {
        this.f29784a.N(str);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: r */
    public u1 l() {
        this.f29784a.W();
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: u */
    public u1 c(double d10) {
        this.f29784a.N0(d10);
        return this;
    }

    @Override // io.sentry.f3
    public void w(boolean z10) {
        this.f29784a.w(z10);
    }

    @Override // io.sentry.f3
    /* renamed from: x */
    public u1 b(long j10) {
        this.f29784a.S0(j10);
        return this;
    }

    @Override // io.sentry.f3
    /* renamed from: y */
    public u1 j(ILogger iLogger, Object obj) {
        this.f29785b.a(this, iLogger, obj);
        return this;
    }
}
