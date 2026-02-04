package x4;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import lu.c0;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f53145d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53146e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f53147i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f53148o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f53149p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f53145d = aVar;
        this.f53147i = bufferedSource;
        this.f53148o = function0;
    }

    private final void l() {
        if (!this.f53146e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53145d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53146e = true;
            BufferedSource bufferedSource = this.f53147i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f53149p;
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
        BufferedSource bufferedSource = this.f53147i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        lu.h n10 = n();
        c0 c0Var = this.f53149p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = lu.x.d(n10.q(c0Var));
        this.f53147i = d10;
        return d10;
    }

    public lu.h n() {
        return lu.h.f37308b;
    }
}
