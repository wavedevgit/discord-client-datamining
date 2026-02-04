package ss;

import os.e0;
import os.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f49613a;

    /* renamed from: b */
    private static final e0 f49614b;

    /* renamed from: c */
    private static final e0 f49615c;

    /* renamed from: d */
    private static final e0 f49616d;

    /* renamed from: e */
    private static final e0 f49617e;

    /* renamed from: f */
    private static final int f49618f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f49613a = e10;
        f49614b = new e0("PERMIT");
        f49615c = new e0("TAKEN");
        f49616d = new e0("BROKEN");
        f49617e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f49618f = e11;
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
        return f49616d;
    }

    public static final /* synthetic */ e0 e() {
        return f49617e;
    }

    public static final /* synthetic */ int f() {
        return f49613a;
    }

    public static final /* synthetic */ e0 g() {
        return f49614b;
    }

    public static final /* synthetic */ int h() {
        return f49618f;
    }

    public static final /* synthetic */ e0 i() {
        return f49615c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
