package kotlinx.serialization.internal;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import kt.f2;
import kt.v2;
import rr.x;
import rr.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final i f34873c = new i();

    private i() {
        super(ht.a.H(x.f49225e));
    }

    @Override // kt.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((y) obj).t());
    }

    @Override // kt.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((y) obj).t());
    }

    @Override // kt.f2
    public /* bridge */ /* synthetic */ Object r() {
        return y.b(w());
    }

    @Override // kt.f2
    public /* bridge */ /* synthetic */ void u(CompositeEncoder compositeEncoder, Object obj, int i10) {
        z(compositeEncoder, ((y) obj).t(), i10);
    }

    protected int v(byte[] collectionSize) {
        Intrinsics.checkNotNullParameter(collectionSize, "$this$collectionSize");
        return y.l(collectionSize);
    }

    protected byte[] w() {
        return y.c(0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.s, kt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, v2 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(x.d(decoder.r(getDescriptor(), i10).H()));
    }

    protected v2 y(byte[] toBuilder) {
        Intrinsics.checkNotNullParameter(toBuilder, "$this$toBuilder");
        return new v2(toBuilder, null);
    }

    protected void z(CompositeEncoder encoder, byte[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.e(getDescriptor(), i11).g(y.i(content, i11));
        }
    }
}
