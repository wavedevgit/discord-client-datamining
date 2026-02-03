package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f28718a;

    /* renamed from: b  reason: collision with root package name */
    private int f28719b;

    /* renamed from: c  reason: collision with root package name */
    private long f28720c;

    /* renamed from: d  reason: collision with root package name */
    private long f28721d;

    /* renamed from: e  reason: collision with root package name */
    private long f28722e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f28722e += j10;
        if (z11) {
            this.f28721d += j11;
            this.f28719b++;
        } else if (z10) {
            this.f28720c += j11;
            this.f28718a++;
        }
    }

    public int b() {
        return this.f28719b;
    }

    public long c() {
        return this.f28721d;
    }

    public int d() {
        return this.f28718a;
    }

    public long e() {
        return this.f28720c;
    }

    public int f() {
        return this.f28718a + this.f28719b;
    }

    public long g() {
        return this.f28722e;
    }
}
