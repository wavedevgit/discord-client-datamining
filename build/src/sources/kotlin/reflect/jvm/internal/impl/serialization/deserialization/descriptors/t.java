package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class t implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.b f34467d;

    public t(DeserializedMemberScope.b bVar) {
        this.f34467d = bVar;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List o10;
        o10 = DeserializedMemberScope.b.o(this.f34467d);
        return o10;
    }
}
