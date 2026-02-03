package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.reflect.Method;
import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ReflectJavaClass f33738d;

    public e(ReflectJavaClass reflectJavaClass) {
        this.f33738d = reflectJavaClass;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean c10;
        c10 = ReflectJavaClass.c(this.f33738d, (Method) obj);
        return Boolean.valueOf(c10);
    }
}
