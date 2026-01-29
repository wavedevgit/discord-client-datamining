package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35765d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f35766e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f35767i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f35768o;

    /* renamed from: p  reason: collision with root package name */
    private final int f35769p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f35770q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f35765d = memberDeserializer;
        this.f35766e = protoContainer;
        this.f35767i = messageLite;
        this.f35768o = annotatedCallableKind;
        this.f35769p = i10;
        this.f35770q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f35765d, this.f35766e, this.f35767i, this.f35768o, this.f35769p, this.f35770q);
        return y10;
    }
}
