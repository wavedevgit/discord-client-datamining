package qs;

import ms.e0;
import ms.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f47854a;

    /* renamed from: b */
    private static final e0 f47855b;

    /* renamed from: c */
    private static final e0 f47856c;

    /* renamed from: d */
    private static final e0 f47857d;

    /* renamed from: e */
    private static final e0 f47858e;

    /* renamed from: f */
    private static final int f47859f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f47854a = e10;
        f47855b = new e0("PERMIT");
        f47856c = new e0("TAKEN");
        f47857d = new e0("BROKEN");
        f47858e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f47859f = e11;
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
        return f47857d;
    }

    public static final /* synthetic */ e0 e() {
        return f47858e;
    }

    public static final /* synthetic */ int f() {
        return f47854a;
    }

    public static final /* synthetic */ e0 g() {
        return f47855b;
    }

    public static final /* synthetic */ int h() {
        return f47859f;
    }

    public static final /* synthetic */ e0 i() {
        return f47856c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
