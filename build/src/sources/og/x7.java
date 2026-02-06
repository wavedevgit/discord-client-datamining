package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum x7 implements h {
    SOURCE_UNKNOWN(0),
    BITMAP(1),
    BYTEARRAY(2),
    BYTEBUFFER(3),
    FILEPATH(4),
    ANDROID_MEDIA_IMAGE(5);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f42697d;

    x7(int i10) {
        this.f42697d = i10;
    }

    @Override // og.h
    public final int zza() {
        return this.f42697d;
    }
}
