package kotlin.reflect.jvm.internal.impl.resolve.jvm;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.load.java.components.JavaResolverCache;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaPackageFragmentProvider;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaPackageFragment;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.LightClassOriginKind;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaDescriptorResolver {

    /* renamed from: a  reason: collision with root package name */
    private final LazyJavaPackageFragmentProvider f34157a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaResolverCache f34158b;

    public JavaDescriptorResolver(@NotNull LazyJavaPackageFragmentProvider packageFragmentProvider, @NotNull JavaResolverCache javaResolverCache) {
        Intrinsics.checkNotNullParameter(packageFragmentProvider, "packageFragmentProvider");
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        this.f34157a = packageFragmentProvider;
        this.f34158b = javaResolverCache;
    }

    @NotNull
    public final LazyJavaPackageFragmentProvider getPackageFragmentProvider() {
        return this.f34157a;
    }

    public final ClassDescriptor resolveClass(@NotNull JavaClass javaClass) {
        LazyJavaPackageFragment lazyJavaPackageFragment;
        MemberScope memberScope;
        ClassifierDescriptor classifierDescriptor;
        Intrinsics.checkNotNullParameter(javaClass, "javaClass");
        FqName fqName = javaClass.getFqName();
        if (fqName != null && javaClass.getLightClassOriginKind() == LightClassOriginKind.SOURCE) {
            return this.f34158b.getClassResolvedFromSource(fqName);
        }
        JavaClass outerClass = javaClass.getOuterClass();
        if (outerClass != null) {
            ClassDescriptor resolveClass = resolveClass(outerClass);
            if (resolveClass != null) {
                memberScope = resolveClass.getUnsubstitutedInnerClassesScope();
            } else {
                memberScope = null;
            }
            if (memberScope != null) {
                classifierDescriptor = memberScope.mo1200getContributedClassifier(javaClass.getName(), NoLookupLocation.FROM_JAVA_LOADER);
            } else {
                classifierDescriptor = null;
            }
            if (!(classifierDescriptor instanceof ClassDescriptor)) {
                return null;
            }
            return (ClassDescriptor) classifierDescriptor;
        } else if (fqName == null || (lazyJavaPackageFragment = (LazyJavaPackageFragment) CollectionsKt.firstOrNull(this.f34157a.getPackageFragments(fqName.parent()))) == null) {
            return null;
        } else {
            return lazyJavaPackageFragment.findClassifierByJavaClass$descriptors_jvm(javaClass);
        }
    }
}
