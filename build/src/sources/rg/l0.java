package rg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f48519o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f48520p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ m0 f48521q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(m0 m0Var, int i10, int i11) {
        this.f48521q = m0Var;
        this.f48519o = i10;
        this.f48520p = i11;
    }

    @Override // rg.h0
    final int c() {
        return this.f48521q.d() + this.f48519o + this.f48520p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final int d() {
        return this.f48521q.d() + this.f48519o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final Object[] e() {
        return this.f48521q.e();
    }

    @Override // rg.m0
    public final m0 f(int i10, int i11) {
        el.c(i10, i11, this.f48520p);
        int i12 = this.f48519o;
        return this.f48521q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f48520p, "index");
        return this.f48521q.get(i10 + this.f48519o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f48520p;
    }

    @Override // rg.m0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
