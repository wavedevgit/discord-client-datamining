package net.time4j.tz;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements kt.f {

    /* renamed from: d  reason: collision with root package name */
    private final long f40759d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40760e;

    private i(long j10, int i10) {
        this.f40759d = j10;
        this.f40760e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static kt.f b(long j10, int i10) {
        int i11;
        if (i10 == 0) {
            j10--;
        }
        if (i10 == 0) {
            i11 = 999999999;
        } else {
            i11 = i10 - 1;
        }
        return new i(j10, i11);
    }

    @Override // kt.f
    public int a() {
        return this.f40760e;
    }

    @Override // kt.f
    public long p() {
        return this.f40759d;
    }
}
