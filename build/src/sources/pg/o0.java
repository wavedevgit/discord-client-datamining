package pg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    final transient int f44535i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f44536o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ p0 f44537p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(p0 p0Var, int i10, int i11) {
        this.f44537p = p0Var;
        this.f44535i = i10;
        this.f44536o = i11;
    }

    @Override // pg.k0
    final int c() {
        return this.f44537p.d() + this.f44535i + this.f44536o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.k0
    public final int d() {
        return this.f44537p.d() + this.f44535i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.k0
    public final Object[] e() {
        return this.f44537p.e();
    }

    @Override // pg.p0
    public final p0 f(int i10, int i11) {
        c.c(i10, i11, this.f44536o);
        p0 p0Var = this.f44537p;
        int i12 = this.f44535i;
        return p0Var.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f44536o, "index");
        return this.f44537p.get(i10 + this.f44535i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f44536o;
    }

    @Override // pg.p0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
