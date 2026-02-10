package ho;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: d  reason: collision with root package name */
    public static final n f27613d = new n("FRONT", 0);

    /* renamed from: e  reason: collision with root package name */
    public static final n f27614e = new n("BACK", 1);

    /* renamed from: i  reason: collision with root package name */
    public static final n f27615i = new n("EXTERNAL", 2);

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ n[] f27616o;

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f27617p;

    static {
        n[] a10 = a();
        f27616o = a10;
        f27617p = hs.a.a(a10);
    }

    private n(String str, int i10) {
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f27613d, f27614e, f27615i};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f27616o.clone();
    }
}
