package kotlinx.serialization.internal;

import at.f2;
import at.z2;
import ir.b0;
import ir.c0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final k f36408c = new k();

    private k() {
        super(ys.a.y(b0.f31091e));
    }

    @Override // at.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((c0) obj).r());
    }

    @Override // at.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((c0) obj).r());
    }

    @Override // at.f2
    public /* bridge */ /* synthetic */ Object r() {
        return c0.b(w());
    }

    @Override // at.f2
    public /* bridge */ /* synthetic */ void u(CompositeEncoder compositeEncoder, Object obj, int i10) {
        z(compositeEncoder, ((c0) obj).r(), i10);
    }

    protected int v(long[] collectionSize) {
        Intrinsics.checkNotNullParameter(collectionSize, "$this$collectionSize");
        return c0.k(collectionSize);
    }

    protected long[] w() {
        return c0.c(0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s, at.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, z2 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(b0.d(decoder.r(getDescriptor(), i10).l()));
    }

    protected z2 y(long[] toBuilder) {
        Intrinsics.checkNotNullParameter(toBuilder, "$this$toBuilder");
        return new z2(toBuilder, null);
    }

    protected void z(CompositeEncoder encoder, long[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.e(getDescriptor(), i11).m(c0.i(content, i11));
        }
    }
}
