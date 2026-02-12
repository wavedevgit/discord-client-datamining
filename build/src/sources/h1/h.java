package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f26118d;

    /* renamed from: e  reason: collision with root package name */
    private String f26119e;

    /* renamed from: q  reason: collision with root package name */
    public float f26123q;

    /* renamed from: u  reason: collision with root package name */
    a f26127u;

    /* renamed from: i  reason: collision with root package name */
    public int f26120i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f26121o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f26122p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f26124r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f26125s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f26126t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f26128v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f26129w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f26130x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f26131y = false;

    /* renamed from: z  reason: collision with root package name */
    int f26132z = -1;
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
        this.f26127u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f26129w;
            if (i10 < i11) {
                if (this.f26128v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f26128v;
                if (i11 >= bVarArr.length) {
                    this.f26128v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f26128v;
                int i12 = this.f26129w;
                bVarArr2[i12] = bVar;
                this.f26129w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f26120i - hVar.f26120i;
    }

    public final void f(b bVar) {
        int i10 = this.f26129w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f26128v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f26128v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f26129w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f26119e = null;
        this.f26127u = a.UNKNOWN;
        this.f26122p = 0;
        this.f26120i = -1;
        this.f26121o = -1;
        this.f26123q = 0.0f;
        this.f26124r = false;
        this.f26131y = false;
        this.f26132z = -1;
        this.A = 0.0f;
        int i10 = this.f26129w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26128v[i11] = null;
        }
        this.f26129w = 0;
        this.f26130x = 0;
        this.f26118d = false;
        Arrays.fill(this.f26126t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f26123q = f10;
        this.f26124r = true;
        this.f26131y = false;
        this.f26132z = -1;
        this.A = 0.0f;
        int i10 = this.f26129w;
        this.f26121o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26128v[i11].A(dVar, this, false);
        }
        this.f26129w = 0;
    }

    public void i(a aVar, String str) {
        this.f26127u = aVar;
    }

    public final void k(d dVar, b bVar) {
        int i10 = this.f26129w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26128v[i11].B(dVar, bVar, false);
        }
        this.f26129w = 0;
    }

    public String toString() {
        if (this.f26119e != null) {
            return "" + this.f26119e;
        }
        return "" + this.f26120i;
    }
}
