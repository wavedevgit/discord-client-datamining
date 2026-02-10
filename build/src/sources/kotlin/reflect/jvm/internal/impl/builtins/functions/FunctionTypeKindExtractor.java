package kotlin.reflect.jvm.internal.impl.builtins.functions;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.functions.FunctionTypeKind;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nFunctionTypeKindExtractor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FunctionTypeKindExtractor.kt\norg/jetbrains/kotlin/builtins/functions/FunctionTypeKindExtractor\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,70:1\n1491#2:71\n1516#2,3:72\n1519#2,3:82\n1761#2,3:85\n384#3,7:75\n*S KotlinDebug\n*F\n+ 1 FunctionTypeKindExtractor.kt\norg/jetbrains/kotlin/builtins/functions/FunctionTypeKindExtractor\n*L\n32#1:71\n32#1:72,3\n32#1:82,3\n54#1:85,3\n32#1:75,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FunctionTypeKindExtractor {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: c  reason: collision with root package name */
    private static final FunctionTypeKindExtractor f31967c = new FunctionTypeKindExtractor(CollectionsKt.o(FunctionTypeKind.Function.INSTANCE, FunctionTypeKind.SuspendFunction.INSTANCE, FunctionTypeKind.KFunction.INSTANCE, FunctionTypeKind.KSuspendFunction.INSTANCE));

    /* renamed from: a  reason: collision with root package name */
    private final List f31968a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f31969b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final FunctionTypeKindExtractor getDefault() {
            return FunctionTypeKindExtractor.f31967c;
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class KindWithArity {

        /* renamed from: a  reason: collision with root package name */
        private final FunctionTypeKind f31970a;

        /* renamed from: b  reason: collision with root package name */
        private final int f31971b;

        public KindWithArity(@NotNull FunctionTypeKind kind, int i10) {
            Intrinsics.checkNotNullParameter(kind, "kind");
            this.f31970a = kind;
            this.f31971b = i10;
        }

        @NotNull
        public final FunctionTypeKind component1() {
            return this.f31970a;
        }

        public final int component2() {
            return this.f31971b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof KindWithArity) {
                KindWithArity kindWithArity = (KindWithArity) obj;
                return Intrinsics.areEqual(this.f31970a, kindWithArity.f31970a) && this.f31971b == kindWithArity.f31971b;
            }
            return false;
        }

        @NotNull
        public final FunctionTypeKind getKind() {
            return this.f31970a;
        }

        public int hashCode() {
            return (this.f31970a.hashCode() * 31) + Integer.hashCode(this.f31971b);
        }

        @NotNull
        public String toString() {
            return "KindWithArity(kind=" + this.f31970a + ", arity=" + this.f31971b + ')';
        }
    }

    public FunctionTypeKindExtractor(@NotNull List<? extends FunctionTypeKind> kinds) {
        Intrinsics.checkNotNullParameter(kinds, "kinds");
        this.f31968a = kinds;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        for (Object obj : kinds) {
            FqName packageFqName = ((FunctionTypeKind) obj).getPackageFqName();
            Object obj2 = linkedHashMap.get(packageFqName);
            if (obj2 == null) {
                obj2 = new ArrayList();
                linkedHashMap.put(packageFqName, obj2);
            }
            ((List) obj2).add(obj);
        }
        this.f31969b = linkedHashMap;
    }

    private final Integer a(String str) {
        if (str.length() == 0) {
            return null;
        }
        int length = str.length();
        int i10 = 0;
        for (int i11 = 0; i11 < length; i11++) {
            int charAt = str.charAt(i11) - '0';
            if (charAt < 0 || charAt >= 10) {
                return null;
            }
            i10 = (i10 * 10) + charAt;
        }
        return Integer.valueOf(i10);
    }

    public final FunctionTypeKind getFunctionalClassKind(@NotNull FqName packageFqName, @NotNull String className) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(className, "className");
        KindWithArity functionalClassKindWithArity = getFunctionalClassKindWithArity(packageFqName, className);
        if (functionalClassKindWithArity != null) {
            return functionalClassKindWithArity.getKind();
        }
        return null;
    }

    public final KindWithArity getFunctionalClassKindWithArity(@NotNull FqName packageFqName, @NotNull String className) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(className, "className");
        List<FunctionTypeKind> list = (List) this.f31969b.get(packageFqName);
        if (list == null) {
            return null;
        }
        for (FunctionTypeKind functionTypeKind : list) {
            if (StringsKt.P(className, functionTypeKind.getClassNamePrefix(), false, 2, null)) {
                String substring = className.substring(functionTypeKind.getClassNamePrefix().length());
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                Integer a10 = a(substring);
                if (a10 != null) {
                    return new KindWithArity(functionTypeKind, a10.intValue());
                }
            }
        }
        return null;
    }
}
