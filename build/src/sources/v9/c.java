package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f51213a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51214b;

    /* renamed from: c  reason: collision with root package name */
    private long f51215c;

    /* renamed from: d  reason: collision with root package name */
    private long f51216d;

    /* renamed from: e  reason: collision with root package name */
    private long f51217e;

    /* renamed from: f  reason: collision with root package name */
    private long f51218f;

    /* renamed from: g  reason: collision with root package name */
    private long f51219g;

    /* renamed from: h  reason: collision with root package name */
    private long f51220h;

    /* renamed from: i  reason: collision with root package name */
    private long f51221i;

    /* renamed from: j  reason: collision with root package name */
    private int f51222j;

    /* renamed from: k  reason: collision with root package name */
    private int f51223k;

    /* renamed from: l  reason: collision with root package name */
    private int f51224l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f51213a = frameScheduler;
        this.f51215c = 8L;
        this.f51222j = -1;
        this.f51223k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f51214b) {
            max = (d10 - this.f51218f) + this.f51216d;
        } else {
            max = Math.max(this.f51220h, 0L);
        }
        int b10 = this.f51213a.b(max, this.f51220h);
        this.f51220h = max;
        return b10;
    }

    public final boolean b() {
        return this.f51214b;
    }

    public final long c() {
        if (!this.f51214b) {
            return -1L;
        }
        long a10 = this.f51213a.a(d() - this.f51218f);
        if (a10 != -1) {
            long j10 = a10 + this.f51215c;
            this.f51219g = this.f51218f + j10;
            return j10;
        }
        this.f51214b = false;
        return -1L;
    }

    public final void e() {
        this.f51224l++;
    }

    public final void f(int i10) {
        this.f51222j = i10;
    }

    public final void g(boolean z10) {
        this.f51214b = z10;
    }

    public final boolean h() {
        if (this.f51222j != -1 && d() >= this.f51219g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f51214b) {
            long d10 = d();
            long j10 = d10 - this.f51217e;
            this.f51218f = j10;
            this.f51219g = j10;
            this.f51220h = d10 - this.f51221i;
            this.f51222j = this.f51223k;
            this.f51214b = true;
        }
    }

    public final void j() {
        if (this.f51214b) {
            long d10 = d();
            this.f51217e = d10 - this.f51218f;
            this.f51221i = d10 - this.f51220h;
            this.f51218f = 0L;
            this.f51219g = 0L;
            this.f51220h = -1L;
            this.f51222j = -1;
            this.f51214b = false;
        }
    }
}
