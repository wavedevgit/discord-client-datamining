package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor f34915d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.EnumEntry f34916e;

    public m(DeserializedClassDescriptor deserializedClassDescriptor, ProtoBuf.EnumEntry enumEntry) {
        this.f34915d = deserializedClassDescriptor;
        this.f34916e = enumEntry;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List g10;
        g10 = DeserializedClassDescriptor.b.g(this.f34915d, this.f34916e);
        return g10;
    }
}
