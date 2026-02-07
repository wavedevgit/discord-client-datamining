package androidx.collection;

import java.util.Arrays;
import java.util.ConcurrentModificationException;
import java.util.Map;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import v0.a;
import v0.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SimpleArrayMap {

    /* renamed from: d  reason: collision with root package name */
    private int[] f2630d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f2631e;

    /* renamed from: i  reason: collision with root package name */
    private int f2632i;

    public SimpleArrayMap() {
        this(0, 1, null);
    }

    private final int c(Object obj, int i10) {
        int i11 = this.f2632i;
        if (i11 == 0) {
            return -1;
        }
        int a10 = a.a(this.f2630d, i11, i10);
        if (a10 < 0 || Intrinsics.areEqual(obj, this.f2631e[a10 << 1])) {
            return a10;
        }
        int i12 = a10 + 1;
        while (i12 < i11 && this.f2630d[i12] == i10) {
            if (Intrinsics.areEqual(obj, this.f2631e[i12 << 1])) {
                return i12;
            }
            i12++;
        }
        for (int i13 = a10 - 1; i13 >= 0 && this.f2630d[i13] == i10; i13--) {
            if (Intrinsics.areEqual(obj, this.f2631e[i13 << 1])) {
                return i13;
            }
        }
        return ~i12;
    }

    private final int e() {
        int i10 = this.f2632i;
        if (i10 == 0) {
            return -1;
        }
        int a10 = a.a(this.f2630d, i10, 0);
        if (a10 < 0 || this.f2631e[a10 << 1] == null) {
            return a10;
        }
        int i11 = a10 + 1;
        while (i11 < i10 && this.f2630d[i11] == 0) {
            if (this.f2631e[i11 << 1] == null) {
                return i11;
            }
            i11++;
        }
        for (int i12 = a10 - 1; i12 >= 0 && this.f2630d[i12] == 0; i12--) {
            if (this.f2631e[i12 << 1] == null) {
                return i12;
            }
        }
        return ~i11;
    }

    public final int a(Object obj) {
        int i10 = this.f2632i * 2;
        Object[] objArr = this.f2631e;
        if (obj == null) {
            for (int i11 = 1; i11 < i10; i11 += 2) {
                if (objArr[i11] == null) {
                    return i11 >> 1;
                }
            }
            return -1;
        }
        for (int i12 = 1; i12 < i10; i12 += 2) {
            if (Intrinsics.areEqual(obj, objArr[i12])) {
                return i12 >> 1;
            }
        }
        return -1;
    }

    public void b(int i10) {
        int i11 = this.f2632i;
        int[] iArr = this.f2630d;
        if (iArr.length < i10) {
            int[] copyOf = Arrays.copyOf(iArr, i10);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f2630d = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f2631e, i10 * 2);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f2631e = copyOf2;
        }
        if (this.f2632i == i11) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    public void clear() {
        if (this.f2632i > 0) {
            this.f2630d = a.f52149a;
            this.f2631e = a.f52151c;
            this.f2632i = 0;
        }
        if (this.f2632i <= 0) {
            return;
        }
        throw new ConcurrentModificationException();
    }

    public boolean containsKey(Object obj) {
        if (d(obj) >= 0) {
            return true;
        }
        return false;
    }

    public boolean containsValue(Object obj) {
        if (a(obj) >= 0) {
            return true;
        }
        return false;
    }

    public int d(Object obj) {
        if (obj == null) {
            return e();
        }
        return c(obj, obj.hashCode());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        try {
            if (obj instanceof SimpleArrayMap) {
                if (size() != ((SimpleArrayMap) obj).size()) {
                    return false;
                }
                SimpleArrayMap simpleArrayMap = (SimpleArrayMap) obj;
                int i10 = this.f2632i;
                for (int i11 = 0; i11 < i10; i11++) {
                    Object f10 = f(i11);
                    Object j10 = j(i11);
                    Object obj2 = simpleArrayMap.get(f10);
                    if (j10 == null) {
                        if (obj2 != null || !simpleArrayMap.containsKey(f10)) {
                            return false;
                        }
                    } else if (!Intrinsics.areEqual(j10, obj2)) {
                        return false;
                    }
                }
                return true;
            } else if (!(obj instanceof Map) || size() != ((Map) obj).size()) {
                return false;
            } else {
                int i12 = this.f2632i;
                for (int i13 = 0; i13 < i12; i13++) {
                    Object f11 = f(i13);
                    Object j11 = j(i13);
                    Object obj3 = ((Map) obj).get(f11);
                    if (j11 == null) {
                        if (obj3 != null || !((Map) obj).containsKey(f11)) {
                            return false;
                        }
                    } else if (!Intrinsics.areEqual(j11, obj3)) {
                        return false;
                    }
                }
                return true;
            }
        } catch (ClassCastException | NullPointerException unused) {
        }
        return false;
    }

    public Object f(int i10) {
        boolean z10 = false;
        if (i10 >= 0 && i10 < this.f2632i) {
            z10 = true;
        }
        if (!z10) {
            d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        return this.f2631e[i10 << 1];
    }

    public void g(SimpleArrayMap map) {
        Intrinsics.checkNotNullParameter(map, "map");
        int i10 = map.f2632i;
        b(this.f2632i + i10);
        if (this.f2632i == 0) {
            if (i10 > 0) {
                i.i(map.f2630d, this.f2630d, 0, 0, i10);
                i.k(map.f2631e, this.f2631e, 0, 0, i10 << 1);
                this.f2632i = i10;
                return;
            }
            return;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            put(map.f(i11), map.j(i11));
        }
    }

    public Object get(Object obj) {
        int d10 = d(obj);
        if (d10 >= 0) {
            return this.f2631e[(d10 << 1) + 1];
        }
        return null;
    }

    public Object getOrDefault(Object obj, Object obj2) {
        int d10 = d(obj);
        if (d10 >= 0) {
            return this.f2631e[(d10 << 1) + 1];
        }
        return obj2;
    }

    public Object h(int i10) {
        boolean z10;
        if (i10 >= 0 && i10 < this.f2632i) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        Object[] objArr = this.f2631e;
        int i11 = i10 << 1;
        Object obj = objArr[i11 + 1];
        int i12 = this.f2632i;
        if (i12 <= 1) {
            clear();
            return obj;
        }
        int i13 = i12 - 1;
        int[] iArr = this.f2630d;
        int i14 = 8;
        if (iArr.length > 8 && i12 < iArr.length / 3) {
            if (i12 > 8) {
                i14 = i12 + (i12 >> 1);
            }
            int[] copyOf = Arrays.copyOf(iArr, i14);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f2630d = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f2631e, i14 << 1);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f2631e = copyOf2;
            if (i12 == this.f2632i) {
                if (i10 > 0) {
                    i.i(iArr, this.f2630d, 0, 0, i10);
                    i.k(objArr, this.f2631e, 0, 0, i11);
                }
                if (i10 < i13) {
                    int i15 = i10 + 1;
                    i.i(iArr, this.f2630d, i10, i15, i12);
                    i.k(objArr, this.f2631e, i11, i15 << 1, i12 << 1);
                }
            } else {
                throw new ConcurrentModificationException();
            }
        } else {
            if (i10 < i13) {
                int i16 = i10 + 1;
                i.i(iArr, iArr, i10, i16, i12);
                Object[] objArr2 = this.f2631e;
                i.k(objArr2, objArr2, i11, i16 << 1, i12 << 1);
            }
            Object[] objArr3 = this.f2631e;
            int i17 = i13 << 1;
            objArr3[i17] = null;
            objArr3[i17 + 1] = null;
        }
        if (i12 == this.f2632i) {
            this.f2632i = i13;
            return obj;
        }
        throw new ConcurrentModificationException();
    }

    public int hashCode() {
        int i10;
        int[] iArr = this.f2630d;
        Object[] objArr = this.f2631e;
        int i11 = this.f2632i;
        int i12 = 1;
        int i13 = 0;
        int i14 = 0;
        while (i13 < i11) {
            Object obj = objArr[i12];
            int i15 = iArr[i13];
            if (obj != null) {
                i10 = obj.hashCode();
            } else {
                i10 = 0;
            }
            i14 += i10 ^ i15;
            i13++;
            i12 += 2;
        }
        return i14;
    }

    public Object i(int i10, Object obj) {
        boolean z10 = false;
        if (i10 >= 0 && i10 < this.f2632i) {
            z10 = true;
        }
        if (!z10) {
            d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        int i11 = (i10 << 1) + 1;
        Object[] objArr = this.f2631e;
        Object obj2 = objArr[i11];
        objArr[i11] = obj;
        return obj2;
    }

    public boolean isEmpty() {
        if (this.f2632i <= 0) {
            return true;
        }
        return false;
    }

    public Object j(int i10) {
        boolean z10 = false;
        if (i10 >= 0 && i10 < this.f2632i) {
            z10 = true;
        }
        if (!z10) {
            d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        return this.f2631e[(i10 << 1) + 1];
    }

    public Object put(Object obj, Object obj2) {
        int i10;
        int e10;
        int i11 = this.f2632i;
        if (obj != null) {
            i10 = obj.hashCode();
        } else {
            i10 = 0;
        }
        if (obj != null) {
            e10 = c(obj, i10);
        } else {
            e10 = e();
        }
        if (e10 >= 0) {
            int i12 = (e10 << 1) + 1;
            Object[] objArr = this.f2631e;
            Object obj3 = objArr[i12];
            objArr[i12] = obj2;
            return obj3;
        }
        int i13 = ~e10;
        int[] iArr = this.f2630d;
        if (i11 >= iArr.length) {
            int i14 = 8;
            if (i11 >= 8) {
                i14 = (i11 >> 1) + i11;
            } else if (i11 < 4) {
                i14 = 4;
            }
            int[] copyOf = Arrays.copyOf(iArr, i14);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f2630d = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f2631e, i14 << 1);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f2631e = copyOf2;
            if (i11 != this.f2632i) {
                throw new ConcurrentModificationException();
            }
        }
        if (i13 < i11) {
            int[] iArr2 = this.f2630d;
            int i15 = i13 + 1;
            i.i(iArr2, iArr2, i15, i13, i11);
            Object[] objArr2 = this.f2631e;
            i.k(objArr2, objArr2, i15 << 1, i13 << 1, this.f2632i << 1);
        }
        int i16 = this.f2632i;
        if (i11 == i16) {
            int[] iArr3 = this.f2630d;
            if (i13 < iArr3.length) {
                iArr3[i13] = i10;
                Object[] objArr3 = this.f2631e;
                int i17 = i13 << 1;
                objArr3[i17] = obj;
                objArr3[i17 + 1] = obj2;
                this.f2632i = i16 + 1;
                return null;
            }
        }
        throw new ConcurrentModificationException();
    }

    public Object putIfAbsent(Object obj, Object obj2) {
        Object obj3 = get(obj);
        if (obj3 == null) {
            return put(obj, obj2);
        }
        return obj3;
    }

    public Object remove(Object obj) {
        int d10 = d(obj);
        if (d10 >= 0) {
            return h(d10);
        }
        return null;
    }

    public Object replace(Object obj, Object obj2) {
        int d10 = d(obj);
        if (d10 >= 0) {
            return i(d10, obj2);
        }
        return null;
    }

    public int size() {
        return this.f2632i;
    }

    public String toString() {
        if (isEmpty()) {
            return "{}";
        }
        StringBuilder sb2 = new StringBuilder(this.f2632i * 28);
        sb2.append('{');
        int i10 = this.f2632i;
        for (int i11 = 0; i11 < i10; i11++) {
            if (i11 > 0) {
                sb2.append(", ");
            }
            Object f10 = f(i11);
            if (f10 != sb2) {
                sb2.append(f10);
            } else {
                sb2.append("(this Map)");
            }
            sb2.append('=');
            Object j10 = j(i11);
            if (j10 != sb2) {
                sb2.append(j10);
            } else {
                sb2.append("(this Map)");
            }
        }
        sb2.append('}');
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public SimpleArrayMap(int i10) {
        int[] iArr;
        Object[] objArr;
        if (i10 == 0) {
            iArr = a.f52149a;
        } else {
            iArr = new int[i10];
        }
        this.f2630d = iArr;
        if (i10 == 0) {
            objArr = a.f52151c;
        } else {
            objArr = new Object[i10 << 1];
        }
        this.f2631e = objArr;
    }

    public boolean remove(Object obj, Object obj2) {
        int d10 = d(obj);
        if (d10 < 0 || !Intrinsics.areEqual(obj2, j(d10))) {
            return false;
        }
        h(d10);
        return true;
    }

    public boolean replace(Object obj, Object obj2, Object obj3) {
        int d10 = d(obj);
        if (d10 < 0 || !Intrinsics.areEqual(obj2, j(d10))) {
            return false;
        }
        i(d10, obj3);
        return true;
    }

    public /* synthetic */ SimpleArrayMap(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 0 : i10);
    }

    public SimpleArrayMap(SimpleArrayMap simpleArrayMap) {
        this(0, 1, null);
        if (simpleArrayMap != null) {
            g(simpleArrayMap);
        }
    }
}
