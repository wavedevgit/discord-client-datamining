package okio;

import java.io.InterruptedIOException;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class Timeout {

    /* renamed from: d  reason: collision with root package name */
    public static final b f43219d = new b(null);

    /* renamed from: e  reason: collision with root package name */
    public static final Timeout f43220e = new a();

    /* renamed from: a  reason: collision with root package name */
    private boolean f43221a;

    /* renamed from: b  reason: collision with root package name */
    private long f43222b;

    /* renamed from: c  reason: collision with root package name */
    private long f43223c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Timeout {
        a() {
        }

        @Override // okio.Timeout
        public Timeout d(long j10) {
            return this;
        }

        @Override // okio.Timeout
        public void f() {
        }

        @Override // okio.Timeout
        public Timeout g(long j10, TimeUnit unit) {
            Intrinsics.checkNotNullParameter(unit, "unit");
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public Timeout a() {
        this.f43221a = false;
        return this;
    }

    public Timeout b() {
        this.f43223c = 0L;
        return this;
    }

    public long c() {
        if (this.f43221a) {
            return this.f43222b;
        }
        throw new IllegalStateException("No deadline");
    }

    public Timeout d(long j10) {
        this.f43221a = true;
        this.f43222b = j10;
        return this;
    }

    public boolean e() {
        return this.f43221a;
    }

    public void f() {
        if (!Thread.currentThread().isInterrupted()) {
            if (this.f43221a && this.f43222b - System.nanoTime() <= 0) {
                throw new InterruptedIOException("deadline reached");
            }
            return;
        }
        throw new InterruptedIOException("interrupted");
    }

    public Timeout g(long j10, TimeUnit unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        if (j10 >= 0) {
            this.f43223c = unit.toNanos(j10);
            return this;
        }
        throw new IllegalArgumentException(("timeout < 0: " + j10).toString());
    }

    public long h() {
        return this.f43223c;
    }
}
