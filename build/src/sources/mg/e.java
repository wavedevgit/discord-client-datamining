package mg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e extends f {

    /* renamed from: o  reason: collision with root package name */
    final transient int f37148o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f37149p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ f f37150q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(f fVar, int i10, int i11) {
        this.f37150q = fVar;
        this.f37148o = i10;
        this.f37149p = i11;
    }

    @Override // mg.c
    final int c() {
        return this.f37150q.d() + this.f37148o + this.f37149p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.c
    public final int d() {
        return this.f37150q.d() + this.f37148o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mg.c
    public final Object[] e() {
        return this.f37150q.e();
    }

    @Override // mg.f
    public final f f(int i10, int i11) {
        t0.c(i10, i11, this.f37149p);
        int i12 = this.f37148o;
        return this.f37150q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        t0.a(i10, this.f37149p, "index");
        return this.f37150q.get(i10 + this.f37148o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f37149p;
    }

    @Override // mg.f, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
