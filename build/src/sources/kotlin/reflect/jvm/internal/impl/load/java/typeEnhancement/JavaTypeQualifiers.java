package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeQualifiers {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final JavaTypeQualifiers f34334e = new JavaTypeQualifiers(null, null, false, false, 8, null);

    /* renamed from: a  reason: collision with root package name */
    private final NullabilityQualifier f34335a;

    /* renamed from: b  reason: collision with root package name */
    private final MutabilityQualifier f34336b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f34337c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f34338d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final JavaTypeQualifiers getNONE() {
            return JavaTypeQualifiers.f34334e;
        }

        private Companion() {
        }
    }

    public JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11) {
        this.f34335a = nullabilityQualifier;
        this.f34336b = mutabilityQualifier;
        this.f34337c = z10;
        this.f34338d = z11;
    }

    public static /* synthetic */ JavaTypeQualifiers copy$default(JavaTypeQualifiers javaTypeQualifiers, NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            nullabilityQualifier = javaTypeQualifiers.f34335a;
        }
        if ((i10 & 2) != 0) {
            mutabilityQualifier = javaTypeQualifiers.f34336b;
        }
        if ((i10 & 4) != 0) {
            z10 = javaTypeQualifiers.f34337c;
        }
        if ((i10 & 8) != 0) {
            z11 = javaTypeQualifiers.f34338d;
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
            return this.f34335a == javaTypeQualifiers.f34335a && this.f34336b == javaTypeQualifiers.f34336b && this.f34337c == javaTypeQualifiers.f34337c && this.f34338d == javaTypeQualifiers.f34338d;
        }
        return false;
    }

    public final boolean getDefinitelyNotNull() {
        return this.f34337c;
    }

    public final MutabilityQualifier getMutability() {
        return this.f34336b;
    }

    public final NullabilityQualifier getNullability() {
        return this.f34335a;
    }

    public int hashCode() {
        NullabilityQualifier nullabilityQualifier = this.f34335a;
        int hashCode = (nullabilityQualifier == null ? 0 : nullabilityQualifier.hashCode()) * 31;
        MutabilityQualifier mutabilityQualifier = this.f34336b;
        return ((((hashCode + (mutabilityQualifier != null ? mutabilityQualifier.hashCode() : 0)) * 31) + Boolean.hashCode(this.f34337c)) * 31) + Boolean.hashCode(this.f34338d);
    }

    public final boolean isNullabilityQualifierForWarning() {
        return this.f34338d;
    }

    @NotNull
    public String toString() {
        return "JavaTypeQualifiers(nullability=" + this.f34335a + ", mutability=" + this.f34336b + ", definitelyNotNull=" + this.f34337c + ", isNullabilityQualifierForWarning=" + this.f34338d + ')';
    }

    public /* synthetic */ JavaTypeQualifiers(NullabilityQualifier nullabilityQualifier, MutabilityQualifier mutabilityQualifier, boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(nullabilityQualifier, mutabilityQualifier, z10, (i10 & 8) != 0 ? false : z11);
    }
}
