package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmPackageScope f32954d;

    public b(JvmPackageScope jvmPackageScope) {
        this.f32954d = jvmPackageScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        MemberScope[] c10;
        c10 = JvmPackageScope.c(this.f32954d);
        return c10;
    }
}
