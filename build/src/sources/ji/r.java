package ji;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends s {

    /* renamed from: o  reason: collision with root package name */
    final transient int f30938o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f30939p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ s f30940q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(s sVar, int i10, int i11) {
        this.f30940q = sVar;
        this.f30938o = i10;
        this.f30939p = i11;
    }

    @Override // ji.p
    final int c() {
        return this.f30940q.d() + this.f30938o + this.f30939p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.p
    public final int d() {
        return this.f30940q.d() + this.f30938o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ji.p
    public final Object[] e() {
        return this.f30940q.e();
    }

    @Override // ji.s
    public final s f(int i10, int i11) {
        m.c(i10, i11, this.f30939p);
        int i12 = this.f30938o;
        return this.f30940q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, this.f30939p, "index");
        return this.f30940q.get(i10 + this.f30938o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f30939p;
    }

    @Override // ji.s, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
