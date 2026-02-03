package y0;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final u0.l f53849a;

    public g(long[] jArr) {
        u0.l lVar;
        if (jArr != null) {
            long[] copyOf = Arrays.copyOf(jArr, jArr.length);
            lVar = new u0.l(copyOf.length);
            lVar.d(lVar.f50072b, copyOf);
        } else {
            lVar = new u0.l(0, 1, null);
        }
        this.f53849a = lVar;
    }

    public final void a(long j10) {
        this.f53849a.c(j10);
    }

    public final long[] b() {
        u0.l lVar = this.f53849a;
        int i10 = lVar.f50072b;
        if (i10 == 0) {
            return null;
        }
        long[] jArr = new long[i10];
        long[] jArr2 = lVar.f50071a;
        for (int i11 = 0; i11 < i10; i11++) {
            jArr[i11] = jArr2[i11];
        }
        return jArr;
    }
}
