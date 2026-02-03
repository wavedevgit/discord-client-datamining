package kotlinx.serialization.internal;

import bt.f2;
import bt.n;
import kotlin.jvm.internal.CharCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.CompositeEncoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends f2 implements KSerializer {

    /* renamed from: c  reason: collision with root package name */
    public static final c f36176c = new c();

    private c() {
        super(zs.a.D(CharCompanionObject.INSTANCE));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bt.a
    /* renamed from: v */
    public int e(char[] cArr) {
        Intrinsics.checkNotNullParameter(cArr, "<this>");
        return cArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bt.f2
    /* renamed from: w */
    public char[] r() {
        return new char[0];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bt.s, bt.a
    /* renamed from: x */
    public void h(kotlinx.serialization.encoding.c decoder, int i10, n builder, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        builder.e(decoder.A(getDescriptor(), i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bt.a
    /* renamed from: y */
    public n k(char[] cArr) {
        Intrinsics.checkNotNullParameter(cArr, "<this>");
        return new n(cArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bt.f2
    /* renamed from: z */
    public void u(CompositeEncoder encoder, char[] content, int i10) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(content, "content");
        for (int i11 = 0; i11 < i10; i11++) {
            encoder.l(getDescriptor(), i11, content[i11]);
        }
    }
}
