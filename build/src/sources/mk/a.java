package mk;

import ck.k;
import ck.m;
import ck.o;
import ck.p;
import com.google.zxing.Result;
import gk.b;
import gk.e;
import java.util.Map;
import nk.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements m {

    /* renamed from: b  reason: collision with root package name */
    private static final p[] f39093b = new p[0];

    /* renamed from: a  reason: collision with root package name */
    private final c f39094a = new c();

    private static b b(b bVar) {
        int[] g10 = bVar.g();
        if (g10 != null) {
            int i10 = g10[0];
            int i11 = g10[1];
            int i12 = g10[2];
            int i13 = g10[3];
            b bVar2 = new b(30, 33);
            for (int i14 = 0; i14 < 33; i14++) {
                int min = Math.min(((i14 * i13) + (i13 / 2)) / 33, i13 - 1) + i11;
                for (int i15 = 0; i15 < 30; i15++) {
                    if (bVar.e(Math.min((((i15 * i12) + (i12 / 2)) + (((i14 & 1) * i12) / 2)) / 30, i12 - 1) + i10, min)) {
                        bVar2.q(i15, i14);
                    }
                }
            }
            return bVar2;
        }
        throw k.a();
    }

    @Override // ck.m
    public Result a(ck.c cVar, Map map) {
        e b10 = this.f39094a.b(b(cVar.a()), map);
        Result result = new Result(b10.k(), b10.g(), f39093b, ck.a.MAXICODE);
        result.h(o.ERRORS_CORRECTED, b10.d());
        String b11 = b10.b();
        if (b11 != null) {
            result.h(o.ERROR_CORRECTION_LEVEL, b11);
        }
        return result;
    }

    @Override // ck.m
    public void reset() {
    }
}
