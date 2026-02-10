package com.google.android.gms.internal.fido;

import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class u1 extends h1 {

    /* renamed from: s  reason: collision with root package name */
    private static final Object[] f14804s;

    /* renamed from: t  reason: collision with root package name */
    static final u1 f14805t;

    /* renamed from: i  reason: collision with root package name */
    final transient Object[] f14806i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f14807o;

    /* renamed from: p  reason: collision with root package name */
    final transient Object[] f14808p;

    /* renamed from: q  reason: collision with root package name */
    private final transient int f14809q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f14810r;

    static {
        Object[] objArr = new Object[0];
        f14804s = objArr;
        f14805t = new u1(objArr, 0, objArr, 0, 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public u1(Object[] objArr, int i10, Object[] objArr2, int i11, int i12) {
        this.f14806i = objArr;
        this.f14807o = i10;
        this.f14808p = objArr2;
        this.f14809q = i11;
        this.f14810r = i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int b(Object[] objArr, int i10) {
        System.arraycopy(this.f14806i, 0, objArr, 0, this.f14810r);
        return this.f14810r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final int c() {
        return this.f14810r;
    }

    @Override // com.google.android.gms.internal.fido.z0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        if (obj != null) {
            Object[] objArr = this.f14808p;
            if (objArr.length != 0) {
                int a10 = y0.a(obj.hashCode());
                while (true) {
                    int i10 = a10 & this.f14809q;
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
        return k().listIterator(0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.fido.z0
    public final Object[] f() {
        return this.f14806i;
    }

    @Override // com.google.android.gms.internal.fido.h1, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f14807o;
    }

    @Override // com.google.android.gms.internal.fido.h1
    final boolean i() {
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final /* synthetic */ Iterator iterator() {
        return k().listIterator(0);
    }

    @Override // com.google.android.gms.internal.fido.h1
    final e1 l() {
        return e1.j(this.f14806i, this.f14810r);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f14810r;
    }
}
