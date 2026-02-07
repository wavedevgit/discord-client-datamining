package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34545d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.Property f34546e;

    /* renamed from: i  reason: collision with root package name */
    private final DeserializedPropertyDescriptor f34547i;

    public k(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        this.f34545d = memberDeserializer;
        this.f34546e = property;
        this.f34547i = deserializedPropertyDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ConstantValue t10;
        t10 = MemberDeserializer.t(this.f34545d, this.f34546e, this.f34547i);
        return t10;
    }
}
