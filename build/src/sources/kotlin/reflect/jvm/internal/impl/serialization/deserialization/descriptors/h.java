package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor.DeserializedClassMemberScope f34501d;

    public h(DeserializedClassDescriptor.DeserializedClassMemberScope deserializedClassMemberScope) {
        this.f34501d = deserializedClassMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection x10;
        x10 = DeserializedClassDescriptor.DeserializedClassMemberScope.x(this.f34501d);
        return x10;
    }
}
