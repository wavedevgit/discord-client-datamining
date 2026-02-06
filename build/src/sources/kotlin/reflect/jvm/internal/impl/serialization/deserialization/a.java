package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractDeserializedPackageFragmentProvider f34363d;

    public a(AbstractDeserializedPackageFragmentProvider abstractDeserializedPackageFragmentProvider) {
        this.f34363d = abstractDeserializedPackageFragmentProvider;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        PackageFragmentDescriptor c10;
        c10 = AbstractDeserializedPackageFragmentProvider.c(this.f34363d, (FqName) obj);
        return c10;
    }
}
