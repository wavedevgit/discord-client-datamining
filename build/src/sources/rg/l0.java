package rg;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends m0 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f46973o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f46974p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ m0 f46975q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l0(m0 m0Var, int i10, int i11) {
        this.f46975q = m0Var;
        this.f46973o = i10;
        this.f46974p = i11;
    }

    @Override // rg.h0
    final int c() {
        return this.f46975q.d() + this.f46973o + this.f46974p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final int d() {
        return this.f46975q.d() + this.f46973o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // rg.h0
    public final Object[] e() {
        return this.f46975q.e();
    }

    @Override // rg.m0
    public final m0 f(int i10, int i11) {
        el.c(i10, i11, this.f46974p);
        int i12 = this.f46973o;
        return this.f46975q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.List
    public final Object get(int i10) {
        el.a(i10, this.f46974p, "index");
        return this.f46975q.get(i10 + this.f46973o);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f46974p;
    }

    @Override // rg.m0, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
