package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeDeserializer f34551d;

    public m(TypeDeserializer typeDeserializer) {
        this.f34551d = typeDeserializer;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassifierDescriptor f10;
        f10 = TypeDeserializer.f(this.f34551d, ((Number) obj).intValue());
        return f10;
    }
}
