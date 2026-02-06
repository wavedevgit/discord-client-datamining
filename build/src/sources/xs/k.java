package xs;

import ts.e0;
import ts.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f54781a;

    /* renamed from: b */
    private static final e0 f54782b;

    /* renamed from: c */
    private static final e0 f54783c;

    /* renamed from: d */
    private static final e0 f54784d;

    /* renamed from: e */
    private static final e0 f54785e;

    /* renamed from: f */
    private static final int f54786f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f54781a = e10;
        f54782b = new e0("PERMIT");
        f54783c = new e0("TAKEN");
        f54784d = new e0("BROKEN");
        f54785e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f54786f = e11;
    }

    public static final g a(int i10, int i11) {
        return new j(i10, i11);
    }

    public static /* synthetic */ g b(int i10, int i11, int i12, Object obj) {
        if ((i12 & 2) != 0) {
            i11 = 0;
        }
        return a(i10, i11);
    }

    public static final /* synthetic */ l c(long j10, l lVar) {
        return j(j10, lVar);
    }

    public static final /* synthetic */ e0 d() {
        return f54784d;
    }

    public static final /* synthetic */ e0 e() {
        return f54785e;
    }

    public static final /* synthetic */ int f() {
        return f54781a;
    }

    public static final /* synthetic */ e0 g() {
        return f54782b;
    }

    public static final /* synthetic */ int h() {
        return f54786f;
    }

    public static final /* synthetic */ e0 i() {
        return f54783c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
