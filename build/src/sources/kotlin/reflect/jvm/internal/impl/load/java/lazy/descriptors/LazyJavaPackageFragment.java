package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PackageFragmentDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.ContextKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaAnnotationsKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaPackage;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinderKt;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryPackageSourceElement;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmClassName;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nLazyJavaPackageFragment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LazyJavaPackageFragment.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaPackageFragment\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,96:1\n1617#2,9:97\n1869#2:106\n1870#2:109\n1626#2:110\n1563#2:111\n1634#2,3:112\n1#3:107\n1#3:108\n*S KotlinDebug\n*F\n+ 1 LazyJavaPackageFragment.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaPackageFragment\n*L\n46#1:97,9\n46#1:106\n46#1:109\n46#1:110\n55#1:111\n55#1:112,3\n46#1:108\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaPackageFragment extends PackageFragmentDescriptorImpl {

    /* renamed from: z  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32907z = {Reflection.property1(new PropertyReference1Impl(LazyJavaPackageFragment.class, "binaryClasses", "getBinaryClasses$descriptors_jvm()Ljava/util/Map;", 0)), Reflection.property1(new PropertyReference1Impl(LazyJavaPackageFragment.class, "partToFacade", "getPartToFacade()Ljava/util/HashMap;", 0))};

    /* renamed from: r  reason: collision with root package name */
    private final JavaPackage f32908r;

    /* renamed from: s  reason: collision with root package name */
    private final LazyJavaResolverContext f32909s;

    /* renamed from: t  reason: collision with root package name */
    private final MetadataVersion f32910t;

    /* renamed from: u  reason: collision with root package name */
    private final NotNullLazyValue f32911u;

    /* renamed from: v  reason: collision with root package name */
    private final JvmPackageScope f32912v;

    /* renamed from: w  reason: collision with root package name */
    private final NotNullLazyValue f32913w;

    /* renamed from: x  reason: collision with root package name */
    private final Annotations f32914x;

    /* renamed from: y  reason: collision with root package name */
    private final NotNullLazyValue f32915y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[KotlinClassHeader.Kind.values().length];
            try {
                iArr[KotlinClassHeader.Kind.MULTIFILE_CLASS_PART.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[KotlinClassHeader.Kind.FILE_FACADE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LazyJavaPackageFragment(@NotNull LazyJavaResolverContext outerContext, @NotNull JavaPackage jPackage) {
        super(outerContext.getModule(), jPackage.getFqName());
        Annotations resolveAnnotations;
        Intrinsics.checkNotNullParameter(outerContext, "outerContext");
        Intrinsics.checkNotNullParameter(jPackage, "jPackage");
        this.f32908r = jPackage;
        LazyJavaResolverContext childForClassOrPackage$default = ContextKt.childForClassOrPackage$default(outerContext, this, null, 0, 6, null);
        this.f32909s = childForClassOrPackage$default;
        this.f32910t = outerContext.getComponents().getDeserializedDescriptorResolver().getComponents().getConfiguration().getMetadataVersion();
        this.f32911u = childForClassOrPackage$default.getStorageManager().createLazyValue(new t(this));
        this.f32912v = new JvmPackageScope(childForClassOrPackage$default, jPackage, this);
        this.f32913w = childForClassOrPackage$default.getStorageManager().createRecursionTolerantLazyValue(new u(this), CollectionsKt.l());
        if (childForClassOrPackage$default.getComponents().getJavaTypeEnhancementState().getDisabledDefaultAnnotations()) {
            resolveAnnotations = Annotations.Companion.getEMPTY();
        } else {
            resolveAnnotations = LazyJavaAnnotationsKt.resolveAnnotations(childForClassOrPackage$default, jPackage);
        }
        this.f32914x = resolveAnnotations;
        this.f32915y = childForClassOrPackage$default.getStorageManager().createLazyValue(new v(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map e(LazyJavaPackageFragment lazyJavaPackageFragment) {
        Pair pair;
        ArrayList arrayList = new ArrayList();
        for (String str : lazyJavaPackageFragment.f32909s.getComponents().getPackagePartProvider().findPackageParts(lazyJavaPackageFragment.getFqName().asString())) {
            ClassId.Companion companion = ClassId.Companion;
            FqName fqNameForTopLevelClassMaybeWithDollars = JvmClassName.byInternalName(str).getFqNameForTopLevelClassMaybeWithDollars();
            Intrinsics.checkNotNullExpressionValue(fqNameForTopLevelClassMaybeWithDollars, "getFqNameForTopLevelClassMaybeWithDollars(...)");
            KotlinJvmBinaryClass findKotlinClass = KotlinClassFinderKt.findKotlinClass(lazyJavaPackageFragment.f32909s.getComponents().getKotlinClassFinder(), companion.topLevel(fqNameForTopLevelClassMaybeWithDollars), lazyJavaPackageFragment.f32910t);
            if (findKotlinClass != null) {
                pair = or.v.a(str, findKotlinClass);
            } else {
                pair = null;
            }
            if (pair != null) {
                arrayList.add(pair);
            }
        }
        return kotlin.collections.o0.u(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final HashMap f(LazyJavaPackageFragment lazyJavaPackageFragment) {
        HashMap hashMap = new HashMap();
        for (Map.Entry<String, KotlinJvmBinaryClass> entry : lazyJavaPackageFragment.getBinaryClasses$descriptors_jvm().entrySet()) {
            JvmClassName byInternalName = JvmClassName.byInternalName(entry.getKey());
            Intrinsics.checkNotNullExpressionValue(byInternalName, "byInternalName(...)");
            KotlinClassHeader classHeader = entry.getValue().getClassHeader();
            int i10 = WhenMappings.$EnumSwitchMapping$0[classHeader.getKind().ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    hashMap.put(byInternalName, byInternalName);
                }
            } else {
                String multifileClassName = classHeader.getMultifileClassName();
                if (multifileClassName != null) {
                    hashMap.put(byInternalName, JvmClassName.byInternalName(multifileClassName));
                }
            }
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List g(LazyJavaPackageFragment lazyJavaPackageFragment) {
        Collection<JavaPackage> subPackages = lazyJavaPackageFragment.f32908r.getSubPackages();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(subPackages, 10));
        for (JavaPackage javaPackage : subPackages) {
            arrayList.add(javaPackage.getFqName());
        }
        return arrayList;
    }

    public final ClassDescriptor findClassifierByJavaClass$descriptors_jvm(@NotNull JavaClass jClass) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        return this.f32912v.getJavaScope$descriptors_jvm().findClassifierByJavaClass$descriptors_jvm(jClass);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotatedImpl, kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    @NotNull
    public Annotations getAnnotations() {
        return this.f32914x;
    }

    @NotNull
    public final Map<String, KotlinJvmBinaryClass> getBinaryClasses$descriptors_jvm() {
        return (Map) StorageKt.getValue(this.f32911u, this, f32907z[0]);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.PackageFragmentDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorNonRootImpl, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithSource
    @NotNull
    public SourceElement getSource() {
        return new KotlinJvmBinaryPackageSourceElement(this);
    }

    @NotNull
    public final List<FqName> getSubPackageFqNames$descriptors_jvm() {
        return (List) this.f32913w.invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.PackageFragmentDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorImpl
    @NotNull
    public String toString() {
        return "Lazy Java package fragment: " + getFqName() + " of module " + this.f32909s.getComponents().getModule();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor
    @NotNull
    public JvmPackageScope getMemberScope() {
        return this.f32912v;
    }
}
