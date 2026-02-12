package b5;

import a5.l;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import b5.b;
import e5.c;
import g5.m;
import g5.p;
import g5.q;
import java.util.List;
import k5.n;
import k5.t;
import k5.v;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements b5.b {

    /* renamed from: e  reason: collision with root package name */
    public static final C0093a f6430e = new C0093a(null);

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f6431a;

    /* renamed from: b  reason: collision with root package name */
    private final v f6432b;

    /* renamed from: c  reason: collision with root package name */
    private final p f6433c;

    /* renamed from: d  reason: collision with root package name */
    private final e5.d f6434d;

    /* renamed from: b5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0093a {
        public /* synthetic */ C0093a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0093a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable f6435a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f6436b;

        /* renamed from: c  reason: collision with root package name */
        private final x4.h f6437c;

        /* renamed from: d  reason: collision with root package name */
        private final String f6438d;

        public b(Drawable drawable, boolean z10, x4.h hVar, String str) {
            this.f6435a = drawable;
            this.f6436b = z10;
            this.f6437c = hVar;
            this.f6438d = str;
        }

        public static /* synthetic */ b b(b bVar, Drawable drawable, boolean z10, x4.h hVar, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                drawable = bVar.f6435a;
            }
            if ((i10 & 2) != 0) {
                z10 = bVar.f6436b;
            }
            if ((i10 & 4) != 0) {
                hVar = bVar.f6437c;
            }
            if ((i10 & 8) != 0) {
                str = bVar.f6438d;
            }
            return bVar.a(drawable, z10, hVar, str);
        }

        public final b a(Drawable drawable, boolean z10, x4.h hVar, String str) {
            return new b(drawable, z10, hVar, str);
        }

        public final x4.h c() {
            return this.f6437c;
        }

        public final String d() {
            return this.f6438d;
        }

        public final Drawable e() {
            return this.f6435a;
        }

        public final boolean f() {
            return this.f6436b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f6439d;

        /* renamed from: e  reason: collision with root package name */
        Object f6440e;

        /* renamed from: i  reason: collision with root package name */
        Object f6441i;

        /* renamed from: o  reason: collision with root package name */
        Object f6442o;

        /* renamed from: p  reason: collision with root package name */
        Object f6443p;

        /* renamed from: q  reason: collision with root package name */
        Object f6444q;

        /* renamed from: r  reason: collision with root package name */
        Object f6445r;

        /* renamed from: s  reason: collision with root package name */
        Object f6446s;

        /* renamed from: t  reason: collision with root package name */
        int f6447t;

        /* renamed from: u  reason: collision with root package name */
        /* synthetic */ Object f6448u;

        /* renamed from: w  reason: collision with root package name */
        int f6450w;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6448u = obj;
            this.f6450w |= Integer.MIN_VALUE;
            return a.this.i(null, null, null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f6451d;

        /* renamed from: e  reason: collision with root package name */
        Object f6452e;

        /* renamed from: i  reason: collision with root package name */
        Object f6453i;

        /* renamed from: o  reason: collision with root package name */
        Object f6454o;

        /* renamed from: p  reason: collision with root package name */
        Object f6455p;

        /* renamed from: q  reason: collision with root package name */
        Object f6456q;

        /* renamed from: r  reason: collision with root package name */
        Object f6457r;

        /* renamed from: s  reason: collision with root package name */
        Object f6458s;

        /* renamed from: t  reason: collision with root package name */
        /* synthetic */ Object f6459t;

        /* renamed from: v  reason: collision with root package name */
        int f6461v;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6459t = obj;
            this.f6461v |= Integer.MIN_VALUE;
            return a.this.j(null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6462d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f6464i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f6465o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ g5.h f6466p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Object f6467q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f6468r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ v4.c f6469s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, g5.h hVar, Object obj, Ref.ObjectRef objectRef3, v4.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f6464i = objectRef;
            this.f6465o = objectRef2;
            this.f6466p = hVar;
            this.f6467q = obj;
            this.f6468r = objectRef3;
            this.f6469s = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f6464i, this.f6465o, this.f6466p, this.f6467q, this.f6468r, this.f6469s, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f6462d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            v4.c cVar = this.f6469s;
            this.f6462d = 1;
            Object i11 = a.this.i((l) this.f6464i.element, (v4.b) this.f6465o.element, this.f6466p, this.f6467q, (m) this.f6468r.element, cVar, this);
            if (i11 == f10) {
                return f10;
            }
            return i11;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f6470d;

        /* renamed from: e  reason: collision with root package name */
        Object f6471e;

        /* renamed from: i  reason: collision with root package name */
        Object f6472i;

        /* renamed from: o  reason: collision with root package name */
        Object f6473o;

        /* renamed from: p  reason: collision with root package name */
        Object f6474p;

        /* renamed from: q  reason: collision with root package name */
        Object f6475q;

        /* renamed from: r  reason: collision with root package name */
        Object f6476r;

        /* renamed from: s  reason: collision with root package name */
        int f6477s;

        /* renamed from: t  reason: collision with root package name */
        /* synthetic */ Object f6478t;

        /* renamed from: v  reason: collision with root package name */
        int f6480v;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6478t = obj;
            this.f6480v |= Integer.MIN_VALUE;
            return a.this.k(null, null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f6481d;

        /* renamed from: e  reason: collision with root package name */
        Object f6482e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f6483i;

        /* renamed from: p  reason: collision with root package name */
        int f6485p;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6483i = obj;
            this.f6485p |= Integer.MIN_VALUE;
            return a.this.a(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class h extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6486d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ g5.h f6488i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Object f6489o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ m f6490p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ v4.c f6491q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ c.b f6492r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ b.a f6493s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(g5.h hVar, Object obj, m mVar, v4.c cVar, c.b bVar, b.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f6488i = hVar;
            this.f6489o = obj;
            this.f6490p = mVar;
            this.f6491q = cVar;
            this.f6492r = bVar;
            this.f6493s = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f6488i, this.f6489o, this.f6490p, this.f6491q, this.f6492r, this.f6493s, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = gs.b.f();
            int i10 = this.f6486d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    j10 = obj;
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                a aVar = a.this;
                g5.h hVar = this.f6488i;
                Object obj2 = this.f6489o;
                m mVar = this.f6490p;
                v4.c cVar = this.f6491q;
                this.f6486d = 1;
                j10 = aVar.j(hVar, obj2, mVar, cVar, this);
                if (j10 == f10) {
                    return f10;
                }
            }
            b bVar = (b) j10;
            a.this.f6432b.c();
            boolean h10 = a.this.f6434d.h(this.f6492r, this.f6488i, bVar);
            Drawable e10 = bVar.e();
            g5.h hVar2 = this.f6488i;
            x4.h c10 = bVar.c();
            c.b bVar2 = this.f6492r;
            if (!h10) {
                bVar2 = null;
            }
            return new q(e10, hVar2, c10, bVar2, bVar.d(), bVar.f(), k5.k.t(this.f6493s));
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class i extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f6494d;

        /* renamed from: e  reason: collision with root package name */
        Object f6495e;

        /* renamed from: i  reason: collision with root package name */
        int f6496i;

        /* renamed from: o  reason: collision with root package name */
        int f6497o;

        /* renamed from: p  reason: collision with root package name */
        int f6498p;

        /* renamed from: q  reason: collision with root package name */
        private /* synthetic */ Object f6499q;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ b f6501s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ m f6502t;

        /* renamed from: u  reason: collision with root package name */
        final /* synthetic */ List f6503u;

        /* renamed from: v  reason: collision with root package name */
        final /* synthetic */ v4.c f6504v;

        /* renamed from: w  reason: collision with root package name */
        final /* synthetic */ g5.h f6505w;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(b bVar, m mVar, List list, v4.c cVar, g5.h hVar, Continuation continuation) {
            super(2, continuation);
            this.f6501s = bVar;
            this.f6502t = mVar;
            this.f6503u = list;
            this.f6504v = cVar;
            this.f6505w = hVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            i iVar = new i(this.f6501s, this.f6502t, this.f6503u, this.f6504v, this.f6505w, continuation);
            iVar.f6499q = obj;
            return iVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            CoroutineScope coroutineScope;
            Bitmap h10;
            List list;
            m mVar;
            int size;
            int i10;
            gs.b.f();
            int i11 = this.f6498p;
            if (i11 != 0) {
                if (i11 == 1) {
                    size = this.f6497o;
                    int i12 = this.f6496i;
                    mVar = (m) this.f6495e;
                    list = (List) this.f6494d;
                    coroutineScope = (CoroutineScope) this.f6499q;
                    kotlin.c.b(obj);
                    h10 = (Bitmap) obj;
                    kotlinx.coroutines.i.h(coroutineScope);
                    i10 = i12 + 1;
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                coroutineScope = (CoroutineScope) this.f6499q;
                h10 = a.this.h(this.f6501s.e(), this.f6502t, this.f6503u);
                this.f6504v.e(this.f6505w, h10);
                list = this.f6503u;
                mVar = this.f6502t;
                size = list.size();
                i10 = 0;
            }
            if (i10 >= size) {
                this.f6504v.j(this.f6505w, h10);
                return b.b(this.f6501s, new BitmapDrawable(this.f6505w.l().getResources(), h10), false, null, null, 14, null);
            }
            android.support.v4.media.session.b.a(list.get(i10));
            mVar.o();
            this.f6499q = coroutineScope;
            this.f6494d = list;
            this.f6495e = mVar;
            this.f6496i = i10;
            this.f6497o = size;
            this.f6498p = 1;
            throw null;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public a(v4.h hVar, v vVar, p pVar, t tVar) {
        this.f6431a = hVar;
        this.f6432b = vVar;
        this.f6433c = pVar;
        this.f6434d = new e5.d(hVar, pVar, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Bitmap h(Drawable drawable, m mVar, List list) {
        if (drawable instanceof BitmapDrawable) {
            Bitmap bitmap = ((BitmapDrawable) drawable).getBitmap();
            if (kotlin.collections.i.N(k5.k.o(), k5.a.c(bitmap))) {
                return bitmap;
            }
        }
        return n.f31568a.a(drawable, mVar.f(), mVar.o(), mVar.n(), mVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x005b  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0068  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x00a5  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x00ca  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x00ce  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:20:0x0097 -> B:21:0x009e). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object i(a5.l r8, v4.b r9, g5.h r10, java.lang.Object r11, g5.m r12, v4.c r13, kotlin.coroutines.Continuation r14) {
        /*
            Method dump skipped, instructions count: 233
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: b5.a.i(a5.l, v4.b, g5.h, java.lang.Object, g5.m, v4.c, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:73:0x01d3, code lost:
        if (r0 == r9) goto L38;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:11:0x002c  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x008d  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x011d  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x0137 A[Catch: all -> 0x0089, TRY_LEAVE, TryCatch #3 {all -> 0x0089, blocks: (B:23:0x0079, B:46:0x012c, B:48:0x0137), top: B:98:0x0079 }] */
    /* JADX WARN: Removed duplicated region for block: B:60:0x0175 A[Catch: all -> 0x0058, TryCatch #2 {all -> 0x0058, blocks: (B:18:0x0053, B:56:0x0167, B:52:0x014c, B:60:0x0175, B:62:0x0180, B:83:0x01ef, B:84:0x01f4), top: B:97:0x002a }] */
    /* JADX WARN: Removed duplicated region for block: B:66:0x01a5  */
    /* JADX WARN: Removed duplicated region for block: B:67:0x01a8  */
    /* JADX WARN: Removed duplicated region for block: B:69:0x01ab  */
    /* JADX WARN: Removed duplicated region for block: B:87:0x01fb  */
    /* JADX WARN: Removed duplicated region for block: B:89:0x0200  */
    /* JADX WARN: Type inference failed for: r2v11, types: [g5.m, T] */
    /* JADX WARN: Type inference failed for: r2v16, types: [v4.b, T] */
    /* JADX WARN: Type inference failed for: r2v22 */
    /* JADX WARN: Type inference failed for: r2v26 */
    /* JADX WARN: Type inference failed for: r2v3, types: [int] */
    /* JADX WARN: Type inference failed for: r2v8, types: [v4.b, T] */
    /* JADX WARN: Type inference failed for: r2v9 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object j(g5.h r24, java.lang.Object r25, g5.m r26, v4.c r27, kotlin.coroutines.Continuation r28) {
        /*
            Method dump skipped, instructions count: 522
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: b5.a.j(g5.h, java.lang.Object, g5.m, v4.c, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0057  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0064  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x009c A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:25:0x009d  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00b5  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:20:0x0091 -> B:21:0x0095). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object k(v4.b r8, g5.h r9, java.lang.Object r10, g5.m r11, v4.c r12, kotlin.coroutines.Continuation r13) {
        /*
            Method dump skipped, instructions count: 208
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: b5.a.k(v4.b, g5.h, java.lang.Object, g5.m, v4.c, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003f  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00b2  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x00bd  */
    @Override // b5.b
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object a(b5.b.a r14, kotlin.coroutines.Continuation r15) {
        /*
            r13 = this;
            boolean r0 = r15 instanceof b5.a.g
            if (r0 == 0) goto L13
            r0 = r15
            b5.a$g r0 = (b5.a.g) r0
            int r1 = r0.f6485p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f6485p = r1
            goto L18
        L13:
            b5.a$g r0 = new b5.a$g
            r0.<init>(r15)
        L18:
            java.lang.Object r15 = r0.f6483i
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f6485p
            r3 = 1
            if (r2 == 0) goto L3f
            if (r2 != r3) goto L37
            java.lang.Object r14 = r0.f6482e
            b5.b$a r14 = (b5.b.a) r14
            java.lang.Object r0 = r0.f6481d
            r1 = r0
            b5.a r1 = (b5.a) r1
            kotlin.c.b(r15)     // Catch: java.lang.Throwable -> L32
            return r15
        L32:
            r0 = move-exception
            r15 = r0
            r5 = r13
            goto Lae
        L37:
            java.lang.IllegalStateException r14 = new java.lang.IllegalStateException
            java.lang.String r15 = "call to 'resume' before 'invoke' with coroutine"
            r14.<init>(r15)
            throw r14
        L3f:
            kotlin.c.b(r15)
            g5.h r6 = r14.c()     // Catch: java.lang.Throwable -> La9
            java.lang.Object r15 = r6.m()     // Catch: java.lang.Throwable -> La9
            h5.i r2 = r14.getSize()     // Catch: java.lang.Throwable -> La9
            v4.c r9 = k5.k.g(r14)     // Catch: java.lang.Throwable -> La9
            g5.p r4 = r13.f6433c     // Catch: java.lang.Throwable -> La9
            g5.m r8 = r4.f(r6, r2)     // Catch: java.lang.Throwable -> La9
            h5.h r4 = r8.n()     // Catch: java.lang.Throwable -> La9
            r9.p(r6, r15)     // Catch: java.lang.Throwable -> La9
            v4.h r5 = r13.f6431a     // Catch: java.lang.Throwable -> La9
            v4.b r5 = r5.getComponents()     // Catch: java.lang.Throwable -> La9
            java.lang.Object r7 = r5.g(r15, r8)     // Catch: java.lang.Throwable -> La9
            r9.m(r6, r7)     // Catch: java.lang.Throwable -> La9
            e5.d r15 = r13.f6434d     // Catch: java.lang.Throwable -> La9
            e5.c$b r10 = r15.f(r6, r7, r8, r9)     // Catch: java.lang.Throwable -> La9
            if (r10 == 0) goto L80
            e5.d r15 = r13.f6434d     // Catch: java.lang.Throwable -> L7b
            e5.c$c r15 = r15.a(r6, r10, r2, r4)     // Catch: java.lang.Throwable -> L7b
            goto L81
        L7b:
            r0 = move-exception
            r15 = r0
            r1 = r13
            r5 = r1
            goto Lae
        L80:
            r15 = 0
        L81:
            if (r15 == 0) goto L8a
            e5.d r0 = r13.f6434d     // Catch: java.lang.Throwable -> L7b
            g5.q r14 = r0.g(r14, r6, r10, r15)     // Catch: java.lang.Throwable -> L7b
            return r14
        L8a:
            kotlinx.coroutines.CoroutineDispatcher r15 = r6.v()     // Catch: java.lang.Throwable -> La9
            b5.a$h r4 = new b5.a$h     // Catch: java.lang.Throwable -> La9
            r12 = 0
            r5 = r13
            r11 = r14
            r4.<init>(r6, r7, r8, r9, r10, r11, r12)     // Catch: java.lang.Throwable -> La4
            r0.f6481d = r5     // Catch: java.lang.Throwable -> La4
            r0.f6482e = r11     // Catch: java.lang.Throwable -> La4
            r0.f6485p = r3     // Catch: java.lang.Throwable -> La4
            java.lang.Object r14 = ys.g.g(r15, r4, r0)     // Catch: java.lang.Throwable -> La4
            if (r14 != r1) goto La3
            return r1
        La3:
            return r14
        La4:
            r0 = move-exception
            r15 = r0
            r1 = r5
            r14 = r11
            goto Lae
        La9:
            r0 = move-exception
            r5 = r13
            r11 = r14
            r15 = r0
            r1 = r5
        Lae:
            boolean r0 = r15 instanceof java.util.concurrent.CancellationException
            if (r0 != 0) goto Lbd
            g5.p r0 = r1.f6433c
            g5.h r14 = r14.c()
            g5.f r14 = r0.a(r14, r15)
            return r14
        Lbd:
            throw r15
        */
        throw new UnsupportedOperationException("Method not decompiled: b5.a.a(b5.b$a, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public final Object l(b bVar, g5.h hVar, m mVar, v4.c cVar, Continuation continuation) {
        List O = hVar.O();
        if (O.isEmpty()) {
            return bVar;
        }
        if (!(bVar.e() instanceof BitmapDrawable) && !hVar.g()) {
            return bVar;
        }
        return ys.g.g(hVar.N(), new i(bVar, mVar, O, cVar, hVar, null), continuation);
    }
}
