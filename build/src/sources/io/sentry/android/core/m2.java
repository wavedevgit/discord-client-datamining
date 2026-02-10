package io.sentry.android.core;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m2 {

    /* renamed from: a  reason: collision with root package name */
    private int f28464a;

    /* renamed from: b  reason: collision with root package name */
    private int f28465b;

    /* renamed from: c  reason: collision with root package name */
    private long f28466c;

    /* renamed from: d  reason: collision with root package name */
    private long f28467d;

    /* renamed from: e  reason: collision with root package name */
    private long f28468e;

    public void a(long j10, long j11, boolean z10, boolean z11) {
        this.f28468e += j10;
        if (z11) {
            this.f28467d += j11;
            this.f28465b++;
        } else if (z10) {
            this.f28466c += j11;
            this.f28464a++;
        }
    }

    public int b() {
        return this.f28465b;
    }

    public long c() {
        return this.f28467d;
    }

    public int d() {
        return this.f28464a;
    }

    public long e() {
        return this.f28466c;
    }

    public int f() {
        return this.f28464a + this.f28465b;
    }

    public long g() {
        return this.f28468e;
    }
}
