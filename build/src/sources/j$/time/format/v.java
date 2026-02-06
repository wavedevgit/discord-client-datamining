package j$.time.format;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class v {
    public static final v LENIENT;
    public static final v SMART;
    public static final v STRICT;

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ v[] f29490a;

    public static v valueOf(String str) {
        return (v) Enum.valueOf(v.class, str);
    }

    public static v[] values() {
        return (v[]) f29490a.clone();
    }

    /* JADX WARN: Type inference failed for: r0v0, types: [j$.time.format.v, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r1v1, types: [j$.time.format.v, java.lang.Enum] */
    /* JADX WARN: Type inference failed for: r2v2, types: [j$.time.format.v, java.lang.Enum] */
    static {
        ?? r02 = new Enum("STRICT", 0);
        STRICT = r02;
        ?? r12 = new Enum("SMART", 1);
        SMART = r12;
        ?? r22 = new Enum("LENIENT", 2);
        LENIENT = r22;
        f29490a = new v[]{r02, r12, r22};
    }
}
