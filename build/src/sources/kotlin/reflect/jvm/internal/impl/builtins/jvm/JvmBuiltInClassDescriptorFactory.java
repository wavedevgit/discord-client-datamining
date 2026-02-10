package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import java.util.ArrayList;
import java.util.Collection;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.BuiltInsPackageFragment;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJvmBuiltInClassDescriptorFactory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JvmBuiltInClassDescriptorFactory.kt\norg/jetbrains/kotlin/builtins/jvm/JvmBuiltInClassDescriptorFactory\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,57:1\n808#2,11:58\n*S KotlinDebug\n*F\n+ 1 JvmBuiltInClassDescriptorFactory.kt\norg/jetbrains/kotlin/builtins/jvm/JvmBuiltInClassDescriptorFactory\n*L\n23#1:58,11\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmBuiltInClassDescriptorFactory implements ClassDescriptorFactory {

    /* renamed from: f  reason: collision with root package name */
    private static final Name f31996f;

    /* renamed from: g  reason: collision with root package name */
    private static final ClassId f31997g;

    /* renamed from: a  reason: collision with root package name */
    private final ModuleDescriptor f31998a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f31999b;

    /* renamed from: c  reason: collision with root package name */
    private final NotNullLazyValue f32000c;

    /* renamed from: d  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f31994d = {Reflection.property1(new PropertyReference1Impl(JvmBuiltInClassDescriptorFactory.class, "cloneable", "getCloneable()Lorg/jetbrains/kotlin/descriptors/impl/ClassDescriptorImpl;", 0))};
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f31995e = StandardNames.BUILT_INS_PACKAGE_FQ_NAME;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ClassId getCLONEABLE_CLASS_ID() {
            return JvmBuiltInClassDescriptorFactory.f31997g;
        }

        private Companion() {
        }
    }

    static {
        FqNameUnsafe fqNameUnsafe = StandardNames.FqNames.cloneable;
        f31996f = fqNameUnsafe.shortName();
        f31997g = ClassId.Companion.topLevel(fqNameUnsafe.toSafe());
    }

    public JvmBuiltInClassDescriptorFactory(@NotNull StorageManager storageManager, @NotNull ModuleDescriptor moduleDescriptor, @NotNull Function1<? super ModuleDescriptor, ? extends DeclarationDescriptor> computeContainingDeclaration) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(moduleDescriptor, "moduleDescriptor");
        Intrinsics.checkNotNullParameter(computeContainingDeclaration, "computeContainingDeclaration");
        this.f31998a = moduleDescriptor;
        this.f31999b = computeContainingDeclaration;
        this.f32000c = storageManager.createLazyValue(new a(this, storageManager));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final BuiltInsPackageFragment a(ModuleDescriptor module) {
        Intrinsics.checkNotNullParameter(module, "module");
        ArrayList arrayList = new ArrayList();
        for (Object obj : module.getPackage(f31995e).getFragments()) {
            if (obj instanceof BuiltInsPackageFragment) {
                arrayList.add(obj);
            }
        }
        return (BuiltInsPackageFragment) CollectionsKt.o0(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptorImpl d(JvmBuiltInClassDescriptorFactory jvmBuiltInClassDescriptorFactory, StorageManager storageManager) {
        ClassDescriptorImpl classDescriptorImpl = new ClassDescriptorImpl((DeclarationDescriptor) jvmBuiltInClassDescriptorFactory.f31999b.invoke(jvmBuiltInClassDescriptorFactory.f31998a), f31996f, Modality.ABSTRACT, ClassKind.INTERFACE, CollectionsKt.e(jvmBuiltInClassDescriptorFactory.f31998a.getBuiltIns().getAnyType()), SourceElement.NO_SOURCE, false, storageManager);
        classDescriptorImpl.initialize(new CloneableClassScope(storageManager, classDescriptorImpl), x0.d(), null);
        return classDescriptorImpl;
    }

    private final ClassDescriptorImpl e() {
        return (ClassDescriptorImpl) StorageKt.getValue(this.f32000c, this, f31994d[0]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory
    public ClassDescriptor createClass(@NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        if (Intrinsics.areEqual(classId, f31997g)) {
            return e();
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory
    @NotNull
    public Collection<ClassDescriptor> getAllContributedClassesIfPossible(@NotNull FqName packageFqName) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        if (Intrinsics.areEqual(packageFqName, f31995e)) {
            return x0.c(e());
        }
        return x0.d();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory
    public boolean shouldCreateClass(@NotNull FqName packageFqName, @NotNull Name name) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(name, "name");
        if (Intrinsics.areEqual(name, f31996f) && Intrinsics.areEqual(packageFqName, f31995e)) {
            return true;
        }
        return false;
    }

    public /* synthetic */ JvmBuiltInClassDescriptorFactory(StorageManager storageManager, ModuleDescriptor moduleDescriptor, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, moduleDescriptor, (i10 & 4) != 0 ? b.f32038d : function1);
    }
}
