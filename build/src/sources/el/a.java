package el;

import com.google.zxing.Result;
import fl.e;
import fl.i;
import java.util.List;
import java.util.Map;
import kk.c;
import kk.k;
import kk.m;
import kk.o;
import kk.p;
import ok.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements m {

    /* renamed from: b  reason: collision with root package name */
    private static final p[] f22921b = new p[0];

    /* renamed from: a  reason: collision with root package name */
    private final e f22922a = new e();

    private static ok.b b(ok.b bVar) {
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
                        ok.b bVar2 = new ok.b(round, round2);
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

    private static float c(int[] iArr, ok.b bVar) {
        int h10 = bVar.h();
        int l10 = bVar.l();
        int i10 = iArr[0];
        boolean z10 = true;
        int i11 = iArr[1];
        int i12 = 0;
        while (i10 < l10 && i11 < h10) {
            if (z10 != bVar.e(i10, i11)) {
                i12++;
                if (i12 == 5) {
                    break;
                }
                z10 = !z10;
            }
            i10++;
            i11++;
        }
        if (i10 != l10 && i11 != h10) {
            return (i10 - iArr[0]) / 7.0f;
        }
        throw k.a();
    }

    @Override // kk.m
    public final Result a(c cVar, Map map) {
        p[] b10;
        ok.e eVar;
        if (map != null && map.containsKey(kk.e.PURE_BARCODE)) {
            eVar = this.f22922a.c(b(cVar.a()), map);
            b10 = f22921b;
        } else {
            g e10 = new gl.c(cVar.a()).e(map);
            ok.e c10 = this.f22922a.c(e10.a(), map);
            b10 = e10.b();
            eVar = c10;
        }
        if (eVar.f() instanceof i) {
            ((i) eVar.f()).a(b10);
        }
        Result result = new Result(eVar.k(), eVar.g(), b10, kk.a.QR_CODE);
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

    @Override // kk.m
    public void reset() {
    }
}
