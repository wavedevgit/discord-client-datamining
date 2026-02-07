package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34539d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f34540e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f34541i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f34542o;

    /* renamed from: p  reason: collision with root package name */
    private final int f34543p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f34544q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f34539d = memberDeserializer;
        this.f34540e = protoContainer;
        this.f34541i = messageLite;
        this.f34542o = annotatedCallableKind;
        this.f34543p = i10;
        this.f34544q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f34539d, this.f34540e, this.f34541i, this.f34542o, this.f34543p, this.f34544q);
        return y10;
    }
}
