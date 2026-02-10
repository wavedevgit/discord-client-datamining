package np;

import android.content.Context;
import android.os.Build;
import android.view.View;
import android.view.ViewPropertyAnimator;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.camera.view.PreviewView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.selfie.view.SelfieOverlayView;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableStateFlow;
import np.a1;
import np.w;
import np.x5;
import vn.t;
import vn.v;
import vn.x;
import vn.z;
import xn.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements en.k {

    /* renamed from: b  reason: collision with root package name */
    private final op.c f39454b;

    /* renamed from: c  reason: collision with root package name */
    private final vn.t f39455c;

    /* renamed from: d  reason: collision with root package name */
    private final vn.w0 f39456d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39457e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f39458f;

    /* renamed from: g  reason: collision with root package name */
    private vn.i f39459g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f39460h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f39461i;

    /* renamed from: j  reason: collision with root package name */
    private List f39462j;

    /* renamed from: k  reason: collision with root package name */
    private Job f39463k;

    /* renamed from: l  reason: collision with root package name */
    private Job f39464l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f39465m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f39466n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f39467o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f39468p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f39469q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f39470r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f39471s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f39472t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f39473u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f39474v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f39475w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f39476x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f39477y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39478d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: np.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0567a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f39480d;

            C0567a(w wVar) {
                this.f39480d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f39480d;
                TextView realTimeHint = wVar.f39454b.f42584t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f31765a;
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f39478d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = ss.g.k(w.this.f39477y, 300L);
                C0567a c0567a = new C0567a(w.this);
                this.f39478d = 1;
                if (k10.collect(c0567a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f39481a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f39482b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f39483c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f39020d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f39021e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f39022i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f39481a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f52740d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f52741e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f52742i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f39482b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f39842d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f39843e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f39844i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f39845o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f39846p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f39483c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ vn.i f39485e;

        c(vn.i iVar) {
            this.f39485e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, vn.i iVar) {
            Function0 function0 = wVar.f39466n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f39454b.getRoot();
            final w wVar = w.this;
            final vn.i iVar = this.f39485e;
            root.post(new Runnable() { // from class: np.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements vn.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f39487b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f39488a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f52740d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f52741e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f52742i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f39488a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f39487b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, vn.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f31765a;
        }

        @Override // vn.y
        public void a() {
            t.a aVar;
            vn.t tVar = w.this.f39455c;
            PreviewView previewviewSelfieCamera = w.this.f39454b.f42582r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f39488a[this.f39487b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f52713i;
                    } else {
                        throw new rr.p();
                    }
                } else {
                    aVar = t.a.f52712e;
                }
            } else {
                aVar = t.a.f52711d;
            }
            t.a aVar2 = aVar;
            vn.w0 w0Var = w.this.f39456d;
            final x5.d.a aVar3 = this.f39487b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: np.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (vn.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39489d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ vn.i f39490e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f39491i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f39492d;

            a(w wVar) {
                this.f39492d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(vn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f52758a)) {
                    Function1 function12 = this.f39492d.f39465m;
                    if (function12 != null) {
                        function12.invoke(new vn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f39492d.f39465m) != null) {
                    function1.invoke(new vn.u0());
                }
                return Unit.f31765a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(vn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f39490e = iVar;
            this.f39491i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f39490e, this.f39491i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f39489d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = vn.j.a(this.f39490e.c());
                a aVar = new a(this.f39491i);
                this.f39489d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39493d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ vn.i f39494e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0570a f39495i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f39496o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(vn.i iVar, x5.d.a.AbstractC0570a abstractC0570a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f39494e = iVar;
            this.f39495i = abstractC0570a;
            this.f39496o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f39494e, this.f39495i, this.f39496o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = xr.b.f();
            int i11 = this.f39493d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                vn.i iVar = this.f39494e;
                this.f39493d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0570a abstractC0570a = this.f39495i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0570a.c cVar = (x5.d.a.AbstractC0570a.c) abstractC0570a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f39496o;
            x5.d.a.AbstractC0570a abstractC0570a2 = this.f39495i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof vn.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0570a.c) abstractC0570a2).c().invoke();
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39497d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ vn.i f39498e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0570a f39499i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f39500d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f39501e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f39501e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                xr.b.f();
                if (this.f39500d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((vn.x) this.f39501e, x.e.f52761a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(vn.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f39502d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ vn.i f39503e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0570a f39504i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(vn.i iVar, x5.d.a.AbstractC0570a abstractC0570a, Continuation continuation) {
                super(2, continuation);
                this.f39503e = iVar;
                this.f39504i = abstractC0570a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f39503e, this.f39504i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = xr.b.f();
                int i11 = this.f39502d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    vn.i iVar = this.f39503e;
                    this.f39502d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0570a.g) this.f39504i).b().invoke(this.f39503e.b());
                return Unit.f31765a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(vn.i iVar, x5.d.a.AbstractC0570a abstractC0570a, Continuation continuation) {
            super(2, continuation);
            this.f39498e = iVar;
            this.f39499i = abstractC0570a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f39498e, this.f39499i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (ss.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (ps.g.g(r7, r1, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:15:0x004f, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = xr.b.f()
                int r1 = r6.f39497d
                r2 = 0
                r3 = 2
                r4 = 1
                if (r1 == 0) goto L1f
                if (r1 == r4) goto L1b
                if (r1 != r3) goto L13
                kotlin.c.b(r7)
                goto L50
            L13:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1b:
                kotlin.c.b(r7)
                goto L3a
            L1f:
                kotlin.c.b(r7)
                vn.i r7 = r6.f39498e
                ss.j0 r7 = r7.c()
                np.w$g$a r1 = new np.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = ss.g.H(r7, r1)
                r6.f39497d = r4
                java.lang.Object r7 = ss.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                ps.c1 r7 = ps.m0.c()
                np.w$g$b r1 = new np.w$g$b
                vn.i r4 = r6.f39498e
                np.x5$d$a$a r5 = r6.f39499i
                r1.<init>(r4, r5, r2)
                r6.f39497d = r3
                java.lang.Object r7 = ps.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f31765a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: np.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39505d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0570a f39506e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ vn.i f39507i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f39508o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0570a abstractC0570a, vn.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f39506e = abstractC0570a;
            this.f39507i = iVar;
            this.f39508o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f39506e, this.f39507i, this.f39508o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f39505d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0570a.i) this.f39506e).b();
                this.f39505d = 1;
                if (ps.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f39507i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f39508o.f39465m;
                if (function1 != null) {
                    function1.invoke(new vn.v0());
                }
                return Unit.f31765a;
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39509d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ vn.i f39510e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f39511i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0570a f39512o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f39513d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0570a f39514e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ vn.i f39515i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f39516o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0570a abstractC0570a, vn.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f39514e = abstractC0570a;
                this.f39515i = iVar;
                this.f39516o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f39514e, this.f39515i, this.f39516o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (ps.i0.a(r4, r6) == r0) goto L24;
             */
            /* JADX WARN: Code restructure failed: missing block: B:18:0x0051, code lost:
                if (r7 == r0) goto L24;
             */
            /* JADX WARN: Code restructure failed: missing block: B:19:0x0053, code lost:
                return r0;
             */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r7) {
                /*
                    r6 = this;
                    java.lang.Object r0 = xr.b.f()
                    int r1 = r6.f39513d
                    r2 = 2
                    r3 = 1
                    if (r1 == 0) goto L24
                    if (r1 == r3) goto L20
                    if (r1 != r2) goto L18
                    kotlin.c.b(r7)
                    kotlin.Result r7 = (kotlin.Result) r7
                    java.lang.Object r7 = r7.j()
                    goto L54
                L18:
                    java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r7.<init>(r0)
                    throw r7
                L20:
                    kotlin.c.b(r7)
                    goto L38
                L24:
                    kotlin.c.b(r7)
                    np.x5$d$a$a r7 = r6.f39514e
                    np.x5$d$a$a$b r7 = (np.x5.d.a.AbstractC0570a.b) r7
                    long r4 = r7.c()
                    r6.f39513d = r3
                    java.lang.Object r7 = ps.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    vn.i r7 = r6.f39515i
                    ss.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof vn.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f31765a
                    return r7
                L49:
                    vn.i r7 = r6.f39515i
                    r6.f39513d = r2
                    java.lang.Object r7 = r7.i(r6)
                    if (r7 != r0) goto L54
                L53:
                    return r0
                L54:
                    boolean r0 = kotlin.Result.h(r7)
                    if (r0 == 0) goto L5f
                    java.io.File r7 = (java.io.File) r7
                    r7.delete()
                L5f:
                    np.w r7 = r6.f39516o
                    kotlin.jvm.functions.Function1 r7 = np.w.z(r7)
                    if (r7 == 0) goto L6f
                    vn.v0 r0 = new vn.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f31765a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: np.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(vn.i iVar, w wVar, x5.d.a.AbstractC0570a abstractC0570a, Continuation continuation) {
            super(2, continuation);
            this.f39510e = iVar;
            this.f39511i = wVar;
            this.f39512o = abstractC0570a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f39510e, this.f39511i, this.f39512o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = xr.b.f();
            int i10 = this.f39509d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                vn.i iVar = this.f39510e;
                this.f39509d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f39511i;
            x5.d.a.AbstractC0570a abstractC0570a = this.f39512o;
            vn.i iVar2 = this.f39510e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f39464l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = ps.i.d(wVar.f39458f, ps.m0.b(), null, new a(abstractC0570a, iVar2, wVar, null), 2, null);
                wVar.f39464l = d10;
            }
            x5.d.a.AbstractC0570a abstractC0570a2 = this.f39512o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0570a.b) abstractC0570a2).d().invoke(e10);
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39517d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f39519i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ vn.i f39520o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0570a f39521p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, vn.i iVar, x5.d.a.AbstractC0570a abstractC0570a, Continuation continuation) {
            super(2, continuation);
            this.f39519i = aVar;
            this.f39520o = iVar;
            this.f39521p = abstractC0570a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f39519i, this.f39520o, this.f39521p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (ps.i0.a(1000, r5) == r0) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:16:0x004c, code lost:
            if (r6 == r0) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:17:0x004e, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = xr.b.f()
                int r1 = r5.f39517d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L24
                if (r1 == r3) goto L20
                if (r1 != r2) goto L18
                kotlin.c.b(r6)
                kotlin.Result r6 = (kotlin.Result) r6
                java.lang.Object r6 = r6.j()
                goto L4f
            L18:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L20:
                kotlin.c.b(r6)
                goto L44
            L24:
                kotlin.c.b(r6)
                np.w r6 = np.w.this
                np.w.I(r6, r3)
                np.x5$d$a r6 = r5.f39519i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                np.w r6 = np.w.this
                np.w.G(r6, r3)
                r5.f39517d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ps.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                vn.i r6 = r5.f39520o
                r5.f39517d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                np.x5$d$a$a r0 = r5.f39521p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                np.x5$d$a$a$d r0 = (np.x5.d.a.AbstractC0570a.C0572d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                np.x5$d$a$a r0 = r5.f39521p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                np.x5$d$a$a$d r0 = (np.x5.d.a.AbstractC0570a.C0572d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                np.x5$d$a r6 = r5.f39519i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                np.w r6 = np.w.this
                np.w.G(r6, r0)
            L8b:
                np.w r6 = np.w.this
                np.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: np.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public w(op.c binding, vn.t cameraPreview, vn.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f39454b = binding;
        this.f39455c = cameraPreview;
        this.f39456d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f39457e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f39458f = androidx.lifecycle.p.a(sp.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<xn.l> a10 = xn.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (xn.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f39462j = CollectionsKt.e0(arrayList);
        this.f39477y = ss.l0.a(null);
        ConstraintLayout root = this.f39454b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
        ps.i.d(this.f39458f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: np.k
            @Override // java.lang.Runnable
            public final void run() {
                w.K(textView);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void K(TextView textView) {
        textView.setAlpha(0.8f);
        textView.setVisibility(8);
    }

    private final void L(final View view, final Function0 function0, final Function0 function02) {
        view.setVisibility(0);
        view.setAlpha(0.0f);
        ViewPropertyAnimator animate = view.animate();
        animate.setStartDelay(0L);
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: np.d
            @Override // java.lang.Runnable
            public final void run() {
                w.M(Function0.this, view, function02);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void M(Function0 function0, final View view, final Function0 function02) {
        function0.invoke();
        ViewPropertyAnimator animate = view.animate();
        animate.setStartDelay(1000L);
        animate.withStartAction(new Runnable() { // from class: np.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: np.n
            @Override // java.lang.Runnable
            public final void run() {
                w.O(view);
            }
        }).alpha(0.0f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N(Function0 function0) {
        function0.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void O(View view) {
        view.setVisibility(4);
    }

    private final vn.i Q(x5.d.a aVar) {
        vn.i a10;
        xn.n nVar;
        vn.i iVar = this.f39459g;
        if (iVar != null && this.f39460h == aVar.g()) {
            return iVar;
        }
        Context context = this.f39454b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f39454b.f42569e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != bo.a.f7163i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f39482b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = xn.n.f55227i;
                    } else {
                        throw new rr.p();
                    }
                } else {
                    nVar = xn.n.f55226e;
                }
            } else {
                nVar = xn.n.f55225d;
            }
            xn.m b10 = xn.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new vn.s0());
                a10 = new vn.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                vn.w0 w0Var = this.f39456d;
                bo.a valueOf = bo.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new xn.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            vn.t tVar = this.f39455c;
            PreviewView previewviewSelfieCamera = this.f39454b.f42582r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f39454b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        sp.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f39459g = a10;
        this.f39460h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(vn.i iVar) {
        Job d10;
        Job job = this.f39463k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f39454b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = ps.i.d(androidx.lifecycle.p.a(sp.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f39463k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f39454b.f42574j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f39474v) {
                this.f39474v = true;
                this.f39475w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: np.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f39475w) {
            this.f39474v = false;
            this.f39475w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: np.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f39474v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f39475w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        vn.i iVar = this.f39459g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f52740d) {
                    this.f39454b.f42586v.setVisibility(0);
                    Context context = this.f39454b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = sp.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f52740d) {
                this.f39454b.f42586v.setVisibility(8);
                Context context2 = this.f39454b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = sp.f.a(context2);
                if (a11 != null && (window = a11.getWindow()) != null) {
                    WindowManager.LayoutParams attributes2 = window.getAttributes();
                    attributes2.screenBrightness = -1.0f;
                    window.setAttributes(attributes2);
                }
            } else {
                iVar.a(false);
            }
        }
    }

    private final void W(String str) {
        op.c cVar = this.f39454b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f42575k.setText(str);
            if (cVar.f42575k.getAlpha() != 1.0f && !this.f39472t) {
                this.f39472t = true;
                this.f39471s = false;
                cVar.f42575k.animate().cancel();
                cVar.f42575k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: np.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f42575k.getAlpha() == 0.0f || this.f39471s) {
        } else {
            this.f39472t = false;
            this.f39471s = true;
            cVar.f42575k.animate().cancel();
            cVar.f42575k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: np.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f39471s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f39472t = false;
    }

    private final void Z(String str) {
        op.c cVar = this.f39454b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f42576l.setText(str);
            if (cVar.f42576l.getAlpha() != 1.0f && !this.f39470r) {
                this.f39470r = true;
                cVar.f42576l.animate().cancel();
                cVar.f42576l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: np.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f42576l.getAlpha() == 0.0f || this.f39469q) {
        } else {
            this.f39469q = true;
            cVar.f42576l.animate().cancel();
            cVar.f42576l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: np.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f39469q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f39470r = false;
    }

    private final void c0(boolean z10) {
        if (this.f39462j.size() >= 2 && z10) {
            this.f39454b.f42579o.setVisibility(0);
        } else {
            this.f39454b.f42579o.setVisibility(4);
        }
    }

    private final void d0(TextView textView, String str, int i10) {
        if (str != null && !StringsKt.k0(str)) {
            textView.setText(str);
            textView.setVisibility(0);
            return;
        }
        textView.setVisibility(i10);
    }

    static /* synthetic */ void e0(w wVar, TextView textView, String str, int i10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            i10 = 8;
        }
        wVar.d0(textView, str, i10);
    }

    private static final void g0(op.c cVar, w wVar, x5.d.a aVar, vn.i iVar, x5.d.a.AbstractC0570a abstractC0570a) {
        cVar.f42568d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0570a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f39462j.get((wVar.f39462j.indexOf(aVar.g()) + 1) % wVar.f39462j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, op.c cVar) {
        wVar.f39468p = false;
        cVar.f42570f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, vn.i iVar) {
        vn.w0 w0Var = wVar.f39456d;
        PreviewView previewviewSelfieCamera = wVar.f39454b.f42582r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        yn.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(op.c cVar) {
        cVar.f42587w.setIntensity(0.0f);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0570a abstractC0570a) {
        wVar.f39467o = false;
        x5.d.a aVar = wVar.f39461i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0570a.h) abstractC0570a).c().invoke();
        }
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(op.c cVar, w wVar, x5.d.a aVar, vn.i iVar, x5.d.a.AbstractC0570a abstractC0570a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0570a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0570a abstractC0570a, View view) {
        ((x5.d.a.AbstractC0570a.e) abstractC0570a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, vn.i iVar, x5.d.a.AbstractC0570a abstractC0570a) {
        ps.i.d(wVar.f39458f, ps.m0.c(), null, new j(aVar, iVar, abstractC0570a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f39483c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f19654p;
                        }
                        throw new rr.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f19652i;
                    } else {
                        return SelfieOverlayView.e.f19651e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f19651e;
                } else {
                    return SelfieOverlayView.e.f19652i;
                }
            }
            return SelfieOverlayView.e.f19650d;
        }
        return SelfieOverlayView.e.f19653o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f39467o) {
            return;
        }
        Z(aVar.h());
        W(aVar.f());
    }

    /* JADX WARN: Removed duplicated region for block: B:106:0x0312  */
    /* JADX WARN: Removed duplicated region for block: B:109:0x031d  */
    /* JADX WARN: Removed duplicated region for block: B:118:0x0351  */
    /* JADX WARN: Removed duplicated region for block: B:119:0x0360  */
    /* JADX WARN: Removed duplicated region for block: B:122:0x037b A[ADDED_TO_REGION] */
    @Override // en.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(np.x5.d.a r21, en.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: np.w.a(np.x5$d$a, en.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
