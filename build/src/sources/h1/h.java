package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f25717d;

    /* renamed from: e  reason: collision with root package name */
    private String f25718e;

    /* renamed from: q  reason: collision with root package name */
    public float f25722q;

    /* renamed from: u  reason: collision with root package name */
    a f25726u;

    /* renamed from: i  reason: collision with root package name */
    public int f25719i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f25720o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f25721p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f25723r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f25724s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f25725t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f25727v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f25728w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f25729x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f25730y = false;

    /* renamed from: z  reason: collision with root package name */
    int f25731z = -1;
    float A = 0.0f;
    HashSet B = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        UNRESTRICTED,
        CONSTANT,
        SLACK,
        ERROR,
        UNKNOWN
    }

    public h(a aVar, String str) {
        this.f25726u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f25728w;
            if (i10 < i11) {
                if (this.f25727v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f25727v;
                if (i11 >= bVarArr.length) {
                    this.f25727v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f25727v;
                int i12 = this.f25728w;
                bVarArr2[i12] = bVar;
                this.f25728w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f25719i - hVar.f25719i;
    }

    public final void f(b bVar) {
        int i10 = this.f25728w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f25727v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f25727v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f25728w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f25718e = null;
        this.f25726u = a.UNKNOWN;
        this.f25721p = 0;
        this.f25719i = -1;
        this.f25720o = -1;
        this.f25722q = 0.0f;
        this.f25723r = false;
        this.f25730y = false;
        this.f25731z = -1;
        this.A = 0.0f;
        int i10 = this.f25728w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25727v[i11] = null;
        }
        this.f25728w = 0;
        this.f25729x = 0;
        this.f25717d = false;
        Arrays.fill(this.f25725t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f25722q = f10;
        this.f25723r = true;
        this.f25730y = false;
        this.f25731z = -1;
        this.A = 0.0f;
        int i10 = this.f25728w;
        this.f25720o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25727v[i11].A(dVar, this, false);
        }
        this.f25728w = 0;
    }

    public void i(a aVar, String str) {
        this.f25726u = aVar;
    }

    public final void j(d dVar, b bVar) {
        int i10 = this.f25728w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25727v[i11].B(dVar, bVar, false);
        }
        this.f25728w = 0;
    }

    public String toString() {
        if (this.f25718e != null) {
            return "" + this.f25718e;
        }
        return "" + this.f25719i;
    }
}
