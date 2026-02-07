package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34530d;

    /* renamed from: e  reason: collision with root package name */
    private final MessageLite f34531e;

    /* renamed from: i  reason: collision with root package name */
    private final AnnotatedCallableKind f34532i;

    public g(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        this.f34530d = memberDeserializer;
        this.f34531e = messageLite;
        this.f34532i = annotatedCallableKind;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List k10;
        k10 = MemberDeserializer.k(this.f34530d, this.f34531e, this.f34532i);
        return k10;
    }
}
