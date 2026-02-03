package gi;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r extends s {

    /* renamed from: o  reason: collision with root package name */
    final transient int f27042o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f27043p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ s f27044q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(s sVar, int i10, int i11) {
        this.f27044q = sVar;
        this.f27042o = i10;
        this.f27043p = i11;
    }

    @Override // gi.p
    final int c() {
        return this.f27044q.d() + this.f27042o + this.f27043p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final int d() {
        return this.f27044q.d() + this.f27042o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.p
    public final Object[] e() {
        return this.f27044q.e();
    }

    @Override // gi.s
    public final s f(int i10, int i11) {
        m.c(i10, i11, this.f27043p);
        int i12 = this.f27042o;
        return this.f27044q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        m.a(i10, this.f27043p, "index");
        return this.f27044q.get(i10 + this.f27042o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f27043p;
    }

    @Override // gi.s, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
