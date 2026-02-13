package tt;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.encoding.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t2 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f50636a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f50637b;

    /* renamed from: c  reason: collision with root package name */
    private final KSerializer f50638c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f50639d;

    public t2(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        this.f50636a = aSerializer;
        this.f50637b = bSerializer;
        this.f50638c = cSerializer;
        this.f50639d = st.j.c("kotlin.Triple", new SerialDescriptor[0], new Function1() { // from class: tt.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d10;
                d10 = t2.d(t2.this, (st.a) obj);
                return d10;
            }
        });
    }

    private final as.u b(kotlinx.serialization.encoding.c cVar) {
        Object c10 = c.a.c(cVar, getDescriptor(), 0, this.f50636a, null, 8, null);
        Object c11 = c.a.c(cVar, getDescriptor(), 1, this.f50637b, null, 8, null);
        Object c12 = c.a.c(cVar, getDescriptor(), 2, this.f50638c, null, 8, null);
        cVar.c(getDescriptor());
        return new as.u(c10, c11, c12);
    }

    private final as.u c(kotlinx.serialization.encoding.c cVar) {
        Object obj;
        Object obj2;
        Object obj3;
        Object obj4;
        Object obj5;
        Object obj6;
        kotlinx.serialization.encoding.c cVar2;
        obj = u2.f50644a;
        obj2 = u2.f50644a;
        obj3 = u2.f50644a;
        while (true) {
            int o10 = cVar.o(getDescriptor());
            if (o10 != -1) {
                if (o10 != 0) {
                    if (o10 != 1) {
                        if (o10 == 2) {
                            obj3 = c.a.c(cVar, getDescriptor(), 2, this.f50638c, null, 8, null);
                        } else {
                            throw new qt.n("Unexpected index " + o10);
                        }
                    } else {
                        cVar2 = cVar;
                        obj2 = c.a.c(cVar2, getDescriptor(), 1, this.f50637b, null, 8, null);
                    }
                } else {
                    cVar2 = cVar;
                    obj = c.a.c(cVar2, getDescriptor(), 0, this.f50636a, null, 8, null);
                }
                cVar = cVar2;
            } else {
                cVar.c(getDescriptor());
                obj4 = u2.f50644a;
                if (obj != obj4) {
                    obj5 = u2.f50644a;
                    if (obj2 != obj5) {
                        obj6 = u2.f50644a;
                        if (obj3 != obj6) {
                            return new as.u(obj, obj2, obj3);
                        }
                        throw new qt.n("Element 'third' is missing");
                    }
                    throw new qt.n("Element 'second' is missing");
                }
                throw new qt.n("Element 'first' is missing");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(t2 t2Var, st.a buildClassSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
        st.a.b(buildClassSerialDescriptor, "first", t2Var.f50636a.getDescriptor(), null, false, 12, null);
        st.a.b(buildClassSerialDescriptor, "second", t2Var.f50637b.getDescriptor(), null, false, 12, null);
        st.a.b(buildClassSerialDescriptor, "third", t2Var.f50638c.getDescriptor(), null, false, 12, null);
        return Unit.f32556a;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: e */
    public as.u deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        kotlinx.serialization.encoding.c b10 = decoder.b(getDescriptor());
        if (b10.p()) {
            return b(b10);
        }
        return c(b10);
    }

    @Override // qt.o
    /* renamed from: f */
    public void serialize(Encoder encoder, as.u value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        CompositeEncoder b10 = encoder.b(getDescriptor());
        b10.k(getDescriptor(), 0, this.f50636a, value.d());
        b10.k(getDescriptor(), 1, this.f50637b, value.e());
        b10.k(getDescriptor(), 2, this.f50638c, value.f());
        b10.c(getDescriptor());
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f50639d;
    }
}
