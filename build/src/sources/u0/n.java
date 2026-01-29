package u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n extends q {

    /* renamed from: f  reason: collision with root package name */
    private int f50013f;

    public n(int i10) {
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
        h(r.d(i10));
    }

    private final void f() {
        this.f50013f = r.a(c()) - this.f50019e;
    }

    private final void g(int i10) {
        long[] jArr;
        if (i10 == 0) {
            jArr = r.f50020a;
        } else {
            long[] jArr2 = new long[((i10 + 15) & (-8)) >> 3];
            kotlin.collections.i.y(jArr2, -9187201950435737472L, 0, 0, 6, null);
            int i11 = i10 >> 3;
            long j10 = 255 << ((i10 & 7) << 3);
            jArr2[i11] = (jArr2[i11] & (~j10)) | j10;
            jArr = jArr2;
        }
        this.f50015a = jArr;
        f();
    }

    private final void h(int i10) {
        int i11;
        Object[] objArr;
        Object[] objArr2;
        if (i10 > 0) {
            i11 = Math.max(7, r.c(i10));
        } else {
            i11 = 0;
        }
        this.f50018d = i11;
        g(i11);
        if (i11 == 0) {
            objArr = v0.a.f50584c;
        } else {
            objArr = new Object[i11];
        }
        this.f50016b = objArr;
        if (i11 == 0) {
            objArr2 = v0.a.f50584c;
        } else {
            objArr2 = new Object[i11];
        }
        this.f50017c = objArr2;
    }
}
