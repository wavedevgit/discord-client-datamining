package gk;

import java.util.AbstractList;
import java.util.Arrays;
import java.util.RandomAccess;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u0 extends c implements RandomAccess {

    /* renamed from: o  reason: collision with root package name */
    private static final u0 f25369o;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f25370e;

    /* renamed from: i  reason: collision with root package name */
    private int f25371i;

    static {
        u0 u0Var = new u0(new Object[0], 0);
        f25369o = u0Var;
        u0Var.m();
    }

    private u0(Object[] objArr, int i10) {
        this.f25370e = objArr;
        this.f25371i = i10;
    }

    private static Object[] c(int i10) {
        return new Object[i10];
    }

    public static u0 d() {
        return f25369o;
    }

    private void e(int i10) {
        if (i10 >= 0 && i10 < this.f25371i) {
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }

    private String f(int i10) {
        return "Index:" + i10 + ", Size:" + this.f25371i;
    }

    @Override // gk.c, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        b();
        int i10 = this.f25371i;
        Object[] objArr = this.f25370e;
        if (i10 == objArr.length) {
            this.f25370e = Arrays.copyOf(objArr, ((i10 * 3) / 2) + 1);
        }
        Object[] objArr2 = this.f25370e;
        int i11 = this.f25371i;
        this.f25371i = i11 + 1;
        objArr2[i11] = obj;
        ((AbstractList) this).modCount++;
        return true;
    }

    @Override // gk.u.b
    /* renamed from: g */
    public u0 z(int i10) {
        if (i10 >= this.f25371i) {
            return new u0(Arrays.copyOf(this.f25370e, i10), this.f25371i);
        }
        throw new IllegalArgumentException();
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        e(i10);
        return this.f25370e[i10];
    }

    @Override // gk.c, java.util.AbstractList, java.util.List
    public Object remove(int i10) {
        int i11;
        b();
        e(i10);
        Object[] objArr = this.f25370e;
        Object obj = objArr[i10];
        if (i10 < this.f25371i - 1) {
            System.arraycopy(objArr, i10 + 1, objArr, i10, (i11 - i10) - 1);
        }
        this.f25371i--;
        ((AbstractList) this).modCount++;
        return obj;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        b();
        e(i10);
        Object[] objArr = this.f25370e;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        ((AbstractList) this).modCount++;
        return obj2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f25371i;
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        int i11;
        b();
        if (i10 >= 0 && i10 <= (i11 = this.f25371i)) {
            Object[] objArr = this.f25370e;
            if (i11 < objArr.length) {
                System.arraycopy(objArr, i10, objArr, i10 + 1, i11 - i10);
            } else {
                Object[] c10 = c(((i11 * 3) / 2) + 1);
                System.arraycopy(this.f25370e, 0, c10, 0, i10);
                System.arraycopy(this.f25370e, i10, c10, i10 + 1, this.f25371i - i10);
                this.f25370e = c10;
            }
            this.f25370e[i10] = obj;
            this.f25371i++;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }
}
