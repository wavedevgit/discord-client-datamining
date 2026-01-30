package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor f35745d;

    public j(DeserializedClassDescriptor deserializedClassDescriptor) {
        this.f35745d = deserializedClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List D;
        D = DeserializedClassDescriptor.a.D(this.f35745d);
        return D;
    }
}
