package x4;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
import ou.c0;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f53689d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53690e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f53691i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f53692o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f53693p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f53689d = aVar;
        this.f53691i = bufferedSource;
        this.f53692o = function0;
    }

    private final void k() {
        if (!this.f53690e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53689d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53690e = true;
            BufferedSource bufferedSource = this.f53691i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f53693p;
            if (c0Var != null) {
                m().h(c0Var);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource h() {
        k();
        BufferedSource bufferedSource = this.f53691i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        ou.h m10 = m();
        c0 c0Var = this.f53693p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = ou.x.d(m10.q(c0Var));
        this.f53691i = d10;
        return d10;
    }

    public ou.h m() {
        return ou.h.f44516b;
    }
}
