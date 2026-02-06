package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f32983d;

    public f0(LazyJavaScope lazyJavaScope) {
        this.f32983d = lazyJavaScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set z10;
        z10 = LazyJavaScope.z(this.f32983d);
        return z10;
    }
}
