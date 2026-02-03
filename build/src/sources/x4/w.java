package x4;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import lu.c0;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f53148d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53149e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f53150i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f53151o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f53152p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f53148d = aVar;
        this.f53150i = bufferedSource;
        this.f53151o = function0;
    }

    private final void l() {
        if (!this.f53149e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53148d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53149e = true;
            BufferedSource bufferedSource = this.f53150i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f53152p;
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
        BufferedSource bufferedSource = this.f53150i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        lu.h n10 = n();
        c0 c0Var = this.f53152p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = lu.x.d(n10.q(c0Var));
        this.f53150i = d10;
        return d10;
    }

    public lu.h n() {
        return lu.h.f37308b;
    }
}
