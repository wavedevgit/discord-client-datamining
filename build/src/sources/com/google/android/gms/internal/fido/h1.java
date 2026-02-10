package com.google.android.gms.internal.fido;

import java.util.Arrays;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h1 extends z0 implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient e1 f14690e;

    private static h1 g(int i10, Object... objArr) {
        if (i10 != 0) {
            if (i10 != 1) {
                int j10 = j(i10);
                Object[] objArr2 = new Object[j10];
                int i11 = j10 - 1;
                int i12 = 0;
                int i13 = 0;
                for (int i14 = 0; i14 < i10; i14++) {
                    Object obj = objArr[i14];
                    r1.a(obj, i14);
                    int hashCode = obj.hashCode();
                    int a10 = y0.a(hashCode);
                    while (true) {
                        int i15 = a10 & i11;
                        Object obj2 = objArr2[i15];
                        if (obj2 == null) {
                            objArr[i13] = obj;
                            objArr2[i15] = obj;
                            i12 += hashCode;
                            i13++;
                            break;
                        } else if (!obj2.equals(obj)) {
                            a10++;
                        }
                    }
                }
                Arrays.fill(objArr, i13, i10, (Object) null);
                if (i13 == 1) {
                    Object obj3 = objArr[0];
                    Objects.requireNonNull(obj3);
                    return new z1(obj3);
                }
                if (j(i13) < j10 / 2) {
                    return g(i13, objArr);
                }
                if (i13 <= 0) {
                    objArr = Arrays.copyOf(objArr, i13);
                }
                return new u1(objArr, i12, objArr2, i11, i13);
            }
            Object obj4 = objArr[0];
            Objects.requireNonNull(obj4);
            return new z1(obj4);
        }
        return u1.f14805t;
    }

    static int j(int i10) {
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

    public static h1 o() {
        return u1.f14805t;
    }

    public static h1 p(Object obj) {
        return new z1("FIDO");
    }

    public static h1 q(Object obj, Object obj2) {
        return g(2, obj, obj2);
    }

    @Override // com.google.android.gms.internal.fido.z0
    public abstract c2 e();

    @Override // java.util.Collection, java.util.Set
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if ((obj instanceof h1) && i() && ((h1) obj).i() && hashCode() != obj.hashCode()) {
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

    @Override // java.util.Collection, java.util.Set
    public int hashCode() {
        return y1.a(this);
    }

    boolean i() {
        return false;
    }

    public e1 k() {
        e1 e1Var = this.f14690e;
        if (e1Var == null) {
            e1 l10 = l();
            this.f14690e = l10;
            return l10;
        }
        return e1Var;
    }

    e1 l() {
        Object[] array = toArray();
        int i10 = e1.f14667i;
        return e1.j(array, array.length);
    }
}
