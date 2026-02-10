package gt;

import java.util.List;
import jt.k;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kt.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f24787a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f24788b;

    /* renamed from: c  reason: collision with root package name */
    private final List f24789c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f24790d;

    public b(KClass serializableClass, KSerializer kSerializer, KSerializer[] typeArgumentsSerializers) {
        Intrinsics.checkNotNullParameter(serializableClass, "serializableClass");
        Intrinsics.checkNotNullParameter(typeArgumentsSerializers, "typeArgumentsSerializers");
        this.f24787a = serializableClass;
        this.f24788b = kSerializer;
        this.f24789c = kotlin.collections.i.e(typeArgumentsSerializers);
        this.f24790d = jt.b.c(jt.j.d("kotlinx.serialization.ContextualSerializer", k.a.f30493a, new SerialDescriptor[0], new Function1() { // from class: gt.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b10;
                b10 = b.b(b.this, (jt.a) obj);
                return b10;
            }
        }), serializableClass);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(b bVar, jt.a buildSerialDescriptor) {
        List list;
        SerialDescriptor descriptor;
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        KSerializer kSerializer = bVar.f24788b;
        if (kSerializer != null && (descriptor = kSerializer.getDescriptor()) != null) {
            list = descriptor.getAnnotations();
        } else {
            list = null;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        buildSerialDescriptor.h(list);
        return Unit.f31765a;
    }

    private final KSerializer c(nt.b bVar) {
        KSerializer b10 = bVar.b(this.f24787a, this.f24789c);
        if (b10 == null) {
            KSerializer kSerializer = this.f24788b;
            if (kSerializer != null) {
                return kSerializer;
            }
            u1.f(this.f24787a);
            throw new rr.h();
        }
        return b10;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return decoder.G(c(decoder.a()));
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f24790d;
    }

    @Override // gt.o
    public void serialize(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.h(c(encoder.a()), value);
    }
}
