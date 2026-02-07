package tc;

import ne.w0;
import tc.t;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements z {

    /* renamed from: a  reason: collision with root package name */
    private final t f50602a;

    /* renamed from: b  reason: collision with root package name */
    private final long f50603b;

    public s(t tVar, long j10) {
        this.f50602a = tVar;
        this.f50603b = j10;
    }

    private a0 a(long j10, long j11) {
        return new a0((j10 * 1000000) / this.f50602a.f50608e, this.f50603b + j11);
    }

    @Override // tc.z
    public z.a e(long j10) {
        long j11;
        ne.a.i(this.f50602a.f50614k);
        t tVar = this.f50602a;
        t.a aVar = tVar.f50614k;
        long[] jArr = aVar.f50616a;
        long[] jArr2 = aVar.f50617b;
        int i10 = w0.i(jArr, tVar.i(j10), true, false);
        long j12 = 0;
        if (i10 == -1) {
            j11 = 0;
        } else {
            j11 = jArr[i10];
        }
        if (i10 != -1) {
            j12 = jArr2[i10];
        }
        a0 a10 = a(j11, j12);
        if (a10.f50524a != j10 && i10 != jArr.length - 1) {
            int i11 = i10 + 1;
            return new z.a(a10, a(jArr[i11], jArr2[i11]));
        }
        return new z.a(a10);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f50602a.f();
    }
}
