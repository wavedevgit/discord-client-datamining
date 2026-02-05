package vs;

import rs.e0;
import rs.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f52381a;

    /* renamed from: b */
    private static final e0 f52382b;

    /* renamed from: c */
    private static final e0 f52383c;

    /* renamed from: d */
    private static final e0 f52384d;

    /* renamed from: e */
    private static final e0 f52385e;

    /* renamed from: f */
    private static final int f52386f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f52381a = e10;
        f52382b = new e0("PERMIT");
        f52383c = new e0("TAKEN");
        f52384d = new e0("BROKEN");
        f52385e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f52386f = e11;
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
        return f52384d;
    }

    public static final /* synthetic */ e0 e() {
        return f52385e;
    }

    public static final /* synthetic */ int f() {
        return f52381a;
    }

    public static final /* synthetic */ e0 g() {
        return f52382b;
    }

    public static final /* synthetic */ int h() {
        return f52386f;
    }

    public static final /* synthetic */ e0 i() {
        return f52383c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
