package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeDeserializer f34484d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.Type f34485e;

    public o(TypeDeserializer typeDeserializer, ProtoBuf.Type type) {
        this.f34484d = typeDeserializer;
        this.f34485e = type;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List o10;
        o10 = TypeDeserializer.o(this.f34484d, this.f34485e);
        return o10;
    }
}
