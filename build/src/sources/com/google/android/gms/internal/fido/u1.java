package com.google.android.gms.internal.fido;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u1 extends h1 {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f14087s;

    /* renamed from: t  reason: collision with root package name */
    static final u1 f14088t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f14089i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f14090o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f14091p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f14092q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f14093r;

    static {
        Object[] objArr = new Object[0];
        f14087s = objArr;
        f14088t = new u1(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f14089i = objArr;
        this.f14090o = i10;
        this.f14091p = objArr2;
        this.f14092q = i11;
        this.f14093r = i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f14089i, 0, objArr, 0, this.f14093r);
        return this.f14093r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f14093r;
    }

    @Override // com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        if (obj != null) {
            Object[] objArr = this.f14091p;
            if (objArr.length != 0) {
                int a10 = y0.a(obj.hashCode());
                while (true) {
                    int i10 = a10 & this.f14092q;
                    Object obj2 = objArr[i10];
                    if (obj2 == null) {
                        return false;
                    }
                    if (obj2.equals(obj)) {
                        return true;
                    }
                    a10 = i10 + 1;
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int d() {
        return 0;
    }

    @Override // com.google.android.gms.internal.fido.h1, com.google.android.gms.internal.fido.z0
    public final c2 e() {
        return j().listIterator(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final Object[] f() {
        return this.f14089i;
    }

    @Override // com.google.android.gms.internal.fido.h1
    final boolean h() {
        return true;
    }

    @Override // com.google.android.gms.internal.fido.h1, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f14090o;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return j().listIterator(0);
    }

    @Override // com.google.android.gms.internal.fido.h1
    final e1 l() {
        return e1.i(this.f14089i, this.f14093r);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f14093r;
    }
}
