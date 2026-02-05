package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltInsCustomizer f32276d;

    public m(JvmBuiltInsCustomizer jvmBuiltInsCustomizer) {
        this.f32276d = jvmBuiltInsCustomizer;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Boolean A;
        A = JvmBuiltInsCustomizer.A(this.f32276d, (CallableMemberDescriptor) obj);
        return A;
    }
}
