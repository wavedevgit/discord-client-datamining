package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f28137a;

    /* renamed from: b  reason: collision with root package name */
    private int f28138b;

    /* renamed from: c  reason: collision with root package name */
    private long f28139c;

    /* renamed from: d  reason: collision with root package name */
    private long f28140d;

    /* renamed from: e  reason: collision with root package name */
    private long f28141e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f28141e += j10;
        if (z11) {
            this.f28140d += j11;
            this.f28138b++;
        } else if (z10) {
            this.f28139c += j11;
            this.f28137a++;
        }
    }

    public int b() {
        return this.f28138b;
    }

    public long c() {
        return this.f28140d;
    }

    public int d() {
        return this.f28137a;
    }

    public long e() {
        return this.f28139c;
    }

    public int f() {
        return this.f28137a + this.f28138b;
    }

    public long g() {
        return this.f28141e;
    }
}
