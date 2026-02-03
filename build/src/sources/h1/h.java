package h1;

import java.util.Arrays;
import java.util.HashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements Comparable {
    private static int C = 1;

    /* renamed from: d  reason: collision with root package name */
    public boolean f26748d;

    /* renamed from: e  reason: collision with root package name */
    private String f26749e;

    /* renamed from: q  reason: collision with root package name */
    public float f26753q;

    /* renamed from: u  reason: collision with root package name */
    a f26757u;

    /* renamed from: i  reason: collision with root package name */
    public int f26750i = -1;

    /* renamed from: o  reason: collision with root package name */
    int f26751o = -1;

    /* renamed from: p  reason: collision with root package name */
    public int f26752p = 0;

    /* renamed from: r  reason: collision with root package name */
    public boolean f26754r = false;

    /* renamed from: s  reason: collision with root package name */
    float[] f26755s = new float[9];

    /* renamed from: t  reason: collision with root package name */
    float[] f26756t = new float[9];

    /* renamed from: v  reason: collision with root package name */
    b[] f26758v = new b[16];

    /* renamed from: w  reason: collision with root package name */
    int f26759w = 0;

    /* renamed from: x  reason: collision with root package name */
    public int f26760x = 0;

    /* renamed from: y  reason: collision with root package name */
    boolean f26761y = false;

    /* renamed from: z  reason: collision with root package name */
    int f26762z = -1;
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
        this.f26757u = aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e() {
        C++;
    }

    public final void a(b bVar) {
        int i10 = 0;
        while (true) {
            int i11 = this.f26759w;
            if (i10 < i11) {
                if (this.f26758v[i10] == bVar) {
                    return;
                }
                i10++;
            } else {
                b[] bVarArr = this.f26758v;
                if (i11 >= bVarArr.length) {
                    this.f26758v = (b[]) Arrays.copyOf(bVarArr, bVarArr.length * 2);
                }
                b[] bVarArr2 = this.f26758v;
                int i12 = this.f26759w;
                bVarArr2[i12] = bVar;
                this.f26759w = i12 + 1;
                return;
            }
        }
    }

    @Override // java.lang.Comparable
    /* renamed from: d */
    public int compareTo(h hVar) {
        return this.f26750i - hVar.f26750i;
    }

    public final void f(b bVar) {
        int i10 = this.f26759w;
        int i11 = 0;
        while (i11 < i10) {
            if (this.f26758v[i11] == bVar) {
                while (i11 < i10 - 1) {
                    b[] bVarArr = this.f26758v;
                    int i12 = i11 + 1;
                    bVarArr[i11] = bVarArr[i12];
                    i11 = i12;
                }
                this.f26759w--;
                return;
            }
            i11++;
        }
    }

    public void g() {
        this.f26749e = null;
        this.f26757u = a.UNKNOWN;
        this.f26752p = 0;
        this.f26750i = -1;
        this.f26751o = -1;
        this.f26753q = 0.0f;
        this.f26754r = false;
        this.f26761y = false;
        this.f26762z = -1;
        this.A = 0.0f;
        int i10 = this.f26759w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26758v[i11] = null;
        }
        this.f26759w = 0;
        this.f26760x = 0;
        this.f26748d = false;
        Arrays.fill(this.f26756t, 0.0f);
    }

    public void h(d dVar, float f10) {
        this.f26753q = f10;
        this.f26754r = true;
        this.f26761y = false;
        this.f26762z = -1;
        this.A = 0.0f;
        int i10 = this.f26759w;
        this.f26751o = -1;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26758v[i11].A(dVar, this, false);
        }
        this.f26759w = 0;
    }

    public void i(a aVar, String str) {
        this.f26757u = aVar;
    }

    public final void j(d dVar, b bVar) {
        int i10 = this.f26759w;
        for (int i11 = 0; i11 < i10; i11++) {
            this.f26758v[i11].B(dVar, bVar, false);
        }
        this.f26759w = 0;
    }

    public String toString() {
        if (this.f26749e != null) {
            return "" + this.f26749e;
        }
        return "" + this.f26750i;
    }
}
