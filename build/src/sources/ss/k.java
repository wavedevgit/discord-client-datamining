package ss;

import os.e0;
import os.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f49616a;

    /* renamed from: b */
    private static final e0 f49617b;

    /* renamed from: c */
    private static final e0 f49618c;

    /* renamed from: d */
    private static final e0 f49619d;

    /* renamed from: e */
    private static final e0 f49620e;

    /* renamed from: f */
    private static final int f49621f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f49616a = e10;
        f49617b = new e0("PERMIT");
        f49618c = new e0("TAKEN");
        f49619d = new e0("BROKEN");
        f49620e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f49621f = e11;
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
        return f49619d;
    }

    public static final /* synthetic */ e0 e() {
        return f49620e;
    }

    public static final /* synthetic */ int f() {
        return f49616a;
    }

    public static final /* synthetic */ e0 g() {
        return f49617b;
    }

    public static final /* synthetic */ int h() {
        return f49621f;
    }

    public static final /* synthetic */ e0 i() {
        return f49618c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
