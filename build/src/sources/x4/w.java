package x4;

import iu.c0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSource;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class w extends r {

    /* renamed from: d  reason: collision with root package name */
    private final r.a f53203d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53204e;

    /* renamed from: i  reason: collision with root package name */
    private BufferedSource f53205i;

    /* renamed from: o  reason: collision with root package name */
    private Function0 f53206o;

    /* renamed from: p  reason: collision with root package name */
    private c0 f53207p;

    public w(BufferedSource bufferedSource, Function0 function0, r.a aVar) {
        super(null);
        this.f53203d = aVar;
        this.f53205i = bufferedSource;
        this.f53206o = function0;
    }

    private final void l() {
        if (!this.f53204e) {
            return;
        }
        throw new IllegalStateException("closed");
    }

    @Override // x4.r
    public r.a a() {
        return this.f53203d;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            this.f53204e = true;
            BufferedSource bufferedSource = this.f53205i;
            if (bufferedSource != null) {
                k5.k.d(bufferedSource);
            }
            c0 c0Var = this.f53207p;
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
        BufferedSource bufferedSource = this.f53205i;
        if (bufferedSource != null) {
            return bufferedSource;
        }
        iu.h n10 = n();
        c0 c0Var = this.f53207p;
        Intrinsics.checkNotNull(c0Var);
        BufferedSource d10 = iu.x.d(n10.q(c0Var));
        this.f53205i = d10;
        return d10;
    }

    public iu.h n() {
        return iu.h.f31257b;
    }
}
