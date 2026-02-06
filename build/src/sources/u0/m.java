package u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m extends h {

    /* renamed from: e  reason: collision with root package name */
    private int f51181e;

    public m(int i10) {
        super(null);
        boolean z10;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            v0.d.a("Capacity must be a positive value.");
        }
        g(r.d(i10));
    }

    private final void e() {
        this.f51181e = r.a(b()) - this.f51173d;
    }

    private final void f(int i10) {
        long[] jArr;
        if (i10 == 0) {
            jArr = r.f51189a;
        } else {
            long[] jArr2 = new long[((i10 + 15) & (-8)) >> 3];
            kotlin.collections.i.y(jArr2, -9187201950435737472L, 0, 0, 6, null);
            jArr = jArr2;
        }
        this.f51170a = jArr;
        int i11 = i10 >> 3;
        long j10 = 255 << ((i10 & 7) << 3);
        jArr[i11] = (jArr[i11] & (~j10)) | j10;
        e();
    }

    private final void g(int i10) {
        int i11;
        if (i10 > 0) {
            i11 = Math.max(7, r.c(i10));
        } else {
            i11 = 0;
        }
        this.f51172c = i11;
        f(i11);
        this.f51171b = new long[i11];
    }
}
