package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractBinaryClassAnnotationAndConstantLoader f34532d;

    public a(AbstractBinaryClassAnnotationAndConstantLoader abstractBinaryClassAnnotationAndConstantLoader) {
        this.f34532d = abstractBinaryClassAnnotationAndConstantLoader;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        AnnotationsContainerWithConstants v10;
        v10 = AbstractBinaryClassAnnotationAndConstantLoader.v(this.f34532d, (KotlinJvmBinaryClass) obj);
        return v10;
    }
}
