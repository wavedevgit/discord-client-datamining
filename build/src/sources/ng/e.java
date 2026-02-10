package ng;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends f {

    /* renamed from: o  reason: collision with root package name */
    final transient int f37837o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f37838p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ f f37839q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar, int i10, int i11) {
        this.f37839q = fVar;
        this.f37837o = i10;
        this.f37838p = i11;
    }

    @Override // ng.c
    final int c() {
        return this.f37839q.d() + this.f37837o + this.f37838p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.c
    public final int d() {
        return this.f37839q.d() + this.f37837o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ng.c
    public final Object[] e() {
        return this.f37839q.e();
    }

    @Override // ng.f
    public final f f(int i10, int i11) {
        t0.c(i10, i11, this.f37838p);
        int i12 = this.f37837o;
        return this.f37839q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f37838p, "index");
        return this.f37839q.get(i10 + this.f37837o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37838p;
    }

    @Override // ng.f, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
