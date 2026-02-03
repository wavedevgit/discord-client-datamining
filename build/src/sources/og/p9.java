package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum p9 implements u1 {
    UNKNOWN_FORMAT(0),
    NV16(1),
    NV21(2),
    YV12(3),
    YUV_420_888(7),
    JPEG(8),
    BITMAP(4),
    CM_SAMPLE_BUFFER_REF(5),
    UI_IMAGE(6),
    CV_PIXEL_BUFFER_REF(9);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f43365d;

    p9(int i10) {
        this.f43365d = i10;
    }

    @Override // og.u1
    public final int zza() {
        return this.f43365d;
    }
}
