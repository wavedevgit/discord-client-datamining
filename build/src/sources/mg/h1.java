package mg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 extends i1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f38233o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f38234p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ i1 f38235q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, int i10, int i11) {
        this.f38235q = i1Var;
        this.f38233o = i10;
        this.f38234p = i11;
    }

    @Override // mg.d1
    final int c() {
        return this.f38235q.d() + this.f38233o + this.f38234p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final int d() {
        return this.f38235q.d() + this.f38233o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.d1
    public final Object[] e() {
        return this.f38235q.e();
    }

    @Override // mg.i1
    public final i1 f(int i10, int i11) {
        t.d(i10, i11, this.f38234p);
        int i12 = this.f38233o;
        return this.f38235q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t.a(i10, this.f38234p, "index");
        return this.f38235q.get(i10 + this.f38233o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f38234p;
    }

    @Override // mg.i1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
