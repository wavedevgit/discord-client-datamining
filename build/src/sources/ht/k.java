package ht;

import dt.e0;
import dt.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k {

    /* renamed from: a */
    private static final int f27686a;

    /* renamed from: b */
    private static final e0 f27687b;

    /* renamed from: c */
    private static final e0 f27688c;

    /* renamed from: d */
    private static final e0 f27689d;

    /* renamed from: e */
    private static final e0 f27690e;

    /* renamed from: f */
    private static final int f27691f;

    static {
        int e10;
        int e11;
        e10 = h0.e("kotlinx.coroutines.semaphore.maxSpinCycles", 100, 0, 0, 12, null);
        f27686a = e10;
        f27687b = new e0("PERMIT");
        f27688c = new e0("TAKEN");
        f27689d = new e0("BROKEN");
        f27690e = new e0("CANCELLED");
        e11 = h0.e("kotlinx.coroutines.semaphore.segmentSize", 16, 0, 0, 12, null);
        f27691f = e11;
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
        return f27689d;
    }

    public static final /* synthetic */ e0 e() {
        return f27690e;
    }

    public static final /* synthetic */ int f() {
        return f27686a;
    }

    public static final /* synthetic */ e0 g() {
        return f27687b;
    }

    public static final /* synthetic */ int h() {
        return f27691f;
    }

    public static final /* synthetic */ e0 i() {
        return f27688c;
    }

    public static final l j(long j10, l lVar) {
        return new l(j10, lVar, 0);
    }
}
