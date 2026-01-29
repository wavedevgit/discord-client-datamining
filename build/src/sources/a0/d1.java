package a0;

import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d1 implements d0 {

    /* renamed from: a  reason: collision with root package name */
    private final d0 f27a;

    public d1(d0 d0Var) {
        this.f27a = d0Var;
    }

    @Override // x.o
    public int a() {
        return this.f27a.a();
    }

    @Override // a0.d0
    public String b() {
        return this.f27a.b();
    }

    @Override // x.o
    public int c() {
        return this.f27a.c();
    }

    @Override // a0.d0
    public List d(int i10) {
        return this.f27a.d(i10);
    }

    @Override // a0.d0
    public d2 e() {
        return this.f27a.e();
    }

    @Override // a0.d0
    public List f(int i10) {
        return this.f27a.f(i10);
    }

    @Override // a0.d0
    public void g(Executor executor, k kVar) {
        this.f27a.g(executor, kVar);
    }

    @Override // a0.d0
    public d0 h() {
        return this.f27a.h();
    }

    @Override // x.o
    public String i() {
        return this.f27a.i();
    }

    @Override // x.o
    public int j(int i10) {
        return this.f27a.j(i10);
    }

    @Override // a0.d0
    public void k(k kVar) {
        this.f27a.k(kVar);
    }
}
