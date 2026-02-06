package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ModuleDescriptorImpl f32594d;

    public h(ModuleDescriptorImpl moduleDescriptorImpl) {
        this.f32594d = moduleDescriptorImpl;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        CompositePackageFragmentProvider f10;
        f10 = ModuleDescriptorImpl.f(this.f32594d);
        return f10;
    }
}
