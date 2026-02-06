package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum i9 implements u1 {
    UNKNOWN_CONTOURS(0),
    NO_CONTOURS(1),
    ALL_CONTOURS(2);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f44344d;

    i9(int i10) {
        this.f44344d = i10;
    }

    @Override // pg.u1
    public final int zza() {
        return this.f44344d;
    }
}
