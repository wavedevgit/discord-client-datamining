package w9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final y9.b f52937a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52938b;

    /* renamed from: c  reason: collision with root package name */
    private long f52939c;

    /* renamed from: d  reason: collision with root package name */
    private long f52940d;

    /* renamed from: e  reason: collision with root package name */
    private long f52941e;

    /* renamed from: f  reason: collision with root package name */
    private long f52942f;

    /* renamed from: g  reason: collision with root package name */
    private long f52943g;

    /* renamed from: h  reason: collision with root package name */
    private long f52944h;

    /* renamed from: i  reason: collision with root package name */
    private long f52945i;

    /* renamed from: j  reason: collision with root package name */
    private int f52946j;

    /* renamed from: k  reason: collision with root package name */
    private int f52947k;

    /* renamed from: l  reason: collision with root package name */
    private int f52948l;

    public c(y9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f52937a = frameScheduler;
        this.f52939c = 8L;
        this.f52946j = -1;
        this.f52947k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f52938b) {
            max = (d10 - this.f52942f) + this.f52940d;
        } else {
            max = Math.max(this.f52944h, 0L);
        }
        int b10 = this.f52937a.b(max, this.f52944h);
        this.f52944h = max;
        return b10;
    }

    public final boolean b() {
        return this.f52938b;
    }

    public final long c() {
        if (!this.f52938b) {
            return -1L;
        }
        long a10 = this.f52937a.a(d() - this.f52942f);
        if (a10 != -1) {
            long j10 = a10 + this.f52939c;
            this.f52943g = this.f52942f + j10;
            return j10;
        }
        this.f52938b = false;
        return -1L;
    }

    public final void e() {
        this.f52948l++;
    }

    public final void f(int i10) {
        this.f52946j = i10;
    }

    public final void g(boolean z10) {
        this.f52938b = z10;
    }

    public final boolean h() {
        if (this.f52946j != -1 && d() >= this.f52943g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f52938b) {
            long d10 = d();
            long j10 = d10 - this.f52941e;
            this.f52942f = j10;
            this.f52943g = j10;
            this.f52944h = d10 - this.f52945i;
            this.f52946j = this.f52947k;
            this.f52938b = true;
        }
    }

    public final void j() {
        if (this.f52938b) {
            long d10 = d();
            this.f52941e = d10 - this.f52942f;
            this.f52945i = d10 - this.f52944h;
            this.f52942f = 0L;
            this.f52943g = 0L;
            this.f52944h = -1L;
            this.f52946j = -1;
            this.f52938b = false;
        }
    }
}
