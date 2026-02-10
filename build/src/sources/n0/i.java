package n0;

import a0.a0;
import a0.d0;
import a0.e0;
import a0.u1;
import java.util.Collection;
import n0.f;
import x.x1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements e0 {

    /* renamed from: d  reason: collision with root package name */
    private final e0 f37703d;

    /* renamed from: e  reason: collision with root package name */
    private final o f37704e;

    /* renamed from: i  reason: collision with root package name */
    private final p f37705i;

    /* renamed from: o  reason: collision with root package name */
    private final x1.b f37706o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(e0 e0Var, x1.b bVar, f.a aVar) {
        this.f37703d = e0Var;
        this.f37706o = bVar;
        this.f37704e = new o(e0Var.f(), aVar);
        this.f37705i = new p(e0Var.m());
    }

    @Override // a0.e0
    public u1 c() {
        return this.f37703d.c();
    }

    @Override // x.x1.b
    public void d(x1 x1Var) {
        b0.p.a();
        this.f37706o.d(x1Var);
    }

    @Override // x.x1.b
    public void e(x1 x1Var) {
        b0.p.a();
        this.f37706o.e(x1Var);
    }

    @Override // a0.e0
    public a0 f() {
        return this.f37704e;
    }

    @Override // x.x1.b
    public void h(x1 x1Var) {
        b0.p.a();
        this.f37706o.h(x1Var);
    }

    @Override // a0.e0
    public void j(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // x.x1.b
    public void k(x1 x1Var) {
        b0.p.a();
        this.f37706o.k(x1Var);
    }

    @Override // a0.e0
    public void l(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // a0.e0
    public d0 m() {
        return this.f37705i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(int i10) {
        this.f37705i.l(i10);
    }

    @Override // a0.e0
    public boolean q() {
        return false;
    }
}
