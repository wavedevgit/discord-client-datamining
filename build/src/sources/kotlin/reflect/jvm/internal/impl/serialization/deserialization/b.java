package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ClassDeserializer;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ClassDeserializer f35654d;

    public b(ClassDeserializer classDeserializer) {
        this.f35654d = classDeserializer;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassDescriptor b10;
        b10 = ClassDeserializer.b(this.f35654d, (ClassDeserializer.a) obj);
        return b10;
    }
}
