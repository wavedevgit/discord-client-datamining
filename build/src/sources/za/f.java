package za;

import kotlin.jvm.internal.Intrinsics;
import na.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements d {

    /* renamed from: a  reason: collision with root package name */
    private final int f55412a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55413b;

    /* renamed from: c  reason: collision with root package name */
    private final d f55414c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f55415d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f55416e;

    public f(int i10, boolean z10, d dVar, Integer num, boolean z11) {
        this.f55412a = i10;
        this.f55413b = z10;
        this.f55414c = dVar;
        this.f55415d = num;
        this.f55416e = z11;
    }

    private final c a(fa.c cVar, boolean z10) {
        d dVar = this.f55414c;
        if (dVar != null) {
            return dVar.createImageTranscoder(cVar, z10);
        }
        return null;
    }

    private final c b(fa.c cVar, boolean z10) {
        Integer num = this.f55415d;
        if (num == null) {
            return null;
        }
        if (num != null && num.intValue() == 0) {
            return c(cVar, z10);
        }
        if (num != null && num.intValue() == 1) {
            return d(cVar, z10);
        }
        throw new IllegalArgumentException("Invalid ImageTranscoderType");
    }

    private final c c(fa.c cVar, boolean z10) {
        return com.facebook.imagepipeline.nativecode.d.a(this.f55412a, this.f55413b, this.f55416e).createImageTranscoder(cVar, z10);
    }

    private final c d(fa.c cVar, boolean z10) {
        c createImageTranscoder = new h(this.f55412a).createImageTranscoder(cVar, z10);
        Intrinsics.checkNotNullExpressionValue(createImageTranscoder, "createImageTranscoder(...)");
        return createImageTranscoder;
    }

    @Override // za.d
    public c createImageTranscoder(fa.c imageFormat, boolean z10) {
        Intrinsics.checkNotNullParameter(imageFormat, "imageFormat");
        c a10 = a(imageFormat, z10);
        if (a10 == null) {
            a10 = b(imageFormat, z10);
        }
        if (a10 == null && u.a()) {
            a10 = c(imageFormat, z10);
        }
        if (a10 == null) {
            return d(imageFormat, z10);
        }
        return a10;
    }
}
