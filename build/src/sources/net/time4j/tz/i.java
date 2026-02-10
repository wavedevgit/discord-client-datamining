package net.time4j.tz;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements qt.f {

    /* renamed from: d  reason: collision with root package name */
    private final long f38714d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38715e;

    private i(long j10, int i10) {
        this.f38714d = j10;
        this.f38715e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static qt.f b(long j10, int i10) {
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

    @Override // qt.f
    public int a() {
        return this.f38715e;
    }

    @Override // qt.f
    public long o() {
        return this.f38714d;
    }
}
