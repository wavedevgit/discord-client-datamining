package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f27281a;

    /* renamed from: b  reason: collision with root package name */
    private int f27282b;

    /* renamed from: c  reason: collision with root package name */
    private long f27283c;

    /* renamed from: d  reason: collision with root package name */
    private long f27284d;

    /* renamed from: e  reason: collision with root package name */
    private long f27285e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f27285e += j10;
        if (z11) {
            this.f27284d += j11;
            this.f27282b++;
        } else if (z10) {
            this.f27283c += j11;
            this.f27281a++;
        }
    }

    public int b() {
        return this.f27282b;
    }

    public long c() {
        return this.f27284d;
    }

    public int d() {
        return this.f27281a;
    }

    public long e() {
        return this.f27283c;
    }

    public int f() {
        return this.f27281a + this.f27282b;
    }

    public long g() {
        return this.f27285e;
    }
}
