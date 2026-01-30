package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.load.java.JavaClassFinder;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.DeclaredMemberIndex;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaPackage;
import kotlin.reflect.jvm.internal.impl.load.java.structure.LightClassOriginKind;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinder;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinderKt;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.name.SpecialNames;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNullable;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.utils.FunctionsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nLazyJavaPackageScope.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LazyJavaPackageScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaPackageScope\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,188:1\n1634#2,3:189\n1625#2:192\n1869#2:193\n1870#2:195\n1626#2:196\n774#2:197\n865#2,2:198\n1#3:194\n1#3:200\n*S KotlinDebug\n*F\n+ 1 LazyJavaPackageScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaPackageScope\n*L\n159#1:189,3\n161#1:192\n161#1:193\n161#1:195\n161#1:196\n184#1:197\n184#1:198,2\n161#1:194\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaPackageScope extends LazyJavaStaticScope {

    /* renamed from: m  reason: collision with root package name */
    private final JavaPackage f34226m;

    /* renamed from: n  reason: collision with root package name */
    private final LazyJavaPackageFragment f34227n;

    /* renamed from: o  reason: collision with root package name */
    private final NullableLazyValue f34228o;

    /* renamed from: p  reason: collision with root package name */
    private final MemoizedFunctionToNullable f34229p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class KotlinClassLookupResult {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Found extends KotlinClassLookupResult {

            /* renamed from: a  reason: collision with root package name */
            private final ClassDescriptor f34230a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public Found(@NotNull ClassDescriptor descriptor) {
                super(null);
                Intrinsics.checkNotNullParameter(descriptor, "descriptor");
                this.f34230a = descriptor;
            }

            @NotNull
            public final ClassDescriptor getDescriptor() {
                return this.f34230a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class NotFound extends KotlinClassLookupResult {
            @NotNull
            public static final NotFound INSTANCE = new NotFound();

            private NotFound() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class SyntheticClass extends KotlinClassLookupResult {
            @NotNull
            public static final SyntheticClass INSTANCE = new SyntheticClass();

            private SyntheticClass() {
                super(null);
            }
        }

        public /* synthetic */ KotlinClassLookupResult(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private KotlinClassLookupResult() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Name f34231a;

        /* renamed from: b  reason: collision with root package name */
        private final JavaClass f34232b;

        public a(Name name, JavaClass javaClass) {
            Intrinsics.checkNotNullParameter(name, "name");
            this.f34231a = name;
            this.f34232b = javaClass;
        }

        public final JavaClass a() {
            return this.f34232b;
        }

        public final Name b() {
            return this.f34231a;
        }

        public boolean equals(Object obj) {
            if ((obj instanceof a) && Intrinsics.areEqual(this.f34231a, ((a) obj).f34231a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f34231a.hashCode();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LazyJavaPackageScope(@NotNull LazyJavaResolverContext c10, @NotNull JavaPackage jPackage, @NotNull LazyJavaPackageFragment ownerDescriptor) {
        super(c10);
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(jPackage, "jPackage");
        Intrinsics.checkNotNullParameter(ownerDescriptor, "ownerDescriptor");
        this.f34226m = jPackage;
        this.f34227n = ownerDescriptor;
        this.f34228o = c10.getStorageManager().createNullableLazyValue(new w(c10, this));
        this.f34229p = c10.getStorageManager().createMemoizedFunctionWithNullableValues(new x(this, c10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptor Y(LazyJavaPackageScope lazyJavaPackageScope, LazyJavaResolverContext lazyJavaResolverContext, a request) {
        KotlinClassFinder.Result findKotlinClassOrContent;
        KotlinJvmBinaryClass kotlinJvmBinaryClass;
        ClassId classId;
        LightClassOriginKind lightClassOriginKind;
        FqName fqName;
        KotlinClassFinder.Result.ClassFileContent classFileContent;
        byte[] bArr;
        Intrinsics.checkNotNullParameter(request, "request");
        ClassId classId2 = new ClassId(lazyJavaPackageScope.getOwnerDescriptor().getFqName(), request.b());
        if (request.a() != null) {
            findKotlinClassOrContent = lazyJavaResolverContext.getComponents().getKotlinClassFinder().findKotlinClassOrContent(request.a(), lazyJavaPackageScope.a0());
        } else {
            findKotlinClassOrContent = lazyJavaResolverContext.getComponents().getKotlinClassFinder().findKotlinClassOrContent(classId2, lazyJavaPackageScope.a0());
        }
        if (findKotlinClassOrContent != null) {
            kotlinJvmBinaryClass = findKotlinClassOrContent.toKotlinJvmBinaryClass();
        } else {
            kotlinJvmBinaryClass = null;
        }
        if (kotlinJvmBinaryClass != null) {
            classId = kotlinJvmBinaryClass.getClassId();
        } else {
            classId = null;
        }
        if (classId != null && (classId.isNestedClass() || classId.isLocal())) {
            return null;
        }
        KotlinClassLookupResult d02 = lazyJavaPackageScope.d0(kotlinJvmBinaryClass);
        if (d02 instanceof KotlinClassLookupResult.Found) {
            return ((KotlinClassLookupResult.Found) d02).getDescriptor();
        }
        if (d02 instanceof KotlinClassLookupResult.SyntheticClass) {
            return null;
        }
        if (d02 instanceof KotlinClassLookupResult.NotFound) {
            JavaClass a10 = request.a();
            if (a10 == null) {
                JavaClassFinder finder = lazyJavaResolverContext.getComponents().getFinder();
                if (findKotlinClassOrContent instanceof KotlinClassFinder.Result.ClassFileContent) {
                    classFileContent = (KotlinClassFinder.Result.ClassFileContent) findKotlinClassOrContent;
                } else {
                    classFileContent = null;
                }
                if (classFileContent != null) {
                    bArr = classFileContent.getContent();
                } else {
                    bArr = null;
                }
                a10 = finder.findClass(new JavaClassFinder.Request(classId2, bArr, null, 4, null));
            }
            JavaClass javaClass = a10;
            if (javaClass != null) {
                lightClassOriginKind = javaClass.getLightClassOriginKind();
            } else {
                lightClassOriginKind = null;
            }
            if (lightClassOriginKind != LightClassOriginKind.BINARY) {
                if (javaClass != null) {
                    fqName = javaClass.getFqName();
                } else {
                    fqName = null;
                }
                if (fqName == null || fqName.isRoot() || !Intrinsics.areEqual(fqName.parent(), lazyJavaPackageScope.getOwnerDescriptor().getFqName())) {
                    return null;
                }
                LazyJavaClassDescriptor lazyJavaClassDescriptor = new LazyJavaClassDescriptor(lazyJavaResolverContext, lazyJavaPackageScope.getOwnerDescriptor(), javaClass, null, 8, null);
                lazyJavaResolverContext.getComponents().getJavaClassesTracker().reportClass(lazyJavaClassDescriptor);
                return lazyJavaClassDescriptor;
            }
            throw new IllegalStateException("Couldn't find kotlin binary class for light class created by kotlin binary file\nJavaClass: " + javaClass + "\nClassId: " + classId2 + "\nfindKotlinClass(JavaClass) = " + KotlinClassFinderKt.findKotlinClass(lazyJavaResolverContext.getComponents().getKotlinClassFinder(), javaClass, lazyJavaPackageScope.a0()) + "\nfindKotlinClass(ClassId) = " + KotlinClassFinderKt.findKotlinClass(lazyJavaResolverContext.getComponents().getKotlinClassFinder(), classId2, lazyJavaPackageScope.a0()) + '\n');
        }
        throw new ir.p();
    }

    private final ClassDescriptor Z(Name name, JavaClass javaClass) {
        if (!SpecialNames.INSTANCE.isSafeIdentifier(name)) {
            return null;
        }
        Set set = (Set) this.f34228o.invoke();
        if (javaClass == null && set != null && !set.contains(name.asString())) {
            return null;
        }
        return (ClassDescriptor) this.f34229p.invoke(new a(name, javaClass));
    }

    private final MetadataVersion a0() {
        return C().getComponents().getDeserializedDescriptorResolver().getComponents().getConfiguration().getMetadataVersion();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Set c0(LazyJavaResolverContext lazyJavaResolverContext, LazyJavaPackageScope lazyJavaPackageScope) {
        return lazyJavaResolverContext.getComponents().getFinder().knownClassNamesInPackage(lazyJavaPackageScope.getOwnerDescriptor().getFqName());
    }

    private final KotlinClassLookupResult d0(KotlinJvmBinaryClass kotlinJvmBinaryClass) {
        if (kotlinJvmBinaryClass == null) {
            return KotlinClassLookupResult.NotFound.INSTANCE;
        }
        if (kotlinJvmBinaryClass.getClassHeader().getKind() == KotlinClassHeader.Kind.CLASS) {
            ClassDescriptor resolveClass = C().getComponents().getDeserializedDescriptorResolver().resolveClass(kotlinJvmBinaryClass);
            if (resolveClass != null) {
                return new KotlinClassLookupResult.Found(resolveClass);
            }
            return KotlinClassLookupResult.NotFound.INSTANCE;
        }
        return KotlinClassLookupResult.SyntheticClass.INSTANCE;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    /* renamed from: b0 */
    public LazyJavaPackageFragment getOwnerDescriptor() {
        return this.f34227n;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected Set computeFunctionNames(DescriptorKindFilter kindFilter, Function1 function1) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        return x0.d();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected DeclaredMemberIndex computeMemberIndex() {
        return DeclaredMemberIndex.Empty.INSTANCE;
    }

    public final ClassDescriptor findClassifierByJavaClass$descriptors_jvm(@NotNull JavaClass javaClass) {
        Intrinsics.checkNotNullParameter(javaClass, "javaClass");
        return Z(javaClass.getName(), javaClass);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    @NotNull
    public Collection<DeclarationDescriptor> getContributedDescriptors(@NotNull DescriptorKindFilter kindFilter, @NotNull Function1<? super Name, Boolean> nameFilter) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        DescriptorKindFilter.Companion companion = DescriptorKindFilter.Companion;
        if (!kindFilter.acceptsKinds(companion.getNON_SINGLETON_CLASSIFIERS_MASK() | companion.getCLASSIFIERS_MASK())) {
            return CollectionsKt.l();
        }
        ArrayList arrayList = new ArrayList();
        for (Object obj : (Iterable) B().invoke()) {
            DeclarationDescriptor declarationDescriptor = (DeclarationDescriptor) obj;
            if (declarationDescriptor instanceof ClassDescriptor) {
                Name name = ((ClassDescriptor) declarationDescriptor).getName();
                Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                if (((Boolean) nameFilter.invoke(name)).booleanValue()) {
                    arrayList.add(obj);
                }
            }
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Collection<PropertyDescriptor> getContributedVariables(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        return CollectionsKt.l();
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected Set o(DescriptorKindFilter kindFilter, Function1 function1) {
        Name name;
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        if (!kindFilter.acceptsKinds(DescriptorKindFilter.Companion.getNON_SINGLETON_CLASSIFIERS_MASK())) {
            return x0.d();
        }
        Set<String> set = (Set) this.f34228o.invoke();
        if (set != null) {
            HashSet hashSet = new HashSet();
            for (String str : set) {
                hashSet.add(Name.identifier(str));
            }
            return hashSet;
        }
        JavaPackage javaPackage = this.f34226m;
        if (function1 == null) {
            function1 = FunctionsKt.alwaysTrue();
        }
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (JavaClass javaClass : javaPackage.getClasses(function1)) {
            if (javaClass.getLightClassOriginKind() == LightClassOriginKind.SOURCE) {
                name = null;
            } else {
                name = javaClass.getName();
            }
            if (name != null) {
                linkedHashSet.add(name);
            }
        }
        return linkedHashSet;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected void s(Collection result, Name name) {
        Intrinsics.checkNotNullParameter(result, "result");
        Intrinsics.checkNotNullParameter(name, "name");
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaScope
    protected Set u(DescriptorKindFilter kindFilter, Function1 function1) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        return x0.d();
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeImpl, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    /* renamed from: getContributedClassifier */
    public ClassDescriptor mo1199getContributedClassifier(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        return Z(name, null);
    }
}
