package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f34465d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f34466e;

    /* renamed from: i  reason: collision with root package name */
    private final ProtoBuf.Property f34467i;

    public h(MemberDeserializer memberDeserializer, boolean z10, ProtoBuf.Property property) {
        this.f34465d = memberDeserializer;
        this.f34466e = z10;
        this.f34467i = property;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List n10;
        n10 = MemberDeserializer.n(this.f34465d, this.f34466e, this.f34467i);
        return n10;
    }
}
