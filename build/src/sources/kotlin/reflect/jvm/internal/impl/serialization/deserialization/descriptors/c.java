package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor f34899d;

    public c(DeserializedClassDescriptor deserializedClassDescriptor) {
        this.f34899d = deserializedClassDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ClassDescriptor i10;
        i10 = DeserializedClassDescriptor.i(this.f34899d);
        return i10;
    }
}
