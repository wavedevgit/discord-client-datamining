package zo;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 {

    /* renamed from: d  reason: collision with root package name */
    public static final b0 f55861d = new b0("Camera", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final b0 f55862e = new b0("RecordAudio", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final b0 f55863i = new b0("RoughLocation", 2);

    /* renamed from: o  reason: collision with root package name */
    public static final b0 f55864o = new b0("PreciseLocation", 3);

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ b0[] f55865p;

    /* renamed from: q  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55866q;

    static {
        b0[] a10 = a();
        f55865p = a10;
        f55866q = pr.a.a(a10);
    }

    private b0(String str, int i10) {
    }

    private static final /* synthetic */ b0[] a() {
        return new b0[]{f55861d, f55862e, f55863i, f55864o};
    }

    public static b0 valueOf(String str) {
        return (b0) Enum.valueOf(b0.class, str);
    }

    public static b0[] values() {
        return (b0[]) f55865p.clone();
    }
}
