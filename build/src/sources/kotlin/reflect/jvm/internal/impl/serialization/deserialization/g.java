package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34938d;

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f34939e;

    /* renamed from: i  reason: collision with root package name */
    private final AnnotatedCallableKind f34940i;

    public g(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        this.f34938d = memberDeserializer;
        this.f34939e = messageLite;
        this.f34940i = annotatedCallableKind;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List k10;
        k10 = MemberDeserializer.k(this.f34938d, this.f34939e, this.f34940i);
        return k10;
    }
}
