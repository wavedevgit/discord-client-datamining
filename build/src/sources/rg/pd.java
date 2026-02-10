package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum pd implements x1 {
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
    private final int f48619d;

    pd(int i10) {
        this.f48619d = i10;
    }

    @Override // rg.x1
    public final int zza() {
        return this.f48619d;
    }
}
