package u0;

import jr.b0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p extends s {

    /* renamed from: e  reason: collision with root package name */
    private int f50086e;

    public p(int i10) {
        super(null);
        if (!(i10 >= 0)) {
            v0.d.a("Capacity must be a positive value.");
        }
        m(r.d(i10));
    }

    private final int i(Object obj) {
        int i10;
        int i11;
        if (obj != null) {
            i10 = obj.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = i10 * (-862048943);
        int i13 = i12 ^ (i12 << 16);
        int i14 = i13 >>> 7;
        int i15 = i13 & 127;
        int i16 = this.f50096c;
        int i17 = i14 & i16;
        int i18 = 0;
        while (true) {
            long[] jArr = this.f50094a;
            int i19 = i17 >> 3;
            int i20 = (i17 & 7) << 3;
            long j10 = ((jArr[i19 + 1] << (64 - i20)) & ((-i20) >> 63)) | (jArr[i19] >>> i20);
            long j11 = i15;
            int i21 = i15;
            long j12 = j10 ^ (j11 * 72340172838076673L);
            for (long j13 = (~j12) & (j12 - 72340172838076673L) & (-9187201950435737472L); j13 != 0; j13 &= j13 - 1) {
                int numberOfTrailingZeros = (i17 + (Long.numberOfTrailingZeros(j13) >> 3)) & i16;
                if (Intrinsics.areEqual(this.f50095b[numberOfTrailingZeros], obj)) {
                    return numberOfTrailingZeros;
                }
            }
            if ((((~j10) << 6) & j10 & (-9187201950435737472L)) != 0) {
                int j14 = j(i14);
                if (this.f50086e == 0 && ((this.f50094a[j14 >> 3] >> ((j14 & 7) << 3)) & 255) != 254) {
                    g();
                    j14 = j(i14);
                }
                this.f50097d++;
                int i22 = this.f50086e;
                long[] jArr2 = this.f50094a;
                int i23 = j14 >> 3;
                long j15 = jArr2[i23];
                int i24 = (j14 & 7) << 3;
                if (((j15 >> i24) & 255) == 128) {
                    i11 = 1;
                } else {
                    i11 = 0;
                }
                this.f50086e = i22 - i11;
                int i25 = this.f50096c;
                long j16 = ((~(255 << i24)) & j15) | (j11 << i24);
                jArr2[i23] = j16;
                jArr2[(((j14 - 7) & i25) + (i25 & 7)) >> 3] = j16;
                return j14;
            }
            i18 += 8;
            i17 = (i17 + i18) & i16;
            i15 = i21;
        }
    }

    private final int j(int i10) {
        int i11 = this.f50096c;
        int i12 = i10 & i11;
        int i13 = 0;
        while (true) {
            long[] jArr = this.f50094a;
            int i14 = i12 >> 3;
            int i15 = (i12 & 7) << 3;
            long j10 = ((jArr[i14 + 1] << (64 - i15)) & ((-i15) >> 63)) | (jArr[i14] >>> i15);
            long j11 = j10 & ((~j10) << 7) & (-9187201950435737472L);
            if (j11 != 0) {
                return (i12 + (Long.numberOfTrailingZeros(j11) >> 3)) & i11;
            }
            i13 += 8;
            i12 = (i12 + i13) & i11;
        }
    }

    private final void k() {
        this.f50086e = r.a(b()) - this.f50097d;
    }

    private final void l(int i10) {
        long[] jArr;
        if (i10 == 0) {
            jArr = r.f50092a;
        } else {
            long[] jArr2 = new long[((i10 + 15) & (-8)) >> 3];
            kotlin.collections.i.y(jArr2, -9187201950435737472L, 0, 0, 6, null);
            jArr = jArr2;
        }
        this.f50094a = jArr;
        int i11 = i10 >> 3;
        long j10 = 255 << ((i10 & 7) << 3);
        jArr[i11] = (jArr[i11] & (~j10)) | j10;
        k();
    }

    private final void m(int i10) {
        int i11;
        Object[] objArr;
        if (i10 > 0) {
            i11 = Math.max(7, r.c(i10));
        } else {
            i11 = 0;
        }
        this.f50096c = i11;
        l(i11);
        if (i11 == 0) {
            objArr = v0.a.f50724c;
        } else {
            objArr = new Object[i11];
        }
        this.f50095b = objArr;
    }

    public final boolean f(Object obj) {
        int c10 = c();
        this.f50095b[i(obj)] = obj;
        if (c() != c10) {
            return true;
        }
        return false;
    }

    public final void g() {
        int compare;
        if (this.f50096c > 8) {
            compare = Long.compare(b0.d(b0.d(this.f50097d) * 32) ^ Long.MIN_VALUE, b0.d(b0.d(this.f50096c) * 25) ^ Long.MIN_VALUE);
            if (compare <= 0) {
                h();
                return;
            }
        }
        n(r.b(this.f50096c));
    }

    public final void h() {
        int i10;
        int i11;
        long j10;
        long[] jArr = this.f50094a;
        int i12 = this.f50096c;
        Object[] objArr = this.f50095b;
        int i13 = (i12 + 7) >> 3;
        int i14 = 0;
        for (int i15 = 0; i15 < i13; i15++) {
            long j11 = jArr[i15] & (-9187201950435737472L);
            jArr[i15] = (-72340172838076674L) & ((~j11) + (j11 >>> 7));
        }
        int Z = kotlin.collections.i.Z(jArr);
        int i16 = Z - 1;
        long j12 = 72057594037927935L;
        jArr[i16] = (jArr[i16] & 72057594037927935L) | (-72057594037927936L);
        jArr[Z] = jArr[0];
        int i17 = 0;
        while (i17 != i12) {
            int i18 = i17 >> 3;
            int i19 = (i17 & 7) << 3;
            long j13 = (jArr[i18] >> i19) & 255;
            if (j13 == 128 || j13 != 254) {
                i17++;
            } else {
                Object obj = objArr[i17];
                if (obj != null) {
                    i10 = obj.hashCode();
                } else {
                    i10 = i14;
                }
                int i20 = i10 * (-862048943);
                int i21 = (i20 ^ (i20 << 16)) >>> 7;
                int j14 = j(i21);
                int i22 = i21 & i12;
                int i23 = i14;
                if (((j14 - i22) & i12) / 8 == ((i17 - i22) & i12) / 8) {
                    jArr[i18] = ((i11 & 127) << i19) | ((~(255 << i19)) & jArr[i18]);
                    jArr[kotlin.collections.i.Z(jArr)] = (jArr[i23] & j12) | Long.MIN_VALUE;
                    i17++;
                    i14 = i23;
                } else {
                    int i24 = j14 >> 3;
                    long j15 = jArr[i24];
                    int i25 = (j14 & 7) << 3;
                    if (((j15 >> i25) & 255) == 128) {
                        j10 = j12;
                        jArr[i24] = ((i11 & 127) << i25) | (j15 & (~(255 << i25)));
                        jArr[i18] = (jArr[i18] & (~(255 << i19))) | (128 << i19);
                        objArr[j14] = objArr[i17];
                        objArr[i17] = null;
                    } else {
                        j10 = j12;
                        jArr[i24] = ((i11 & 127) << i25) | (j15 & (~(255 << i25)));
                        Object obj2 = objArr[j14];
                        objArr[j14] = objArr[i17];
                        objArr[i17] = obj2;
                        i17--;
                    }
                    jArr[kotlin.collections.i.Z(jArr)] = (jArr[i23] & j10) | Long.MIN_VALUE;
                    i17++;
                    i14 = i23;
                    j12 = j10;
                }
            }
        }
        k();
    }

    public final void n(int i10) {
        int i11;
        long[] jArr = this.f50094a;
        Object[] objArr = this.f50095b;
        int i12 = this.f50096c;
        m(i10);
        long[] jArr2 = this.f50094a;
        Object[] objArr2 = this.f50095b;
        int i13 = this.f50096c;
        for (int i14 = 0; i14 < i12; i14++) {
            if (((jArr[i14 >> 3] >> ((i14 & 7) << 3)) & 255) < 128) {
                Object obj = objArr[i14];
                if (obj != null) {
                    i11 = obj.hashCode();
                } else {
                    i11 = 0;
                }
                int i15 = i11 * (-862048943);
                int i16 = i15 ^ (i15 << 16);
                int j10 = j(i16 >>> 7);
                long j11 = i16 & 127;
                int i17 = j10 >> 3;
                int i18 = (j10 & 7) << 3;
                long j12 = (jArr2[i17] & (~(255 << i18))) | (j11 << i18);
                jArr2[i17] = j12;
                jArr2[(((j10 - 7) & i13) + (i13 & 7)) >> 3] = j12;
                objArr2[j10] = obj;
            }
        }
    }

    public /* synthetic */ p(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? 6 : i10);
    }
}
