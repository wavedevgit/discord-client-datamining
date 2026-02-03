package lu;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends Timeout {

    /* renamed from: f  reason: collision with root package name */
    private Timeout f37321f;

    public l(Timeout delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f37321f = delegate;
    }

    @Override // okio.Timeout
    public Timeout a() {
        return this.f37321f.a();
    }

    @Override // okio.Timeout
    public Timeout b() {
        return this.f37321f.b();
    }

    @Override // okio.Timeout
    public long c() {
        return this.f37321f.c();
    }

    @Override // okio.Timeout
    public Timeout d(long j10) {
        return this.f37321f.d(j10);
    }

    @Override // okio.Timeout
    public boolean e() {
        return this.f37321f.e();
    }

    @Override // okio.Timeout
    public void f() {
        this.f37321f.f();
    }

    @Override // okio.Timeout
    public Timeout g(long j10, TimeUnit unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        return this.f37321f.g(j10, unit);
    }

    @Override // okio.Timeout
    public long h() {
        return this.f37321f.h();
    }

    public final Timeout i() {
        return this.f37321f;
    }

    public final l j(Timeout delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f37321f = delegate;
        return this;
    }
}
