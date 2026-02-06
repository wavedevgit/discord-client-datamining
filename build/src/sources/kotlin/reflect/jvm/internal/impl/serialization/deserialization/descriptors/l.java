package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedClassDescriptor.b f34458d;

    public l(DeserializedClassDescriptor.b bVar) {
        this.f34458d = bVar;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set h10;
        h10 = DeserializedClassDescriptor.b.h(this.f34458d);
        return h10;
    }
}
