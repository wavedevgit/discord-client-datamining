package kotlin.reflect.jvm.internal.impl.types;

import java.util.ArrayDeque;
import java.util.Set;
import kotlin.Unit;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.types.model.CapturedTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
import kotlin.reflect.jvm.internal.impl.utils.SmartSet;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAbstractTypeChecker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractTypeChecker.kt\norg/jetbrains/kotlin/types/TypeCheckerState\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,884:1\n1#2:885\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class TypeCheckerState {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f35060a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f35061b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f35062c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35063d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f35064e;

    /* renamed from: f  reason: collision with root package name */
    private final AbstractTypePreparator f35065f;

    /* renamed from: g  reason: collision with root package name */
    private final AbstractTypeRefiner f35066g;

    /* renamed from: h  reason: collision with root package name */
    private int f35067h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f35068i;

    /* renamed from: j  reason: collision with root package name */
    private ArrayDeque f35069j;

    /* renamed from: k  reason: collision with root package name */
    private Set f35070k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ForkPointContext {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Default implements ForkPointContext {

            /* renamed from: a  reason: collision with root package name */
            private boolean f35071a;

            @Override // kotlin.reflect.jvm.internal.impl.types.TypeCheckerState.ForkPointContext
            public void fork(@NotNull Function0<Boolean> block) {
                Intrinsics.checkNotNullParameter(block, "block");
                if (this.f35071a) {
                    return;
                }
                this.f35071a = ((Boolean) block.invoke()).booleanValue();
            }

            public final boolean getResult() {
                return this.f35071a;
            }
        }

        void fork(@NotNull Function0<Boolean> function0);
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class LowerCapturedTypePolicy {
        public static final LowerCapturedTypePolicy CHECK_ONLY_LOWER = new LowerCapturedTypePolicy("CHECK_ONLY_LOWER", 0);
        public static final LowerCapturedTypePolicy CHECK_SUBTYPE_AND_LOWER = new LowerCapturedTypePolicy("CHECK_SUBTYPE_AND_LOWER", 1);
        public static final LowerCapturedTypePolicy SKIP_LOWER = new LowerCapturedTypePolicy("SKIP_LOWER", 2);

        /* renamed from: d  reason: collision with root package name */
        private static final /* synthetic */ LowerCapturedTypePolicy[] f35072d;

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f35073e;

        static {
            LowerCapturedTypePolicy[] a10 = a();
            f35072d = a10;
            f35073e = sr.a.a(a10);
        }

        private LowerCapturedTypePolicy(String str, int i10) {
        }

        private static final /* synthetic */ LowerCapturedTypePolicy[] a() {
            return new LowerCapturedTypePolicy[]{CHECK_ONLY_LOWER, CHECK_SUBTYPE_AND_LOWER, SKIP_LOWER};
        }

        public static LowerCapturedTypePolicy valueOf(String str) {
            return (LowerCapturedTypePolicy) Enum.valueOf(LowerCapturedTypePolicy.class, str);
        }

        public static LowerCapturedTypePolicy[] values() {
            return (LowerCapturedTypePolicy[]) f35072d.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class SupertypesPolicy {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static abstract class DoCustomTransform extends SupertypesPolicy {
            public DoCustomTransform() {
                super(null);
            }
        }

        @SourceDebugExtension({"SMAP\nAbstractTypeChecker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractTypeChecker.kt\norg/jetbrains/kotlin/types/TypeCheckerState$SupertypesPolicy$LowerIfFlexible\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,884:1\n1#2:885\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class LowerIfFlexible extends SupertypesPolicy {
            @NotNull
            public static final LowerIfFlexible INSTANCE = new LowerIfFlexible();

            private LowerIfFlexible() {
                super(null);
            }

            @Override // kotlin.reflect.jvm.internal.impl.types.TypeCheckerState.SupertypesPolicy
            @NotNull
            /* renamed from: transformType */
            public RigidTypeMarker mo1199transformType(@NotNull TypeCheckerState state, @NotNull KotlinTypeMarker type) {
                Intrinsics.checkNotNullParameter(state, "state");
                Intrinsics.checkNotNullParameter(type, "type");
                return state.getTypeSystemContext().lowerBoundIfFlexible(type);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class None extends SupertypesPolicy {
            @NotNull
            public static final None INSTANCE = new None();

            private None() {
                super(null);
            }

            @Override // kotlin.reflect.jvm.internal.impl.types.TypeCheckerState.SupertypesPolicy
            /* renamed from: transformType  reason: collision with other method in class */
            public /* bridge */ /* synthetic */ RigidTypeMarker mo1199transformType(TypeCheckerState typeCheckerState, KotlinTypeMarker kotlinTypeMarker) {
                return (RigidTypeMarker) transformType(typeCheckerState, kotlinTypeMarker);
            }

            @NotNull
            public Void transformType(@NotNull TypeCheckerState state, @NotNull KotlinTypeMarker type) {
                Intrinsics.checkNotNullParameter(state, "state");
                Intrinsics.checkNotNullParameter(type, "type");
                throw new UnsupportedOperationException("Should not be called");
            }
        }

        @SourceDebugExtension({"SMAP\nAbstractTypeChecker.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractTypeChecker.kt\norg/jetbrains/kotlin/types/TypeCheckerState$SupertypesPolicy$UpperIfFlexible\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,884:1\n1#2:885\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class UpperIfFlexible extends SupertypesPolicy {
            @NotNull
            public static final UpperIfFlexible INSTANCE = new UpperIfFlexible();

            private UpperIfFlexible() {
                super(null);
            }

            @Override // kotlin.reflect.jvm.internal.impl.types.TypeCheckerState.SupertypesPolicy
            @NotNull
            /* renamed from: transformType */
            public RigidTypeMarker mo1199transformType(@NotNull TypeCheckerState state, @NotNull KotlinTypeMarker type) {
                Intrinsics.checkNotNullParameter(state, "state");
                Intrinsics.checkNotNullParameter(type, "type");
                return state.getTypeSystemContext().upperBoundIfFlexible(type);
            }
        }

        public /* synthetic */ SupertypesPolicy(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        /* renamed from: transformType */
        public abstract RigidTypeMarker mo1199transformType(@NotNull TypeCheckerState typeCheckerState, @NotNull KotlinTypeMarker kotlinTypeMarker);

        private SupertypesPolicy() {
        }
    }

    public TypeCheckerState(boolean z10, boolean z11, boolean z12, boolean z13, @NotNull TypeSystemContext typeSystemContext, @NotNull AbstractTypePreparator kotlinTypePreparator, @NotNull AbstractTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(typeSystemContext, "typeSystemContext");
        Intrinsics.checkNotNullParameter(kotlinTypePreparator, "kotlinTypePreparator");
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        this.f35060a = z10;
        this.f35061b = z11;
        this.f35062c = z12;
        this.f35063d = z13;
        this.f35064e = typeSystemContext;
        this.f35065f = kotlinTypePreparator;
        this.f35066g = kotlinTypeRefiner;
    }

    public static /* synthetic */ Boolean addSubtypeConstraint$default(TypeCheckerState typeCheckerState, KotlinTypeMarker kotlinTypeMarker, KotlinTypeMarker kotlinTypeMarker2, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 4) != 0) {
                z10 = false;
            }
            return typeCheckerState.addSubtypeConstraint(kotlinTypeMarker, kotlinTypeMarker2, z10);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: addSubtypeConstraint");
    }

    public Boolean addSubtypeConstraint(@NotNull KotlinTypeMarker subType, @NotNull KotlinTypeMarker superType, boolean z10) {
        Intrinsics.checkNotNullParameter(subType, "subType");
        Intrinsics.checkNotNullParameter(superType, "superType");
        return null;
    }

    public final void clear() {
        ArrayDeque arrayDeque = this.f35069j;
        Intrinsics.checkNotNull(arrayDeque);
        arrayDeque.clear();
        Set set = this.f35070k;
        Intrinsics.checkNotNull(set);
        set.clear();
        this.f35068i = false;
    }

    public boolean customIsSubtypeOf(@NotNull KotlinTypeMarker subType, @NotNull KotlinTypeMarker superType) {
        Intrinsics.checkNotNullParameter(subType, "subType");
        Intrinsics.checkNotNullParameter(superType, "superType");
        return true;
    }

    @NotNull
    public LowerCapturedTypePolicy getLowerCapturedTypePolicy(@NotNull RigidTypeMarker subType, @NotNull CapturedTypeMarker superType) {
        Intrinsics.checkNotNullParameter(subType, "subType");
        Intrinsics.checkNotNullParameter(superType, "superType");
        return LowerCapturedTypePolicy.CHECK_SUBTYPE_AND_LOWER;
    }

    public final ArrayDeque<RigidTypeMarker> getSupertypesDeque() {
        return this.f35069j;
    }

    public final Set<RigidTypeMarker> getSupertypesSet() {
        return this.f35070k;
    }

    @NotNull
    public final TypeSystemContext getTypeSystemContext() {
        return this.f35064e;
    }

    public final void initialize() {
        this.f35068i = true;
        if (this.f35069j == null) {
            this.f35069j = new ArrayDeque(4);
        }
        if (this.f35070k == null) {
            this.f35070k = SmartSet.Companion.create();
        }
    }

    public final boolean isAllowedTypeVariable(@NotNull KotlinTypeMarker type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (this.f35063d && this.f35064e.isTypeVariableType(type)) {
            return true;
        }
        return false;
    }

    public final boolean isDnnTypesEqualToFlexible() {
        return this.f35062c;
    }

    public final boolean isErrorTypeEqualsToAnything() {
        return this.f35060a;
    }

    public final boolean isStubTypeEqualsToAnything() {
        return this.f35061b;
    }

    @NotNull
    public final KotlinTypeMarker prepareType(@NotNull KotlinTypeMarker type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return this.f35065f.prepareType(type);
    }

    @NotNull
    public final KotlinTypeMarker refineType(@NotNull KotlinTypeMarker type) {
        Intrinsics.checkNotNullParameter(type, "type");
        return this.f35066g.refineType(type);
    }

    public boolean runForkingPoint(@NotNull Function1<? super ForkPointContext, Unit> block) {
        Intrinsics.checkNotNullParameter(block, "block");
        ForkPointContext.Default r02 = new ForkPointContext.Default();
        block.invoke(r02);
        return r02.getResult();
    }
}
