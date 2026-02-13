package kotlinx.serialization.internal;

import kotlin.jvm.internal.BooleanCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
import tt.f2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final a f35656c = new a();

    private a() {
        super(rt.a.A(BooleanCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tt.a
    /* renamed from: v */
    public int e(boolean[] zArr) {
        Intrinsics.checkNotNullParameter(zArr, "<this>");
        return zArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tt.f2
    /* renamed from: w */
    public boolean[] r() {
        return new boolean[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tt.s, tt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, tt.g builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.C(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tt.a
    /* renamed from: y */
    public tt.g k(boolean[] zArr) {
        Intrinsics.checkNotNullParameter(zArr, "<this>");
        return new tt.g(zArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // tt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, boolean[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.x(getDescriptor(), i11, content[i11]);
        }
    }
}
