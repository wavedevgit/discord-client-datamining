package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope f35752d;

    public o(DeserializedMemberScope deserializedMemberScope) {
        this.f35752d = deserializedMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set e10;
        e10 = DeserializedMemberScope.e(this.f35752d);
        return e10;
    }
}
