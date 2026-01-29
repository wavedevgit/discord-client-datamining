package a0;

import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f2 extends c1 {

    /* renamed from: c  reason: collision with root package name */
    private final a0 f52c;

    public f2(a0 a0Var, k2 k2Var) {
        super(a0Var);
        this.f52c = a0Var;
    }

    @Override // a0.c1, x.j
    public ListenableFuture a(boolean z10) {
        if (!b0.o.b(null, 6)) {
            return d0.n.n(new IllegalStateException("Torch is not supported"));
        }
        return this.f52c.a(z10);
    }

    @Override // a0.c1, x.j
    public ListenableFuture h(x.b0 b0Var) {
        x.b0 a10 = b0.o.a(null, b0Var);
        if (a10 == null) {
            return d0.n.n(new IllegalStateException("FocusMetering is not supported"));
        }
        return this.f52c.h(a10);
    }
}
