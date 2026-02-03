package dp;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f22039d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f22040a;

    /* renamed from: b  reason: collision with root package name */
    private b f22041b = b.f22045e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22042c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: dp.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0289a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f22043a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f22044d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f22045e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f22043a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0289a.f22043a[bVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "passed";
                }
                throw new jr.p();
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
        public static final b f22044d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f22045e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f22046i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f22047o;

        static {
            b[] a10 = a();
            f22046i = a10;
            f22047o = qr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f22044d, f22045e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f22046i.clone();
        }
    }

    /* renamed from: dp.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0290c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f22048a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f22044d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f22045e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f22048a = iArr;
        }
    }

    public final b a() {
        return this.f22041b;
    }

    public final boolean b() {
        if (this.f22040a && this.f22042c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f22040a;
    }

    public final void d(boolean z10) {
        this.f22040a = z10;
    }

    public final void e(boolean z10) {
        this.f22042c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0290c.f22048a[this.f22041b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f22044d;
            } else {
                throw new jr.p();
            }
        } else {
            bVar = b.f22045e;
        }
        this.f22041b = bVar;
    }
}
