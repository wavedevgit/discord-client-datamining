package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class x implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.b f34451d;

    /* renamed from: e  reason: collision with root package name */
    private final DeserializedMemberScope f34452e;

    public x(DeserializedMemberScope.b bVar, DeserializedMemberScope deserializedMemberScope) {
        this.f34451d = bVar;
        this.f34452e = deserializedMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set z10;
        z10 = DeserializedMemberScope.b.z(this.f34451d, this.f34452e);
        return z10;
    }
}
