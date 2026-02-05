package ip;

import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: d  reason: collision with root package name */
    public static final a f30044d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private boolean f30045a;

    /* renamed from: b  reason: collision with root package name */
    private b f30046b = b.f30050e;

    /* renamed from: c  reason: collision with root package name */
    private boolean f30047c = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: ip.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0416a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f30048a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.f30049d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.f30050e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                f30048a = iArr;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final String a(b bVar) {
            Intrinsics.checkNotNullParameter(bVar, "<this>");
            int i10 = C0416a.f30048a[bVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return "passed";
                }
                throw new or.p();
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
        public static final b f30049d = new b("Failed", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final b f30050e = new b("Passed", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ b[] f30051i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f30052o;

        static {
            b[] a10 = a();
            f30051i = a10;
            f30052o = vr.a.a(a10);
        }

        private b(String str, int i10) {
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f30049d, f30050e};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f30051i.clone();
        }
    }

    /* renamed from: ip.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class C0417c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f30053a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f30049d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f30050e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f30053a = iArr;
        }
    }

    public final b a() {
        return this.f30046b;
    }

    public final boolean b() {
        if (this.f30045a && this.f30047c) {
            return true;
        }
        return false;
    }

    public final boolean c() {
        return this.f30045a;
    }

    public final void d(boolean z10) {
        this.f30045a = z10;
    }

    public final void e(boolean z10) {
        this.f30047c = z10;
    }

    public final void f() {
        b bVar;
        int i10 = C0417c.f30053a[this.f30046b.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                bVar = b.f30049d;
            } else {
                throw new or.p();
            }
        } else {
            bVar = b.f30050e;
        }
        this.f30046b = bVar;
    }
}
