package kotlin.reflect.jvm.internal.impl.builtins;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import org.jetbrains.annotations.NotNull;
import qr.v;
@SourceDebugExtension({"SMAP\nUnsignedType.kt\nKotlin\n*S Kotlin\n*F\n+ 1 UnsignedType.kt\norg/jetbrains/kotlin/builtins/UnsignedTypes\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,122:1\n11228#2:123\n11563#2,3:124\n11228#2:127\n11563#2,3:128\n11563#2,3:131\n*S KotlinDebug\n*F\n+ 1 UnsignedType.kt\norg/jetbrains/kotlin/builtins/UnsignedTypes\n*L\n36#1:123\n36#1:124,3\n37#1:127\n37#1:128,3\n47#1:131,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class UnsignedTypes {
    @NotNull
    public static final UnsignedTypes INSTANCE = new UnsignedTypes();

    /* renamed from: a  reason: collision with root package name */
    private static final Set f32179a;

    /* renamed from: b  reason: collision with root package name */
    private static final Set f32180b;

    /* renamed from: c  reason: collision with root package name */
    private static final HashMap f32181c;

    /* renamed from: d  reason: collision with root package name */
    private static final HashMap f32182d;

    /* renamed from: e  reason: collision with root package name */
    private static final HashMap f32183e;

    /* renamed from: f  reason: collision with root package name */
    private static final Set f32184f;

    static {
        UnsignedType[] values;
        UnsignedType[] values2 = UnsignedType.values();
        ArrayList arrayList = new ArrayList(values2.length);
        for (UnsignedType unsignedType : values2) {
            arrayList.add(unsignedType.getTypeName());
        }
        f32179a = CollectionsKt.l1(arrayList);
        UnsignedArrayType[] values3 = UnsignedArrayType.values();
        ArrayList arrayList2 = new ArrayList(values3.length);
        for (UnsignedArrayType unsignedArrayType : values3) {
            arrayList2.add(unsignedArrayType.getTypeName());
        }
        f32180b = CollectionsKt.l1(arrayList2);
        f32181c = new HashMap();
        f32182d = new HashMap();
        f32183e = o0.k(v.a(UnsignedArrayType.UBYTEARRAY, Name.identifier("ubyteArrayOf")), v.a(UnsignedArrayType.USHORTARRAY, Name.identifier("ushortArrayOf")), v.a(UnsignedArrayType.UINTARRAY, Name.identifier("uintArrayOf")), v.a(UnsignedArrayType.ULONGARRAY, Name.identifier("ulongArrayOf")));
        UnsignedType[] values4 = UnsignedType.values();
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (UnsignedType unsignedType2 : values4) {
            linkedHashSet.add(unsignedType2.getArrayClassId().getShortClassName());
        }
        f32184f = linkedHashSet;
        for (UnsignedType unsignedType3 : UnsignedType.values()) {
            f32181c.put(unsignedType3.getArrayClassId(), unsignedType3.getClassId());
            f32182d.put(unsignedType3.getClassId(), unsignedType3.getArrayClassId());
        }
    }

    private UnsignedTypes() {
    }

    public static final boolean isUnsignedType(@NotNull KotlinType type) {
        ClassifierDescriptor mo1199getDeclarationDescriptor;
        Intrinsics.checkNotNullParameter(type, "type");
        if (TypeUtils.noExpectedType(type) || (mo1199getDeclarationDescriptor = type.getConstructor().mo1199getDeclarationDescriptor()) == null) {
            return false;
        }
        return INSTANCE.isUnsignedClass(mo1199getDeclarationDescriptor);
    }

    public final ClassId getUnsignedClassIdByArrayClassId(@NotNull ClassId arrayClassId) {
        Intrinsics.checkNotNullParameter(arrayClassId, "arrayClassId");
        return (ClassId) f32181c.get(arrayClassId);
    }

    public final boolean isShortNameOfUnsignedArray(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return f32184f.contains(name);
    }

    public final boolean isUnsignedClass(@NotNull DeclarationDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        DeclarationDescriptor containingDeclaration = descriptor.getContainingDeclaration();
        if ((containingDeclaration instanceof PackageFragmentDescriptor) && Intrinsics.areEqual(((PackageFragmentDescriptor) containingDeclaration).getFqName(), StandardNames.BUILT_INS_PACKAGE_FQ_NAME) && f32179a.contains(descriptor.getName())) {
            return true;
        }
        return false;
    }
}
