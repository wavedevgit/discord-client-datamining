package a5;

import a5.h;
import android.net.Uri;
import android.webkit.MimeTypeMap;
import g5.m;
import java.io.IOException;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import lu.x;
import okhttp3.CacheControl;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.BufferedSink;
import okio.BufferedSource;
import x4.r;
import x4.u;
import y4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j implements h {

    /* renamed from: f  reason: collision with root package name */
    public static final a f398f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final CacheControl f399g = new CacheControl.a().d().e().a();

    /* renamed from: h  reason: collision with root package name */
    private static final CacheControl f400h = new CacheControl.a().d().f().a();

    /* renamed from: a  reason: collision with root package name */
    private final String f401a;

    /* renamed from: b  reason: collision with root package name */
    private final m f402b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f403c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f404d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f405e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements h.a {

        /* renamed from: a  reason: collision with root package name */
        private final Lazy f406a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f407b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f408c;

        public b(Lazy lazy, Lazy lazy2, boolean z10) {
            this.f406a = lazy;
            this.f407b = lazy2;
            this.f408c = z10;
        }

        private final boolean c(Uri uri) {
            if (!Intrinsics.areEqual(uri.getScheme(), "http") && !Intrinsics.areEqual(uri.getScheme(), "https")) {
                return false;
            }
            return true;
        }

        @Override // a5.h.a
        /* renamed from: b */
        public h a(Uri uri, m mVar, v4.h hVar) {
            if (!c(uri)) {
                return null;
            }
            return new j(uri.toString(), mVar, this.f406a, this.f407b, this.f408c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f409d;

        /* renamed from: i  reason: collision with root package name */
        int f411i;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f409d = obj;
            this.f411i |= Integer.MIN_VALUE;
            return j.this.c(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f412d;

        /* renamed from: e  reason: collision with root package name */
        Object f413e;

        /* renamed from: i  reason: collision with root package name */
        Object f414i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f415o;

        /* renamed from: q  reason: collision with root package name */
        int f417q;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f415o = obj;
            this.f417q |= Integer.MIN_VALUE;
            return j.this.a(this);
        }
    }

    public j(String str, m mVar, Lazy lazy, Lazy lazy2, boolean z10) {
        this.f401a = str;
        this.f402b = mVar;
        this.f403c = lazy;
        this.f404d = lazy2;
        this.f405e = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x007b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object c(okhttp3.Request r5, kotlin.coroutines.Continuation r6) {
        /*
            r4 = this;
            boolean r0 = r6 instanceof a5.j.c
            if (r0 == 0) goto L13
            r0 = r6
            a5.j$c r0 = (a5.j.c) r0
            int r1 = r0.f411i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f411i = r1
            goto L18
        L13:
            a5.j$c r0 = new a5.j$c
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f409d
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f411i
            r3 = 1
            if (r2 == 0) goto L31
            if (r2 != r3) goto L29
            kotlin.c.b(r6)
            goto L72
        L29:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L31:
            kotlin.c.b(r6)
            boolean r6 = k5.k.r()
            if (r6 == 0) goto L5d
            g5.m r6 = r4.f402b
            g5.b r6 = r6.k()
            boolean r6 = r6.d()
            if (r6 != 0) goto L57
            kotlin.Lazy r6 = r4.f403c
            java.lang.Object r6 = r6.getValue()
            okhttp3.Call$Factory r6 = (okhttp3.Call.Factory) r6
            okhttp3.Call r5 = r6.a(r5)
            okhttp3.Response r5 = r5.execute()
            goto L75
        L57:
            android.os.NetworkOnMainThreadException r5 = new android.os.NetworkOnMainThreadException
            r5.<init>()
            throw r5
        L5d:
            kotlin.Lazy r6 = r4.f403c
            java.lang.Object r6 = r6.getValue()
            okhttp3.Call$Factory r6 = (okhttp3.Call.Factory) r6
            okhttp3.Call r5 = r6.a(r5)
            r0.f411i = r3
            java.lang.Object r6 = k5.b.a(r5, r0)
            if (r6 != r1) goto L72
            return r1
        L72:
            r5 = r6
            okhttp3.Response r5 = (okhttp3.Response) r5
        L75:
            boolean r6 = r5.isSuccessful()
            if (r6 != 0) goto L92
            int r6 = r5.L()
            r0 = 304(0x130, float:4.26E-43)
            if (r6 == r0) goto L92
            okhttp3.ResponseBody r6 = r5.x()
            if (r6 == 0) goto L8c
            k5.k.d(r6)
        L8c:
            f5.f r6 = new f5.f
            r6.<init>(r5)
            throw r6
        L92:
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: a5.j.c(okhttp3.Request, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final String d() {
        String h10 = this.f402b.h();
        if (h10 == null) {
            return this.f401a;
        }
        return h10;
    }

    private final lu.h e() {
        Object value = this.f404d.getValue();
        Intrinsics.checkNotNull(value);
        return ((y4.a) value).getFileSystem();
    }

    private final boolean g(Request request, Response response) {
        if (this.f402b.i().e()) {
            if (!this.f405e || f5.d.f23177c.c(request, response)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private final Request h() {
        Request.Builder f10 = new Request.Builder().l(this.f401a).f(this.f402b.j());
        for (Map.Entry entry : this.f402b.p().a().entrySet()) {
            Object key = entry.getKey();
            Intrinsics.checkNotNull(key, "null cannot be cast to non-null type java.lang.Class<kotlin.Any>");
            f10.j((Class) key, entry.getValue());
        }
        boolean d10 = this.f402b.i().d();
        boolean d11 = this.f402b.k().d();
        if (!d11 && d10) {
            f10.c(CacheControl.f43934p);
        } else if (d11 && !d10) {
            if (this.f402b.i().e()) {
                f10.c(CacheControl.f43933o);
            } else {
                f10.c(f399g);
            }
        } else if (!d11 && !d10) {
            f10.c(f400h);
        }
        return f10.b();
    }

    private final a.c i() {
        y4.a aVar;
        if (!this.f402b.i().d() || (aVar = (y4.a) this.f404d.getValue()) == null) {
            return null;
        }
        return aVar.b(d());
    }

    private final f5.c j(a.c cVar) {
        try {
            BufferedSource d10 = x.d(e().q(cVar.getMetadata()));
            f5.c cVar2 = new f5.c(d10);
            if (d10 != null) {
                try {
                    d10.close();
                } catch (Throwable th2) {
                    th = th2;
                }
            }
            th = null;
            if (th == null) {
                return cVar2;
            }
            throw th;
        } catch (IOException unused) {
            return null;
        }
    }

    private final x4.h k(Response response) {
        if (response.J0() != null) {
            return x4.h.f53114o;
        }
        return x4.h.f53113i;
    }

    private final r l(ResponseBody responseBody) {
        return u.f(responseBody.source(), this.f402b.g());
    }

    private final r m(a.c cVar) {
        return u.e(cVar.getData(), e(), d(), cVar);
    }

    private final a.c n(a.c cVar, Request request, Response response, f5.c cVar2) {
        a.b bVar;
        Throwable th2;
        Throwable th3 = null;
        if (!g(request, response)) {
            if (cVar != null) {
                k5.k.d(cVar);
            }
            return null;
        }
        if (cVar != null) {
            bVar = cVar.C1();
        } else {
            y4.a aVar = (y4.a) this.f404d.getValue();
            if (aVar != null) {
                bVar = aVar.a(d());
            } else {
                bVar = null;
            }
        }
        try {
            if (bVar == null) {
                return null;
            }
            try {
                if (response.L() == 304 && cVar2 != null) {
                    Response c10 = response.M0().k(f5.d.f23177c.a(cVar2.h(), response.E0())).c();
                    BufferedSink c11 = x.c(e().p(bVar.getMetadata(), false));
                    try {
                        new f5.c(c10).k(c11);
                        Unit unit = Unit.f32464a;
                        if (c11 != null) {
                            try {
                                c11.close();
                            } catch (Throwable th4) {
                                th3 = th4;
                            }
                        }
                    } catch (Throwable th5) {
                        th3 = th5;
                        if (c11 != null) {
                            try {
                                c11.close();
                            } catch (Throwable th6) {
                                lr.e.a(th3, th6);
                            }
                        }
                    }
                    if (th3 != null) {
                        throw th3;
                    }
                } else {
                    BufferedSink c12 = x.c(e().p(bVar.getMetadata(), false));
                    try {
                        new f5.c(response).k(c12);
                        Unit unit2 = Unit.f32464a;
                        if (c12 != null) {
                            try {
                                c12.close();
                            } catch (Throwable th7) {
                                th2 = th7;
                            }
                        }
                        th2 = null;
                    } catch (Throwable th8) {
                        if (c12 != null) {
                            try {
                                c12.close();
                            } catch (Throwable th9) {
                                lr.e.a(th8, th9);
                            }
                        }
                        th2 = th8;
                    }
                    if (th2 == null) {
                        BufferedSink c13 = x.c(e().p(bVar.getData(), false));
                        try {
                            ResponseBody x10 = response.x();
                            Intrinsics.checkNotNull(x10);
                            x10.source().e2(c13);
                            if (c13 != null) {
                                try {
                                    c13.close();
                                } catch (Throwable th10) {
                                    th3 = th10;
                                }
                            }
                        } catch (Throwable th11) {
                            th3 = th11;
                            if (c13 != null) {
                                try {
                                    c13.close();
                                } catch (Throwable th12) {
                                    lr.e.a(th3, th12);
                                }
                            }
                        }
                        if (th3 != null) {
                            throw th3;
                        }
                    } else {
                        throw th2;
                    }
                }
                a.c b10 = bVar.b();
                k5.k.d(response);
                return b10;
            } catch (Exception e10) {
                k5.k.a(bVar);
                throw e10;
            }
        } catch (Throwable th13) {
            k5.k.d(response);
            throw th13;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x005c  */
    /* JADX WARN: Removed duplicated region for block: B:56:0x012d A[Catch: Exception -> 0x0140, TryCatch #0 {Exception -> 0x0140, blocks: (B:72:0x018d, B:54:0x011f, B:56:0x012d, B:58:0x013b, B:61:0x0144, B:63:0x014e, B:65:0x015a, B:67:0x0172), top: B:81:0x011f }] */
    /* JADX WARN: Removed duplicated region for block: B:63:0x014e A[Catch: Exception -> 0x0140, TryCatch #0 {Exception -> 0x0140, blocks: (B:72:0x018d, B:54:0x011f, B:56:0x012d, B:58:0x013b, B:61:0x0144, B:63:0x014e, B:65:0x015a, B:67:0x0172), top: B:81:0x011f }] */
    /* JADX WARN: Removed duplicated region for block: B:79:0x01b1  */
    @Override // a5.h
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(kotlin.coroutines.Continuation r12) {
        /*
            Method dump skipped, instructions count: 437
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: a5.j.a(kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final String f(String str, MediaType mediaType) {
        String str2;
        String j10;
        if (mediaType != null) {
            str2 = mediaType.toString();
        } else {
            str2 = null;
        }
        if ((str2 == null || StringsKt.P(str2, "text/plain", false, 2, null)) && (j10 = k5.k.j(MimeTypeMap.getSingleton(), str)) != null) {
            return j10;
        }
        if (str2 == null) {
            return null;
        }
        return StringsKt.d1(str2, ';', null, 2, null);
    }
}
