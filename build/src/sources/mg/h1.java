package mg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f37688o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f37689p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f37690q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f37690q = i1Var;
        this.f37688o = i10;
        this.f37689p = i11;
    }

    @Override // mg.d1
    final int c() {
        return this.f37690q.d() + this.f37688o + this.f37689p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final int d() {
        return this.f37690q.d() + this.f37688o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final Object[] e() {
        return this.f37690q.e();
    }

    @Override // mg.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f37689p);
        int i12 = this.f37688o;
        return this.f37690q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f37689p, "index");
        return this.f37690q.get(i10 + this.f37688o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37689p;
    }

    @Override // mg.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
