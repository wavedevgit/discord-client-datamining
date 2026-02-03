package dt;

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
    private final KSerializer f21013a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f21014b;

    /* renamed from: c  reason: collision with root package name */
    private final KSerializer f21015c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f21016d;

    public t2(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        this.f21013a = aSerializer;
        this.f21014b = bSerializer;
        this.f21015c = cSerializer;
        this.f21016d = ct.j.c("kotlin.Triple", new SerialDescriptor[0], new Function1() { // from class: dt.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d10;
                d10 = t2.d(t2.this, (ct.a) obj);
                return d10;
            }
        });
    }

    private final lr.u b(kotlinx.serialization.encoding.c cVar) {
        Object c10 = c.a.c(cVar, getDescriptor(), 0, this.f21013a, null, 8, null);
        Object c11 = c.a.c(cVar, getDescriptor(), 1, this.f21014b, null, 8, null);
        Object c12 = c.a.c(cVar, getDescriptor(), 2, this.f21015c, null, 8, null);
        cVar.c(getDescriptor());
        return new lr.u(c10, c11, c12);
    }

    private final lr.u c(kotlinx.serialization.encoding.c cVar) {
        Object obj;
        Object obj2;
        Object obj3;
        Object obj4;
        Object obj5;
        Object obj6;
        kotlinx.serialization.encoding.c cVar2;
        obj = u2.f21021a;
        obj2 = u2.f21021a;
        obj3 = u2.f21021a;
        while (true) {
            int o10 = cVar.o(getDescriptor());
            if (o10 != -1) {
                if (o10 != 0) {
                    if (o10 != 1) {
                        if (o10 == 2) {
                            obj3 = c.a.c(cVar, getDescriptor(), 2, this.f21015c, null, 8, null);
                        } else {
                            throw new at.n("Unexpected index " + o10);
                        }
                    } else {
                        cVar2 = cVar;
                        obj2 = c.a.c(cVar2, getDescriptor(), 1, this.f21014b, null, 8, null);
                    }
                } else {
                    cVar2 = cVar;
                    obj = c.a.c(cVar2, getDescriptor(), 0, this.f21013a, null, 8, null);
                }
                cVar = cVar2;
            } else {
                cVar.c(getDescriptor());
                obj4 = u2.f21021a;
                if (obj != obj4) {
                    obj5 = u2.f21021a;
                    if (obj2 != obj5) {
                        obj6 = u2.f21021a;
                        if (obj3 != obj6) {
                            return new lr.u(obj, obj2, obj3);
                        }
                        throw new at.n("Element 'third' is missing");
                    }
                    throw new at.n("Element 'second' is missing");
                }
                throw new at.n("Element 'first' is missing");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(t2 t2Var, ct.a buildClassSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
        ct.a.b(buildClassSerialDescriptor, "first", t2Var.f21013a.getDescriptor(), null, false, 12, null);
        ct.a.b(buildClassSerialDescriptor, "second", t2Var.f21014b.getDescriptor(), null, false, 12, null);
        ct.a.b(buildClassSerialDescriptor, "third", t2Var.f21015c.getDescriptor(), null, false, 12, null);
        return Unit.f32464a;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: e */
    public lr.u deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        kotlinx.serialization.encoding.c b10 = decoder.b(getDescriptor());
        if (b10.p()) {
            return b(b10);
        }
        return c(b10);
    }

    @Override // at.o
    /* renamed from: f */
    public void serialize(Encoder encoder, lr.u value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        CompositeEncoder b10 = encoder.b(getDescriptor());
        b10.D(getDescriptor(), 0, this.f21013a, value.d());
        b10.D(getDescriptor(), 1, this.f21014b, value.e());
        b10.D(getDescriptor(), 2, this.f21015c, value.f());
        b10.c(getDescriptor());
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f21016d;
    }
}
