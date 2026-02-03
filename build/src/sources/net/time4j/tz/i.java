package net.time4j.tz;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements ht.f {

    /* renamed from: d  reason: collision with root package name */
    private final long f40720d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40721e;

    private i(long j10, int i10) {
        this.f40720d = j10;
        this.f40721e = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ht.f b(long j10, int i10) {
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

    @Override // ht.f
    public int a() {
        return this.f40721e;
    }

    @Override // ht.f
    public long o() {
        return this.f40720d;
    }
}
