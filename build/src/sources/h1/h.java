package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f25589d;

    /* renamed from: e  reason: collision with root package name */
    private String f25590e;

    /* renamed from: q  reason: collision with root package name */
    public float f25594q;

    /* renamed from: u  reason: collision with root package name */
    a f25598u;

    /* renamed from: i  reason: collision with root package name */
    public int f25591i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f25592o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f25593p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f25595r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f25596s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f25597t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f25599v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f25600w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f25601x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f25602y = false;

    /* renamed from: z  reason: collision with root package name */
    int f25603z = -1;
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
        this.f25598u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f25600w;
            if (i10 < i11) {
                if (this.f25599v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f25599v;
                if (i11 >= bVarArr.length) {
                    this.f25599v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f25599v;
                int i12 = this.f25600w;
                bVarArr2[i12] = bVar;
                this.f25600w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f25591i - hVar.f25591i;
    }

    public final void f(b bVar) {
        int i10 = this.f25600w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f25599v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f25599v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f25600w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f25590e = null;
        this.f25598u = a.UNKNOWN;
        this.f25593p = 0;
        this.f25591i = -1;
        this.f25592o = -1;
        this.f25594q = 0.0f;
        this.f25595r = false;
        this.f25602y = false;
        this.f25603z = -1;
        this.A = 0.0f;
        int i10 = this.f25600w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25599v[i11] = null;
        }
        this.f25600w = 0;
        this.f25601x = 0;
        this.f25589d = false;
        Arrays.fill(this.f25597t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f25594q = f10;
        this.f25595r = true;
        this.f25602y = false;
        this.f25603z = -1;
        this.A = 0.0f;
        int i10 = this.f25600w;
        this.f25592o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25599v[i11].A(dVar, this, false);
        }
        this.f25600w = 0;
    }

    public void i(a aVar, String str) {
        this.f25598u = aVar;
    }

    public final void k(d dVar, b bVar) {
        int i10 = this.f25600w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25599v[i11].B(dVar, bVar, false);
        }
        this.f25600w = 0;
    }

    public String toString() {
        if (this.f25590e != null) {
            return "" + this.f25590e;
        }
        return "" + this.f25591i;
    }
}
