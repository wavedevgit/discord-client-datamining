package kotlinx.serialization.internal;

import jt.f2;
import jt.z2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import qr.b0;
import qr.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final k f35118c = new k();

    private k() {
        super(gt.a.J(b0.f48016e));
    }

    @Override // jt.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((c0) obj).t());
    }

    @Override // jt.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((c0) obj).t());
    }

    @Override // jt.f2
    public /* bridge */ /* synthetic */ Object r() {
        return c0.b(w());
    }

    @Override // jt.f2
    public /* bridge */ /* synthetic */ void u(CompositeEncoder compositeEncoder, Object obj, int i10) {
        z(compositeEncoder, ((c0) obj).t(), i10);
    }

    protected int v(long[] collectionSize) {
        Intrinsics.checkNotNullParameter(collectionSize, "$this$collectionSize");
        return c0.l(collectionSize);
    }

    protected long[] w() {
        return c0.c(0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.s, jt.a
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
            encoder.e(getDescriptor(), i11).k(c0.i(content, i11));
        }
    }
}
