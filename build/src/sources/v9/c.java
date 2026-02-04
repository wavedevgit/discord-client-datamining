package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f51210a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51211b;

    /* renamed from: c  reason: collision with root package name */
    private long f51212c;

    /* renamed from: d  reason: collision with root package name */
    private long f51213d;

    /* renamed from: e  reason: collision with root package name */
    private long f51214e;

    /* renamed from: f  reason: collision with root package name */
    private long f51215f;

    /* renamed from: g  reason: collision with root package name */
    private long f51216g;

    /* renamed from: h  reason: collision with root package name */
    private long f51217h;

    /* renamed from: i  reason: collision with root package name */
    private long f51218i;

    /* renamed from: j  reason: collision with root package name */
    private int f51219j;

    /* renamed from: k  reason: collision with root package name */
    private int f51220k;

    /* renamed from: l  reason: collision with root package name */
    private int f51221l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f51210a = frameScheduler;
        this.f51212c = 8L;
        this.f51219j = -1;
        this.f51220k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f51211b) {
            max = (d10 - this.f51215f) + this.f51213d;
        } else {
            max = Math.max(this.f51217h, 0L);
        }
        int b10 = this.f51210a.b(max, this.f51217h);
        this.f51217h = max;
        return b10;
    }

    public final boolean b() {
        return this.f51211b;
    }

    public final long c() {
        if (!this.f51211b) {
            return -1L;
        }
        long a10 = this.f51210a.a(d() - this.f51215f);
        if (a10 != -1) {
            long j10 = a10 + this.f51212c;
            this.f51216g = this.f51215f + j10;
            return j10;
        }
        this.f51211b = false;
        return -1L;
    }

    public final void e() {
        this.f51221l++;
    }

    public final void f(int i10) {
        this.f51219j = i10;
    }

    public final void g(boolean z10) {
        this.f51211b = z10;
    }

    public final boolean h() {
        if (this.f51219j != -1 && d() >= this.f51216g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f51211b) {
            long d10 = d();
            long j10 = d10 - this.f51214e;
            this.f51215f = j10;
            this.f51216g = j10;
            this.f51217h = d10 - this.f51218i;
            this.f51219j = this.f51220k;
            this.f51211b = true;
        }
    }

    public final void j() {
        if (this.f51211b) {
            long d10 = d();
            this.f51214e = d10 - this.f51215f;
            this.f51218i = d10 - this.f51217h;
            this.f51215f = 0L;
            this.f51216g = 0L;
            this.f51217h = -1L;
            this.f51219j = -1;
            this.f51211b = false;
        }
    }
}
