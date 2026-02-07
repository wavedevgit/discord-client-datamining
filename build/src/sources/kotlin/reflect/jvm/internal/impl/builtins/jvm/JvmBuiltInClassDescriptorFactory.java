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
    private static final Name f32287f;

    /* renamed from: g  reason: collision with root package name */
    private static final ClassId f32288g;

    /* renamed from: a  reason: collision with root package name */
    private final ModuleDescriptor f32289a;

    /* renamed from: b  reason: collision with root package name */
    private final Function1 f32290b;

    /* renamed from: c  reason: collision with root package name */
    private final NotNullLazyValue f32291c;

    /* renamed from: d  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32285d = {Reflection.property1(new PropertyReference1Impl(JvmBuiltInClassDescriptorFactory.class, "cloneable", "getCloneable()Lorg/jetbrains/kotlin/descriptors/impl/ClassDescriptorImpl;", 0))};
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final FqName f32286e = StandardNames.BUILT_INS_PACKAGE_FQ_NAME;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ClassId getCLONEABLE_CLASS_ID() {
            return JvmBuiltInClassDescriptorFactory.f32288g;
        }

        private Companion() {
        }
    }

    static {
        FqNameUnsafe fqNameUnsafe = StandardNames.FqNames.cloneable;
        f32287f = fqNameUnsafe.shortName();
        f32288g = ClassId.Companion.topLevel(fqNameUnsafe.toSafe());
    }

    public JvmBuiltInClassDescriptorFactory(@NotNull StorageManager storageManager, @NotNull ModuleDescriptor moduleDescriptor, @NotNull Function1<? super ModuleDescriptor, ? extends DeclarationDescriptor> computeContainingDeclaration) {
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(moduleDescriptor, "moduleDescriptor");
        Intrinsics.checkNotNullParameter(computeContainingDeclaration, "computeContainingDeclaration");
        this.f32289a = moduleDescriptor;
        this.f32290b = computeContainingDeclaration;
        this.f32291c = storageManager.createLazyValue(new a(this, storageManager));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final BuiltInsPackageFragment a(ModuleDescriptor module) {
        Intrinsics.checkNotNullParameter(module, "module");
        ArrayList arrayList = new ArrayList();
        for (Object obj : module.getPackage(f32286e).getFragments()) {
            if (obj instanceof BuiltInsPackageFragment) {
                arrayList.add(obj);
            }
        }
        return (BuiltInsPackageFragment) CollectionsKt.o0(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptorImpl d(JvmBuiltInClassDescriptorFactory jvmBuiltInClassDescriptorFactory, StorageManager storageManager) {
        ClassDescriptorImpl classDescriptorImpl = new ClassDescriptorImpl((DeclarationDescriptor) jvmBuiltInClassDescriptorFactory.f32290b.invoke(jvmBuiltInClassDescriptorFactory.f32289a), f32287f, Modality.ABSTRACT, ClassKind.INTERFACE, CollectionsKt.e(jvmBuiltInClassDescriptorFactory.f32289a.getBuiltIns().getAnyType()), SourceElement.NO_SOURCE, false, storageManager);
        classDescriptorImpl.initialize(new CloneableClassScope(storageManager, classDescriptorImpl), x0.d(), null);
        return classDescriptorImpl;
    }

    private final ClassDescriptorImpl e() {
        return (ClassDescriptorImpl) StorageKt.getValue(this.f32291c, this, f32285d[0]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory
    public ClassDescriptor createClass(@NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        if (Intrinsics.areEqual(classId, f32288g)) {
            return e();
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory
    @NotNull
    public Collection<ClassDescriptor> getAllContributedClassesIfPossible(@NotNull FqName packageFqName) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        if (Intrinsics.areEqual(packageFqName, f32286e)) {
            return x0.c(e());
        }
        return x0.d();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory
    public boolean shouldCreateClass(@NotNull FqName packageFqName, @NotNull Name name) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(name, "name");
        if (Intrinsics.areEqual(name, f32287f) && Intrinsics.areEqual(packageFqName, f32286e)) {
            return true;
        }
        return false;
    }

    public /* synthetic */ JvmBuiltInClassDescriptorFactory(StorageManager storageManager, ModuleDescriptor moduleDescriptor, Function1 function1, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(storageManager, moduleDescriptor, (i10 & 4) != 0 ? b.f32329d : function1);
    }
}
