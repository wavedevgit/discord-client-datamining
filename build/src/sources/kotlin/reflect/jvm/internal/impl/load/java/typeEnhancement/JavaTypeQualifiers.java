package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeQualifiers {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final JavaTypeQualifiers f33108e = new JavaTypeQualifiers(null, null, false, false, 8, null);

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f33109a;

    /* renamed from: b  reason: collision with root package name */
    private final MutabilityQualifier f33110b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33111c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33112d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeQualifiers getNONE() {
            return JavaTypeQualifiers.f33108e;
        }

        private Companion() {
        }
    }

    public JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        this.f33109a = nullabilityQualifier;
        this.f33110b = mutabilityQualifier;
        this.f33111c = z10;
        this.f33112d = z11;
    }

    public static /* synthetic */ JavaTypeQualifiers copy$default(JavaTypeQualifiers javaTypeQualifiers, NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = javaTypeQualifiers.f33109a;
        }
        if ((i10 & 2) != 0) {
            mutabilityQualifier = javaTypeQualifiers.f33110b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeQualifiers.f33111c;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeQualifiers.f33112d;
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
            return this.f33109a == javaTypeQualifiers.f33109a && this.f33110b == javaTypeQualifiers.f33110b && this.f33111c == javaTypeQualifiers.f33111c && this.f33112d == javaTypeQualifiers.f33112d;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f33111c;
    }

    public final MutabilityQualifier getMutability() {
        return this.f33110b;
    }

    public final NullabilityQualifier getNullability() {
        return this.f33109a;
    }

    public int hashCode() {
        NullabilityQualifier nullabilityQualifier = this.f33109a;
        int hashCode = (nullabilityQualifier == null ? 0 : nullabilityQualifier.hashCode()) * 31;
        MutabilityQualifier mutabilityQualifier = this.f33110b;
        return ((((hashCode + (mutabilityQualifier != null ? mutabilityQualifier.hashCode() : 0)) * 31) + Boolean.hashCode(this.f33111c)) * 31) + Boolean.hashCode(this.f33112d);
    }

    public final boolean isNullabilityQualifierForWarning() {
        return this.f33112d;
    }

    @NotNull
    public String toString() {
        return "JavaTypeQualifiers(nullability=" + this.f33109a + ", mutability=" + this.f33110b + ", definitelyNotNull=" + this.f33111c + ", isNullabilityQualifierForWarning=" + this.f33112d + ')';
    }

    public /* synthetic */ JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, mutabilityQualifier, z10, (i10 & 8) != 0 ? false : z11);
    }
}
