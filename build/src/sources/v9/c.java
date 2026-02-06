package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f52264a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52265b;

    /* renamed from: c  reason: collision with root package name */
    private long f52266c;

    /* renamed from: d  reason: collision with root package name */
    private long f52267d;

    /* renamed from: e  reason: collision with root package name */
    private long f52268e;

    /* renamed from: f  reason: collision with root package name */
    private long f52269f;

    /* renamed from: g  reason: collision with root package name */
    private long f52270g;

    /* renamed from: h  reason: collision with root package name */
    private long f52271h;

    /* renamed from: i  reason: collision with root package name */
    private long f52272i;

    /* renamed from: j  reason: collision with root package name */
    private int f52273j;

    /* renamed from: k  reason: collision with root package name */
    private int f52274k;

    /* renamed from: l  reason: collision with root package name */
    private int f52275l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f52264a = frameScheduler;
        this.f52266c = 8L;
        this.f52273j = -1;
        this.f52274k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f52265b) {
            max = (d10 - this.f52269f) + this.f52267d;
        } else {
            max = Math.max(this.f52271h, 0L);
        }
        int b10 = this.f52264a.b(max, this.f52271h);
        this.f52271h = max;
        return b10;
    }

    public final boolean b() {
        return this.f52265b;
    }

    public final long c() {
        if (!this.f52265b) {
            return -1L;
        }
        long a10 = this.f52264a.a(d() - this.f52269f);
        if (a10 != -1) {
            long j10 = a10 + this.f52266c;
            this.f52270g = this.f52269f + j10;
            return j10;
        }
        this.f52265b = false;
        return -1L;
    }

    public final void e() {
        this.f52275l++;
    }

    public final void f(int i10) {
        this.f52273j = i10;
    }

    public final void g(boolean z10) {
        this.f52265b = z10;
    }

    public final boolean h() {
        if (this.f52273j != -1 && d() >= this.f52270g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f52265b) {
            long d10 = d();
            long j10 = d10 - this.f52268e;
            this.f52269f = j10;
            this.f52270g = j10;
            this.f52271h = d10 - this.f52272i;
            this.f52273j = this.f52274k;
            this.f52265b = true;
        }
    }

    public final void j() {
        if (this.f52265b) {
            long d10 = d();
            this.f52268e = d10 - this.f52269f;
            this.f52272i = d10 - this.f52271h;
            this.f52269f = 0L;
            this.f52270g = 0L;
            this.f52271h = -1L;
            this.f52273j = -1;
            this.f52265b = false;
        }
    }
}
