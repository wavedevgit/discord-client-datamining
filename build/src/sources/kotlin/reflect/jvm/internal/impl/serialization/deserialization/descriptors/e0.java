package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedTypeParameterDescriptor f34430d;

    public e0(DeserializedTypeParameterDescriptor deserializedTypeParameterDescriptor) {
        this.f34430d = deserializedTypeParameterDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List e10;
        e10 = DeserializedTypeParameterDescriptor.e(this.f34430d);
        return e10;
    }
}
