package com.google.android.gms.internal.fido;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u1 extends h1 {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f14124s;

    /* renamed from: t  reason: collision with root package name */
    static final u1 f14125t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f14126i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f14127o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f14128p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f14129q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f14130r;

    static {
        Object[] objArr = new Object[0];
        f14124s = objArr;
        f14125t = new u1(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f14126i = objArr;
        this.f14127o = i10;
        this.f14128p = objArr2;
        this.f14129q = i11;
        this.f14130r = i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f14126i, 0, objArr, 0, this.f14130r);
        return this.f14130r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f14130r;
    }

    @Override // com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        if (obj != null) {
            Object[] objArr = this.f14128p;
            if (objArr.length != 0) {
                int a10 = y0.a(obj.hashCode());
                while (true) {
                    int i10 = a10 & this.f14129q;
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
        return this.f14126i;
    }

    @Override // com.google.android.gms.internal.fido.h1
    final boolean h() {
        return true;
    }

    @Override // com.google.android.gms.internal.fido.h1, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f14127o;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return j().listIterator(0);
    }

    @Override // com.google.android.gms.internal.fido.h1
    final e1 l() {
        return e1.i(this.f14126i, this.f14130r);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f14130r;
    }
}
