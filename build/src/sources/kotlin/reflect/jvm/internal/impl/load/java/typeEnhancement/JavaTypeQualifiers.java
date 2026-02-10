package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeQualifiers {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final JavaTypeQualifiers f32817e = new JavaTypeQualifiers(null, null, false, false, 8, null);

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f32818a;

    /* renamed from: b  reason: collision with root package name */
    private final MutabilityQualifier f32819b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f32820c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32821d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeQualifiers getNONE() {
            return JavaTypeQualifiers.f32817e;
        }

        private Companion() {
        }
    }

    public JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        this.f32818a = nullabilityQualifier;
        this.f32819b = mutabilityQualifier;
        this.f32820c = z10;
        this.f32821d = z11;
    }

    public static /* synthetic */ JavaTypeQualifiers copy$default(JavaTypeQualifiers javaTypeQualifiers, NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = javaTypeQualifiers.f32818a;
        }
        if ((i10 & 2) != 0) {
            mutabilityQualifier = javaTypeQualifiers.f32819b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeQualifiers.f32820c;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeQualifiers.f32821d;
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
            return this.f32818a == javaTypeQualifiers.f32818a && this.f32819b == javaTypeQualifiers.f32819b && this.f32820c == javaTypeQualifiers.f32820c && this.f32821d == javaTypeQualifiers.f32821d;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f32820c;
    }

    public final MutabilityQualifier getMutability() {
        return this.f32819b;
    }

    public final NullabilityQualifier getNullability() {
        return this.f32818a;
    }

    public int hashCode() {
        NullabilityQualifier nullabilityQualifier = this.f32818a;
        int hashCode = (nullabilityQualifier == null ? 0 : nullabilityQualifier.hashCode()) * 31;
        MutabilityQualifier mutabilityQualifier = this.f32819b;
        return ((((hashCode + (mutabilityQualifier != null ? mutabilityQualifier.hashCode() : 0)) * 31) + Boolean.hashCode(this.f32820c)) * 31) + Boolean.hashCode(this.f32821d);
    }

    public final boolean isNullabilityQualifierForWarning() {
        return this.f32821d;
    }

    @NotNull
    public String toString() {
        return "JavaTypeQualifiers(nullability=" + this.f32818a + ", mutability=" + this.f32819b + ", definitelyNotNull=" + this.f32820c + ", isNullabilityQualifierForWarning=" + this.f32821d + ')';
    }

    public /* synthetic */ JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, mutabilityQualifier, z10, (i10 & 8) != 0 ? false : z11);
    }
}
