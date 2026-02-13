package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.io.ByteArrayInputStream;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.Parser;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DeserializedMemberScope$OptimizedImplementation$computeDescriptors$1$1 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ Parser f34958d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ ByteArrayInputStream f34959e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ DeserializedMemberScope f34960i;

    public DeserializedMemberScope$OptimizedImplementation$computeDescriptors$1$1(Parser parser, ByteArrayInputStream byteArrayInputStream, DeserializedMemberScope deserializedMemberScope) {
        this.f34958d = parser;
        this.f34959e = byteArrayInputStream;
        this.f34960i = deserializedMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public final MessageLite invoke() {
        return (MessageLite) this.f34958d.parseDelimitedFrom(this.f34959e, this.f34960i.l().getComponents().getExtensionRegistryLite());
    }
}
