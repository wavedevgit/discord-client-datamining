package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35033d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f35034e;

    /* renamed from: i  reason: collision with root package name */
    private final ProtoBuf.Property f35035i;

    public h(MemberDeserializer memberDeserializer, boolean z10, ProtoBuf.Property property) {
        this.f35033d = memberDeserializer;
        this.f35034e = z10;
        this.f35035i = property;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List n10;
        n10 = MemberDeserializer.n(this.f35033d, this.f35034e, this.f35035i);
        return n10;
    }
}
