package kotlinx.serialization.internal;

import gt.f2;
import gt.x2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import or.a0;
import or.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final j f35097c = new j();

    private j() {
        super(et.a.I(z.f44252e));
    }

    @Override // gt.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((a0) obj).s());
    }

    @Override // gt.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((a0) obj).s());
    }

    @Override // gt.f2
    public /* bridge */ /* synthetic */ Object r() {
        return a0.b(w());
    }

    @Override // gt.f2
    public /* bridge */ /* synthetic */ void u(CompositeEncoder compositeEncoder, Object obj, int i10) {
        z(compositeEncoder, ((a0) obj).s(), i10);
    }

    protected int v(int[] collectionSize) {
        Intrinsics.checkNotNullParameter(collectionSize, "$this$collectionSize");
        return a0.l(collectionSize);
    }

    protected int[] w() {
        return a0.c(0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.s, gt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, x2 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(z.d(decoder.r(getDescriptor(), i10).h()));
    }

    protected x2 y(int[] toBuilder) {
        Intrinsics.checkNotNullParameter(toBuilder, "$this$toBuilder");
        return new x2(toBuilder, null);
    }

    protected void z(CompositeEncoder encoder, int[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.e(getDescriptor(), i11).B(a0.i(content, i11));
        }
    }
}
