package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34471d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f34472e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f34473i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f34474o;

    /* renamed from: p  reason: collision with root package name */
    private final int f34475p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f34476q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f34471d = memberDeserializer;
        this.f34472e = protoContainer;
        this.f34473i = messageLite;
        this.f34474o = annotatedCallableKind;
        this.f34475p = i10;
        this.f34476q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f34471d, this.f34472e, this.f34473i, this.f34474o, this.f34475p, this.f34476q);
        return y10;
    }
}
