package ct;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import zs.k;
import zs.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s0 implements dt.d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f21403a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21404b;

    public s0(boolean z10, String discriminator) {
        Intrinsics.checkNotNullParameter(discriminator, "discriminator");
        this.f21403a = z10;
        this.f21404b = discriminator;
    }

    private final void d(SerialDescriptor serialDescriptor, KClass kClass) {
        int d10 = serialDescriptor.d();
        for (int i10 = 0; i10 < d10; i10++) {
            String e10 = serialDescriptor.e(i10);
            if (Intrinsics.areEqual(e10, this.f21404b)) {
                throw new IllegalArgumentException("Polymorphic serializer for " + kClass + " has property '" + e10 + "' that conflicts with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism");
            }
        }
    }

    private final void e(SerialDescriptor serialDescriptor, KClass kClass) {
        zs.k kind = serialDescriptor.getKind();
        if (!(kind instanceof zs.d) && !Intrinsics.areEqual(kind, k.a.f56100a)) {
            if (!this.f21403a) {
                if (!Intrinsics.areEqual(kind, l.b.f56103a) && !Intrinsics.areEqual(kind, l.c.f56104a) && !(kind instanceof zs.e) && !(kind instanceof k.b)) {
                    return;
                }
                throw new IllegalArgumentException("Serializer for " + kClass.getSimpleName() + " of kind " + kind + " cannot be serialized polymorphically with class discriminator.");
            }
            return;
        }
        throw new IllegalArgumentException("Serializer for " + kClass.getSimpleName() + " can't be registered as a subclass for polymorphic serialization because its kind " + kind + " is not concrete. To work with multiple hierarchies, register it as a base class.");
    }

    @Override // dt.d
    public void a(KClass baseClass, KClass actualClass, KSerializer actualSerializer) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(actualClass, "actualClass");
        Intrinsics.checkNotNullParameter(actualSerializer, "actualSerializer");
        SerialDescriptor descriptor = actualSerializer.getDescriptor();
        e(descriptor, actualClass);
        if (!this.f21403a) {
            d(descriptor, actualClass);
        }
    }

    @Override // dt.d
    public void b(KClass baseClass, Function1 defaultDeserializerProvider) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(defaultDeserializerProvider, "defaultDeserializerProvider");
    }

    @Override // dt.d
    public void c(KClass baseClass, Function1 defaultSerializerProvider) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(defaultSerializerProvider, "defaultSerializerProvider");
    }
}
