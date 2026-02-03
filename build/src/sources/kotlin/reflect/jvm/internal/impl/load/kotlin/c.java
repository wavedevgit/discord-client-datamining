package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class c implements Function2 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f33716d = new c();

    @Override // kotlin.jvm.functions.Function2
    public Object invoke(Object obj, Object obj2) {
        Object u10;
        u10 = AbstractBinaryClassAnnotationAndConstantLoader.u((AnnotationsContainerWithConstants) obj, (MemberSignature) obj2);
        return u10;
    }
}
