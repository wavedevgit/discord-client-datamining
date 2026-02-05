package h1;

import com.facebook.react.uimanager.ViewProps;
import h1.b;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i implements b.a {

    /* renamed from: n  reason: collision with root package name */
    private static float f25610n = 0.001f;

    /* renamed from: a  reason: collision with root package name */
    private final int f25611a = -1;

    /* renamed from: b  reason: collision with root package name */
    private int f25612b = 16;

    /* renamed from: c  reason: collision with root package name */
    private int f25613c = 16;

    /* renamed from: d  reason: collision with root package name */
    int[] f25614d = new int[16];

    /* renamed from: e  reason: collision with root package name */
    int[] f25615e = new int[16];

    /* renamed from: f  reason: collision with root package name */
    int[] f25616f = new int[16];

    /* renamed from: g  reason: collision with root package name */
    float[] f25617g = new float[16];

    /* renamed from: h  reason: collision with root package name */
    int[] f25618h = new int[16];

    /* renamed from: i  reason: collision with root package name */
    int[] f25619i = new int[16];

    /* renamed from: j  reason: collision with root package name */
    int f25620j = 0;

    /* renamed from: k  reason: collision with root package name */
    int f25621k = -1;

    /* renamed from: l  reason: collision with root package name */
    private final b f25622l;

    /* renamed from: m  reason: collision with root package name */
    protected final c f25623m;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(b bVar, c cVar) {
        this.f25622l = bVar;
        this.f25623m = cVar;
        clear();
    }

    private void l(h hVar, int i10) {
        int[] iArr;
        int i11 = hVar.f25591i % this.f25613c;
        int[] iArr2 = this.f25614d;
        int i12 = iArr2[i11];
        if (i12 == -1) {
            iArr2[i11] = i10;
        } else {
            while (true) {
                iArr = this.f25615e;
                int i13 = iArr[i12];
                if (i13 == -1) {
                    break;
                }
                i12 = i13;
            }
            iArr[i12] = i10;
        }
        this.f25615e[i10] = -1;
    }

    private void m(int i10, h hVar, float f10) {
        this.f25616f[i10] = hVar.f25591i;
        this.f25617g[i10] = f10;
        this.f25618h[i10] = -1;
        this.f25619i[i10] = -1;
        hVar.a(this.f25622l);
        hVar.f25601x++;
        this.f25620j++;
    }

    private int n() {
        for (int i10 = 0; i10 < this.f25612b; i10++) {
            if (this.f25616f[i10] == -1) {
                return i10;
            }
        }
        return -1;
    }

    private void o() {
        int i10 = this.f25612b * 2;
        this.f25616f = Arrays.copyOf(this.f25616f, i10);
        this.f25617g = Arrays.copyOf(this.f25617g, i10);
        this.f25618h = Arrays.copyOf(this.f25618h, i10);
        this.f25619i = Arrays.copyOf(this.f25619i, i10);
        this.f25615e = Arrays.copyOf(this.f25615e, i10);
        for (int i11 = this.f25612b; i11 < i10; i11++) {
            this.f25616f[i11] = -1;
            this.f25615e[i11] = -1;
        }
        this.f25612b = i10;
    }

    private void q(int i10, h hVar, float f10) {
        int n10 = n();
        m(n10, hVar, f10);
        if (i10 != -1) {
            this.f25618h[n10] = i10;
            int[] iArr = this.f25619i;
            iArr[n10] = iArr[i10];
            iArr[i10] = n10;
        } else {
            this.f25618h[n10] = -1;
            if (this.f25620j > 0) {
                this.f25619i[n10] = this.f25621k;
                this.f25621k = n10;
            } else {
                this.f25619i[n10] = -1;
            }
        }
        int i11 = this.f25619i[n10];
        if (i11 != -1) {
            this.f25618h[i11] = n10;
        }
        l(hVar, n10);
    }

    private void r(h hVar) {
        int[] iArr;
        int i10;
        int i11 = hVar.f25591i;
        int i12 = i11 % this.f25613c;
        int[] iArr2 = this.f25614d;
        int i13 = iArr2[i12];
        if (i13 != -1) {
            if (this.f25616f[i13] == i11) {
                int[] iArr3 = this.f25615e;
                iArr2[i12] = iArr3[i13];
                iArr3[i13] = -1;
                return;
            }
            while (true) {
                iArr = this.f25615e;
                i10 = iArr[i13];
                if (i10 == -1 || this.f25616f[i10] == i11) {
                    break;
                }
                i13 = i10;
            }
            if (i10 != -1 && this.f25616f[i10] == i11) {
                iArr[i13] = iArr[i10];
                iArr[i10] = -1;
            }
        }
    }

    @Override // h1.b.a
    public void a(h hVar, float f10) {
        float f11 = f25610n;
        if (f10 > (-f11) && f10 < f11) {
            f(hVar, true);
            return;
        }
        if (this.f25620j == 0) {
            m(0, hVar, f10);
            l(hVar, 0);
            this.f25621k = 0;
            return;
        }
        int p10 = p(hVar);
        if (p10 != -1) {
            this.f25617g[p10] = f10;
            return;
        }
        if (this.f25620j + 1 >= this.f25612b) {
            o();
        }
        int i10 = this.f25620j;
        int i11 = this.f25621k;
        int i12 = -1;
        for (int i13 = 0; i13 < i10; i13++) {
            int i14 = this.f25616f[i11];
            int i15 = hVar.f25591i;
            if (i14 == i15) {
                this.f25617g[i11] = f10;
                return;
            }
            if (i14 < i15) {
                i12 = i11;
            }
            i11 = this.f25619i[i11];
            if (i11 == -1) {
                break;
            }
        }
        q(i12, hVar, f10);
    }

    @Override // h1.b.a
    public void b(h hVar, float f10, boolean z10) {
        float f11 = f25610n;
        if (f10 <= (-f11) || f10 >= f11) {
            int p10 = p(hVar);
            if (p10 == -1) {
                a(hVar, f10);
                return;
            }
            float[] fArr = this.f25617g;
            float f12 = fArr[p10] + f10;
            fArr[p10] = f12;
            float f13 = f25610n;
            if (f12 > (-f13) && f12 < f13) {
                fArr[p10] = 0.0f;
                f(hVar, z10);
            }
        }
    }

    @Override // h1.b.a
    public h c(int i10) {
        int i11 = this.f25620j;
        if (i11 == 0) {
            return null;
        }
        int i12 = this.f25621k;
        for (int i13 = 0; i13 < i11; i13++) {
            if (i13 == i10 && i12 != -1) {
                return this.f25623m.f25550d[this.f25616f[i12]];
            }
            i12 = this.f25619i[i12];
            if (i12 == -1) {
                break;
            }
        }
        return null;
    }

    @Override // h1.b.a
    public void clear() {
        int i10 = this.f25620j;
        for (int i11 = 0; i11 < i10; i11++) {
            h c10 = c(i11);
            if (c10 != null) {
                c10.f(this.f25622l);
            }
        }
        for (int i12 = 0; i12 < this.f25612b; i12++) {
            this.f25616f[i12] = -1;
            this.f25615e[i12] = -1;
        }
        for (int i13 = 0; i13 < this.f25613c; i13++) {
            this.f25614d[i13] = -1;
        }
        this.f25620j = 0;
        this.f25621k = -1;
    }

    @Override // h1.b.a
    public void d() {
        int i10 = this.f25620j;
        int i11 = this.f25621k;
        for (int i12 = 0; i12 < i10; i12++) {
            float[] fArr = this.f25617g;
            fArr[i11] = fArr[i11] * (-1.0f);
            i11 = this.f25619i[i11];
            if (i11 == -1) {
                return;
            }
        }
    }

    @Override // h1.b.a
    public float e(b bVar, boolean z10) {
        float i10 = i(bVar.f25541a);
        f(bVar.f25541a, z10);
        i iVar = (i) bVar.f25545e;
        int h10 = iVar.h();
        int i11 = 0;
        int i12 = 0;
        while (i11 < h10) {
            int i13 = iVar.f25616f[i12];
            if (i13 != -1) {
                b(this.f25623m.f25550d[i13], iVar.f25617g[i12] * i10, z10);
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
        float f10 = this.f25617g[p10];
        if (this.f25621k == p10) {
            this.f25621k = this.f25619i[p10];
        }
        this.f25616f[p10] = -1;
        int[] iArr = this.f25618h;
        int i10 = iArr[p10];
        if (i10 != -1) {
            int[] iArr2 = this.f25619i;
            iArr2[i10] = iArr2[p10];
        }
        int i11 = this.f25619i[p10];
        if (i11 != -1) {
            iArr[i11] = iArr[p10];
        }
        this.f25620j--;
        hVar.f25601x--;
        if (z10) {
            hVar.f(this.f25622l);
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
        return this.f25620j;
    }

    @Override // h1.b.a
    public float i(h hVar) {
        int p10 = p(hVar);
        if (p10 != -1) {
            return this.f25617g[p10];
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public float j(int i10) {
        int i11 = this.f25620j;
        int i12 = this.f25621k;
        for (int i13 = 0; i13 < i11; i13++) {
            if (i13 == i10) {
                return this.f25617g[i12];
            }
            i12 = this.f25619i[i12];
            if (i12 == -1) {
                return 0.0f;
            }
        }
        return 0.0f;
    }

    @Override // h1.b.a
    public void k(float f10) {
        int i10 = this.f25620j;
        int i11 = this.f25621k;
        for (int i12 = 0; i12 < i10; i12++) {
            float[] fArr = this.f25617g;
            fArr[i11] = fArr[i11] / f10;
            i11 = this.f25619i[i11];
            if (i11 == -1) {
                return;
            }
        }
    }

    public int p(h hVar) {
        if (this.f25620j != 0 && hVar != null) {
            int i10 = hVar.f25591i;
            int i11 = this.f25614d[i10 % this.f25613c];
            if (i11 == -1) {
                return -1;
            }
            if (this.f25616f[i11] == i10) {
                return i11;
            }
            do {
                i11 = this.f25615e[i11];
                if (i11 == -1) {
                    break;
                }
            } while (this.f25616f[i11] != i10);
            if (i11 != -1 && this.f25616f[i11] == i10) {
                return i11;
            }
        }
        return -1;
    }

    public String toString() {
        String str;
        String str2;
        String str3 = hashCode() + " { ";
        int i10 = this.f25620j;
        for (int i11 = 0; i11 < i10; i11++) {
            h c10 = c(i11);
            if (c10 != null) {
                String str4 = str3 + c10 + " = " + j(i11) + " ";
                int p10 = p(c10);
                String str5 = str4 + "[p: ";
                if (this.f25618h[p10] != -1) {
                    str = str5 + this.f25623m.f25550d[this.f25616f[this.f25618h[p10]]];
                } else {
                    str = str5 + ViewProps.NONE;
                }
                String str6 = str + ", n: ";
                if (this.f25619i[p10] != -1) {
                    str2 = str6 + this.f25623m.f25550d[this.f25616f[this.f25619i[p10]]];
                } else {
                    str2 = str6 + ViewProps.NONE;
                }
                str3 = str2 + "]";
            }
        }
        return str3 + " }";
    }
}
