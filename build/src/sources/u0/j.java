package u0;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    public /* synthetic */ boolean f51224d;

    /* renamed from: e  reason: collision with root package name */
    public /* synthetic */ long[] f51225e;

    /* renamed from: i  reason: collision with root package name */
    public /* synthetic */ Object[] f51226i;

    /* renamed from: o  reason: collision with root package name */
    public /* synthetic */ int f51227o;

    public j() {
        this(0, 1, null);
    }

    public void a() {
        int i10 = this.f51227o;
        Object[] objArr = this.f51226i;
        for (int i11 = 0; i11 < i10; i11++) {
            objArr[i11] = null;
        }
        this.f51227o = 0;
        this.f51224d = false;
    }

    /* renamed from: b */
    public j clone() {
        Object clone = super.clone();
        Intrinsics.checkNotNull(clone, "null cannot be cast to non-null type androidx.collection.LongSparseArray<E of androidx.collection.LongSparseArray>");
        j jVar = (j) clone;
        jVar.f51225e = (long[]) this.f51225e.clone();
        jVar.f51226i = (Object[]) this.f51226i.clone();
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
        int b10 = v0.a.b(this.f51225e, this.f51227o, j10);
        if (b10 >= 0) {
            Object obj2 = this.f51226i[b10];
            obj = k.f51228a;
            if (obj2 != obj) {
                return this.f51226i[b10];
            }
            return null;
        }
        return null;
    }

    public int e(long j10) {
        Object obj;
        if (this.f51224d) {
            int i10 = this.f51227o;
            long[] jArr = this.f51225e;
            Object[] objArr = this.f51226i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f51228a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f51224d = false;
            this.f51227o = i11;
        }
        return v0.a.b(this.f51225e, this.f51227o, j10);
    }

    public long f(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f51227o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f51224d) {
            int i11 = this.f51227o;
            long[] jArr = this.f51225e;
            Object[] objArr = this.f51226i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f51228a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f51224d = false;
            this.f51227o = i12;
        }
        return this.f51225e[i10];
    }

    public void h(long j10, Object obj) {
        Object obj2;
        Object obj3;
        int b10 = v0.a.b(this.f51225e, this.f51227o, j10);
        if (b10 >= 0) {
            this.f51226i[b10] = obj;
            return;
        }
        int i10 = ~b10;
        if (i10 < this.f51227o) {
            Object obj4 = this.f51226i[i10];
            obj3 = k.f51228a;
            if (obj4 == obj3) {
                this.f51225e[i10] = j10;
                this.f51226i[i10] = obj;
                return;
            }
        }
        if (this.f51224d) {
            int i11 = this.f51227o;
            long[] jArr = this.f51225e;
            if (i11 >= jArr.length) {
                Object[] objArr = this.f51226i;
                int i12 = 0;
                for (int i13 = 0; i13 < i11; i13++) {
                    Object obj5 = objArr[i13];
                    obj2 = k.f51228a;
                    if (obj5 != obj2) {
                        if (i13 != i12) {
                            jArr[i12] = jArr[i13];
                            objArr[i12] = obj5;
                            objArr[i13] = null;
                        }
                        i12++;
                    }
                }
                this.f51224d = false;
                this.f51227o = i12;
                i10 = ~v0.a.b(this.f51225e, i12, j10);
            }
        }
        int i14 = this.f51227o;
        if (i14 >= this.f51225e.length) {
            int f10 = v0.a.f(i14 + 1);
            long[] copyOf = Arrays.copyOf(this.f51225e, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f51225e = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f51226i, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f51226i = copyOf2;
        }
        int i15 = this.f51227o;
        if (i15 - i10 != 0) {
            long[] jArr2 = this.f51225e;
            int i16 = i10 + 1;
            kotlin.collections.i.j(jArr2, jArr2, i16, i10, i15);
            Object[] objArr2 = this.f51226i;
            kotlin.collections.i.k(objArr2, objArr2, i16, i10, this.f51227o);
        }
        this.f51225e[i10] = j10;
        this.f51226i[i10] = obj;
        this.f51227o++;
    }

    public void i(long j10) {
        Object obj;
        Object obj2;
        int b10 = v0.a.b(this.f51225e, this.f51227o, j10);
        if (b10 >= 0) {
            Object obj3 = this.f51226i[b10];
            obj = k.f51228a;
            if (obj3 != obj) {
                Object[] objArr = this.f51226i;
                obj2 = k.f51228a;
                objArr[b10] = obj2;
                this.f51224d = true;
            }
        }
    }

    public void j(int i10) {
        Object obj;
        Object obj2;
        Object obj3 = this.f51226i[i10];
        obj = k.f51228a;
        if (obj3 != obj) {
            Object[] objArr = this.f51226i;
            obj2 = k.f51228a;
            objArr[i10] = obj2;
            this.f51224d = true;
        }
    }

    public int k() {
        Object obj;
        if (this.f51224d) {
            int i10 = this.f51227o;
            long[] jArr = this.f51225e;
            Object[] objArr = this.f51226i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f51228a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f51224d = false;
            this.f51227o = i11;
        }
        return this.f51227o;
    }

    public Object l(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f51227o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f51224d) {
            int i11 = this.f51227o;
            long[] jArr = this.f51225e;
            Object[] objArr = this.f51226i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f51228a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f51224d = false;
            this.f51227o = i12;
        }
        return this.f51226i[i10];
    }

    public String toString() {
        if (k() <= 0) {
            return "{}";
        }
        StringBuilder sb2 = new StringBuilder(this.f51227o * 28);
        sb2.append('{');
        int i10 = this.f51227o;
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
            this.f51225e = v0.a.f52150b;
            this.f51226i = v0.a.f52151c;
            return;
        }
        int f10 = v0.a.f(i10);
        this.f51225e = new long[f10];
        this.f51226i = new Object[f10];
    }

    public /* synthetic */ j(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }
}
