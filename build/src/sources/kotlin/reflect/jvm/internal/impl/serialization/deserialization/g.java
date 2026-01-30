package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35772d;

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f35773e;

    /* renamed from: i  reason: collision with root package name */
    private final AnnotatedCallableKind f35774i;

    public g(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        this.f35772d = memberDeserializer;
        this.f35773e = messageLite;
        this.f35774i = annotatedCallableKind;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List k10;
        k10 = MemberDeserializer.k(this.f35772d, this.f35773e, this.f35774i);
        return k10;
    }
}
