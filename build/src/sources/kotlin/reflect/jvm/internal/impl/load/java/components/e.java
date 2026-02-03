package kotlin.reflect.jvm.internal.impl.load.java.components;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JavaTargetAnnotationDescriptor f33892d;

    public e(JavaTargetAnnotationDescriptor javaTargetAnnotationDescriptor) {
        this.f33892d = javaTargetAnnotationDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Map e10;
        e10 = JavaTargetAnnotationDescriptor.e(this.f33892d);
        return e10;
    }
}
