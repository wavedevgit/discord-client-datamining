package kotlin.reflect.jvm.internal.impl.builtins.functions;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class FunctionTypeKind {

    /* renamed from: a  reason: collision with root package name */
    private final FqName f33479a;

    /* renamed from: b  reason: collision with root package name */
    private final String f33480b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33481c;

    /* renamed from: d  reason: collision with root package name */
    private final ClassId f33482d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f33483e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Function extends FunctionTypeKind {
        @NotNull
        public static final Function INSTANCE = new Function();

        private Function() {
            super(StandardNames.BUILT_INS_PACKAGE_FQ_NAME, "Function", false, null, true);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class KFunction extends FunctionTypeKind {
        @NotNull
        public static final KFunction INSTANCE = new KFunction();

        private KFunction() {
            super(StandardNames.KOTLIN_REFLECT_FQ_NAME, "KFunction", true, null, false);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class KSuspendFunction extends FunctionTypeKind {
        @NotNull
        public static final KSuspendFunction INSTANCE = new KSuspendFunction();

        private KSuspendFunction() {
            super(StandardNames.KOTLIN_REFLECT_FQ_NAME, "KSuspendFunction", true, null, false);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class SuspendFunction extends FunctionTypeKind {
        @NotNull
        public static final SuspendFunction INSTANCE = new SuspendFunction();

        private SuspendFunction() {
            super(StandardNames.COROUTINES_PACKAGE_FQ_NAME, "SuspendFunction", false, null, true);
        }
    }

    public FunctionTypeKind(@NotNull FqName packageFqName, @NotNull String classNamePrefix, boolean z10, ClassId classId, boolean z11) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(classNamePrefix, "classNamePrefix");
        this.f33479a = packageFqName;
        this.f33480b = classNamePrefix;
        this.f33481c = z10;
        this.f33482d = classId;
        this.f33483e = z11;
    }

    @NotNull
    public final String getClassNamePrefix() {
        return this.f33480b;
    }

    @NotNull
    public final FqName getPackageFqName() {
        return this.f33479a;
    }

    @NotNull
    public final Name numberedClassName(int i10) {
        Name identifier = Name.identifier(this.f33480b + i10);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        return identifier;
    }

    @NotNull
    public String toString() {
        return this.f33479a + '.' + this.f33480b + 'N';
    }
}
