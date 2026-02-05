package net.time4j.tz;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements nt.f {

    /* renamed from: d  reason: collision with root package name */
    private final long f40219d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40220e;

    private i(long j10, int i10) {
        this.f40219d = j10;
        this.f40220e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static nt.f b(long j10, int i10) {
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

    @Override // nt.f
    public int a() {
        return this.f40220e;
    }

    @Override // nt.f
    public long q() {
        return this.f40219d;
    }
}
