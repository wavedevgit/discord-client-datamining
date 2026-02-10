package kt;

import java.lang.annotation.Annotation;
import java.util.List;
import jt.l;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o1 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35187a;

    /* renamed from: b  reason: collision with root package name */
    private List f35188b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f35189c;

    public o1(final String serialName, Object objectInstance) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(objectInstance, "objectInstance");
        this.f35187a = objectInstance;
        this.f35188b = CollectionsKt.l();
        this.f35189c = rr.l.b(rr.o.f49210e, new Function0() { // from class: kt.m1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor c10;
                c10 = o1.c(serialName, this);
                return c10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor c(String str, final o1 o1Var) {
        return jt.j.d(str, l.d.f30498a, new SerialDescriptor[0], new Function1() { // from class: kt.n1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit d10;
                d10 = o1.d(o1.this, (jt.a) obj);
                return d10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(o1 o1Var, jt.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        buildSerialDescriptor.h(o1Var.f35188b);
        return Unit.f31765a;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        int o10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        if (b10.p() || (o10 = b10.o(getDescriptor())) == -1) {
            Unit unit = Unit.f31765a;
            b10.c(descriptor);
            return this.f35187a;
        }
        throw new gt.n("Unexpected index " + o10);
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f35189c.getValue();
    }

    @Override // gt.o
    public void serialize(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.b(getDescriptor()).c(getDescriptor());
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public o1(String serialName, Object objectInstance, Annotation[] classAnnotations) {
        this(serialName, objectInstance);
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(objectInstance, "objectInstance");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f35188b = kotlin.collections.i.e(classAnnotations);
    }
}
