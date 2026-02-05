package za;

import kotlin.jvm.internal.Intrinsics;
import na.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements d {

    /* renamed from: a  reason: collision with root package name */
    private final int f55284a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55285b;

    /* renamed from: c  reason: collision with root package name */
    private final d f55286c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f55287d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f55288e;

    public f(int i10, boolean z10, d dVar, Integer num, boolean z11) {
        this.f55284a = i10;
        this.f55285b = z10;
        this.f55286c = dVar;
        this.f55287d = num;
        this.f55288e = z11;
    }

    private final c a(fa.c cVar, boolean z10) {
        d dVar = this.f55286c;
        if (dVar != null) {
            return dVar.createImageTranscoder(cVar, z10);
        }
        return null;
    }

    private final c b(fa.c cVar, boolean z10) {
        Integer num = this.f55287d;
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
        return com.facebook.imagepipeline.nativecode.d.a(this.f55284a, this.f55285b, this.f55288e).createImageTranscoder(cVar, z10);
    }

    private final c d(fa.c cVar, boolean z10) {
        c createImageTranscoder = new h(this.f55284a).createImageTranscoder(cVar, z10);
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
