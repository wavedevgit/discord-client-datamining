package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35781d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f35782e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f35783i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f35784o;

    /* renamed from: p  reason: collision with root package name */
    private final int f35785p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f35786q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f35781d = memberDeserializer;
        this.f35782e = protoContainer;
        this.f35783i = messageLite;
        this.f35784o = annotatedCallableKind;
        this.f35785p = i10;
        this.f35786q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f35781d, this.f35782e, this.f35783i, this.f35784o, this.f35785p, this.f35786q);
        return y10;
    }
}
