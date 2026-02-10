package w9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final y9.b f53339a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53340b;

    /* renamed from: c  reason: collision with root package name */
    private long f53341c;

    /* renamed from: d  reason: collision with root package name */
    private long f53342d;

    /* renamed from: e  reason: collision with root package name */
    private long f53343e;

    /* renamed from: f  reason: collision with root package name */
    private long f53344f;

    /* renamed from: g  reason: collision with root package name */
    private long f53345g;

    /* renamed from: h  reason: collision with root package name */
    private long f53346h;

    /* renamed from: i  reason: collision with root package name */
    private long f53347i;

    /* renamed from: j  reason: collision with root package name */
    private int f53348j;

    /* renamed from: k  reason: collision with root package name */
    private int f53349k;

    /* renamed from: l  reason: collision with root package name */
    private int f53350l;

    public c(y9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f53339a = frameScheduler;
        this.f53341c = 8L;
        this.f53348j = -1;
        this.f53349k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f53340b) {
            max = (d10 - this.f53344f) + this.f53342d;
        } else {
            max = Math.max(this.f53346h, 0L);
        }
        int b10 = this.f53339a.b(max, this.f53346h);
        this.f53346h = max;
        return b10;
    }

    public final boolean b() {
        return this.f53340b;
    }

    public final long c() {
        if (!this.f53340b) {
            return -1L;
        }
        long a10 = this.f53339a.a(d() - this.f53344f);
        if (a10 != -1) {
            long j10 = a10 + this.f53341c;
            this.f53345g = this.f53344f + j10;
            return j10;
        }
        this.f53340b = false;
        return -1L;
    }

    public final void e() {
        this.f53350l++;
    }

    public final void f(int i10) {
        this.f53348j = i10;
    }

    public final void g(boolean z10) {
        this.f53340b = z10;
    }

    public final boolean h() {
        if (this.f53348j != -1 && d() >= this.f53345g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f53340b) {
            long d10 = d();
            long j10 = d10 - this.f53343e;
            this.f53344f = j10;
            this.f53345g = j10;
            this.f53346h = d10 - this.f53347i;
            this.f53348j = this.f53349k;
            this.f53340b = true;
        }
    }

    public final void j() {
        if (this.f53340b) {
            long d10 = d();
            this.f53343e = d10 - this.f53344f;
            this.f53347i = d10 - this.f53346h;
            this.f53344f = 0L;
            this.f53345g = 0L;
            this.f53346h = -1L;
            this.f53348j = -1;
            this.f53340b = false;
        }
    }
}
