package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34491d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f34492e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f34493i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f34494o;

    /* renamed from: p  reason: collision with root package name */
    private final int f34495p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f34496q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f34491d = memberDeserializer;
        this.f34492e = protoContainer;
        this.f34493i = messageLite;
        this.f34494o = annotatedCallableKind;
        this.f34495p = i10;
        this.f34496q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f34491d, this.f34492e, this.f34493i, this.f34494o, this.f34495p, this.f34496q);
        return y10;
    }
}
