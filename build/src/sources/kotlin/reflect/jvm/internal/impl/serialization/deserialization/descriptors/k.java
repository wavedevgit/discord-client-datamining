package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor.b f35746d;

    /* renamed from: e  reason: collision with root package name */
    private final DeserializedClassDescriptor f35747e;

    public k(DeserializedClassDescriptor.b bVar, DeserializedClassDescriptor deserializedClassDescriptor) {
        this.f35746d = bVar;
        this.f35747e = deserializedClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassDescriptor f10;
        f10 = DeserializedClassDescriptor.b.f(this.f35746d, this.f35747e, (Name) obj);
        return f10;
    }
}
