package ks;

import java.util.concurrent.TimeUnit;
import kotlin.enums.EnumEntries;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final b f36125e = new b("NANOSECONDS", 0, TimeUnit.NANOSECONDS);

    /* renamed from: i  reason: collision with root package name */
    public static final b f36126i = new b("MICROSECONDS", 1, TimeUnit.MICROSECONDS);

    /* renamed from: o  reason: collision with root package name */
    public static final b f36127o = new b("MILLISECONDS", 2, TimeUnit.MILLISECONDS);

    /* renamed from: p  reason: collision with root package name */
    public static final b f36128p = new b("SECONDS", 3, TimeUnit.SECONDS);

    /* renamed from: q  reason: collision with root package name */
    public static final b f36129q = new b("MINUTES", 4, TimeUnit.MINUTES);

    /* renamed from: r  reason: collision with root package name */
    public static final b f36130r = new b("HOURS", 5, TimeUnit.HOURS);

    /* renamed from: s  reason: collision with root package name */
    public static final b f36131s = new b("DAYS", 6, TimeUnit.DAYS);

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ b[] f36132t;

    /* renamed from: u  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f36133u;

    /* renamed from: d  reason: collision with root package name */
    private final TimeUnit f36134d;

    static {
        b[] a10 = a();
        f36132t = a10;
        f36133u = vr.a.a(a10);
    }

    private b(String str, int i10, TimeUnit timeUnit) {
        this.f36134d = timeUnit;
    }

    private static final /* synthetic */ b[] a() {
        return new b[]{f36125e, f36126i, f36127o, f36128p, f36129q, f36130r, f36131s};
    }

    public static b valueOf(String str) {
        return (b) Enum.valueOf(b.class, str);
    }

    public static b[] values() {
        return (b[]) f36132t.clone();
    }

    public final TimeUnit d() {
        return this.f36134d;
    }
}
