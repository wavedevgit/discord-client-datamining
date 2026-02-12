package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaPackageFragment;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaPackage;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaPackageFragmentProvider f32867d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaPackage f32868e;

    public d(LazyJavaPackageFragmentProvider lazyJavaPackageFragmentProvider, JavaPackage javaPackage) {
        this.f32867d = lazyJavaPackageFragmentProvider;
        this.f32868e = javaPackage;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        LazyJavaPackageFragment c10;
        c10 = LazyJavaPackageFragmentProvider.c(this.f32867d, this.f32868e);
        return c10;
    }
}
