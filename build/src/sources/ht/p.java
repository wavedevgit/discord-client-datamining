package ht;

import java.util.List;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements SerialDescriptor {

        /* renamed from: a */
        private final Lazy f26982a;

        a(Function0 function0) {
            this.f26982a = or.l.a(function0);
        }

        private final SerialDescriptor a() {
            return (SerialDescriptor) this.f26982a.getValue();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean b() {
            return SerialDescriptor.a.c(this);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int c(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return a().c(name);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public int d() {
            return a().d();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String e(int i10) {
            return a().e(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List f(int i10) {
            return a().f(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public SerialDescriptor g(int i10) {
            return a().g(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public List getAnnotations() {
            return SerialDescriptor.a.a(this);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public ft.k getKind() {
            return a().getKind();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public String h() {
            return a().h();
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean i(int i10) {
            return a().i(i10);
        }

        @Override // kotlinx.serialization.descriptors.SerialDescriptor
        public boolean isInline() {
            return SerialDescriptor.a.b(this);
        }
    }

    public static final /* synthetic */ SerialDescriptor a(Function0 function0) {
        return f(function0);
    }

    public static final /* synthetic */ void b(Decoder decoder) {
        g(decoder);
    }

    public static final /* synthetic */ void c(Encoder encoder) {
        h(encoder);
    }

    public static final f d(Decoder decoder) {
        f fVar;
        Intrinsics.checkNotNullParameter(decoder, "<this>");
        if (decoder instanceof f) {
            fVar = (f) decoder;
        } else {
            fVar = null;
        }
        if (fVar != null) {
            return fVar;
        }
        throw new IllegalStateException("This serializer can be used only with Json format.Expected Decoder to be JsonDecoder, got " + Reflection.getOrCreateKotlinClass(decoder.getClass()));
    }

    public static final q e(Encoder encoder) {
        q qVar;
        Intrinsics.checkNotNullParameter(encoder, "<this>");
        if (encoder instanceof q) {
            qVar = (q) encoder;
        } else {
            qVar = null;
        }
        if (qVar != null) {
            return qVar;
        }
        throw new IllegalStateException("This serializer can be used only with Json format.Expected Encoder to be JsonEncoder, got " + Reflection.getOrCreateKotlinClass(encoder.getClass()));
    }

    public static final SerialDescriptor f(Function0 function0) {
        return new a(function0);
    }

    public static final void g(Decoder decoder) {
        d(decoder);
    }

    public static final void h(Encoder encoder) {
        e(encoder);
    }
}
