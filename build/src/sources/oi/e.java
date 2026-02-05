package oi;

import java.io.Serializable;
import java.util.AbstractList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.RandomAccess;
import li.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e extends f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a extends AbstractList implements RandomAccess, Serializable {

        /* renamed from: d  reason: collision with root package name */
        final int[] f43679d;

        /* renamed from: e  reason: collision with root package name */
        final int f43680e;

        /* renamed from: i  reason: collision with root package name */
        final int f43681i;

        a(int[] iArr) {
            this(iArr, 0, iArr.length);
        }

        @Override // java.util.AbstractList, java.util.List
        /* renamed from: b */
        public Integer get(int i10) {
            m.h(i10, size());
            return Integer.valueOf(this.f43679d[this.f43680e + i10]);
        }

        @Override // java.util.AbstractList, java.util.List
        /* renamed from: c */
        public Integer set(int i10, Integer num) {
            m.h(i10, size());
            int[] iArr = this.f43679d;
            int i11 = this.f43680e;
            int i12 = iArr[i11 + i10];
            iArr[i11 + i10] = ((Integer) m.j(num)).intValue();
            return Integer.valueOf(i12);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean contains(Object obj) {
            if ((obj instanceof Integer) && e.i(this.f43679d, ((Integer) obj).intValue(), this.f43680e, this.f43681i) != -1) {
                return true;
            }
            return false;
        }

        int[] d() {
            return Arrays.copyOfRange(this.f43679d, this.f43680e, this.f43681i);
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public boolean equals(Object obj) {
            if (obj == this) {
                return true;
            }
            if (obj instanceof a) {
                a aVar = (a) obj;
                int size = size();
                if (aVar.size() != size) {
                    return false;
                }
                for (int i10 = 0; i10 < size; i10++) {
                    if (this.f43679d[this.f43680e + i10] != aVar.f43679d[aVar.f43680e + i10]) {
                        return false;
                    }
                }
                return true;
            }
            return super.equals(obj);
        }

        @Override // java.util.AbstractList, java.util.Collection, java.util.List
        public int hashCode() {
            int i10 = 1;
            for (int i11 = this.f43680e; i11 < this.f43681i; i11++) {
                i10 = (i10 * 31) + e.g(this.f43679d[i11]);
            }
            return i10;
        }

        @Override // java.util.AbstractList, java.util.List
        public int indexOf(Object obj) {
            int i10;
            if ((obj instanceof Integer) && (i10 = e.i(this.f43679d, ((Integer) obj).intValue(), this.f43680e, this.f43681i)) >= 0) {
                return i10 - this.f43680e;
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public boolean isEmpty() {
            return false;
        }

        @Override // java.util.AbstractList, java.util.List
        public int lastIndexOf(Object obj) {
            int j10;
            if ((obj instanceof Integer) && (j10 = e.j(this.f43679d, ((Integer) obj).intValue(), this.f43680e, this.f43681i)) >= 0) {
                return j10 - this.f43680e;
            }
            return -1;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public int size() {
            return this.f43681i - this.f43680e;
        }

        @Override // java.util.AbstractList, java.util.List
        public List subList(int i10, int i11) {
            m.n(i10, i11, size());
            if (i10 == i11) {
                return Collections.EMPTY_LIST;
            }
            int[] iArr = this.f43679d;
            int i12 = this.f43680e;
            return new a(iArr, i10 + i12, i12 + i11);
        }

        @Override // java.util.AbstractCollection
        public String toString() {
            StringBuilder sb2 = new StringBuilder(size() * 5);
            sb2.append('[');
            sb2.append(this.f43679d[this.f43680e]);
            int i10 = this.f43680e;
            while (true) {
                i10++;
                if (i10 < this.f43681i) {
                    sb2.append(", ");
                    sb2.append(this.f43679d[i10]);
                } else {
                    sb2.append(']');
                    return sb2.toString();
                }
            }
        }

        a(int[] iArr, int i10, int i11) {
            this.f43679d = iArr;
            this.f43680e = i10;
            this.f43681i = i11;
        }
    }

    public static List c(int... iArr) {
        if (iArr.length == 0) {
            return Collections.EMPTY_LIST;
        }
        return new a(iArr);
    }

    public static int d(long j10) {
        boolean z10;
        int i10 = (int) j10;
        if (i10 == j10) {
            z10 = true;
        } else {
            z10 = false;
        }
        m.g(z10, "Out of range: %s", j10);
        return i10;
    }

    public static int e(int i10, int i11) {
        if (i10 < i11) {
            return -1;
        }
        if (i10 > i11) {
            return 1;
        }
        return 0;
    }

    public static int f(int i10, int i11, int i12) {
        boolean z10;
        if (i11 <= i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        m.f(z10, "min (%s) must be less than or equal to max (%s)", i11, i12);
        return Math.min(Math.max(i10, i11), i12);
    }

    public static int h(int[] iArr, int i10) {
        return i(iArr, i10, 0, iArr.length);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int i(int[] iArr, int i10, int i11, int i12) {
        while (i11 < i12) {
            if (iArr[i11] == i10) {
                return i11;
            }
            i11++;
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int j(int[] iArr, int i10, int i11, int i12) {
        for (int i13 = i12 - 1; i13 >= i11; i13--) {
            if (iArr[i13] == i10) {
                return i13;
            }
        }
        return -1;
    }

    public static int k(long j10) {
        if (j10 > 2147483647L) {
            return Integer.MAX_VALUE;
        }
        if (j10 < -2147483648L) {
            return Integer.MIN_VALUE;
        }
        return (int) j10;
    }

    public static int[] l(Collection collection) {
        if (collection instanceof a) {
            return ((a) collection).d();
        }
        Object[] array = collection.toArray();
        int length = array.length;
        int[] iArr = new int[length];
        for (int i10 = 0; i10 < length; i10++) {
            iArr[i10] = ((Number) m.j(array[i10])).intValue();
        }
        return iArr;
    }

    public static int g(int i10) {
        return i10;
    }
}
