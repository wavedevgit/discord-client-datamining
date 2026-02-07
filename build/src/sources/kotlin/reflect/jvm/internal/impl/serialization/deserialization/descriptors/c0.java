package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.OptimizedImplementation f34492d;

    /* renamed from: e  reason: collision with root package name */
    private final DeserializedMemberScope f34493e;

    public c0(DeserializedMemberScope.OptimizedImplementation optimizedImplementation, DeserializedMemberScope deserializedMemberScope) {
        this.f34492d = optimizedImplementation;
        this.f34493e = deserializedMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set l10;
        l10 = DeserializedMemberScope.OptimizedImplementation.l(this.f34492d, this.f34493e);
        return l10;
    }
}
