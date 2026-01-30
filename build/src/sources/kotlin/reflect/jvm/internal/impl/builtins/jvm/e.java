package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltIns;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltIns f33576d;

    public e(JvmBuiltIns jvmBuiltIns) {
        this.f33576d = jvmBuiltIns;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        JvmBuiltIns.Settings u10;
        u10 = JvmBuiltIns.u(this.f33576d);
        return u10;
    }
}
