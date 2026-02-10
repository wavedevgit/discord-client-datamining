package ws;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f53964e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f53965i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f53966o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f53967p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f53968q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f53969r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f53970s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f53971t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f53972u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f53973d;

    static {
        b[] a10 = a();
        f53971t = a10;
        f53972u = hs.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f53973d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f53964e, f53965i, f53966o, f53967p, f53968q, f53969r, f53970s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f53971t.clone();
    }

    public final TimeUnit d() {
        return this.f53973d;
    }
}
