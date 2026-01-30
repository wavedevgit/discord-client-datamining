package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor f35736d;

    public d(DeserializedClassDescriptor deserializedClassDescriptor) {
        this.f35736d = deserializedClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection t10;
        t10 = DeserializedClassDescriptor.t(this.f35736d);
        return t10;
    }
}
