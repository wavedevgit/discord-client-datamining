package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum k9 implements u1 {
    UNKNOWN_LANDMARKS(0),
    NO_LANDMARKS(1),
    ALL_LANDMARKS(2);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f44416d;

    k9(int i10) {
        this.f44416d = i10;
    }

    @Override // pg.u1
    public final int zza() {
        return this.f44416d;
    }
}
