package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Map;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.b f35536d;

    public w(DeserializedMemberScope.b bVar) {
        this.f35536d = bVar;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Map J;
        J = DeserializedMemberScope.b.J(this.f35536d);
        return J;
    }
}
