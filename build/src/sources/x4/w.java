package x4;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
import ru.c0;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f54648d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f54649e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f54650i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f54651o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f54652p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f54648d = aVar;
        this.f54650i = bufferedSource;
        this.f54651o = function0;
    }

    private final void k() {
        if (!this.f54649e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f54648d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f54649e = true;
            BufferedSource bufferedSource = this.f54650i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f54652p;
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
        BufferedSource bufferedSource = this.f54650i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        ru.h m10 = m();
        c0 c0Var = this.f54652p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = ru.x.d(m10.q(c0Var));
        this.f54650i = d10;
        return d10;
    }

    public ru.h m() {
        return ru.h.f49398b;
    }
}
