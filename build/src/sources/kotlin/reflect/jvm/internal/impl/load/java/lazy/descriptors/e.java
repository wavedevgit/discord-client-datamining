package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaAnnotationDescriptor f33436d;

    public e(LazyJavaAnnotationDescriptor lazyJavaAnnotationDescriptor) {
        this.f33436d = lazyJavaAnnotationDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Map d10;
        d10 = LazyJavaAnnotationDescriptor.d(this.f33436d);
        return d10;
    }
}
