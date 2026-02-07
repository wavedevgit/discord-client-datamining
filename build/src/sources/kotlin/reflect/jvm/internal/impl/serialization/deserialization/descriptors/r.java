package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.b f34513d;

    public r(DeserializedMemberScope.b bVar) {
        this.f34513d = bVar;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List p10;
        p10 = DeserializedMemberScope.b.p(this.f34513d);
        return p10;
    }
}
