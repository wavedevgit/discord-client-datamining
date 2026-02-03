package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35557d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f35558e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f35559i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f35560o;

    /* renamed from: p  reason: collision with root package name */
    private final int f35561p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f35562q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f35557d = memberDeserializer;
        this.f35558e = protoContainer;
        this.f35559i = messageLite;
        this.f35560o = annotatedCallableKind;
        this.f35561p = i10;
        this.f35562q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f35557d, this.f35558e, this.f35559i, this.f35560o, this.f35561p, this.f35562q);
        return y10;
    }
}
