package io.sentry;

import io.sentry.util.r;
import io.sentry.z3;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Queue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n2 implements IScope {

    /* renamed from: b  reason: collision with root package name */
    private static final n2 f30172b = new n2();

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.r f30173a = new io.sentry.util.r(new r.a() { // from class: io.sentry.m2
        @Override // io.sentry.util.r.a
        public final Object a() {
            k7 empty;
            empty = k7.empty();
            return empty;
        }
    });

    private n2() {
    }

    public static n2 V() {
        return f30172b;
    }

    @Override // io.sentry.IScope
    public void A(e1 e1Var) {
    }

    @Override // io.sentry.IScope
    public List B() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 C() {
        return null;
    }

    @Override // io.sentry.IScope
    public String D() {
        return null;
    }

    @Override // io.sentry.IScope
    public void E() {
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b F() {
        return io.sentry.featureflags.c.a();
    }

    @Override // io.sentry.IScope
    public void G(y0 y0Var) {
    }

    @Override // io.sentry.IScope
    public void H(String str) {
    }

    @Override // io.sentry.IScope
    public z7 I() {
        return null;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x J() {
        return io.sentry.protocol.x.f30413e;
    }

    @Override // io.sentry.IScope
    public s3 K() {
        return new s3();
    }

    @Override // io.sentry.IScope
    public void L(String str) {
    }

    @Override // io.sentry.IScope
    public y0 M() {
        return s2.n();
    }

    @Override // io.sentry.IScope
    public List N() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public void O(SentryEvent sentryEvent) {
    }

    @Override // io.sentry.IScope
    public void P() {
    }

    @Override // io.sentry.IScope
    public s3 Q(z3.a aVar) {
        return new s3();
    }

    @Override // io.sentry.IScope
    public void R(z3.c cVar) {
    }

    @Override // io.sentry.IScope
    public void S(io.sentry.protocol.x xVar) {
    }

    @Override // io.sentry.IScope
    public List T() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public void U(s3 s3Var) {
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return (k7) this.f30173a.a();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.o c() {
        return null;
    }

    @Override // io.sentry.IScope
    public void clear() {
    }

    @Override // io.sentry.IScope
    public void e(Breadcrumb breadcrumb) {
    }

    @Override // io.sentry.IScope
    public void f(String str, String str2) {
    }

    @Override // io.sentry.IScope
    public void g(Breadcrumb breadcrumb, Hint hint) {
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return new HashMap();
    }

    @Override // io.sentry.IScope
    public String h() {
        return null;
    }

    @Override // io.sentry.IScope
    public void i(Throwable th2, ISpan iSpan, String str) {
    }

    @Override // io.sentry.IScope
    public void j(io.sentry.protocol.h0 h0Var) {
    }

    @Override // io.sentry.IScope
    public e1 k() {
        return null;
    }

    @Override // io.sentry.IScope
    public z7 l() {
        return null;
    }

    @Override // io.sentry.IScope
    public SentryLevel m() {
        return null;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g n() {
        return null;
    }

    @Override // io.sentry.IScope
    public void o(io.sentry.protocol.x xVar) {
    }

    @Override // io.sentry.IScope
    public z3.d p() {
        return null;
    }

    @Override // io.sentry.IScope
    public void q(k7 k7Var) {
    }

    @Override // io.sentry.IScope
    public ISpan r() {
        return null;
    }

    @Override // io.sentry.IScope
    public Queue s() {
        return new ArrayDeque();
    }

    @Override // io.sentry.IScope
    public void t(List list) {
    }

    @Override // io.sentry.IScope
    public z7 u(z3.b bVar) {
        return null;
    }

    @Override // io.sentry.IScope
    public Map v() {
        return new HashMap();
    }

    @Override // io.sentry.IScope
    public void w() {
    }

    @Override // io.sentry.IScope
    public List x() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c y() {
        return new io.sentry.protocol.c();
    }

    @Override // io.sentry.IScope
    public void z(String str, Object obj) {
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1188clone() {
        return V();
    }
}
