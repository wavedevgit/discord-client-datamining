package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f26117d;

    /* renamed from: e  reason: collision with root package name */
    private String f26118e;

    /* renamed from: q  reason: collision with root package name */
    public float f26122q;

    /* renamed from: u  reason: collision with root package name */
    a f26126u;

    /* renamed from: i  reason: collision with root package name */
    public int f26119i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f26120o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f26121p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f26123r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f26124s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f26125t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f26127v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f26128w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f26129x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f26130y = false;

    /* renamed from: z  reason: collision with root package name */
    int f26131z = -1;
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
        this.f26126u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f26128w;
            if (i10 < i11) {
                if (this.f26127v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f26127v;
                if (i11 >= bVarArr.length) {
                    this.f26127v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f26127v;
                int i12 = this.f26128w;
                bVarArr2[i12] = bVar;
                this.f26128w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f26119i - hVar.f26119i;
    }

    public final void f(b bVar) {
        int i10 = this.f26128w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f26127v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f26127v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f26128w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f26118e = null;
        this.f26126u = a.UNKNOWN;
        this.f26121p = 0;
        this.f26119i = -1;
        this.f26120o = -1;
        this.f26122q = 0.0f;
        this.f26123r = false;
        this.f26130y = false;
        this.f26131z = -1;
        this.A = 0.0f;
        int i10 = this.f26128w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26127v[i11] = null;
        }
        this.f26128w = 0;
        this.f26129x = 0;
        this.f26117d = false;
        Arrays.fill(this.f26125t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f26122q = f10;
        this.f26123r = true;
        this.f26130y = false;
        this.f26131z = -1;
        this.A = 0.0f;
        int i10 = this.f26128w;
        this.f26120o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26127v[i11].A(dVar, this, false);
        }
        this.f26128w = 0;
    }

    public void i(a aVar, String str) {
        this.f26126u = aVar;
    }

    public final void k(d dVar, b bVar) {
        int i10 = this.f26128w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26127v[i11].B(dVar, bVar, false);
        }
        this.f26128w = 0;
    }

    public String toString() {
        if (this.f26118e != null) {
            return "" + this.f26118e;
        }
        return "" + this.f26119i;
    }
}
