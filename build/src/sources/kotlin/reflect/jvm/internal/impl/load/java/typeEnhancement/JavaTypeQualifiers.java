package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeQualifiers {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final JavaTypeQualifiers f33040e = new JavaTypeQualifiers(null, null, false, false, 8, null);

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f33041a;

    /* renamed from: b  reason: collision with root package name */
    private final MutabilityQualifier f33042b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33043c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33044d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeQualifiers getNONE() {
            return JavaTypeQualifiers.f33040e;
        }

        private Companion() {
        }
    }

    public JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        this.f33041a = nullabilityQualifier;
        this.f33042b = mutabilityQualifier;
        this.f33043c = z10;
        this.f33044d = z11;
    }

    public static /* synthetic */ JavaTypeQualifiers copy$default(JavaTypeQualifiers javaTypeQualifiers, NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = javaTypeQualifiers.f33041a;
        }
        if ((i10 & 2) != 0) {
            mutabilityQualifier = javaTypeQualifiers.f33042b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeQualifiers.f33043c;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeQualifiers.f33044d;
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
            return this.f33041a == javaTypeQualifiers.f33041a && this.f33042b == javaTypeQualifiers.f33042b && this.f33043c == javaTypeQualifiers.f33043c && this.f33044d == javaTypeQualifiers.f33044d;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f33043c;
    }

    public final MutabilityQualifier getMutability() {
        return this.f33042b;
    }

    public final NullabilityQualifier getNullability() {
        return this.f33041a;
    }

    public int hashCode() {
        NullabilityQualifier nullabilityQualifier = this.f33041a;
        int hashCode = (nullabilityQualifier == null ? 0 : nullabilityQualifier.hashCode()) * 31;
        MutabilityQualifier mutabilityQualifier = this.f33042b;
        return ((((hashCode + (mutabilityQualifier != null ? mutabilityQualifier.hashCode() : 0)) * 31) + Boolean.hashCode(this.f33043c)) * 31) + Boolean.hashCode(this.f33044d);
    }

    public final boolean isNullabilityQualifierForWarning() {
        return this.f33044d;
    }

    @NotNull
    public String toString() {
        return "JavaTypeQualifiers(nullability=" + this.f33041a + ", mutability=" + this.f33042b + ", definitelyNotNull=" + this.f33043c + ", isNullabilityQualifierForWarning=" + this.f33044d + ')';
    }

    public /* synthetic */ JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, mutabilityQualifier, z10, (i10 & 8) != 0 ? false : z11);
    }
}
