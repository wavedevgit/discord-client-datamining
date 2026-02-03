package x4;

import ju.c0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f53427d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53428e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f53429i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f53430o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f53431p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f53427d = aVar;
        this.f53429i = bufferedSource;
        this.f53430o = function0;
    }

    private final void l() {
        if (!this.f53428e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53427d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53428e = true;
            BufferedSource bufferedSource = this.f53429i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f53431p;
            if (c0Var != null) {
                n().h(c0Var);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource h() {
        l();
        BufferedSource bufferedSource = this.f53429i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        ju.h n10 = n();
        c0 c0Var = this.f53431p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = ju.x.d(n10.q(c0Var));
        this.f53429i = d10;
        return d10;
    }

    public ju.h n() {
        return ju.h.f32370b;
    }
}
