package kotlin.reflect.jvm.internal.impl.load.java.components;

import java.util.Map;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JavaRetentionAnnotationDescriptor f34115d;

    public d(JavaRetentionAnnotationDescriptor javaRetentionAnnotationDescriptor) {
        this.f34115d = javaRetentionAnnotationDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Map e10;
        e10 = JavaRetentionAnnotationDescriptor.e(this.f34115d);
        return e10;
    }
}
