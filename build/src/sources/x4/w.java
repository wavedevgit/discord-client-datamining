package x4;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
import qu.c0;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f54556d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54557e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f54558i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f54559o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f54560p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f54556d = aVar;
        this.f54558i = bufferedSource;
        this.f54559o = function0;
    }

    private final void k() {
        if (!this.f54557e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54556d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54557e = true;
            BufferedSource bufferedSource = this.f54558i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f54560p;
            if (c0Var != null) {
                m().h(c0Var);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource g() {
        k();
        BufferedSource bufferedSource = this.f54558i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        qu.h m10 = m();
        c0 c0Var = this.f54560p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = qu.x.d(m10.q(c0Var));
        this.f54558i = d10;
        return d10;
    }

    public qu.h m() {
        return qu.h.f48280b;
    }
}
