package og;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f39250o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f39251p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f39252q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f39252q = i1Var;
        this.f39250o = i10;
        this.f39251p = i11;
    }

    @Override // og.d1
    final int c() {
        return this.f39252q.d() + this.f39250o + this.f39251p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final int d() {
        return this.f39252q.d() + this.f39250o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.d1
    public final Object[] e() {
        return this.f39252q.e();
    }

    @Override // og.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f39251p);
        int i12 = this.f39250o;
        return this.f39252q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f39251p, "index");
        return this.f39252q.get(i10 + this.f39250o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f39251p;
    }

    @Override // og.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
