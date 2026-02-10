package kotlinx.serialization.internal;

import as.a0;
import as.z;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import tt.f2;
import tt.x2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final j f35096c = new j();

    private j() {
        super(rt.a.w(z.f6102e));
    }

    @Override // tt.a
    public /* bridge */ /* synthetic */ int e(Object obj) {
        return v(((a0) obj).t());
    }

    @Override // tt.a
    public /* bridge */ /* synthetic */ Object k(Object obj) {
        return y(((a0) obj).t());
    }

    @Override // tt.f2
    public /* bridge */ /* synthetic */ Object r() {
        return a0.b(w());
    }

    @Override // tt.f2
    public /* bridge */ /* synthetic */ void u(CompositeEncoder compositeEncoder, Object obj, int i10) {
        z(compositeEncoder, ((a0) obj).t(), i10);
    }

    protected int v(int[] collectionSize) {
        Intrinsics.checkNotNullParameter(collectionSize, "$this$collectionSize");
        return a0.l(collectionSize);
    }

    protected int[] w() {
        return a0.c(0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tt.s, tt.a
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
            encoder.e(getDescriptor(), i11).A(a0.j(content, i11));
        }
    }
}
