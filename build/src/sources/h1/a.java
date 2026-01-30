package h1;

import h1.b;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements b.a {

    /* renamed from: l  reason: collision with root package name */
    private static float f27230l = 0.001f;

    /* renamed from: b  reason: collision with root package name */
    private final b f27232b;

    /* renamed from: c  reason: collision with root package name */
    protected final c f27233c;

    /* renamed from: a  reason: collision with root package name */
    int f27231a = 0;

    /* renamed from: d  reason: collision with root package name */
    private int f27234d = 8;

    /* renamed from: e  reason: collision with root package name */
    private h f27235e = null;

    /* renamed from: f  reason: collision with root package name */
    private int[] f27236f = new int[8];

    /* renamed from: g  reason: collision with root package name */
    private int[] f27237g = new int[8];

    /* renamed from: h  reason: collision with root package name */
    private float[] f27238h = new float[8];

    /* renamed from: i  reason: collision with root package name */
    private int f27239i = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f27240j = -1;

    /* renamed from: k  reason: collision with root package name */
    private boolean f27241k = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(b bVar, c cVar) {
        this.f27232b = bVar;
        this.f27233c = cVar;
    }

    @Override // h1.b.a
    public final void a(h hVar, float f10) {
        if (f10 == 0.0f) {
            f(hVar, true);
            return;
        }
        int i10 = this.f27239i;
        if (i10 == -1) {
            this.f27239i = 0;
            this.f27238h[0] = f10;
            this.f27236f[0] = hVar.f27292i;
            this.f27237g[0] = -1;
            hVar.f27302x++;
            hVar.a(this.f27232b);
            this.f27231a++;
            if (!this.f27241k) {
                int i11 = this.f27240j + 1;
                this.f27240j = i11;
                int[] iArr = this.f27236f;
                if (i11 >= iArr.length) {
                    this.f27241k = true;
                    this.f27240j = iArr.length - 1;
                    return;
                }
                return;
            }
            return;
        }
        int i12 = -1;
        for (int i13 = 0; i10 != -1 && i13 < this.f27231a; i13++) {
            int i14 = this.f27236f[i10];
            int i15 = hVar.f27292i;
            if (i14 == i15) {
                this.f27238h[i10] = f10;
                return;
            }
            if (i14 < i15) {
                i12 = i10;
            }
            i10 = this.f27237g[i10];
        }
        int i16 = this.f27240j;
        int i17 = i16 + 1;
        if (this.f27241k) {
            int[] iArr2 = this.f27236f;
            if (iArr2[i16] != -1) {
                i16 = iArr2.length;
            }
        } else {
            i16 = i17;
        }
        int[] iArr3 = this.f27236f;
        if (i16 >= iArr3.length && this.f27231a < iArr3.length) {
            int i18 = 0;
            while (true) {
                int[] iArr4 = this.f27236f;
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
        int[] iArr5 = this.f27236f;
        if (i16 >= iArr5.length) {
            i16 = iArr5.length;
            int i19 = this.f27234d * 2;
            this.f27234d = i19;
            this.f27241k = false;
            this.f27240j = i16 - 1;
            this.f27238h = Arrays.copyOf(this.f27238h, i19);
            this.f27236f = Arrays.copyOf(this.f27236f, this.f27234d);
            this.f27237g = Arrays.copyOf(this.f27237g, this.f27234d);
        }
        this.f27236f[i16] = hVar.f27292i;
        this.f27238h[i16] = f10;
        if (i12 != -1) {
            int[] iArr6 = this.f27237g;
            iArr6[i16] = iArr6[i12];
            iArr6[i12] = i16;
        } else {
            this.f27237g[i16] = this.f27239i;
            this.f27239i = i16;
        }
        hVar.f27302x++;
        hVar.a(this.f27232b);
        int i20 = this.f27231a + 1;
        this.f27231a = i20;
        if (!this.f27241k) {
            this.f27240j++;
        }
        int[] iArr7 = this.f27236f;
        if (i20 >= iArr7.length) {
            this.f27241k = true;
        }
        if (this.f27240j >= iArr7.length) {
            this.f27241k = true;
            this.f27240j = iArr7.length - 1;
        }
    }

    @Override // h1.b.a
    public void b(h hVar, float f10, boolean z10) {
        float f11 = f27230l;
        if (f10 <= (-f11) || f10 >= f11) {
            int i10 = this.f27239i;
            if (i10 == -1) {
                this.f27239i = 0;
                this.f27238h[0] = f10;
                this.f27236f[0] = hVar.f27292i;
                this.f27237g[0] = -1;
                hVar.f27302x++;
                hVar.a(this.f27232b);
                this.f27231a++;
                if (!this.f27241k) {
                    int i11 = this.f27240j + 1;
                    this.f27240j = i11;
                    int[] iArr = this.f27236f;
                    if (i11 >= iArr.length) {
                        this.f27241k = true;
                        this.f27240j = iArr.length - 1;
                        return;
                    }
                    return;
                }
                return;
            }
            int i12 = -1;
            for (int i13 = 0; i10 != -1 && i13 < this.f27231a; i13++) {
                int i14 = this.f27236f[i10];
                int i15 = hVar.f27292i;
                if (i14 == i15) {
                    float[] fArr = this.f27238h;
                    float f12 = fArr[i10] + f10;
                    float f13 = f27230l;
                    if (f12 > (-f13) && f12 < f13) {
                        f12 = 0.0f;
                    }
                    fArr[i10] = f12;
                    if (f12 == 0.0f) {
                        if (i10 == this.f27239i) {
                            this.f27239i = this.f27237g[i10];
                        } else {
                            int[] iArr2 = this.f27237g;
                            iArr2[i12] = iArr2[i10];
                        }
                        if (z10) {
                            hVar.f(this.f27232b);
                        }
                        if (this.f27241k) {
                            this.f27240j = i10;
                        }
                        hVar.f27302x--;
                        this.f27231a--;
                        return;
                    }
                    return;
                }
                if (i14 < i15) {
                    i12 = i10;
                }
                i10 = this.f27237g[i10];
            }
            int i16 = this.f27240j;
            int i17 = i16 + 1;
            if (this.f27241k) {
                int[] iArr3 = this.f27236f;
                if (iArr3[i16] != -1) {
                    i16 = iArr3.length;
                }
            } else {
                i16 = i17;
            }
            int[] iArr4 = this.f27236f;
            if (i16 >= iArr4.length && this.f27231a < iArr4.length) {
                int i18 = 0;
                while (true) {
                    int[] iArr5 = this.f27236f;
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
            int[] iArr6 = this.f27236f;
            if (i16 >= iArr6.length) {
                i16 = iArr6.length;
                int i19 = this.f27234d * 2;
                this.f27234d = i19;
                this.f27241k = false;
                this.f27240j = i16 - 1;
                this.f27238h = Arrays.copyOf(this.f27238h, i19);
                this.f27236f = Arrays.copyOf(this.f27236f, this.f27234d);
                this.f27237g = Arrays.copyOf(this.f27237g, this.f27234d);
            }
            this.f27236f[i16] = hVar.f27292i;
            this.f27238h[i16] = f10;
            if (i12 != -1) {
                int[] iArr7 = this.f27237g;
                iArr7[i16] = iArr7[i12];
                iArr7[i12] = i16;
            } else {
                this.f27237g[i16] = this.f27239i;
                this.f27239i = i16;
            }
            hVar.f27302x++;
            hVar.a(this.f27232b);
            this.f27231a++;
            if (!this.f27241k) {
                this.f27240j++;
            }
            int i20 = this.f27240j;
            int[] iArr8 = this.f27236f;
            if (i20 >= iArr8.length) {
                this.f27241k = true;
                this.f27240j = iArr8.length - 1;
            }
        }
    }

    @Override // h1.b.a
    public h c(int i10) {
        int i11 = this.f27239i;
        for (int i12 = 0; i11 != -1 && i12 < this.f27231a; i12++) {
            if (i12 == i10) {
                return this.f27233c.f27251d[this.f27236f[i11]];
            }
            i11 = this.f27237g[i11];
        }
        return null;
    }

    @Override // h1.b.a
    public final void clear() {
        int i10 = this.f27239i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27231a; i11++) {
            h hVar = this.f27233c.f27251d[this.f27236f[i10]];
            if (hVar != null) {
                hVar.f(this.f27232b);
            }
            i10 = this.f27237g[i10];
        }
        this.f27239i = -1;
        this.f27240j = -1;
        this.f27241k = false;
        this.f27231a = 0;
    }

    @Override // h1.b.a
    public void d() {
        int i10 = this.f27239i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27231a; i11++) {
            float[] fArr = this.f27238h;
            fArr[i10] = fArr[i10] * (-1.0f);
            i10 = this.f27237g[i10];
        }
    }

    @Override // h1.b.a
    public float e(b bVar, boolean z10) {
        float i10 = i(bVar.f27242a);
        f(bVar.f27242a, z10);
        b.a aVar = bVar.f27246e;
        int h10 = aVar.h();
        for (int i11 = 0; i11 < h10; i11++) {
            h c10 = aVar.c(i11);
            b(c10, aVar.i(c10) * i10, z10);
        }
        return i10;
    }

    @Override // h1.b.a
    public final float f(h hVar, boolean z10) {
        if (this.f27235e == hVar) {
            this.f27235e = null;
        }
        int i10 = this.f27239i;
        if (i10 == -1) {
            return 0.0f;
        }
        int i11 = 0;
        int i12 = -1;
        while (i10 != -1 && i11 < this.f27231a) {
            if (this.f27236f[i10] == hVar.f27292i) {
                if (i10 == this.f27239i) {
                    this.f27239i = this.f27237g[i10];
                } else {
                    int[] iArr = this.f27237g;
                    iArr[i12] = iArr[i10];
                }
                if (z10) {
                    hVar.f(this.f27232b);
                }
                hVar.f27302x--;
                this.f27231a--;
                this.f27236f[i10] = -1;
                if (this.f27241k) {
                    this.f27240j = i10;
                }
                return this.f27238h[i10];
            }
            i11++;
            i12 = i10;
            i10 = this.f27237g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public boolean g(h hVar) {
        int i10 = this.f27239i;
        if (i10 == -1) {
            return false;
        }
        for (int i11 = 0; i10 != -1 && i11 < this.f27231a; i11++) {
            if (this.f27236f[i10] == hVar.f27292i) {
                return true;
            }
            i10 = this.f27237g[i10];
        }
        return false;
    }

    @Override // h1.b.a
    public int h() {
        return this.f27231a;
    }

    @Override // h1.b.a
    public final float i(h hVar) {
        int i10 = this.f27239i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27231a; i11++) {
            if (this.f27236f[i10] == hVar.f27292i) {
                return this.f27238h[i10];
            }
            i10 = this.f27237g[i10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public float j(int i10) {
        int i11 = this.f27239i;
        for (int i12 = 0; i11 != -1 && i12 < this.f27231a; i12++) {
            if (i12 == i10) {
                return this.f27238h[i11];
            }
            i11 = this.f27237g[i11];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public void k(float f10) {
        int i10 = this.f27239i;
        for (int i11 = 0; i10 != -1 && i11 < this.f27231a; i11++) {
            float[] fArr = this.f27238h;
            fArr[i10] = fArr[i10] / f10;
            i10 = this.f27237g[i10];
        }
    }

    public String toString() {
        int i10 = this.f27239i;
        String str = "";
        for (int i11 = 0; i10 != -1 && i11 < this.f27231a; i11++) {
            str = ((str + " -> ") + this.f27238h[i10] + " : ") + this.f27233c.f27251d[this.f27236f[i10]];
            i10 = this.f27237g[i10];
        }
        return str;
    }
}
