package com.google.android.gms.internal.play_billing;

import java.util.AbstractList;
import java.util.Arrays;
import java.util.Collection;
import java.util.RandomAccess;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r1 extends b0 implements RandomAccess, v1, c3 {

    /* renamed from: o  reason: collision with root package name */
    private static final r1 f15372o = new r1(new int[0], 0, false);

    /* renamed from: e  reason: collision with root package name */
    private int[] f15373e;

    /* renamed from: i  reason: collision with root package name */
    private int f15374i;

    private r1(int[] iArr, int i10, boolean z10) {
        super(z10);
        this.f15373e = iArr;
        this.f15374i = i10;
    }

    public static r1 d() {
        return f15372o;
    }

    private final String f(int i10) {
        int i11 = this.f15374i;
        return "Index:" + i10 + ", Size:" + i11;
    }

    private final void g(int i10) {
        if (i10 >= 0 && i10 < this.f15374i) {
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }

    @Override // com.google.android.gms.internal.play_billing.x1
    public final /* bridge */ /* synthetic */ x1 F(int i10) {
        if (i10 >= this.f15374i) {
            return new r1(Arrays.copyOf(this.f15373e, i10), this.f15374i, true);
        }
        throw new IllegalArgumentException();
    }

    @Override // java.util.AbstractList, java.util.List
    public final /* synthetic */ void add(int i10, Object obj) {
        int i11;
        int intValue = ((Integer) obj).intValue();
        b();
        if (i10 >= 0 && i10 <= (i11 = this.f15374i)) {
            int i12 = i10 + 1;
            int[] iArr = this.f15373e;
            if (i11 < iArr.length) {
                System.arraycopy(iArr, i10, iArr, i12, i11 - i10);
            } else {
                int[] iArr2 = new int[((i11 * 3) / 2) + 1];
                System.arraycopy(iArr, 0, iArr2, 0, i10);
                System.arraycopy(this.f15373e, i10, iArr2, i12, this.f15374i - i10);
                this.f15373e = iArr2;
            }
            this.f15373e[i10] = intValue;
            this.f15374i++;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean addAll(Collection collection) {
        b();
        byte[] bArr = y1.f15413d;
        collection.getClass();
        if (!(collection instanceof r1)) {
            return super.addAll(collection);
        }
        r1 r1Var = (r1) collection;
        int i10 = r1Var.f15374i;
        if (i10 == 0) {
            return false;
        }
        int i11 = this.f15374i;
        if (Integer.MAX_VALUE - i11 >= i10) {
            int i12 = i11 + i10;
            int[] iArr = this.f15373e;
            if (i12 > iArr.length) {
                this.f15373e = Arrays.copyOf(iArr, i12);
            }
            System.arraycopy(r1Var.f15373e, 0, this.f15373e, this.f15374i, r1Var.f15374i);
            this.f15374i = i12;
            ((AbstractList) this).modCount++;
            return true;
        }
        throw new OutOfMemoryError();
    }

    public final int c(int i10) {
        g(i10);
        return this.f15373e[i10];
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final boolean contains(Object obj) {
        if (indexOf(obj) != -1) {
            return true;
        }
        return false;
    }

    public final void e(int i10) {
        b();
        int i11 = this.f15374i;
        int[] iArr = this.f15373e;
        if (i11 == iArr.length) {
            int[] iArr2 = new int[((i11 * 3) / 2) + 1];
            System.arraycopy(iArr, 0, iArr2, 0, i11);
            this.f15373e = iArr2;
        }
        int[] iArr3 = this.f15373e;
        int i12 = this.f15374i;
        this.f15374i = i12 + 1;
        iArr3[i12] = i10;
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.Collection, java.util.List
    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof r1)) {
            return super.equals(obj);
        }
        r1 r1Var = (r1) obj;
        if (this.f15374i != r1Var.f15374i) {
            return false;
        }
        int[] iArr = r1Var.f15373e;
        for (int i10 = 0; i10 < this.f15374i; i10++) {
            if (this.f15373e[i10] != iArr[i10]) {
                return false;
            }
        }
        return true;
    }

    @Override // java.util.AbstractList, java.util.List
    public final /* synthetic */ Object get(int i10) {
        g(i10);
        return Integer.valueOf(this.f15373e[i10]);
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.Collection, java.util.List
    public final int hashCode() {
        int i10 = 1;
        for (int i11 = 0; i11 < this.f15374i; i11++) {
            i10 = (i10 * 31) + this.f15373e[i11];
        }
        return i10;
    }

    @Override // java.util.AbstractList, java.util.List
    public final int indexOf(Object obj) {
        if (!(obj instanceof Integer)) {
            return -1;
        }
        int intValue = ((Integer) obj).intValue();
        int i10 = this.f15374i;
        for (int i11 = 0; i11 < i10; i11++) {
            if (this.f15373e[i11] == intValue) {
                return i11;
            }
        }
        return -1;
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.List
    public final /* bridge */ /* synthetic */ Object remove(int i10) {
        int i11;
        b();
        g(i10);
        int[] iArr = this.f15373e;
        int i12 = iArr[i10];
        if (i10 < this.f15374i - 1) {
            System.arraycopy(iArr, i10 + 1, iArr, i10, (i11 - i10) - 1);
        }
        this.f15374i--;
        ((AbstractList) this).modCount++;
        return Integer.valueOf(i12);
    }

    @Override // java.util.AbstractList
    protected final void removeRange(int i10, int i11) {
        b();
        if (i11 >= i10) {
            int[] iArr = this.f15373e;
            System.arraycopy(iArr, i11, iArr, i10, this.f15374i - i11);
            this.f15374i -= i11 - i10;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException("toIndex < fromIndex");
    }

    @Override // java.util.AbstractList, java.util.List
    public final /* bridge */ /* synthetic */ Object set(int i10, Object obj) {
        int intValue = ((Integer) obj).intValue();
        b();
        g(i10);
        int[] iArr = this.f15373e;
        int i11 = iArr[i10];
        iArr[i10] = intValue;
        return Integer.valueOf(i11);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public final int size() {
        return this.f15374i;
    }

    @Override // com.google.android.gms.internal.play_billing.b0, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public final /* bridge */ /* synthetic */ boolean add(Object obj) {
        e(((Integer) obj).intValue());
        return true;
    }
}
