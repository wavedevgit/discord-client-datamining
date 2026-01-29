package kotlin.reflect.jvm.internal.impl.name;

import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nFqName.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FqName.kt\norg/jetbrains/kotlin/name/FqName\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,128:1\n1#2:129\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FqName {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final FqName ROOT = new FqName("");

    /* renamed from: a  reason: collision with root package name */
    private final FqNameUnsafe f35101a;

    /* renamed from: b  reason: collision with root package name */
    private transient FqName f35102b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final FqName topLevel(@NotNull Name shortName) {
            Intrinsics.checkNotNullParameter(shortName, "shortName");
            return new FqName(FqNameUnsafe.Companion.topLevel(shortName));
        }

        private Companion() {
        }
    }

    public FqName(@NotNull String fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        this.f35101a = new FqNameUnsafe(fqName, this);
    }

    @NotNull
    public final String asString() {
        return this.f35101a.asString();
    }

    @NotNull
    public final FqName child(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new FqName(this.f35101a.child(name), this);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof FqName) && Intrinsics.areEqual(this.f35101a, ((FqName) obj).f35101a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f35101a.hashCode();
    }

    public final boolean isRoot() {
        return this.f35101a.isRoot();
    }

    @NotNull
    public final FqName parent() {
        FqName fqName = this.f35102b;
        if (fqName != null) {
            return fqName;
        }
        if (!isRoot()) {
            FqName fqName2 = new FqName(this.f35101a.parent());
            this.f35102b = fqName2;
            return fqName2;
        }
        throw new IllegalStateException("root");
    }

    @NotNull
    public final List<Name> pathSegments() {
        return this.f35101a.pathSegments();
    }

    @NotNull
    public final Name shortName() {
        return this.f35101a.shortName();
    }

    @NotNull
    public final Name shortNameOrSpecial() {
        return this.f35101a.shortNameOrSpecial();
    }

    public final boolean startsWith(@NotNull Name segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        return this.f35101a.startsWith(segment);
    }

    @NotNull
    public String toString() {
        return this.f35101a.toString();
    }

    @NotNull
    public final FqNameUnsafe toUnsafe() {
        return this.f35101a;
    }

    public FqName(@NotNull FqNameUnsafe fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        this.f35101a = fqName;
    }

    private FqName(FqNameUnsafe fqNameUnsafe, FqName fqName) {
        this.f35101a = fqNameUnsafe;
        this.f35102b = fqName;
    }
}
