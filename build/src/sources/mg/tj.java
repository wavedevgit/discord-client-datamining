package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum tj implements n2 {
    UNRECOGNIZED(0),
    CODE_128(1),
    CODE_39(2),
    CODE_93(3),
    CODABAR(4),
    DATA_MATRIX(5),
    EAN_13(6),
    EAN_8(7),
    ITF(8),
    QR_CODE(9),
    UPC_A(10),
    UPC_E(11),
    PDF417(12),
    AZTEC(13),
    DATABAR(14),
    TEZ_CODE(16);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f38701d;

    tj(int i10) {
        this.f38701d = i10;
    }

    @Override // mg.n2
    public final int zza() {
        return this.f38701d;
    }
}
