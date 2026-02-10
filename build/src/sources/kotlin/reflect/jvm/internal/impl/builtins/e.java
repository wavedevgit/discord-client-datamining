package kotlin.reflect.jvm.internal.impl.builtins;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ModuleDescriptor f31946d;

    public e(ModuleDescriptor moduleDescriptor) {
        this.f31946d = moduleDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        MemberScope d10;
        d10 = ReflectionTypes.d(this.f31946d);
        return d10;
    }
}
