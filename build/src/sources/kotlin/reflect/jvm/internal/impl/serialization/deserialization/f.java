package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34935d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.Property f34936e;

    /* renamed from: i  reason: collision with root package name */
    private final DeserializedPropertyDescriptor f34937i;

    public f(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        this.f34935d = memberDeserializer;
        this.f34936e = property;
        this.f34937i = deserializedPropertyDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        NullableLazyValue u10;
        u10 = MemberDeserializer.u(this.f34935d, this.f34936e, this.f34937i);
        return u10;
    }
}
