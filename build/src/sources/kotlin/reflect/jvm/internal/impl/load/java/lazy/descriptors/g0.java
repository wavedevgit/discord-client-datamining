package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f33033d;

    public g0(LazyJavaScope lazyJavaScope) {
        this.f33033d = lazyJavaScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set N;
        N = LazyJavaScope.N(this.f33033d);
        return N;
    }
}
