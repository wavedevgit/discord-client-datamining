package ft;

import ht.k;
import java.util.List;
import jt.u1;
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
    private final KClass f23732a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f23733b;

    /* renamed from: c  reason: collision with root package name */
    private final List f23734c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f23735d;

    public b(KClass serializableClass, KSerializer kSerializer, KSerializer[] typeArgumentsSerializers) {
        Intrinsics.checkNotNullParameter(serializableClass, "serializableClass");
        Intrinsics.checkNotNullParameter(typeArgumentsSerializers, "typeArgumentsSerializers");
        this.f23732a = serializableClass;
        this.f23733b = kSerializer;
        this.f23734c = kotlin.collections.i.e(typeArgumentsSerializers);
        this.f23735d = ht.b.c(ht.j.d("kotlinx.serialization.ContextualSerializer", k.a.f26535a, new SerialDescriptor[0], new Function1() { // from class: ft.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b10;
                b10 = b.b(b.this, (ht.a) obj);
                return b10;
            }
        }), serializableClass);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(b bVar, ht.a buildSerialDescriptor) {
        List list;
        SerialDescriptor descriptor;
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        KSerializer kSerializer = bVar.f23733b;
        if (kSerializer != null && (descriptor = kSerializer.getDescriptor()) != null) {
            list = descriptor.getAnnotations();
        } else {
            list = null;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        buildSerialDescriptor.h(list);
        return Unit.f32056a;
    }

    private final KSerializer c(mt.b bVar) {
        KSerializer b10 = bVar.b(this.f23732a, this.f23734c);
        if (b10 == null) {
            KSerializer kSerializer = this.f23733b;
            if (kSerializer != null) {
                return kSerializer;
            }
            u1.f(this.f23732a);
            throw new qr.h();
        }
        return b10;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return decoder.G(c(decoder.a()));
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f23735d;
    }

    @Override // ft.o
    public void serialize(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.v(c(encoder.a()), value);
    }
}
