package h1;

import h1.b;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements b.a {

    /* renamed from: l  reason: collision with root package name */
    private static float f25657l = 0.001f;

    /* renamed from: b  reason: collision with root package name */
    private final b f25659b;

    /* renamed from: c  reason: collision with root package name */
    protected final c f25660c;

    /* renamed from: a  reason: collision with root package name */
    int f25658a = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f25661d = 8;

    /* renamed from: e  reason: collision with root package name */
    private h f25662e = null;

    /* renamed from: f  reason: collision with root package name */
    private int[] f25663f = new int[8];

    /* renamed from: g  reason: collision with root package name */
    private int[] f25664g = new int[8];

    /* renamed from: h  reason: collision with root package name */
    private float[] f25665h = new float[8];

    /* renamed from: i  reason: collision with root package name */
    private int f25666i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f25667j = -1;

    /* renamed from: k  reason: collision with root package name */
    private boolean f25668k = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(b bVar, c cVar) {
        this.f25659b = bVar;
        this.f25660c = cVar;
    }

    @Override // h1.b.a
    public final void a(h hVar, float f10) {
        if (f10 == 0.0f) {
            f(hVar, true);
            return;
        }
        int i10 = this.f25666i;
        if (i10 == -1) {
            this.f25666i = 0;
            this.f25665h[0] = f10;
            this.f25663f[0] = hVar.f25719i;
            this.f25664g[0] = -1;
            hVar.f25729x++;
            hVar.a(this.f25659b);
            this.f25658a++;
            if (!this.f25668k) {
                int i11 = this.f25667j + 1;
                this.f25667j = i11;
                int[] iArr = this.f25663f;
                if (i11 >= iArr.length) {
                    this.f25668k = true;
                    this.f25667j = iArr.length - 1;
                    return;
                }
                return;
            }
            return;
        }
        int i12 = -1;
        for (int i13 = 0; i10 != -1 && i13 < this.f25658a; i13++) {
            int i14 = this.f25663f[i10];
            int i15 = hVar.f25719i;
            if (i14 == i15) {
                this.f25665h[i10] = f10;
                return;
            }
            if (i14 < i15) {
                i12 = i10;
            }
            i10 = this.f25664g[i10];
        }
        int i16 = this.f25667j;
        int i17 = i16 + 1;
        if (this.f25668k) {
            int[] iArr2 = this.f25663f;
            if (iArr2[i16] != -1) {
                i16 = iArr2.length;
            }
        } else {
            i16 = i17;
        }
        int[] iArr3 = this.f25663f;
        if (i16 >= iArr3.length && this.f25658a < iArr3.length) {
            int i18 = 0;
            while (true) {
                int[] iArr4 = this.f25663f;
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
        int[] iArr5 = this.f25663f;
        if (i16 >= iArr5.length) {
            i16 = iArr5.length;
            int i19 = this.f25661d * 2;
            this.f25661d = i19;
            this.f25668k = false;
            this.f25667j = i16 - 1;
            this.f25665h = Arrays.copyOf(this.f25665h, i19);
            this.f25663f = Arrays.copyOf(this.f25663f, this.f25661d);
            this.f25664g = Arrays.copyOf(this.f25664g, this.f25661d);
        }
        this.f25663f[i16] = hVar.f25719i;
        this.f25665h[i16] = f10;
        if (i12 != -1) {
            int[] iArr6 = this.f25664g;
            iArr6[i16] = iArr6[i12];
            iArr6[i12] = i16;
        } else {
            this.f25664g[i16] = this.f25666i;
            this.f25666i = i16;
        }
        hVar.f25729x++;
        hVar.a(this.f25659b);
        int i20 = this.f25658a + 1;
        this.f25658a = i20;
        if (!this.f25668k) {
            this.f25667j++;
        }
        int[] iArr7 = this.f25663f;
        if (i20 >= iArr7.length) {
            this.f25668k = true;
        }
        if (this.f25667j >= iArr7.length) {
            this.f25668k = true;
            this.f25667j = iArr7.length - 1;
        }
    }

    @Override // h1.b.a
    public void b(h hVar, float f10, boolean z10) {
        float f11 = f25657l;
        if (f10 <= (-f11) || f10 >= f11) {
            int i10 = this.f25666i;
            if (i10 == -1) {
                this.f25666i = 0;
                this.f25665h[0] = f10;
                this.f25663f[0] = hVar.f25719i;
                this.f25664g[0] = -1;
                hVar.f25729x++;
                hVar.a(this.f25659b);
                this.f25658a++;
                if (!this.f25668k) {
                    int i11 = this.f25667j + 1;
                    this.f25667j = i11;
                    int[] iArr = this.f25663f;
                    if (i11 >= iArr.length) {
                        this.f25668k = true;
                        this.f25667j = iArr.length - 1;
                        return;
                    }
                    return;
                }
                return;
            }
            int i12 = -1;
            for (int i13 = 0; i10 != -1 && i13 < this.f25658a; i13++) {
                int i14 = this.f25663f[i10];
                int i15 = hVar.f25719i;
                if (i14 == i15) {
                    float[] fArr = this.f25665h;
                    float f12 = fArr[i10] + f10;
                    float f13 = f25657l;
                    if (f12 > (-f13) && f12 < f13) {
                        f12 = 0.0f;
                    }
                    fArr[i10] = f12;
                    if (f12 == 0.0f) {
                        if (i10 == this.f25666i) {
                            this.f25666i = this.f25664g[i10];
                        } else {
                            int[] iArr2 = this.f25664g;
                            iArr2[i12] = iArr2[i10];
                        }
                        if (z10) {
                            hVar.f(this.f25659b);
                        }
                        if (this.f25668k) {
                            this.f25667j = i10;
                        }
                        hVar.f25729x--;
                        this.f25658a--;
                        return;
                    }
                    return;
                }
                if (i14 < i15) {
                    i12 = i10;
                }
                i10 = this.f25664g[i10];
            }
            int i16 = this.f25667j;
            int i17 = i16 + 1;
            if (this.f25668k) {
                int[] iArr3 = this.f25663f;
                if (iArr3[i16] != -1) {
                    i16 = iArr3.length;
                }
            } else {
                i16 = i17;
            }
            int[] iArr4 = this.f25663f;
            if (i16 >= iArr4.length && this.f25658a < iArr4.length) {
                int i18 = 0;
                while (true) {
                    int[] iArr5 = this.f25663f;
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
            int[] iArr6 = this.f25663f;
            if (i16 >= iArr6.length) {
                i16 = iArr6.length;
                int i19 = this.f25661d * 2;
                this.f25661d = i19;
                this.f25668k = false;
                this.f25667j = i16 - 1;
                this.f25665h = Arrays.copyOf(this.f25665h, i19);
                this.f25663f = Arrays.copyOf(this.f25663f, this.f25661d);
                this.f25664g = Arrays.copyOf(this.f25664g, this.f25661d);
            }
            this.f25663f[i16] = hVar.f25719i;
            this.f25665h[i16] = f10;
            if (i12 != -1) {
                int[] iArr7 = this.f25664g;
                iArr7[i16] = iArr7[i12];
                iArr7[i12] = i16;
            } else {
                this.f25664g[i16] = this.f25666i;
                this.f25666i = i16;
            }
            hVar.f25729x++;
            hVar.a(this.f25659b);
            this.f25658a++;
            if (!this.f25668k) {
                this.f25667j++;
            }
            int i20 = this.f25667j;
            int[] iArr8 = this.f25663f;
            if (i20 >= iArr8.length) {
                this.f25668k = true;
                this.f25667j = iArr8.length - 1;
            }
        }
    }

    @Override // h1.b.a
    public h c(int i10) {
        int i11 = this.f25666i;
        for (int i12 = 0; i11 != -1 && i12 < this.f25658a; i12++) {
            if (i12 == i10) {
                return this.f25660c.f25678d[this.f25663f[i11]];
            }
            i11 = this.f25664g[i11];
        }
        return null;
    }

    @Override // h1.b.a
    public final void clear() {
        int i10 = this.f25666i;
        for (int i11 = 0; i10 != -1 && i11 < this.f25658a; i11++) {
            h hVar = this.f25660c.f25678d[this.f25663f[i10]];
            if (hVar != null) {
                hVar.f(this.f25659b);
            }
            i10 = this.f25664g[i10];
        }
        this.f25666i = -1;
        this.f25667j = -1;
        this.f25668k = false;
        this.f25658a = 0;
    }

    @Override // h1.b.a
    public void d() {
        int i10 = this.f25666i;
        for (int i11 = 0; i10 != -1 && i11 < this.f25658a; i11++) {
            float[] fArr = this.f25665h;
            fArr[i10] = fArr[i10] * (-1.0f);
            i10 = this.f25664g[i10];
        }
    }

    @Override // h1.b.a
    public float e(b bVar, boolean z10) {
        float i10 = i(bVar.f25669a);
        f(bVar.f25669a, z10);
        b.a aVar = bVar.f25673e;
        int h10 = aVar.h();
        for (int i11 = 0; i11 < h10; i11++) {
            h c10 = aVar.c(i11);
            b(c10, aVar.i(c10) * i10, z10);
        }
        return i10;
    }

    @Override // h1.b.a
    public final float f(h hVar, boolean z10) {
        if (this.f25662e == hVar) {
            this.f25662e = null;
        }
        int i10 = this.f25666i;
        if (i10 == -1) {
            return 0.0f;
        }
        int i11 = 0;
        int i12 = -1;
        while (i10 != -1 && i11 < this.f25658a) {
            if (this.f25663f[i10] == hVar.f25719i) {
                if (i10 == this.f25666i) {
                    this.f25666i = this.f25664g[i10];
                } else {
                    int[] iArr = this.f25664g;
                    iArr[i12] = iArr[i10];
                }
                if (z10) {
                    hVar.f(this.f25659b);
                }
                hVar.f25729x--;
                this.f25658a--;
                this.f25663f[i10] = -1;
                if (this.f25668k) {
                    this.f25667j = i10;
                }
                return this.f25665h[i10];
            }
            i11++;
            i12 = i10;
            i10 = this.f25664g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public boolean g(h hVar) {
        int i10 = this.f25666i;
        if (i10 == -1) {
            return false;
        }
        for (int i11 = 0; i10 != -1 && i11 < this.f25658a; i11++) {
            if (this.f25663f[i10] == hVar.f25719i) {
                return true;
            }
            i10 = this.f25664g[i10];
        }
        return false;
    }

    @Override // h1.b.a
    public int h() {
        return this.f25658a;
    }

    @Override // h1.b.a
    public final float i(h hVar) {
        int i10 = this.f25666i;
        for (int i11 = 0; i10 != -1 && i11 < this.f25658a; i11++) {
            if (this.f25663f[i10] == hVar.f25719i) {
                return this.f25665h[i10];
            }
            i10 = this.f25664g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public float j(int i10) {
        int i11 = this.f25666i;
        for (int i12 = 0; i11 != -1 && i12 < this.f25658a; i12++) {
            if (i12 == i10) {
                return this.f25665h[i11];
            }
            i11 = this.f25664g[i11];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public void k(float f10) {
        int i10 = this.f25666i;
        for (int i11 = 0; i10 != -1 && i11 < this.f25658a; i11++) {
            float[] fArr = this.f25665h;
            fArr[i10] = fArr[i10] / f10;
            i10 = this.f25664g[i10];
        }
    }

    public String toString() {
        int i10 = this.f25666i;
        String str = "";
        for (int i11 = 0; i10 != -1 && i11 < this.f25658a; i11++) {
            str = ((str + " -> ") + this.f25665h[i10] + " : ") + this.f25660c.f25678d[this.f25663f[i10]];
            i10 = this.f25664g[i10];
        }
        return str;
    }
}
