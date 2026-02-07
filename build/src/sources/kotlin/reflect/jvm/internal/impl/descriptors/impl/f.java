package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyPackageViewDescriptorImpl f32640d;

    public f(LazyPackageViewDescriptorImpl lazyPackageViewDescriptorImpl) {
        this.f32640d = lazyPackageViewDescriptorImpl;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        MemberScope h10;
        h10 = LazyPackageViewDescriptorImpl.h(this.f32640d);
        return h10;
    }
}
