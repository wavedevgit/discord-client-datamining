package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34947d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f34948e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f34949i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f34950o;

    /* renamed from: p  reason: collision with root package name */
    private final int f34951p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f34952q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f34947d = memberDeserializer;
        this.f34948e = protoContainer;
        this.f34949i = messageLite;
        this.f34950o = annotatedCallableKind;
        this.f34951p = i10;
        this.f34952q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f34947d, this.f34948e, this.f34949i, this.f34950o, this.f34951p, this.f34952q);
        return y10;
    }
}
