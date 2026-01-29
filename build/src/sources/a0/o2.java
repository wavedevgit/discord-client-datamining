package a0;

import android.util.Size;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o2 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        VGA(0),
        s720p(1),
        PREVIEW(2),
        s1440p(3),
        RECORD(4),
        MAXIMUM(5),
        ULTRA_MAXIMUM(6),
        NOT_SUPPORT(7);
        

        /* renamed from: d  reason: collision with root package name */
        final int f197d;

        a(int i10) {
            this.f197d = i10;
        }

        int d() {
            return this.f197d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        PRIV,
        YUV,
        JPEG,
        JPEG_R,
        RAW
    }

    public static o2 a(b bVar, a aVar) {
        return new i(bVar, aVar, 0L);
    }

    public static o2 b(b bVar, a aVar, long j10) {
        return new i(bVar, aVar, j10);
    }

    public static b e(int i10) {
        if (i10 == 35) {
            return b.YUV;
        }
        if (i10 == 256) {
            return b.JPEG;
        }
        if (i10 == 4101) {
            return b.JPEG_R;
        }
        if (i10 == 32) {
            return b.RAW;
        }
        return b.PRIV;
    }

    public static o2 h(int i10, int i11, Size size, p2 p2Var) {
        b e10 = e(i11);
        a aVar = a.NOT_SUPPORT;
        int b10 = i0.d.b(size);
        if (i10 == 1) {
            if (b10 <= i0.d.b(p2Var.i(i11))) {
                aVar = a.s720p;
            } else if (b10 <= i0.d.b(p2Var.g(i11))) {
                aVar = a.s1440p;
            }
        } else if (b10 <= i0.d.b(p2Var.b())) {
            aVar = a.VGA;
        } else if (b10 <= i0.d.b(p2Var.e())) {
            aVar = a.PREVIEW;
        } else if (b10 <= i0.d.b(p2Var.f())) {
            aVar = a.RECORD;
        } else if (b10 <= i0.d.b(p2Var.c(i11))) {
            aVar = a.MAXIMUM;
        } else {
            Size k10 = p2Var.k(i11);
            if (k10 != null && b10 <= i0.d.b(k10)) {
                aVar = a.ULTRA_MAXIMUM;
            }
        }
        return a(e10, aVar);
    }

    public abstract a c();

    public abstract b d();

    public abstract long f();

    public final boolean g(o2 o2Var) {
        b d10 = o2Var.d();
        if (o2Var.c().d() <= c().d() && d10 == d()) {
            return true;
        }
        return false;
    }
}
