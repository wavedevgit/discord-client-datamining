package g5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    public static final b f23686i = new b("ENABLED", 0, true, true);

    /* renamed from: o  reason: collision with root package name */
    public static final b f23687o = new b("READ_ONLY", 1, true, false);

    /* renamed from: p  reason: collision with root package name */
    public static final b f23688p = new b("WRITE_ONLY", 2, false, true);

    /* renamed from: q  reason: collision with root package name */
    public static final b f23689q = new b("DISABLED", 3, false, false);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ b[] f23690r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f23691s;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f23692d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23693e;

    static {
        b[] a10 = a();
        f23690r = a10;
        f23691s = vr.a.a(a10);
    }

    private b(String str, int i10, boolean z10, boolean z11) {
        this.f23692d = z10;
        this.f23693e = z11;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f23686i, f23687o, f23688p, f23689q};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f23690r.clone();
    }

    public final boolean d() {
        return this.f23692d;
    }

    public final boolean e() {
        return this.f23693e;
    }
}
