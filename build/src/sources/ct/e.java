package ct;

import at.d;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonElement;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e implements KSerializer {
    @NotNull
    private final KClass baseClass;
    @NotNull
    private final SerialDescriptor descriptor;

    public e(KClass baseClass) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        this.baseClass = baseClass;
        this.descriptor = at.j.e("JsonContentPolymorphicSerializer<" + baseClass.getSimpleName() + '>', d.b.f6069a, new SerialDescriptor[0], null, 8, null);
    }

    private final Void a(KClass kClass, KClass kClass2) {
        String simpleName = kClass.getSimpleName();
        if (simpleName == null) {
            simpleName = String.valueOf(kClass);
        }
        throw new ys.n("Class '" + simpleName + "' is not registered for polymorphic serialization " + ("in the scope of '" + kClass2.getSimpleName() + '\'') + ".\nMark the base class as 'sealed' or register the serializer explicitly.");
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    @NotNull
    public final Object deserialize(@NotNull Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        f d10 = p.d(decoder);
        JsonElement g10 = d10.g();
        DeserializationStrategy selectDeserializer = selectDeserializer(g10);
        Intrinsics.checkNotNull(selectDeserializer, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<T of kotlinx.serialization.json.JsonContentPolymorphicSerializer>");
        return d10.d().d((KSerializer) selectDeserializer, g10);
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    @NotNull
    public SerialDescriptor getDescriptor() {
        return this.descriptor;
    }

    protected abstract DeserializationStrategy selectDeserializer(JsonElement jsonElement);

    @Override // ys.o
    public final void serialize(@NotNull Encoder encoder, @NotNull Object value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        KSerializer f10 = encoder.a().f(this.baseClass, value);
        if (f10 == null) {
            KSerializer g10 = ys.w.g(Reflection.getOrCreateKotlinClass(value.getClass()));
            if (g10 != null) {
                f10 = g10;
            } else {
                a(Reflection.getOrCreateKotlinClass(value.getClass()), this.baseClass);
                throw new jr.h();
            }
        }
        ((KSerializer) f10).serialize(encoder, value);
    }
}
