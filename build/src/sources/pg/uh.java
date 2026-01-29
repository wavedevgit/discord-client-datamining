package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum uh implements x1 {
    TYPE_UNKNOWN(0),
    LATIN(1),
    LATIN_AND_CHINESE(2),
    LATIN_AND_DEVANAGARI(3),
    LATIN_AND_JAPANESE(4),
    LATIN_AND_KOREAN(5),
    CREDIT_CARD(6),
    DOCUMENT(7),
    PIXEL_AI(8);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f45771d;

    uh(int i10) {
        this.f45771d = i10;
    }

    @Override // pg.x1
    public final int zza() {
        return this.f45771d;
    }
}
