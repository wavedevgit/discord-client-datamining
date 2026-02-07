package ms;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f38329e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f38330i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f38331o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f38332p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f38333q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f38334r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f38335s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f38336t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f38337u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f38338d;

    static {
        b[] a10 = a();
        f38336t = a10;
        f38337u = xr.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f38338d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f38329e, f38330i, f38331o, f38332p, f38333q, f38334r, f38335s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f38336t.clone();
    }

    public final TimeUnit d() {
        return this.f38338d;
    }
}
