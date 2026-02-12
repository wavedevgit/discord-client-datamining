package com.google.android.gms.internal.fido;

import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t1 extends e1 {

    /* renamed from: q  reason: collision with root package name */
    static final e1 f14796q = new t1(new Object[0], 0);

    /* renamed from: o  reason: collision with root package name */
    final transient Object[] f14797o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f14798p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t1(Object[] objArr, int i10) {
        this.f14797o = objArr;
        this.f14798p = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.e1, com.google.android.gms.internal.fido.z0
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f14797o, 0, objArr, 0, this.f14798p);
        return this.f14798p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f14798p;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final Object[] f() {
        return this.f14797o;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        k0.a(i10, this.f14798p, "index");
        Object obj = this.f14797o[i10];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14798p;
    }
}
