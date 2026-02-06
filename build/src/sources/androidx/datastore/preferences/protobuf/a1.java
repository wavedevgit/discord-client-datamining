package androidx.datastore.preferences.protobuf;

import java.util.AbstractList;
import java.util.Arrays;
import java.util.RandomAccess;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a1 extends c implements RandomAccess {

    /* renamed from: o  reason: collision with root package name */
    private static final a1 f4023o;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f4024e;

    /* renamed from: i  reason: collision with root package name */
    private int f4025i;

    static {
        a1 a1Var = new a1(new Object[0], 0);
        f4023o = a1Var;
        a1Var.m();
    }

    private a1(Object[] objArr, int i10) {
        this.f4024e = objArr;
        this.f4025i = i10;
    }

    private static Object[] c(int i10) {
        return new Object[i10];
    }

    public static a1 d() {
        return f4023o;
    }

    private void e(int i10) {
        if (i10 >= 0 && i10 < this.f4025i) {
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }

    private String f(int i10) {
        return "Index:" + i10 + ", Size:" + this.f4025i;
    }

    @Override // androidx.datastore.preferences.protobuf.c, java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        b();
        int i10 = this.f4025i;
        Object[] objArr = this.f4024e;
        if (i10 == objArr.length) {
            this.f4024e = Arrays.copyOf(objArr, ((i10 * 3) / 2) + 1);
        }
        Object[] objArr2 = this.f4024e;
        int i11 = this.f4025i;
        this.f4025i = i11 + 1;
        objArr2[i11] = obj;
        ((AbstractList) this).modCount++;
        return true;
    }

    @Override // androidx.datastore.preferences.protobuf.y.b
    /* renamed from: g */
    public a1 z(int i10) {
        if (i10 >= this.f4025i) {
            return new a1(Arrays.copyOf(this.f4024e, i10), this.f4025i);
        }
        throw new IllegalArgumentException();
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        e(i10);
        return this.f4024e[i10];
    }

    @Override // java.util.AbstractList, java.util.List
    public Object remove(int i10) {
        int i11;
        b();
        e(i10);
        Object[] objArr = this.f4024e;
        Object obj = objArr[i10];
        if (i10 < this.f4025i - 1) {
            System.arraycopy(objArr, i10 + 1, objArr, i10, (i11 - i10) - 1);
        }
        this.f4025i--;
        ((AbstractList) this).modCount++;
        return obj;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        b();
        e(i10);
        Object[] objArr = this.f4024e;
        Object obj2 = objArr[i10];
        objArr[i10] = obj;
        ((AbstractList) this).modCount++;
        return obj2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public int size() {
        return this.f4025i;
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        int i11;
        b();
        if (i10 >= 0 && i10 <= (i11 = this.f4025i)) {
            Object[] objArr = this.f4024e;
            if (i11 < objArr.length) {
                System.arraycopy(objArr, i10, objArr, i10 + 1, i11 - i10);
            } else {
                Object[] c10 = c(((i11 * 3) / 2) + 1);
                System.arraycopy(this.f4024e, 0, c10, 0, i10);
                System.arraycopy(this.f4024e, i10, c10, i10 + 1, this.f4025i - i10);
                this.f4024e = c10;
            }
            this.f4024e[i10] = obj;
            this.f4025i++;
            ((AbstractList) this).modCount++;
            return;
        }
        throw new IndexOutOfBoundsException(f(i10));
    }
}
