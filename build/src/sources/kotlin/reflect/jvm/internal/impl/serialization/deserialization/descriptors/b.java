package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor f35731d;

    public b(DeserializedClassDescriptor deserializedClassDescriptor) {
        this.f35731d = deserializedClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection p10;
        p10 = DeserializedClassDescriptor.p(this.f35731d);
        return p10;
    }
}
