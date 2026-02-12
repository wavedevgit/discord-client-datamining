package qt;

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
import st.k;
import tt.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f45653a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f45654b;

    /* renamed from: c  reason: collision with root package name */
    private final List f45655c;

    /* renamed from: d  reason: collision with root package name */
    private final SerialDescriptor f45656d;

    public b(KClass serializableClass, KSerializer kSerializer, KSerializer[] typeArgumentsSerializers) {
        Intrinsics.checkNotNullParameter(serializableClass, "serializableClass");
        Intrinsics.checkNotNullParameter(typeArgumentsSerializers, "typeArgumentsSerializers");
        this.f45653a = serializableClass;
        this.f45654b = kSerializer;
        this.f45655c = kotlin.collections.i.e(typeArgumentsSerializers);
        this.f45656d = st.b.c(st.j.d("kotlinx.serialization.ContextualSerializer", k.a.f48378a, new SerialDescriptor[0], new Function1() { // from class: qt.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit b10;
                b10 = b.b(b.this, (st.a) obj);
                return b10;
            }
        }), serializableClass);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(b bVar, st.a buildSerialDescriptor) {
        List list;
        SerialDescriptor descriptor;
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        KSerializer kSerializer = bVar.f45654b;
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

    private final KSerializer c(wt.b bVar) {
        KSerializer b10 = bVar.b(this.f45653a, this.f45655c);
        if (b10 == null) {
            KSerializer kSerializer = this.f45654b;
            if (kSerializer != null) {
                return kSerializer;
            }
            u1.f(this.f45653a);
            throw new as.h();
        }
        return b10;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return decoder.G(c(decoder.a()));
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f45656d;
    }

    @Override // qt.o
    public void serialize(Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        encoder.B(c(encoder.a()), value);
    }
}
