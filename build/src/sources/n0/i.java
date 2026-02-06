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
    private final e0 f38358d;

    /* renamed from: e  reason: collision with root package name */
    private final o f38359e;

    /* renamed from: i  reason: collision with root package name */
    private final p f38360i;

    /* renamed from: o  reason: collision with root package name */
    private final x1.b f38361o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(e0 e0Var, x1.b bVar, f.a aVar) {
        this.f38358d = e0Var;
        this.f38361o = bVar;
        this.f38359e = new o(e0Var.f(), aVar);
        this.f38360i = new p(e0Var.m());
    }

    @Override // a0.e0
    public u1 c() {
        return this.f38358d.c();
    }

    @Override // x.x1.b
    public void d(x1 x1Var) {
        b0.p.a();
        this.f38361o.d(x1Var);
    }

    @Override // x.x1.b
    public void e(x1 x1Var) {
        b0.p.a();
        this.f38361o.e(x1Var);
    }

    @Override // a0.e0
    public a0 f() {
        return this.f38359e;
    }

    @Override // a0.e0
    public void i(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // x.x1.b
    public void j(x1 x1Var) {
        b0.p.a();
        this.f38361o.j(x1Var);
    }

    @Override // x.x1.b
    public void k(x1 x1Var) {
        b0.p.a();
        this.f38361o.k(x1Var);
    }

    @Override // a0.e0
    public void l(Collection collection) {
        throw new UnsupportedOperationException("Operation not supported by VirtualCamera.");
    }

    @Override // a0.e0
    public d0 m() {
        return this.f38360i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(int i10) {
        this.f38360i.l(i10);
    }

    @Override // a0.e0
    public boolean q() {
        return false;
    }
}
