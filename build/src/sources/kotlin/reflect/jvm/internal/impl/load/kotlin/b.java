package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class b implements Function2 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f34325d = new b();

    @Override // kotlin.jvm.functions.Function2
    public Object invoke(Object obj, Object obj2) {
        Object r10;
        r10 = AbstractBinaryClassAnnotationAndConstantLoader.r((AnnotationsContainerWithConstants) obj, (MemberSignature) obj2);
        return r10;
    }
}
