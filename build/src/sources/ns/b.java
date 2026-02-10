package ns;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f40014e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f40015i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f40016o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f40017p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f40018q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f40019r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f40020s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f40021t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f40022u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f40023d;

    static {
        b[] a10 = a();
        f40021t = a10;
        f40022u = yr.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f40023d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f40014e, f40015i, f40016o, f40017p, f40018q, f40019r, f40020s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f40021t.clone();
    }

    public final TimeUnit d() {
        return this.f40023d;
    }
}
