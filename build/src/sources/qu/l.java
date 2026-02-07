package qu;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends Timeout {

    /* renamed from: f  reason: collision with root package name */
    private Timeout f48293f;

    public l(Timeout delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f48293f = delegate;
    }

    @Override // okio.Timeout
    public Timeout a() {
        return this.f48293f.a();
    }

    @Override // okio.Timeout
    public Timeout b() {
        return this.f48293f.b();
    }

    @Override // okio.Timeout
    public long c() {
        return this.f48293f.c();
    }

    @Override // okio.Timeout
    public Timeout d(long j10) {
        return this.f48293f.d(j10);
    }

    @Override // okio.Timeout
    public boolean e() {
        return this.f48293f.e();
    }

    @Override // okio.Timeout
    public void f() {
        this.f48293f.f();
    }

    @Override // okio.Timeout
    public Timeout g(long j10, TimeUnit unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        return this.f48293f.g(j10, unit);
    }

    @Override // okio.Timeout
    public long h() {
        return this.f48293f.h();
    }

    public final Timeout i() {
        return this.f48293f;
    }

    public final l j(Timeout delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f48293f = delegate;
        return this;
    }
}
