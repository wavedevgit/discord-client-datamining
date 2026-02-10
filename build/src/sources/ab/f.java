package ab;

import kotlin.jvm.internal.Intrinsics;
import oa.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements d {

    /* renamed from: a  reason: collision with root package name */
    private final int f531a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f532b;

    /* renamed from: c  reason: collision with root package name */
    private final d f533c;

    /* renamed from: d  reason: collision with root package name */
    private final Integer f534d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f535e;

    public f(int i10, boolean z10, d dVar, Integer num, boolean z11) {
        this.f531a = i10;
        this.f532b = z10;
        this.f533c = dVar;
        this.f534d = num;
        this.f535e = z11;
    }

    private final c a(ga.c cVar, boolean z10) {
        d dVar = this.f533c;
        if (dVar != null) {
            return dVar.createImageTranscoder(cVar, z10);
        }
        return null;
    }

    private final c b(ga.c cVar, boolean z10) {
        Integer num = this.f534d;
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

    private final c c(ga.c cVar, boolean z10) {
        return com.facebook.imagepipeline.nativecode.d.a(this.f531a, this.f532b, this.f535e).createImageTranscoder(cVar, z10);
    }

    private final c d(ga.c cVar, boolean z10) {
        c createImageTranscoder = new h(this.f531a).createImageTranscoder(cVar, z10);
        Intrinsics.checkNotNullExpressionValue(createImageTranscoder, "createImageTranscoder(...)");
        return createImageTranscoder;
    }

    @Override // ab.d
    public c createImageTranscoder(ga.c imageFormat, boolean z10) {
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
