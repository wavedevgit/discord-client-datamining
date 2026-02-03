package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34932d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoBuf.Property f34933e;

    /* renamed from: i  reason: collision with root package name */
    private final DeserializedPropertyDescriptor f34934i;

    public e(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        this.f34932d = memberDeserializer;
        this.f34933e = property;
        this.f34934i = deserializedPropertyDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        NullableLazyValue s10;
        s10 = MemberDeserializer.s(this.f34932d, this.f34933e, this.f34934i);
        return s10;
    }
}
