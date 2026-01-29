package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f27274d;

    /* renamed from: e  reason: collision with root package name */
    private String f27275e;

    /* renamed from: q  reason: collision with root package name */
    public float f27279q;

    /* renamed from: u  reason: collision with root package name */
    a f27283u;

    /* renamed from: i  reason: collision with root package name */
    public int f27276i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f27277o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f27278p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f27280r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f27281s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f27282t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f27284v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f27285w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f27286x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f27287y = false;

    /* renamed from: z  reason: collision with root package name */
    int f27288z = -1;
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
        this.f27283u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f27285w;
            if (i10 < i11) {
                if (this.f27284v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f27284v;
                if (i11 >= bVarArr.length) {
                    this.f27284v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f27284v;
                int i12 = this.f27285w;
                bVarArr2[i12] = bVar;
                this.f27285w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f27276i - hVar.f27276i;
    }

    public final void f(b bVar) {
        int i10 = this.f27285w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f27284v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f27284v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f27285w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f27275e = null;
        this.f27283u = a.UNKNOWN;
        this.f27278p = 0;
        this.f27276i = -1;
        this.f27277o = -1;
        this.f27279q = 0.0f;
        this.f27280r = false;
        this.f27287y = false;
        this.f27288z = -1;
        this.A = 0.0f;
        int i10 = this.f27285w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f27284v[i11] = null;
        }
        this.f27285w = 0;
        this.f27286x = 0;
        this.f27274d = false;
        Arrays.fill(this.f27282t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f27279q = f10;
        this.f27280r = true;
        this.f27287y = false;
        this.f27288z = -1;
        this.A = 0.0f;
        int i10 = this.f27285w;
        this.f27277o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f27284v[i11].A(dVar, this, false);
        }
        this.f27285w = 0;
    }

    public void i(a aVar, String str) {
        this.f27283u = aVar;
    }

    public final void j(d dVar, b bVar) {
        int i10 = this.f27285w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f27284v[i11].B(dVar, bVar, false);
        }
        this.f27285w = 0;
    }

    public String toString() {
        if (this.f27275e != null) {
            return "" + this.f27275e;
        }
        return "" + this.f27276i;
    }
}
