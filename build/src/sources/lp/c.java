package lp;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f36277d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f36278a;

    /* renamed from: b  reason: collision with root package name */
    private b f36279b = b.f36283e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36280c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: lp.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0516a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f36281a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f36282d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f36283e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f36281a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0516a.f36281a[bVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "passed";
                }
                throw new rr.p();
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
        public static final b f36282d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f36283e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f36284i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f36285o;

        static {
            b[] a10 = a();
            f36284i = a10;
            f36285o = yr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f36282d, f36283e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f36284i.clone();
        }
    }

    /* renamed from: lp.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0517c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f36286a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f36282d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f36283e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f36286a = iArr;
        }
    }

    public final b a() {
        return this.f36279b;
    }

    public final boolean b() {
        if (this.f36278a && this.f36280c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f36278a;
    }

    public final void d(boolean z10) {
        this.f36278a = z10;
    }

    public final void e(boolean z10) {
        this.f36280c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0517c.f36286a[this.f36279b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f36282d;
            } else {
                throw new rr.p();
            }
        } else {
            bVar = b.f36283e;
        }
        this.f36279b = bVar;
    }
}
