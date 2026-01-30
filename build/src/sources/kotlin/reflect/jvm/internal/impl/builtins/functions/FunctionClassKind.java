package kotlin.reflect.jvm.internal.impl.builtins.functions;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.functions.FunctionTypeKind;
import org.jetbrains.annotations.NotNull;
import pr.a;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FunctionClassKind {
    @NotNull
    public static final Companion Companion;

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ FunctionClassKind[] f33493d;

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f33494e;
    public static final FunctionClassKind Function = new FunctionClassKind("Function", 0);
    public static final FunctionClassKind SuspendFunction = new FunctionClassKind("SuspendFunction", 1);
    public static final FunctionClassKind KFunction = new FunctionClassKind("KFunction", 2);
    public static final FunctionClassKind KSuspendFunction = new FunctionClassKind("KSuspendFunction", 3);
    public static final FunctionClassKind UNKNOWN = new FunctionClassKind("UNKNOWN", 4);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final FunctionClassKind getFunctionClassKind(@NotNull FunctionTypeKind functionTypeKind) {
            Intrinsics.checkNotNullParameter(functionTypeKind, "functionTypeKind");
            if (Intrinsics.areEqual(functionTypeKind, FunctionTypeKind.Function.INSTANCE)) {
                return FunctionClassKind.Function;
            }
            if (Intrinsics.areEqual(functionTypeKind, FunctionTypeKind.SuspendFunction.INSTANCE)) {
                return FunctionClassKind.SuspendFunction;
            }
            if (Intrinsics.areEqual(functionTypeKind, FunctionTypeKind.KFunction.INSTANCE)) {
                return FunctionClassKind.KFunction;
            }
            if (Intrinsics.areEqual(functionTypeKind, FunctionTypeKind.KSuspendFunction.INSTANCE)) {
                return FunctionClassKind.KSuspendFunction;
            }
            return FunctionClassKind.UNKNOWN;
        }

        private Companion() {
        }
    }

    static {
        FunctionClassKind[] a10 = a();
        f33493d = a10;
        f33494e = a.a(a10);
        Companion = new Companion(null);
    }

    private FunctionClassKind(String str, int i10) {
    }

    private static final /* synthetic */ FunctionClassKind[] a() {
        return new FunctionClassKind[]{Function, SuspendFunction, KFunction, KSuspendFunction, UNKNOWN};
    }

    public static FunctionClassKind valueOf(String str) {
        return (FunctionClassKind) Enum.valueOf(FunctionClassKind.class, str);
    }

    public static FunctionClassKind[] values() {
        return (FunctionClassKind[]) f33493d.clone();
    }
}
