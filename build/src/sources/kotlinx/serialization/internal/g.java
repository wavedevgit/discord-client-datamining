package kotlinx.serialization.internal;

import at.f2;
import at.y0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final g f36404c = new g();

    private g() {
        super(ys.a.H(LongCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.a
    /* renamed from: v */
    public int e(long[] jArr) {
        Intrinsics.checkNotNullParameter(jArr, "<this>");
        return jArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.f2
    /* renamed from: w */
    public long[] r() {
        return new long[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s, at.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, y0 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.f(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.a
    /* renamed from: y */
    public y0 k(long[] jArr) {
        Intrinsics.checkNotNullParameter(jArr, "<this>");
        return new y0(jArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, long[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.E(getDescriptor(), i11, content[i11]);
        }
    }
}
