package og;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f39251o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f39252p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f39253q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f39253q = i1Var;
        this.f39251o = i10;
        this.f39252p = i11;
    }

    @Override // og.d1
    final int c() {
        return this.f39253q.d() + this.f39251o + this.f39252p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final int d() {
        return this.f39253q.d() + this.f39251o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final Object[] e() {
        return this.f39253q.e();
    }

    @Override // og.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f39252p);
        int i12 = this.f39251o;
        return this.f39253q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f39252p, "index");
        return this.f39253q.get(i10 + this.f39251o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f39252p;
    }

    @Override // og.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
