package kp;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35150d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f35151a;

    /* renamed from: b  reason: collision with root package name */
    private b f35152b = b.f35156e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35153c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: kp.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0467a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f35154a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f35155d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f35156e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f35154a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0467a.f35154a[bVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "passed";
                }
                throw new qr.p();
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
        public static final b f35155d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f35156e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f35157i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f35158o;

        static {
            b[] a10 = a();
            f35157i = a10;
            f35158o = xr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f35155d, f35156e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f35157i.clone();
        }
    }

    /* renamed from: kp.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0468c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f35159a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f35155d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f35156e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f35159a = iArr;
        }
    }

    public final b a() {
        return this.f35152b;
    }

    public final boolean b() {
        if (this.f35151a && this.f35153c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f35151a;
    }

    public final void d(boolean z10) {
        this.f35151a = z10;
    }

    public final void e(boolean z10) {
        this.f35153c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0468c.f35159a[this.f35152b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f35155d;
            } else {
                throw new qr.p();
            }
        } else {
            bVar = b.f35156e;
        }
        this.f35152b = bVar;
    }
}
