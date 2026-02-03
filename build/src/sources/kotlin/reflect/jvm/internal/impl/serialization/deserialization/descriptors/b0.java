package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedMemberScope.OptimizedImplementation f34898d;

    public b0(DeserializedMemberScope.OptimizedImplementation optimizedImplementation) {
        this.f34898d = optimizedImplementation;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        TypeAliasDescriptor p10;
        p10 = DeserializedMemberScope.OptimizedImplementation.p(this.f34898d, (Name) obj);
        return p10;
    }
}
