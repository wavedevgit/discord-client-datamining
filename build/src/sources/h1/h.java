package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f24899d;

    /* renamed from: e  reason: collision with root package name */
    private String f24900e;

    /* renamed from: q  reason: collision with root package name */
    public float f24904q;

    /* renamed from: u  reason: collision with root package name */
    a f24908u;

    /* renamed from: i  reason: collision with root package name */
    public int f24901i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f24902o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f24903p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f24905r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f24906s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f24907t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f24909v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f24910w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f24911x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f24912y = false;

    /* renamed from: z  reason: collision with root package name */
    int f24913z = -1;
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
        this.f24908u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f24910w;
            if (i10 < i11) {
                if (this.f24909v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f24909v;
                if (i11 >= bVarArr.length) {
                    this.f24909v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f24909v;
                int i12 = this.f24910w;
                bVarArr2[i12] = bVar;
                this.f24910w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f24901i - hVar.f24901i;
    }

    public final void f(b bVar) {
        int i10 = this.f24910w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f24909v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f24909v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f24910w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f24900e = null;
        this.f24908u = a.UNKNOWN;
        this.f24903p = 0;
        this.f24901i = -1;
        this.f24902o = -1;
        this.f24904q = 0.0f;
        this.f24905r = false;
        this.f24912y = false;
        this.f24913z = -1;
        this.A = 0.0f;
        int i10 = this.f24910w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f24909v[i11] = null;
        }
        this.f24910w = 0;
        this.f24911x = 0;
        this.f24899d = false;
        Arrays.fill(this.f24907t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f24904q = f10;
        this.f24905r = true;
        this.f24912y = false;
        this.f24913z = -1;
        this.A = 0.0f;
        int i10 = this.f24910w;
        this.f24902o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f24909v[i11].A(dVar, this, false);
        }
        this.f24910w = 0;
    }

    public void i(a aVar, String str) {
        this.f24908u = aVar;
    }

    public final void k(d dVar, b bVar) {
        int i10 = this.f24910w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f24909v[i11].B(dVar, bVar, false);
        }
        this.f24910w = 0;
    }

    public String toString() {
        if (this.f24900e != null) {
            return "" + this.f24900e;
        }
        return "" + this.f24901i;
    }
}
