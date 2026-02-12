package w9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final y9.b f52369a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52370b;

    /* renamed from: c  reason: collision with root package name */
    private long f52371c;

    /* renamed from: d  reason: collision with root package name */
    private long f52372d;

    /* renamed from: e  reason: collision with root package name */
    private long f52373e;

    /* renamed from: f  reason: collision with root package name */
    private long f52374f;

    /* renamed from: g  reason: collision with root package name */
    private long f52375g;

    /* renamed from: h  reason: collision with root package name */
    private long f52376h;

    /* renamed from: i  reason: collision with root package name */
    private long f52377i;

    /* renamed from: j  reason: collision with root package name */
    private int f52378j;

    /* renamed from: k  reason: collision with root package name */
    private int f52379k;

    /* renamed from: l  reason: collision with root package name */
    private int f52380l;

    public c(y9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f52369a = frameScheduler;
        this.f52371c = 8L;
        this.f52378j = -1;
        this.f52379k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f52370b) {
            max = (d10 - this.f52374f) + this.f52372d;
        } else {
            max = Math.max(this.f52376h, 0L);
        }
        int b10 = this.f52369a.b(max, this.f52376h);
        this.f52376h = max;
        return b10;
    }

    public final boolean b() {
        return this.f52370b;
    }

    public final long c() {
        if (!this.f52370b) {
            return -1L;
        }
        long a10 = this.f52369a.a(d() - this.f52374f);
        if (a10 != -1) {
            long j10 = a10 + this.f52371c;
            this.f52375g = this.f52374f + j10;
            return j10;
        }
        this.f52370b = false;
        return -1L;
    }

    public final void e() {
        this.f52380l++;
    }

    public final void f(int i10) {
        this.f52378j = i10;
    }

    public final void g(boolean z10) {
        this.f52370b = z10;
    }

    public final boolean h() {
        if (this.f52378j != -1 && d() >= this.f52375g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f52370b) {
            long d10 = d();
            long j10 = d10 - this.f52373e;
            this.f52374f = j10;
            this.f52375g = j10;
            this.f52376h = d10 - this.f52377i;
            this.f52378j = this.f52379k;
            this.f52370b = true;
        }
    }

    public final void j() {
        if (this.f52370b) {
            long d10 = d();
            this.f52373e = d10 - this.f52374f;
            this.f52377i = d10 - this.f52376h;
            this.f52374f = 0L;
            this.f52375g = 0L;
            this.f52376h = -1L;
            this.f52378j = -1;
            this.f52370b = false;
        }
    }
}
