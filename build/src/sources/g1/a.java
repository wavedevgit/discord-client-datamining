package g1;

import android.os.Handler;
import android.os.Looper;
import android.view.Choreographer;
import as.l;
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
import w0.n;
import ys.g;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends CoroutineDispatcher {

    /* renamed from: i  reason: collision with root package name */
    private final Choreographer f24611i;

    /* renamed from: o  reason: collision with root package name */
    private final Handler f24612o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f24613p;

    /* renamed from: q  reason: collision with root package name */
    private final ArrayDeque f24614q;

    /* renamed from: r  reason: collision with root package name */
    private List f24615r;

    /* renamed from: s  reason: collision with root package name */
    private List f24616s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f24617t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f24618u;

    /* renamed from: v  reason: collision with root package name */
    private final d f24619v;

    /* renamed from: w  reason: collision with root package name */
    private final n f24620w;

    /* renamed from: x  reason: collision with root package name */
    public static final c f24608x = new c(null);

    /* renamed from: y  reason: collision with root package name */
    public static final int f24609y = 8;

    /* renamed from: z  reason: collision with root package name */
    private static final Lazy f24610z = l.b(C0335a.f24621d);
    private static final ThreadLocal A = new b();

    /* renamed from: g1.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class C0335a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0335a f24621d = new C0335a();

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: g1.a$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0336a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f24622d;

            C0336a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0336a(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                gs.b.f();
                if (this.f24622d == 0) {
                    kotlin.c.b(obj);
                    return Choreographer.getInstance();
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0336a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        C0335a() {
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
                choreographer = (Choreographer) g.e(m0.c(), new C0336a(null));
            }
            Intrinsics.checkNotNullExpressionValue(choreographer, "if (isMainThread()) Chor…eographer.getInstance() }");
            Handler a10 = w1.g.a(Looper.getMainLooper());
            Intrinsics.checkNotNullExpressionValue(a10, "createAsync(Looper.getMainLooper())");
            a aVar = new a(choreographer, a10, null);
            return aVar.O0(aVar.o2());
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
                return aVar.O0(aVar.o2());
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
            return (CoroutineContext) a.f24610z.getValue();
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
            a.this.f24612o.removeCallbacks(this);
            a.this.v2();
            a.this.u2(j10);
        }

        @Override // java.lang.Runnable
        public void run() {
            a.this.v2();
            Object obj = a.this.f24613p;
            a aVar = a.this;
            synchronized (obj) {
                try {
                    if (aVar.f24615r.isEmpty()) {
                        aVar.m2().removeFrameCallback(this);
                        aVar.f24618u = false;
                    }
                    Unit unit = Unit.f32556a;
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
        synchronized (this.f24613p) {
            runnable = (Runnable) this.f24614q.p();
        }
        return runnable;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void u2(long j10) {
        synchronized (this.f24613p) {
            if (!this.f24618u) {
                return;
            }
            this.f24618u = false;
            List list = this.f24615r;
            this.f24615r = this.f24616s;
            this.f24616s = list;
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
            synchronized (this.f24613p) {
                if (this.f24614q.isEmpty()) {
                    z10 = false;
                    this.f24617t = false;
                } else {
                    z10 = true;
                }
            }
        } while (z10);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext context, Runnable block) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(block, "block");
        synchronized (this.f24613p) {
            try {
                this.f24614q.addLast(block);
                if (!this.f24617t) {
                    this.f24617t = true;
                    this.f24612o.post(this.f24619v);
                    if (!this.f24618u) {
                        this.f24618u = true;
                        this.f24611i.postFrameCallback(this.f24619v);
                    }
                }
                Unit unit = Unit.f32556a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Choreographer m2() {
        return this.f24611i;
    }

    public final n o2() {
        return this.f24620w;
    }

    public final void w2(Choreographer.FrameCallback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        synchronized (this.f24613p) {
            try {
                this.f24615r.add(callback);
                if (!this.f24618u) {
                    this.f24618u = true;
                    this.f24611i.postFrameCallback(this.f24619v);
                }
                Unit unit = Unit.f32556a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void x2(Choreographer.FrameCallback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        synchronized (this.f24613p) {
            this.f24615r.remove(callback);
        }
    }

    private a(Choreographer choreographer, Handler handler) {
        this.f24611i = choreographer;
        this.f24612o = handler;
        this.f24613p = new Object();
        this.f24614q = new ArrayDeque();
        this.f24615r = new ArrayList();
        this.f24616s = new ArrayList();
        this.f24619v = new d();
        this.f24620w = new g1.c(choreographer, this);
    }
}
