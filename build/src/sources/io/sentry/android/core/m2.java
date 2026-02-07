package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f27329a;

    /* renamed from: b  reason: collision with root package name */
    private int f27330b;

    /* renamed from: c  reason: collision with root package name */
    private long f27331c;

    /* renamed from: d  reason: collision with root package name */
    private long f27332d;

    /* renamed from: e  reason: collision with root package name */
    private long f27333e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f27333e += j10;
        if (z11) {
            this.f27332d += j11;
            this.f27330b++;
        } else if (z10) {
            this.f27331c += j11;
            this.f27329a++;
        }
    }

    public int b() {
        return this.f27330b;
    }

    public long c() {
        return this.f27332d;
    }

    public int d() {
        return this.f27329a;
    }

    public long e() {
        return this.f27331c;
    }

    public int f() {
        return this.f27329a + this.f27330b;
    }

    public long g() {
        return this.f27333e;
    }
}
