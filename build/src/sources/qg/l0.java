package qg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f47353o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f47354p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ m0 f47355q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(m0 m0Var, int i10, int i11) {
        this.f47355q = m0Var;
        this.f47353o = i10;
        this.f47354p = i11;
    }

    @Override // qg.h0
    final int c() {
        return this.f47355q.d() + this.f47353o + this.f47354p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.h0
    public final int d() {
        return this.f47355q.d() + this.f47353o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // qg.h0
    public final Object[] e() {
        return this.f47355q.e();
    }

    @Override // qg.m0
    public final m0 f(int i10, int i11) {
        el.c(i10, i11, this.f47354p);
        int i12 = this.f47353o;
        return this.f47355q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f47354p, "index");
        return this.f47355q.get(i10 + this.f47353o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f47354p;
    }

    @Override // qg.m0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
