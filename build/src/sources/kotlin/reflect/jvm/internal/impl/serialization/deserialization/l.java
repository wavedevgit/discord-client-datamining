package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34956d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.Property f34957e;

    /* renamed from: i  reason: collision with root package name */
    private final DeserializedPropertyDescriptor f34958i;

    public l(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        this.f34956d = memberDeserializer;
        this.f34957e = property;
        this.f34958i = deserializedPropertyDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ConstantValue v10;
        v10 = MemberDeserializer.v(this.f34956d, this.f34957e, this.f34958i);
        return v10;
    }
}
