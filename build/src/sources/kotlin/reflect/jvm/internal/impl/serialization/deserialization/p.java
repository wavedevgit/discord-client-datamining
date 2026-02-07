package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeDeserializer f34555d;

    public p(TypeDeserializer typeDeserializer) {
        this.f34555d = typeDeserializer;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ProtoBuf.Type v10;
        v10 = TypeDeserializer.v(this.f34555d, (ProtoBuf.Type) obj);
        return v10;
    }
}
