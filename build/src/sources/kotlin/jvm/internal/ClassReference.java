package kotlin.jvm.internal;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import es.b;
import es.c;
import es.d;
import es.e;
import es.f;
import es.g;
import es.h;
import es.i;
import es.j;
import es.k;
import es.l;
import es.m;
import es.n;
import es.o;
import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Function;
import kotlin.Metadata;
import kotlin.Pair;
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
import kotlin.reflect.KCallable;
import kotlin.reflect.KClass;
import kotlin.reflect.KFunction;
import kotlin.reflect.KType;
import kotlin.reflect.KVisibility;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0001\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\u001e\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u001b\n\u0002\b\u0007\u0018\u0000 T2\b\u0012\u0004\u0012\u00020\u00020\u00012\u00020\u0003:\u0001TB\u0013\u0012\n\u0010\u0005\u001a\u0006\u0012\u0002\b\u00030\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\t\u0010\nJ\u0019\u0010\r\u001a\u00020\f2\b\u0010\u000b\u001a\u0004\u0018\u00010\u0002H\u0017¢\u0006\u0004\b\r\u0010\u000eJ\u001a\u0010\u0010\u001a\u00020\f2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0002H\u0096\u0002¢\u0006\u0004\b\u0010\u0010\u000eJ\u000f\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0012\u0010\u0013J\u000f\u0010\u0015\u001a\u00020\u0014H\u0016¢\u0006\u0004\b\u0015\u0010\u0016R\u001e\u0010\u0005\u001a\u0006\u0012\u0002\b\u00030\u00048\u0016X\u0096\u0004¢\u0006\f\n\u0004\b\u0005\u0010\u0017\u001a\u0004\b\u0018\u0010\u0019R \u0010 \u001a\b\u0012\u0004\u0012\u00020\u001b0\u001a8VX\u0097\u0004¢\u0006\f\u0012\u0004\b\u001e\u0010\u001f\u001a\u0004\b\u001c\u0010\u001dR \u0010$\u001a\b\u0012\u0004\u0012\u00020!0\u001a8VX\u0097\u0004¢\u0006\f\u0012\u0004\b#\u0010\u001f\u001a\u0004\b\"\u0010\u001dR(\u0010'\u001a\u0010\u0012\f\u0012\n\u0012\u0006\b\u0001\u0012\u00020\u00020\u00010\u001a8VX\u0097\u0004¢\u0006\f\u0012\u0004\b&\u0010\u001f\u001a\u0004\b%\u0010\u001dR\u001c\u0010,\u001a\u0004\u0018\u00010(8VX\u0097\u0004¢\u0006\f\u0012\u0004\b+\u0010\u001f\u001a\u0004\b)\u0010*R\u001a\u0010-\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b/\u0010\u001f\u001a\u0004\b-\u0010.R\u001a\u00100\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b1\u0010\u001f\u001a\u0004\b0\u0010.R\u001a\u00102\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b3\u0010\u001f\u001a\u0004\b2\u0010.R\u001a\u00104\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b5\u0010\u001f\u001a\u0004\b4\u0010.R\u001a\u00106\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b7\u0010\u001f\u001a\u0004\b6\u0010.R\u001a\u00108\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b9\u0010\u001f\u001a\u0004\b8\u0010.R\u001a\u0010:\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b;\u0010\u001f\u001a\u0004\b:\u0010.R\u001a\u0010<\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b=\u0010\u001f\u001a\u0004\b<\u0010.R\u001a\u0010>\u001a\u00020\f8VX\u0097\u0004¢\u0006\f\u0012\u0004\b?\u0010\u001f\u001a\u0004\b>\u0010.R\u0016\u0010A\u001a\u0004\u0018\u00010\u00148VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b@\u0010\u0016R\u0016\u0010C\u001a\u0004\u0018\u00010\u00148VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bB\u0010\u0016R\u001e\u0010H\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030E0D8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bF\u0010GR \u0010K\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00020I0D8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bJ\u0010GR\u001e\u0010M\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u00010D8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bL\u0010GR\u001a\u0010P\u001a\b\u0012\u0004\u0012\u00020N0\u001a8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bO\u0010\u001dR\u0016\u0010S\u001a\u0004\u0018\u00010\u00028VX\u0096\u0004¢\u0006\u0006\u001a\u0004\bQ\u0010R¨\u0006U"}, d2 = {"Lkotlin/jvm/internal/ClassReference;", "Lkotlin/reflect/KClass;", "", "Lkotlin/jvm/internal/ClassBasedDeclarationContainer;", "Ljava/lang/Class;", "jClass", "<init>", "(Ljava/lang/Class;)V", "", "error", "()Ljava/lang/Void;", "value", "", "isInstance", "(Ljava/lang/Object;)Z", "other", "equals", "", "hashCode", "()I", "", "toString", "()Ljava/lang/String;", "Ljava/lang/Class;", "getJClass", "()Ljava/lang/Class;", "", "Lkotlin/reflect/l;", "getTypeParameters", "()Ljava/util/List;", "getTypeParameters$annotations", "()V", "typeParameters", "Lkotlin/reflect/KType;", "getSupertypes", "getSupertypes$annotations", "supertypes", "getSealedSubclasses", "getSealedSubclasses$annotations", "sealedSubclasses", "Lkotlin/reflect/KVisibility;", "getVisibility", "()Lkotlin/reflect/KVisibility;", "getVisibility$annotations", "visibility", "isFinal", "()Z", "isFinal$annotations", "isOpen", "isOpen$annotations", "isAbstract", "isAbstract$annotations", "isSealed", "isSealed$annotations", "isData", "isData$annotations", "isInner", "isInner$annotations", "isCompanion", "isCompanion$annotations", "isFun", "isFun$annotations", "isValue", "isValue$annotations", "getSimpleName", "simpleName", "getQualifiedName", "qualifiedName", "", "Lkotlin/reflect/KCallable;", "getMembers", "()Ljava/util/Collection;", "members", "Lkotlin/reflect/KFunction;", "getConstructors", "constructors", "getNestedClasses", "nestedClasses", "", "getAnnotations", "annotations", "getObjectInstance", "()Ljava/lang/Object;", "objectInstance", "Companion", "kotlin-stdlib"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nClassReference.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClassReference.kt\nkotlin/jvm/internal/ClassReference\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,205:1\n1573#2:206\n1604#2,4:207\n1267#2,4:211\n1252#2,4:217\n465#3:215\n415#3:216\n*S KotlinDebug\n*F\n+ 1 ClassReference.kt\nkotlin/jvm/internal/ClassReference\n*L\n107#1:206\n107#1:207,4\n155#1:211,4\n163#1:217,4\n163#1:215\n163#1:216\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ClassReference implements KClass, ClassBasedDeclarationContainer {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Map<Class<? extends Function>, Integer> FUNCTION_CLASSES;
    @NotNull
    private static final HashMap<String, String> classFqNames;
    @NotNull
    private static final HashMap<String, String> primitiveFqNames;
    @NotNull
    private static final HashMap<String, String> primitiveWrapperFqNames;
    @NotNull
    private static final Map<String, String> simpleNames;
    @NotNull
    private final Class<?> jClass;

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u0011\u001a\u0004\u0018\u00010\u000b2\n\u0010\u0012\u001a\u0006\u0012\u0002\b\u00030\u0006J\u0014\u0010\u0013\u001a\u0004\u0018\u00010\u000b2\n\u0010\u0012\u001a\u0006\u0012\u0002\b\u00030\u0006J\u001c\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u00012\n\u0010\u0012\u001a\u0006\u0012\u0002\b\u00030\u0006R&\u0010\u0004\u001a\u001a\u0012\u0010\u0012\u000e\u0012\n\b\u0001\u0012\u0006\u0012\u0002\b\u00030\u00070\u0006\u0012\u0004\u0012\u00020\b0\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R*\u0010\t\u001a\u001e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b0\nj\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b`\fX\u0082\u0004¢\u0006\u0002\n\u0000R*\u0010\r\u001a\u001e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b0\nj\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b`\fX\u0082\u0004¢\u0006\u0002\n\u0000R*\u0010\u000e\u001a\u001e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b0\nj\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b`\fX\u0082\u0004¢\u0006\u0002\n\u0000R\"\u0010\u000f\u001a\u0016\u0012\f\u0012\n \u0010*\u0004\u0018\u00010\u000b0\u000b\u0012\u0004\u0012\u00020\u000b0\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"Lkotlin/jvm/internal/ClassReference$Companion;", "", "<init>", "()V", "FUNCTION_CLASSES", "", "Ljava/lang/Class;", "Lkotlin/Function;", "", "primitiveFqNames", "Ljava/util/HashMap;", "", "Lkotlin/collections/HashMap;", "primitiveWrapperFqNames", "classFqNames", "simpleNames", "kotlin.jvm.PlatformType", "getClassSimpleName", "jClass", "getClassQualifiedName", "isInstance", "", "value", "kotlin-stdlib"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nClassReference.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClassReference.kt\nkotlin/jvm/internal/ClassReference$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,205:1\n1#2:206\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String getClassQualifiedName(@NotNull Class<?> jClass) {
            String str;
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            String str2 = null;
            if (jClass.isAnonymousClass() || jClass.isLocalClass()) {
                return null;
            }
            if (jClass.isArray()) {
                Class<?> componentType = jClass.getComponentType();
                if (componentType.isPrimitive() && (str = (String) ClassReference.classFqNames.get(componentType.getName())) != null) {
                    str2 = str + "Array";
                }
                if (str2 == null) {
                    return "kotlin.Array";
                }
                return str2;
            }
            String str3 = (String) ClassReference.classFqNames.get(jClass.getName());
            if (str3 == null) {
                return jClass.getCanonicalName();
            }
            return str3;
        }

        public final String getClassSimpleName(@NotNull Class<?> jClass) {
            String str;
            Method enclosingMethod;
            Constructor<?> enclosingConstructor;
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            String str2 = null;
            if (jClass.isAnonymousClass()) {
                return null;
            }
            if (jClass.isLocalClass()) {
                String simpleName = jClass.getSimpleName();
                if (jClass.getEnclosingMethod() != null) {
                    Intrinsics.checkNotNull(simpleName);
                    String W0 = StringsKt.W0(simpleName, enclosingMethod.getName() + '$', null, 2, null);
                    if (W0 != null) {
                        return W0;
                    }
                }
                if (jClass.getEnclosingConstructor() != null) {
                    Intrinsics.checkNotNull(simpleName);
                    return StringsKt.W0(simpleName, enclosingConstructor.getName() + '$', null, 2, null);
                }
                Intrinsics.checkNotNull(simpleName);
                return StringsKt.V0(simpleName, '$', null, 2, null);
            } else if (jClass.isArray()) {
                Class<?> componentType = jClass.getComponentType();
                if (componentType.isPrimitive() && (str = (String) ClassReference.simpleNames.get(componentType.getName())) != null) {
                    str2 = str + "Array";
                }
                if (str2 == null) {
                    return "Array";
                }
                return str2;
            } else {
                String str3 = (String) ClassReference.simpleNames.get(jClass.getName());
                if (str3 == null) {
                    return jClass.getSimpleName();
                }
                return str3;
            }
        }

        public final boolean isInstance(Object obj, @NotNull Class<?> jClass) {
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            Map map = ClassReference.FUNCTION_CLASSES;
            Intrinsics.checkNotNull(map, "null cannot be cast to non-null type kotlin.collections.Map<K of kotlin.collections.MapsKt__MapsKt.get, V of kotlin.collections.MapsKt__MapsKt.get>");
            Integer num = (Integer) map.get(jClass);
            if (num != null) {
                return TypeIntrinsics.isFunctionOfArity(obj, num.intValue());
            }
            if (jClass.isPrimitive()) {
                jClass = ds.a.c(ds.a.e(jClass));
            }
            return jClass.isInstance(obj);
        }

        private Companion() {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    static {
        List o10 = CollectionsKt.o(Function0.class, Function1.class, Function2.class, Function3.class, Function4.class, Function5.class, Function6.class, n.class, Function8.class, o.class, es.a.class, b.class, c.class, d.class, e.class, f.class, g.class, h.class, i.class, j.class, k.class, l.class, m.class);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(o10, 10));
        int i10 = 0;
        for (Object obj : o10) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            arrayList.add(v.a((Class) obj, Integer.valueOf(i10)));
            i10 = i11;
        }
        FUNCTION_CLASSES = o0.u(arrayList);
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put(InquiryField.BooleanField.TYPE, "kotlin.Boolean");
        hashMap.put("char", "kotlin.Char");
        hashMap.put("byte", "kotlin.Byte");
        hashMap.put("short", "kotlin.Short");
        hashMap.put("int", "kotlin.Int");
        hashMap.put(InquiryField.FloatField.TYPE, "kotlin.Float");
        hashMap.put("long", "kotlin.Long");
        hashMap.put("double", "kotlin.Double");
        primitiveFqNames = hashMap;
        HashMap<String, String> hashMap2 = new HashMap<>();
        hashMap2.put("java.lang.Boolean", "kotlin.Boolean");
        hashMap2.put("java.lang.Character", "kotlin.Char");
        hashMap2.put("java.lang.Byte", "kotlin.Byte");
        hashMap2.put("java.lang.Short", "kotlin.Short");
        hashMap2.put("java.lang.Integer", "kotlin.Int");
        hashMap2.put("java.lang.Float", "kotlin.Float");
        hashMap2.put("java.lang.Long", "kotlin.Long");
        hashMap2.put("java.lang.Double", "kotlin.Double");
        primitiveWrapperFqNames = hashMap2;
        HashMap<String, String> hashMap3 = new HashMap<>();
        hashMap3.put("java.lang.Object", "kotlin.Any");
        hashMap3.put("java.lang.String", "kotlin.String");
        hashMap3.put("java.lang.CharSequence", "kotlin.CharSequence");
        hashMap3.put("java.lang.Throwable", "kotlin.Throwable");
        hashMap3.put("java.lang.Cloneable", "kotlin.Cloneable");
        hashMap3.put("java.lang.Number", "kotlin.Number");
        hashMap3.put("java.lang.Comparable", "kotlin.Comparable");
        hashMap3.put("java.lang.Enum", "kotlin.Enum");
        hashMap3.put("java.lang.annotation.Annotation", "kotlin.Annotation");
        hashMap3.put("java.lang.Iterable", "kotlin.collections.Iterable");
        hashMap3.put("java.util.Iterator", "kotlin.collections.Iterator");
        hashMap3.put("java.util.Collection", "kotlin.collections.Collection");
        hashMap3.put("java.util.List", "kotlin.collections.List");
        hashMap3.put("java.util.Set", "kotlin.collections.Set");
        hashMap3.put("java.util.ListIterator", "kotlin.collections.ListIterator");
        hashMap3.put("java.util.Map", "kotlin.collections.Map");
        hashMap3.put("java.util.Map$Entry", "kotlin.collections.Map.Entry");
        hashMap3.put("kotlin.jvm.internal.StringCompanionObject", "kotlin.String.Companion");
        hashMap3.put("kotlin.jvm.internal.EnumCompanionObject", "kotlin.Enum.Companion");
        hashMap3.putAll(hashMap);
        hashMap3.putAll(hashMap2);
        Collection<String> values = hashMap.values();
        Intrinsics.checkNotNullExpressionValue(values, "<get-values>(...)");
        for (String str : values) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("kotlin.jvm.internal.");
            Intrinsics.checkNotNull(str);
            sb2.append(StringsKt.Z0(str, '.', null, 2, null));
            sb2.append("CompanionObject");
            Pair a10 = v.a(sb2.toString(), str + ".Companion");
            hashMap3.put(a10.c(), a10.d());
        }
        for (Map.Entry<Class<? extends Function>, Integer> entry : FUNCTION_CLASSES.entrySet()) {
            int intValue = entry.getValue().intValue();
            hashMap3.put(entry.getKey().getName(), "kotlin.Function" + intValue);
        }
        classFqNames = hashMap3;
        LinkedHashMap linkedHashMap = new LinkedHashMap(o0.e(hashMap3.size()));
        for (Map.Entry entry2 : hashMap3.entrySet()) {
            Object key = entry2.getKey();
            String str2 = (String) entry2.getValue();
            Intrinsics.checkNotNull(str2);
            linkedHashMap.put(key, StringsKt.Z0(str2, '.', null, 2, null));
        }
        simpleNames = linkedHashMap;
    }

    public ClassReference(@NotNull Class<?> jClass) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        this.jClass = jClass;
    }

    private final Void error() {
        throw new ds.b();
    }

    public static /* synthetic */ void getSealedSubclasses$annotations() {
    }

    public static /* synthetic */ void getSupertypes$annotations() {
    }

    public static /* synthetic */ void getTypeParameters$annotations() {
    }

    public static /* synthetic */ void getVisibility$annotations() {
    }

    public static /* synthetic */ void isAbstract$annotations() {
    }

    public static /* synthetic */ void isCompanion$annotations() {
    }

    public static /* synthetic */ void isData$annotations() {
    }

    public static /* synthetic */ void isFinal$annotations() {
    }

    public static /* synthetic */ void isFun$annotations() {
    }

    public static /* synthetic */ void isInner$annotations() {
    }

    public static /* synthetic */ void isOpen$annotations() {
    }

    public static /* synthetic */ void isSealed$annotations() {
    }

    public static /* synthetic */ void isValue$annotations() {
    }

    public boolean equals(Object obj) {
        if ((obj instanceof ClassReference) && Intrinsics.areEqual(ds.a.c(this), ds.a.c((KClass) obj))) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.b
    @NotNull
    public List<Annotation> getAnnotations() {
        error();
        throw new qr.h();
    }

    @NotNull
    public Collection<KFunction> getConstructors() {
        error();
        throw new qr.h();
    }

    @Override // kotlin.jvm.internal.ClassBasedDeclarationContainer
    @NotNull
    public Class<?> getJClass() {
        return this.jClass;
    }

    @Override // kotlin.reflect.KClass, kotlin.jvm.internal.ClassBasedDeclarationContainer
    @NotNull
    public Collection<KCallable> getMembers() {
        error();
        throw new qr.h();
    }

    @NotNull
    public Collection<KClass> getNestedClasses() {
        error();
        throw new qr.h();
    }

    public Object getObjectInstance() {
        error();
        throw new qr.h();
    }

    @Override // kotlin.reflect.KClass
    public String getQualifiedName() {
        return Companion.getClassQualifiedName(getJClass());
    }

    @NotNull
    public List<KClass> getSealedSubclasses() {
        error();
        throw new qr.h();
    }

    @Override // kotlin.reflect.KClass
    public String getSimpleName() {
        return Companion.getClassSimpleName(getJClass());
    }

    @NotNull
    public List<KType> getSupertypes() {
        error();
        throw new qr.h();
    }

    @Override // kotlin.reflect.KClass
    @NotNull
    public List<kotlin.reflect.l> getTypeParameters() {
        error();
        throw new qr.h();
    }

    public KVisibility getVisibility() {
        error();
        throw new qr.h();
    }

    @Override // kotlin.reflect.KClass
    public int hashCode() {
        return ds.a.c(this).hashCode();
    }

    public boolean isAbstract() {
        error();
        throw new qr.h();
    }

    public boolean isCompanion() {
        error();
        throw new qr.h();
    }

    public boolean isData() {
        error();
        throw new qr.h();
    }

    public boolean isFinal() {
        error();
        throw new qr.h();
    }

    public boolean isFun() {
        error();
        throw new qr.h();
    }

    public boolean isInner() {
        error();
        throw new qr.h();
    }

    @Override // kotlin.reflect.KClass
    public boolean isInstance(Object obj) {
        return Companion.isInstance(obj, getJClass());
    }

    public boolean isOpen() {
        error();
        throw new qr.h();
    }

    public boolean isSealed() {
        error();
        throw new qr.h();
    }

    @Override // kotlin.reflect.KClass
    public boolean isValue() {
        error();
        throw new qr.h();
    }

    @NotNull
    public String toString() {
        return getJClass() + " (Kotlin reflection is not available)";
    }
}
