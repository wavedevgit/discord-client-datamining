package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.builtins.BuiltInsPackageFragment;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f33555d = new b();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        BuiltInsPackageFragment a10;
        a10 = JvmBuiltInClassDescriptorFactory.a((ModuleDescriptor) obj);
        return a10;
    }
}
