package com.google.android.gms.internal.fido;

import java.util.Arrays;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h1 extends z0 implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient e1 f13616e;

    private static h1 g(int i10, Object... objArr) {
        if (i10 != 0) {
            if (i10 != 1) {
                int i11 = i(i10);
                Object[] objArr2 = new Object[i11];
                int i12 = i11 - 1;
                int i13 = 0;
                int i14 = 0;
                for (int i15 = 0; i15 < i10; i15++) {
                    Object obj = objArr[i15];
                    r1.a(obj, i15);
                    int hashCode = obj.hashCode();
                    int a10 = y0.a(hashCode);
                    while (true) {
                        int i16 = a10 & i12;
                        Object obj2 = objArr2[i16];
                        if (obj2 == null) {
                            objArr[i14] = obj;
                            objArr2[i16] = obj;
                            i13 += hashCode;
                            i14++;
                            break;
                        } else if (!obj2.equals(obj)) {
                            a10++;
                        }
                    }
                }
                Arrays.fill(objArr, i14, i10, (Object) null);
                if (i14 == 1) {
                    Object obj3 = objArr[0];
                    Objects.requireNonNull(obj3);
                    return new z1(obj3);
                }
                if (i(i14) < i11 / 2) {
                    return g(i14, objArr);
                }
                if (i14 <= 0) {
                    objArr = Arrays.copyOf(objArr, i14);
                }
                return new u1(objArr, i13, objArr2, i12, i14);
            }
            Object obj4 = objArr[0];
            Objects.requireNonNull(obj4);
            return new z1(obj4);
        }
        return u1.f13731t;
    }

    static int i(int i10) {
        int max = Math.max(i10, 2);
        if (max < 751619276) {
            int highestOneBit = Integer.highestOneBit(max - 1);
            do {
                highestOneBit += highestOneBit;
            } while (highestOneBit * 0.7d < max);
            return highestOneBit;
        } else if (max < 1073741824) {
            return 1073741824;
        } else {
            throw new IllegalArgumentException("collection too large");
        }
    }

    public static h1 m() {
        return u1.f13731t;
    }

    public static h1 n(Object obj) {
        return new z1("FIDO");
    }

    public static h1 o(Object obj, Object obj2) {
        return g(2, obj, obj2);
    }

    @Override // com.google.android.gms.internal.fido.z0
    public abstract c2 e();

    @Override // java.util.Collection, java.util.Set
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof h1) && h() && ((h1) obj).h() && hashCode() != obj.hashCode()) {
            return false;
        }
        if (obj == this) {
            return true;
        }
        if (obj instanceof Set) {
            Set set = (Set) obj;
            try {
                if (size() == set.size()) {
                    if (containsAll(set)) {
                        return true;
                    }
                    return false;
                }
            } catch (ClassCastException | NullPointerException unused) {
            }
        }
        return false;
    }

    boolean h() {
        return false;
    }

    @Override // java.util.Collection, java.util.Set
    public int hashCode() {
        return y1.a(this);
    }

    public e1 j() {
        e1 e1Var = this.f13616e;
        if (e1Var == null) {
            e1 k10 = k();
            this.f13616e = k10;
            return k10;
        }
        return e1Var;
    }

    e1 k() {
        Object[] array = toArray();
        int i10 = e1.f13593i;
        return e1.i(array, array.length);
    }
}
