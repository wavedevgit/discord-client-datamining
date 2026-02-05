package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final List f34432d;

    public g(List list) {
        this.f34432d = list;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List t10;
        t10 = DeserializedClassDescriptor.DeserializedClassMemberScope.t(this.f34432d);
        return t10;
    }
}
