package gl;

import java.util.ArrayList;
import java.util.List;
import kk.k;
import kk.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ok.b f25761a;

    /* renamed from: c  reason: collision with root package name */
    private final int f25763c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25764d;

    /* renamed from: e  reason: collision with root package name */
    private final int f25765e;

    /* renamed from: f  reason: collision with root package name */
    private final int f25766f;

    /* renamed from: g  reason: collision with root package name */
    private final float f25767g;

    /* renamed from: b  reason: collision with root package name */
    private final List f25762b = new ArrayList(5);

    /* renamed from: h  reason: collision with root package name */
    private final int[] f25768h = new int[3];

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(ok.b bVar, int i10, int i11, int i12, int i13, float f10, q qVar) {
        this.f25761a = bVar;
        this.f25763c = i10;
        this.f25764d = i11;
        this.f25765e = i12;
        this.f25766f = i13;
        this.f25767g = f10;
    }

    private static float a(int[] iArr, int i10) {
        return (i10 - iArr[2]) - (iArr[1] / 2.0f);
    }

    private float b(int i10, int i11, int i12, int i13) {
        ok.b bVar = this.f25761a;
        int h10 = bVar.h();
        int[] iArr = this.f25768h;
        iArr[0] = 0;
        iArr[1] = 0;
        iArr[2] = 0;
        int i14 = i10;
        while (i14 >= 0 && bVar.e(i11, i14)) {
            int i15 = iArr[1];
            if (i15 > i12) {
                break;
            }
            iArr[1] = i15 + 1;
            i14--;
        }
        if (i14 >= 0 && iArr[1] <= i12) {
            while (i14 >= 0 && !bVar.e(i11, i14)) {
                int i16 = iArr[0];
                if (i16 > i12) {
                    break;
                }
                iArr[0] = i16 + 1;
                i14--;
            }
            if (iArr[0] > i12) {
                return Float.NaN;
            }
            int i17 = i10 + 1;
            while (i17 < h10 && bVar.e(i11, i17)) {
                int i18 = iArr[1];
                if (i18 > i12) {
                    break;
                }
                iArr[1] = i18 + 1;
                i17++;
            }
            if (i17 != h10 && iArr[1] <= i12) {
                while (i17 < h10 && !bVar.e(i11, i17)) {
                    int i19 = iArr[2];
                    if (i19 > i12) {
                        break;
                    }
                    iArr[2] = i19 + 1;
                    i17++;
                }
                int i20 = iArr[2];
                if (i20 <= i12 && Math.abs(((iArr[0] + iArr[1]) + i20) - i13) * 5 < i13 * 2 && d(iArr)) {
                    return a(iArr, i17);
                }
            }
        }
        return Float.NaN;
    }

    private boolean d(int[] iArr) {
        float f10 = this.f25767g;
        float f11 = f10 / 2.0f;
        for (int i10 = 0; i10 < 3; i10++) {
            if (Math.abs(f10 - iArr[i10]) >= f11) {
                return false;
            }
        }
        return true;
    }

    private a e(int[] iArr, int i10, int i11) {
        int i12 = iArr[0] + iArr[1] + iArr[2];
        float a10 = a(iArr, i11);
        float b10 = b(i10, (int) a10, iArr[1] * 2, i12);
        if (!Float.isNaN(b10)) {
            float f10 = ((iArr[0] + iArr[1]) + iArr[2]) / 3.0f;
            for (a aVar : this.f25762b) {
                if (aVar.f(f10, b10, a10)) {
                    return aVar.g(b10, a10, f10);
                }
            }
            this.f25762b.add(new a(a10, b10, f10));
            return null;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a c() {
        int i10;
        a e10;
        a e11;
        int i11 = this.f25763c;
        int i12 = this.f25766f;
        int i13 = this.f25765e + i11;
        int i14 = this.f25764d + (i12 / 2);
        int[] iArr = new int[3];
        for (int i15 = 0; i15 < i12; i15++) {
            if ((i15 & 1) == 0) {
                i10 = (i15 + 1) / 2;
            } else {
                i10 = -((i15 + 1) / 2);
            }
            int i16 = i10 + i14;
            iArr[0] = 0;
            iArr[1] = 0;
            iArr[2] = 0;
            int i17 = i11;
            while (i17 < i13 && !this.f25761a.e(i17, i16)) {
                i17++;
            }
            int i18 = 0;
            while (i17 < i13) {
                if (this.f25761a.e(i17, i16)) {
                    if (i18 == 1) {
                        iArr[1] = iArr[1] + 1;
                    } else if (i18 == 2) {
                        if (d(iArr) && (e11 = e(iArr, i16, i17)) != null) {
                            return e11;
                        }
                        iArr[0] = iArr[2];
                        iArr[1] = 1;
                        iArr[2] = 0;
                        i18 = 1;
                    } else {
                        i18++;
                        iArr[i18] = iArr[i18] + 1;
                    }
                } else {
                    if (i18 == 1) {
                        i18++;
                    }
                    iArr[i18] = iArr[i18] + 1;
                }
                i17++;
            }
            if (d(iArr) && (e10 = e(iArr, i16, i13)) != null) {
                return e10;
            }
        }
        if (!this.f25762b.isEmpty()) {
            return (a) this.f25762b.get(0);
        }
        throw k.a();
    }
}
