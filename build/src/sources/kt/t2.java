package kt;

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
    private final KSerializer f35216a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f35217b;

    /* renamed from: c  reason: collision with root package name */
    private final KSerializer f35218c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f35219d;

    public t2(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        this.f35216a = aSerializer;
        this.f35217b = bSerializer;
        this.f35218c = cSerializer;
        this.f35219d = jt.j.c("kotlin.Triple", new SerialDescriptor[0], new Function1() { // from class: kt.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d10;
                d10 = t2.d(t2.this, (jt.a) obj);
                return d10;
            }
        });
    }

    private final rr.u b(kotlinx.serialization.encoding.c cVar) {
        Object c10 = c.a.c(cVar, getDescriptor(), 0, this.f35216a, null, 8, null);
        Object c11 = c.a.c(cVar, getDescriptor(), 1, this.f35217b, null, 8, null);
        Object c12 = c.a.c(cVar, getDescriptor(), 2, this.f35218c, null, 8, null);
        cVar.c(getDescriptor());
        return new rr.u(c10, c11, c12);
    }

    private final rr.u c(kotlinx.serialization.encoding.c cVar) {
        Object obj;
        Object obj2;
        Object obj3;
        Object obj4;
        Object obj5;
        Object obj6;
        kotlinx.serialization.encoding.c cVar2;
        obj = u2.f35224a;
        obj2 = u2.f35224a;
        obj3 = u2.f35224a;
        while (true) {
            int o10 = cVar.o(getDescriptor());
            if (o10 != -1) {
                if (o10 != 0) {
                    if (o10 != 1) {
                        if (o10 == 2) {
                            obj3 = c.a.c(cVar, getDescriptor(), 2, this.f35218c, null, 8, null);
                        } else {
                            throw new gt.n("Unexpected index " + o10);
                        }
                    } else {
                        cVar2 = cVar;
                        obj2 = c.a.c(cVar2, getDescriptor(), 1, this.f35217b, null, 8, null);
                    }
                } else {
                    cVar2 = cVar;
                    obj = c.a.c(cVar2, getDescriptor(), 0, this.f35216a, null, 8, null);
                }
                cVar = cVar2;
            } else {
                cVar.c(getDescriptor());
                obj4 = u2.f35224a;
                if (obj != obj4) {
                    obj5 = u2.f35224a;
                    if (obj2 != obj5) {
                        obj6 = u2.f35224a;
                        if (obj3 != obj6) {
                            return new rr.u(obj, obj2, obj3);
                        }
                        throw new gt.n("Element 'third' is missing");
                    }
                    throw new gt.n("Element 'second' is missing");
                }
                throw new gt.n("Element 'first' is missing");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(t2 t2Var, jt.a buildClassSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
        jt.a.b(buildClassSerialDescriptor, "first", t2Var.f35216a.getDescriptor(), null, false, 12, null);
        jt.a.b(buildClassSerialDescriptor, "second", t2Var.f35217b.getDescriptor(), null, false, 12, null);
        jt.a.b(buildClassSerialDescriptor, "third", t2Var.f35218c.getDescriptor(), null, false, 12, null);
        return Unit.f31765a;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: e */
    public rr.u deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        kotlinx.serialization.encoding.c b10 = decoder.b(getDescriptor());
        if (b10.p()) {
            return b(b10);
        }
        return c(b10);
    }

    @Override // gt.o
    /* renamed from: f */
    public void serialize(Encoder encoder, rr.u value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        CompositeEncoder b10 = encoder.b(getDescriptor());
        b10.F(getDescriptor(), 0, this.f35216a, value.d());
        b10.F(getDescriptor(), 1, this.f35217b, value.e());
        b10.F(getDescriptor(), 2, this.f35218c, value.f());
        b10.c(getDescriptor());
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f35219d;
    }
}
