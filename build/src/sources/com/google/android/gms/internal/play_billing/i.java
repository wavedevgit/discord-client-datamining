package com.google.android.gms.internal.play_billing;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends j {

    /* renamed from: o  reason: collision with root package name */
    final transient int f14247o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f14248p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ j f14249q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, int i10, int i11) {
        this.f14249q = jVar;
        this.f14247o = i10;
        this.f14248p = i11;
    }

    @Override // com.google.android.gms.internal.play_billing.g
    final int c() {
        return this.f14249q.d() + this.f14247o + this.f14248p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final int d() {
        return this.f14249q.d() + this.f14247o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final boolean f() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final Object[] g() {
        return this.f14249q.g();
    }

    @Override // java.util.List
    public final Object get(int i10) {
        b.a(i10, this.f14248p, "index");
        return this.f14249q.get(i10 + this.f14247o);
    }

    @Override // com.google.android.gms.internal.play_billing.j
    public final j h(int i10, int i11) {
        b.d(i10, i11, this.f14248p);
        int i12 = this.f14247o;
        return this.f14249q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14248p;
    }

    @Override // com.google.android.gms.internal.play_billing.j, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
