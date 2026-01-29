package h1;

import h1.b;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements b.a {

    /* renamed from: l  reason: collision with root package name */
    private static float f27214l = 0.001f;

    /* renamed from: b  reason: collision with root package name */
    private final b f27216b;

    /* renamed from: c  reason: collision with root package name */
    protected final c f27217c;

    /* renamed from: a  reason: collision with root package name */
    int f27215a = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f27218d = 8;

    /* renamed from: e  reason: collision with root package name */
    private h f27219e = null;

    /* renamed from: f  reason: collision with root package name */
    private int[] f27220f = new int[8];

    /* renamed from: g  reason: collision with root package name */
    private int[] f27221g = new int[8];

    /* renamed from: h  reason: collision with root package name */
    private float[] f27222h = new float[8];

    /* renamed from: i  reason: collision with root package name */
    private int f27223i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f27224j = -1;

    /* renamed from: k  reason: collision with root package name */
    private boolean f27225k = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(b bVar, c cVar) {
        this.f27216b = bVar;
        this.f27217c = cVar;
    }

    @Override // h1.b.a
    public final void a(h hVar, float f10) {
        if (f10 == 0.0f) {
            f(hVar, true);
            return;
        }
        int i10 = this.f27223i;
        if (i10 == -1) {
            this.f27223i = 0;
            this.f27222h[0] = f10;
            this.f27220f[0] = hVar.f27276i;
            this.f27221g[0] = -1;
            hVar.f27286x++;
            hVar.a(this.f27216b);
            this.f27215a++;
            if (!this.f27225k) {
                int i11 = this.f27224j + 1;
                this.f27224j = i11;
                int[] iArr = this.f27220f;
                if (i11 >= iArr.length) {
                    this.f27225k = true;
                    this.f27224j = iArr.length - 1;
                    return;
                }
                return;
            }
            return;
        }
        int i12 = -1;
        for (int i13 = 0; i10 != -1 && i13 < this.f27215a; i13++) {
            int i14 = this.f27220f[i10];
            int i15 = hVar.f27276i;
            if (i14 == i15) {
                this.f27222h[i10] = f10;
                return;
            }
            if (i14 < i15) {
                i12 = i10;
            }
            i10 = this.f27221g[i10];
        }
        int i16 = this.f27224j;
        int i17 = i16 + 1;
        if (this.f27225k) {
            int[] iArr2 = this.f27220f;
            if (iArr2[i16] != -1) {
                i16 = iArr2.length;
            }
        } else {
            i16 = i17;
        }
        int[] iArr3 = this.f27220f;
        if (i16 >= iArr3.length && this.f27215a < iArr3.length) {
            int i18 = 0;
            while (true) {
                int[] iArr4 = this.f27220f;
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
        int[] iArr5 = this.f27220f;
        if (i16 >= iArr5.length) {
            i16 = iArr5.length;
            int i19 = this.f27218d * 2;
            this.f27218d = i19;
            this.f27225k = false;
            this.f27224j = i16 - 1;
            this.f27222h = Arrays.copyOf(this.f27222h, i19);
            this.f27220f = Arrays.copyOf(this.f27220f, this.f27218d);
            this.f27221g = Arrays.copyOf(this.f27221g, this.f27218d);
        }
        this.f27220f[i16] = hVar.f27276i;
        this.f27222h[i16] = f10;
        if (i12 != -1) {
            int[] iArr6 = this.f27221g;
            iArr6[i16] = iArr6[i12];
            iArr6[i12] = i16;
        } else {
            this.f27221g[i16] = this.f27223i;
            this.f27223i = i16;
        }
        hVar.f27286x++;
        hVar.a(this.f27216b);
        int i20 = this.f27215a + 1;
        this.f27215a = i20;
        if (!this.f27225k) {
            this.f27224j++;
        }
        int[] iArr7 = this.f27220f;
        if (i20 >= iArr7.length) {
            this.f27225k = true;
        }
        if (this.f27224j >= iArr7.length) {
            this.f27225k = true;
            this.f27224j = iArr7.length - 1;
        }
    }

    @Override // h1.b.a
    public void b(h hVar, float f10, boolean z10) {
        float f11 = f27214l;
        if (f10 <= (-f11) || f10 >= f11) {
            int i10 = this.f27223i;
            if (i10 == -1) {
                this.f27223i = 0;
                this.f27222h[0] = f10;
                this.f27220f[0] = hVar.f27276i;
                this.f27221g[0] = -1;
                hVar.f27286x++;
                hVar.a(this.f27216b);
                this.f27215a++;
                if (!this.f27225k) {
                    int i11 = this.f27224j + 1;
                    this.f27224j = i11;
                    int[] iArr = this.f27220f;
                    if (i11 >= iArr.length) {
                        this.f27225k = true;
                        this.f27224j = iArr.length - 1;
                        return;
                    }
                    return;
                }
                return;
            }
            int i12 = -1;
            for (int i13 = 0; i10 != -1 && i13 < this.f27215a; i13++) {
                int i14 = this.f27220f[i10];
                int i15 = hVar.f27276i;
                if (i14 == i15) {
                    float[] fArr = this.f27222h;
                    float f12 = fArr[i10] + f10;
                    float f13 = f27214l;
                    if (f12 > (-f13) && f12 < f13) {
                        f12 = 0.0f;
                    }
                    fArr[i10] = f12;
                    if (f12 == 0.0f) {
                        if (i10 == this.f27223i) {
                            this.f27223i = this.f27221g[i10];
                        } else {
                            int[] iArr2 = this.f27221g;
                            iArr2[i12] = iArr2[i10];
                        }
                        if (z10) {
                            hVar.f(this.f27216b);
                        }
                        if (this.f27225k) {
                            this.f27224j = i10;
                        }
                        hVar.f27286x--;
                        this.f27215a--;
                        return;
                    }
                    return;
                }
                if (i14 < i15) {
                    i12 = i10;
                }
                i10 = this.f27221g[i10];
            }
            int i16 = this.f27224j;
            int i17 = i16 + 1;
            if (this.f27225k) {
                int[] iArr3 = this.f27220f;
                if (iArr3[i16] != -1) {
                    i16 = iArr3.length;
                }
            } else {
                i16 = i17;
            }
            int[] iArr4 = this.f27220f;
            if (i16 >= iArr4.length && this.f27215a < iArr4.length) {
                int i18 = 0;
                while (true) {
                    int[] iArr5 = this.f27220f;
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
            int[] iArr6 = this.f27220f;
            if (i16 >= iArr6.length) {
                i16 = iArr6.length;
                int i19 = this.f27218d * 2;
                this.f27218d = i19;
                this.f27225k = false;
                this.f27224j = i16 - 1;
                this.f27222h = Arrays.copyOf(this.f27222h, i19);
                this.f27220f = Arrays.copyOf(this.f27220f, this.f27218d);
                this.f27221g = Arrays.copyOf(this.f27221g, this.f27218d);
            }
            this.f27220f[i16] = hVar.f27276i;
            this.f27222h[i16] = f10;
            if (i12 != -1) {
                int[] iArr7 = this.f27221g;
                iArr7[i16] = iArr7[i12];
                iArr7[i12] = i16;
            } else {
                this.f27221g[i16] = this.f27223i;
                this.f27223i = i16;
            }
            hVar.f27286x++;
            hVar.a(this.f27216b);
            this.f27215a++;
            if (!this.f27225k) {
                this.f27224j++;
            }
            int i20 = this.f27224j;
            int[] iArr8 = this.f27220f;
            if (i20 >= iArr8.length) {
                this.f27225k = true;
                this.f27224j = iArr8.length - 1;
            }
        }
    }

    @Override // h1.b.a
    public h c(int i10) {
        int i11 = this.f27223i;
        for (int i12 = 0; i11 != -1 && i12 < this.f27215a; i12++) {
            if (i12 == i10) {
                return this.f27217c.f27235d[this.f27220f[i11]];
            }
            i11 = this.f27221g[i11];
        }
        return null;
    }

    @Override // h1.b.a
    public final void clear() {
        int i10 = this.f27223i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27215a; i11++) {
            h hVar = this.f27217c.f27235d[this.f27220f[i10]];
            if (hVar != null) {
                hVar.f(this.f27216b);
            }
            i10 = this.f27221g[i10];
        }
        this.f27223i = -1;
        this.f27224j = -1;
        this.f27225k = false;
        this.f27215a = 0;
    }

    @Override // h1.b.a
    public void d() {
        int i10 = this.f27223i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27215a; i11++) {
            float[] fArr = this.f27222h;
            fArr[i10] = fArr[i10] * (-1.0f);
            i10 = this.f27221g[i10];
        }
    }

    @Override // h1.b.a
    public float e(b bVar, boolean z10) {
        float i10 = i(bVar.f27226a);
        f(bVar.f27226a, z10);
        b.a aVar = bVar.f27230e;
        int h10 = aVar.h();
        for (int i11 = 0; i11 < h10; i11++) {
            h c10 = aVar.c(i11);
            b(c10, aVar.i(c10) * i10, z10);
        }
        return i10;
    }

    @Override // h1.b.a
    public final float f(h hVar, boolean z10) {
        if (this.f27219e == hVar) {
            this.f27219e = null;
        }
        int i10 = this.f27223i;
        if (i10 == -1) {
            return 0.0f;
        }
        int i11 = 0;
        int i12 = -1;
        while (i10 != -1 && i11 < this.f27215a) {
            if (this.f27220f[i10] == hVar.f27276i) {
                if (i10 == this.f27223i) {
                    this.f27223i = this.f27221g[i10];
                } else {
                    int[] iArr = this.f27221g;
                    iArr[i12] = iArr[i10];
                }
                if (z10) {
                    hVar.f(this.f27216b);
                }
                hVar.f27286x--;
                this.f27215a--;
                this.f27220f[i10] = -1;
                if (this.f27225k) {
                    this.f27224j = i10;
                }
                return this.f27222h[i10];
            }
            i11++;
            i12 = i10;
            i10 = this.f27221g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public boolean g(h hVar) {
        int i10 = this.f27223i;
        if (i10 == -1) {
            return false;
        }
        for (int i11 = 0; i10 != -1 && i11 < this.f27215a; i11++) {
            if (this.f27220f[i10] == hVar.f27276i) {
                return true;
            }
            i10 = this.f27221g[i10];
        }
        return false;
    }

    @Override // h1.b.a
    public int h() {
        return this.f27215a;
    }

    @Override // h1.b.a
    public final float i(h hVar) {
        int i10 = this.f27223i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27215a; i11++) {
            if (this.f27220f[i10] == hVar.f27276i) {
                return this.f27222h[i10];
            }
            i10 = this.f27221g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public float j(int i10) {
        int i11 = this.f27223i;
        for (int i12 = 0; i11 != -1 && i12 < this.f27215a; i12++) {
            if (i12 == i10) {
                return this.f27222h[i11];
            }
            i11 = this.f27221g[i11];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public void k(float f10) {
        int i10 = this.f27223i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27215a; i11++) {
            float[] fArr = this.f27222h;
            fArr[i10] = fArr[i10] / f10;
            i10 = this.f27221g[i10];
        }
    }

    public String toString() {
        int i10 = this.f27223i;
        String str = "";
        for (int i11 = 0; i10 != -1 && i11 < this.f27215a; i11++) {
            str = ((str + " -> ") + this.f27222h[i10] + " : ") + this.f27217c.f27235d[this.f27220f[i10]];
            i10 = this.f27221g[i10];
        }
        return str;
    }
}
