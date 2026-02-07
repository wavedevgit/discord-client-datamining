package g1;

import android.os.Handler;
import android.os.Looper;
import android.view.Choreographer;
import java.util.ArrayList;
import java.util.List;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
import os.g;
import os.m0;
import qr.l;
import w0.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    private final Choreographer f23785i;

    /* renamed from: o  reason: collision with root package name */
    private final Handler f23786o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f23787p;

    /* renamed from: q  reason: collision with root package name */
    private final ArrayDeque f23788q;

    /* renamed from: r  reason: collision with root package name */
    private List f23789r;

    /* renamed from: s  reason: collision with root package name */
    private List f23790s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f23791t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f23792u;

    /* renamed from: v  reason: collision with root package name */
    private final d f23793v;

    /* renamed from: w  reason: collision with root package name */
    private final n f23794w;

    /* renamed from: x  reason: collision with root package name */
    public static final c f23782x = new c(null);

    /* renamed from: y  reason: collision with root package name */
    public static final int f23783y = 8;

    /* renamed from: z  reason: collision with root package name */
    private static final Lazy f23784z = l.a(C0330a.f23795d);
    private static final ThreadLocal A = new b();

    /* renamed from: g1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class C0330a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0330a f23795d = new C0330a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: g1.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0331a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f23796d;

            C0331a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0331a(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f23796d == 0) {
                    kotlin.c.b(obj);
                    return Choreographer.getInstance();
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0331a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        C0330a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final CoroutineContext invoke() {
            boolean b10;
            Choreographer choreographer;
            b10 = g1.b.b();
            if (b10) {
                choreographer = Choreographer.getInstance();
            } else {
                choreographer = (Choreographer) g.e(m0.c(), new C0331a(null));
            }
            Intrinsics.checkNotNullExpressionValue(choreographer, "if (isMainThread()) Chor…eographer.getInstance() }");
            Handler a10 = w1.g.a(Looper.getMainLooper());
            Intrinsics.checkNotNullExpressionValue(a10, "createAsync(Looper.getMainLooper())");
            a aVar = new a(choreographer, a10, null);
            return aVar.Y0(aVar.s2());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends ThreadLocal {
        b() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public CoroutineContext initialValue() {
            Choreographer choreographer = Choreographer.getInstance();
            Intrinsics.checkNotNullExpressionValue(choreographer, "getInstance()");
            Looper myLooper = Looper.myLooper();
            if (myLooper != null) {
                Handler a10 = w1.g.a(myLooper);
                Intrinsics.checkNotNullExpressionValue(a10, "createAsync(\n           …d\")\n                    )");
                a aVar = new a(choreographer, a10, null);
                return aVar.Y0(aVar.s2());
            }
            throw new IllegalStateException("no Looper on this thread");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {
        public /* synthetic */ c(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final CoroutineContext a() {
            return (CoroutineContext) a.f23784z.getValue();
        }

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d implements Choreographer.FrameCallback, Runnable {
        d() {
        }

        @Override // android.view.Choreographer.FrameCallback
        public void doFrame(long j10) {
            a.this.f23786o.removeCallbacks(this);
            a.this.v2();
            a.this.u2(j10);
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.v2();
            Object obj = a.this.f23787p;
            a aVar = a.this;
            synchronized (obj) {
                try {
                    if (aVar.f23789r.isEmpty()) {
                        aVar.r2().removeFrameCallback(this);
                        aVar.f23792u = false;
                    }
                    Unit unit = Unit.f32056a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    public /* synthetic */ a(Choreographer choreographer, Handler handler, DefaultConstructorMarker defaultConstructorMarker) {
        this(choreographer, handler);
    }

    private final Runnable t2() {
        Runnable runnable;
        synchronized (this.f23787p) {
            runnable = (Runnable) this.f23788q.p();
        }
        return runnable;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u2(long j10) {
        synchronized (this.f23787p) {
            if (!this.f23792u) {
                return;
            }
            this.f23792u = false;
            List list = this.f23789r;
            this.f23789r = this.f23790s;
            this.f23790s = list;
            int size = list.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((Choreographer.FrameCallback) list.get(i10)).doFrame(j10);
            }
            list.clear();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void v2() {
        boolean z10;
        do {
            Runnable t22 = t2();
            while (t22 != null) {
                t22.run();
                t22 = t2();
            }
            synchronized (this.f23787p) {
                if (this.f23788q.isEmpty()) {
                    z10 = false;
                    this.f23791t = false;
                } else {
                    z10 = true;
                }
            }
        } while (z10);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void D1(CoroutineContext context, Runnable block) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(block, "block");
        synchronized (this.f23787p) {
            try {
                this.f23788q.addLast(block);
                if (!this.f23791t) {
                    this.f23791t = true;
                    this.f23786o.post(this.f23793v);
                    if (!this.f23792u) {
                        this.f23792u = true;
                        this.f23785i.postFrameCallback(this.f23793v);
                    }
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Choreographer r2() {
        return this.f23785i;
    }

    public final n s2() {
        return this.f23794w;
    }

    public final void w2(Choreographer.FrameCallback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        synchronized (this.f23787p) {
            try {
                this.f23789r.add(callback);
                if (!this.f23792u) {
                    this.f23792u = true;
                    this.f23785i.postFrameCallback(this.f23793v);
                }
                Unit unit = Unit.f32056a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void x2(Choreographer.FrameCallback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        synchronized (this.f23787p) {
            this.f23789r.remove(callback);
        }
    }

    private a(Choreographer choreographer, Handler handler) {
        this.f23785i = choreographer;
        this.f23786o = handler;
        this.f23787p = new Object();
        this.f23788q = new ArrayDeque();
        this.f23789r = new ArrayList();
        this.f23790s = new ArrayList();
        this.f23793v = new d();
        this.f23794w = new g1.c(choreographer, this);
    }
}
