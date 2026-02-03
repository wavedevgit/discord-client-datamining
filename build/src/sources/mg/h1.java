package mg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f38229o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f38230p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f38231q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f38231q = i1Var;
        this.f38229o = i10;
        this.f38230p = i11;
    }

    @Override // mg.d1
    final int c() {
        return this.f38231q.d() + this.f38229o + this.f38230p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final int d() {
        return this.f38231q.d() + this.f38229o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final Object[] e() {
        return this.f38231q.e();
    }

    @Override // mg.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f38230p);
        int i12 = this.f38229o;
        return this.f38231q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f38230p, "index");
        return this.f38231q.get(i10 + this.f38229o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f38230p;
    }

    @Override // mg.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
