package com.google.android.gms.internal.play_billing;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t extends j {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f14373o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f14374p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f14375q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(Object[] objArr, int i10, int i11) {
        this.f14373o = objArr;
        this.f14374p = i10;
        this.f14375q = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        b.a(i10, this.f14375q, "index");
        Object obj = this.f14373o[i10 + i10 + this.f14374p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14375q;
    }
}
