package kotlin.reflect.jvm.internal.impl.name;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nFqNameUnsafe.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FqNameUnsafe.kt\norg/jetbrains/kotlin/name/FqNameUnsafe\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,189:1\n1#2:190\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class FqNameUnsafe {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: e  reason: collision with root package name */
    private static final Name f33586e;

    /* renamed from: f  reason: collision with root package name */
    private static final Pattern f33587f;

    /* renamed from: a  reason: collision with root package name */
    private final String f33588a;

    /* renamed from: b  reason: collision with root package name */
    private transient FqName f33589b;

    /* renamed from: c  reason: collision with root package name */
    private transient FqNameUnsafe f33590c;

    /* renamed from: d  reason: collision with root package name */
    private transient Name f33591d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final FqNameUnsafe topLevel(@NotNull Name shortName) {
            Intrinsics.checkNotNullParameter(shortName, "shortName");
            String asString = shortName.asString();
            Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
            return new FqNameUnsafe(asString, FqName.ROOT.toUnsafe(), shortName, null);
        }

        private Companion() {
        }
    }

    static {
        Name special = Name.special("<root>");
        Intrinsics.checkNotNullExpressionValue(special, "special(...)");
        f33586e = special;
        Pattern compile = Pattern.compile("\\.");
        Intrinsics.checkNotNullExpressionValue(compile, "compile(...)");
        f33587f = compile;
    }

    public /* synthetic */ FqNameUnsafe(String str, FqNameUnsafe fqNameUnsafe, Name name, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, fqNameUnsafe, name);
    }

    private final void a() {
        int b10 = b(this.f33588a);
        if (b10 >= 0) {
            String substring = this.f33588a.substring(b10 + 1);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            this.f33591d = Name.guessByFirstCharacter(substring);
            String substring2 = this.f33588a.substring(0, b10);
            Intrinsics.checkNotNullExpressionValue(substring2, "substring(...)");
            this.f33590c = new FqNameUnsafe(substring2);
            return;
        }
        this.f33591d = Name.guessByFirstCharacter(this.f33588a);
        this.f33590c = FqName.ROOT.toUnsafe();
    }

    private final int b(String str) {
        int length = str.length() - 1;
        boolean z10 = false;
        while (length >= 0) {
            char charAt = str.charAt(length);
            if (charAt == '.' && !z10) {
                return length;
            }
            if (charAt == '`') {
                z10 = !z10;
            } else if (charAt == '\\') {
                length--;
            }
            length--;
        }
        return -1;
    }

    private static final List c(FqNameUnsafe fqNameUnsafe) {
        if (fqNameUnsafe.isRoot()) {
            return new ArrayList();
        }
        List c10 = c(fqNameUnsafe.parent());
        c10.add(fqNameUnsafe.shortName());
        return c10;
    }

    @NotNull
    public final String asString() {
        return this.f33588a;
    }

    @NotNull
    public final FqNameUnsafe child(@NotNull Name name) {
        String str;
        Intrinsics.checkNotNullParameter(name, "name");
        if (isRoot()) {
            str = name.asString();
        } else {
            str = this.f33588a + '.' + name.asString();
        }
        Intrinsics.checkNotNull(str);
        return new FqNameUnsafe(str, this, name);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof FqNameUnsafe) && Intrinsics.areEqual(this.f33588a, ((FqNameUnsafe) obj).f33588a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f33588a.hashCode();
    }

    public final boolean isRoot() {
        if (this.f33588a.length() == 0) {
            return true;
        }
        return false;
    }

    public final boolean isSafe() {
        if (this.f33589b == null && StringsKt.h0(asString(), '<', 0, false, 6, null) >= 0) {
            return false;
        }
        return true;
    }

    @NotNull
    public final FqNameUnsafe parent() {
        FqNameUnsafe fqNameUnsafe = this.f33590c;
        if (fqNameUnsafe != null) {
            return fqNameUnsafe;
        }
        if (!isRoot()) {
            a();
            FqNameUnsafe fqNameUnsafe2 = this.f33590c;
            Intrinsics.checkNotNull(fqNameUnsafe2);
            return fqNameUnsafe2;
        }
        throw new IllegalStateException("root");
    }

    @NotNull
    public final List<Name> pathSegments() {
        return c(this);
    }

    @NotNull
    public final Name shortName() {
        Name name = this.f33591d;
        if (name != null) {
            return name;
        }
        if (!isRoot()) {
            a();
            Name name2 = this.f33591d;
            Intrinsics.checkNotNull(name2);
            return name2;
        }
        throw new IllegalStateException("root");
    }

    @NotNull
    public final Name shortNameOrSpecial() {
        if (isRoot()) {
            return f33586e;
        }
        return shortName();
    }

    public final boolean startsWith(@NotNull Name segment) {
        Intrinsics.checkNotNullParameter(segment, "segment");
        if (isRoot()) {
            return false;
        }
        int h02 = StringsKt.h0(this.f33588a, '.', 0, false, 6, null);
        if (h02 == -1) {
            h02 = this.f33588a.length();
        }
        int i10 = h02;
        String asString = segment.asString();
        Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
        if (i10 != asString.length() || !StringsKt.E(this.f33588a, 0, asString, 0, i10, false, 16, null)) {
            return false;
        }
        return true;
    }

    @NotNull
    public final FqName toSafe() {
        FqName fqName = this.f33589b;
        if (fqName == null) {
            FqName fqName2 = new FqName(this);
            this.f33589b = fqName2;
            return fqName2;
        }
        return fqName;
    }

    @NotNull
    public String toString() {
        if (isRoot()) {
            String asString = f33586e.asString();
            Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
            return asString;
        }
        return this.f33588a;
    }

    public FqNameUnsafe(@NotNull String fqName, @NotNull FqName safe) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        Intrinsics.checkNotNullParameter(safe, "safe");
        this.f33588a = fqName;
        this.f33589b = safe;
    }

    public FqNameUnsafe(@NotNull String fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        this.f33588a = fqName;
    }

    private FqNameUnsafe(String str, FqNameUnsafe fqNameUnsafe, Name name) {
        this.f33588a = str;
        this.f33590c = fqNameUnsafe;
        this.f33591d = name;
    }
}
