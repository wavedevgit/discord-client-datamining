package h1;

import com.facebook.react.uimanager.ViewProps;
import h1.b;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements b.a {

    /* renamed from: n  reason: collision with root package name */
    private static float f27311n = 0.001f;

    /* renamed from: a  reason: collision with root package name */
    private final int f27312a = -1;

    /* renamed from: b  reason: collision with root package name */
    private int f27313b = 16;

    /* renamed from: c  reason: collision with root package name */
    private int f27314c = 16;

    /* renamed from: d  reason: collision with root package name */
    int[] f27315d = new int[16];

    /* renamed from: e  reason: collision with root package name */
    int[] f27316e = new int[16];

    /* renamed from: f  reason: collision with root package name */
    int[] f27317f = new int[16];

    /* renamed from: g  reason: collision with root package name */
    float[] f27318g = new float[16];

    /* renamed from: h  reason: collision with root package name */
    int[] f27319h = new int[16];

    /* renamed from: i  reason: collision with root package name */
    int[] f27320i = new int[16];

    /* renamed from: j  reason: collision with root package name */
    int f27321j = 0;

    /* renamed from: k  reason: collision with root package name */
    int f27322k = -1;

    /* renamed from: l  reason: collision with root package name */
    private final b f27323l;

    /* renamed from: m  reason: collision with root package name */
    protected final c f27324m;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(b bVar, c cVar) {
        this.f27323l = bVar;
        this.f27324m = cVar;
        clear();
    }

    private void l(h hVar, int i10) {
        int[] iArr;
        int i11 = hVar.f27292i % this.f27314c;
        int[] iArr2 = this.f27315d;
        int i12 = iArr2[i11];
        if (i12 == -1) {
            iArr2[i11] = i10;
        } else {
            while (true) {
                iArr = this.f27316e;
                int i13 = iArr[i12];
                if (i13 == -1) {
                    break;
                }
                i12 = i13;
            }
            iArr[i12] = i10;
        }
        this.f27316e[i10] = -1;
    }

    private void m(int i10, h hVar, float f10) {
        this.f27317f[i10] = hVar.f27292i;
        this.f27318g[i10] = f10;
        this.f27319h[i10] = -1;
        this.f27320i[i10] = -1;
        hVar.a(this.f27323l);
        hVar.f27302x++;
        this.f27321j++;
    }

    private int n() {
        for (int i10 = 0; i10 < this.f27313b; i10++) {
            if (this.f27317f[i10] == -1) {
                return i10;
            }
        }
        return -1;
    }

    private void o() {
        int i10 = this.f27313b * 2;
        this.f27317f = Arrays.copyOf(this.f27317f, i10);
        this.f27318g = Arrays.copyOf(this.f27318g, i10);
        this.f27319h = Arrays.copyOf(this.f27319h, i10);
        this.f27320i = Arrays.copyOf(this.f27320i, i10);
        this.f27316e = Arrays.copyOf(this.f27316e, i10);
        for (int i11 = this.f27313b; i11 < i10; i11++) {
            this.f27317f[i11] = -1;
            this.f27316e[i11] = -1;
        }
        this.f27313b = i10;
    }

    private void q(int i10, h hVar, float f10) {
        int n10 = n();
        m(n10, hVar, f10);
        if (i10 != -1) {
            this.f27319h[n10] = i10;
            int[] iArr = this.f27320i;
            iArr[n10] = iArr[i10];
            iArr[i10] = n10;
        } else {
            this.f27319h[n10] = -1;
            if (this.f27321j > 0) {
                this.f27320i[n10] = this.f27322k;
                this.f27322k = n10;
            } else {
                this.f27320i[n10] = -1;
            }
        }
        int i11 = this.f27320i[n10];
        if (i11 != -1) {
            this.f27319h[i11] = n10;
        }
        l(hVar, n10);
    }

    private void r(h hVar) {
        int[] iArr;
        int i10;
        int i11 = hVar.f27292i;
        int i12 = i11 % this.f27314c;
        int[] iArr2 = this.f27315d;
        int i13 = iArr2[i12];
        if (i13 != -1) {
            if (this.f27317f[i13] == i11) {
                int[] iArr3 = this.f27316e;
                iArr2[i12] = iArr3[i13];
                iArr3[i13] = -1;
                return;
            }
            while (true) {
                iArr = this.f27316e;
                i10 = iArr[i13];
                if (i10 == -1 || this.f27317f[i10] == i11) {
                    break;
                }
                i13 = i10;
            }
            if (i10 != -1 && this.f27317f[i10] == i11) {
                iArr[i13] = iArr[i10];
                iArr[i10] = -1;
            }
        }
    }

    @Override // h1.b.a
    public void a(h hVar, float f10) {
        float f11 = f27311n;
        if (f10 > (-f11) && f10 < f11) {
            f(hVar, true);
            return;
        }
        if (this.f27321j == 0) {
            m(0, hVar, f10);
            l(hVar, 0);
            this.f27322k = 0;
            return;
        }
        int p10 = p(hVar);
        if (p10 != -1) {
            this.f27318g[p10] = f10;
            return;
        }
        if (this.f27321j + 1 >= this.f27313b) {
            o();
        }
        int i10 = this.f27321j;
        int i11 = this.f27322k;
        int i12 = -1;
        for (int i13 = 0; i13 < i10; i13++) {
            int i14 = this.f27317f[i11];
            int i15 = hVar.f27292i;
            if (i14 == i15) {
                this.f27318g[i11] = f10;
                return;
            }
            if (i14 < i15) {
                i12 = i11;
            }
            i11 = this.f27320i[i11];
            if (i11 == -1) {
                break;
            }
        }
        q(i12, hVar, f10);
    }

    @Override // h1.b.a
    public void b(h hVar, float f10, boolean z10) {
        float f11 = f27311n;
        if (f10 <= (-f11) || f10 >= f11) {
            int p10 = p(hVar);
            if (p10 == -1) {
                a(hVar, f10);
                return;
            }
            float[] fArr = this.f27318g;
            float f12 = fArr[p10] + f10;
            fArr[p10] = f12;
            float f13 = f27311n;
            if (f12 > (-f13) && f12 < f13) {
                fArr[p10] = 0.0f;
                f(hVar, z10);
            }
        }
    }

    @Override // h1.b.a
    public h c(int i10) {
        int i11 = this.f27321j;
        if (i11 == 0) {
            return null;
        }
        int i12 = this.f27322k;
        for (int i13 = 0; i13 < i11; i13++) {
            if (i13 == i10 && i12 != -1) {
                return this.f27324m.f27251d[this.f27317f[i12]];
            }
            i12 = this.f27320i[i12];
            if (i12 == -1) {
                break;
            }
        }
        return null;
    }

    @Override // h1.b.a
    public void clear() {
        int i10 = this.f27321j;
        for (int i11 = 0; i11 < i10; i11++) {
            h c10 = c(i11);
            if (c10 != null) {
                c10.f(this.f27323l);
            }
        }
        for (int i12 = 0; i12 < this.f27313b; i12++) {
            this.f27317f[i12] = -1;
            this.f27316e[i12] = -1;
        }
        for (int i13 = 0; i13 < this.f27314c; i13++) {
            this.f27315d[i13] = -1;
        }
        this.f27321j = 0;
        this.f27322k = -1;
    }

    @Override // h1.b.a
    public void d() {
        int i10 = this.f27321j;
        int i11 = this.f27322k;
        for (int i12 = 0; i12 < i10; i12++) {
            float[] fArr = this.f27318g;
            fArr[i11] = fArr[i11] * (-1.0f);
            i11 = this.f27320i[i11];
            if (i11 == -1) {
                return;
            }
        }
    }

    @Override // h1.b.a
    public float e(b bVar, boolean z10) {
        float i10 = i(bVar.f27242a);
        f(bVar.f27242a, z10);
        i iVar = (i) bVar.f27246e;
        int h10 = iVar.h();
        int i11 = 0;
        int i12 = 0;
        while (i11 < h10) {
            int i13 = iVar.f27317f[i12];
            if (i13 != -1) {
                b(this.f27324m.f27251d[i13], iVar.f27318g[i12] * i10, z10);
                i11++;
            }
            i12++;
        }
        return i10;
    }

    @Override // h1.b.a
    public float f(h hVar, boolean z10) {
        int p10 = p(hVar);
        if (p10 == -1) {
            return 0.0f;
        }
        r(hVar);
        float f10 = this.f27318g[p10];
        if (this.f27322k == p10) {
            this.f27322k = this.f27320i[p10];
        }
        this.f27317f[p10] = -1;
        int[] iArr = this.f27319h;
        int i10 = iArr[p10];
        if (i10 != -1) {
            int[] iArr2 = this.f27320i;
            iArr2[i10] = iArr2[p10];
        }
        int i11 = this.f27320i[p10];
        if (i11 != -1) {
            iArr[i11] = iArr[p10];
        }
        this.f27321j--;
        hVar.f27302x--;
        if (z10) {
            hVar.f(this.f27323l);
        }
        return f10;
    }

    @Override // h1.b.a
    public boolean g(h hVar) {
        if (p(hVar) != -1) {
            return true;
        }
        return false;
    }

    @Override // h1.b.a
    public int h() {
        return this.f27321j;
    }

    @Override // h1.b.a
    public float i(h hVar) {
        int p10 = p(hVar);
        if (p10 != -1) {
            return this.f27318g[p10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public float j(int i10) {
        int i11 = this.f27321j;
        int i12 = this.f27322k;
        for (int i13 = 0; i13 < i11; i13++) {
            if (i13 == i10) {
                return this.f27318g[i12];
            }
            i12 = this.f27320i[i12];
            if (i12 == -1) {
                return 0.0f;
            }
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public void k(float f10) {
        int i10 = this.f27321j;
        int i11 = this.f27322k;
        for (int i12 = 0; i12 < i10; i12++) {
            float[] fArr = this.f27318g;
            fArr[i11] = fArr[i11] / f10;
            i11 = this.f27320i[i11];
            if (i11 == -1) {
                return;
            }
        }
    }

    public int p(h hVar) {
        if (this.f27321j != 0 && hVar != null) {
            int i10 = hVar.f27292i;
            int i11 = this.f27315d[i10 % this.f27314c];
            if (i11 == -1) {
                return -1;
            }
            if (this.f27317f[i11] == i10) {
                return i11;
            }
            do {
                i11 = this.f27316e[i11];
                if (i11 == -1) {
                    break;
                }
            } while (this.f27317f[i11] != i10);
            if (i11 != -1 && this.f27317f[i11] == i10) {
                return i11;
            }
        }
        return -1;
    }

    public String toString() {
        String str;
        String str2;
        String str3 = hashCode() + " { ";
        int i10 = this.f27321j;
        for (int i11 = 0; i11 < i10; i11++) {
            h c10 = c(i11);
            if (c10 != null) {
                String str4 = str3 + c10 + " = " + j(i11) + " ";
                int p10 = p(c10);
                String str5 = str4 + "[p: ";
                if (this.f27319h[p10] != -1) {
                    str = str5 + this.f27324m.f27251d[this.f27317f[this.f27319h[p10]]];
                } else {
                    str = str5 + ViewProps.NONE;
                }
                String str6 = str + ", n: ";
                if (this.f27320i[p10] != -1) {
                    str2 = str6 + this.f27324m.f27251d[this.f27317f[this.f27320i[p10]]];
                } else {
                    str2 = str6 + ViewProps.NONE;
                }
                str3 = str2 + "]";
            }
        }
        return str3 + " }";
    }
}
