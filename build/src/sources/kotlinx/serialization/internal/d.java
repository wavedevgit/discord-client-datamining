package kotlinx.serialization.internal;

import kotlin.jvm.internal.DoubleCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import kt.f2;
import kt.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final d f34868c = new d();

    private d() {
        super(ht.a.z(DoubleCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.a
    /* renamed from: v */
    public int e(double[] dArr) {
        Intrinsics.checkNotNullParameter(dArr, "<this>");
        return dArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.f2
    /* renamed from: w */
    public double[] r() {
        return new double[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.s, kt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, w builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.F(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.a
    /* renamed from: y */
    public w k(double[] dArr) {
        Intrinsics.checkNotNullParameter(dArr, "<this>");
        return new w(dArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, double[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.C(getDescriptor(), i11, content[i11]);
        }
    }
}
