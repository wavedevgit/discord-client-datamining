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
    private final e0 f39003d;

    /* renamed from: e  reason: collision with root package name */
    private final o f39004e;

    /* renamed from: i  reason: collision with root package name */
    private final p f39005i;

    /* renamed from: o  reason: collision with root package name */
    private final x1.b f39006o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(e0 e0Var, x1.b bVar, f.a aVar) {
        this.f39003d = e0Var;
        this.f39006o = bVar;
        this.f39004e = new o(e0Var.f(), aVar);
        this.f39005i = new p(e0Var.l());
    }

    @Override // a0.e0
    public u1 c() {
        return this.f39003d.c();
    }

    @Override // x.x1.b
    public void d(x1 x1Var) {
        b0.p.a();
        this.f39006o.d(x1Var);
    }

    @Override // x.x1.b
    public void e(x1 x1Var) {
        b0.p.a();
        this.f39006o.e(x1Var);
    }

    @Override // a0.e0
    public a0 f() {
        return this.f39004e;
    }

    @Override // x.x1.b
    public void h(x1 x1Var) {
        b0.p.a();
        this.f39006o.h(x1Var);
    }

    @Override // a0.e0
    public void j(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // a0.e0
    public void k(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // a0.e0
    public d0 l() {
        return this.f39005i;
    }

    @Override // x.x1.b
    public void o(x1 x1Var) {
        b0.p.a();
        this.f39006o.o(x1Var);
    }

    @Override // a0.e0
    public boolean p() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(int i10) {
        this.f39005i.l(i10);
    }
}
