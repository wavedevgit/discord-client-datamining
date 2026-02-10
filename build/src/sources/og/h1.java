package og;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f40924o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f40925p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f40926q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f40926q = i1Var;
        this.f40924o = i10;
        this.f40925p = i11;
    }

    @Override // og.d1
    final int c() {
        return this.f40926q.d() + this.f40924o + this.f40925p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final int d() {
        return this.f40926q.d() + this.f40924o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final Object[] e() {
        return this.f40926q.e();
    }

    @Override // og.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f40925p);
        int i12 = this.f40924o;
        return this.f40926q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f40925p, "index");
        return this.f40926q.get(i10 + this.f40924o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f40925p;
    }

    @Override // og.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
