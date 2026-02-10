package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34470d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f34471e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f34472i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f34473o;

    /* renamed from: p  reason: collision with root package name */
    private final int f34474p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f34475q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f34470d = memberDeserializer;
        this.f34471e = protoContainer;
        this.f34472i = messageLite;
        this.f34473o = annotatedCallableKind;
        this.f34474p = i10;
        this.f34475q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f34470d, this.f34471e, this.f34472i, this.f34473o, this.f34474p, this.f34475q);
        return y10;
    }
}
