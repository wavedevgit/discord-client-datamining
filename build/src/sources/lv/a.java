package lv;

import java.util.concurrent.atomic.AtomicInteger;
import kv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a extends kv.a {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicInteger f36780a;

    /* renamed from: b  reason: collision with root package name */
    private final d f36781b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: lv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0491a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36782a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f36783b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f36784c;

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ int[] f36785d;

        static {
            int[] iArr = new int[a.b.values().length];
            f36785d = iArr;
            try {
                iArr[a.b.CRONET_SOURCE_STATICALLY_LINKED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36785d[a.b.CRONET_SOURCE_PLAY_SERVICES.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36785d[a.b.CRONET_SOURCE_FALLBACK.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f36785d[a.b.CRONET_SOURCE_PLATFORM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f36785d[a.b.CRONET_SOURCE_UNSPECIFIED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[kv.c.values().length];
            f36784c = iArr2;
            try {
                iArr2[kv.c.SUCCEEDED.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f36784c[kv.c.ERROR.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f36784c[kv.c.CANCELLED.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            int[] iArr3 = new int[a.C0473a.EnumC0474a.values().length];
            f36783b = iArr3;
            try {
                iArr3[a.C0473a.EnumC0474a.API.ordinal()] = 1;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f36783b[a.C0473a.EnumC0474a.IMPL.ordinal()] = 2;
            } catch (NoSuchFieldError unused10) {
            }
            int[] iArr4 = new int[kv.b.values().length];
            f36782a = iArr4;
            try {
                iArr4[kv.b.NETWORK.ordinal()] = 1;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f36782a[kv.b.OTHER.ordinal()] = 2;
            } catch (NoSuchFieldError unused12) {
            }
        }
    }

    public a(int i10) {
        this(new d(i10));
    }

    private static int b(a.C0473a.EnumC0474a enumC0474a) {
        int i10 = C0491a.f36783b[enumC0474a.ordinal()];
        int i11 = 1;
        if (i10 != 1) {
            i11 = 2;
            if (i10 != 2) {
                return 0;
            }
        }
        return i11;
    }

    private static int c(a.b bVar) {
        int i10 = C0491a.f36785d[bVar.ordinal()];
        int i11 = 1;
        if (i10 != 1) {
            i11 = 2;
            if (i10 != 2) {
                i11 = 3;
                if (i10 != 3) {
                    i11 = 4;
                    if (i10 != 4) {
                        return 0;
                    }
                }
            }
        }
        return i11;
    }

    @Override // kv.a
    public void a(a.C0473a c0473a) {
        int b10;
        int c10;
        int a10;
        int d10;
        hv.a a11 = hv.a.a("CronetLoggerImpl#logCronetEngineBuilderInitializedInfo");
        try {
            long j10 = c0473a.f35539a;
            int b11 = b(c0473a.f35540b);
            int i10 = c0473a.f35541c;
            int c11 = c(c0473a.f35542d);
            int e10 = c.d(c0473a.f35543e).e();
            int b12 = c0473a.f35544f.b();
            int c12 = c0473a.f35544f.c();
            int a12 = c0473a.f35544f.a();
            int d11 = c0473a.f35544f.d();
            a.c cVar = c0473a.f35545g;
            if (cVar == null) {
                b10 = -1;
            } else {
                b10 = cVar.b();
            }
            a.c cVar2 = c0473a.f35545g;
            if (cVar2 == null) {
                c10 = -1;
            } else {
                c10 = cVar2.c();
            }
            a.c cVar3 = c0473a.f35545g;
            if (cVar3 == null) {
                a10 = -1;
            } else {
                a10 = cVar3.a();
            }
            a.c cVar4 = c0473a.f35545g;
            if (cVar4 == null) {
                d10 = -1;
            } else {
                d10 = cVar4.d();
            }
            b.a(762, j10, b11, i10, c11, e10, b12, c12, a12, d11, b10, c10, a10, d10, c0473a.f35546h);
            if (a11 != null) {
                a11.close();
            }
        } catch (Throwable th2) {
            if (a11 != null) {
                try {
                    a11.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public a(d dVar) {
        this.f36780a = new AtomicInteger();
        this.f36781b = dVar;
    }
}
