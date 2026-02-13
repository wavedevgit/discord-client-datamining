package wp;

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
import fo.t;
import fo.v;
import fo.x;
import fo.z;
import ho.g;
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
import wp.a1;
import wp.w;
import wp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements gn.k {

    /* renamed from: b  reason: collision with root package name */
    private final xp.c f53973b;

    /* renamed from: c  reason: collision with root package name */
    private final fo.t f53974c;

    /* renamed from: d  reason: collision with root package name */
    private final fo.w0 f53975d;

    /* renamed from: e  reason: collision with root package name */
    private final int f53976e;

    /* renamed from: f  reason: collision with root package name */
    private final androidx.lifecycle.j f53977f;

    /* renamed from: g  reason: collision with root package name */
    private fo.i f53978g;

    /* renamed from: h  reason: collision with root package name */
    private v.b f53979h;

    /* renamed from: i  reason: collision with root package name */
    private x5.d.a f53980i;

    /* renamed from: j  reason: collision with root package name */
    private List f53981j;

    /* renamed from: k  reason: collision with root package name */
    private Job f53982k;

    /* renamed from: l  reason: collision with root package name */
    private Job f53983l;

    /* renamed from: m  reason: collision with root package name */
    private Function1 f53984m;

    /* renamed from: n  reason: collision with root package name */
    private Function0 f53985n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f53986o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f53987p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53988q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f53989r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f53990s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f53991t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f53992u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f53993v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f53994w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f53995x;

    /* renamed from: y  reason: collision with root package name */
    private final MutableStateFlow f53996y;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f53997d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: wp.w$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0746a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f53999d;

            C0746a(w wVar) {
                this.f53999d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(String str, Continuation continuation) {
                w wVar = this.f53999d;
                TextView realTimeHint = wVar.f53973b.f55676t;
                Intrinsics.checkNotNullExpressionValue(realTimeHint, "realTimeHint");
                w.e0(wVar, realTimeHint, str, 0, 2, null);
                return Unit.f32556a;
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
            Object f10 = gs.b.f();
            int i10 = this.f53997d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow k10 = bt.g.k(w.this.f53996y, 300L);
                C0746a c0746a = new C0746a(w.this);
                this.f53997d = 1;
                if (k10.collect(c0746a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f54000a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f54001b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f54002c;

        static {
            int[] iArr = new int[a1.b.values().length];
            try {
                iArr[a1.b.f53539d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a1.b.f53540e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a1.b.f53541i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f54000a = iArr;
            int[] iArr2 = new int[v.b.values().length];
            try {
                iArr2[v.b.f24136d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[v.b.f24137e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[v.b.f24138i.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            f54001b = iArr2;
            int[] iArr3 = new int[x5.d.a.b.values().length];
            try {
                iArr3[x5.d.a.b.f54361d.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr3[x5.d.a.b.f54362e.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr3[x5.d.a.b.f54363i.ordinal()] = 3;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[x5.d.a.b.f54364o.ordinal()] = 4;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[x5.d.a.b.f54365p.ordinal()] = 5;
            } catch (NoSuchFieldError unused11) {
            }
            f54002c = iArr3;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements DefaultLifecycleObserver {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f54004e;

        c(fo.i iVar) {
            this.f54004e = iVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(w wVar, fo.i iVar) {
            Function0 function0 = wVar.f53985n;
            if (function0 != null) {
                function0.invoke();
            }
            wVar.R(iVar);
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            ConstraintLayout root = w.this.f53973b.getRoot();
            final w wVar = w.this;
            final fo.i iVar = this.f54004e;
            root.post(new Runnable() { // from class: wp.x
                @Override // java.lang.Runnable
                public final void run() {
                    w.c.b(w.this, iVar);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements fo.y {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ x5.d.a f54006b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class a {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f54007a;

            static {
                int[] iArr = new int[v.b.values().length];
                try {
                    iArr[v.b.f24136d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[v.b.f24137e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[v.b.f24138i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f54007a = iArr;
            }
        }

        d(x5.d.a aVar) {
            this.f54006b = aVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit c(x5.d.a aVar, fo.k it) {
            Intrinsics.checkNotNullParameter(it, "it");
            aVar.l().invoke(it);
            return Unit.f32556a;
        }

        @Override // fo.y
        public void a() {
            t.a aVar;
            fo.t tVar = w.this.f53974c;
            PreviewView previewviewSelfieCamera = w.this.f53973b.f55674r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            int i10 = a.f54007a[this.f54006b.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        aVar = t.a.f24109i;
                    } else {
                        throw new as.p();
                    }
                } else {
                    aVar = t.a.f24108e;
                }
            } else {
                aVar = t.a.f24107d;
            }
            t.a aVar2 = aVar;
            fo.w0 w0Var = w.this.f53975d;
            final x5.d.a aVar3 = this.f54006b;
            tVar.f(previewviewSelfieCamera, aVar2, w0Var, true, new Function1() { // from class: wp.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit c10;
                    c10 = w.d.c(x5.d.a.this, (fo.k) obj);
                    return c10;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54008d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f54009e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f54010i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ w f54011d;

            a(w wVar) {
                this.f54011d = wVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(fo.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f24154a)) {
                    Function1 function12 = this.f54011d.f53984m;
                    if (function12 != null) {
                        function12.invoke(new fo.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f54011d.f53984m) != null) {
                    function1.invoke(new fo.u0());
                }
                return Unit.f32556a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(fo.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f54009e = iVar;
            this.f54010i = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f54009e, this.f54010i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f54008d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = fo.j.a(this.f54009e.c());
                a aVar = new a(this.f54010i);
                this.f54008d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54012d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f54013e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f54014i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a f54015o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, x5.d.a aVar, Continuation continuation) {
            super(2, continuation);
            this.f54013e = iVar;
            this.f54014i = abstractC0749a;
            this.f54015o = aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f54013e, this.f54014i, this.f54015o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = gs.b.f();
            int i11 = this.f54012d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.i iVar = this.f54013e;
                this.f54012d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            x5.d.a.AbstractC0749a abstractC0749a = this.f54014i;
            if (Result.h(i10)) {
                x5.d.a.AbstractC0749a.c cVar = (x5.d.a.AbstractC0749a.c) abstractC0749a;
                cVar.b().invoke((File) i10);
                cVar.c().invoke();
            }
            x5.d.a aVar = this.f54015o;
            x5.d.a.AbstractC0749a abstractC0749a2 = this.f54014i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof fo.q0)) {
                aVar.l().invoke(e10);
                ((x5.d.a.AbstractC0749a.c) abstractC0749a2).c().invoke();
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54016d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f54017e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f54018i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f54019d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f54020e;

            a(Continuation continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                a aVar = new a(continuation);
                aVar.f54020e = obj;
                return aVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                gs.b.f();
                if (this.f54019d == 0) {
                    kotlin.c.b(obj);
                    return kotlin.coroutines.jvm.internal.b.a(!Intrinsics.areEqual((fo.x) this.f54020e, x.e.f24157a));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(fo.x xVar, Continuation continuation) {
                return ((a) create(xVar, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f54021d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ fo.i f54022e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0749a f54023i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
                super(2, continuation);
                this.f54022e = iVar;
                this.f54023i = abstractC0749a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f54022e, this.f54023i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object i10;
                Object f10 = gs.b.f();
                int i11 = this.f54021d;
                if (i11 != 0) {
                    if (i11 == 1) {
                        kotlin.c.b(obj);
                        i10 = ((Result) obj).j();
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    fo.i iVar = this.f54022e;
                    this.f54021d = 1;
                    i10 = iVar.i(this);
                    if (i10 == f10) {
                        return f10;
                    }
                }
                if (Result.h(i10)) {
                    ((File) i10).delete();
                }
                ((x5.d.a.AbstractC0749a.g) this.f54023i).b().invoke(this.f54022e.b());
                return Unit.f32556a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
            super(2, continuation);
            this.f54017e = iVar;
            this.f54018i = abstractC0749a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f54017e, this.f54018i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0037, code lost:
            if (bt.g.h(r7, r6) == r0) goto L14;
         */
        /* JADX WARN: Code restructure failed: missing block: B:14:0x004d, code lost:
            if (ys.g.g(r7, r1, r6) == r0) goto L14;
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
                java.lang.Object r0 = gs.b.f()
                int r1 = r6.f54016d
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
                fo.i r7 = r6.f54017e
                bt.j0 r7 = r7.c()
                wp.w$g$a r1 = new wp.w$g$a
                r1.<init>(r2)
                kotlinx.coroutines.flow.Flow r7 = bt.g.H(r7, r1)
                r6.f54016d = r4
                java.lang.Object r7 = bt.g.h(r7, r6)
                if (r7 != r0) goto L3a
                goto L4f
            L3a:
                ys.c1 r7 = ys.m0.c()
                wp.w$g$b r1 = new wp.w$g$b
                fo.i r4 = r6.f54017e
                wp.x5$d$a$a r5 = r6.f54018i
                r1.<init>(r4, r5, r2)
                r6.f54016d = r3
                java.lang.Object r7 = ys.g.g(r7, r1, r6)
                if (r7 != r0) goto L50
            L4f:
                return r0
            L50:
                kotlin.Unit r7 = kotlin.Unit.f32556a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: wp.w.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54024d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f54025e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ fo.i f54026i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ w f54027o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(x5.d.a.AbstractC0749a abstractC0749a, fo.i iVar, w wVar, Continuation continuation) {
            super(2, continuation);
            this.f54025e = abstractC0749a;
            this.f54026i = iVar;
            this.f54027o = wVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f54025e, this.f54026i, this.f54027o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f54024d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long b10 = ((x5.d.a.AbstractC0749a.i) this.f54025e).b();
                this.f54024d = 1;
                if (ys.i0.a(b10, this) == f10) {
                    return f10;
                }
            }
            if (!(this.f54026i.c().getValue() instanceof x.a)) {
                Function1 function1 = this.f54027o.f53984m;
                if (function1 != null) {
                    function1.invoke(new fo.v0());
                }
                return Unit.f32556a;
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54028d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ fo.i f54029e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ w f54030i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f54031o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f54032d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ x5.d.a.AbstractC0749a f54033e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ fo.i f54034i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ w f54035o;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(x5.d.a.AbstractC0749a abstractC0749a, fo.i iVar, w wVar, Continuation continuation) {
                super(2, continuation);
                this.f54033e = abstractC0749a;
                this.f54034i = iVar;
                this.f54035o = wVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f54033e, this.f54034i, this.f54035o, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x0035, code lost:
                if (ys.i0.a(r4, r6) == r0) goto L24;
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
                    java.lang.Object r0 = gs.b.f()
                    int r1 = r6.f54032d
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
                    wp.x5$d$a$a r7 = r6.f54033e
                    wp.x5$d$a$a$b r7 = (wp.x5.d.a.AbstractC0749a.b) r7
                    long r4 = r7.c()
                    r6.f54032d = r3
                    java.lang.Object r7 = ys.i0.a(r4, r6)
                    if (r7 != r0) goto L38
                    goto L53
                L38:
                    fo.i r7 = r6.f54034i
                    bt.j0 r7 = r7.c()
                    java.lang.Object r7 = r7.getValue()
                    boolean r7 = r7 instanceof fo.x.a
                    if (r7 == 0) goto L49
                    kotlin.Unit r7 = kotlin.Unit.f32556a
                    return r7
                L49:
                    fo.i r7 = r6.f54034i
                    r6.f54032d = r2
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
                    wp.w r7 = r6.f54035o
                    kotlin.jvm.functions.Function1 r7 = wp.w.z(r7)
                    if (r7 == 0) goto L6f
                    fo.v0 r0 = new fo.v0
                    r0.<init>()
                    r7.invoke(r0)
                L6f:
                    kotlin.Unit r7 = kotlin.Unit.f32556a
                    return r7
                */
                throw new UnsupportedOperationException("Method not decompiled: wp.w.i.a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(fo.i iVar, w wVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
            super(2, continuation);
            this.f54029e = iVar;
            this.f54030i = wVar;
            this.f54031o = abstractC0749a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f54029e, this.f54030i, this.f54031o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Job d10;
            Object f10 = gs.b.f();
            int i10 = this.f54028d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                fo.i iVar = this.f54029e;
                this.f54028d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            w wVar = this.f54030i;
            x5.d.a.AbstractC0749a abstractC0749a = this.f54031o;
            fo.i iVar2 = this.f54029e;
            if (Result.h(g10) && ((Boolean) g10).booleanValue()) {
                Job job = wVar.f53983l;
                if (job != null) {
                    Job.a.a(job, null, 1, null);
                }
                d10 = ys.i.d(wVar.f53977f, ys.m0.b(), null, new a(abstractC0749a, iVar2, wVar, null), 2, null);
                wVar.f53983l = d10;
            }
            x5.d.a.AbstractC0749a abstractC0749a2 = this.f54031o;
            Throwable e10 = Result.e(g10);
            if (e10 != null) {
                ((x5.d.a.AbstractC0749a.b) abstractC0749a2).d().invoke(e10);
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f54036d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ x5.d.a f54038i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ fo.i f54039o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ x5.d.a.AbstractC0749a f54040p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, Continuation continuation) {
            super(2, continuation);
            this.f54038i = aVar;
            this.f54039o = iVar;
            this.f54040p = abstractC0749a;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new j(this.f54038i, this.f54039o, this.f54040p, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:13:0x0041, code lost:
            if (ys.i0.a(1000, r5) == r0) goto L23;
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
                java.lang.Object r0 = gs.b.f()
                int r1 = r5.f54036d
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
                wp.w r6 = wp.w.this
                wp.w.I(r6, r3)
                wp.x5$d$a r6 = r5.f54038i
                boolean r6 = r6.B()
                if (r6 == 0) goto L44
                wp.w r6 = wp.w.this
                wp.w.G(r6, r3)
                r5.f54036d = r3
                r3 = 1000(0x3e8, double:4.94E-321)
                java.lang.Object r6 = ys.i0.a(r3, r5)
                if (r6 != r0) goto L44
                goto L4e
            L44:
                fo.i r6 = r5.f54039o
                r5.f54036d = r2
                java.lang.Object r6 = r6.j(r5)
                if (r6 != r0) goto L4f
            L4e:
                return r0
            L4f:
                wp.x5$d$a$a r0 = r5.f54040p
                boolean r1 = kotlin.Result.h(r6)
                if (r1 == 0) goto L6c
                r1 = r6
                java.io.File r1 = (java.io.File) r1
                wp.x5$d$a$a$d r0 = (wp.x5.d.a.AbstractC0749a.C0751d) r0
                kotlin.jvm.functions.Function1 r0 = r0.d()
                java.lang.String r1 = r1.getAbsolutePath()
                java.lang.String r2 = "getAbsolutePath(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
                r0.invoke(r1)
            L6c:
                wp.x5$d$a$a r0 = r5.f54040p
                java.lang.Throwable r6 = kotlin.Result.e(r6)
                if (r6 == 0) goto L7d
                wp.x5$d$a$a$d r0 = (wp.x5.d.a.AbstractC0749a.C0751d) r0
                kotlin.jvm.functions.Function1 r0 = r0.c()
                r0.invoke(r6)
            L7d:
                wp.x5$d$a r6 = r5.f54038i
                boolean r6 = r6.B()
                r0 = 0
                if (r6 == 0) goto L8b
                wp.w r6 = wp.w.this
                wp.w.G(r6, r0)
            L8b:
                wp.w r6 = wp.w.this
                wp.w.I(r6, r0)
                kotlin.Unit r6 = kotlin.Unit.f32556a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: wp.w.j.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((j) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public w(xp.c binding, fo.t cameraPreview, fo.w0 selfieDirectionFeed) {
        int i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraPreview, "cameraPreview");
        Intrinsics.checkNotNullParameter(selfieDirectionFeed, "selfieDirectionFeed");
        this.f53973b = binding;
        this.f53974c = cameraPreview;
        this.f53975d = selfieDirectionFeed;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        this.f53976e = i10;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f53977f = androidx.lifecycle.p.a(bq.f.i(context));
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        List<ho.l> a10 = ho.j.a(context2);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(a10, 10));
        for (ho.l lVar : a10) {
            arrayList.add(lVar.c());
        }
        this.f53981j = CollectionsKt.e0(arrayList);
        this.f53996y = bt.l0.a(null);
        ConstraintLayout root = this.f53973b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
        ys.i.d(this.f53977f, null, null, new a(null), 3, null);
    }

    private final void J(final TextView textView) {
        textView.setVisibility(0);
        textView.setAlpha(0.8f);
        ViewPropertyAnimator animate = textView.animate();
        animate.setStartDelay(700L);
        animate.setDuration(200L).alpha(0.0f).withEndAction(new Runnable() { // from class: wp.k
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
        animate.alpha(1.0f).withEndAction(new Runnable() { // from class: wp.d
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
        animate.withStartAction(new Runnable() { // from class: wp.m
            @Override // java.lang.Runnable
            public final void run() {
                w.N(Function0.this);
            }
        }).withEndAction(new Runnable() { // from class: wp.n
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

    private final fo.i Q(x5.d.a aVar) {
        fo.i a10;
        ho.n nVar;
        fo.i iVar = this.f53978g;
        if (iVar != null && this.f53979h == aVar.g()) {
            return iVar;
        }
        Context context = this.f53973b.getRoot().getContext();
        Camera2PreviewView camera2Preview = this.f53973b.f55661e;
        Intrinsics.checkNotNullExpressionValue(camera2Preview, "camera2Preview");
        if (aVar.x() != lo.a.f36519i) {
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            int i10 = b.f54001b[aVar.g().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        nVar = ho.n.f28184i;
                    } else {
                        throw new as.p();
                    }
                } else {
                    nVar = ho.n.f28183e;
                }
            } else {
                nVar = ho.n.f28182d;
            }
            ho.m b10 = ho.j.b(applicationContext, nVar);
            if (b10 == null) {
                aVar.l().invoke(new fo.s0());
                a10 = new fo.r0(camera2Preview);
            } else {
                g.a c10 = aVar.c();
                fo.w0 w0Var = this.f53975d;
                lo.a valueOf = lo.a.valueOf(aVar.x().toString());
                aVar.y();
                a10 = new ho.a(c10.a(b10, camera2Preview, w0Var, valueOf, null, aVar.z()));
            }
        } else {
            z.a d10 = aVar.d();
            fo.t tVar = this.f53974c;
            PreviewView previewviewSelfieCamera = this.f53973b.f55674r;
            Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
            a10 = d10.a(tVar, previewviewSelfieCamera, new d(aVar));
        }
        Context context2 = this.f53973b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        bq.f.i(context2).getLifecycle().a(new c(a10));
        R(a10);
        a10.d();
        this.f53978g = a10;
        this.f53979h = aVar.g();
        return a10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void R(fo.i iVar) {
        Job d10;
        Job job = this.f53982k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f53973b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = ys.i.d(androidx.lifecycle.p.a(bq.f.i(context)), null, null, new e(iVar, this, null), 3, null);
        this.f53982k = d10;
    }

    private final void S(boolean z10) {
        final FrameLayout finalizingCover = this.f53973b.f55666j;
        Intrinsics.checkNotNullExpressionValue(finalizingCover, "finalizingCover");
        if (z10) {
            if (finalizingCover.getVisibility() != 0 && !this.f53993v) {
                this.f53993v = true;
                this.f53994w = false;
                finalizingCover.setVisibility(0);
                finalizingCover.setAlpha(0.0f);
                finalizingCover.animate().cancel();
                finalizingCover.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: wp.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.T(w.this);
                    }
                });
            }
        } else if (finalizingCover.getVisibility() != 8 && !this.f53994w) {
            this.f53993v = false;
            this.f53994w = true;
            finalizingCover.animate().cancel();
            finalizingCover.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: wp.f
                @Override // java.lang.Runnable
                public final void run() {
                    w.U(w.this, finalizingCover);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void T(w wVar) {
        wVar.f53993v = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void U(w wVar, FrameLayout frameLayout) {
        wVar.f53994w = false;
        frameLayout.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void V(boolean z10) {
        Window window;
        Window window2;
        fo.i iVar = this.f53978g;
        if (iVar != null) {
            v.b b10 = iVar.b().b();
            if (z10) {
                if (b10 == v.b.f24136d) {
                    this.f53973b.f55678v.setVisibility(0);
                    Context context = this.f53973b.getRoot().getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    AppCompatActivity a10 = bq.f.a(context);
                    if (a10 != null && (window2 = a10.getWindow()) != null) {
                        WindowManager.LayoutParams attributes = window2.getAttributes();
                        attributes.screenBrightness = 1.0f;
                        window2.setAttributes(attributes);
                        return;
                    }
                    return;
                }
                iVar.a(true);
            } else if (b10 == v.b.f24136d) {
                this.f53973b.f55678v.setVisibility(8);
                Context context2 = this.f53973b.getRoot().getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                AppCompatActivity a11 = bq.f.a(context2);
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
        xp.c cVar = this.f53973b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f55667k.setText(str);
            if (cVar.f55667k.getAlpha() != 1.0f && !this.f53991t) {
                this.f53991t = true;
                this.f53990s = false;
                cVar.f55667k.animate().cancel();
                cVar.f55667k.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: wp.h
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.Y(w.this);
                    }
                });
            }
        } else if (cVar.f55667k.getAlpha() == 0.0f || this.f53990s) {
        } else {
            this.f53991t = false;
            this.f53990s = true;
            cVar.f55667k.animate().cancel();
            cVar.f55667k.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: wp.g
                @Override // java.lang.Runnable
                public final void run() {
                    w.X(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void X(w wVar) {
        wVar.f53990s = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void Y(w wVar) {
        wVar.f53991t = false;
    }

    private final void Z(String str) {
        xp.c cVar = this.f53973b;
        if (str != null && !StringsKt.k0(str)) {
            cVar.f55668l.setText(str);
            if (cVar.f55668l.getAlpha() != 1.0f && !this.f53989r) {
                this.f53989r = true;
                cVar.f55668l.animate().cancel();
                cVar.f55668l.animate().alpha(1.0f).withEndAction(new Runnable() { // from class: wp.j
                    @Override // java.lang.Runnable
                    public final void run() {
                        w.b0(w.this);
                    }
                });
            }
        } else if (cVar.f55668l.getAlpha() == 0.0f || this.f53988q) {
        } else {
            this.f53988q = true;
            cVar.f55668l.animate().cancel();
            cVar.f55668l.animate().alpha(0.0f).withEndAction(new Runnable() { // from class: wp.i
                @Override // java.lang.Runnable
                public final void run() {
                    w.a0(w.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void a0(w wVar) {
        wVar.f53988q = false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b0(w wVar) {
        wVar.f53989r = false;
    }

    private final void c0(boolean z10) {
        if (this.f53981j.size() >= 2 && z10) {
            this.f53973b.f55671o.setVisibility(0);
        } else {
            this.f53973b.f55671o.setVisibility(4);
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

    private static final void g0(xp.c cVar, w wVar, x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a) {
        cVar.f55660d.setEnabled(false);
        t0(wVar, aVar, iVar, abstractC0749a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h0(w wVar, x5.d.a aVar, View view) {
        aVar.m().invoke(wVar.f53981j.get((wVar.f53981j.indexOf(aVar.g()) + 1) % wVar.f53981j.size()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(x5.d.a aVar) {
        aVar.k().invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(x5.d.a aVar) {
        aVar.n().invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k0(w wVar, xp.c cVar) {
        wVar.f53987p = false;
        cVar.f55662f.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(w wVar, fo.i iVar) {
        fo.w0 w0Var = wVar.f53975d;
        PreviewView previewviewSelfieCamera = wVar.f53973b.f55674r;
        Intrinsics.checkNotNullExpressionValue(previewviewSelfieCamera, "previewviewSelfieCamera");
        io.b.a(w0Var, iVar, previewviewSelfieCamera);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(x5.d.a aVar, View view) {
        aVar.o().invoke(Boolean.valueOf(!aVar.B()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n0(xp.c cVar) {
        cVar.f55679w.setIntensity(0.0f);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o0(w wVar, x5.d.a.AbstractC0749a abstractC0749a) {
        wVar.f53986o = false;
        x5.d.a aVar = wVar.f53980i;
        if (aVar != null) {
            wVar.v0(aVar);
            ((x5.d.a.AbstractC0749a.h) abstractC0749a).c().invoke();
        }
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p0() {
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q0() {
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(xp.c cVar, w wVar, x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a, View view) {
        g0(cVar, wVar, aVar, iVar, abstractC0749a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(x5.d.a.AbstractC0749a abstractC0749a, View view) {
        ((x5.d.a.AbstractC0749a.e) abstractC0749a).b().invoke();
    }

    private static final void t0(w wVar, x5.d.a aVar, fo.i iVar, x5.d.a.AbstractC0749a abstractC0749a) {
        ys.i.d(wVar.f53977f, ys.m0.c(), null, new j(aVar, iVar, abstractC0749a, null), 2, null);
    }

    private final SelfieOverlayView.e u0(x5.d.a.b bVar, boolean z10) {
        int i10 = b.f54002c[bVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return SelfieOverlayView.e.f20535p;
                        }
                        throw new as.p();
                    } else if (z10) {
                        return SelfieOverlayView.e.f20533i;
                    } else {
                        return SelfieOverlayView.e.f20532e;
                    }
                } else if (z10) {
                    return SelfieOverlayView.e.f20532e;
                } else {
                    return SelfieOverlayView.e.f20533i;
                }
            }
            return SelfieOverlayView.e.f20531d;
        }
        return SelfieOverlayView.e.f20534o;
    }

    private final void v0(x5.d.a aVar) {
        if (this.f53986o) {
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
    @Override // gn.k
    /* renamed from: f0 */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(wp.x5.d.a r21, gn.a0 r22) {
        /*
            Method dump skipped, instructions count: 918
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: wp.w.a(wp.x5$d$a, gn.a0):void");
    }

    private final void P(StepStyles.SelfieStepStyle selfieStepStyle) {
    }
}
