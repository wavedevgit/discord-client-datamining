package com.google.android.gms.internal.play_billing;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t extends j {

    /* renamed from: o  reason: collision with root package name */
    private final transient Object[] f15011o;

    /* renamed from: p  reason: collision with root package name */
    private final transient int f15012p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f15013q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(Object[] objArr, int i10, int i11) {
        this.f15011o = objArr;
        this.f15012p = i10;
        this.f15013q = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.g
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final Object get(int i10) {
        b.a(i10, this.f15013q, "index");
        Object obj = this.f15011o[i10 + i10 + this.f15012p];
        Objects.requireNonNull(obj);
        return obj;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f15013q;
    }
}
