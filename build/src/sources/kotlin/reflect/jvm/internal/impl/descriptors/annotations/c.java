package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final FqName f32840d;

    public c(FqName fqName) {
        this.f32840d = fqName;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        AnnotationDescriptor d10;
        d10 = CompositeAnnotations.d(this.f32840d, (Annotations) obj);
        return d10;
    }
}
