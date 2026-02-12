package jk;

import java.util.AbstractList;
import java.util.Arrays;
import java.util.RandomAccess;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u0 extends c implements RandomAccess {

    /* renamed from: o  reason: collision with root package name */
    private static final u0 f31167o;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f31168e;

    /* renamed from: i  reason: collision with root package name */
    private int f31169i;

    static {
        u0 u0Var = new u0(new Object[0], 0);
        f31167o = u0Var;
        u0Var.m();
    }

    private u0(Object[] objArr, int i10) {
        this.f31168e = objArr;
        this.f31169i = i10;
    }

    private static Object[] c(int i10) {
        return new Object[i10];
    }

    public static u0 d() {
        return f31167o;
    }

    private void e(int i10) {
        if (i10 >= 0 && i10 < this.f31169i) {
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }

    private String f(int i10) {
        return "Index:" + i10 + ", Size:" + this.f31169i;
    }

    @Override // jk.c, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        b();
        int i10 = this.f31169i;
        Object[] objArr = this.f31168e;
        if (i10 == objArr.length) {
            this.f31168e = Arrays.copyOf(objArr, ((i10 * 3) / 2) + 1);
        }
        Object[] objArr2 = this.f31168e;
        int i11 = this.f31169i;
        this.f31169i = i11 + 1;
        objArr2[i11] = obj;
        ((AbstractList) this).modCount++;
        return true;
    }

    @Override // jk.u.b
    /* renamed from: g */
    public u0 z(int i10) {
        if (i10 >= this.f31169i) {
            return new u0(Arrays.copyOf(this.f31168e, i10), this.f31169i);
        }
        throw new IllegalArgumentException();
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        e(i10);
        return this.f31168e[i10];
    }

    @Override // jk.c, java.util.AbstractList, java.util.List
    public Object remove(int i10) {
        int i11;
        b();
        e(i10);
        Object[] objArr = this.f31168e;
        Object obj = objArr[i10];
        if (i10 < this.f31169i - 1) {
            System.arraycopy(objArr, i10 + 1, objArr, i10, (i11 - i10) - 1);
        }
        this.f31169i--;
        ((AbstractList) this).modCount++;
        return obj;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        b();
        e(i10);
        Object[] objArr = this.f31168e;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        ((AbstractList) this).modCount++;
        return obj2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f31169i;
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        int i11;
        b();
        if (i10 >= 0 && i10 <= (i11 = this.f31169i)) {
            Object[] objArr = this.f31168e;
            if (i11 < objArr.length) {
                System.arraycopy(objArr, i10, objArr, i10 + 1, i11 - i10);
            } else {
                Object[] c10 = c(((i11 * 3) / 2) + 1);
                System.arraycopy(this.f31168e, 0, c10, 0, i10);
                System.arraycopy(this.f31168e, i10, c10, i10 + 1, this.f31169i - i10);
                this.f31168e = c10;
            }
            this.f31168e[i10] = obj;
            this.f31169i++;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }
}
