package og;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    final transient int f43193i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f43194o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ p0 f43195p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(p0 p0Var, int i10, int i11) {
        this.f43195p = p0Var;
        this.f43193i = i10;
        this.f43194o = i11;
    }

    @Override // og.k0
    final int c() {
        return this.f43195p.d() + this.f43193i + this.f43194o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.k0
    public final int d() {
        return this.f43195p.d() + this.f43193i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // og.k0
    public final Object[] e() {
        return this.f43195p.e();
    }

    @Override // og.p0
    public final p0 f(int i10, int i11) {
        c.c(i10, i11, this.f43194o);
        p0 p0Var = this.f43195p;
        int i12 = this.f43193i;
        return p0Var.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f43194o, "index");
        return this.f43195p.get(i10 + this.f43193i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f43194o;
    }

    @Override // og.p0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
