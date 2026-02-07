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
    private static final n2 f28422b = new n2();

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.r f28423a = new io.sentry.util.r(new r.a() { // from class: io.sentry.m2
        @Override // io.sentry.util.r.a
        public final Object a() {
            k7 empty;
            empty = k7.empty();
            return empty;
        }
    });

    private n2() {
    }

    public static n2 i() {
        return f28422b;
    }

    @Override // io.sentry.IScope
    public void A(String str, Object obj) {
    }

    @Override // io.sentry.IScope
    public void B(e1 e1Var) {
    }

    @Override // io.sentry.IScope
    public List C() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.h0 D() {
        return null;
    }

    @Override // io.sentry.IScope
    public String E() {
        return null;
    }

    @Override // io.sentry.IScope
    public void F() {
    }

    @Override // io.sentry.IScope
    public io.sentry.featureflags.b G() {
        return io.sentry.featureflags.c.a();
    }

    @Override // io.sentry.IScope
    public void H(y0 y0Var) {
    }

    @Override // io.sentry.IScope
    public void I(String str) {
    }

    @Override // io.sentry.IScope
    public z7 J() {
        return null;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.x K() {
        return io.sentry.protocol.x.f28663e;
    }

    @Override // io.sentry.IScope
    public s3 L() {
        return new s3();
    }

    @Override // io.sentry.IScope
    public void M(String str) {
    }

    @Override // io.sentry.IScope
    public y0 N() {
        return s2.n();
    }

    @Override // io.sentry.IScope
    public List O() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public void P(SentryEvent sentryEvent) {
    }

    @Override // io.sentry.IScope
    public void Q() {
    }

    @Override // io.sentry.IScope
    public s3 R(z3.a aVar) {
        return new s3();
    }

    @Override // io.sentry.IScope
    public void S(z3.c cVar) {
    }

    @Override // io.sentry.IScope
    public void T(io.sentry.protocol.x xVar) {
    }

    @Override // io.sentry.IScope
    public List U() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public void V(s3 s3Var) {
    }

    @Override // io.sentry.IScope
    public void a(String str, String str2) {
    }

    @Override // io.sentry.IScope
    public k7 b() {
        return (k7) this.f28423a.a();
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
    public String g() {
        return null;
    }

    @Override // io.sentry.IScope
    public Map getExtras() {
        return new HashMap();
    }

    @Override // io.sentry.IScope
    public void h(Breadcrumb breadcrumb, Hint hint) {
    }

    @Override // io.sentry.IScope
    public void j(Throwable th2, ISpan iSpan, String str) {
    }

    @Override // io.sentry.IScope
    public void k(io.sentry.protocol.h0 h0Var) {
    }

    @Override // io.sentry.IScope
    public e1 l() {
        return null;
    }

    @Override // io.sentry.IScope
    public z7 m() {
        return null;
    }

    @Override // io.sentry.IScope
    public SentryLevel n() {
        return null;
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.g o() {
        return null;
    }

    @Override // io.sentry.IScope
    public void p(io.sentry.protocol.x xVar) {
    }

    @Override // io.sentry.IScope
    public z3.d q() {
        return null;
    }

    @Override // io.sentry.IScope
    public void r(k7 k7Var) {
    }

    @Override // io.sentry.IScope
    public ISpan s() {
        return null;
    }

    @Override // io.sentry.IScope
    public Queue t() {
        return new ArrayDeque();
    }

    @Override // io.sentry.IScope
    public void u(List list) {
    }

    @Override // io.sentry.IScope
    public z7 v(z3.b bVar) {
        return null;
    }

    @Override // io.sentry.IScope
    public Map w() {
        return new HashMap();
    }

    @Override // io.sentry.IScope
    public void x() {
    }

    @Override // io.sentry.IScope
    public List y() {
        return new ArrayList();
    }

    @Override // io.sentry.IScope
    public io.sentry.protocol.c z() {
        return new io.sentry.protocol.c();
    }

    @Override // io.sentry.IScope
    /* renamed from: clone */
    public IScope m1190clone() {
        return i();
    }
}
