package jk;

import ck.c;
import ck.k;
import ck.m;
import ck.o;
import ck.p;
import com.google.zxing.Result;
import gk.b;
import gk.e;
import gk.g;
import java.util.List;
import java.util.Map;
import kk.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements m {

    /* renamed from: b  reason: collision with root package name */
    private static final p[] f31952b = new p[0];

    /* renamed from: a  reason: collision with root package name */
    private final d f31953a = new d();

    private static b b(b bVar) {
        int[] k10 = bVar.k();
        int[] f10 = bVar.f();
        if (k10 != null && f10 != null) {
            int c10 = c(k10, bVar);
            int i10 = k10[1];
            int i11 = f10[1];
            int i12 = k10[0];
            int i13 = ((f10[0] - i12) + 1) / c10;
            int i14 = ((i11 - i10) + 1) / c10;
            if (i13 > 0 && i14 > 0) {
                int i15 = c10 / 2;
                int i16 = i10 + i15;
                int i17 = i12 + i15;
                b bVar2 = new b(i13, i14);
                for (int i18 = 0; i18 < i14; i18++) {
                    int i19 = (i18 * c10) + i16;
                    for (int i20 = 0; i20 < i13; i20++) {
                        if (bVar.e((i20 * c10) + i17, i19)) {
                            bVar2.q(i20, i18);
                        }
                    }
                }
                return bVar2;
            }
            throw k.a();
        }
        throw k.a();
    }

    private static int c(int[] iArr, b bVar) {
        int l10 = bVar.l();
        int i10 = iArr[0];
        int i11 = iArr[1];
        while (i10 < l10 && bVar.e(i10, i11)) {
            i10++;
        }
        if (i10 != l10) {
            int i12 = i10 - iArr[0];
            if (i12 != 0) {
                return i12;
            }
            throw k.a();
        }
        throw k.a();
    }

    @Override // ck.m
    public Result a(c cVar, Map map) {
        p[] b10;
        e eVar;
        if (map != null && map.containsKey(ck.e.PURE_BARCODE)) {
            eVar = this.f31953a.b(b(cVar.a()));
            b10 = f31952b;
        } else {
            g b11 = new lk.a(cVar.a()).b();
            e b12 = this.f31953a.b(b11.a());
            b10 = b11.b();
            eVar = b12;
        }
        Result result = new Result(eVar.k(), eVar.g(), b10, ck.a.DATA_MATRIX);
        List a10 = eVar.a();
        if (a10 != null) {
            result.h(o.BYTE_SEGMENTS, a10);
        }
        String b13 = eVar.b();
        if (b13 != null) {
            result.h(o.ERROR_CORRECTION_LEVEL, b13);
        }
        result.h(o.ERRORS_CORRECTED, eVar.d());
        o oVar = o.SYMBOLOGY_IDENTIFIER;
        result.h(oVar, "]d" + eVar.j());
        return result;
    }

    @Override // ck.m
    public void reset() {
    }
}
