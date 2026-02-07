package kp;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35198d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f35199a;

    /* renamed from: b  reason: collision with root package name */
    private b f35200b = b.f35204e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f35201c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: kp.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0467a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f35202a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f35203d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f35204e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f35202a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0467a.f35202a[bVar.ordinal()];
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
        public static final b f35203d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f35204e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f35205i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f35206o;

        static {
            b[] a10 = a();
            f35205i = a10;
            f35206o = xr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f35203d, f35204e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f35205i.clone();
        }
    }

    /* renamed from: kp.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0468c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f35207a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f35203d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f35204e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f35207a = iArr;
        }
    }

    public final b a() {
        return this.f35200b;
    }

    public final boolean b() {
        if (this.f35199a && this.f35201c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f35199a;
    }

    public final void d(boolean z10) {
        this.f35199a = z10;
    }

    public final void e(boolean z10) {
        this.f35201c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0468c.f35207a[this.f35200b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f35203d;
            } else {
                throw new qr.p();
            }
        } else {
            bVar = b.f35204e;
        }
        this.f35200b = bVar;
    }
}
