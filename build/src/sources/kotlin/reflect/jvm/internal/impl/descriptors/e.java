package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final e f32390d = new e();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        FqName c10;
        c10 = PackageFragmentProviderImpl.c((PackageFragmentDescriptor) obj);
        return c10;
    }
}
