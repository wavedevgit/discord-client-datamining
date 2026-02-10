package ys;

import us.e0;
import us.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f55764a;

    /* renamed from: b */
    private static final e0 f55765b;

    /* renamed from: c */
    private static final e0 f55766c;

    /* renamed from: d */
    private static final e0 f55767d;

    /* renamed from: e */
    private static final e0 f55768e;

    /* renamed from: f */
    private static final int f55769f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f55764a = e10;
        f55765b = new e0("PERMIT");
        f55766c = new e0("TAKEN");
        f55767d = new e0("BROKEN");
        f55768e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f55769f = e11;
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
        return f55767d;
    }

    public static final /* synthetic */ e0 e() {
        return f55768e;
    }

    public static final /* synthetic */ int f() {
        return f55764a;
    }

    public static final /* synthetic */ e0 g() {
        return f55765b;
    }

    public static final /* synthetic */ int h() {
        return f55769f;
    }

    public static final /* synthetic */ e0 i() {
        return f55766c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
