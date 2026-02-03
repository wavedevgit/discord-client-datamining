package j$.time.format;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class x {
    public static final x FULL;
    public static final x FULL_STANDALONE;
    public static final x NARROW;
    public static final x NARROW_STANDALONE;
    public static final x SHORT;
    public static final x SHORT_STANDALONE;

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ x[] f31373a;

    public static x valueOf(String str) {
        return (x) Enum.valueOf(x.class, str);
    }

    public static x[] values() {
        return (x[]) f31373a.clone();
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [j$.time.format.x, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r1v1, types: [j$.time.format.x, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r2v2, types: [j$.time.format.x, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r3v2, types: [j$.time.format.x, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r4v2, types: [j$.time.format.x, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r5v2, types: [j$.time.format.x, java.lang.Enum] */
    static {
        ?? r02 = new Enum("FULL", 0);
        FULL = r02;
        ?? r12 = new Enum("FULL_STANDALONE", 1);
        FULL_STANDALONE = r12;
        ?? r22 = new Enum("SHORT", 2);
        SHORT = r22;
        ?? r32 = new Enum("SHORT_STANDALONE", 3);
        SHORT_STANDALONE = r32;
        ?? r42 = new Enum("NARROW", 4);
        NARROW = r42;
        ?? r52 = new Enum("NARROW_STANDALONE", 5);
        NARROW_STANDALONE = r52;
        f31373a = new x[]{r02, r12, r22, r32, r42, r52};
    }
}
