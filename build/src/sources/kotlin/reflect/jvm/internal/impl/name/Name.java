package kotlin.reflect.jvm.internal.impl.name;

import com.facebook.react.devsupport.StackTraceHelper;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Name implements Comparable<Name> {

    /* renamed from: d  reason: collision with root package name */
    private final String f34291d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f34292e;

    private Name(String str, boolean z10) {
        if (str == null) {
            a(0);
        }
        this.f34291d = str;
        this.f34292e = z10;
    }

    private static /* synthetic */ void a(int i10) {
        String str = (i10 == 1 || i10 == 2 || i10 == 3 || i10 == 4) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
        Object[] objArr = new Object[(i10 == 1 || i10 == 2 || i10 == 3 || i10 == 4) ? 2 : 3];
        if (i10 == 1 || i10 == 2 || i10 == 3 || i10 == 4) {
            objArr[0] = "kotlin/reflect/jvm/internal/impl/name/Name";
        } else {
            objArr[0] = StackTraceHelper.NAME_KEY;
        }
        if (i10 == 1) {
            objArr[1] = "asString";
        } else if (i10 == 2) {
            objArr[1] = "getIdentifier";
        } else if (i10 == 3 || i10 == 4) {
            objArr[1] = "asStringStripSpecialMarkers";
        } else {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/name/Name";
        }
        switch (i10) {
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            case 5:
                objArr[2] = "identifier";
                break;
            case 6:
                objArr[2] = "isValidIdentifier";
                break;
            case 7:
                objArr[2] = "identifierIfValid";
                break;
            case 8:
                objArr[2] = "special";
                break;
            case 9:
                objArr[2] = "guessByFirstCharacter";
                break;
            default:
                objArr[2] = "<init>";
                break;
        }
        String format = String.format(str, objArr);
        if (i10 != 1 && i10 != 2 && i10 != 3 && i10 != 4) {
            throw new IllegalArgumentException(format);
        }
        throw new IllegalStateException(format);
    }

    @NotNull
    public static Name guessByFirstCharacter(@NotNull String str) {
        if (str == null) {
            a(9);
        }
        if (str.startsWith("<")) {
            return special(str);
        }
        return identifier(str);
    }

    @NotNull
    public static Name identifier(@NotNull String str) {
        if (str == null) {
            a(5);
        }
        return new Name(str, false);
    }

    public static boolean isValidIdentifier(@NotNull String str) {
        if (str == null) {
            a(6);
        }
        if (str.isEmpty() || str.startsWith("<")) {
            return false;
        }
        for (int i10 = 0; i10 < str.length(); i10++) {
            char charAt = str.charAt(i10);
            if (charAt == '.' || charAt == '/' || charAt == '\\') {
                return false;
            }
        }
        return true;
    }

    @NotNull
    public static Name special(@NotNull String str) {
        if (str == null) {
            a(8);
        }
        if (str.startsWith("<")) {
            return new Name(str, true);
        }
        throw new IllegalArgumentException("special name must start with '<': " + str);
    }

    @NotNull
    public String asString() {
        String str = this.f34291d;
        if (str == null) {
            a(1);
        }
        return str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof Name)) {
            return false;
        }
        Name name = (Name) obj;
        if (this.f34292e == name.f34292e && this.f34291d.equals(name.f34291d)) {
            return true;
        }
        return false;
    }

    @NotNull
    public String getIdentifier() {
        if (!this.f34292e) {
            String asString = asString();
            if (asString == null) {
                a(2);
            }
            return asString;
        }
        throw new IllegalStateException("not identifier: " + this);
    }

    public int hashCode() {
        return (this.f34291d.hashCode() * 31) + (this.f34292e ? 1 : 0);
    }

    public boolean isSpecial() {
        return this.f34292e;
    }

    public String toString() {
        return this.f34291d;
    }

    @Override // java.lang.Comparable
    public int compareTo(Name name) {
        return this.f34291d.compareTo(name.f34291d);
    }
}
