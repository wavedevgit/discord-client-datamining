package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum we implements n2 {
    TYPE_UNKNOWN(0),
    TYPE_THIN(1),
    TYPE_THICK(2),
    TYPE_GMV(3);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f38762d;

    we(int i10) {
        this.f38762d = i10;
    }

    @Override // mg.n2
    public final int zza() {
        return this.f38762d;
    }
}
