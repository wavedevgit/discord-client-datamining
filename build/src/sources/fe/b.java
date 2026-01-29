package fe;

import java.util.Collections;
import java.util.List;
import ne.w0;
import zd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements g {

    /* renamed from: d  reason: collision with root package name */
    private final zd.b[] f25047d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f25048e;

    public b(zd.b[] bVarArr, long[] jArr) {
        this.f25047d = bVarArr;
        this.f25048e = jArr;
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f25048e, j10, false, false);
        if (e10 < this.f25048e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        zd.b bVar;
        int i10 = w0.i(this.f25048e, j10, true, false);
        if (i10 != -1 && (bVar = this.f25047d[i10]) != zd.b.C) {
            return Collections.singletonList(bVar);
        }
        return Collections.EMPTY_LIST;
    }

    @Override // zd.g
    public long e(int i10) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        if (i10 < this.f25048e.length) {
            z11 = true;
        }
        ne.a.a(z11);
        return this.f25048e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f25048e.length;
    }
}
