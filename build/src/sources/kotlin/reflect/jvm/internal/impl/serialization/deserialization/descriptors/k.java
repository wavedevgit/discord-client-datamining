package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor.b f35004d;

    /* renamed from: e  reason: collision with root package name */
    private final DeserializedClassDescriptor f35005e;

    public k(DeserializedClassDescriptor.b bVar, DeserializedClassDescriptor deserializedClassDescriptor) {
        this.f35004d = bVar;
        this.f35005e = deserializedClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassDescriptor f10;
        f10 = DeserializedClassDescriptor.b.f(this.f35004d, this.f35005e, (Name) obj);
        return f10;
    }
}
