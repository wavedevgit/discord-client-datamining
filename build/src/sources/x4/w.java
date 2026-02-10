package x4;

import av.c0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f54380d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54381e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f54382i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f54383o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f54384p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f54380d = aVar;
        this.f54382i = bufferedSource;
        this.f54383o = function0;
    }

    private final void i() {
        if (!this.f54381e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54380d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54381e = true;
            BufferedSource bufferedSource = this.f54382i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f54384p;
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
        BufferedSource bufferedSource = this.f54382i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        av.h m10 = m();
        c0 c0Var = this.f54384p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = av.x.d(m10.q(c0Var));
        this.f54382i = d10;
        return d10;
    }

    public av.h m() {
        return av.h.f6270b;
    }
}
