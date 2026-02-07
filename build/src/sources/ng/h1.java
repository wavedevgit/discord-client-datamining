package ng;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f39899o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f39900p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f39901q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f39901q = i1Var;
        this.f39899o = i10;
        this.f39900p = i11;
    }

    @Override // ng.d1
    final int c() {
        return this.f39901q.d() + this.f39899o + this.f39900p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.d1
    public final int d() {
        return this.f39901q.d() + this.f39899o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.d1
    public final Object[] e() {
        return this.f39901q.e();
    }

    @Override // ng.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f39900p);
        int i12 = this.f39899o;
        return this.f39901q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f39900p, "index");
        return this.f39901q.get(i10 + this.f39899o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f39900p;
    }

    @Override // ng.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
