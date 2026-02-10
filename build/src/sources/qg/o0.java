package qg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o0 extends p0 {

    /* renamed from: i  reason: collision with root package name */
    final transient int f44765i;

    /* renamed from: o  reason: collision with root package name */
    final transient int f44766o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ p0 f44767p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(p0 p0Var, int i10, int i11) {
        this.f44767p = p0Var;
        this.f44765i = i10;
        this.f44766o = i11;
    }

    @Override // qg.k0
    final int c() {
        return this.f44767p.d() + this.f44765i + this.f44766o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final int d() {
        return this.f44767p.d() + this.f44765i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.k0
    public final Object[] e() {
        return this.f44767p.e();
    }

    @Override // qg.p0
    public final p0 f(int i10, int i11) {
        c.c(i10, i11, this.f44766o);
        p0 p0Var = this.f44767p;
        int i12 = this.f44765i;
        return p0Var.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        c.a(i10, this.f44766o, "index");
        return this.f44767p.get(i10 + this.f44765i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f44766o;
    }

    @Override // qg.p0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
