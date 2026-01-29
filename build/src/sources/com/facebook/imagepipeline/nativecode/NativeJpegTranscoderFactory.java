package com.facebook.imagepipeline.nativecode;
@o8.d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeJpegTranscoderFactory implements za.d {

    /* renamed from: a  reason: collision with root package name */
    private final int f11663a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11664b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f11665c;

    @o8.d
    public NativeJpegTranscoderFactory(int i10, boolean z10, boolean z11) {
        this.f11663a = i10;
        this.f11664b = z10;
        this.f11665c = z11;
    }

    @Override // za.d
    @o8.d
    public za.c createImageTranscoder(fa.c cVar, boolean z10) {
        if (cVar != fa.b.f24868b) {
            return null;
        }
        return new NativeJpegTranscoder(z10, this.f11663a, this.f11664b, this.f11665c);
    }
}
