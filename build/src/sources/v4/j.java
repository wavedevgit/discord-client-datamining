package v4;

import a5.a;
import a5.b;
import a5.c;
import a5.d;
import a5.e;
import a5.i;
import a5.j;
import a5.k;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import g5.h;
import g5.l;
import g5.p;
import hs.g0;
import hs.j1;
import hs.m0;
import hs.z;
import java.io.File;
import java.nio.ByteBuffer;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import k5.q;
import k5.t;
import k5.v;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.CoroutineScope;
import okhttp3.HttpUrl;
import v4.c;
import x4.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j implements h {

    /* renamed from: o  reason: collision with root package name */
    public static final a f50764o = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Context f50765a;

    /* renamed from: b  reason: collision with root package name */
    private final g5.c f50766b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f50767c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f50768d;

    /* renamed from: e  reason: collision with root package name */
    private final Lazy f50769e;

    /* renamed from: f  reason: collision with root package name */
    private final c.InterfaceC0680c f50770f;

    /* renamed from: g  reason: collision with root package name */
    private final v4.b f50771g;

    /* renamed from: h  reason: collision with root package name */
    private final q f50772h;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f50773i = kotlinx.coroutines.i.a(j1.b(null, 1, null).Z0(m0.c().f2()).Z0(new e(z.f27960f, this)));

    /* renamed from: j  reason: collision with root package name */
    private final v f50774j;

    /* renamed from: k  reason: collision with root package name */
    private final p f50775k;

    /* renamed from: l  reason: collision with root package name */
    private final v4.b f50776l;

    /* renamed from: m  reason: collision with root package name */
    private final List f50777m;

    /* renamed from: n  reason: collision with root package name */
    private final AtomicBoolean f50778n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50779d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ g5.h f50781i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(g5.h hVar, Continuation continuation) {
            super(2, continuation);
            this.f50781i = hVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f50781i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f50779d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                j jVar = j.this;
                g5.h hVar = this.f50781i;
                this.f50779d = 1;
                obj = jVar.e(hVar, 0, this);
                if (obj == f10) {
                    return f10;
                }
            }
            j jVar2 = j.this;
            if (((g5.i) obj) instanceof g5.f) {
                jVar2.h();
            }
            return obj;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f50782d;

        /* renamed from: e  reason: collision with root package name */
        Object f50783e;

        /* renamed from: i  reason: collision with root package name */
        Object f50784i;

        /* renamed from: o  reason: collision with root package name */
        Object f50785o;

        /* renamed from: p  reason: collision with root package name */
        Object f50786p;

        /* renamed from: q  reason: collision with root package name */
        /* synthetic */ Object f50787q;

        /* renamed from: s  reason: collision with root package name */
        int f50789s;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50787q = obj;
            this.f50789s |= Integer.MIN_VALUE;
            return j.this.e(null, 0, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50790d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ g5.h f50791e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ j f50792i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ h5.i f50793o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ v4.c f50794p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Bitmap f50795q;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(g5.h hVar, j jVar, h5.i iVar, v4.c cVar, Bitmap bitmap, Continuation continuation) {
            super(2, continuation);
            this.f50791e = hVar;
            this.f50792i = jVar;
            this.f50793o = iVar;
            this.f50794p = cVar;
            this.f50795q = bitmap;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(this.f50791e, this.f50792i, this.f50793o, this.f50794p, this.f50795q, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            boolean z10;
            Object f10 = pr.b.f();
            int i10 = this.f50790d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            g5.h hVar = this.f50791e;
            List list = this.f50792i.f50777m;
            g5.h hVar2 = this.f50791e;
            h5.i iVar = this.f50793o;
            v4.c cVar = this.f50794p;
            if (this.f50795q != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b5.c cVar2 = new b5.c(hVar, list, 0, hVar2, iVar, cVar, z10);
            g5.h hVar3 = this.f50791e;
            this.f50790d = 1;
            Object g10 = cVar2.g(hVar3, this);
            if (g10 == f10) {
                return f10;
            }
            return g10;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends kotlin.coroutines.a implements z {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ j f50796e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(z.b bVar, j jVar) {
            super(bVar);
            this.f50796e = jVar;
        }

        @Override // hs.z
        public void V0(CoroutineContext coroutineContext, Throwable th2) {
            this.f50796e.h();
        }
    }

    public j(Context context, g5.c cVar, Lazy lazy, Lazy lazy2, Lazy lazy3, c.InterfaceC0680c interfaceC0680c, v4.b bVar, q qVar, t tVar) {
        this.f50765a = context;
        this.f50766b = cVar;
        this.f50767c = lazy;
        this.f50768d = lazy2;
        this.f50769e = lazy3;
        this.f50770f = interfaceC0680c;
        this.f50771g = bVar;
        this.f50772h = qVar;
        v vVar = new v(this);
        this.f50774j = vVar;
        p pVar = new p(this, vVar, null);
        this.f50775k = pVar;
        this.f50776l = bVar.h().c(new d5.c(), HttpUrl.class).c(new d5.g(), String.class).c(new d5.b(), Uri.class).c(new d5.f(), Uri.class).c(new d5.e(), Integer.class).c(new d5.a(), byte[].class).b(new c5.c(), Uri.class).b(new c5.a(qVar.a()), File.class).a(new j.b(lazy3, lazy2, qVar.e()), Uri.class).a(new i.a(), File.class).a(new a.C0003a(), Uri.class).a(new d.a(), Uri.class).a(new k.b(), Uri.class).a(new e.a(), Drawable.class).a(new b.a(), Bitmap.class).a(new c.a(), ByteBuffer.class).d(new f.c(qVar.c(), qVar.b())).e();
        this.f50777m = CollectionsKt.M0(getComponents().c(), new b5.a(this, vVar, pVar, null));
        this.f50778n = new AtomicBoolean(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Can't wrap try/catch for region: R(19:1|(2:3|(16:5|6|(1:(4:(1:(7:11|12|13|14|(1:16)(2:20|(1:22)(2:23|24))|17|18)(2:37|38))(13:39|40|41|42|43|44|45|46|47|48|49|(5:52|14|(0)(0)|17|18)|51)|26|27|(3:29|30|31)(2:32|33))(3:62|63|64))(4:95|96|97|(2:99|(3:101|(1:103)|51)(13:104|66|67|(3:69|(1:71)(1:87)|(9:73|(1:75)(1:86)|76|(1:78)|79|(1:81)|82|(9:84|43|44|45|46|47|48|49|(0))|51))|88|(0)(0)|76|(0)|79|(0)|82|(0)|51))(2:105|106))|65|66|67|(0)|88|(0)(0)|76|(0)|79|(0)|82|(0)|51))|109|6|(0)(0)|65|66|67|(0)|88|(0)(0)|76|(0)|79|(0)|82|(0)|51|(1:(0))) */
    /* JADX WARN: Code restructure failed: missing block: B:50:0x0106, code lost:
        r0 = th;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x0107, code lost:
        r6 = r2;
        r4 = r5;
        r5 = r8;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x002c  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x0099  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x00fb A[Catch: all -> 0x0106, TryCatch #4 {all -> 0x0106, blocks: (B:45:0x00f5, B:47:0x00fb, B:49:0x0101, B:54:0x010e, B:57:0x0116, B:59:0x0128, B:61:0x012e, B:62:0x0131, B:64:0x013a, B:65:0x013d, B:58:0x0124), top: B:110:0x00f5 }] */
    /* JADX WARN: Removed duplicated region for block: B:57:0x0116 A[Catch: all -> 0x0106, TryCatch #4 {all -> 0x0106, blocks: (B:45:0x00f5, B:47:0x00fb, B:49:0x0101, B:54:0x010e, B:57:0x0116, B:59:0x0128, B:61:0x012e, B:62:0x0131, B:64:0x013a, B:65:0x013d, B:58:0x0124), top: B:110:0x00f5 }] */
    /* JADX WARN: Removed duplicated region for block: B:58:0x0124 A[Catch: all -> 0x0106, TryCatch #4 {all -> 0x0106, blocks: (B:45:0x00f5, B:47:0x00fb, B:49:0x0101, B:54:0x010e, B:57:0x0116, B:59:0x0128, B:61:0x012e, B:62:0x0131, B:64:0x013a, B:65:0x013d, B:58:0x0124), top: B:110:0x00f5 }] */
    /* JADX WARN: Removed duplicated region for block: B:61:0x012e A[Catch: all -> 0x0106, TryCatch #4 {all -> 0x0106, blocks: (B:45:0x00f5, B:47:0x00fb, B:49:0x0101, B:54:0x010e, B:57:0x0116, B:59:0x0128, B:61:0x012e, B:62:0x0131, B:64:0x013a, B:65:0x013d, B:58:0x0124), top: B:110:0x00f5 }] */
    /* JADX WARN: Removed duplicated region for block: B:64:0x013a A[Catch: all -> 0x0106, TryCatch #4 {all -> 0x0106, blocks: (B:45:0x00f5, B:47:0x00fb, B:49:0x0101, B:54:0x010e, B:57:0x0116, B:59:0x0128, B:61:0x012e, B:62:0x0131, B:64:0x013a, B:65:0x013d, B:58:0x0124), top: B:110:0x00f5 }] */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0157  */
    /* JADX WARN: Removed duplicated region for block: B:75:0x0183  */
    /* JADX WARN: Removed duplicated region for block: B:78:0x018d A[Catch: all -> 0x004b, TryCatch #6 {all -> 0x004b, blocks: (B:14:0x0046, B:76:0x0187, B:78:0x018d, B:79:0x0198, B:81:0x019c, B:84:0x01aa, B:85:0x01af), top: B:114:0x0046 }] */
    /* JADX WARN: Removed duplicated region for block: B:79:0x0198 A[Catch: all -> 0x004b, TryCatch #6 {all -> 0x004b, blocks: (B:14:0x0046, B:76:0x0187, B:78:0x018d, B:79:0x0198, B:81:0x019c, B:84:0x01aa, B:85:0x01af), top: B:114:0x0046 }] */
    /* JADX WARN: Removed duplicated region for block: B:94:0x01c4 A[Catch: all -> 0x01d5, TRY_LEAVE, TryCatch #3 {all -> 0x01d5, blocks: (B:92:0x01c0, B:94:0x01c4, B:99:0x01d7, B:100:0x01da), top: B:109:0x01c0 }] */
    /* JADX WARN: Removed duplicated region for block: B:99:0x01d7 A[Catch: all -> 0x01d5, TRY_ENTER, TryCatch #3 {all -> 0x01d5, blocks: (B:92:0x01c0, B:94:0x01c4, B:99:0x01d7, B:100:0x01da), top: B:109:0x01c0 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object e(g5.h r20, int r21, kotlin.coroutines.Continuation r22) {
        /*
            Method dump skipped, instructions count: 479
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: v4.j.e(g5.h, int, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private final void j(g5.h hVar, v4.c cVar) {
        cVar.a(hVar);
        h.b A = hVar.A();
        if (A != null) {
            A.a(hVar);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:4:0x0008, code lost:
        if (r5 != null) goto L10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void k(g5.f r4, i5.c r5, v4.c r6) {
        /*
            r3 = this;
            g5.h r0 = r4.b()
            boolean r1 = r5 instanceof j5.d
            if (r1 != 0) goto Lb
            if (r5 == 0) goto L37
            goto L1e
        Lb:
            g5.h r1 = r4.b()
            j5.c$a r1 = r1.P()
            r2 = r5
            j5.d r2 = (j5.d) r2
            j5.c r1 = r1.a(r2, r4)
            boolean r2 = r1 instanceof j5.b
            if (r2 == 0) goto L26
        L1e:
            android.graphics.drawable.Drawable r1 = r4.a()
            r5.c(r1)
            goto L37
        L26:
            g5.h r5 = r4.b()
            r6.r(r5, r1)
            r1.a()
            g5.h r5 = r4.b()
            r6.g(r5, r1)
        L37:
            r6.c(r0, r4)
            g5.h$b r5 = r0.A()
            if (r5 == 0) goto L43
            r5.c(r0, r4)
        L43:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: v4.j.k(g5.f, i5.c, v4.c):void");
    }

    /* JADX WARN: Code restructure failed: missing block: B:4:0x000b, code lost:
        if (r5 != null) goto L10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void l(g5.q r4, i5.c r5, v4.c r6) {
        /*
            r3 = this;
            g5.h r0 = r4.b()
            r4.c()
            boolean r1 = r5 instanceof j5.d
            if (r1 != 0) goto Le
            if (r5 == 0) goto L3a
            goto L21
        Le:
            g5.h r1 = r4.b()
            j5.c$a r1 = r1.P()
            r2 = r5
            j5.d r2 = (j5.d) r2
            j5.c r1 = r1.a(r2, r4)
            boolean r2 = r1 instanceof j5.b
            if (r2 == 0) goto L29
        L21:
            android.graphics.drawable.Drawable r1 = r4.a()
            r5.a(r1)
            goto L3a
        L29:
            g5.h r5 = r4.b()
            r6.r(r5, r1)
            r1.a()
            g5.h r5 = r4.b()
            r6.g(r5, r1)
        L3a:
            r6.b(r0, r4)
            g5.h$b r5 = r0.A()
            if (r5 == 0) goto L46
            r5.b(r0, r4)
        L46:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: v4.j.l(g5.q, i5.c, v4.c):void");
    }

    @Override // v4.h
    public g5.e a(g5.h hVar) {
        g0 b10;
        b10 = hs.i.b(this.f50773i, null, null, new b(hVar, null), 3, null);
        if (hVar.M() instanceof i5.d) {
            return k5.k.l(((i5.d) hVar.M()).getView()).b(b10);
        }
        return new l(b10);
    }

    @Override // v4.h
    public e5.c b() {
        return (e5.c) this.f50767c.getValue();
    }

    public final Context f() {
        return this.f50765a;
    }

    public g5.c g() {
        return this.f50766b;
    }

    @Override // v4.h
    public v4.b getComponents() {
        return this.f50776l;
    }

    public final t h() {
        return null;
    }

    public final q i() {
        return this.f50772h;
    }

    public final void m(int i10) {
        e5.c cVar;
        Lazy lazy = this.f50767c;
        if (lazy != null && (cVar = (e5.c) lazy.getValue()) != null) {
            cVar.a(i10);
        }
    }

    @Override // v4.h
    public void shutdown() {
        if (!this.f50778n.getAndSet(true)) {
            kotlinx.coroutines.i.f(this.f50773i, null, 1, null);
            this.f50774j.e();
            e5.c b10 = b();
            if (b10 != null) {
                b10.clear();
            }
        }
    }
}
