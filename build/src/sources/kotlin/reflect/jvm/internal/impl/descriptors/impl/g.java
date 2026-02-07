package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageViewDescriptor;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ModuleDescriptorImpl f32641d;

    public g(ModuleDescriptorImpl moduleDescriptorImpl) {
        this.f32641d = moduleDescriptorImpl;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        PackageViewDescriptor g10;
        g10 = ModuleDescriptorImpl.g(this.f32641d, (FqName) obj);
        return g10;
    }
}
