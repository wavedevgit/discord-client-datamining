package kotlinx.serialization.internal;

import gt.f2;
import gt.o0;
import kotlin.jvm.internal.IntCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final f f35093c = new f();

    private f() {
        super(et.a.B(IntCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: v */
    public int e(int[] iArr) {
        Intrinsics.checkNotNullParameter(iArr, "<this>");
        return iArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.f2
    /* renamed from: w */
    public int[] r() {
        return new int[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.s, gt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, o0 builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.i(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: y */
    public o0 k(int[] iArr) {
        Intrinsics.checkNotNullParameter(iArr, "<this>");
        return new o0(iArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, int[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.v(getDescriptor(), i11, content[i11]);
        }
    }
}
