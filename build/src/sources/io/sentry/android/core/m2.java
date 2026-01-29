package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f29136a;

    /* renamed from: b  reason: collision with root package name */
    private int f29137b;

    /* renamed from: c  reason: collision with root package name */
    private long f29138c;

    /* renamed from: d  reason: collision with root package name */
    private long f29139d;

    /* renamed from: e  reason: collision with root package name */
    private long f29140e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f29140e += j10;
        if (z11) {
            this.f29139d += j11;
            this.f29137b++;
        } else if (z10) {
            this.f29138c += j11;
            this.f29136a++;
        }
    }

    public int b() {
        return this.f29137b;
    }

    public long c() {
        return this.f29139d;
    }

    public int d() {
        return this.f29136a;
    }

    public long e() {
        return this.f29138c;
    }

    public int f() {
        return this.f29136a + this.f29137b;
    }

    public long g() {
        return this.f29140e;
    }
}
