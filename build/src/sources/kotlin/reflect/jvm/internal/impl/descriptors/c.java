package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final NotFoundClasses f33453d;

    public c(NotFoundClasses notFoundClasses) {
        this.f33453d = notFoundClasses;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        PackageFragmentDescriptor d10;
        d10 = NotFoundClasses.d(this.f33453d, (FqName) obj);
        return d10;
    }
}
