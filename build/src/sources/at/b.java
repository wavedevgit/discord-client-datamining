package at;

import ct.k;
import dt.u1;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f6120a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f6121b;

    /* renamed from: c  reason: collision with root package name */
    private final List f6122c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f6123d;

    public b(KClass serializableClass, KSerializer kSerializer, KSerializer[] typeArgumentsSerializers) {
        Intrinsics.checkNotNullParameter(serializableClass, "serializableClass");
        Intrinsics.checkNotNullParameter(typeArgumentsSerializers, "typeArgumentsSerializers");
        this.f6120a = serializableClass;
        this.f6121b = kSerializer;
        this.f6122c = kotlin.collections.i.e(typeArgumentsSerializers);
        this.f6123d = ct.b.c(ct.j.d("kotlinx.serialization.ContextualSerializer", k.a.f19851a, new SerialDescriptor[0], new Function1() { // from class: at.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b10;
                b10 = b.b(b.this, (ct.a) obj);
                return b10;
            }
        }), serializableClass);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(b bVar, ct.a buildSerialDescriptor) {
        List list;
        SerialDescriptor descriptor;
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        KSerializer kSerializer = bVar.f6121b;
        if (kSerializer != null && (descriptor = kSerializer.getDescriptor()) != null) {
            list = descriptor.getAnnotations();
        } else {
            list = null;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        buildSerialDescriptor.h(list);
        return Unit.f32464a;
    }

    private final KSerializer c(gt.b bVar) {
        KSerializer b10 = bVar.b(this.f6120a, this.f6122c);
        if (b10 == null) {
            KSerializer kSerializer = this.f6121b;
            if (kSerializer != null) {
                return kSerializer;
            }
            u1.f(this.f6120a);
            throw new lr.h();
        }
        return b10;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return decoder.G(c(decoder.a()));
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f6123d;
    }

    @Override // at.o
    public void serialize(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.h(c(encoder.a()), value);
    }
}
