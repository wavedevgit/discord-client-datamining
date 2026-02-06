package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum l9 implements u1 {
    UNKNOWN_PERFORMANCE(0),
    FAST(1),
    ACCURATE(2);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f44446d;

    l9(int i10) {
        this.f44446d = i10;
    }

    @Override // pg.u1
    public final int zza() {
        return this.f44446d;
    }
}
