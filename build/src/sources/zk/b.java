package zk;

import al.f;
import cl.c;
import cl.g;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {
    private static jk.b b(g gVar, int i10, int i11, int i12) {
        cl.b a10 = gVar.a();
        if (a10 != null) {
            int e10 = a10.e();
            int d10 = a10.d();
            int i13 = i12 * 2;
            int i14 = e10 + i13;
            int i15 = i13 + d10;
            int max = Math.max(i10, i14);
            int max2 = Math.max(i11, i15);
            int min = Math.min(max / i14, max2 / i15);
            int i16 = (max - (e10 * min)) / 2;
            int i17 = (max2 - (d10 * min)) / 2;
            jk.b bVar = new jk.b(max, max2);
            int i18 = 0;
            while (i18 < d10) {
                int i19 = 0;
                int i20 = i16;
                while (i19 < e10) {
                    if (a10.b(i19, i18) == 1) {
                        bVar.r(i20, i17, min, min);
                    }
                    i19++;
                    i20 += min;
                }
                i18++;
                i17 += min;
            }
            return bVar;
        }
        throw new IllegalStateException();
    }

    public jk.b a(String str, fk.a aVar, int i10, int i11, Map map) {
        if (!str.isEmpty()) {
            if (aVar == fk.a.QR_CODE) {
                if (i10 >= 0 && i11 >= 0) {
                    f fVar = f.L;
                    int i12 = 4;
                    if (map != null) {
                        fk.f fVar2 = fk.f.ERROR_CORRECTION;
                        if (map.containsKey(fVar2)) {
                            fVar = f.valueOf(map.get(fVar2).toString());
                        }
                        fk.f fVar3 = fk.f.MARGIN;
                        if (map.containsKey(fVar3)) {
                            i12 = Integer.parseInt(map.get(fVar3).toString());
                        }
                    }
                    return b(c.n(str, fVar, map), i10, i11, i12);
                }
                throw new IllegalArgumentException("Requested dimensions are too small: " + i10 + 'x' + i11);
            }
            throw new IllegalArgumentException("Can only encode QR_CODE, but got " + aVar);
        }
        throw new IllegalArgumentException("Found empty contents");
    }
}
