package j$.time.format;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class w {
    public static final w ALWAYS;
    public static final w EXCEEDS_PAD;
    public static final w NEVER;
    public static final w NORMAL;
    public static final w NOT_NEGATIVE;

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ w[] f29491a;

    public static w valueOf(String str) {
        return (w) Enum.valueOf(w.class, str);
    }

    public static w[] values() {
        return (w[]) f29491a.clone();
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [j$.time.format.w, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r1v1, types: [j$.time.format.w, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r2v2, types: [j$.time.format.w, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r3v2, types: [j$.time.format.w, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r4v2, types: [j$.time.format.w, java.lang.Enum] */
    static {
        ?? r02 = new Enum("NORMAL", 0);
        NORMAL = r02;
        ?? r12 = new Enum("ALWAYS", 1);
        ALWAYS = r12;
        ?? r22 = new Enum("NEVER", 2);
        NEVER = r22;
        ?? r32 = new Enum("NOT_NEGATIVE", 3);
        NOT_NEGATIVE = r32;
        ?? r42 = new Enum("EXCEEDS_PAD", 4);
        EXCEEDS_PAD = r42;
        f29491a = new w[]{r02, r12, r22, r32, r42};
    }
}
