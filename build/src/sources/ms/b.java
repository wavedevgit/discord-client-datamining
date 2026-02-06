package ms;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f38281e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f38282i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f38283o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f38284p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f38285q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f38286r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f38287s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f38288t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f38289u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f38290d;

    static {
        b[] a10 = a();
        f38288t = a10;
        f38289u = xr.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f38290d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f38281e, f38282i, f38283o, f38284p, f38285q, f38286r, f38287s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f38288t.clone();
    }

    public final TimeUnit d() {
        return this.f38290d;
    }
}
