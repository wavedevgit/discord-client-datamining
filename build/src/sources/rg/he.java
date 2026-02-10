package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum he implements x1 {
    TYPE_UNKNOWN(0),
    TYPE_THIN(1),
    TYPE_THICK(2),
    TYPE_GMV(3);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f48253d;

    he(int i10) {
        this.f48253d = i10;
    }

    @Override // rg.x1
    public final int zza() {
        return this.f48253d;
    }
}
