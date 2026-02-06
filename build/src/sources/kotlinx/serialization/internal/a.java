package kotlinx.serialization.internal;

import jt.f2;
import kotlin.jvm.internal.BooleanCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final a f35108c = new a();

    private a() {
        super(gt.a.w(BooleanCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.a
    /* renamed from: v */
    public int e(boolean[] zArr) {
        Intrinsics.checkNotNullParameter(zArr, "<this>");
        return zArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.f2
    /* renamed from: w */
    public boolean[] r() {
        return new boolean[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.s, jt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, jt.g builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.C(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.a
    /* renamed from: y */
    public jt.g k(boolean[] zArr) {
        Intrinsics.checkNotNullParameter(zArr, "<this>");
        return new jt.g(zArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, boolean[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.y(getDescriptor(), i11, content[i11]);
        }
    }
}
