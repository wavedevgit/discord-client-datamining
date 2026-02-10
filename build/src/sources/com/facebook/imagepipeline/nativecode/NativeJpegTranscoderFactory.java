package com.facebook.imagepipeline.nativecode;
@p8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeJpegTranscoderFactory implements ab.d {

    /* renamed from: a  reason: collision with root package name */
    private final int f11261a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11262b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f11263c;

    @p8.d
    public NativeJpegTranscoderFactory(int i10, boolean z10, boolean z11) {
        this.f11261a = i10;
        this.f11262b = z10;
        this.f11263c = z11;
    }

    @Override // ab.d
    @p8.d
    public ab.c createImageTranscoder(ga.c cVar, boolean z10) {
        if (cVar != ga.b.f25382b) {
            return null;
        }
        return new NativeJpegTranscoder(z10, this.f11261a, this.f11262b, this.f11263c);
    }
}
