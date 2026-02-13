package vv;

import java.util.concurrent.atomic.AtomicInteger;
import uv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a extends uv.a {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicInteger f52587a;

    /* renamed from: b  reason: collision with root package name */
    private final d f52588b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: vv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0717a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f52589a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f52590b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f52591c;

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ int[] f52592d;

        static {
            int[] iArr = new int[a.b.values().length];
            f52592d = iArr;
            try {
                iArr[a.b.CRONET_SOURCE_STATICALLY_LINKED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f52592d[a.b.CRONET_SOURCE_PLAY_SERVICES.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f52592d[a.b.CRONET_SOURCE_FALLBACK.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f52592d[a.b.CRONET_SOURCE_PLATFORM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f52592d[a.b.CRONET_SOURCE_UNSPECIFIED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[uv.c.values().length];
            f52591c = iArr2;
            try {
                iArr2[uv.c.SUCCEEDED.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f52591c[uv.c.ERROR.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f52591c[uv.c.CANCELLED.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            int[] iArr3 = new int[a.C0706a.EnumC0707a.values().length];
            f52590b = iArr3;
            try {
                iArr3[a.C0706a.EnumC0707a.API.ordinal()] = 1;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f52590b[a.C0706a.EnumC0707a.IMPL.ordinal()] = 2;
            } catch (NoSuchFieldError unused10) {
            }
            int[] iArr4 = new int[uv.b.values().length];
            f52589a = iArr4;
            try {
                iArr4[uv.b.NETWORK.ordinal()] = 1;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f52589a[uv.b.OTHER.ordinal()] = 2;
            } catch (NoSuchFieldError unused12) {
            }
        }
    }

    public a(int i10) {
        this(new d(i10));
    }

    private static int b(a.C0706a.EnumC0707a enumC0707a) {
        int i10 = C0717a.f52590b[enumC0707a.ordinal()];
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
        int i10 = C0717a.f52592d[bVar.ordinal()];
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

    @Override // uv.a
    public void a(a.C0706a c0706a) {
        int b10;
        int c10;
        int a10;
        int d10;
        rv.a a11 = rv.a.a("CronetLoggerImpl#logCronetEngineBuilderInitializedInfo");
        try {
            long j10 = c0706a.f51840a;
            int b11 = b(c0706a.f51841b);
            int i10 = c0706a.f51842c;
            int c11 = c(c0706a.f51843d);
            int e10 = c.d(c0706a.f51844e).e();
            int b12 = c0706a.f51845f.b();
            int c12 = c0706a.f51845f.c();
            int a12 = c0706a.f51845f.a();
            int d11 = c0706a.f51845f.d();
            a.c cVar = c0706a.f51846g;
            if (cVar == null) {
                b10 = -1;
            } else {
                b10 = cVar.b();
            }
            a.c cVar2 = c0706a.f51846g;
            if (cVar2 == null) {
                c10 = -1;
            } else {
                c10 = cVar2.c();
            }
            a.c cVar3 = c0706a.f51846g;
            if (cVar3 == null) {
                a10 = -1;
            } else {
                a10 = cVar3.a();
            }
            a.c cVar4 = c0706a.f51846g;
            if (cVar4 == null) {
                d10 = -1;
            } else {
                d10 = cVar4.d();
            }
            b.a(762, j10, b11, i10, c11, e10, b12, c12, a12, d11, b10, c10, a10, d10, c0706a.f51847h);
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
        this.f52587a = new AtomicInteger();
        this.f52588b = dVar;
    }
}
