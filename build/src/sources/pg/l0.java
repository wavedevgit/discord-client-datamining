package pg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f45635o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f45636p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ m0 f45637q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(m0 m0Var, int i10, int i11) {
        this.f45637q = m0Var;
        this.f45635o = i10;
        this.f45636p = i11;
    }

    @Override // pg.h0
    final int c() {
        return this.f45637q.d() + this.f45635o + this.f45636p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.h0
    public final int d() {
        return this.f45637q.d() + this.f45635o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.h0
    public final Object[] e() {
        return this.f45637q.e();
    }

    @Override // pg.m0
    public final m0 f(int i10, int i11) {
        el.c(i10, i11, this.f45636p);
        int i12 = this.f45635o;
        return this.f45637q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f45636p, "index");
        return this.f45637q.get(i10 + this.f45635o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f45636p;
    }

    @Override // pg.m0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
