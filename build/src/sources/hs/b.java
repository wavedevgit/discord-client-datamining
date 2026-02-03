package hs;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f28132e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f28133i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f28134o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f28135p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f28136q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f28137r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f28138s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f28139t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f28140u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f28141d;

    static {
        b[] a10 = a();
        f28139t = a10;
        f28140u = sr.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f28141d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f28132e, f28133i, f28134o, f28135p, f28136q, f28137r, f28138s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f28139t.clone();
    }

    public final TimeUnit d() {
        return this.f28141d;
    }
}
