package ge;

import ae.g;
import java.util.Collections;
import java.util.List;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements g {

    /* renamed from: d  reason: collision with root package name */
    private final ae.b[] f25561d;

    /* renamed from: e  reason: collision with root package name */
    private final long[] f25562e;

    public b(ae.b[] bVarArr, long[] jArr) {
        this.f25561d = bVarArr;
        this.f25562e = jArr;
    }

    @Override // ae.g
    public int a(long j10) {
        int e10 = w0.e(this.f25562e, j10, false, false);
        if (e10 < this.f25562e.length) {
            return e10;
        }
        return -1;
    }

    @Override // ae.g
    public List d(long j10) {
        ae.b bVar;
        int i10 = w0.i(this.f25562e, j10, true, false);
        if (i10 != -1 && (bVar = this.f25561d[i10]) != ae.b.C) {
            return Collections.singletonList(bVar);
        }
        return Collections.EMPTY_LIST;
    }

    @Override // ae.g
    public long e(int i10) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        if (i10 < this.f25562e.length) {
            z11 = true;
        }
        oe.a.a(z11);
        return this.f25562e[i10];
    }

    @Override // ae.g
    public int f() {
        return this.f25562e.length;
    }
}
