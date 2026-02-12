package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.b f34453d;

    /* renamed from: e  reason: collision with root package name */
    private final DeserializedMemberScope f34454e;

    public y(DeserializedMemberScope.b bVar, DeserializedMemberScope deserializedMemberScope) {
        this.f34453d = bVar;
        this.f34454e = deserializedMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set L;
        L = DeserializedMemberScope.b.L(this.f34453d, this.f34454e);
        return L;
    }
}
