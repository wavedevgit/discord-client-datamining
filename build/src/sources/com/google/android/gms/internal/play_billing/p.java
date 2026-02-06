package com.google.android.gms.internal.play_billing;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends j {

    /* renamed from: q  reason: collision with root package name */
    static final j f14309q = new p(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f14310o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f14311p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Object[] objArr, int i10) {
        this.f14310o = objArr;
        this.f14311p = i10;
    }

    @Override // com.google.android.gms.internal.play_billing.j, com.google.android.gms.internal.play_billing.g
    final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f14310o, 0, objArr, 0, this.f14311p);
        return this.f14311p;
    }

    @Override // com.google.android.gms.internal.play_billing.g
    final int c() {
        return this.f14311p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final boolean f() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final Object[] g() {
        return this.f14310o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        b.a(i10, this.f14311p, "index");
        Object obj = this.f14310o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14311p;
    }
}
