package mv;

import java.util.concurrent.atomic.AtomicInteger;
import lv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicInteger f37658a;

    /* renamed from: b  reason: collision with root package name */
    private final d f37659b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: mv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class C0543a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f37660a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f37661b;

        /* renamed from: c  reason: collision with root package name */
        static final /* synthetic */ int[] f37662c;

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ int[] f37663d;

        static {
            int[] iArr = new int[a.b.values().length];
            f37663d = iArr;
            try {
                iArr[a.b.CRONET_SOURCE_STATICALLY_LINKED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f37663d[a.b.CRONET_SOURCE_PLAY_SERVICES.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f37663d[a.b.CRONET_SOURCE_FALLBACK.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f37663d[a.b.CRONET_SOURCE_PLATFORM.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f37663d[a.b.CRONET_SOURCE_UNSPECIFIED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[lv.c.values().length];
            f37662c = iArr2;
            try {
                iArr2[lv.c.SUCCEEDED.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f37662c[lv.c.ERROR.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f37662c[lv.c.CANCELLED.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
            int[] iArr3 = new int[a.C0522a.EnumC0523a.values().length];
            f37661b = iArr3;
            try {
                iArr3[a.C0522a.EnumC0523a.API.ordinal()] = 1;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f37661b[a.C0522a.EnumC0523a.IMPL.ordinal()] = 2;
            } catch (NoSuchFieldError unused10) {
            }
            int[] iArr4 = new int[lv.b.values().length];
            f37660a = iArr4;
            try {
                iArr4[lv.b.NETWORK.ordinal()] = 1;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f37660a[lv.b.OTHER.ordinal()] = 2;
            } catch (NoSuchFieldError unused12) {
            }
        }
    }

    public a(int i10) {
        this(new d(i10));
    }

    private static int b(a.C0522a.EnumC0523a enumC0523a) {
        int i10 = C0543a.f37661b[enumC0523a.ordinal()];
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
        int i10 = C0543a.f37663d[bVar.ordinal()];
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

    @Override // lv.a
    public void a(a.C0522a c0522a) {
        int b10;
        int c10;
        int a10;
        int d10;
        iv.a a11 = iv.a.a("CronetLoggerImpl#logCronetEngineBuilderInitializedInfo");
        try {
            long j10 = c0522a.f36666a;
            int b11 = b(c0522a.f36667b);
            int i10 = c0522a.f36668c;
            int c11 = c(c0522a.f36669d);
            int e10 = c.d(c0522a.f36670e).e();
            int b12 = c0522a.f36671f.b();
            int c12 = c0522a.f36671f.c();
            int a12 = c0522a.f36671f.a();
            int d11 = c0522a.f36671f.d();
            a.c cVar = c0522a.f36672g;
            if (cVar == null) {
                b10 = -1;
            } else {
                b10 = cVar.b();
            }
            a.c cVar2 = c0522a.f36672g;
            if (cVar2 == null) {
                c10 = -1;
            } else {
                c10 = cVar2.c();
            }
            a.c cVar3 = c0522a.f36672g;
            if (cVar3 == null) {
                a10 = -1;
            } else {
                a10 = cVar3.a();
            }
            a.c cVar4 = c0522a.f36672g;
            if (cVar4 == null) {
                d10 = -1;
            } else {
                d10 = cVar4.d();
            }
            b.a(762, j10, b11, i10, c11, e10, b12, c12, a12, d11, b10, c10, a10, d10, c0522a.f36673h);
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
        this.f37658a = new AtomicInteger();
        this.f37659b = dVar;
    }
}
