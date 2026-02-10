package qg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    final transient int f46097i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f46098o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ p0 f46099p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(p0 p0Var, int i10, int i11) {
        this.f46099p = p0Var;
        this.f46097i = i10;
        this.f46098o = i11;
    }

    @Override // qg.k0
    final int c() {
        return this.f46099p.d() + this.f46097i + this.f46098o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final int d() {
        return this.f46099p.d() + this.f46097i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final Object[] e() {
        return this.f46099p.e();
    }

    @Override // qg.p0
    public final p0 f(int i10, int i11) {
        c.c(i10, i11, this.f46098o);
        p0 p0Var = this.f46099p;
        int i12 = this.f46097i;
        return p0Var.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f46098o, "index");
        return this.f46099p.get(i10 + this.f46097i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f46098o;
    }

    @Override // qg.p0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
