package rg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f47542o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f47543p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ m0 f47544q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(m0 m0Var, int i10, int i11) {
        this.f47544q = m0Var;
        this.f47542o = i10;
        this.f47543p = i11;
    }

    @Override // rg.h0
    final int c() {
        return this.f47544q.d() + this.f47542o + this.f47543p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final int d() {
        return this.f47544q.d() + this.f47542o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final Object[] e() {
        return this.f47544q.e();
    }

    @Override // rg.m0
    public final m0 f(int i10, int i11) {
        el.c(i10, i11, this.f47543p);
        int i12 = this.f47542o;
        return this.f47544q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f47543p, "index");
        return this.f47544q.get(i10 + this.f47542o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f47543p;
    }

    @Override // rg.m0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
