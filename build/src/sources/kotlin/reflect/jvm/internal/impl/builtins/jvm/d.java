package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ModuleDescriptor f32264d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32265e;

    public d(ModuleDescriptor moduleDescriptor, boolean z10) {
        this.f32264d = moduleDescriptor;
        this.f32265e = z10;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        JvmBuiltIns.Settings w10;
        w10 = JvmBuiltIns.w(this.f32264d, this.f32265e);
        return w10;
    }
}
