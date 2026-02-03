package h1;

import h1.b;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements b.a {

    /* renamed from: l  reason: collision with root package name */
    private static float f26688l = 0.001f;

    /* renamed from: b  reason: collision with root package name */
    private final b f26690b;

    /* renamed from: c  reason: collision with root package name */
    protected final c f26691c;

    /* renamed from: a  reason: collision with root package name */
    int f26689a = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f26692d = 8;

    /* renamed from: e  reason: collision with root package name */
    private h f26693e = null;

    /* renamed from: f  reason: collision with root package name */
    private int[] f26694f = new int[8];

    /* renamed from: g  reason: collision with root package name */
    private int[] f26695g = new int[8];

    /* renamed from: h  reason: collision with root package name */
    private float[] f26696h = new float[8];

    /* renamed from: i  reason: collision with root package name */
    private int f26697i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f26698j = -1;

    /* renamed from: k  reason: collision with root package name */
    private boolean f26699k = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(b bVar, c cVar) {
        this.f26690b = bVar;
        this.f26691c = cVar;
    }

    @Override // h1.b.a
    public final void a(h hVar, float f10) {
        if (f10 == 0.0f) {
            f(hVar, true);
            return;
        }
        int i10 = this.f26697i;
        if (i10 == -1) {
            this.f26697i = 0;
            this.f26696h[0] = f10;
            this.f26694f[0] = hVar.f26750i;
            this.f26695g[0] = -1;
            hVar.f26760x++;
            hVar.a(this.f26690b);
            this.f26689a++;
            if (!this.f26699k) {
                int i11 = this.f26698j + 1;
                this.f26698j = i11;
                int[] iArr = this.f26694f;
                if (i11 >= iArr.length) {
                    this.f26699k = true;
                    this.f26698j = iArr.length - 1;
                    return;
                }
                return;
            }
            return;
        }
        int i12 = -1;
        for (int i13 = 0; i10 != -1 && i13 < this.f26689a; i13++) {
            int i14 = this.f26694f[i10];
            int i15 = hVar.f26750i;
            if (i14 == i15) {
                this.f26696h[i10] = f10;
                return;
            }
            if (i14 < i15) {
                i12 = i10;
            }
            i10 = this.f26695g[i10];
        }
        int i16 = this.f26698j;
        int i17 = i16 + 1;
        if (this.f26699k) {
            int[] iArr2 = this.f26694f;
            if (iArr2[i16] != -1) {
                i16 = iArr2.length;
            }
        } else {
            i16 = i17;
        }
        int[] iArr3 = this.f26694f;
        if (i16 >= iArr3.length && this.f26689a < iArr3.length) {
            int i18 = 0;
            while (true) {
                int[] iArr4 = this.f26694f;
                if (i18 >= iArr4.length) {
                    break;
                } else if (iArr4[i18] == -1) {
                    i16 = i18;
                    break;
                } else {
                    i18++;
                }
            }
        }
        int[] iArr5 = this.f26694f;
        if (i16 >= iArr5.length) {
            i16 = iArr5.length;
            int i19 = this.f26692d * 2;
            this.f26692d = i19;
            this.f26699k = false;
            this.f26698j = i16 - 1;
            this.f26696h = Arrays.copyOf(this.f26696h, i19);
            this.f26694f = Arrays.copyOf(this.f26694f, this.f26692d);
            this.f26695g = Arrays.copyOf(this.f26695g, this.f26692d);
        }
        this.f26694f[i16] = hVar.f26750i;
        this.f26696h[i16] = f10;
        if (i12 != -1) {
            int[] iArr6 = this.f26695g;
            iArr6[i16] = iArr6[i12];
            iArr6[i12] = i16;
        } else {
            this.f26695g[i16] = this.f26697i;
            this.f26697i = i16;
        }
        hVar.f26760x++;
        hVar.a(this.f26690b);
        int i20 = this.f26689a + 1;
        this.f26689a = i20;
        if (!this.f26699k) {
            this.f26698j++;
        }
        int[] iArr7 = this.f26694f;
        if (i20 >= iArr7.length) {
            this.f26699k = true;
        }
        if (this.f26698j >= iArr7.length) {
            this.f26699k = true;
            this.f26698j = iArr7.length - 1;
        }
    }

    @Override // h1.b.a
    public void b(h hVar, float f10, boolean z10) {
        float f11 = f26688l;
        if (f10 <= (-f11) || f10 >= f11) {
            int i10 = this.f26697i;
            if (i10 == -1) {
                this.f26697i = 0;
                this.f26696h[0] = f10;
                this.f26694f[0] = hVar.f26750i;
                this.f26695g[0] = -1;
                hVar.f26760x++;
                hVar.a(this.f26690b);
                this.f26689a++;
                if (!this.f26699k) {
                    int i11 = this.f26698j + 1;
                    this.f26698j = i11;
                    int[] iArr = this.f26694f;
                    if (i11 >= iArr.length) {
                        this.f26699k = true;
                        this.f26698j = iArr.length - 1;
                        return;
                    }
                    return;
                }
                return;
            }
            int i12 = -1;
            for (int i13 = 0; i10 != -1 && i13 < this.f26689a; i13++) {
                int i14 = this.f26694f[i10];
                int i15 = hVar.f26750i;
                if (i14 == i15) {
                    float[] fArr = this.f26696h;
                    float f12 = fArr[i10] + f10;
                    float f13 = f26688l;
                    if (f12 > (-f13) && f12 < f13) {
                        f12 = 0.0f;
                    }
                    fArr[i10] = f12;
                    if (f12 == 0.0f) {
                        if (i10 == this.f26697i) {
                            this.f26697i = this.f26695g[i10];
                        } else {
                            int[] iArr2 = this.f26695g;
                            iArr2[i12] = iArr2[i10];
                        }
                        if (z10) {
                            hVar.f(this.f26690b);
                        }
                        if (this.f26699k) {
                            this.f26698j = i10;
                        }
                        hVar.f26760x--;
                        this.f26689a--;
                        return;
                    }
                    return;
                }
                if (i14 < i15) {
                    i12 = i10;
                }
                i10 = this.f26695g[i10];
            }
            int i16 = this.f26698j;
            int i17 = i16 + 1;
            if (this.f26699k) {
                int[] iArr3 = this.f26694f;
                if (iArr3[i16] != -1) {
                    i16 = iArr3.length;
                }
            } else {
                i16 = i17;
            }
            int[] iArr4 = this.f26694f;
            if (i16 >= iArr4.length && this.f26689a < iArr4.length) {
                int i18 = 0;
                while (true) {
                    int[] iArr5 = this.f26694f;
                    if (i18 >= iArr5.length) {
                        break;
                    } else if (iArr5[i18] == -1) {
                        i16 = i18;
                        break;
                    } else {
                        i18++;
                    }
                }
            }
            int[] iArr6 = this.f26694f;
            if (i16 >= iArr6.length) {
                i16 = iArr6.length;
                int i19 = this.f26692d * 2;
                this.f26692d = i19;
                this.f26699k = false;
                this.f26698j = i16 - 1;
                this.f26696h = Arrays.copyOf(this.f26696h, i19);
                this.f26694f = Arrays.copyOf(this.f26694f, this.f26692d);
                this.f26695g = Arrays.copyOf(this.f26695g, this.f26692d);
            }
            this.f26694f[i16] = hVar.f26750i;
            this.f26696h[i16] = f10;
            if (i12 != -1) {
                int[] iArr7 = this.f26695g;
                iArr7[i16] = iArr7[i12];
                iArr7[i12] = i16;
            } else {
                this.f26695g[i16] = this.f26697i;
                this.f26697i = i16;
            }
            hVar.f26760x++;
            hVar.a(this.f26690b);
            this.f26689a++;
            if (!this.f26699k) {
                this.f26698j++;
            }
            int i20 = this.f26698j;
            int[] iArr8 = this.f26694f;
            if (i20 >= iArr8.length) {
                this.f26699k = true;
                this.f26698j = iArr8.length - 1;
            }
        }
    }

    @Override // h1.b.a
    public h c(int i10) {
        int i11 = this.f26697i;
        for (int i12 = 0; i11 != -1 && i12 < this.f26689a; i12++) {
            if (i12 == i10) {
                return this.f26691c.f26709d[this.f26694f[i11]];
            }
            i11 = this.f26695g[i11];
        }
        return null;
    }

    @Override // h1.b.a
    public final void clear() {
        int i10 = this.f26697i;
        for (int i11 = 0; i10 != -1 && i11 < this.f26689a; i11++) {
            h hVar = this.f26691c.f26709d[this.f26694f[i10]];
            if (hVar != null) {
                hVar.f(this.f26690b);
            }
            i10 = this.f26695g[i10];
        }
        this.f26697i = -1;
        this.f26698j = -1;
        this.f26699k = false;
        this.f26689a = 0;
    }

    @Override // h1.b.a
    public void d() {
        int i10 = this.f26697i;
        for (int i11 = 0; i10 != -1 && i11 < this.f26689a; i11++) {
            float[] fArr = this.f26696h;
            fArr[i10] = fArr[i10] * (-1.0f);
            i10 = this.f26695g[i10];
        }
    }

    @Override // h1.b.a
    public float e(b bVar, boolean z10) {
        float i10 = i(bVar.f26700a);
        f(bVar.f26700a, z10);
        b.a aVar = bVar.f26704e;
        int h10 = aVar.h();
        for (int i11 = 0; i11 < h10; i11++) {
            h c10 = aVar.c(i11);
            b(c10, aVar.i(c10) * i10, z10);
        }
        return i10;
    }

    @Override // h1.b.a
    public final float f(h hVar, boolean z10) {
        if (this.f26693e == hVar) {
            this.f26693e = null;
        }
        int i10 = this.f26697i;
        if (i10 == -1) {
            return 0.0f;
        }
        int i11 = 0;
        int i12 = -1;
        while (i10 != -1 && i11 < this.f26689a) {
            if (this.f26694f[i10] == hVar.f26750i) {
                if (i10 == this.f26697i) {
                    this.f26697i = this.f26695g[i10];
                } else {
                    int[] iArr = this.f26695g;
                    iArr[i12] = iArr[i10];
                }
                if (z10) {
                    hVar.f(this.f26690b);
                }
                hVar.f26760x--;
                this.f26689a--;
                this.f26694f[i10] = -1;
                if (this.f26699k) {
                    this.f26698j = i10;
                }
                return this.f26696h[i10];
            }
            i11++;
            i12 = i10;
            i10 = this.f26695g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public boolean g(h hVar) {
        int i10 = this.f26697i;
        if (i10 == -1) {
            return false;
        }
        for (int i11 = 0; i10 != -1 && i11 < this.f26689a; i11++) {
            if (this.f26694f[i10] == hVar.f26750i) {
                return true;
            }
            i10 = this.f26695g[i10];
        }
        return false;
    }

    @Override // h1.b.a
    public int h() {
        return this.f26689a;
    }

    @Override // h1.b.a
    public final float i(h hVar) {
        int i10 = this.f26697i;
        for (int i11 = 0; i10 != -1 && i11 < this.f26689a; i11++) {
            if (this.f26694f[i10] == hVar.f26750i) {
                return this.f26696h[i10];
            }
            i10 = this.f26695g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public float j(int i10) {
        int i11 = this.f26697i;
        for (int i12 = 0; i11 != -1 && i12 < this.f26689a; i12++) {
            if (i12 == i10) {
                return this.f26696h[i11];
            }
            i11 = this.f26695g[i11];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public void k(float f10) {
        int i10 = this.f26697i;
        for (int i11 = 0; i10 != -1 && i11 < this.f26689a; i11++) {
            float[] fArr = this.f26696h;
            fArr[i10] = fArr[i10] / f10;
            i10 = this.f26695g[i10];
        }
    }

    public String toString() {
        int i10 = this.f26697i;
        String str = "";
        for (int i11 = 0; i10 != -1 && i11 < this.f26689a; i11++) {
            str = ((str + " -> ") + this.f26696h[i10] + " : ") + this.f26691c.f26709d[this.f26694f[i10]];
            i10 = this.f26695g[i10];
        }
        return str;
    }
}
