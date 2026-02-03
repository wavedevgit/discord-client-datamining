package kotlinx.serialization.internal;

import bt.b3;
import bt.f2;
import jr.e0;
import jr.f0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final l f36185c = new l();

    private l() {
        super(zs.a.z(e0.f32165e));
    }

    @Override // bt.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((f0) obj).r());
    }

    @Override // bt.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((f0) obj).r());
    }

    @Override // bt.f2
    public /* bridge */ /* synthetic */ Object r() {
        return f0.b(w());
    }

    @Override // bt.f2
    public /* bridge */ /* synthetic */ void u(CompositeEncoder compositeEncoder, Object obj, int i10) {
        z(compositeEncoder, ((f0) obj).r(), i10);
    }

    protected int v(short[] collectionSize) {
        Intrinsics.checkNotNullParameter(collectionSize, "$this$collectionSize");
        return f0.k(collectionSize);
    }

    protected short[] w() {
        return f0.c(0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bt.s, bt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, b3 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(e0.d(decoder.r(getDescriptor(), i10).s()));
    }

    protected b3 y(short[] toBuilder) {
        Intrinsics.checkNotNullParameter(toBuilder, "$this$toBuilder");
        return new b3(toBuilder, null);
    }

    protected void z(CompositeEncoder encoder, short[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.e(getDescriptor(), i11).p(f0.i(content, i11));
        }
    }
}
