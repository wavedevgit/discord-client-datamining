package com.google.android.gms.internal.play_billing;

import java.util.AbstractMap;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q extends j {

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ r f15364o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(r rVar) {
        this.f15364o = rVar;
    }

    @Override // com.google.android.gms.internal.play_billing.g
    public final boolean f() {
        return true;
    }

    @Override // java.util.List
    public final /* bridge */ /* synthetic */ Object get(int i10) {
        int i11;
        Object[] objArr;
        Object[] objArr2;
        i11 = this.f15364o.f15367p;
        b.a(i10, i11, "index");
        objArr = this.f15364o.f15366o;
        int i12 = i10 + i10;
        Object obj = objArr[i12];
        Objects.requireNonNull(obj);
        objArr2 = this.f15364o.f15366o;
        Object obj2 = objArr2[i12 + 1];
        Objects.requireNonNull(obj2);
        return new AbstractMap.SimpleImmutableEntry(obj, obj2);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        int i10;
        i10 = this.f15364o.f15367p;
        return i10;
    }
}
