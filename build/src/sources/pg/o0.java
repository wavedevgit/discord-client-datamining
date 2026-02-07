package pg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    final transient int f44583i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f44584o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ p0 f44585p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(p0 p0Var, int i10, int i11) {
        this.f44585p = p0Var;
        this.f44583i = i10;
        this.f44584o = i11;
    }

    @Override // pg.k0
    final int c() {
        return this.f44585p.d() + this.f44583i + this.f44584o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.k0
    public final int d() {
        return this.f44585p.d() + this.f44583i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.k0
    public final Object[] e() {
        return this.f44585p.e();
    }

    @Override // pg.p0
    public final p0 f(int i10, int i11) {
        c.c(i10, i11, this.f44584o);
        p0 p0Var = this.f44585p;
        int i12 = this.f44583i;
        return p0Var.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f44584o, "index");
        return this.f44585p.get(i10 + this.f44583i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f44584o;
    }

    @Override // pg.p0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
