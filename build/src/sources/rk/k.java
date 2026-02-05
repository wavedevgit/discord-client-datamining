package rk;

import com.google.zxing.Result;
import java.util.Arrays;
import java.util.EnumMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k implements fk.m {
    private Result c(fk.c cVar, Map map) {
        boolean z10;
        int i10;
        int i11;
        Map map2;
        int i12;
        int i13;
        EnumMap enumMap = map;
        int d10 = cVar.d();
        int c10 = cVar.c();
        jk.a aVar = new jk.a(d10);
        int i14 = 1;
        if (enumMap != null && enumMap.containsKey(fk.e.TRY_HARDER)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 8;
        } else {
            i10 = 5;
        }
        int max = Math.max(1, c10 >> i10);
        if (z10) {
            i11 = c10;
        } else {
            i11 = 15;
        }
        int i15 = c10 / 2;
        int i16 = 0;
        while (i16 < i11) {
            int i17 = i16 + 1;
            int i18 = i17 / 2;
            if ((i16 & 1) != 0) {
                i18 = -i18;
            }
            int i19 = (i18 * max) + i15;
            if (i19 < 0 || i19 >= c10) {
                break;
            }
            try {
                aVar = cVar.b(i19, aVar);
                int i20 = 0;
                while (i20 < 2) {
                    if (i20 == i14) {
                        aVar.q();
                        if (enumMap != null) {
                            fk.e eVar = fk.e.NEED_RESULT_POINT_CALLBACK;
                            if (enumMap.containsKey(eVar)) {
                                EnumMap enumMap2 = new EnumMap(fk.e.class);
                                enumMap2.putAll(enumMap);
                                enumMap2.remove(eVar);
                                enumMap = enumMap2;
                            }
                        }
                    }
                    try {
                        Result b10 = b(i19, aVar, enumMap);
                        if (i20 == i14) {
                            try {
                                b10.h(fk.o.ORIENTATION, 180);
                                fk.p[] e10 = b10.e();
                                if (e10 != null) {
                                    i13 = i14;
                                    float f10 = d10;
                                    try {
                                        map2 = enumMap;
                                    } catch (fk.n unused) {
                                        map2 = enumMap;
                                    }
                                    try {
                                        i12 = d10;
                                    } catch (fk.n unused2) {
                                        i12 = d10;
                                        i20++;
                                        enumMap = map2;
                                        i14 = i13;
                                        d10 = i12;
                                    }
                                    try {
                                        e10[0] = new fk.p((f10 - e10[0].c()) - 1.0f, e10[0].d());
                                        e10[i13] = new fk.p((f10 - e10[i13].c()) - 1.0f, e10[i13].d());
                                    } catch (fk.n unused3) {
                                        continue;
                                        i20++;
                                        enumMap = map2;
                                        i14 = i13;
                                        d10 = i12;
                                    }
                                }
                            } catch (fk.n unused4) {
                                map2 = enumMap;
                                i12 = d10;
                                i13 = i14;
                            }
                        }
                        return b10;
                    } catch (fk.n unused5) {
                        map2 = enumMap;
                        i12 = d10;
                        i13 = i14;
                    }
                }
                continue;
            } catch (fk.k unused6) {
            }
            i16 = i17;
            i14 = i14;
            d10 = d10;
        }
        throw fk.k.a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static float d(int[] iArr, int[] iArr2, float f10) {
        float f11;
        int length = iArr.length;
        int i10 = 0;
        int i11 = 0;
        for (int i12 = 0; i12 < length; i12++) {
            i10 += iArr[i12];
            i11 += iArr2[i12];
        }
        if (i10 < i11) {
            return Float.POSITIVE_INFINITY;
        }
        float f12 = i10;
        float f13 = f12 / i11;
        float f14 = f10 * f13;
        float f15 = 0.0f;
        for (int i13 = 0; i13 < length; i13++) {
            float f16 = iArr2[i13] * f13;
            float f17 = iArr[i13];
            if (f17 > f16) {
                f11 = f17 - f16;
            } else {
                f11 = f16 - f17;
            }
            if (f11 > f14) {
                return Float.POSITIVE_INFINITY;
            }
            f15 += f11;
        }
        return f15 / f12;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void e(jk.a aVar, int i10, int[] iArr) {
        int length = iArr.length;
        int i11 = 0;
        Arrays.fill(iArr, 0, length, 0);
        int l10 = aVar.l();
        if (i10 < l10) {
            boolean z10 = !aVar.g(i10);
            while (i10 < l10) {
                if (aVar.g(i10) != z10) {
                    iArr[i11] = iArr[i11] + 1;
                } else {
                    i11++;
                    if (i11 == length) {
                        break;
                    }
                    iArr[i11] = 1;
                    z10 = !z10;
                }
                i10++;
            }
            if (i11 != length) {
                if (i11 != length - 1 || i10 != l10) {
                    throw fk.k.a();
                }
                return;
            }
            return;
        }
        throw fk.k.a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static void f(jk.a aVar, int i10, int[] iArr) {
        int length = iArr.length;
        boolean g10 = aVar.g(i10);
        while (i10 > 0 && length >= 0) {
            i10--;
            if (aVar.g(i10) != g10) {
                length--;
                g10 = !g10;
            }
        }
        if (length < 0) {
            e(aVar, i10 + 1, iArr);
            return;
        }
        throw fk.k.a();
    }

    @Override // fk.m
    public Result a(fk.c cVar, Map map) {
        try {
            return c(cVar, map);
        } catch (fk.k e10) {
            if (map != null && map.containsKey(fk.e.TRY_HARDER) && cVar.e()) {
                fk.c f10 = cVar.f();
                Result c10 = c(f10, map);
                Map d10 = c10.d();
                int i10 = 270;
                if (d10 != null) {
                    fk.o oVar = fk.o.ORIENTATION;
                    if (d10.containsKey(oVar)) {
                        i10 = (((Integer) d10.get(oVar)).intValue() + 270) % 360;
                    }
                }
                c10.h(fk.o.ORIENTATION, Integer.valueOf(i10));
                fk.p[] e11 = c10.e();
                if (e11 != null) {
                    int c11 = f10.c();
                    for (int i11 = 0; i11 < e11.length; i11++) {
                        e11[i11] = new fk.p((c11 - e11[i11].d()) - 1.0f, e11[i11].c());
                    }
                }
                return c10;
            }
            throw e10;
        }
    }

    public abstract Result b(int i10, jk.a aVar, Map map);

    @Override // fk.m
    public void reset() {
    }
}
