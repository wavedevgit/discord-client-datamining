package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34953d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.Property f34954e;

    /* renamed from: i  reason: collision with root package name */
    private final DeserializedPropertyDescriptor f34955i;

    public k(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        this.f34953d = memberDeserializer;
        this.f34954e = property;
        this.f34955i = deserializedPropertyDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ConstantValue t10;
        t10 = MemberDeserializer.t(this.f34953d, this.f34954e, this.f34955i);
        return t10;
    }
}
