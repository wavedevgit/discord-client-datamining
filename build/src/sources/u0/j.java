package u0;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    public /* synthetic */ boolean f51194d;

    /* renamed from: e  reason: collision with root package name */
    public /* synthetic */ long[] f51195e;

    /* renamed from: i  reason: collision with root package name */
    public /* synthetic */ Object[] f51196i;

    /* renamed from: o  reason: collision with root package name */
    public /* synthetic */ int f51197o;

    public j() {
        this(0, 1, null);
    }

    public void a() {
        int i10 = this.f51197o;
        Object[] objArr = this.f51196i;
        for (int i11 = 0; i11 < i10; i11++) {
            objArr[i11] = null;
        }
        this.f51197o = 0;
        this.f51194d = false;
    }

    /* renamed from: b */
    public j clone() {
        Object clone = super.clone();
        Intrinsics.checkNotNull(clone, "null cannot be cast to non-null type androidx.collection.LongSparseArray<E of androidx.collection.LongSparseArray>");
        j jVar = (j) clone;
        jVar.f51195e = (long[]) this.f51195e.clone();
        jVar.f51196i = (Object[]) this.f51196i.clone();
        return jVar;
    }

    public boolean c(long j10) {
        if (e(j10) >= 0) {
            return true;
        }
        return false;
    }

    public Object d(long j10) {
        Object obj;
        int b10 = v0.a.b(this.f51195e, this.f51197o, j10);
        if (b10 >= 0) {
            Object obj2 = this.f51196i[b10];
            obj = k.f51198a;
            if (obj2 != obj) {
                return this.f51196i[b10];
            }
            return null;
        }
        return null;
    }

    public int e(long j10) {
        Object obj;
        if (this.f51194d) {
            int i10 = this.f51197o;
            long[] jArr = this.f51195e;
            Object[] objArr = this.f51196i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f51198a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f51194d = false;
            this.f51197o = i11;
        }
        return v0.a.b(this.f51195e, this.f51197o, j10);
    }

    public long f(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f51197o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f51194d) {
            int i11 = this.f51197o;
            long[] jArr = this.f51195e;
            Object[] objArr = this.f51196i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f51198a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f51194d = false;
            this.f51197o = i12;
        }
        return this.f51195e[i10];
    }

    public void h(long j10, Object obj) {
        Object obj2;
        Object obj3;
        int b10 = v0.a.b(this.f51195e, this.f51197o, j10);
        if (b10 >= 0) {
            this.f51196i[b10] = obj;
            return;
        }
        int i10 = ~b10;
        if (i10 < this.f51197o) {
            Object obj4 = this.f51196i[i10];
            obj3 = k.f51198a;
            if (obj4 == obj3) {
                this.f51195e[i10] = j10;
                this.f51196i[i10] = obj;
                return;
            }
        }
        if (this.f51194d) {
            int i11 = this.f51197o;
            long[] jArr = this.f51195e;
            if (i11 >= jArr.length) {
                Object[] objArr = this.f51196i;
                int i12 = 0;
                for (int i13 = 0; i13 < i11; i13++) {
                    Object obj5 = objArr[i13];
                    obj2 = k.f51198a;
                    if (obj5 != obj2) {
                        if (i13 != i12) {
                            jArr[i12] = jArr[i13];
                            objArr[i12] = obj5;
                            objArr[i13] = null;
                        }
                        i12++;
                    }
                }
                this.f51194d = false;
                this.f51197o = i12;
                i10 = ~v0.a.b(this.f51195e, i12, j10);
            }
        }
        int i14 = this.f51197o;
        if (i14 >= this.f51195e.length) {
            int f10 = v0.a.f(i14 + 1);
            long[] copyOf = Arrays.copyOf(this.f51195e, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f51195e = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f51196i, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f51196i = copyOf2;
        }
        int i15 = this.f51197o;
        if (i15 - i10 != 0) {
            long[] jArr2 = this.f51195e;
            int i16 = i10 + 1;
            kotlin.collections.i.j(jArr2, jArr2, i16, i10, i15);
            Object[] objArr2 = this.f51196i;
            kotlin.collections.i.k(objArr2, objArr2, i16, i10, this.f51197o);
        }
        this.f51195e[i10] = j10;
        this.f51196i[i10] = obj;
        this.f51197o++;
    }

    public void i(long j10) {
        Object obj;
        Object obj2;
        int b10 = v0.a.b(this.f51195e, this.f51197o, j10);
        if (b10 >= 0) {
            Object obj3 = this.f51196i[b10];
            obj = k.f51198a;
            if (obj3 != obj) {
                Object[] objArr = this.f51196i;
                obj2 = k.f51198a;
                objArr[b10] = obj2;
                this.f51194d = true;
            }
        }
    }

    public void j(int i10) {
        Object obj;
        Object obj2;
        Object obj3 = this.f51196i[i10];
        obj = k.f51198a;
        if (obj3 != obj) {
            Object[] objArr = this.f51196i;
            obj2 = k.f51198a;
            objArr[i10] = obj2;
            this.f51194d = true;
        }
    }

    public int k() {
        Object obj;
        if (this.f51194d) {
            int i10 = this.f51197o;
            long[] jArr = this.f51195e;
            Object[] objArr = this.f51196i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f51198a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f51194d = false;
            this.f51197o = i11;
        }
        return this.f51197o;
    }

    public Object l(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f51197o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f51194d) {
            int i11 = this.f51197o;
            long[] jArr = this.f51195e;
            Object[] objArr = this.f51196i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f51198a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f51194d = false;
            this.f51197o = i12;
        }
        return this.f51196i[i10];
    }

    public String toString() {
        if (k() <= 0) {
            return "{}";
        }
        StringBuilder sb2 = new StringBuilder(this.f51197o * 28);
        sb2.append('{');
        int i10 = this.f51197o;
        for (int i11 = 0; i11 < i10; i11++) {
            if (i11 > 0) {
                sb2.append(", ");
            }
            sb2.append(f(i11));
            sb2.append('=');
            Object l10 = l(i11);
            if (l10 != sb2) {
                sb2.append(l10);
            } else {
                sb2.append("(this Map)");
            }
        }
        sb2.append('}');
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public j(int i10) {
        if (i10 == 0) {
            this.f51195e = v0.a.f52071b;
            this.f51196i = v0.a.f52072c;
            return;
        }
        int f10 = v0.a.f(i10);
        this.f51195e = new long[f10];
        this.f51196i = new Object[f10];
    }

    public /* synthetic */ j(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }
}
