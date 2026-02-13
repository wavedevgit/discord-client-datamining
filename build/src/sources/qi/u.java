package qi;

import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;
import java.util.Set;
import java.util.SortedSet;
import qi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u extends q implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient s f45986e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends q.a {

        /* renamed from: d  reason: collision with root package name */
        Object[] f45987d;

        /* renamed from: e  reason: collision with root package name */
        private int f45988e;

        public a() {
            super(4);
        }

        private void k(Object obj) {
            Objects.requireNonNull(this.f45987d);
            int length = this.f45987d.length - 1;
            int hashCode = obj.hashCode();
            int b10 = p.b(hashCode);
            while (true) {
                int i10 = b10 & length;
                Object[] objArr = this.f45987d;
                Object obj2 = objArr[i10];
                if (obj2 == null) {
                    objArr[i10] = obj;
                    this.f45988e += hashCode;
                    super.d(obj);
                    return;
                } else if (obj2.equals(obj)) {
                    return;
                } else {
                    b10 = i10 + 1;
                }
            }
        }

        @Override // qi.q.b
        /* renamed from: h */
        public a a(Object obj) {
            pi.m.j(obj);
            if (this.f45987d != null && u.k(this.f45959b) <= this.f45987d.length) {
                k(obj);
                return this;
            }
            this.f45987d = null;
            super.d(obj);
            return this;
        }

        public a i(Object... objArr) {
            if (this.f45987d != null) {
                for (Object obj : objArr) {
                    a(obj);
                }
                return this;
            }
            super.e(objArr);
            return this;
        }

        public a j(Iterable iterable) {
            pi.m.j(iterable);
            if (this.f45987d != null) {
                for (Object obj : iterable) {
                    a(obj);
                }
                return this;
            }
            super.b(iterable);
            return this;
        }

        public u l() {
            u l10;
            Object[] objArr;
            int i10 = this.f45959b;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (this.f45987d == null || u.k(i10) != this.f45987d.length) {
                        l10 = u.l(this.f45959b, this.f45958a);
                        this.f45959b = l10.size();
                    } else {
                        if (u.A(this.f45959b, this.f45958a.length)) {
                            objArr = Arrays.copyOf(this.f45958a, this.f45959b);
                        } else {
                            objArr = this.f45958a;
                        }
                        Object[] objArr2 = objArr;
                        int i11 = this.f45988e;
                        Object[] objArr3 = this.f45987d;
                        l10 = new m0(objArr2, i11, objArr3, objArr3.length - 1, this.f45959b);
                    }
                    this.f45960c = true;
                    this.f45987d = null;
                    return l10;
                }
                Object obj = this.f45958a[0];
                Objects.requireNonNull(obj);
                return u.u(obj);
            }
            return u.t();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean A(int i10, int i11) {
        if (i10 < (i11 >> 1) + (i11 >> 2)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int k(int i10) {
        int max = Math.max(i10, 2);
        boolean z10 = true;
        if (max < 751619276) {
            int highestOneBit = Integer.highestOneBit(max - 1) << 1;
            while (highestOneBit * 0.7d < max) {
                highestOneBit <<= 1;
            }
            return highestOneBit;
        }
        if (max >= 1073741824) {
            z10 = false;
        }
        pi.m.e(z10, "collection too large");
        return 1073741824;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static u l(int i10, Object... objArr) {
        if (i10 != 0) {
            if (i10 != 1) {
                int k10 = k(i10);
                Object[] objArr2 = new Object[k10];
                int i11 = k10 - 1;
                int i12 = 0;
                int i13 = 0;
                for (int i14 = 0; i14 < i10; i14++) {
                    Object a10 = h0.a(objArr[i14], i14);
                    int hashCode = a10.hashCode();
                    int b10 = p.b(hashCode);
                    while (true) {
                        int i15 = b10 & i11;
                        Object obj = objArr2[i15];
                        if (obj == null) {
                            objArr[i13] = a10;
                            objArr2[i15] = a10;
                            i12 += hashCode;
                            i13++;
                            break;
                        } else if (obj.equals(a10)) {
                            break;
                        } else {
                            b10++;
                        }
                    }
                }
                Arrays.fill(objArr, i13, i10, (Object) null);
                if (i13 == 1) {
                    Object obj2 = objArr[0];
                    Objects.requireNonNull(obj2);
                    return new r0(obj2);
                } else if (k(i13) < k10 / 2) {
                    return l(i13, objArr);
                } else {
                    if (A(i13, objArr.length)) {
                        objArr = Arrays.copyOf(objArr, i13);
                    }
                    return new m0(objArr, i12, objArr2, i11, i13);
                }
            }
            Object obj3 = objArr[0];
            Objects.requireNonNull(obj3);
            return u(obj3);
        }
        return t();
    }

    public static u o(Collection collection) {
        if ((collection instanceof u) && !(collection instanceof SortedSet)) {
            u uVar = (u) collection;
            if (!uVar.g()) {
                return uVar;
            }
        }
        Object[] array = collection.toArray();
        return l(array.length, array);
    }

    public static u p(Object[] objArr) {
        int length = objArr.length;
        if (length != 0) {
            if (length != 1) {
                return l(objArr.length, (Object[]) objArr.clone());
            }
            return u(objArr[0]);
        }
        return t();
    }

    public static u t() {
        return m0.f45949t;
    }

    public static u u(Object obj) {
        return new r0(obj);
    }

    public static u v(Object obj, Object obj2) {
        return l(2, obj, obj2);
    }

    public static u w(Object obj, Object obj2, Object obj3) {
        return l(3, obj, obj2, obj3);
    }

    public static u x(Object obj, Object obj2, Object obj3, Object obj4, Object obj5) {
        return l(5, obj, obj2, obj3, obj4, obj5);
    }

    @Override // qi.q
    public s b() {
        s sVar = this.f45986e;
        if (sVar == null) {
            s q10 = q();
            this.f45986e = q10;
            return q10;
        }
        return sVar;
    }

    @Override // java.util.Collection, java.util.Set
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof u) && r() && ((u) obj).r() && hashCode() != obj.hashCode()) {
            return false;
        }
        return q0.a(this, obj);
    }

    @Override // java.util.Collection, java.util.Set
    public int hashCode() {
        return q0.d(this);
    }

    s q() {
        return s.i(toArray());
    }

    boolean r() {
        return false;
    }

    public abstract t0 s();
}
