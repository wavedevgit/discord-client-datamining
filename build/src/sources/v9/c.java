package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f51899a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51900b;

    /* renamed from: c  reason: collision with root package name */
    private long f51901c;

    /* renamed from: d  reason: collision with root package name */
    private long f51902d;

    /* renamed from: e  reason: collision with root package name */
    private long f51903e;

    /* renamed from: f  reason: collision with root package name */
    private long f51904f;

    /* renamed from: g  reason: collision with root package name */
    private long f51905g;

    /* renamed from: h  reason: collision with root package name */
    private long f51906h;

    /* renamed from: i  reason: collision with root package name */
    private long f51907i;

    /* renamed from: j  reason: collision with root package name */
    private int f51908j;

    /* renamed from: k  reason: collision with root package name */
    private int f51909k;

    /* renamed from: l  reason: collision with root package name */
    private int f51910l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f51899a = frameScheduler;
        this.f51901c = 8L;
        this.f51908j = -1;
        this.f51909k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f51900b) {
            max = (d10 - this.f51904f) + this.f51902d;
        } else {
            max = Math.max(this.f51906h, 0L);
        }
        int b10 = this.f51899a.b(max, this.f51906h);
        this.f51906h = max;
        return b10;
    }

    public final boolean b() {
        return this.f51900b;
    }

    public final long c() {
        if (!this.f51900b) {
            return -1L;
        }
        long a10 = this.f51899a.a(d() - this.f51904f);
        if (a10 != -1) {
            long j10 = a10 + this.f51901c;
            this.f51905g = this.f51904f + j10;
            return j10;
        }
        this.f51900b = false;
        return -1L;
    }

    public final void e() {
        this.f51910l++;
    }

    public final void f(int i10) {
        this.f51908j = i10;
    }

    public final void g(boolean z10) {
        this.f51900b = z10;
    }

    public final boolean h() {
        if (this.f51908j != -1 && d() >= this.f51905g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f51900b) {
            long d10 = d();
            long j10 = d10 - this.f51903e;
            this.f51904f = j10;
            this.f51905g = j10;
            this.f51906h = d10 - this.f51907i;
            this.f51908j = this.f51909k;
            this.f51900b = true;
        }
    }

    public final void j() {
        if (this.f51900b) {
            long d10 = d();
            this.f51903e = d10 - this.f51904f;
            this.f51907i = d10 - this.f51906h;
            this.f51904f = 0L;
            this.f51905g = 0L;
            this.f51906h = -1L;
            this.f51908j = -1;
            this.f51900b = false;
        }
    }
}
