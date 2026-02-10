package uc;

import oe.w0;
import uc.t;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements z {

    /* renamed from: a  reason: collision with root package name */
    private final t f51510a;

    /* renamed from: b  reason: collision with root package name */
    private final long f51511b;

    public s(t tVar, long j10) {
        this.f51510a = tVar;
        this.f51511b = j10;
    }

    private a0 a(long j10, long j11) {
        return new a0((j10 * 1000000) / this.f51510a.f51516e, this.f51511b + j11);
    }

    @Override // uc.z
    public z.a e(long j10) {
        long j11;
        oe.a.i(this.f51510a.f51522k);
        t tVar = this.f51510a;
        t.a aVar = tVar.f51522k;
        long[] jArr = aVar.f51524a;
        long[] jArr2 = aVar.f51525b;
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
        if (a10.f51432a != j10 && i10 != jArr.length - 1) {
            int i11 = i10 + 1;
            return new z.a(a10, a(jArr[i11], jArr2[i11]));
        }
        return new z.a(a10);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.z
    public long i() {
        return this.f51510a.f();
    }
}
