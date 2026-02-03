package com.google.android.gms.internal.play_billing;

import java.util.AbstractList;
import java.util.Arrays;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e3 extends b0 implements RandomAccess {

    /* renamed from: o  reason: collision with root package name */
    private static final e3 f14852o = new e3(new Object[0], 0, false);

    /* renamed from: e  reason: collision with root package name */
    private Object[] f14853e;

    /* renamed from: i  reason: collision with root package name */
    private int f14854i;

    private e3(Object[] objArr, int i10, boolean z10) {
        super(z10);
        this.f14853e = objArr;
        this.f14854i = i10;
    }

    public static e3 c() {
        return f14852o;
    }

    private final String d(int i10) {
        int i11 = this.f14854i;
        return "Index:" + i10 + ", Size:" + i11;
    }

    private final void e(int i10) {
        if (i10 >= 0 && i10 < this.f14854i) {
            return;
        }
        throw new IndexOutOfBoundsException(d(i10));
    }

    @Override // com.google.android.gms.internal.play_billing.x1
    public final /* bridge */ /* synthetic */ x1 F(int i10) {
        if (i10 >= this.f14854i) {
            return new e3(Arrays.copyOf(this.f14853e, i10), this.f14854i, true);
        }
        throw new IllegalArgumentException();
    }

    @Override // java.util.AbstractList, java.util.List
    public final void add(int i10, Object obj) {
        int i11;
        b();
        if (i10 >= 0 && i10 <= (i11 = this.f14854i)) {
            int i12 = i10 + 1;
            Object[] objArr = this.f14853e;
            if (i11 < objArr.length) {
                System.arraycopy(objArr, i10, objArr, i12, i11 - i10);
            } else {
                Object[] objArr2 = new Object[((i11 * 3) / 2) + 1];
                System.arraycopy(objArr, 0, objArr2, 0, i10);
                System.arraycopy(this.f14853e, i10, objArr2, i12, this.f14854i - i10);
                this.f14853e = objArr2;
            }
            this.f14853e[i10] = obj;
            this.f14854i++;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException(d(i10));
    }

    @Override // java.util.AbstractList, java.util.List
    public final Object get(int i10) {
        e(i10);
        return this.f14853e[i10];
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.List
    public final Object remove(int i10) {
        int i11;
        b();
        e(i10);
        Object[] objArr = this.f14853e;
        Object obj = objArr[i10];
        if (i10 < this.f14854i - 1) {
            System.arraycopy(objArr, i10 + 1, objArr, i10, (i11 - i10) - 1);
        }
        this.f14854i--;
        ((AbstractList) this).modCount++;
        return obj;
    }

    @Override // java.util.AbstractList, java.util.List
    public final Object set(int i10, Object obj) {
        b();
        e(i10);
        Object[] objArr = this.f14853e;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        ((AbstractList) this).modCount++;
        return obj2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f14854i;
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean add(Object obj) {
        b();
        int i10 = this.f14854i;
        Object[] objArr = this.f14853e;
        if (i10 == objArr.length) {
            this.f14853e = Arrays.copyOf(objArr, ((i10 * 3) / 2) + 1);
        }
        Object[] objArr2 = this.f14853e;
        int i11 = this.f14854i;
        this.f14854i = i11 + 1;
        objArr2[i11] = obj;
        ((AbstractList) this).modCount++;
        return true;
    }
}
