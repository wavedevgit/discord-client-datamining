package u0;

import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements Cloneable {

    /* renamed from: d  reason: collision with root package name */
    public /* synthetic */ boolean f51135d;

    /* renamed from: e  reason: collision with root package name */
    public /* synthetic */ long[] f51136e;

    /* renamed from: i  reason: collision with root package name */
    public /* synthetic */ Object[] f51137i;

    /* renamed from: o  reason: collision with root package name */
    public /* synthetic */ int f51138o;

    public j() {
        this(0, 1, null);
    }

    public void a() {
        int i10 = this.f51138o;
        Object[] objArr = this.f51137i;
        for (int i11 = 0; i11 < i10; i11++) {
            objArr[i11] = null;
        }
        this.f51138o = 0;
        this.f51135d = false;
    }

    /* renamed from: b */
    public j clone() {
        Object clone = super.clone();
        Intrinsics.checkNotNull(clone, "null cannot be cast to non-null type androidx.collection.LongSparseArray<E of androidx.collection.LongSparseArray>");
        j jVar = (j) clone;
        jVar.f51136e = (long[]) this.f51136e.clone();
        jVar.f51137i = (Object[]) this.f51137i.clone();
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
        int b10 = v0.a.b(this.f51136e, this.f51138o, j10);
        if (b10 >= 0) {
            Object obj2 = this.f51137i[b10];
            obj = k.f51139a;
            if (obj2 != obj) {
                return this.f51137i[b10];
            }
            return null;
        }
        return null;
    }

    public int e(long j10) {
        Object obj;
        if (this.f51135d) {
            int i10 = this.f51138o;
            long[] jArr = this.f51136e;
            Object[] objArr = this.f51137i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f51139a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f51135d = false;
            this.f51138o = i11;
        }
        return v0.a.b(this.f51136e, this.f51138o, j10);
    }

    public long f(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f51138o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f51135d) {
            int i11 = this.f51138o;
            long[] jArr = this.f51136e;
            Object[] objArr = this.f51137i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f51139a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f51135d = false;
            this.f51138o = i12;
        }
        return this.f51136e[i10];
    }

    public void g(long j10, Object obj) {
        Object obj2;
        Object obj3;
        int b10 = v0.a.b(this.f51136e, this.f51138o, j10);
        if (b10 >= 0) {
            this.f51137i[b10] = obj;
            return;
        }
        int i10 = ~b10;
        if (i10 < this.f51138o) {
            Object obj4 = this.f51137i[i10];
            obj3 = k.f51139a;
            if (obj4 == obj3) {
                this.f51136e[i10] = j10;
                this.f51137i[i10] = obj;
                return;
            }
        }
        if (this.f51135d) {
            int i11 = this.f51138o;
            long[] jArr = this.f51136e;
            if (i11 >= jArr.length) {
                Object[] objArr = this.f51137i;
                int i12 = 0;
                for (int i13 = 0; i13 < i11; i13++) {
                    Object obj5 = objArr[i13];
                    obj2 = k.f51139a;
                    if (obj5 != obj2) {
                        if (i13 != i12) {
                            jArr[i12] = jArr[i13];
                            objArr[i12] = obj5;
                            objArr[i13] = null;
                        }
                        i12++;
                    }
                }
                this.f51135d = false;
                this.f51138o = i12;
                i10 = ~v0.a.b(this.f51136e, i12, j10);
            }
        }
        int i14 = this.f51138o;
        if (i14 >= this.f51136e.length) {
            int f10 = v0.a.f(i14 + 1);
            long[] copyOf = Arrays.copyOf(this.f51136e, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f51136e = copyOf;
            Object[] copyOf2 = Arrays.copyOf(this.f51137i, f10);
            Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(...)");
            this.f51137i = copyOf2;
        }
        int i15 = this.f51138o;
        if (i15 - i10 != 0) {
            long[] jArr2 = this.f51136e;
            int i16 = i10 + 1;
            kotlin.collections.i.j(jArr2, jArr2, i16, i10, i15);
            Object[] objArr2 = this.f51137i;
            kotlin.collections.i.k(objArr2, objArr2, i16, i10, this.f51138o);
        }
        this.f51136e[i10] = j10;
        this.f51137i[i10] = obj;
        this.f51138o++;
    }

    public void i(long j10) {
        Object obj;
        Object obj2;
        int b10 = v0.a.b(this.f51136e, this.f51138o, j10);
        if (b10 >= 0) {
            Object obj3 = this.f51137i[b10];
            obj = k.f51139a;
            if (obj3 != obj) {
                Object[] objArr = this.f51137i;
                obj2 = k.f51139a;
                objArr[b10] = obj2;
                this.f51135d = true;
            }
        }
    }

    public void j(int i10) {
        Object obj;
        Object obj2;
        Object obj3 = this.f51137i[i10];
        obj = k.f51139a;
        if (obj3 != obj) {
            Object[] objArr = this.f51137i;
            obj2 = k.f51139a;
            objArr[i10] = obj2;
            this.f51135d = true;
        }
    }

    public int k() {
        Object obj;
        if (this.f51135d) {
            int i10 = this.f51138o;
            long[] jArr = this.f51136e;
            Object[] objArr = this.f51137i;
            int i11 = 0;
            for (int i12 = 0; i12 < i10; i12++) {
                Object obj2 = objArr[i12];
                obj = k.f51139a;
                if (obj2 != obj) {
                    if (i12 != i11) {
                        jArr[i11] = jArr[i12];
                        objArr[i11] = obj2;
                        objArr[i12] = null;
                    }
                    i11++;
                }
            }
            this.f51135d = false;
            this.f51138o = i11;
        }
        return this.f51138o;
    }

    public Object l(int i10) {
        boolean z10;
        Object obj;
        if (i10 >= 0 && i10 < this.f51138o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Expected index to be within 0..size()-1, but was " + i10);
        }
        if (this.f51135d) {
            int i11 = this.f51138o;
            long[] jArr = this.f51136e;
            Object[] objArr = this.f51137i;
            int i12 = 0;
            for (int i13 = 0; i13 < i11; i13++) {
                Object obj2 = objArr[i13];
                obj = k.f51139a;
                if (obj2 != obj) {
                    if (i13 != i12) {
                        jArr[i12] = jArr[i13];
                        objArr[i12] = obj2;
                        objArr[i13] = null;
                    }
                    i12++;
                }
            }
            this.f51135d = false;
            this.f51138o = i12;
        }
        return this.f51137i[i10];
    }

    public String toString() {
        if (k() <= 0) {
            return "{}";
        }
        StringBuilder sb2 = new StringBuilder(this.f51138o * 28);
        sb2.append('{');
        int i10 = this.f51138o;
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
            this.f51136e = v0.a.f51737b;
            this.f51137i = v0.a.f51738c;
            return;
        }
        int f10 = v0.a.f(i10);
        this.f51136e = new long[f10];
        this.f51137i = new Object[f10];
    }

    public /* synthetic */ j(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 10 : i10);
    }
}
