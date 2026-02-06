package com.google.android.material.carousel;

import com.google.android.material.carousel.f;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    private final f f14785a;

    /* renamed from: b  reason: collision with root package name */
    private final List f14786b;

    /* renamed from: c  reason: collision with root package name */
    private final List f14787c;

    /* renamed from: d  reason: collision with root package name */
    private final float[] f14788d;

    /* renamed from: e  reason: collision with root package name */
    private final float[] f14789e;

    /* renamed from: f  reason: collision with root package name */
    private final float f14790f;

    /* renamed from: g  reason: collision with root package name */
    private final float f14791g;

    private g(f fVar, List list, List list2) {
        this.f14785a = fVar;
        this.f14786b = Collections.unmodifiableList(list);
        this.f14787c = Collections.unmodifiableList(list2);
        float f10 = ((f) list.get(list.size() - 1)).c().f14777a - fVar.c().f14777a;
        this.f14790f = f10;
        float f11 = fVar.j().f14777a - ((f) list2.get(list2.size() - 1)).j().f14777a;
        this.f14791g = f11;
        this.f14788d = m(f10, list, true);
        this.f14789e = m(f11, list2, false);
    }

    private f a(List list, float f10, float[] fArr) {
        float[] o10 = o(list, f10, fArr);
        if (o10[0] >= 0.5f) {
            return (f) list.get((int) o10[2]);
        }
        return (f) list.get((int) o10[1]);
    }

    private static int b(f fVar, float f10) {
        for (int i10 = fVar.i(); i10 < fVar.g().size(); i10++) {
            if (f10 == ((f.c) fVar.g().get(i10)).f14779c) {
                return i10;
            }
        }
        return fVar.g().size() - 1;
    }

    private static int c(f fVar) {
        for (int i10 = 0; i10 < fVar.g().size(); i10++) {
            if (!((f.c) fVar.g().get(i10)).f14781e) {
                return i10;
            }
        }
        return -1;
    }

    private static int d(f fVar, float f10) {
        for (int b10 = fVar.b() - 1; b10 >= 0; b10--) {
            if (f10 == ((f.c) fVar.g().get(b10)).f14779c) {
                return b10;
            }
        }
        return 0;
    }

    private static int e(f fVar) {
        for (int size = fVar.g().size() - 1; size >= 0; size--) {
            if (!((f.c) fVar.g().get(size)).f14781e) {
                return size;
            }
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g f(b bVar, f fVar, float f10, float f11, float f12) {
        return new g(fVar, p(bVar, fVar, f10, f11), n(bVar, fVar, f10, f12));
    }

    private static float[] m(float f10, List list, boolean z10) {
        float f11;
        float f12;
        int size = list.size();
        float[] fArr = new float[size];
        for (int i10 = 1; i10 < size; i10++) {
            int i11 = i10 - 1;
            f fVar = (f) list.get(i11);
            f fVar2 = (f) list.get(i10);
            if (z10) {
                f11 = fVar2.c().f14777a - fVar.c().f14777a;
            } else {
                f11 = fVar.j().f14777a - fVar2.j().f14777a;
            }
            float f13 = f11 / f10;
            if (i10 == size - 1) {
                f12 = 1.0f;
            } else {
                f12 = fArr[i11] + f13;
            }
            fArr[i10] = f12;
        }
        return fArr;
    }

    private static List n(b bVar, f fVar, float f10, float f11) {
        int b10;
        int i10;
        ArrayList arrayList = new ArrayList();
        arrayList.add(fVar);
        int e10 = e(fVar);
        if (bVar.d()) {
            b10 = bVar.a();
        } else {
            b10 = bVar.b();
        }
        float f12 = b10;
        if (!r(bVar, fVar) && e10 != -1) {
            int i11 = e10 - fVar.i();
            float f13 = fVar.c().f14778b - (fVar.c().f14780d / 2.0f);
            if (i11 <= 0 && fVar.h().f14782f > 0.0f) {
                arrayList.add(v(fVar, f13 - fVar.h().f14782f, f12));
                return arrayList;
            }
            int i12 = 0;
            float f14 = 0.0f;
            while (i12 < i11) {
                f fVar2 = (f) arrayList.get(arrayList.size() - 1);
                int i13 = e10 - i12;
                float f15 = f14 + ((f.c) fVar.g().get(i13)).f14782f;
                int i14 = i13 + 1;
                if (i14 < fVar.g().size()) {
                    i10 = d(fVar2, ((f.c) fVar.g().get(i14)).f14779c) + 1;
                } else {
                    i10 = 0;
                }
                f t10 = t(fVar2, e10, i10, f13 - f15, fVar.b() + i12 + 1, fVar.i() + i12 + 1, f12);
                if (i12 == i11 - 1 && f11 > 0.0f) {
                    t10 = u(t10, f11, f12, false, f10);
                }
                arrayList.add(t10);
                i12++;
                f14 = f15;
            }
        } else if (f11 > 0.0f) {
            arrayList.add(u(fVar, f11, f12, false, f10));
        }
        return arrayList;
    }

    private static float[] o(List list, float f10, float[] fArr) {
        int size = list.size();
        float f11 = fArr[0];
        int i10 = 1;
        while (i10 < size) {
            float f12 = fArr[i10];
            if (f10 <= f12) {
                return new float[]{bh.a.b(0.0f, 1.0f, f11, f12, f10), (float) (i10 - 1), i10};
            }
            i10++;
            f11 = f12;
        }
        return new float[]{0.0f, 0.0f, 0.0f};
    }

    private static List p(b bVar, f fVar, float f10, float f11) {
        int b10;
        ArrayList arrayList = new ArrayList();
        arrayList.add(fVar);
        int c10 = c(fVar);
        if (bVar.d()) {
            b10 = bVar.a();
        } else {
            b10 = bVar.b();
        }
        float f12 = b10;
        if (!q(fVar) && c10 != -1) {
            int b11 = fVar.b() - c10;
            float f13 = fVar.c().f14778b - (fVar.c().f14780d / 2.0f);
            if (b11 <= 0 && fVar.a().f14782f > 0.0f) {
                arrayList.add(v(fVar, f13 + fVar.a().f14782f, f12));
                return arrayList;
            }
            int i10 = 0;
            float f14 = 0.0f;
            while (i10 < b11) {
                f fVar2 = (f) arrayList.get(arrayList.size() - 1);
                int i11 = c10 + i10;
                int size = fVar.g().size() - 1;
                float f15 = f14 + ((f.c) fVar.g().get(i11)).f14782f;
                int i12 = i11 - 1;
                if (i12 >= 0) {
                    size = b(fVar2, ((f.c) fVar.g().get(i12)).f14779c) - 1;
                }
                int i13 = size;
                f t10 = t(fVar2, c10, i13, f13 + f15, (fVar.b() - i10) - 1, (fVar.i() - i10) - 1, f12);
                if (i10 == b11 - 1 && f11 > 0.0f) {
                    t10 = u(t10, f11, f12, true, f10);
                }
                arrayList.add(t10);
                i10++;
                f14 = f15;
            }
        } else if (f11 > 0.0f) {
            arrayList.add(u(fVar, f11, f12, true, f10));
        }
        return arrayList;
    }

    private static boolean q(f fVar) {
        if (fVar.a().f14778b - (fVar.a().f14780d / 2.0f) >= 0.0f && fVar.a() == fVar.d()) {
            return true;
        }
        return false;
    }

    private static boolean r(b bVar, f fVar) {
        int b10 = bVar.b();
        if (bVar.d()) {
            b10 = bVar.a();
        }
        if (fVar.h().f14778b + (fVar.h().f14780d / 2.0f) <= b10 && fVar.h() == fVar.k()) {
            return true;
        }
        return false;
    }

    private static f s(List list, float f10, float[] fArr) {
        float[] o10 = o(list, f10, fArr);
        return f.m((f) list.get((int) o10[1]), (f) list.get((int) o10[2]), o10[0]);
    }

    private static f t(f fVar, int i10, int i11, float f10, int i12, int i13, float f11) {
        boolean z10;
        ArrayList arrayList = new ArrayList(fVar.g());
        arrayList.add(i11, (f.c) arrayList.remove(i10));
        f.b bVar = new f.b(fVar.f(), f11);
        for (int i14 = 0; i14 < arrayList.size(); i14++) {
            f.c cVar = (f.c) arrayList.get(i14);
            float f12 = cVar.f14780d;
            float f13 = f10 + (f12 / 2.0f);
            if (i14 >= i12 && i14 <= i13) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.e(f13, cVar.f14779c, f12, z10, cVar.f14781e, cVar.f14782f);
            f10 += cVar.f14780d;
        }
        return bVar.i();
    }

    private static f u(f fVar, float f10, float f11, boolean z10, float f12) {
        float f13;
        boolean z11;
        float f14;
        float f15;
        ArrayList arrayList = new ArrayList(fVar.g());
        f.b bVar = new f.b(fVar.f(), f11);
        float l10 = f10 / fVar.l();
        if (z10) {
            f13 = f10;
        } else {
            f13 = 0.0f;
        }
        float f16 = f13;
        for (int i10 = 0; i10 < arrayList.size(); i10++) {
            f.c cVar = (f.c) arrayList.get(i10);
            if (cVar.f14781e) {
                bVar.e(cVar.f14778b, cVar.f14779c, cVar.f14780d, false, true, cVar.f14782f);
            } else {
                if (i10 >= fVar.b() && i10 <= fVar.i()) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                float f17 = cVar.f14780d - l10;
                float b10 = d.b(f17, fVar.f(), f12);
                float f18 = (f17 / 2.0f) + f16;
                float f19 = f18 - cVar.f14778b;
                float f20 = cVar.f14782f;
                if (z10) {
                    f14 = f19;
                } else {
                    f14 = 0.0f;
                }
                if (z10) {
                    f15 = 0.0f;
                } else {
                    f15 = f19;
                }
                bVar.f(f18, b10, f17, z11, false, f20, f14, f15);
                f16 += f17;
            }
        }
        return bVar.i();
    }

    private static f v(f fVar, float f10, float f11) {
        return t(fVar, 0, 0, f10, fVar.b(), fVar.i(), f11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f g() {
        return this.f14785a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f h() {
        List list = this.f14787c;
        return (f) list.get(list.size() - 1);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Map i(int i10, int i11, int i12, boolean z10) {
        int i13;
        int i14;
        int i15;
        float f10 = this.f14785a.f();
        HashMap hashMap = new HashMap();
        int i16 = 0;
        int i17 = 0;
        while (true) {
            int i18 = -1;
            if (i16 >= i10) {
                break;
            }
            if (z10) {
                i15 = (i10 - i16) - 1;
            } else {
                i15 = i16;
            }
            float f11 = i15 * f10;
            if (!z10) {
                i18 = 1;
            }
            if (f11 * i18 > i12 - this.f14791g || i16 >= i10 - this.f14787c.size()) {
                Integer valueOf = Integer.valueOf(i15);
                List list = this.f14787c;
                hashMap.put(valueOf, (f) list.get(u1.a.b(i17, 0, list.size() - 1)));
                i17++;
            }
            i16++;
        }
        int i19 = 0;
        for (int i20 = i10 - 1; i20 >= 0; i20--) {
            if (z10) {
                i13 = (i10 - i20) - 1;
            } else {
                i13 = i20;
            }
            float f12 = i13 * f10;
            if (z10) {
                i14 = -1;
            } else {
                i14 = 1;
            }
            if (f12 * i14 < i11 + this.f14790f || i20 < this.f14786b.size()) {
                Integer valueOf2 = Integer.valueOf(i13);
                List list2 = this.f14786b;
                hashMap.put(valueOf2, (f) list2.get(u1.a.b(i19, 0, list2.size() - 1)));
                i19++;
            }
        }
        return hashMap;
    }

    public f j(float f10, float f11, float f12) {
        return k(f10, f11, f12, false);
    }

    f k(float f10, float f11, float f12, boolean z10) {
        float b10;
        List list;
        float[] fArr;
        float f13 = this.f14790f + f11;
        float f14 = f12 - this.f14791g;
        float f15 = l().a().f14783g;
        float f16 = h().h().f14784h;
        if (this.f14790f == f15) {
            f13 += f15;
        }
        if (this.f14791g == f16) {
            f14 -= f16;
        }
        if (f10 < f13) {
            b10 = bh.a.b(1.0f, 0.0f, f11, f13, f10);
            list = this.f14786b;
            fArr = this.f14788d;
        } else if (f10 > f14) {
            b10 = bh.a.b(0.0f, 1.0f, f14, f12, f10);
            list = this.f14787c;
            fArr = this.f14789e;
        } else {
            return this.f14785a;
        }
        if (z10) {
            return a(list, b10, fArr);
        }
        return s(list, b10, fArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f l() {
        List list = this.f14786b;
        return (f) list.get(list.size() - 1);
    }
}
