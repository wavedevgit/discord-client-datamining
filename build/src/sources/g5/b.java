package g5;

import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: i  reason: collision with root package name */
    public static final b f25695i = new b("ENABLED", 0, true, true);

    /* renamed from: o  reason: collision with root package name */
    public static final b f25696o = new b("READ_ONLY", 1, true, false);

    /* renamed from: p  reason: collision with root package name */
    public static final b f25697p = new b("WRITE_ONLY", 2, false, true);

    /* renamed from: q  reason: collision with root package name */
    public static final b f25698q = new b("DISABLED", 3, false, false);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ b[] f25699r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f25700s;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25701d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25702e;

    static {
        b[] a10 = a();
        f25699r = a10;
        f25700s = pr.a.a(a10);
    }

    private b(String str, int i10, boolean z10, boolean z11) {
        this.f25701d = z10;
        this.f25702e = z11;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f25695i, f25696o, f25697p, f25698q};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f25699r.clone();
    }

    public final boolean d() {
        return this.f25701d;
    }

    public final boolean e() {
        return this.f25702e;
    }
}
