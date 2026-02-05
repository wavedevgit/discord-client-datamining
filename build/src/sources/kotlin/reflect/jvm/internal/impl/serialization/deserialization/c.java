package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedPackageFragmentImpl f34347d;

    public c(DeserializedPackageFragmentImpl deserializedPackageFragmentImpl) {
        this.f34347d = deserializedPackageFragmentImpl;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SourceElement d10;
        d10 = DeserializedPackageFragmentImpl.d(this.f34347d, (ClassId) obj);
        return d10;
    }
}
