package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final MemberDeserializer f35775d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f35776e;

    /* renamed from: i  reason: collision with root package name */
    private final ProtoBuf.Property f35777i;

    public h(MemberDeserializer memberDeserializer, boolean z10, ProtoBuf.Property property) {
        this.f35775d = memberDeserializer;
        this.f35776e = z10;
        this.f35777i = property;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List n10;
        n10 = MemberDeserializer.n(this.f35775d, this.f35776e, this.f35777i);
        return n10;
    }
}
