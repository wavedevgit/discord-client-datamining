package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.HashMap;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class v implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaPackageFragment f33468d;

    public v(LazyJavaPackageFragment lazyJavaPackageFragment) {
        this.f33468d = lazyJavaPackageFragment;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        HashMap f10;
        f10 = LazyJavaPackageFragment.f(this.f33468d);
        return f10;
    }
}
