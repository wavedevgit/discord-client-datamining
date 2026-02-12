package g5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    public static final b f24765i = new b("ENABLED", 0, true, true);

    /* renamed from: o  reason: collision with root package name */
    public static final b f24766o = new b("READ_ONLY", 1, true, false);

    /* renamed from: p  reason: collision with root package name */
    public static final b f24767p = new b("WRITE_ONLY", 2, false, true);

    /* renamed from: q  reason: collision with root package name */
    public static final b f24768q = new b("DISABLED", 3, false, false);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ b[] f24769r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f24770s;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24771d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24772e;

    static {
        b[] a10 = a();
        f24769r = a10;
        f24770s = hs.a.a(a10);
    }

    private b(String str, int i10, boolean z10, boolean z11) {
        this.f24771d = z10;
        this.f24772e = z11;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f24765i, f24766o, f24767p, f24768q};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f24769r.clone();
    }

    public final boolean d() {
        return this.f24771d;
    }

    public final boolean e() {
        return this.f24772e;
    }
}
