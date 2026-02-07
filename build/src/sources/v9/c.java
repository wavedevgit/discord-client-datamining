package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f52312a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52313b;

    /* renamed from: c  reason: collision with root package name */
    private long f52314c;

    /* renamed from: d  reason: collision with root package name */
    private long f52315d;

    /* renamed from: e  reason: collision with root package name */
    private long f52316e;

    /* renamed from: f  reason: collision with root package name */
    private long f52317f;

    /* renamed from: g  reason: collision with root package name */
    private long f52318g;

    /* renamed from: h  reason: collision with root package name */
    private long f52319h;

    /* renamed from: i  reason: collision with root package name */
    private long f52320i;

    /* renamed from: j  reason: collision with root package name */
    private int f52321j;

    /* renamed from: k  reason: collision with root package name */
    private int f52322k;

    /* renamed from: l  reason: collision with root package name */
    private int f52323l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f52312a = frameScheduler;
        this.f52314c = 8L;
        this.f52321j = -1;
        this.f52322k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f52313b) {
            max = (d10 - this.f52317f) + this.f52315d;
        } else {
            max = Math.max(this.f52319h, 0L);
        }
        int b10 = this.f52312a.b(max, this.f52319h);
        this.f52319h = max;
        return b10;
    }

    public final boolean b() {
        return this.f52313b;
    }

    public final long c() {
        if (!this.f52313b) {
            return -1L;
        }
        long a10 = this.f52312a.a(d() - this.f52317f);
        if (a10 != -1) {
            long j10 = a10 + this.f52314c;
            this.f52318g = this.f52317f + j10;
            return j10;
        }
        this.f52313b = false;
        return -1L;
    }

    public final void e() {
        this.f52323l++;
    }

    public final void f(int i10) {
        this.f52321j = i10;
    }

    public final void g(boolean z10) {
        this.f52313b = z10;
    }

    public final boolean h() {
        if (this.f52321j != -1 && d() >= this.f52318g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f52313b) {
            long d10 = d();
            long j10 = d10 - this.f52316e;
            this.f52317f = j10;
            this.f52318g = j10;
            this.f52319h = d10 - this.f52320i;
            this.f52321j = this.f52322k;
            this.f52313b = true;
        }
    }

    public final void j() {
        if (this.f52313b) {
            long d10 = d();
            this.f52316e = d10 - this.f52317f;
            this.f52320i = d10 - this.f52319h;
            this.f52317f = 0L;
            this.f52318g = 0L;
            this.f52319h = -1L;
            this.f52321j = -1;
            this.f52313b = false;
        }
    }
}
