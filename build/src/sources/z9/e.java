package z9;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55476e;

    /* renamed from: i  reason: collision with root package name */
    private static final e[] f55477i;

    /* renamed from: o  reason: collision with root package name */
    public static final e f55478o = new e("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final e f55479p = new e("REQUESTED", 1, 0);

    /* renamed from: q  reason: collision with root package name */
    public static final e f55480q = new e("INTERMEDIATE_AVAILABLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    public static final e f55481r = new e("SUCCESS", 3, 3);

    /* renamed from: s  reason: collision with root package name */
    public static final e f55482s = new e("ERROR", 4, 5);

    /* renamed from: t  reason: collision with root package name */
    public static final e f55483t = new e("EMPTY_EVENT", 5, 7);

    /* renamed from: u  reason: collision with root package name */
    public static final e f55484u = new e("RELEASED", 6, 8);

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ e[] f55485v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55486w;

    /* renamed from: d  reason: collision with root package name */
    private final int f55487d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f55488a;

        static {
            int[] iArr = new int[e.values().length];
            try {
                iArr[e.f55479p.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e.f55481r.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e.f55480q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e.f55482s.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[e.f55484u.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f55488a = iArr;
        }
    }

    static {
        e[] a10 = a();
        f55485v = a10;
        f55486w = qr.a.a(a10);
        f55476e = new a(null);
        f55477i = values();
    }

    private e(String str, int i10, int i11) {
        this.f55487d = i11;
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f55478o, f55479p, f55480q, f55481r, f55482s, f55483t, f55484u};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f55485v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        int i10 = b.f55488a[ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return "unknown";
                        }
                        return "released";
                    }
                    return "error";
                }
                return "intermediate_available";
            }
            return "success";
        }
        return "requested";
    }
}
