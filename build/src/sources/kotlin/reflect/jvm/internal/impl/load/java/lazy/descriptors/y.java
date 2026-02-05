package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaScope f32997d;

    public y(LazyJavaScope lazyJavaScope) {
        this.f32997d = lazyJavaScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection m10;
        m10 = LazyJavaScope.m(this.f32997d);
        return m10;
    }
}
