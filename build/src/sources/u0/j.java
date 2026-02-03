package u0;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    public /* synthetic */ boolean f50079d;

    /* renamed from: e  reason: collision with root package name */
    public /* synthetic */ long[] f50080e;

    /* renamed from: i  reason: collision with root package name */
    public /* synthetic */ Object[] f50081i;

    /* renamed from: o  reason: collision with root package name */
    public /* synthetic */ int f50082o;

    public j() {
        this(0, 1, null);
    }

    public void a() {
        int i10 = this.f50082o;
        Object[] objArr = this.f50081i;
        for (int i11 = 0; i11 < i10; i11++) {
            objArr[i11] = null;
        }
        this.f50082o = 0;
        this.f50079d = false;
    }

    /* renamed from: b */
    public j clone() {
        Object clone = super.clone();
        Intrinsics.checkNotNull(clone, "null cannot be cast to non-null type androidx.collection.LongSparseArray<E of androidx.collection.LongSparseArray>");
        j jVar = (j) clone;
        jVar.f50080e = (long[]) this.f50080e.clone();
        jVar.f50081i = (Object[]) this.f50081i.clone();
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
        int b10 = v0.a.b(this.f50080e, this.f50082o, j10);
        if (b10 >= 0) {
            Object obj2 = this.f50081i[b10];
            obj = k.f50083a;
            if (obj2 != obj) {
                return this.f50081i[b10];
            }
            return null;
        }
        return null;
    }

    public int e(long j10) {
        Object obj;
        if (this.f50079d) {
            int i10 = this.f50082o;
            long[] jArr = this.f50080e;
            Object[] objArr = this.f50081i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f50083a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f50079d = false;
            this.f50082o = i11;
        }
        return v0.a.b(this.f50080e, this.f50082o, j10);
    }

    public long f(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f50082o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f50079d) {
            int i11 = this.f50082o;
            long[] jArr = this.f50080e;
            Object[] objArr = this.f50081i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f50083a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f50079d = false;
            this.f50082o = i12;
        }
        return this.f50080e[i10];
    }

    public void g(long j10, Object obj) {
        Object obj2;
        Object obj3;
        int b10 = v0.a.b(this.f50080e, this.f50082o, j10);
        if (b10 >= 0) {
            this.f50081i[b10] = obj;
            return;
        }
        int i10 = ~b10;
        if (i10 < this.f50082o) {
            Object obj4 = this.f50081i[i10];
            obj3 = k.f50083a;
            if (obj4 == obj3) {
                this.f50080e[i10] = j10;
                this.f50081i[i10] = obj;
                return;
            }
        }
        if (this.f50079d) {
            int i11 = this.f50082o;
            long[] jArr = this.f50080e;
            if (i11 >= jArr.length) {
                Object[] objArr = this.f50081i;
                int i12 = 0;
                for (int i13 = 0; i13 < i11; i13++) {
                    Object obj5 = objArr[i13];
                    obj2 = k.f50083a;
                    if (obj5 != obj2) {
                        if (i13 != i12) {
                            jArr[i12] = jArr[i13];
                            objArr[i12] = obj5;
                            objArr[i13] = null;
                        }
                        i12++;
                    }
                }
                this.f50079d = false;
                this.f50082o = i12;
                i10 = ~v0.a.b(this.f50080e, i12, j10);
            }
        }
        int i14 = this.f50082o;
        if (i14 >= this.f50080e.length) {
            int f10 = v0.a.f(i14 + 1);
            long[] copyOf = Arrays.copyOf(this.f50080e, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f50080e = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f50081i, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f50081i = copyOf2;
        }
        int i15 = this.f50082o;
        if (i15 - i10 != 0) {
            long[] jArr2 = this.f50080e;
            int i16 = i10 + 1;
            kotlin.collections.i.j(jArr2, jArr2, i16, i10, i15);
            Object[] objArr2 = this.f50081i;
            kotlin.collections.i.k(objArr2, objArr2, i16, i10, this.f50082o);
        }
        this.f50080e[i10] = j10;
        this.f50081i[i10] = obj;
        this.f50082o++;
    }

    public void i(long j10) {
        Object obj;
        Object obj2;
        int b10 = v0.a.b(this.f50080e, this.f50082o, j10);
        if (b10 >= 0) {
            Object obj3 = this.f50081i[b10];
            obj = k.f50083a;
            if (obj3 != obj) {
                Object[] objArr = this.f50081i;
                obj2 = k.f50083a;
                objArr[b10] = obj2;
                this.f50079d = true;
            }
        }
    }

    public void j(int i10) {
        Object obj;
        Object obj2;
        Object obj3 = this.f50081i[i10];
        obj = k.f50083a;
        if (obj3 != obj) {
            Object[] objArr = this.f50081i;
            obj2 = k.f50083a;
            objArr[i10] = obj2;
            this.f50079d = true;
        }
    }

    public int k() {
        Object obj;
        if (this.f50079d) {
            int i10 = this.f50082o;
            long[] jArr = this.f50080e;
            Object[] objArr = this.f50081i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f50083a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f50079d = false;
            this.f50082o = i11;
        }
        return this.f50082o;
    }

    public Object l(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f50082o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f50079d) {
            int i11 = this.f50082o;
            long[] jArr = this.f50080e;
            Object[] objArr = this.f50081i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f50083a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f50079d = false;
            this.f50082o = i12;
        }
        return this.f50081i[i10];
    }

    public String toString() {
        if (k() <= 0) {
            return "{}";
        }
        StringBuilder sb2 = new StringBuilder(this.f50082o * 28);
        sb2.append('{');
        int i10 = this.f50082o;
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
            this.f50080e = v0.a.f50723b;
            this.f50081i = v0.a.f50724c;
            return;
        }
        int f10 = v0.a.f(i10);
        this.f50080e = new long[f10];
        this.f50081i = new Object[f10];
    }

    public /* synthetic */ j(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }
}
