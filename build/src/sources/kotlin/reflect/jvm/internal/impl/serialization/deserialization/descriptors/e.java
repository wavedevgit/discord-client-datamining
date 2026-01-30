package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueClassRepresentation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor f35739d;

    public e(DeserializedClassDescriptor deserializedClassDescriptor) {
        this.f35739d = deserializedClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ValueClassRepresentation u10;
        u10 = DeserializedClassDescriptor.u(this.f35739d);
        return u10;
    }
}
