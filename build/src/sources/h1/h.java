package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f25765d;

    /* renamed from: e  reason: collision with root package name */
    private String f25766e;

    /* renamed from: q  reason: collision with root package name */
    public float f25770q;

    /* renamed from: u  reason: collision with root package name */
    a f25774u;

    /* renamed from: i  reason: collision with root package name */
    public int f25767i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f25768o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f25769p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f25771r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f25772s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f25773t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f25775v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f25776w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f25777x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f25778y = false;

    /* renamed from: z  reason: collision with root package name */
    int f25779z = -1;
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
        this.f25774u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f25776w;
            if (i10 < i11) {
                if (this.f25775v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f25775v;
                if (i11 >= bVarArr.length) {
                    this.f25775v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f25775v;
                int i12 = this.f25776w;
                bVarArr2[i12] = bVar;
                this.f25776w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f25767i - hVar.f25767i;
    }

    public final void f(b bVar) {
        int i10 = this.f25776w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f25775v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f25775v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f25776w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f25766e = null;
        this.f25774u = a.UNKNOWN;
        this.f25769p = 0;
        this.f25767i = -1;
        this.f25768o = -1;
        this.f25770q = 0.0f;
        this.f25771r = false;
        this.f25778y = false;
        this.f25779z = -1;
        this.A = 0.0f;
        int i10 = this.f25776w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25775v[i11] = null;
        }
        this.f25776w = 0;
        this.f25777x = 0;
        this.f25765d = false;
        Arrays.fill(this.f25773t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f25770q = f10;
        this.f25771r = true;
        this.f25778y = false;
        this.f25779z = -1;
        this.A = 0.0f;
        int i10 = this.f25776w;
        this.f25768o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25775v[i11].A(dVar, this, false);
        }
        this.f25776w = 0;
    }

    public void i(a aVar, String str) {
        this.f25774u = aVar;
    }

    public final void j(d dVar, b bVar) {
        int i10 = this.f25776w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f25775v[i11].B(dVar, bVar, false);
        }
        this.f25776w = 0;
    }

    public String toString() {
        if (this.f25766e != null) {
            return "" + this.f25766e;
        }
        return "" + this.f25767i;
    }
}
