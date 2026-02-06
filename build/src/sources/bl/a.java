package bl;

import cl.e;
import cl.i;
import com.google.zxing.Result;
import hk.c;
import hk.k;
import hk.m;
import hk.o;
import hk.p;
import java.util.List;
import java.util.Map;
import lk.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements m {

    /* renamed from: b  reason: collision with root package name */
    private static final p[] f6837b = new p[0];

    /* renamed from: a  reason: collision with root package name */
    private final e f6838a = new e();

    private static lk.b b(lk.b bVar) {
        int[] k10 = bVar.k();
        int[] f10 = bVar.f();
        if (k10 != null && f10 != null) {
            float c10 = c(k10, bVar);
            int i10 = k10[1];
            int i11 = f10[1];
            int i12 = k10[0];
            int i13 = f10[0];
            if (i12 < i13 && i10 < i11) {
                int i14 = i11 - i10;
                if (i14 != i13 - i12 && (i13 = i12 + i14) >= bVar.l()) {
                    throw k.a();
                }
                int round = Math.round(((i13 - i12) + 1) / c10);
                int round2 = Math.round((i14 + 1) / c10);
                if (round > 0 && round2 > 0) {
                    if (round2 == round) {
                        int i15 = (int) (c10 / 2.0f);
                        int i16 = i10 + i15;
                        int i17 = i12 + i15;
                        int i18 = (((int) ((round - 1) * c10)) + i17) - i13;
                        if (i18 > 0) {
                            if (i18 <= i15) {
                                i17 -= i18;
                            } else {
                                throw k.a();
                            }
                        }
                        int i19 = (((int) ((round2 - 1) * c10)) + i16) - i11;
                        if (i19 > 0) {
                            if (i19 <= i15) {
                                i16 -= i19;
                            } else {
                                throw k.a();
                            }
                        }
                        lk.b bVar2 = new lk.b(round, round2);
                        for (int i20 = 0; i20 < round2; i20++) {
                            int i21 = ((int) (i20 * c10)) + i16;
                            for (int i22 = 0; i22 < round; i22++) {
                                if (bVar.e(((int) (i22 * c10)) + i17, i21)) {
                                    bVar2.q(i22, i20);
                                }
                            }
                        }
                        return bVar2;
                    }
                    throw k.a();
                }
                throw k.a();
            }
            throw k.a();
        }
        throw k.a();
    }

    private static float c(int[] iArr, lk.b bVar) {
        int i10 = bVar.i();
        int l10 = bVar.l();
        int i11 = iArr[0];
        boolean z10 = true;
        int i12 = iArr[1];
        int i13 = 0;
        while (i11 < l10 && i12 < i10) {
            if (z10 != bVar.e(i11, i12)) {
                i13++;
                if (i13 == 5) {
                    break;
                }
                z10 = !z10;
            }
            i11++;
            i12++;
        }
        if (i11 != l10 && i12 != i10) {
            return (i11 - iArr[0]) / 7.0f;
        }
        throw k.a();
    }

    @Override // hk.m
    public final Result a(c cVar, Map map) {
        p[] b10;
        lk.e eVar;
        if (map != null && map.containsKey(hk.e.PURE_BARCODE)) {
            eVar = this.f6838a.c(b(cVar.a()), map);
            b10 = f6837b;
        } else {
            g e10 = new dl.c(cVar.a()).e(map);
            lk.e c10 = this.f6838a.c(e10.a(), map);
            b10 = e10.b();
            eVar = c10;
        }
        if (eVar.f() instanceof i) {
            ((i) eVar.f()).a(b10);
        }
        Result result = new Result(eVar.k(), eVar.g(), b10, hk.a.QR_CODE);
        List a10 = eVar.a();
        if (a10 != null) {
            result.h(o.BYTE_SEGMENTS, a10);
        }
        String b11 = eVar.b();
        if (b11 != null) {
            result.h(o.ERROR_CORRECTION_LEVEL, b11);
        }
        if (eVar.l()) {
            result.h(o.STRUCTURED_APPEND_SEQUENCE, Integer.valueOf(eVar.i()));
            result.h(o.STRUCTURED_APPEND_PARITY, Integer.valueOf(eVar.h()));
        }
        result.h(o.ERRORS_CORRECTED, eVar.d());
        o oVar = o.SYMBOLOGY_IDENTIFIER;
        result.h(oVar, "]Q" + eVar.j());
        return result;
    }

    @Override // hk.m
    public void reset() {
    }
}
