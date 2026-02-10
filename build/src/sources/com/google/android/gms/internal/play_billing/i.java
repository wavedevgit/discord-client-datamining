package com.google.android.gms.internal.play_billing;

import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends j {

    /* renamed from: o  reason: collision with root package name */
    final transient int f14927o;

    /* renamed from: p  reason: collision with root package name */
    final transient int f14928p;

    /* renamed from: q  reason: collision with root package name */
    final /* synthetic */ j f14929q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(j jVar, int i10, int i11) {
        this.f14929q = jVar;
        this.f14927o = i10;
        this.f14928p = i11;
    }

    @Override // com.google.android.gms.internal.play_billing.g
    final int c() {
        return this.f14929q.d() + this.f14927o + this.f14928p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final int d() {
        return this.f14929q.d() + this.f14927o;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final boolean f() {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final Object[] g() {
        return this.f14929q.g();
    }

    @Override // java.util.List
    public final Object get(int i10) {
        b.a(i10, this.f14928p, "index");
        return this.f14929q.get(i10 + this.f14927o);
    }

    @Override // com.google.android.gms.internal.play_billing.j
    public final j i(int i10, int i11) {
        b.d(i10, i11, this.f14928p);
        int i12 = this.f14927o;
        return this.f14929q.subList(i10 + i12, i11 + i12);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14928p;
    }

    @Override // com.google.android.gms.internal.play_billing.j, java.util.List
    public final /* bridge */ /* synthetic */ List subList(int i10, int i11) {
        return subList(i10, i11);
    }
}
