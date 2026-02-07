package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyPackageViewDescriptorImpl f32638d;

    public d(LazyPackageViewDescriptorImpl lazyPackageViewDescriptorImpl) {
        this.f32638d = lazyPackageViewDescriptorImpl;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List f10;
        f10 = LazyPackageViewDescriptorImpl.f(this.f32638d);
        return f10;
    }
}
