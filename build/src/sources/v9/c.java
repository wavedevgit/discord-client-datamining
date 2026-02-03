package v9;

import android.os.SystemClock;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final x9.b f50885a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f50886b;

    /* renamed from: c  reason: collision with root package name */
    private long f50887c;

    /* renamed from: d  reason: collision with root package name */
    private long f50888d;

    /* renamed from: e  reason: collision with root package name */
    private long f50889e;

    /* renamed from: f  reason: collision with root package name */
    private long f50890f;

    /* renamed from: g  reason: collision with root package name */
    private long f50891g;

    /* renamed from: h  reason: collision with root package name */
    private long f50892h;

    /* renamed from: i  reason: collision with root package name */
    private long f50893i;

    /* renamed from: j  reason: collision with root package name */
    private int f50894j;

    /* renamed from: k  reason: collision with root package name */
    private int f50895k;

    /* renamed from: l  reason: collision with root package name */
    private int f50896l;

    public c(x9.b frameScheduler) {
        Intrinsics.checkNotNullParameter(frameScheduler, "frameScheduler");
        this.f50885a = frameScheduler;
        this.f50887c = 8L;
        this.f50894j = -1;
        this.f50895k = -1;
    }

    private final long d() {
        return SystemClock.uptimeMillis();
    }

    public final int a() {
        long max;
        long d10 = d();
        if (this.f50886b) {
            max = (d10 - this.f50890f) + this.f50888d;
        } else {
            max = Math.max(this.f50892h, 0L);
        }
        int b10 = this.f50885a.b(max, this.f50892h);
        this.f50892h = max;
        return b10;
    }

    public final boolean b() {
        return this.f50886b;
    }

    public final long c() {
        if (!this.f50886b) {
            return -1L;
        }
        long a10 = this.f50885a.a(d() - this.f50890f);
        if (a10 != -1) {
            long j10 = a10 + this.f50887c;
            this.f50891g = this.f50890f + j10;
            return j10;
        }
        this.f50886b = false;
        return -1L;
    }

    public final void e() {
        this.f50896l++;
    }

    public final void f(int i10) {
        this.f50894j = i10;
    }

    public final void g(boolean z10) {
        this.f50886b = z10;
    }

    public final boolean h() {
        if (this.f50894j != -1 && d() >= this.f50891g) {
            return true;
        }
        return false;
    }

    public final void i() {
        if (!this.f50886b) {
            long d10 = d();
            long j10 = d10 - this.f50889e;
            this.f50890f = j10;
            this.f50891g = j10;
            this.f50892h = d10 - this.f50893i;
            this.f50894j = this.f50895k;
            this.f50886b = true;
        }
    }

    public final void j() {
        if (this.f50886b) {
            long d10 = d();
            this.f50889e = d10 - this.f50890f;
            this.f50893i = d10 - this.f50892h;
            this.f50890f = 0L;
            this.f50891g = 0L;
            this.f50892h = -1L;
            this.f50894j = -1;
            this.f50886b = false;
        }
    }
}
