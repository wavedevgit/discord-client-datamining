package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class u implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaPackageFragment f33467d;

    public u(LazyJavaPackageFragment lazyJavaPackageFragment) {
        this.f33467d = lazyJavaPackageFragment;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List g10;
        g10 = LazyJavaPackageFragment.g(this.f33467d);
        return g10;
    }
}
