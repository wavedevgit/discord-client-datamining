package uc;

import oe.w0;
import uc.t;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements z {

    /* renamed from: a  reason: collision with root package name */
    private final t f51258a;

    /* renamed from: b  reason: collision with root package name */
    private final long f51259b;

    public s(t tVar, long j10) {
        this.f51258a = tVar;
        this.f51259b = j10;
    }

    private a0 a(long j10, long j11) {
        return new a0((j10 * 1000000) / this.f51258a.f51264e, this.f51259b + j11);
    }

    @Override // uc.z
    public z.a e(long j10) {
        long j11;
        oe.a.i(this.f51258a.f51270k);
        t tVar = this.f51258a;
        t.a aVar = tVar.f51270k;
        long[] jArr = aVar.f51272a;
        long[] jArr2 = aVar.f51273b;
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
        if (a10.f51180a != j10 && i10 != jArr.length - 1) {
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
        return this.f51258a.f();
    }
}
