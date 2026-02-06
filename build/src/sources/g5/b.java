package g5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    public static final b f23939i = new b("ENABLED", 0, true, true);

    /* renamed from: o  reason: collision with root package name */
    public static final b f23940o = new b("READ_ONLY", 1, true, false);

    /* renamed from: p  reason: collision with root package name */
    public static final b f23941p = new b("WRITE_ONLY", 2, false, true);

    /* renamed from: q  reason: collision with root package name */
    public static final b f23942q = new b("DISABLED", 3, false, false);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ b[] f23943r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f23944s;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23945d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23946e;

    static {
        b[] a10 = a();
        f23943r = a10;
        f23944s = xr.a.a(a10);
    }

    private b(String str, int i10, boolean z10, boolean z11) {
        this.f23945d = z10;
        this.f23946e = z11;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f23939i, f23940o, f23941p, f23942q};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f23943r.clone();
    }

    public final boolean d() {
        return this.f23945d;
    }

    public final boolean e() {
        return this.f23946e;
    }
}
