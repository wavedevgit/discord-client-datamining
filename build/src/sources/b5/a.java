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
    public static final C0096a f6106e = new C0096a(null);

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f6107a;

    /* renamed from: b  reason: collision with root package name */
    private final v f6108b;

    /* renamed from: c  reason: collision with root package name */
    private final p f6109c;

    /* renamed from: d  reason: collision with root package name */
    private final e5.d f6110d;

    /* renamed from: b5.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0096a {
        public /* synthetic */ C0096a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0096a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Drawable f6111a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f6112b;

        /* renamed from: c  reason: collision with root package name */
        private final x4.h f6113c;

        /* renamed from: d  reason: collision with root package name */
        private final String f6114d;

        public b(Drawable drawable, boolean z10, x4.h hVar, String str) {
            this.f6111a = drawable;
            this.f6112b = z10;
            this.f6113c = hVar;
            this.f6114d = str;
        }

        public static /* synthetic */ b b(b bVar, Drawable drawable, boolean z10, x4.h hVar, String str, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                drawable = bVar.f6111a;
            }
            if ((i10 & 2) != 0) {
                z10 = bVar.f6112b;
            }
            if ((i10 & 4) != 0) {
                hVar = bVar.f6113c;
            }
            if ((i10 & 8) != 0) {
                str = bVar.f6114d;
            }
            return bVar.a(drawable, z10, hVar, str);
        }

        public final b a(Drawable drawable, boolean z10, x4.h hVar, String str) {
            return new b(drawable, z10, hVar, str);
        }

        public final x4.h c() {
            return this.f6113c;
        }

        public final String d() {
            return this.f6114d;
        }

        public final Drawable e() {
            return this.f6111a;
        }

        public final boolean f() {
            return this.f6112b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f6115d;

        /* renamed from: e  reason: collision with root package name */
        Object f6116e;

        /* renamed from: i  reason: collision with root package name */
        Object f6117i;

        /* renamed from: o  reason: collision with root package name */
        Object f6118o;

        /* renamed from: p  reason: collision with root package name */
        Object f6119p;

        /* renamed from: q  reason: collision with root package name */
        Object f6120q;

        /* renamed from: r  reason: collision with root package name */
        Object f6121r;

        /* renamed from: s  reason: collision with root package name */
        Object f6122s;

        /* renamed from: t  reason: collision with root package name */
        int f6123t;

        /* renamed from: u  reason: collision with root package name */
        /* synthetic */ Object f6124u;

        /* renamed from: w  reason: collision with root package name */
        int f6126w;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6124u = obj;
            this.f6126w |= Integer.MIN_VALUE;
            return a.this.i(null, null, null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f6127d;

        /* renamed from: e  reason: collision with root package name */
        Object f6128e;

        /* renamed from: i  reason: collision with root package name */
        Object f6129i;

        /* renamed from: o  reason: collision with root package name */
        Object f6130o;

        /* renamed from: p  reason: collision with root package name */
        Object f6131p;

        /* renamed from: q  reason: collision with root package name */
        Object f6132q;

        /* renamed from: r  reason: collision with root package name */
        Object f6133r;

        /* renamed from: s  reason: collision with root package name */
        Object f6134s;

        /* renamed from: t  reason: collision with root package name */
        /* synthetic */ Object f6135t;

        /* renamed from: v  reason: collision with root package name */
        int f6137v;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6135t = obj;
            this.f6137v |= Integer.MIN_VALUE;
            return a.this.j(null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6138d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f6140i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f6141o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ g5.h f6142p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Object f6143q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f6144r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ v4.c f6145s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, g5.h hVar, Object obj, Ref.ObjectRef objectRef3, v4.c cVar, Continuation continuation) {
            super(2, continuation);
            this.f6140i = objectRef;
            this.f6141o = objectRef2;
            this.f6142p = hVar;
            this.f6143q = obj;
            this.f6144r = objectRef3;
            this.f6145s = cVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f6140i, this.f6141o, this.f6142p, this.f6143q, this.f6144r, this.f6145s, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f6138d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            v4.c cVar = this.f6145s;
            this.f6138d = 1;
            Object i11 = a.this.i((l) this.f6140i.element, (v4.b) this.f6141o.element, this.f6142p, this.f6143q, (m) this.f6144r.element, cVar, this);
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
        Object f6146d;

        /* renamed from: e  reason: collision with root package name */
        Object f6147e;

        /* renamed from: i  reason: collision with root package name */
        Object f6148i;

        /* renamed from: o  reason: collision with root package name */
        Object f6149o;

        /* renamed from: p  reason: collision with root package name */
        Object f6150p;

        /* renamed from: q  reason: collision with root package name */
        Object f6151q;

        /* renamed from: r  reason: collision with root package name */
        Object f6152r;

        /* renamed from: s  reason: collision with root package name */
        int f6153s;

        /* renamed from: t  reason: collision with root package name */
        /* synthetic */ Object f6154t;

        /* renamed from: v  reason: collision with root package name */
        int f6156v;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6154t = obj;
            this.f6156v |= Integer.MIN_VALUE;
            return a.this.k(null, null, null, null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f6157d;

        /* renamed from: e  reason: collision with root package name */
        Object f6158e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f6159i;

        /* renamed from: p  reason: collision with root package name */
        int f6161p;

        g(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6159i = obj;
            this.f6161p |= Integer.MIN_VALUE;
            return a.this.a(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class h extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6162d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ g5.h f6164i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Object f6165o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ m f6166p;

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ v4.c f6167q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ c.b f6168r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ b.a f6169s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(g5.h hVar, Object obj, m mVar, v4.c cVar, c.b bVar, b.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f6164i = hVar;
            this.f6165o = obj;
            this.f6166p = mVar;
            this.f6167q = cVar;
            this.f6168r = bVar;
            this.f6169s = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f6164i, this.f6165o, this.f6166p, this.f6167q, this.f6168r, this.f6169s, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object j10;
            Object f10 = ur.b.f();
            int i10 = this.f6162d;
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
                g5.h hVar = this.f6164i;
                Object obj2 = this.f6165o;
                m mVar = this.f6166p;
                v4.c cVar = this.f6167q;
                this.f6162d = 1;
                j10 = aVar.j(hVar, obj2, mVar, cVar, this);
                if (j10 == f10) {
                    return f10;
                }
            }
            b bVar = (b) j10;
            a.this.f6108b.c();
            boolean h10 = a.this.f6110d.h(this.f6168r, this.f6164i, bVar);
            Drawable e10 = bVar.e();
            g5.h hVar2 = this.f6164i;
            x4.h c10 = bVar.c();
            c.b bVar2 = this.f6168r;
            if (!h10) {
                bVar2 = null;
            }
            return new q(e10, hVar2, c10, bVar2, bVar.d(), bVar.f(), k5.k.t(this.f6169s));
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
        Object f6170d;

        /* renamed from: e  reason: collision with root package name */
        Object f6171e;

        /* renamed from: i  reason: collision with root package name */
        int f6172i;

        /* renamed from: o  reason: collision with root package name */
        int f6173o;

        /* renamed from: p  reason: collision with root package name */
        int f6174p;

        /* renamed from: q  reason: collision with root package name */
        private /* synthetic */ Object f6175q;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ b f6177s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ m f6178t;

        /* renamed from: u  reason: collision with root package name */
        final /* synthetic */ List f6179u;

        /* renamed from: v  reason: collision with root package name */
        final /* synthetic */ v4.c f6180v;

        /* renamed from: w  reason: collision with root package name */
        final /* synthetic */ g5.h f6181w;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(b bVar, m mVar, List list, v4.c cVar, g5.h hVar, Continuation continuation) {
            super(2, continuation);
            this.f6177s = bVar;
            this.f6178t = mVar;
            this.f6179u = list;
            this.f6180v = cVar;
            this.f6181w = hVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            i iVar = new i(this.f6177s, this.f6178t, this.f6179u, this.f6180v, this.f6181w, continuation);
            iVar.f6175q = obj;
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
            ur.b.f();
            int i11 = this.f6174p;
            if (i11 != 0) {
                if (i11 == 1) {
                    size = this.f6173o;
                    int i12 = this.f6172i;
                    mVar = (m) this.f6171e;
                    list = (List) this.f6170d;
                    coroutineScope = (CoroutineScope) this.f6175q;
                    kotlin.c.b(obj);
                    h10 = (Bitmap) obj;
                    kotlinx.coroutines.i.h(coroutineScope);
                    i10 = i12 + 1;
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                coroutineScope = (CoroutineScope) this.f6175q;
                h10 = a.this.h(this.f6177s.e(), this.f6178t, this.f6179u);
                this.f6180v.e(this.f6181w, h10);
                list = this.f6179u;
                mVar = this.f6178t;
                size = list.size();
                i10 = 0;
            }
            if (i10 >= size) {
                this.f6180v.j(this.f6181w, h10);
                return b.b(this.f6177s, new BitmapDrawable(this.f6181w.l().getResources(), h10), false, null, null, 14, null);
            }
            android.support.v4.media.session.b.a(list.get(i10));
            mVar.o();
            this.f6175q = coroutineScope;
            this.f6170d = list;
            this.f6171e = mVar;
            this.f6172i = i10;
            this.f6173o = size;
            this.f6174p = 1;
            throw null;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public a(v4.h hVar, v vVar, p pVar, t tVar) {
        this.f6107a = hVar;
        this.f6108b = vVar;
        this.f6109c = pVar;
        this.f6110d = new e5.d(hVar, pVar, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Bitmap h(Drawable drawable, m mVar, List list) {
        if (drawable instanceof BitmapDrawable) {
            Bitmap bitmap = ((BitmapDrawable) drawable).getBitmap();
            if (kotlin.collections.i.N(k5.k.o(), k5.a.c(bitmap))) {
                return bitmap;
            }
        }
        return n.f31649a.a(drawable, mVar.f(), mVar.o(), mVar.n(), mVar.c());
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
            int r1 = r0.f6161p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f6161p = r1
            goto L18
        L13:
            b5.a$g r0 = new b5.a$g
            r0.<init>(r15)
        L18:
            java.lang.Object r15 = r0.f6159i
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f6161p
            r3 = 1
            if (r2 == 0) goto L3f
            if (r2 != r3) goto L37
            java.lang.Object r14 = r0.f6158e
            b5.b$a r14 = (b5.b.a) r14
            java.lang.Object r0 = r0.f6157d
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
            g5.p r4 = r13.f6109c     // Catch: java.lang.Throwable -> La9
            g5.m r8 = r4.f(r6, r2)     // Catch: java.lang.Throwable -> La9
            h5.h r4 = r8.n()     // Catch: java.lang.Throwable -> La9
            r9.p(r6, r15)     // Catch: java.lang.Throwable -> La9
            v4.h r5 = r13.f6107a     // Catch: java.lang.Throwable -> La9
            v4.b r5 = r5.getComponents()     // Catch: java.lang.Throwable -> La9
            java.lang.Object r7 = r5.g(r15, r8)     // Catch: java.lang.Throwable -> La9
            r9.m(r6, r7)     // Catch: java.lang.Throwable -> La9
            e5.d r15 = r13.f6110d     // Catch: java.lang.Throwable -> La9
            e5.c$b r10 = r15.f(r6, r7, r8, r9)     // Catch: java.lang.Throwable -> La9
            if (r10 == 0) goto L80
            e5.d r15 = r13.f6110d     // Catch: java.lang.Throwable -> L7b
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
            e5.d r0 = r13.f6110d     // Catch: java.lang.Throwable -> L7b
            g5.q r14 = r0.g(r14, r6, r10, r15)     // Catch: java.lang.Throwable -> L7b
            return r14
        L8a:
            kotlinx.coroutines.CoroutineDispatcher r15 = r6.v()     // Catch: java.lang.Throwable -> La9
            b5.a$h r4 = new b5.a$h     // Catch: java.lang.Throwable -> La9
            r12 = 0
            r5 = r13
            r11 = r14
            r4.<init>(r6, r7, r8, r9, r10, r11, r12)     // Catch: java.lang.Throwable -> La4
            r0.f6157d = r5     // Catch: java.lang.Throwable -> La4
            r0.f6158e = r11     // Catch: java.lang.Throwable -> La4
            r0.f6161p = r3     // Catch: java.lang.Throwable -> La4
            java.lang.Object r14 = ms.g.g(r15, r4, r0)     // Catch: java.lang.Throwable -> La4
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
            g5.p r0 = r1.f6109c
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
        return ms.g.g(hVar.N(), new i(bVar, mVar, O, cVar, hVar, null), continuation);
    }
}
