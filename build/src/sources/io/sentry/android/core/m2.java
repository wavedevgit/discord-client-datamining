package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f29033a;

    /* renamed from: b  reason: collision with root package name */
    private int f29034b;

    /* renamed from: c  reason: collision with root package name */
    private long f29035c;

    /* renamed from: d  reason: collision with root package name */
    private long f29036d;

    /* renamed from: e  reason: collision with root package name */
    private long f29037e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f29037e += j10;
        if (z11) {
            this.f29036d += j11;
            this.f29034b++;
        } else if (z10) {
            this.f29035c += j11;
            this.f29033a++;
        }
    }

    public int b() {
        return this.f29034b;
    }

    public long c() {
        return this.f29036d;
    }

    public int d() {
        return this.f29033a;
    }

    public long e() {
        return this.f29035c;
    }

    public int f() {
        return this.f29033a + this.f29034b;
    }

    public long g() {
        return this.f29037e;
    }
}
