package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final BuiltInAnnotationDescriptor f33673d;

    public b(BuiltInAnnotationDescriptor builtInAnnotationDescriptor) {
        this.f33673d = builtInAnnotationDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        SimpleType b10;
        b10 = BuiltInAnnotationDescriptor.b(this.f33673d);
        return b10;
    }
}
