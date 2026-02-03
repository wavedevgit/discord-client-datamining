package g5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    public static final b f24987i = new b("ENABLED", 0, true, true);

    /* renamed from: o  reason: collision with root package name */
    public static final b f24988o = new b("READ_ONLY", 1, true, false);

    /* renamed from: p  reason: collision with root package name */
    public static final b f24989p = new b("WRITE_ONLY", 2, false, true);

    /* renamed from: q  reason: collision with root package name */
    public static final b f24990q = new b("DISABLED", 3, false, false);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ b[] f24991r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f24992s;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24993d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24994e;

    static {
        b[] a10 = a();
        f24991r = a10;
        f24992s = sr.a.a(a10);
    }

    private b(String str, int i10, boolean z10, boolean z11) {
        this.f24993d = z10;
        this.f24994e = z11;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f24987i, f24988o, f24989p, f24990q};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f24991r.clone();
    }

    public final boolean d() {
        return this.f24993d;
    }

    public final boolean e() {
        return this.f24994e;
    }
}
