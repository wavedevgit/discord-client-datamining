package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35036d;

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f35037e;

    /* renamed from: i  reason: collision with root package name */
    private final AnnotatedCallableKind f35038i;

    public i(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        this.f35036d = memberDeserializer;
        this.f35037e = messageLite;
        this.f35038i = annotatedCallableKind;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List p10;
        p10 = MemberDeserializer.p(this.f35036d, this.f35037e, this.f35038i);
        return p10;
    }
}
