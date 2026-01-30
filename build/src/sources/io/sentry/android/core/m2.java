package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f29152a;

    /* renamed from: b  reason: collision with root package name */
    private int f29153b;

    /* renamed from: c  reason: collision with root package name */
    private long f29154c;

    /* renamed from: d  reason: collision with root package name */
    private long f29155d;

    /* renamed from: e  reason: collision with root package name */
    private long f29156e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f29156e += j10;
        if (z11) {
            this.f29155d += j11;
            this.f29153b++;
        } else if (z10) {
            this.f29154c += j11;
            this.f29152a++;
        }
    }

    public int b() {
        return this.f29153b;
    }

    public long c() {
        return this.f29155d;
    }

    public int d() {
        return this.f29152a;
    }

    public long e() {
        return this.f29154c;
    }

    public int f() {
        return this.f29152a + this.f29153b;
    }

    public long g() {
        return this.f29156e;
    }
}
