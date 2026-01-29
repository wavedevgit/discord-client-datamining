package ps;

import ls.e0;
import ls.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f46181a;

    /* renamed from: b */
    private static final e0 f46182b;

    /* renamed from: c */
    private static final e0 f46183c;

    /* renamed from: d */
    private static final e0 f46184d;

    /* renamed from: e */
    private static final e0 f46185e;

    /* renamed from: f */
    private static final int f46186f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f46181a = e10;
        f46182b = new e0("PERMIT");
        f46183c = new e0("TAKEN");
        f46184d = new e0("BROKEN");
        f46185e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f46186f = e11;
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
        return f46184d;
    }

    public static final /* synthetic */ e0 e() {
        return f46185e;
    }

    public static final /* synthetic */ int f() {
        return f46181a;
    }

    public static final /* synthetic */ e0 g() {
        return f46182b;
    }

    public static final /* synthetic */ int h() {
        return f46186f;
    }

    public static final /* synthetic */ e0 i() {
        return f46183c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
