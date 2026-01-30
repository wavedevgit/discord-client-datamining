package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import ir.v;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.functions.Function5;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.functions.Function8;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.sequences.Sequence;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import wr.f;
import wr.g;
import wr.h;
import wr.i;
import wr.j;
import wr.k;
import wr.l;
import wr.m;
import wr.n;
import wr.o;
@SourceDebugExtension({"SMAP\nreflectClassUtil.kt\nKotlin\n*S Kotlin\n*F\n+ 1 reflectClassUtil.kt\norg/jetbrains/kotlin/descriptors/runtime/structure/ReflectClassUtilKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,99:1\n1563#2:100\n1634#2,3:101\n1563#2:104\n1634#2,3:105\n1573#2:108\n1604#2,4:109\n*S KotlinDebug\n*F\n+ 1 reflectClassUtil.kt\norg/jetbrains/kotlin/descriptors/runtime/structure/ReflectClassUtilKt\n*L\n34#1:100\n34#1:101,3\n35#1:104\n35#1:105,3\n50#1:108\n50#1:109,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectClassUtilKt {

    /* renamed from: a  reason: collision with root package name */
    private static final List f33919a;

    /* renamed from: b  reason: collision with root package name */
    private static final Map f33920b;

    /* renamed from: c  reason: collision with root package name */
    private static final Map f33921c;

    /* renamed from: d  reason: collision with root package name */
    private static final Map f33922d;

    static {
        int i10 = 0;
        List o10 = CollectionsKt.o(Reflection.getOrCreateKotlinClass(Boolean.TYPE), Reflection.getOrCreateKotlinClass(Byte.TYPE), Reflection.getOrCreateKotlinClass(Character.TYPE), Reflection.getOrCreateKotlinClass(Double.TYPE), Reflection.getOrCreateKotlinClass(Float.TYPE), Reflection.getOrCreateKotlinClass(Integer.TYPE), Reflection.getOrCreateKotlinClass(Long.TYPE), Reflection.getOrCreateKotlinClass(Short.TYPE));
        f33919a = o10;
        List<KClass> list = o10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (KClass kClass : list) {
            arrayList.add(v.a(vr.a.c(kClass), vr.a.d(kClass)));
        }
        f33920b = o0.u(arrayList);
        List<KClass> list2 = f33919a;
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
        for (KClass kClass2 : list2) {
            arrayList2.add(v.a(vr.a.d(kClass2), vr.a.c(kClass2)));
        }
        f33921c = o0.u(arrayList2);
        List o11 = CollectionsKt.o(Function0.class, Function1.class, Function2.class, Function3.class, Function4.class, Function5.class, Function6.class, n.class, Function8.class, o.class, wr.a.class, wr.b.class, wr.c.class, wr.d.class, wr.e.class, f.class, g.class, h.class, i.class, j.class, k.class, l.class, m.class);
        ArrayList arrayList3 = new ArrayList(CollectionsKt.w(o11, 10));
        for (Object obj : o11) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            arrayList3.add(v.a((Class) obj, Integer.valueOf(i10)));
            i10 = i11;
        }
        f33922d = o0.u(arrayList3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ParameterizedType a(ParameterizedType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Type ownerType = it.getOwnerType();
        if (ownerType instanceof ParameterizedType) {
            return (ParameterizedType) ownerType;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Sequence b(ParameterizedType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Type[] actualTypeArguments = it.getActualTypeArguments();
        Intrinsics.checkNotNullExpressionValue(actualTypeArguments, "getActualTypeArguments(...)");
        return kotlin.collections.i.I(actualTypeArguments);
    }

    @NotNull
    public static final ClassId getClassId(@NotNull Class<?> cls) {
        ClassId classId;
        Intrinsics.checkNotNullParameter(cls, "<this>");
        if (!cls.isPrimitive()) {
            if (!cls.isArray()) {
                if (cls.getEnclosingMethod() == null && cls.getEnclosingConstructor() == null) {
                    String simpleName = cls.getSimpleName();
                    Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
                    if (simpleName.length() != 0) {
                        Class<?> declaringClass = cls.getDeclaringClass();
                        if (declaringClass != null && (classId = getClassId(declaringClass)) != null) {
                            Name identifier = Name.identifier(cls.getSimpleName());
                            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
                            ClassId createNestedClassId = classId.createNestedClassId(identifier);
                            if (createNestedClassId != null) {
                                return createNestedClassId;
                            }
                        }
                        ClassId.Companion companion = ClassId.Companion;
                        String name = cls.getName();
                        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
                        return companion.topLevel(new FqName(name));
                    }
                }
                String name2 = cls.getName();
                Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
                FqName fqName = new FqName(name2);
                return new ClassId(fqName.parent(), FqName.Companion.topLevel(fqName.shortName()), true);
            }
            throw new IllegalArgumentException("Can't compute ClassId for array type: " + cls);
        }
        throw new IllegalArgumentException("Can't compute ClassId for primitive type: " + cls);
    }

    @NotNull
    public static final String getDesc(@NotNull Class<?> cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        if (cls.isPrimitive()) {
            String name = cls.getName();
            switch (name.hashCode()) {
                case -1325958191:
                    if (name.equals("double")) {
                        return "D";
                    }
                    break;
                case 104431:
                    if (name.equals("int")) {
                        return "I";
                    }
                    break;
                case 3039496:
                    if (name.equals("byte")) {
                        return "B";
                    }
                    break;
                case 3052374:
                    if (name.equals("char")) {
                        return "C";
                    }
                    break;
                case 3327612:
                    if (name.equals("long")) {
                        return "J";
                    }
                    break;
                case 3625364:
                    if (name.equals("void")) {
                        return "V";
                    }
                    break;
                case 64711720:
                    if (name.equals(InquiryField.BooleanField.TYPE)) {
                        return "Z";
                    }
                    break;
                case 97526364:
                    if (name.equals(InquiryField.FloatField.TYPE)) {
                        return "F";
                    }
                    break;
                case 109413500:
                    if (name.equals("short")) {
                        return "S";
                    }
                    break;
            }
            throw new IllegalArgumentException("Unsupported primitive type: " + cls);
        } else if (cls.isArray()) {
            String name2 = cls.getName();
            Intrinsics.checkNotNullExpressionValue(name2, "getName(...)");
            return StringsKt.I(name2, '.', '/', false, 4, null);
        } else {
            StringBuilder sb2 = new StringBuilder();
            sb2.append('L');
            String name3 = cls.getName();
            Intrinsics.checkNotNullExpressionValue(name3, "getName(...)");
            sb2.append(StringsKt.I(name3, '.', '/', false, 4, null));
            sb2.append(';');
            return sb2.toString();
        }
    }

    public static final Integer getFunctionClassArity(@NotNull Class<?> cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        return (Integer) f33922d.get(cls);
    }

    @NotNull
    public static final List<Type> getParameterizedTypeArguments(@NotNull Type type) {
        Intrinsics.checkNotNullParameter(type, "<this>");
        if (!(type instanceof ParameterizedType)) {
            return CollectionsKt.l();
        }
        ParameterizedType parameterizedType = (ParameterizedType) type;
        if (parameterizedType.getOwnerType() == null) {
            Type[] actualTypeArguments = parameterizedType.getActualTypeArguments();
            Intrinsics.checkNotNullExpressionValue(actualTypeArguments, "getActualTypeArguments(...)");
            return kotlin.collections.i.R0(actualTypeArguments);
        }
        return kotlin.sequences.k.Y(kotlin.sequences.k.L(kotlin.sequences.k.q(type, a.f33958d), b.f33959d));
    }

    public static final Class<?> getPrimitiveByWrapper(@NotNull Class<?> cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        return (Class) f33920b.get(cls);
    }

    @NotNull
    public static final ClassLoader getSafeClassLoader(@NotNull Class<?> cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        ClassLoader classLoader = cls.getClassLoader();
        if (classLoader == null) {
            ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();
            Intrinsics.checkNotNullExpressionValue(systemClassLoader, "getSystemClassLoader(...)");
            return systemClassLoader;
        }
        return classLoader;
    }

    public static final Class<?> getWrapperByPrimitive(@NotNull Class<?> cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        return (Class) f33921c.get(cls);
    }

    public static final boolean isEnumClassOrSpecializedEnumEntryClass(@NotNull Class<?> cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        return Enum.class.isAssignableFrom(cls);
    }
}
