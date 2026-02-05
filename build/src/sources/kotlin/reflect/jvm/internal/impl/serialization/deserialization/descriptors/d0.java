package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.OptimizedImplementation f34427d;

    /* renamed from: e  reason: collision with root package name */
    private final DeserializedMemberScope f34428e;

    public d0(DeserializedMemberScope.OptimizedImplementation optimizedImplementation, DeserializedMemberScope deserializedMemberScope) {
        this.f34427d = optimizedImplementation;
        this.f34428e = deserializedMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set q10;
        q10 = DeserializedMemberScope.OptimizedImplementation.q(this.f34427d, this.f34428e);
        return q10;
    }
}
