package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f50761a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f50762b;

    /* renamed from: c  reason: collision with root package name */
    private long f50763c;

    /* renamed from: d  reason: collision with root package name */
    private long f50764d;

    /* renamed from: e  reason: collision with root package name */
    private long f50765e;

    /* renamed from: f  reason: collision with root package name */
    private long f50766f;

    /* renamed from: g  reason: collision with root package name */
    private long f50767g;

    /* renamed from: h  reason: collision with root package name */
    private long f50768h;

    /* renamed from: i  reason: collision with root package name */
    private long f50769i;

    /* renamed from: j  reason: collision with root package name */
    private int f50770j;

    /* renamed from: k  reason: collision with root package name */
    private int f50771k;

    /* renamed from: l  reason: collision with root package name */
    private int f50772l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f50761a = frameScheduler;
        this.f50763c = 8L;
        this.f50770j = -1;
        this.f50771k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f50762b) {
            max = (d10 - this.f50766f) + this.f50764d;
        } else {
            max = Math.max(this.f50768h, 0L);
        }
        int b10 = this.f50761a.b(max, this.f50768h);
        this.f50768h = max;
        return b10;
    }

    public final boolean b() {
        return this.f50762b;
    }

    public final long c() {
        if (!this.f50762b) {
            return -1L;
        }
        long a10 = this.f50761a.a(d() - this.f50766f);
        if (a10 != -1) {
            long j10 = a10 + this.f50763c;
            this.f50767g = this.f50766f + j10;
            return j10;
        }
        this.f50762b = false;
        return -1L;
    }

    public final void e() {
        this.f50772l++;
    }

    public final void f(int i10) {
        this.f50770j = i10;
    }

    public final void g(boolean z10) {
        this.f50762b = z10;
    }

    public final boolean h() {
        if (this.f50770j != -1 && d() >= this.f50767g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f50762b) {
            long d10 = d();
            long j10 = d10 - this.f50765e;
            this.f50766f = j10;
            this.f50767g = j10;
            this.f50768h = d10 - this.f50769i;
            this.f50770j = this.f50771k;
            this.f50762b = true;
        }
    }

    public final void j() {
        if (this.f50762b) {
            long d10 = d();
            this.f50765e = d10 - this.f50766f;
            this.f50769i = d10 - this.f50768h;
            this.f50766f = 0L;
            this.f50767g = 0L;
            this.f50768h = -1L;
            this.f50770j = -1;
            this.f50762b = false;
        }
    }
}
