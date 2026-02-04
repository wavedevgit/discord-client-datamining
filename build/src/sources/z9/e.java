package z9;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: e  reason: collision with root package name */
    public static final a f55611e;

    /* renamed from: i  reason: collision with root package name */
    private static final e[] f55612i;

    /* renamed from: o  reason: collision with root package name */
    public static final e f55613o = new e("UNKNOWN", 0, -1);

    /* renamed from: p  reason: collision with root package name */
    public static final e f55614p = new e("REQUESTED", 1, 0);

    /* renamed from: q  reason: collision with root package name */
    public static final e f55615q = new e("INTERMEDIATE_AVAILABLE", 2, 2);

    /* renamed from: r  reason: collision with root package name */
    public static final e f55616r = new e("SUCCESS", 3, 3);

    /* renamed from: s  reason: collision with root package name */
    public static final e f55617s = new e("ERROR", 4, 5);

    /* renamed from: t  reason: collision with root package name */
    public static final e f55618t = new e("EMPTY_EVENT", 5, 7);

    /* renamed from: u  reason: collision with root package name */
    public static final e f55619u = new e("RELEASED", 6, 8);

    /* renamed from: v  reason: collision with root package name */
    private static final /* synthetic */ e[] f55620v;

    /* renamed from: w  reason: collision with root package name */
    private static final /* synthetic */ EnumEntries f55621w;

    /* renamed from: d  reason: collision with root package name */
    private final int f55622d;

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
        public static final /* synthetic */ int[] f55623a;

        static {
            int[] iArr = new int[e.values().length];
            try {
                iArr[e.f55614p.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e.f55616r.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e.f55615q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e.f55617s.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[e.f55619u.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f55623a = iArr;
        }
    }

    static {
        e[] a10 = a();
        f55620v = a10;
        f55621w = sr.a.a(a10);
        f55611e = new a(null);
        f55612i = values();
    }

    private e(String str, int i10, int i11) {
        this.f55622d = i11;
    }

    private static final /* synthetic */ e[] a() {
        return new e[]{f55613o, f55614p, f55615q, f55616r, f55617s, f55618t, f55619u};
    }

    public static e valueOf(String str) {
        return (e) Enum.valueOf(e.class, str);
    }

    public static e[] values() {
        return (e[]) f55620v.clone();
    }

    @Override // java.lang.Enum
    public String toString() {
        int i10 = b.f55623a[ordinal()];
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
