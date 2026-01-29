package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f50745a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f50746b;

    /* renamed from: c  reason: collision with root package name */
    private long f50747c;

    /* renamed from: d  reason: collision with root package name */
    private long f50748d;

    /* renamed from: e  reason: collision with root package name */
    private long f50749e;

    /* renamed from: f  reason: collision with root package name */
    private long f50750f;

    /* renamed from: g  reason: collision with root package name */
    private long f50751g;

    /* renamed from: h  reason: collision with root package name */
    private long f50752h;

    /* renamed from: i  reason: collision with root package name */
    private long f50753i;

    /* renamed from: j  reason: collision with root package name */
    private int f50754j;

    /* renamed from: k  reason: collision with root package name */
    private int f50755k;

    /* renamed from: l  reason: collision with root package name */
    private int f50756l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f50745a = frameScheduler;
        this.f50747c = 8L;
        this.f50754j = -1;
        this.f50755k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f50746b) {
            max = (d10 - this.f50750f) + this.f50748d;
        } else {
            max = Math.max(this.f50752h, 0L);
        }
        int b10 = this.f50745a.b(max, this.f50752h);
        this.f50752h = max;
        return b10;
    }

    public final boolean b() {
        return this.f50746b;
    }

    public final long c() {
        if (!this.f50746b) {
            return -1L;
        }
        long a10 = this.f50745a.a(d() - this.f50750f);
        if (a10 != -1) {
            long j10 = a10 + this.f50747c;
            this.f50751g = this.f50750f + j10;
            return j10;
        }
        this.f50746b = false;
        return -1L;
    }

    public final void e() {
        this.f50756l++;
    }

    public final void f(int i10) {
        this.f50754j = i10;
    }

    public final void g(boolean z10) {
        this.f50746b = z10;
    }

    public final boolean h() {
        if (this.f50754j != -1 && d() >= this.f50751g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f50746b) {
            long d10 = d();
            long j10 = d10 - this.f50749e;
            this.f50750f = j10;
            this.f50751g = j10;
            this.f50752h = d10 - this.f50753i;
            this.f50754j = this.f50755k;
            this.f50746b = true;
        }
    }

    public final void j() {
        if (this.f50746b) {
            long d10 = d();
            this.f50749e = d10 - this.f50750f;
            this.f50753i = d10 - this.f50752h;
            this.f50750f = 0L;
            this.f50751g = 0L;
            this.f50752h = -1L;
            this.f50754j = -1;
            this.f50746b = false;
        }
    }
}
