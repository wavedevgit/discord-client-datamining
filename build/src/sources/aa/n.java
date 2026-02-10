package aa;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n {

    /* renamed from: e  reason: collision with root package name */
    public static final a f519e;

    /* renamed from: i  reason: collision with root package name */
    private static final n[] f520i;

    /* renamed from: o  reason: collision with root package name */
    public static final n f521o = new n("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final n f522p = new n("VISIBLE", 1, 1);

    /* renamed from: q  reason: collision with root package name */
    public static final n f523q = new n("INVISIBLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ n[] f524r;

    /* renamed from: s  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f525s;

    /* renamed from: d  reason: collision with root package name */
    private final int f526d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        n[] a10 = a();
        f524r = a10;
        f525s = hs.a.a(a10);
        f519e = new a(null);
        f520i = values();
    }

    private n(String str, int i10, int i11) {
        this.f526d = i11;
    }

    private static final /* synthetic */ n[] a() {
        return new n[]{f521o, f522p, f523q};
    }

    public static n valueOf(String str) {
        return (n) Enum.valueOf(n.class, str);
    }

    public static n[] values() {
        return (n[]) f524r.clone();
    }
}
