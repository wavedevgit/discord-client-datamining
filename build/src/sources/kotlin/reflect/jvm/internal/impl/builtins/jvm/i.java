package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltInsCustomizer f32271d;

    public i(JvmBuiltInsCustomizer jvmBuiltInsCustomizer) {
        this.f32271d = jvmBuiltInsCustomizer;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        KotlinType m10;
        m10 = JvmBuiltInsCustomizer.m(this.f32271d);
        return m10;
    }
}
