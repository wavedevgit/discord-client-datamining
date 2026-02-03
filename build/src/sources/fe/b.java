package fe;

import java.util.Collections;
import java.util.List;
import ne.w0;
import zd.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements g {

    /* renamed from: d  reason: collision with root package name */
    private final zd.b[] f24258d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f24259e;

    public b(zd.b[] bVarArr, long[] jArr) {
        this.f24258d = bVarArr;
        this.f24259e = jArr;
    }

    @Override // zd.g
    public int a(long j10) {
        int e10 = w0.e(this.f24259e, j10, false, false);
        if (e10 < this.f24259e.length) {
            return e10;
        }
        return -1;
    }

    @Override // zd.g
    public List d(long j10) {
        zd.b bVar;
        int i10 = w0.i(this.f24259e, j10, true, false);
        if (i10 != -1 && (bVar = this.f24258d[i10]) != zd.b.C) {
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
        if (i10 < this.f24259e.length) {
            z11 = true;
        }
        ne.a.a(z11);
        return this.f24259e[i10];
    }

    @Override // zd.g
    public int f() {
        return this.f24259e.length;
    }
}
