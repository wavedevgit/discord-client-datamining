package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34488d;

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f34489e;

    /* renamed from: i  reason: collision with root package name */
    private final AnnotatedCallableKind f34490i;

    public i(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        this.f34488d = memberDeserializer;
        this.f34489e = messageLite;
        this.f34490i = annotatedCallableKind;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List p10;
        p10 = MemberDeserializer.p(this.f34488d, this.f34489e, this.f34490i);
        return p10;
    }
}
