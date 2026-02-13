package kotlinx.serialization.internal;

import as.b0;
import as.c0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import tt.f2;
import tt.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final k f35666c = new k();

    private k() {
        super(rt.a.x(b0.f6054e));
    }

    @Override // tt.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((c0) obj).t());
    }

    @Override // tt.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((c0) obj).t());
    }

    @Override // tt.f2
    public /* bridge */ /* synthetic */ Object r() {
        return c0.b(w());
    }

    @Override // tt.f2
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
    @Override // tt.s, tt.a
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
            encoder.e(getDescriptor(), i11).l(c0.j(content, i11));
        }
    }
}
