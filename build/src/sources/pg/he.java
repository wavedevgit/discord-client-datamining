package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum he implements x1 {
    TYPE_UNKNOWN(0),
    TYPE_THIN(1),
    TYPE_THICK(2),
    TYPE_GMV(3);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f45257d;

    he(int i10) {
        this.f45257d = i10;
    }

    @Override // pg.x1
    public final int zza() {
        return this.f45257d;
    }
}
