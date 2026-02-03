package fs;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f25567e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f25568i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f25569o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f25570p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f25571q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f25572r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f25573s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f25574t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f25575u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f25576d;

    static {
        b[] a10 = a();
        f25574t = a10;
        f25575u = qr.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f25576d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f25567e, f25568i, f25569o, f25570p, f25571q, f25572r, f25573s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f25574t.clone();
    }

    public final TimeUnit d() {
        return this.f25576d;
    }
}
