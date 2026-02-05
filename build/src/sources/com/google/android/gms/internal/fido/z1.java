package com.google.android.gms.internal.fido;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z1 extends h1 {

    /* renamed from: i  reason: collision with root package name */
    final transient Object f14151i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public z1(Object obj) {
        obj.getClass();
        this.f14151i = obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int b(Object[] objArr, int i10) {
        objArr[0] = this.f14151i;
        return 1;
    }

    @Override // com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        return this.f14151i.equals(obj);
    }

    @Override // com.google.android.gms.internal.fido.h1, com.google.android.gms.internal.fido.z0
    public final c2 e() {
        return new n1(this.f14151i);
    }

    @Override // com.google.android.gms.internal.fido.h1, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f14151i.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return new n1(this.f14151i);
    }

    @Override // com.google.android.gms.internal.fido.h1
    public final e1 j() {
        return e1.l(this.f14151i);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return 1;
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        String obj = this.f14151i.toString();
        return "[" + obj + "]";
    }
}
