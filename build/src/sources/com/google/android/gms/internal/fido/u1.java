package com.google.android.gms.internal.fido;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u1 extends h1 {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f15133s;

    /* renamed from: t  reason: collision with root package name */
    static final u1 f15134t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f15135i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f15136o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f15137p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f15138q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f15139r;

    static {
        Object[] objArr = new Object[0];
        f15133s = objArr;
        f15134t = new u1(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f15135i = objArr;
        this.f15136o = i10;
        this.f15137p = objArr2;
        this.f15138q = i11;
        this.f15139r = i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f15135i, 0, objArr, 0, this.f15139r);
        return this.f15139r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f15139r;
    }

    @Override // com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        if (obj != null) {
            Object[] objArr = this.f15137p;
            if (objArr.length != 0) {
                int a10 = y0.a(obj.hashCode());
                while (true) {
                    int i10 = a10 & this.f15138q;
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
        return this.f15135i;
    }

    @Override // com.google.android.gms.internal.fido.h1
    final boolean h() {
        return true;
    }

    @Override // com.google.android.gms.internal.fido.h1, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f15136o;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return j().listIterator(0);
    }

    @Override // com.google.android.gms.internal.fido.h1
    final e1 k() {
        return e1.i(this.f15135i, this.f15139r);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f15139r;
    }
}
