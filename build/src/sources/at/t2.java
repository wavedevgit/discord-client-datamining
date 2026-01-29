package at;

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
    private final KSerializer f6883a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f6884b;

    /* renamed from: c  reason: collision with root package name */
    private final KSerializer f6885c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f6886d;

    public t2(KSerializer aSerializer, KSerializer bSerializer, KSerializer cSerializer) {
        Intrinsics.checkNotNullParameter(aSerializer, "aSerializer");
        Intrinsics.checkNotNullParameter(bSerializer, "bSerializer");
        Intrinsics.checkNotNullParameter(cSerializer, "cSerializer");
        this.f6883a = aSerializer;
        this.f6884b = bSerializer;
        this.f6885c = cSerializer;
        this.f6886d = zs.j.c("kotlin.Triple", new SerialDescriptor[0], new Function1() { // from class: at.s2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d10;
                d10 = t2.d(t2.this, (zs.a) obj);
                return d10;
            }
        });
    }

    private final ir.u b(kotlinx.serialization.encoding.c cVar) {
        Object c10 = c.a.c(cVar, getDescriptor(), 0, this.f6883a, null, 8, null);
        Object c11 = c.a.c(cVar, getDescriptor(), 1, this.f6884b, null, 8, null);
        Object c12 = c.a.c(cVar, getDescriptor(), 2, this.f6885c, null, 8, null);
        cVar.c(getDescriptor());
        return new ir.u(c10, c11, c12);
    }

    private final ir.u c(kotlinx.serialization.encoding.c cVar) {
        Object obj;
        Object obj2;
        Object obj3;
        Object obj4;
        Object obj5;
        Object obj6;
        kotlinx.serialization.encoding.c cVar2;
        obj = u2.f6891a;
        obj2 = u2.f6891a;
        obj3 = u2.f6891a;
        while (true) {
            int o10 = cVar.o(getDescriptor());
            if (o10 != -1) {
                if (o10 != 0) {
                    if (o10 != 1) {
                        if (o10 == 2) {
                            obj3 = c.a.c(cVar, getDescriptor(), 2, this.f6885c, null, 8, null);
                        } else {
                            throw new xs.n("Unexpected index " + o10);
                        }
                    } else {
                        cVar2 = cVar;
                        obj2 = c.a.c(cVar2, getDescriptor(), 1, this.f6884b, null, 8, null);
                    }
                } else {
                    cVar2 = cVar;
                    obj = c.a.c(cVar2, getDescriptor(), 0, this.f6883a, null, 8, null);
                }
                cVar = cVar2;
            } else {
                cVar.c(getDescriptor());
                obj4 = u2.f6891a;
                if (obj != obj4) {
                    obj5 = u2.f6891a;
                    if (obj2 != obj5) {
                        obj6 = u2.f6891a;
                        if (obj3 != obj6) {
                            return new ir.u(obj, obj2, obj3);
                        }
                        throw new xs.n("Element 'third' is missing");
                    }
                    throw new xs.n("Element 'second' is missing");
                }
                throw new xs.n("Element 'first' is missing");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(t2 t2Var, zs.a buildClassSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
        zs.a.b(buildClassSerialDescriptor, "first", t2Var.f6883a.getDescriptor(), null, false, 12, null);
        zs.a.b(buildClassSerialDescriptor, "second", t2Var.f6884b.getDescriptor(), null, false, 12, null);
        zs.a.b(buildClassSerialDescriptor, "third", t2Var.f6885c.getDescriptor(), null, false, 12, null);
        return Unit.f33282a;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: e */
    public ir.u deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        kotlinx.serialization.encoding.c b10 = decoder.b(getDescriptor());
        if (b10.p()) {
            return b(b10);
        }
        return c(b10);
    }

    @Override // xs.o
    /* renamed from: f */
    public void serialize(Encoder encoder, ir.u value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        CompositeEncoder b10 = encoder.b(getDescriptor());
        b10.j(getDescriptor(), 0, this.f6883a, value.d());
        b10.j(getDescriptor(), 1, this.f6884b, value.e());
        b10.j(getDescriptor(), 2, this.f6885c, value.f());
        b10.c(getDescriptor());
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f6886d;
    }
}
