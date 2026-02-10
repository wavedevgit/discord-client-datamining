package kotlinx.serialization.internal;

import as.e0;
import as.f0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import tt.b3;
import tt.f2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final l f35098c = new l();

    private l() {
        super(rt.a.y(e0.f6065e));
    }

    @Override // tt.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((f0) obj).t());
    }

    @Override // tt.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((f0) obj).t());
    }

    @Override // tt.f2
    public /* bridge */ /* synthetic */ Object r() {
        return f0.b(w());
    }

    @Override // tt.f2
    public /* bridge */ /* synthetic */ void u(CompositeEncoder compositeEncoder, Object obj, int i10) {
        z(compositeEncoder, ((f0) obj).t(), i10);
    }

    protected int v(short[] collectionSize) {
        Intrinsics.checkNotNullParameter(collectionSize, "$this$collectionSize");
        return f0.l(collectionSize);
    }

    protected short[] w() {
        return f0.c(0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tt.s, tt.a
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
            encoder.e(getDescriptor(), i11).q(f0.j(content, i11));
        }
    }
}
