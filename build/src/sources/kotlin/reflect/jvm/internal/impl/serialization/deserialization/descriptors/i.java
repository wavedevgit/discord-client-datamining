package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor.DeserializedClassMemberScope f34434d;

    public i(DeserializedClassDescriptor.DeserializedClassMemberScope deserializedClassMemberScope) {
        this.f34434d = deserializedClassMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection A;
        A = DeserializedClassDescriptor.DeserializedClassMemberScope.A(this.f34434d);
        return A;
    }
}
