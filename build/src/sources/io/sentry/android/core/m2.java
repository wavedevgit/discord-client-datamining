package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f29079a;

    /* renamed from: b  reason: collision with root package name */
    private int f29080b;

    /* renamed from: c  reason: collision with root package name */
    private long f29081c;

    /* renamed from: d  reason: collision with root package name */
    private long f29082d;

    /* renamed from: e  reason: collision with root package name */
    private long f29083e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f29083e += j10;
        if (z11) {
            this.f29082d += j11;
            this.f29080b++;
        } else if (z10) {
            this.f29081c += j11;
            this.f29079a++;
        }
    }

    public int b() {
        return this.f29080b;
    }

    public long c() {
        return this.f29082d;
    }

    public int d() {
        return this.f29079a;
    }

    public long e() {
        return this.f29081c;
    }

    public int f() {
        return this.f29079a + this.f29080b;
    }

    public long g() {
        return this.f29083e;
    }
}
