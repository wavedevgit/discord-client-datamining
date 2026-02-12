package x4;

import av.c0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f54381d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54382e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f54383i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f54384o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f54385p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f54381d = aVar;
        this.f54383i = bufferedSource;
        this.f54384o = function0;
    }

    private final void i() {
        if (!this.f54382e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54381d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54382e = true;
            BufferedSource bufferedSource = this.f54383i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f54385p;
            if (c0Var != null) {
                m().h(c0Var);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // x4.r
    public synchronized BufferedSource h() {
        i();
        BufferedSource bufferedSource = this.f54383i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        av.h m10 = m();
        c0 c0Var = this.f54385p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = av.x.d(m10.q(c0Var));
        this.f54383i = d10;
        return d10;
    }

    public av.h m() {
        return av.h.f6270b;
    }
}
