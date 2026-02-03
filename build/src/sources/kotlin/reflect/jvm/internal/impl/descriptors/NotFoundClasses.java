package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassDescriptorBase;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.EmptyPackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.TypeParameterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.ClassTypeConstructorImpl;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class NotFoundClasses {

    /* renamed from: a  reason: collision with root package name */
    private final StorageManager f32772a;

    /* renamed from: b  reason: collision with root package name */
    private final ModuleDescriptor f32773b;

    /* renamed from: c  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f32774c;

    /* renamed from: d  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f32775d;

    @SourceDebugExtension({"SMAP\nNotFoundClasses.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotFoundClasses.kt\norg/jetbrains/kotlin/descriptors/NotFoundClasses$MockClassDescriptor\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,100:1\n1563#2:101\n1634#2,3:102\n*S KotlinDebug\n*F\n+ 1 NotFoundClasses.kt\norg/jetbrains/kotlin/descriptors/NotFoundClasses$MockClassDescriptor\n*L\n55#1:101\n55#1:102,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class MockClassDescriptor extends ClassDescriptorBase {

        /* renamed from: s  reason: collision with root package name */
        private final boolean f32776s;

        /* renamed from: t  reason: collision with root package name */
        private final List f32777t;

        /* renamed from: u  reason: collision with root package name */
        private final ClassTypeConstructorImpl f32778u;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public MockClassDescriptor(@NotNull StorageManager storageManager, @NotNull DeclarationDescriptor container, @NotNull Name name, boolean z10, int i10) {
            super(storageManager, container, name, SourceElement.NO_SOURCE, false);
            Intrinsics.checkNotNullParameter(storageManager, "storageManager");
            Intrinsics.checkNotNullParameter(container, "container");
            Intrinsics.checkNotNullParameter(name, "name");
            this.f32776s = z10;
            IntRange u10 = kotlin.ranges.d.u(0, i10);
            ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
            Iterator it = u10.iterator();
            while (it.hasNext()) {
                int nextInt = ((m0) it).nextInt();
                Annotations empty = Annotations.Companion.getEMPTY();
                Variance variance = Variance.INVARIANT;
                StringBuilder sb2 = new StringBuilder();
                sb2.append('T');
                sb2.append(nextInt);
                arrayList.add(TypeParameterDescriptorImpl.createWithDefaultBound(this, empty, false, variance, Name.identifier(sb2.toString()), nextInt, storageManager));
            }
            this.f32777t = arrayList;
            this.f32778u = new ClassTypeConstructorImpl(this, TypeParameterUtilsKt.computeConstructorTypeParameters(this), x0.c(DescriptorUtilsKt.getModule(this).getBuiltIns().getAnyType()), storageManager);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleAwareClassDescriptor
        /* renamed from: b */
        public MemberScope.Empty getUnsubstitutedMemberScope(KotlinTypeRefiner kotlinTypeRefiner) {
            Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
            return MemberScope.Empty.INSTANCE;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
        @NotNull
        public Annotations getAnnotations() {
            return Annotations.Companion.getEMPTY();
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        /* renamed from: getCompanionObjectDescriptor */
        public ClassDescriptor mo1191getCompanionObjectDescriptor() {
            return null;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        @NotNull
        public Collection<ClassConstructorDescriptor> getConstructors() {
            return x0.d();
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
        @NotNull
        public List<TypeParameterDescriptor> getDeclaredTypeParameters() {
            return this.f32777t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        @NotNull
        public ClassKind getKind() {
            return ClassKind.CLASS;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
        @NotNull
        public Modality getModality() {
            return Modality.FINAL;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        @NotNull
        public Collection<ClassDescriptor> getSealedSubclasses() {
            return CollectionsKt.l();
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        /* renamed from: getUnsubstitutedPrimaryConstructor */
        public ClassConstructorDescriptor mo1192getUnsubstitutedPrimaryConstructor() {
            return null;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        public ValueClassRepresentation<SimpleType> getValueClassRepresentation() {
            return null;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithVisibility
        @NotNull
        public DescriptorVisibility getVisibility() {
            DescriptorVisibility PUBLIC = DescriptorVisibilities.PUBLIC;
            Intrinsics.checkNotNullExpressionValue(PUBLIC, "PUBLIC");
            return PUBLIC;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
        public boolean isActual() {
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        public boolean isCompanionObject() {
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        public boolean isData() {
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
        public boolean isExpect() {
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassDescriptorBase, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
        public boolean isExternal() {
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        public boolean isFun() {
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        public boolean isInline() {
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
        public boolean isInner() {
            return this.f32776s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        public boolean isValue() {
            return false;
        }

        @NotNull
        public String toString() {
            return "class " + getName() + " (not found)";
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
        @NotNull
        public MemberScope.Empty getStaticScope() {
            return MemberScope.Empty.INSTANCE;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
        @NotNull
        public ClassTypeConstructorImpl getTypeConstructor() {
            return this.f32778u;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final ClassId f32779a;

        /* renamed from: b  reason: collision with root package name */
        private final List f32780b;

        public a(ClassId classId, List typeParametersCount) {
            Intrinsics.checkNotNullParameter(classId, "classId");
            Intrinsics.checkNotNullParameter(typeParametersCount, "typeParametersCount");
            this.f32779a = classId;
            this.f32780b = typeParametersCount;
        }

        public final ClassId a() {
            return this.f32779a;
        }

        public final List b() {
            return this.f32780b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof a) {
                a aVar = (a) obj;
                return Intrinsics.areEqual(this.f32779a, aVar.f32779a) && Intrinsics.areEqual(this.f32780b, aVar.f32780b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f32779a.hashCode() * 31) + this.f32780b.hashCode();
        }

        public String toString() {
            return "ClassRequest(classId=" + this.f32779a + ", typeParametersCount=" + this.f32780b + ')';
        }
    }

    public NotFoundClasses(@NotNull StorageManager storageManager, @NotNull ModuleDescriptor module) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(module, "module");
        this.f32772a = storageManager;
        this.f32773b = module;
        this.f32774c = storageManager.createMemoizedFunction(new c(this));
        this.f32775d = storageManager.createMemoizedFunction(new d(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptor c(NotFoundClasses notFoundClasses, a aVar) {
        DeclarationDescriptor declarationDescriptor;
        int i10;
        Intrinsics.checkNotNullParameter(aVar, "<destruct>");
        ClassId a10 = aVar.a();
        List b10 = aVar.b();
        if (!a10.isLocal()) {
            ClassId outerClassId = a10.getOuterClassId();
            if (outerClassId == null || (declarationDescriptor = notFoundClasses.getClass(outerClassId, CollectionsKt.f0(b10, 1))) == null) {
                declarationDescriptor = (ClassOrPackageFragmentDescriptor) notFoundClasses.f32774c.invoke(a10.getPackageFqName());
            }
            DeclarationDescriptor declarationDescriptor2 = declarationDescriptor;
            boolean isNestedClass = a10.isNestedClass();
            StorageManager storageManager = notFoundClasses.f32772a;
            Name shortClassName = a10.getShortClassName();
            Integer num = (Integer) CollectionsKt.firstOrNull(b10);
            if (num != null) {
                i10 = num.intValue();
            } else {
                i10 = 0;
            }
            return new MockClassDescriptor(storageManager, declarationDescriptor2, shortClassName, isNestedClass, i10);
        }
        throw new UnsupportedOperationException("Unresolved local class: " + a10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final PackageFragmentDescriptor d(NotFoundClasses notFoundClasses, FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return new EmptyPackageFragmentDescriptor(notFoundClasses.f32773b, fqName);
    }

    @NotNull
    public final ClassDescriptor getClass(@NotNull ClassId classId, @NotNull List<Integer> typeParametersCount) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        Intrinsics.checkNotNullParameter(typeParametersCount, "typeParametersCount");
        return (ClassDescriptor) this.f32775d.invoke(new a(classId, typeParametersCount));
    }
}
