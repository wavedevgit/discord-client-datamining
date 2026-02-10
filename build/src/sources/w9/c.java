package w9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final y9.b f52368a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52369b;

    /* renamed from: c  reason: collision with root package name */
    private long f52370c;

    /* renamed from: d  reason: collision with root package name */
    private long f52371d;

    /* renamed from: e  reason: collision with root package name */
    private long f52372e;

    /* renamed from: f  reason: collision with root package name */
    private long f52373f;

    /* renamed from: g  reason: collision with root package name */
    private long f52374g;

    /* renamed from: h  reason: collision with root package name */
    private long f52375h;

    /* renamed from: i  reason: collision with root package name */
    private long f52376i;

    /* renamed from: j  reason: collision with root package name */
    private int f52377j;

    /* renamed from: k  reason: collision with root package name */
    private int f52378k;

    /* renamed from: l  reason: collision with root package name */
    private int f52379l;

    public c(y9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f52368a = frameScheduler;
        this.f52370c = 8L;
        this.f52377j = -1;
        this.f52378k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f52369b) {
            max = (d10 - this.f52373f) + this.f52371d;
        } else {
            max = Math.max(this.f52375h, 0L);
        }
        int b10 = this.f52368a.b(max, this.f52375h);
        this.f52375h = max;
        return b10;
    }

    public final boolean b() {
        return this.f52369b;
    }

    public final long c() {
        if (!this.f52369b) {
            return -1L;
        }
        long a10 = this.f52368a.a(d() - this.f52373f);
        if (a10 != -1) {
            long j10 = a10 + this.f52370c;
            this.f52374g = this.f52373f + j10;
            return j10;
        }
        this.f52369b = false;
        return -1L;
    }

    public final void e() {
        this.f52379l++;
    }

    public final void f(int i10) {
        this.f52377j = i10;
    }

    public final void g(boolean z10) {
        this.f52369b = z10;
    }

    public final boolean h() {
        if (this.f52377j != -1 && d() >= this.f52374g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f52369b) {
            long d10 = d();
            long j10 = d10 - this.f52372e;
            this.f52373f = j10;
            this.f52374g = j10;
            this.f52375h = d10 - this.f52376i;
            this.f52377j = this.f52378k;
            this.f52369b = true;
        }
    }

    public final void j() {
        if (this.f52369b) {
            long d10 = d();
            this.f52372e = d10 - this.f52373f;
            this.f52376i = d10 - this.f52375h;
            this.f52373f = 0L;
            this.f52374g = 0L;
            this.f52375h = -1L;
            this.f52377j = -1;
            this.f52369b = false;
        }
    }
}
