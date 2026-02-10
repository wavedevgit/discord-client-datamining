package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeQualifiers {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final JavaTypeQualifiers f33039e = new JavaTypeQualifiers(null, null, false, false, 8, null);

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f33040a;

    /* renamed from: b  reason: collision with root package name */
    private final MutabilityQualifier f33041b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33042c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33043d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeQualifiers getNONE() {
            return JavaTypeQualifiers.f33039e;
        }

        private Companion() {
        }
    }

    public JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        this.f33040a = nullabilityQualifier;
        this.f33041b = mutabilityQualifier;
        this.f33042c = z10;
        this.f33043d = z11;
    }

    public static /* synthetic */ JavaTypeQualifiers copy$default(JavaTypeQualifiers javaTypeQualifiers, NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = javaTypeQualifiers.f33040a;
        }
        if ((i10 & 2) != 0) {
            mutabilityQualifier = javaTypeQualifiers.f33041b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeQualifiers.f33042c;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeQualifiers.f33043d;
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
            return this.f33040a == javaTypeQualifiers.f33040a && this.f33041b == javaTypeQualifiers.f33041b && this.f33042c == javaTypeQualifiers.f33042c && this.f33043d == javaTypeQualifiers.f33043d;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f33042c;
    }

    public final MutabilityQualifier getMutability() {
        return this.f33041b;
    }

    public final NullabilityQualifier getNullability() {
        return this.f33040a;
    }

    public int hashCode() {
        NullabilityQualifier nullabilityQualifier = this.f33040a;
        int hashCode = (nullabilityQualifier == null ? 0 : nullabilityQualifier.hashCode()) * 31;
        MutabilityQualifier mutabilityQualifier = this.f33041b;
        return ((((hashCode + (mutabilityQualifier != null ? mutabilityQualifier.hashCode() : 0)) * 31) + Boolean.hashCode(this.f33042c)) * 31) + Boolean.hashCode(this.f33043d);
    }

    public final boolean isNullabilityQualifierForWarning() {
        return this.f33043d;
    }

    @NotNull
    public String toString() {
        return "JavaTypeQualifiers(nullability=" + this.f33040a + ", mutability=" + this.f33041b + ", definitelyNotNull=" + this.f33042c + ", isNullabilityQualifierForWarning=" + this.f33043d + ')';
    }

    public /* synthetic */ JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, mutabilityQualifier, z10, (i10 & 8) != 0 ? false : z11);
    }
}
