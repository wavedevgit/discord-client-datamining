package kotlinx.serialization.internal;

import kotlin.jvm.internal.ByteCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import kt.f2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final b f34866c = new b();

    private b() {
        super(ht.a.x(ByteCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.a
    /* renamed from: v */
    public int e(byte[] bArr) {
        Intrinsics.checkNotNullParameter(bArr, "<this>");
        return bArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.f2
    /* renamed from: w */
    public byte[] r() {
        return new byte[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.s, kt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, kt.i builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.B(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.a
    /* renamed from: y */
    public kt.i k(byte[] bArr) {
        Intrinsics.checkNotNullParameter(bArr, "<this>");
        return new kt.i(bArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, byte[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.p(getDescriptor(), i11, content[i11]);
        }
    }
}
