package kotlin.reflect.jvm.internal.impl.name;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nClassId.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ClassId.kt\norg/jetbrains/kotlin/name/ClassId\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 addToStdlib.kt\norg/jetbrains/kotlin/utils/addToStdlib/AddToStdlibKt\n*L\n1#1,141:1\n1#2:142\n231#3:143\n231#3:144\n*S KotlinDebug\n*F\n+ 1 ClassId.kt\norg/jetbrains/kotlin/name/ClassId\n*L\n37#1:143\n47#1:144\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ClassId {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final FqName f35114a;

    /* renamed from: b  reason: collision with root package name */
    private final FqName f35115b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f35116c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ ClassId fromString$default(Companion companion, String str, boolean z10, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                z10 = false;
            }
            return companion.fromString(str, z10);
        }

        @NotNull
        public final ClassId fromString(@NotNull String string, boolean z10) {
            String J;
            String str;
            Intrinsics.checkNotNullParameter(string, "string");
            int h02 = StringsKt.h0(string, '`', 0, false, 6, null);
            if (h02 == -1) {
                h02 = string.length();
            }
            int o02 = StringsKt.o0(string, "/", h02, false, 4, null);
            if (o02 == -1) {
                J = StringsKt.J(string, "`", "", false, 4, null);
                str = "";
            } else {
                String substring = string.substring(0, o02);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                String I = StringsKt.I(substring, '/', '.', false, 4, null);
                String substring2 = string.substring(o02 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
                J = StringsKt.J(substring2, "`", "", false, 4, null);
                str = I;
            }
            return new ClassId(new FqName(str), new FqName(J), z10);
        }

        @NotNull
        public final ClassId topLevel(@NotNull FqName topLevelFqName) {
            Intrinsics.checkNotNullParameter(topLevelFqName, "topLevelFqName");
            return new ClassId(topLevelFqName.parent(), topLevelFqName.shortName());
        }

        private Companion() {
        }
    }

    public ClassId(@NotNull FqName packageFqName, @NotNull FqName relativeClassName, boolean z10) {
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(relativeClassName, "relativeClassName");
        this.f35114a = packageFqName;
        this.f35115b = relativeClassName;
        this.f35116c = z10;
        relativeClassName.isRoot();
    }

    private static final String a(FqName fqName) {
        String asString = fqName.asString();
        if (StringsKt.U(asString, '/', false, 2, null)) {
            return '`' + asString + '`';
        }
        return asString;
    }

    @NotNull
    public static final ClassId topLevel(@NotNull FqName fqName) {
        return Companion.topLevel(fqName);
    }

    @NotNull
    public final FqName asSingleFqName() {
        if (this.f35114a.isRoot()) {
            return this.f35115b;
        }
        return new FqName(this.f35114a.asString() + '.' + this.f35115b.asString());
    }

    @NotNull
    public final String asString() {
        if (this.f35114a.isRoot()) {
            return a(this.f35115b);
        }
        return StringsKt.I(this.f35114a.asString(), '.', '/', false, 4, null) + "/" + a(this.f35115b);
    }

    @NotNull
    public final ClassId createNestedClassId(@NotNull Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new ClassId(this.f35114a, this.f35115b.child(name), this.f35116c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassId) {
            ClassId classId = (ClassId) obj;
            return Intrinsics.areEqual(this.f35114a, classId.f35114a) && Intrinsics.areEqual(this.f35115b, classId.f35115b) && this.f35116c == classId.f35116c;
        }
        return false;
    }

    public final ClassId getOuterClassId() {
        FqName parent = this.f35115b.parent();
        if (!parent.isRoot()) {
            return new ClassId(this.f35114a, parent, this.f35116c);
        }
        return null;
    }

    @NotNull
    public final FqName getPackageFqName() {
        return this.f35114a;
    }

    @NotNull
    public final FqName getRelativeClassName() {
        return this.f35115b;
    }

    @NotNull
    public final Name getShortClassName() {
        return this.f35115b.shortName();
    }

    public int hashCode() {
        return (((this.f35114a.hashCode() * 31) + this.f35115b.hashCode()) * 31) + Boolean.hashCode(this.f35116c);
    }

    public final boolean isLocal() {
        return this.f35116c;
    }

    public final boolean isNestedClass() {
        return !this.f35115b.parent().isRoot();
    }

    @NotNull
    public String toString() {
        if (this.f35114a.isRoot()) {
            return '/' + asString();
        }
        return asString();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ClassId(@NotNull FqName packageFqName, @NotNull Name topLevelName) {
        this(packageFqName, FqName.Companion.topLevel(topLevelName), false);
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(topLevelName, "topLevelName");
    }
}
