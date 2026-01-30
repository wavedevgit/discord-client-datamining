package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class t implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaPackageFragment f34300d;

    public t(LazyJavaPackageFragment lazyJavaPackageFragment) {
        this.f34300d = lazyJavaPackageFragment;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Map e10;
        e10 = LazyJavaPackageFragment.e(this.f34300d);
        return e10;
    }
}
