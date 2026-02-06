package com.google.android.gms.internal.play_billing;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t extends j {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f14336o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f14337p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f14338q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(Object[] objArr, int i10, int i11) {
        this.f14336o = objArr;
        this.f14337p = i10;
        this.f14338q = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        b.a(i10, this.f14338q, "index");
        Object obj = this.f14336o[i10 + i10 + this.f14337p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14338q;
    }
}
