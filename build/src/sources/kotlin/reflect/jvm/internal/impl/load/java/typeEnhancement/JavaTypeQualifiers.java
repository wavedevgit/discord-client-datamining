package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeQualifiers {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final JavaTypeQualifiers f33608e = new JavaTypeQualifiers(null, null, false, false, 8, null);

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f33609a;

    /* renamed from: b  reason: collision with root package name */
    private final MutabilityQualifier f33610b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33611c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33612d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeQualifiers getNONE() {
            return JavaTypeQualifiers.f33608e;
        }

        private Companion() {
        }
    }

    public JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        this.f33609a = nullabilityQualifier;
        this.f33610b = mutabilityQualifier;
        this.f33611c = z10;
        this.f33612d = z11;
    }

    public static /* synthetic */ JavaTypeQualifiers copy$default(JavaTypeQualifiers javaTypeQualifiers, NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = javaTypeQualifiers.f33609a;
        }
        if ((i10 & 2) != 0) {
            mutabilityQualifier = javaTypeQualifiers.f33610b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeQualifiers.f33611c;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeQualifiers.f33612d;
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
            return this.f33609a == javaTypeQualifiers.f33609a && this.f33610b == javaTypeQualifiers.f33610b && this.f33611c == javaTypeQualifiers.f33611c && this.f33612d == javaTypeQualifiers.f33612d;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f33611c;
    }

    public final MutabilityQualifier getMutability() {
        return this.f33610b;
    }

    public final NullabilityQualifier getNullability() {
        return this.f33609a;
    }

    public int hashCode() {
        NullabilityQualifier nullabilityQualifier = this.f33609a;
        int hashCode = (nullabilityQualifier == null ? 0 : nullabilityQualifier.hashCode()) * 31;
        MutabilityQualifier mutabilityQualifier = this.f33610b;
        return ((((hashCode + (mutabilityQualifier != null ? mutabilityQualifier.hashCode() : 0)) * 31) + Boolean.hashCode(this.f33611c)) * 31) + Boolean.hashCode(this.f33612d);
    }

    public final boolean isNullabilityQualifierForWarning() {
        return this.f33612d;
    }

    @NotNull
    public String toString() {
        return "JavaTypeQualifiers(nullability=" + this.f33609a + ", mutability=" + this.f33610b + ", definitelyNotNull=" + this.f33611c + ", isNullabilityQualifierForWarning=" + this.f33612d + ')';
    }

    public /* synthetic */ JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, mutabilityQualifier, z10, (i10 & 8) != 0 ? false : z11);
    }
}
