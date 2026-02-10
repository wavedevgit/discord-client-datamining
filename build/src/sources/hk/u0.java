package hk;

import java.util.AbstractList;
import java.util.Arrays;
import java.util.RandomAccess;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u0 extends c implements RandomAccess {

    /* renamed from: o  reason: collision with root package name */
    private static final u0 f26328o;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f26329e;

    /* renamed from: i  reason: collision with root package name */
    private int f26330i;

    static {
        u0 u0Var = new u0(new Object[0], 0);
        f26328o = u0Var;
        u0Var.m();
    }

    private u0(Object[] objArr, int i10) {
        this.f26329e = objArr;
        this.f26330i = i10;
    }

    private static Object[] c(int i10) {
        return new Object[i10];
    }

    public static u0 d() {
        return f26328o;
    }

    private void e(int i10) {
        if (i10 >= 0 && i10 < this.f26330i) {
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }

    private String f(int i10) {
        return "Index:" + i10 + ", Size:" + this.f26330i;
    }

    @Override // hk.c, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        b();
        int i10 = this.f26330i;
        Object[] objArr = this.f26329e;
        if (i10 == objArr.length) {
            this.f26329e = Arrays.copyOf(objArr, ((i10 * 3) / 2) + 1);
        }
        Object[] objArr2 = this.f26329e;
        int i11 = this.f26330i;
        this.f26330i = i11 + 1;
        objArr2[i11] = obj;
        ((AbstractList) this).modCount++;
        return true;
    }

    @Override // hk.u.b
    /* renamed from: g */
    public u0 z(int i10) {
        if (i10 >= this.f26330i) {
            return new u0(Arrays.copyOf(this.f26329e, i10), this.f26330i);
        }
        throw new IllegalArgumentException();
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        e(i10);
        return this.f26329e[i10];
    }

    @Override // hk.c, java.util.AbstractList, java.util.List
    public Object remove(int i10) {
        int i11;
        b();
        e(i10);
        Object[] objArr = this.f26329e;
        Object obj = objArr[i10];
        if (i10 < this.f26330i - 1) {
            System.arraycopy(objArr, i10 + 1, objArr, i10, (i11 - i10) - 1);
        }
        this.f26330i--;
        ((AbstractList) this).modCount++;
        return obj;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        b();
        e(i10);
        Object[] objArr = this.f26329e;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        ((AbstractList) this).modCount++;
        return obj2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f26330i;
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        int i11;
        b();
        if (i10 >= 0 && i10 <= (i11 = this.f26330i)) {
            Object[] objArr = this.f26329e;
            if (i11 < objArr.length) {
                System.arraycopy(objArr, i10, objArr, i10 + 1, i11 - i10);
            } else {
                Object[] c10 = c(((i11 * 3) / 2) + 1);
                System.arraycopy(this.f26329e, 0, c10, 0, i10);
                System.arraycopy(this.f26329e, i10, c10, i10 + 1, this.f26330i - i10);
                this.f26329e = c10;
            }
            this.f26329e[i10] = obj;
            this.f26330i++;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }
}
