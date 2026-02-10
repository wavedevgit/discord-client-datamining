package kotlinx.serialization.internal;

import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import kt.f0;
import kt.f2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final e f34869c = new e();

    private e() {
        super(ht.a.A(FloatCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.a
    /* renamed from: v */
    public int e(float[] fArr) {
        Intrinsics.checkNotNullParameter(fArr, "<this>");
        return fArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.f2
    /* renamed from: w */
    public float[] r() {
        return new float[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.s, kt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, f0 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.u(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.a
    /* renamed from: y */
    public f0 k(float[] fArr) {
        Intrinsics.checkNotNullParameter(fArr, "<this>");
        return new f0(fArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, float[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.s(getDescriptor(), i11, content[i11]);
        }
    }
}
