package y0;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final u0.l f54844a;

    public g(long[] jArr) {
        u0.l lVar;
        if (jArr != null) {
            long[] copyOf = Arrays.copyOf(jArr, jArr.length);
            lVar = new u0.l(copyOf.length);
            lVar.d(lVar.f51169b, copyOf);
        } else {
            lVar = new u0.l(0, 1, null);
        }
        this.f54844a = lVar;
    }

    public final void a(long j10) {
        this.f54844a.c(j10);
    }

    public final long[] b() {
        u0.l lVar = this.f54844a;
        int i10 = lVar.f51169b;
        if (i10 == 0) {
            return null;
        }
        long[] jArr = new long[i10];
        long[] jArr2 = lVar.f51168a;
        for (int i11 = 0; i11 < i10; i11++) {
            jArr[i11] = jArr2[i11];
        }
        return jArr;
    }
}
