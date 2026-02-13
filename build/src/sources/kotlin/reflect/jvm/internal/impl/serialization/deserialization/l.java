package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35048d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.Property f35049e;

    /* renamed from: i  reason: collision with root package name */
    private final DeserializedPropertyDescriptor f35050i;

    public l(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        this.f35048d = memberDeserializer;
        this.f35049e = property;
        this.f35050i = deserializedPropertyDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ConstantValue v10;
        v10 = MemberDeserializer.v(this.f35048d, this.f35049e, this.f35050i);
        return v10;
    }
}
