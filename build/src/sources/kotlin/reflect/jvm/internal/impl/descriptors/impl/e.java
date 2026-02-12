package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyPackageViewDescriptorImpl f32571d;

    public e(LazyPackageViewDescriptorImpl lazyPackageViewDescriptorImpl) {
        this.f32571d = lazyPackageViewDescriptorImpl;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean e10;
        e10 = LazyPackageViewDescriptorImpl.e(this.f32571d);
        return Boolean.valueOf(e10);
    }
}
