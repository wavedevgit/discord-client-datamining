package cp;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f20980d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f20981a;

    /* renamed from: b  reason: collision with root package name */
    private b f20982b = b.f20986e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f20983c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: cp.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0266a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f20984a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f20985d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f20986e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f20984a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0266a.f20984a[bVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "passed";
                }
                throw new ir.p();
            }
            return "failed";
        }

        private a() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d  reason: collision with root package name */
        public static final b f20985d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f20986e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f20987i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f20988o;

        static {
            b[] a10 = a();
            f20987i = a10;
            f20988o = pr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f20985d, f20986e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f20987i.clone();
        }
    }

    /* renamed from: cp.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0267c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f20989a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f20985d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f20986e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f20989a = iArr;
        }
    }

    public final b a() {
        return this.f20982b;
    }

    public final boolean b() {
        if (this.f20981a && this.f20983c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f20981a;
    }

    public final void d(boolean z10) {
        this.f20981a = z10;
    }

    public final void e(boolean z10) {
        this.f20983c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0267c.f20989a[this.f20982b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f20985d;
            } else {
                throw new ir.p();
            }
        } else {
            bVar = b.f20986e;
        }
        this.f20982b = bVar;
    }
}
