package og;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f39819o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f39820p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f39821q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f39821q = i1Var;
        this.f39819o = i10;
        this.f39820p = i11;
    }

    @Override // og.d1
    final int c() {
        return this.f39821q.d() + this.f39819o + this.f39820p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final int d() {
        return this.f39821q.d() + this.f39819o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final Object[] e() {
        return this.f39821q.e();
    }

    @Override // og.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f39820p);
        int i12 = this.f39819o;
        return this.f39821q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f39820p, "index");
        return this.f39821q.get(i10 + this.f39819o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f39820p;
    }

    @Override // og.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
