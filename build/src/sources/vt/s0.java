package vt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import st.k;
import st.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s0 implements wt.d {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51953a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51954b;

    public s0(boolean z10, String discriminator) {
        Intrinsics.checkNotNullParameter(discriminator, "discriminator");
        this.f51953a = z10;
        this.f51954b = discriminator;
    }

    private final void d(SerialDescriptor serialDescriptor, KClass kClass) {
        int d10 = serialDescriptor.d();
        for (int i10 = 0; i10 < d10; i10++) {
            String e10 = serialDescriptor.e(i10);
            if (Intrinsics.areEqual(e10, this.f51954b)) {
                throw new IllegalArgumentException("Polymorphic serializer for " + kClass + " has property '" + e10 + "' that conflicts with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism");
            }
        }
    }

    private final void e(SerialDescriptor serialDescriptor, KClass kClass) {
        st.k kind = serialDescriptor.getKind();
        if (!(kind instanceof st.d) && !Intrinsics.areEqual(kind, k.a.f48378a)) {
            if (!this.f51953a) {
                if (!Intrinsics.areEqual(kind, l.b.f48381a) && !Intrinsics.areEqual(kind, l.c.f48382a) && !(kind instanceof st.e) && !(kind instanceof k.b)) {
                    return;
                }
                throw new IllegalArgumentException("Serializer for " + kClass.getSimpleName() + " of kind " + kind + " cannot be serialized polymorphically with class discriminator.");
            }
            return;
        }
        throw new IllegalArgumentException("Serializer for " + kClass.getSimpleName() + " can't be registered as a subclass for polymorphic serialization because its kind " + kind + " is not concrete. To work with multiple hierarchies, register it as a base class.");
    }

    @Override // wt.d
    public void a(KClass baseClass, KClass actualClass, KSerializer actualSerializer) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(actualClass, "actualClass");
        Intrinsics.checkNotNullParameter(actualSerializer, "actualSerializer");
        SerialDescriptor descriptor = actualSerializer.getDescriptor();
        e(descriptor, actualClass);
        if (!this.f51953a) {
            d(descriptor, actualClass);
        }
    }

    @Override // wt.d
    public void b(KClass baseClass, Function1 defaultDeserializerProvider) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(defaultDeserializerProvider, "defaultDeserializerProvider");
    }

    @Override // wt.d
    public void c(KClass baseClass, Function1 defaultSerializerProvider) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(defaultSerializerProvider, "defaultSerializerProvider");
    }
}
