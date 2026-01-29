package com.google.android.gms.internal.fido;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d1 extends e1 {

    /* renamed from: o  reason: collision with root package name */
    final transient int f14983o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f14984p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ e1 f14985q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, int i10, int i11) {
        this.f14985q = e1Var;
        this.f14983o = i10;
        this.f14984p = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f14985q.d() + this.f14983o + this.f14984p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int d() {
        return this.f14985q.d() + this.f14983o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final Object[] f() {
        return this.f14985q.f();
    }

    @Override // java.util.List
    public final Object get(int i10) {
        k0.a(i10, this.f14984p, "index");
        return this.f14985q.get(i10 + this.f14983o);
    }

    @Override // com.google.android.gms.internal.fido.e1
    public final e1 h(int i10, int i11) {
        k0.e(i10, i11, this.f14984p);
        int i12 = this.f14983o;
        return this.f14985q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14984p;
    }

    @Override // com.google.android.gms.internal.fido.e1, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
