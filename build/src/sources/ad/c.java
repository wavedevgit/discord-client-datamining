package ad;

import android.util.Pair;
import ld.k;
import ne.w0;
import tc.a0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c implements g {

    /* renamed from: a  reason: collision with root package name */
    private final long[] f479a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f480b;

    /* renamed from: c  reason: collision with root package name */
    private final long f481c;

    private c(long[] jArr, long[] jArr2, long j10) {
        this.f479a = jArr;
        this.f480b = jArr2;
        this.f481c = j10 == -9223372036854775807L ? w0.K0(jArr2[jArr2.length - 1]) : j10;
    }

    public static c a(long j10, k kVar, long j11) {
        int length = kVar.f37149p.length;
        int i10 = length + 1;
        long[] jArr = new long[i10];
        long[] jArr2 = new long[i10];
        jArr[0] = j10;
        long j12 = 0;
        jArr2[0] = 0;
        for (int i11 = 1; i11 <= length; i11++) {
            int i12 = i11 - 1;
            j10 += kVar.f37147i + kVar.f37149p[i12];
            j12 += kVar.f37148o + kVar.f37150q[i12];
            jArr[i11] = j10;
            jArr2[i11] = j12;
        }
        return new c(jArr, jArr2, j11);
    }

    private static Pair c(long j10, long[] jArr, long[] jArr2) {
        double d10;
        int i10 = w0.i(jArr, j10, true, true);
        long j11 = jArr[i10];
        long j12 = jArr2[i10];
        int i11 = i10 + 1;
        if (i11 == jArr.length) {
            return Pair.create(Long.valueOf(j11), Long.valueOf(j12));
        }
        long j13 = jArr[i11];
        long j14 = jArr2[i11];
        if (j13 == j11) {
            d10 = 0.0d;
        } else {
            d10 = (j10 - j11) / (j13 - j11);
        }
        return Pair.create(Long.valueOf(j10), Long.valueOf(((long) (d10 * (j14 - j12))) + j12));
    }

    @Override // ad.g
    public long b(long j10) {
        return w0.K0(((Long) c(j10, this.f479a, this.f480b).second).longValue());
    }

    @Override // tc.z
    public z.a e(long j10) {
        Pair c10 = c(w0.p1(w0.r(j10, 0L, this.f481c)), this.f480b, this.f479a);
        return new z.a(new a0(w0.K0(((Long) c10.first).longValue()), ((Long) c10.second).longValue()));
    }

    @Override // ad.g
    public long g() {
        return -1L;
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f481c;
    }
}
