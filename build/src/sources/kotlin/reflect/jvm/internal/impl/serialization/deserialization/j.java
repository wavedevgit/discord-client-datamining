package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35039d;

    /* renamed from: e  reason: collision with root package name */
    private final ProtoContainer f35040e;

    /* renamed from: i  reason: collision with root package name */
    private final MessageLite f35041i;

    /* renamed from: o  reason: collision with root package name */
    private final AnnotatedCallableKind f35042o;

    /* renamed from: p  reason: collision with root package name */
    private final int f35043p;

    /* renamed from: q  reason: collision with root package name */
    private final ProtoBuf.ValueParameter f35044q;

    public j(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        this.f35039d = memberDeserializer;
        this.f35040e = protoContainer;
        this.f35041i = messageLite;
        this.f35042o = annotatedCallableKind;
        this.f35043p = i10;
        this.f35044q = valueParameter;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List y10;
        y10 = MemberDeserializer.y(this.f35039d, this.f35040e, this.f35041i, this.f35042o, this.f35043p, this.f35044q);
        return y10;
    }
}
