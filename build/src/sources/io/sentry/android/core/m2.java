package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f27529a;

    /* renamed from: b  reason: collision with root package name */
    private int f27530b;

    /* renamed from: c  reason: collision with root package name */
    private long f27531c;

    /* renamed from: d  reason: collision with root package name */
    private long f27532d;

    /* renamed from: e  reason: collision with root package name */
    private long f27533e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f27533e += j10;
        if (z11) {
            this.f27532d += j11;
            this.f27530b++;
        } else if (z10) {
            this.f27531c += j11;
            this.f27529a++;
        }
    }

    public int b() {
        return this.f27530b;
    }

    public long c() {
        return this.f27532d;
    }

    public int d() {
        return this.f27529a;
    }

    public long e() {
        return this.f27531c;
    }

    public int f() {
        return this.f27529a + this.f27530b;
    }

    public long g() {
        return this.f27533e;
    }
}
