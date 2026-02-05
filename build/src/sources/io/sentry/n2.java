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
    private static final n2 f29230b = new n2();

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.r f29231a = new io.sentry.util.r(new r.a() { // from class: io.sentry.m2
        @Override // io.sentry.util.r.a
        public final Object a() {
            k7 empty;
            empty = k7.empty();
            return empty;
        }
    });

    private n2() {
    }

    public static n2 g() {
        return f29230b;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c A() {
        return new io.sentry.protocol.c();
    }

    @Override // io.sentry.IScope
    public void B(String str, Object obj) {
    }

    @Override // io.sentry.IScope
    public void C(e1 e1Var) {
    }

    @Override // io.sentry.IScope
    public List D() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 E() {
        return null;
    }

    @Override // io.sentry.IScope
    public String F() {
        return null;
    }

    @Override // io.sentry.IScope
    public void G() {
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b H() {
        return io.sentry.featureflags.c.a();
    }

    @Override // io.sentry.IScope
    public void I(y0 y0Var) {
    }

    @Override // io.sentry.IScope
    public void J(String str) {
    }

    @Override // io.sentry.IScope
    public z7 K() {
        return null;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x L() {
        return io.sentry.protocol.x.f29471e;
    }

    @Override // io.sentry.IScope
    public s3 M() {
        return new s3();
    }

    @Override // io.sentry.IScope
    public void N(String str) {
    }

    @Override // io.sentry.IScope
    public y0 O() {
        return s2.n();
    }

    @Override // io.sentry.IScope
    public List P() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public void Q(SentryEvent sentryEvent) {
    }

    @Override // io.sentry.IScope
    public void R() {
    }

    @Override // io.sentry.IScope
    public s3 S(z3.a aVar) {
        return new s3();
    }

    @Override // io.sentry.IScope
    public void T(z3.c cVar) {
    }

    @Override // io.sentry.IScope
    public void U(io.sentry.protocol.x xVar) {
    }

    @Override // io.sentry.IScope
    public List V() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public void W(s3 s3Var) {
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return (k7) this.f29231a.a();
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
    public Map getExtras() {
        return new HashMap();
    }

    @Override // io.sentry.IScope
    public String h() {
        return null;
    }

    @Override // io.sentry.IScope
    public void i(Breadcrumb breadcrumb, Hint hint) {
    }

    @Override // io.sentry.IScope
    public void k(Throwable th2, ISpan iSpan, String str) {
    }

    @Override // io.sentry.IScope
    public void l(io.sentry.protocol.h0 h0Var) {
    }

    @Override // io.sentry.IScope
    public e1 m() {
        return null;
    }

    @Override // io.sentry.IScope
    public z7 n() {
        return null;
    }

    @Override // io.sentry.IScope
    public SentryLevel o() {
        return null;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g p() {
        return null;
    }

    @Override // io.sentry.IScope
    public void q(io.sentry.protocol.x xVar) {
    }

    @Override // io.sentry.IScope
    public z3.d r() {
        return null;
    }

    @Override // io.sentry.IScope
    public void s(k7 k7Var) {
    }

    @Override // io.sentry.IScope
    public ISpan t() {
        return null;
    }

    @Override // io.sentry.IScope
    public Queue u() {
        return new ArrayDeque();
    }

    @Override // io.sentry.IScope
    public void v(List list) {
    }

    @Override // io.sentry.IScope
    public z7 w(z3.b bVar) {
        return null;
    }

    @Override // io.sentry.IScope
    public Map x() {
        return new HashMap();
    }

    @Override // io.sentry.IScope
    public void y() {
    }

    @Override // io.sentry.IScope
    public List z() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1190clone() {
        return g();
    }
}
