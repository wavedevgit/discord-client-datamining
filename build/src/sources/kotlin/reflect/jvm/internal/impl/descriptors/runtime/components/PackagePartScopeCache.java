package kotlin.reflect.jvm.internal.impl.descriptors.runtime.components;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.EmptyPackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.load.kotlin.DeserializedDescriptorResolver;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinClassFinderKt;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmClassName;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.ChainedMemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nPackagePartScopeCache.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PackagePartScopeCache.kt\norg/jetbrains/kotlin/descriptors/runtime/components/PackagePartScopeCache\n+ 2 MapsJVM.kt\nkotlin/collections/MapsKt__MapsJVMKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,41:1\n72#2,2:42\n1617#3,9:44\n1869#3:53\n1870#3:55\n1626#3:56\n1617#3,9:57\n1869#3:66\n1870#3:68\n1626#3:69\n1#4:54\n1#4:67\n1#4:70\n*S KotlinDebug\n*F\n+ 1 PackagePartScopeCache.kt\norg/jetbrains/kotlin/descriptors/runtime/components/PackagePartScopeCache\n*L\n21#1:42,2\n26#1:44,9\n26#1:53\n26#1:55\n26#1:56\n34#1:57,9\n34#1:66\n34#1:68\n34#1:69\n26#1:54\n34#1:67\n21#1:70\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PackagePartScopeCache {

    /* renamed from: a  reason: collision with root package name */
    private final DeserializedDescriptorResolver f33874a;

    /* renamed from: b  reason: collision with root package name */
    private final ReflectKotlinClassFinder f33875b;

    /* renamed from: c  reason: collision with root package name */
    private final ConcurrentHashMap f33876c;

    public PackagePartScopeCache(@NotNull DeserializedDescriptorResolver resolver, @NotNull ReflectKotlinClassFinder kotlinClassFinder) {
        Intrinsics.checkNotNullParameter(resolver, "resolver");
        Intrinsics.checkNotNullParameter(kotlinClassFinder, "kotlinClassFinder");
        this.f33874a = resolver;
        this.f33875b = kotlinClassFinder;
        this.f33876c = new ConcurrentHashMap();
    }

    @NotNull
    public final MemberScope getPackagePartScope(@NotNull ReflectKotlinClass fileClass) {
        Collection<KotlinJvmBinaryClass> e10;
        Intrinsics.checkNotNullParameter(fileClass, "fileClass");
        ConcurrentHashMap concurrentHashMap = this.f33876c;
        ClassId classId = fileClass.getClassId();
        Object obj = concurrentHashMap.get(classId);
        if (obj == null) {
            FqName packageFqName = fileClass.getClassId().getPackageFqName();
            if (fileClass.getClassHeader().getKind() == KotlinClassHeader.Kind.MULTIFILE_CLASS) {
                e10 = new ArrayList();
                for (String str : fileClass.getClassHeader().getMultifilePartNames()) {
                    ClassId.Companion companion = ClassId.Companion;
                    FqName fqNameForTopLevelClassMaybeWithDollars = JvmClassName.byInternalName(str).getFqNameForTopLevelClassMaybeWithDollars();
                    Intrinsics.checkNotNullExpressionValue(fqNameForTopLevelClassMaybeWithDollars, "getFqNameForTopLevelClassMaybeWithDollars(...)");
                    KotlinJvmBinaryClass findKotlinClass = KotlinClassFinderKt.findKotlinClass(this.f33875b, companion.topLevel(fqNameForTopLevelClassMaybeWithDollars), this.f33874a.getComponents().getConfiguration().getMetadataVersion());
                    if (findKotlinClass != null) {
                        e10.add(findKotlinClass);
                    }
                }
            } else {
                e10 = CollectionsKt.e(fileClass);
            }
            EmptyPackageFragmentDescriptor emptyPackageFragmentDescriptor = new EmptyPackageFragmentDescriptor(this.f33874a.getComponents().getModuleDescriptor(), packageFqName);
            ArrayList arrayList = new ArrayList();
            for (KotlinJvmBinaryClass kotlinJvmBinaryClass : e10) {
                MemberScope createKotlinPackagePartScope = this.f33874a.createKotlinPackagePartScope(emptyPackageFragmentDescriptor, kotlinJvmBinaryClass);
                if (createKotlinPackagePartScope != null) {
                    arrayList.add(createKotlinPackagePartScope);
                }
            }
            List h12 = CollectionsKt.h1(arrayList);
            ChainedMemberScope.Companion companion2 = ChainedMemberScope.Companion;
            MemberScope create = companion2.create("package " + packageFqName + " (" + fileClass + ')', h12);
            Object putIfAbsent = concurrentHashMap.putIfAbsent(classId, create);
            if (putIfAbsent == null) {
                obj = create;
            } else {
                obj = putIfAbsent;
            }
        }
        Intrinsics.checkNotNullExpressionValue(obj, "getOrPut(...)");
        return (MemberScope) obj;
    }
}
