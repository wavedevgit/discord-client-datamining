package com.facebook.imagepipeline.nativecode;
@p8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeJpegTranscoderFactory implements ab.d {

    /* renamed from: a  reason: collision with root package name */
    private final int f10684a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f10685b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f10686c;

    @p8.d
    public NativeJpegTranscoderFactory(int i10, boolean z10, boolean z11) {
        this.f10684a = i10;
        this.f10685b = z10;
        this.f10686c = z11;
    }

    @Override // ab.d
    @p8.d
    public ab.c createImageTranscoder(ga.c cVar, boolean z10) {
        if (cVar != ga.b.f24082b) {
            return null;
        }
        return new NativeJpegTranscoder(z10, this.f10684a, this.f10685b, this.f10686c);
    }
}
