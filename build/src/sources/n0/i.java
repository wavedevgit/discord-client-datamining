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
    private final e0 f39504d;

    /* renamed from: e  reason: collision with root package name */
    private final o f39505e;

    /* renamed from: i  reason: collision with root package name */
    private final p f39506i;

    /* renamed from: o  reason: collision with root package name */
    private final x1.b f39507o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(e0 e0Var, x1.b bVar, f.a aVar) {
        this.f39504d = e0Var;
        this.f39507o = bVar;
        this.f39505e = new o(e0Var.f(), aVar);
        this.f39506i = new p(e0Var.m());
    }

    @Override // a0.e0
    public u1 c() {
        return this.f39504d.c();
    }

    @Override // x.x1.b
    public void d(x1 x1Var) {
        b0.p.a();
        this.f39507o.d(x1Var);
    }

    @Override // x.x1.b
    public void e(x1 x1Var) {
        b0.p.a();
        this.f39507o.e(x1Var);
    }

    @Override // a0.e0
    public a0 f() {
        return this.f39505e;
    }

    @Override // x.x1.b
    public void g(x1 x1Var) {
        b0.p.a();
        this.f39507o.g(x1Var);
    }

    @Override // x.x1.b
    public void h(x1 x1Var) {
        b0.p.a();
        this.f39507o.h(x1Var);
    }

    @Override // a0.e0
    public void k(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // a0.e0
    public void l(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // a0.e0
    public d0 m() {
        return this.f39506i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(int i10) {
        this.f39506i.l(i10);
    }

    @Override // a0.e0
    public boolean q() {
        return false;
    }
}
