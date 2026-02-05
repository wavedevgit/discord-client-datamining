package kotlinx.serialization.internal;

import gt.f2;
import gt.l2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.ShortCompanionObject;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final h f35095c = new h();

    private h() {
        super(et.a.D(ShortCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: v */
    public int e(short[] sArr) {
        Intrinsics.checkNotNullParameter(sArr, "<this>");
        return sArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.f2
    /* renamed from: w */
    public short[] r() {
        return new short[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.s, gt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, l2 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.E(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: y */
    public l2 k(short[] sArr) {
        Intrinsics.checkNotNullParameter(sArr, "<this>");
        return new l2(sArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, short[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.C(getDescriptor(), i11, content[i11]);
        }
    }
}
