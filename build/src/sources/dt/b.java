package dt;

import ft.k;
import gt.u1;
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
    private final KClass f21225a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f21226b;

    /* renamed from: c  reason: collision with root package name */
    private final List f21227c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f21228d;

    public b(KClass serializableClass, KSerializer kSerializer, KSerializer[] typeArgumentsSerializers) {
        Intrinsics.checkNotNullParameter(serializableClass, "serializableClass");
        Intrinsics.checkNotNullParameter(typeArgumentsSerializers, "typeArgumentsSerializers");
        this.f21225a = serializableClass;
        this.f21226b = kSerializer;
        this.f21227c = kotlin.collections.i.e(typeArgumentsSerializers);
        this.f21228d = ft.b.c(ft.j.d("kotlinx.serialization.ContextualSerializer", k.a.f23492a, new SerialDescriptor[0], new Function1() { // from class: dt.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b10;
                b10 = b.b(b.this, (ft.a) obj);
                return b10;
            }
        }), serializableClass);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(b bVar, ft.a buildSerialDescriptor) {
        List list;
        SerialDescriptor descriptor;
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        KSerializer kSerializer = bVar.f21226b;
        if (kSerializer != null && (descriptor = kSerializer.getDescriptor()) != null) {
            list = descriptor.getAnnotations();
        } else {
            list = null;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        buildSerialDescriptor.h(list);
        return Unit.f31988a;
    }

    private final KSerializer c(kt.b bVar) {
        KSerializer b10 = bVar.b(this.f21225a, this.f21227c);
        if (b10 == null) {
            KSerializer kSerializer = this.f21226b;
            if (kSerializer != null) {
                return kSerializer;
            }
            u1.f(this.f21225a);
            throw new or.h();
        }
        return b10;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return decoder.G(c(decoder.a()));
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f21228d;
    }

    @Override // dt.o
    public void serialize(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.y(c(encoder.a()), value);
    }
}
