package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeQualifiers {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final JavaTypeQualifiers f33516e = new JavaTypeQualifiers(null, null, false, false, 8, null);

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f33517a;

    /* renamed from: b  reason: collision with root package name */
    private final MutabilityQualifier f33518b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33519c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33520d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeQualifiers getNONE() {
            return JavaTypeQualifiers.f33516e;
        }

        private Companion() {
        }
    }

    public JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        this.f33517a = nullabilityQualifier;
        this.f33518b = mutabilityQualifier;
        this.f33519c = z10;
        this.f33520d = z11;
    }

    public static /* synthetic */ JavaTypeQualifiers copy$default(JavaTypeQualifiers javaTypeQualifiers, NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = javaTypeQualifiers.f33517a;
        }
        if ((i10 & 2) != 0) {
            mutabilityQualifier = javaTypeQualifiers.f33518b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeQualifiers.f33519c;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeQualifiers.f33520d;
        }
        return javaTypeQualifiers.copy(nullabilityQualifier, mutabilityQualifier, z10, z11);
    }

    @NotNull
    public final JavaTypeQualifiers copy(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        return new JavaTypeQualifiers(nullabilityQualifier, mutabilityQualifier, z10, z11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof JavaTypeQualifiers) {
            JavaTypeQualifiers javaTypeQualifiers = (JavaTypeQualifiers) obj;
            return this.f33517a == javaTypeQualifiers.f33517a && this.f33518b == javaTypeQualifiers.f33518b && this.f33519c == javaTypeQualifiers.f33519c && this.f33520d == javaTypeQualifiers.f33520d;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f33519c;
    }

    public final MutabilityQualifier getMutability() {
        return this.f33518b;
    }

    public final NullabilityQualifier getNullability() {
        return this.f33517a;
    }

    public int hashCode() {
        NullabilityQualifier nullabilityQualifier = this.f33517a;
        int hashCode = (nullabilityQualifier == null ? 0 : nullabilityQualifier.hashCode()) * 31;
        MutabilityQualifier mutabilityQualifier = this.f33518b;
        return ((((hashCode + (mutabilityQualifier != null ? mutabilityQualifier.hashCode() : 0)) * 31) + Boolean.hashCode(this.f33519c)) * 31) + Boolean.hashCode(this.f33520d);
    }

    public final boolean isNullabilityQualifierForWarning() {
        return this.f33520d;
    }

    @NotNull
    public String toString() {
        return "JavaTypeQualifiers(nullability=" + this.f33517a + ", mutability=" + this.f33518b + ", definitelyNotNull=" + this.f33519c + ", isNullabilityQualifierForWarning=" + this.f33520d + ')';
    }

    public /* synthetic */ JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, mutabilityQualifier, z10, (i10 & 8) != 0 ? false : z11);
    }
}
