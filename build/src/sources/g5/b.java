package g5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    public static final b f25790i = new b("ENABLED", 0, true, true);

    /* renamed from: o  reason: collision with root package name */
    public static final b f25791o = new b("READ_ONLY", 1, true, false);

    /* renamed from: p  reason: collision with root package name */
    public static final b f25792p = new b("WRITE_ONLY", 2, false, true);

    /* renamed from: q  reason: collision with root package name */
    public static final b f25793q = new b("DISABLED", 3, false, false);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ b[] f25794r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f25795s;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25796d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25797e;

    static {
        b[] a10 = a();
        f25794r = a10;
        f25795s = qr.a.a(a10);
    }

    private b(String str, int i10, boolean z10, boolean z11) {
        this.f25796d = z10;
        this.f25797e = z11;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f25790i, f25791o, f25792p, f25793q};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f25794r.clone();
    }

    public final boolean d() {
        return this.f25796d;
    }

    public final boolean e() {
        return this.f25797e;
    }
}
