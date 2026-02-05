package gt;

import java.util.Iterator;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f2 extends s {

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f25259b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f2(KSerializer primitiveSerializer) {
        super(primitiveSerializer, null);
        Intrinsics.checkNotNullParameter(primitiveSerializer, "primitiveSerializer");
        this.f25259b = new e2(primitiveSerializer.getDescriptor());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    public final Iterator d(Object obj) {
        throw new IllegalStateException("This method lead to boxing and must not be used, use writeContents instead");
    }

    @Override // gt.a, kotlinx.serialization.DeserializationStrategy
    public final Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return f(decoder, null);
    }

    @Override // gt.s, kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public final SerialDescriptor getDescriptor() {
        return this.f25259b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: o */
    public final d2 a() {
        return (d2) k(r());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: p */
    public final int b(d2 d2Var) {
        Intrinsics.checkNotNullParameter(d2Var, "<this>");
        return d2Var.d();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: q */
    public final void c(d2 d2Var, int i10) {
        Intrinsics.checkNotNullParameter(d2Var, "<this>");
        d2Var.b(i10);
    }

    protected abstract Object r();

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.s
    /* renamed from: s */
    public final void n(d2 d2Var, int i10, Object obj) {
        Intrinsics.checkNotNullParameter(d2Var, "<this>");
        throw new IllegalStateException("This method lead to boxing and must not be used, use Builder.append instead");
    }

    @Override // gt.s, dt.o
    public final void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        int e10 = e(obj);
        SerialDescriptor serialDescriptor = this.f25259b;
        CompositeEncoder h10 = encoder.h(serialDescriptor, e10);
        u(h10, obj, e10);
        h10.c(serialDescriptor);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: t */
    public final Object l(d2 d2Var) {
        Intrinsics.checkNotNullParameter(d2Var, "<this>");
        return d2Var.a();
    }

    protected abstract void u(CompositeEncoder compositeEncoder, Object obj, int i10);
}
