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
    private final e0 f36708d;

    /* renamed from: e  reason: collision with root package name */
    private final o f36709e;

    /* renamed from: i  reason: collision with root package name */
    private final p f36710i;

    /* renamed from: o  reason: collision with root package name */
    private final x1.b f36711o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(e0 e0Var, x1.b bVar, f.a aVar) {
        this.f36708d = e0Var;
        this.f36711o = bVar;
        this.f36709e = new o(e0Var.f(), aVar);
        this.f36710i = new p(e0Var.l());
    }

    @Override // a0.e0
    public u1 c() {
        return this.f36708d.c();
    }

    @Override // x.x1.b
    public void d(x1 x1Var) {
        b0.p.a();
        this.f36711o.d(x1Var);
    }

    @Override // x.x1.b
    public void e(x1 x1Var) {
        b0.p.a();
        this.f36711o.e(x1Var);
    }

    @Override // a0.e0
    public a0 f() {
        return this.f36709e;
    }

    @Override // x.x1.b
    public void i(x1 x1Var) {
        b0.p.a();
        this.f36711o.i(x1Var);
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
        return this.f36710i;
    }

    @Override // x.x1.b
    public void m(x1 x1Var) {
        b0.p.a();
        this.f36711o.m(x1Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(int i10) {
        this.f36710i.l(i10);
    }

    @Override // a0.e0
    public boolean q() {
        return false;
    }
}
