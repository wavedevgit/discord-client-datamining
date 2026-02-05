package gt;

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
    private final KSerializer f25337a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f25338b;

    /* renamed from: c  reason: collision with root package name */
    private final KSerializer f25339c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f25340d;

    public t2(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        this.f25337a = aSerializer;
        this.f25338b = bSerializer;
        this.f25339c = cSerializer;
        this.f25340d = ft.j.c("kotlin.Triple", new SerialDescriptor[0], new Function1() { // from class: gt.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d10;
                d10 = t2.d(t2.this, (ft.a) obj);
                return d10;
            }
        });
    }

    private final or.u b(kotlinx.serialization.encoding.c cVar) {
        Object c10 = c.a.c(cVar, getDescriptor(), 0, this.f25337a, null, 8, null);
        Object c11 = c.a.c(cVar, getDescriptor(), 1, this.f25338b, null, 8, null);
        Object c12 = c.a.c(cVar, getDescriptor(), 2, this.f25339c, null, 8, null);
        cVar.c(getDescriptor());
        return new or.u(c10, c11, c12);
    }

    private final or.u c(kotlinx.serialization.encoding.c cVar) {
        Object obj;
        Object obj2;
        Object obj3;
        Object obj4;
        Object obj5;
        Object obj6;
        kotlinx.serialization.encoding.c cVar2;
        obj = u2.f25345a;
        obj2 = u2.f25345a;
        obj3 = u2.f25345a;
        while (true) {
            int o10 = cVar.o(getDescriptor());
            if (o10 != -1) {
                if (o10 != 0) {
                    if (o10 != 1) {
                        if (o10 == 2) {
                            obj3 = c.a.c(cVar, getDescriptor(), 2, this.f25339c, null, 8, null);
                        } else {
                            throw new dt.n("Unexpected index " + o10);
                        }
                    } else {
                        cVar2 = cVar;
                        obj2 = c.a.c(cVar2, getDescriptor(), 1, this.f25338b, null, 8, null);
                    }
                } else {
                    cVar2 = cVar;
                    obj = c.a.c(cVar2, getDescriptor(), 0, this.f25337a, null, 8, null);
                }
                cVar = cVar2;
            } else {
                cVar.c(getDescriptor());
                obj4 = u2.f25345a;
                if (obj != obj4) {
                    obj5 = u2.f25345a;
                    if (obj2 != obj5) {
                        obj6 = u2.f25345a;
                        if (obj3 != obj6) {
                            return new or.u(obj, obj2, obj3);
                        }
                        throw new dt.n("Element 'third' is missing");
                    }
                    throw new dt.n("Element 'second' is missing");
                }
                throw new dt.n("Element 'first' is missing");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(t2 t2Var, ft.a buildClassSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
        ft.a.b(buildClassSerialDescriptor, "first", t2Var.f25337a.getDescriptor(), null, false, 12, null);
        ft.a.b(buildClassSerialDescriptor, "second", t2Var.f25338b.getDescriptor(), null, false, 12, null);
        ft.a.b(buildClassSerialDescriptor, "third", t2Var.f25339c.getDescriptor(), null, false, 12, null);
        return Unit.f31988a;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: e */
    public or.u deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        kotlinx.serialization.encoding.c b10 = decoder.b(getDescriptor());
        if (b10.p()) {
            return b(b10);
        }
        return c(b10);
    }

    @Override // dt.o
    /* renamed from: f */
    public void serialize(Encoder encoder, or.u value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        CompositeEncoder b10 = encoder.b(getDescriptor());
        b10.l(getDescriptor(), 0, this.f25337a, value.d());
        b10.l(getDescriptor(), 1, this.f25338b, value.e());
        b10.l(getDescriptor(), 2, this.f25339c, value.f());
        b10.c(getDescriptor());
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f25340d;
    }
}
