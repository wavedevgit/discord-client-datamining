package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.incremental.UtilsKt;
import kotlin.reflect.jvm.internal.impl.incremental.components.LookupLocation;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaPackage;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScopeKt;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.util.collectionUtils.ScopeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJvmPackageScope.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JvmPackageScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/JvmPackageScope\n+ 2 scopeUtils.kt\norg/jetbrains/kotlin/util/collectionUtils/ScopeUtilsKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 5 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 6 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,109:1\n92#2,14:110\n60#2,5:124\n60#2,5:129\n60#2,5:134\n10557#3,5:139\n10557#3,5:144\n1617#4,9:149\n1869#4:158\n1870#4:160\n1626#4:161\n1#5:159\n37#6:162\n36#6,3:163\n*S KotlinDebug\n*F\n+ 1 JvmPackageScope.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/JvmPackageScope\n*L\n58#1:110,14\n63#1:124,5\n68#1:129,5\n74#1:134,5\n76#1:139,5\n80#1:144,5\n46#1:149,9\n46#1:158\n46#1:160\n46#1:161\n46#1:159\n49#1:162\n49#1:163,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmPackageScope implements MemberScope {

    /* renamed from: e  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32943e = {Reflection.property1(new PropertyReference1Impl(JvmPackageScope.class, "kotlinScopes", "getKotlinScopes()[Lorg/jetbrains/kotlin/resolve/scopes/MemberScope;", 0))};

    /* renamed from: a  reason: collision with root package name */
    private final LazyJavaResolverContext f32944a;

    /* renamed from: b  reason: collision with root package name */
    private final LazyJavaPackageFragment f32945b;

    /* renamed from: c  reason: collision with root package name */
    private final LazyJavaPackageScope f32946c;

    /* renamed from: d  reason: collision with root package name */
    private final NotNullLazyValue f32947d;

    public JvmPackageScope(@NotNull LazyJavaResolverContext c10, @NotNull JavaPackage jPackage, @NotNull LazyJavaPackageFragment packageFragment) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(jPackage, "jPackage");
        Intrinsics.checkNotNullParameter(packageFragment, "packageFragment");
        this.f32944a = c10;
        this.f32945b = packageFragment;
        this.f32946c = new LazyJavaPackageScope(c10, jPackage, packageFragment);
        this.f32947d = c10.getStorageManager().createLazyValue(new b(this));
    }

    private final MemberScope[] b() {
        return (MemberScope[]) StorageKt.getValue(this.f32947d, this, f32943e[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MemberScope[] c(JvmPackageScope jvmPackageScope) {
        ArrayList arrayList = new ArrayList();
        for (KotlinJvmBinaryClass kotlinJvmBinaryClass : jvmPackageScope.f32945b.getBinaryClasses$descriptors_jvm().values()) {
            MemberScope createKotlinPackagePartScope = jvmPackageScope.f32944a.getComponents().getDeserializedDescriptorResolver().createKotlinPackagePartScope(jvmPackageScope.f32945b, kotlinJvmBinaryClass);
            if (createKotlinPackagePartScope != null) {
                arrayList.add(createKotlinPackagePartScope);
            }
        }
        return (MemberScope[]) ScopeUtilsKt.listOfNonEmptyScopes(arrayList).toArray(new MemberScope[0]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    public Set<Name> getClassifierNames() {
        Set<Name> flatMapClassifierNamesOrNull = MemberScopeKt.flatMapClassifierNamesOrNull(kotlin.collections.i.H(b()));
        if (flatMapClassifierNamesOrNull != null) {
            flatMapClassifierNamesOrNull.addAll(this.f32946c.getClassifierNames());
            return flatMapClassifierNamesOrNull;
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    /* renamed from: getContributedClassifier */
    public ClassifierDescriptor mo1200getContributedClassifier(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        mo1203recordLookup(name, location);
        ClassDescriptor mo1200getContributedClassifier = this.f32946c.mo1200getContributedClassifier(name, location);
        if (mo1200getContributedClassifier != null) {
            return mo1200getContributedClassifier;
        }
        ClassifierDescriptor classifierDescriptor = null;
        for (MemberScope memberScope : b()) {
            ClassifierDescriptor mo1200getContributedClassifier2 = memberScope.mo1200getContributedClassifier(name, location);
            if (mo1200getContributedClassifier2 != null) {
                if ((mo1200getContributedClassifier2 instanceof ClassifierDescriptorWithTypeParameters) && ((MemberDescriptor) mo1200getContributedClassifier2).isExpect()) {
                    if (classifierDescriptor == null) {
                        classifierDescriptor = mo1200getContributedClassifier2;
                    }
                } else {
                    return mo1200getContributedClassifier2;
                }
            }
        }
        return classifierDescriptor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    @NotNull
    public Collection<DeclarationDescriptor> getContributedDescriptors(@NotNull DescriptorKindFilter kindFilter, @NotNull Function1<? super Name, Boolean> nameFilter) {
        Intrinsics.checkNotNullParameter(kindFilter, "kindFilter");
        Intrinsics.checkNotNullParameter(nameFilter, "nameFilter");
        LazyJavaPackageScope lazyJavaPackageScope = this.f32946c;
        MemberScope[] b10 = b();
        Collection<DeclarationDescriptor> contributedDescriptors = lazyJavaPackageScope.getContributedDescriptors(kindFilter, nameFilter);
        for (MemberScope memberScope : b10) {
            contributedDescriptors = ScopeUtilsKt.concat(contributedDescriptors, memberScope.getContributedDescriptors(kindFilter, nameFilter));
        }
        if (contributedDescriptors == null) {
            return x0.d();
        }
        return contributedDescriptors;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope, kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    @NotNull
    public Collection<SimpleFunctionDescriptor> getContributedFunctions(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        mo1203recordLookup(name, location);
        LazyJavaPackageScope lazyJavaPackageScope = this.f32946c;
        MemberScope[] b10 = b();
        Collection<? extends SimpleFunctionDescriptor> contributedFunctions = lazyJavaPackageScope.getContributedFunctions(name, location);
        int length = b10.length;
        int i10 = 0;
        Collection collection = contributedFunctions;
        while (i10 < length) {
            i10++;
            collection = ScopeUtilsKt.concat(collection, b10[i10].getContributedFunctions(name, location));
        }
        if (collection == null) {
            return x0.d();
        }
        return collection;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Collection<PropertyDescriptor> getContributedVariables(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        mo1203recordLookup(name, location);
        LazyJavaPackageScope lazyJavaPackageScope = this.f32946c;
        MemberScope[] b10 = b();
        Collection<? extends PropertyDescriptor> contributedVariables = lazyJavaPackageScope.getContributedVariables(name, location);
        int length = b10.length;
        int i10 = 0;
        Collection collection = contributedVariables;
        while (i10 < length) {
            i10++;
            collection = ScopeUtilsKt.concat(collection, b10[i10].getContributedVariables(name, location));
        }
        if (collection == null) {
            return x0.d();
        }
        return collection;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Set<Name> getFunctionNames() {
        MemberScope[] b10 = b();
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (MemberScope memberScope : b10) {
            CollectionsKt.B(linkedHashSet, memberScope.getFunctionNames());
        }
        linkedHashSet.addAll(this.f32946c.getFunctionNames());
        return linkedHashSet;
    }

    @NotNull
    public final LazyJavaPackageScope getJavaScope$descriptors_jvm() {
        return this.f32946c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope
    @NotNull
    public Set<Name> getVariableNames() {
        MemberScope[] b10 = b();
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (MemberScope memberScope : b10) {
            CollectionsKt.B(linkedHashSet, memberScope.getVariableNames());
        }
        linkedHashSet.addAll(this.f32946c.getVariableNames());
        return linkedHashSet;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope
    /* renamed from: recordLookup */
    public void mo1203recordLookup(@NotNull Name name, @NotNull LookupLocation location) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(location, "location");
        UtilsKt.record(this.f32944a.getComponents().getLookupTracker(), location, this.f32945b, name);
    }

    @NotNull
    public String toString() {
        return "scope for " + this.f32945b;
    }
}
