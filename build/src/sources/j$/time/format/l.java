package j$.time.format;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class l implements e {
    public static final l INSENSITIVE;
    public static final l LENIENT;
    public static final l SENSITIVE;
    public static final l STRICT;

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ l[] f31589a;

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        return true;
    }

    public static l valueOf(String str) {
        return (l) Enum.valueOf(l.class, str);
    }

    public static l[] values() {
        return (l[]) f31589a.clone();
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [java.lang.Enum, j$.time.format.l] */
    /* JADX WARN: Type inference failed for: r1v1, types: [java.lang.Enum, j$.time.format.l] */
    /* JADX WARN: Type inference failed for: r2v2, types: [java.lang.Enum, j$.time.format.l] */
    /* JADX WARN: Type inference failed for: r3v2, types: [java.lang.Enum, j$.time.format.l] */
    static {
        ?? r02 = new Enum("SENSITIVE", 0);
        SENSITIVE = r02;
        ?? r12 = new Enum("INSENSITIVE", 1);
        INSENSITIVE = r12;
        ?? r22 = new Enum("STRICT", 2);
        STRICT = r22;
        ?? r32 = new Enum("LENIENT", 3);
        LENIENT = r32;
        f31589a = new l[]{r02, r12, r22, r32};
    }

    @Override // j$.time.format.e
    public final int t(o oVar, CharSequence charSequence, int i10) {
        int ordinal = ordinal();
        if (ordinal == 0) {
            oVar.f31596b = true;
            return i10;
        } else if (ordinal == 1) {
            oVar.f31596b = false;
            return i10;
        } else if (ordinal == 2) {
            oVar.f31597c = true;
            return i10;
        } else if (ordinal != 3) {
            return i10;
        } else {
            oVar.f31597c = false;
            return i10;
        }
    }

    @Override // java.lang.Enum
    public final String toString() {
        int ordinal = ordinal();
        if (ordinal != 0) {
            if (ordinal != 1) {
                if (ordinal != 2) {
                    if (ordinal == 3) {
                        return "ParseStrict(false)";
                    }
                    throw new IllegalStateException("Unreachable");
                }
                return "ParseStrict(true)";
            }
            return "ParseCaseSensitive(false)";
        }
        return "ParseCaseSensitive(true)";
    }
}
