package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class f implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final FqName f33681d;

    public f(FqName fqName) {
        this.f33681d = fqName;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean d10;
        d10 = PackageFragmentProviderImpl.d(this.f33681d, (FqName) obj);
        return Boolean.valueOf(d10);
    }
}
