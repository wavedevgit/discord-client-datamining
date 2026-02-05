package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34462d;

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f34463e;

    /* renamed from: i  reason: collision with root package name */
    private final AnnotatedCallableKind f34464i;

    public g(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        this.f34462d = memberDeserializer;
        this.f34463e = messageLite;
        this.f34464i = annotatedCallableKind;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List k10;
        k10 = MemberDeserializer.k(this.f34462d, this.f34463e, this.f34464i);
        return k10;
    }
}
