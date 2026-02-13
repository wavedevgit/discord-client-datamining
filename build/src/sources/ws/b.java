package ws;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f54533e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f54534i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f54535o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f54536p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f54537q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f54538r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f54539s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f54540t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f54541u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f54542d;

    static {
        b[] a10 = a();
        f54540t = a10;
        f54541u = hs.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f54542d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f54533e, f54534i, f54535o, f54536p, f54537q, f54538r, f54539s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f54540t.clone();
    }

    public final TimeUnit d() {
        return this.f54542d;
    }
}
