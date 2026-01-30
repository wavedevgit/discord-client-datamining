package ao;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.InsetDrawable;
import android.os.Build;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import android.widget.CompoundButton;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import ao.c4;
import ao.f5;
import ao.n1;
import ao.o;
import com.airbnb.lottie.LottieAnimationView;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import java.io.File;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import mn.t0;
import mn.x;
import xp.m5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements vm.k {

    /* renamed from: o  reason: collision with root package name */
    public static final b f6370o = new b(null);

    /* renamed from: p  reason: collision with root package name */
    private static final int f6371p;

    /* renamed from: b  reason: collision with root package name */
    private final fo.b f6372b;

    /* renamed from: c  reason: collision with root package name */
    private final mn.i f6373c;

    /* renamed from: d  reason: collision with root package name */
    private final mn.f0 f6374d;

    /* renamed from: e  reason: collision with root package name */
    private int f6375e;

    /* renamed from: f  reason: collision with root package name */
    private Job f6376f;

    /* renamed from: g  reason: collision with root package name */
    private View f6377g;

    /* renamed from: h  reason: collision with root package name */
    private Job f6378h;

    /* renamed from: i  reason: collision with root package name */
    private Function1 f6379i;

    /* renamed from: j  reason: collision with root package name */
    private Function0 f6380j;

    /* renamed from: k  reason: collision with root package name */
    private Job f6381k;

    /* renamed from: l  reason: collision with root package name */
    private Integer f6382l;

    /* renamed from: m  reason: collision with root package name */
    private final eo.g f6383m;

    /* renamed from: n  reason: collision with root package name */
    private View f6384n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements DefaultLifecycleObserver {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(o oVar) {
            Function0 function0 = oVar.f6380j;
            if (function0 != null) {
                function0.invoke();
            }
            oVar.x();
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onResume(LifecycleOwner owner) {
            Intrinsics.checkNotNullParameter(owner, "owner");
            FrameLayout root = o.this.f6372b.getRoot();
            final o oVar = o.this;
            root.post(new Runnable() { // from class: ao.n
                @Override // java.lang.Runnable
                public final void run() {
                    o.a.b(o.this);
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f6386a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f6387b;

        static {
            int[] iArr = new int[f5.b.a.values().length];
            try {
                iArr[f5.b.a.f5965d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[f5.b.a.f5966e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[f5.b.a.f5967i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f6386a = iArr;
            int[] iArr2 = new int[c4.e.values().length];
            try {
                iArr2[c4.e.f5836o.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[c4.e.f5838q.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr2[c4.e.f5840s.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr2[c4.e.f5837p.ordinal()] = 4;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[c4.e.f5839r.ordinal()] = 5;
            } catch (NoSuchFieldError unused8) {
            }
            f6387b = iArr2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6388d;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ o f6390d;

            a(o oVar) {
                this.f6390d = oVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(mn.x xVar, Continuation continuation) {
                Function1 function1;
                if (Intrinsics.areEqual(xVar, x.b.f39353a)) {
                    Function1 function12 = this.f6390d.f6379i;
                    if (function12 != null) {
                        function12.invoke(new mn.e1());
                    }
                } else if ((xVar instanceof x.a) && ((x.a) xVar).a() && (function1 = this.f6390d.f6379i) != null) {
                    function1.invoke(new mn.u0());
                }
                return Unit.f33298a;
            }
        }

        d(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new d(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f6388d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow a10 = mn.j.a(o.this.f6373c.c());
                a aVar = new a(o.this);
                this.f6388d = 1;
                if (a10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((d) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6391d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ long f6392e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ o f6393i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ f5.b f6394o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        e(long j10, o oVar, f5.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f6392e = j10;
            this.f6393i = oVar;
            this.f6394o = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new e(this.f6392e, this.f6393i, this.f6394o, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x002f, code lost:
            if (gs.i0.a(r4, r6) == r0) goto L26;
         */
        /* JADX WARN: Code restructure failed: missing block: B:20:0x005d, code lost:
            if (r7 == r0) goto L26;
         */
        /* JADX WARN: Code restructure failed: missing block: B:21:0x005f, code lost:
            return r0;
         */
        /* JADX WARN: Removed duplicated region for block: B:27:0x0073  */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r6.f6391d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L24
                if (r1 == r3) goto L20
                if (r1 != r2) goto L18
                kotlin.c.b(r7)
                kotlin.Result r7 = (kotlin.Result) r7
                java.lang.Object r7 = r7.j()
                goto L60
            L18:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L20:
                kotlin.c.b(r7)
                goto L32
            L24:
                kotlin.c.b(r7)
                long r4 = r6.f6392e
                r6.f6391d = r3
                java.lang.Object r7 = gs.i0.a(r4, r6)
                if (r7 != r0) goto L32
                goto L5f
            L32:
                ao.o r7 = r6.f6393i
                mn.i r7 = ao.o.l(r7)
                js.j0 r7 = r7.c()
                java.lang.Object r7 = r7.getValue()
                boolean r7 = r7 instanceof mn.x.a
                if (r7 == 0) goto L47
                kotlin.Unit r7 = kotlin.Unit.f33298a
                return r7
            L47:
                ao.f5$b r7 = r6.f6394o
                sn.a r7 = r7.G()
                sn.a r1 = sn.a.f49107e
                if (r7 != r1) goto L6b
                ao.o r7 = r6.f6393i
                mn.i r7 = ao.o.l(r7)
                r6.f6391d = r2
                java.lang.Object r7 = r7.i(r6)
                if (r7 != r0) goto L60
            L5f:
                return r0
            L60:
                boolean r0 = kotlin.Result.h(r7)
                if (r0 == 0) goto L6b
                java.io.File r7 = (java.io.File) r7
                r7.delete()
            L6b:
                ao.o r7 = r6.f6393i
                kotlin.jvm.functions.Function1 r7 = ao.o.m(r7)
                if (r7 == 0) goto L7b
                mn.v0 r0 = new mn.v0
                r0.<init>()
                r7.invoke(r0)
            L7b:
                kotlin.Unit r7 = kotlin.Unit.f33298a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: ao.o.e.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((e) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6395d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ f5.b f6397i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        f(f5.b bVar, Continuation continuation) {
            super(2, continuation);
            this.f6397i = bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new f(this.f6397i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object i10;
            Object f10 = or.b.f();
            int i11 = this.f6395d;
            if (i11 != 0) {
                if (i11 == 1) {
                    kotlin.c.b(obj);
                    i10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.i iVar = o.this.f6373c;
                this.f6395d = 1;
                i10 = iVar.i(this);
                if (i10 == f10) {
                    return f10;
                }
            }
            f5.b bVar = this.f6397i;
            o oVar = o.this;
            if (Result.h(i10)) {
                bVar.z().invoke((File) i10, oVar.f6373c.b());
            }
            f5.b bVar2 = this.f6397i;
            Throwable e10 = Result.e(i10);
            if (e10 != null && !(e10 instanceof mn.q0)) {
                bVar2.x().invoke(e10);
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((f) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6398d;

        /* renamed from: e  reason: collision with root package name */
        int f6399e;

        /* renamed from: i  reason: collision with root package name */
        Object f6400i;

        /* renamed from: o  reason: collision with root package name */
        Object f6401o;

        /* renamed from: p  reason: collision with root package name */
        Object f6402p;

        /* renamed from: q  reason: collision with root package name */
        Object f6403q;

        /* renamed from: r  reason: collision with root package name */
        int f6404r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ f5.b f6405s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ o f6406t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        g(f5.b bVar, o oVar, Continuation continuation) {
            super(2, continuation);
            this.f6405s = bVar;
            this.f6406t = oVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new g(this.f6405s, this.f6406t, continuation);
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x004a  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x006a  */
        /* JADX WARN: Removed duplicated region for block: B:17:0x0076  */
        /* JADX WARN: Removed duplicated region for block: B:19:0x0080  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:13:0x0063 -> B:14:0x0064). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r10) {
            /*
                r9 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r9.f6404r
                r2 = 1
                if (r1 == 0) goto L31
                if (r1 != r2) goto L29
                int r1 = r9.f6399e
                int r3 = r9.f6398d
                java.lang.Object r4 = r9.f6403q
                java.util.ArrayList r4 = (java.util.ArrayList) r4
                java.lang.Object r5 = r9.f6402p
                java.util.ArrayList r5 = (java.util.ArrayList) r5
                java.lang.Object r6 = r9.f6401o
                ao.f5$b r6 = (ao.f5.b) r6
                java.lang.Object r7 = r9.f6400i
                ao.o r7 = (ao.o) r7
                kotlin.c.b(r10)
                kotlin.Result r10 = (kotlin.Result) r10
                java.lang.Object r10 = r10.j()
                goto L64
            L29:
                java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r10.<init>(r0)
                throw r10
            L31:
                kotlin.c.b(r10)
                ao.f5$b r10 = r9.f6405s
                int r10 = r10.B()
                ao.o r1 = r9.f6406t
                ao.f5$b r3 = r9.f6405s
                java.util.ArrayList r4 = new java.util.ArrayList
                r4.<init>(r10)
                r5 = 0
                r7 = r1
                r6 = r3
                r1 = r5
                r3 = r10
            L48:
                if (r1 >= r3) goto L80
                mn.i r10 = ao.o.l(r7)
                r9.f6400i = r7
                r9.f6401o = r6
                r9.f6402p = r4
                r9.f6403q = r4
                r9.f6398d = r3
                r9.f6399e = r1
                r9.f6404r = r2
                java.lang.Object r10 = r10.j(r9)
                if (r10 != r0) goto L63
                return r0
            L63:
                r5 = r4
            L64:
                java.lang.Throwable r8 = kotlin.Result.e(r10)
                if (r8 != 0) goto L76
                java.io.File r10 = (java.io.File) r10
                java.lang.String r10 = r10.getAbsolutePath()
                r4.add(r10)
                int r1 = r1 + r2
                r4 = r5
                goto L48
            L76:
                kotlin.jvm.functions.Function1 r10 = r6.y()
                r10.invoke(r8)
                kotlin.Unit r10 = kotlin.Unit.f33298a
                return r10
            L80:
                ao.o r10 = r9.f6406t
                ao.o.o(r10)
                ao.f5$b r10 = r9.f6405s
                kotlin.jvm.functions.Function2 r10 = r10.t()
                ao.o r0 = r9.f6406t
                mn.i r0 = ao.o.l(r0)
                mn.v r0 = r0.b()
                r10.invoke(r4, r0)
                kotlin.Unit r10 = kotlin.Unit.f33298a
                return r10
            */
            throw new UnsupportedOperationException("Method not decompiled: ao.o.g.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((g) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6407d;

        /* renamed from: e  reason: collision with root package name */
        int f6408e;

        /* renamed from: i  reason: collision with root package name */
        Object f6409i;

        /* renamed from: o  reason: collision with root package name */
        Object f6410o;

        /* renamed from: p  reason: collision with root package name */
        Object f6411p;

        /* renamed from: q  reason: collision with root package name */
        int f6412q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ f5.b f6413r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ o f6414s;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        h(f5.b bVar, o oVar, Continuation continuation) {
            super(2, continuation);
            this.f6413r = bVar;
            this.f6414s = oVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new h(this.f6413r, this.f6414s, continuation);
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0044  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0062  */
        /* JADX WARN: Removed duplicated region for block: B:17:0x0069  */
        /* JADX WARN: Removed duplicated region for block: B:19:0x0070  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:13:0x005b -> B:14:0x005c). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r9) {
            /*
                r8 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r8.f6412q
                r2 = 1
                if (r1 == 0) goto L2d
                if (r1 != r2) goto L25
                int r1 = r8.f6408e
                int r3 = r8.f6407d
                java.lang.Object r4 = r8.f6411p
                java.util.ArrayList r4 = (java.util.ArrayList) r4
                java.lang.Object r5 = r8.f6410o
                java.util.ArrayList r5 = (java.util.ArrayList) r5
                java.lang.Object r6 = r8.f6409i
                ao.o r6 = (ao.o) r6
                kotlin.c.b(r9)
                kotlin.Result r9 = (kotlin.Result) r9
                java.lang.Object r9 = r9.j()
                goto L5c
            L25:
                java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r9.<init>(r0)
                throw r9
            L2d:
                kotlin.c.b(r9)
                ao.f5$b r9 = r8.f6413r
                int r9 = r9.B()
                ao.o r1 = r8.f6414s
                java.util.ArrayList r3 = new java.util.ArrayList
                r3.<init>(r9)
                r4 = 0
                r6 = r1
                r1 = r4
                r4 = r3
                r3 = r9
            L42:
                if (r1 >= r3) goto L70
                mn.i r9 = ao.o.l(r6)
                r8.f6409i = r6
                r8.f6410o = r4
                r8.f6411p = r4
                r8.f6407d = r3
                r8.f6408e = r1
                r8.f6412q = r2
                java.lang.Object r9 = r9.j(r8)
                if (r9 != r0) goto L5b
                return r0
            L5b:
                r5 = r4
            L5c:
                java.lang.Throwable r7 = kotlin.Result.e(r9)
                if (r7 != 0) goto L69
                java.io.File r9 = (java.io.File) r9
                java.lang.String r9 = r9.getAbsolutePath()
                goto L6a
            L69:
                r9 = 0
            L6a:
                r4.add(r9)
                int r1 = r1 + r2
                r4 = r5
                goto L42
            L70:
                ao.o r9 = r8.f6414s
                ao.o.o(r9)
                ao.f5$b r9 = r8.f6413r
                kotlin.jvm.functions.Function2 r9 = r9.b()
                java.util.List r0 = kotlin.collections.CollectionsKt.l0(r4)
                ao.o r1 = r8.f6414s
                mn.i r1 = ao.o.l(r1)
                mn.v r1 = r1.b()
                r9.invoke(r0, r1)
                kotlin.Unit r9 = kotlin.Unit.f33298a
                return r9
            */
            throw new UnsupportedOperationException("Method not decompiled: ao.o.h.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((h) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f6415d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ f5.b f6417i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ androidx.lifecycle.j f6418o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ long f6419p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        i(f5.b bVar, androidx.lifecycle.j jVar, long j10, Continuation continuation) {
            super(2, continuation);
            this.f6417i = bVar;
            this.f6418o = jVar;
            this.f6419p = j10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new i(this.f6417i, this.f6418o, this.f6419p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object g10;
            Object f10 = or.b.f();
            int i10 = this.f6415d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    g10 = ((Result) obj).j();
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                mn.i iVar = o.this.f6373c;
                this.f6415d = 1;
                g10 = iVar.g(this);
                if (g10 == f10) {
                    return f10;
                }
            }
            if (Result.g(g10)) {
                g10 = null;
            }
            if (Intrinsics.areEqual(g10, kotlin.coroutines.jvm.internal.b.a(true))) {
                o.this.z(this.f6417i, this.f6418o, this.f6419p);
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((i) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    static {
        int i10;
        if (Build.VERSION.SDK_INT >= 30) {
            i10 = 16;
        } else {
            i10 = 3;
        }
        f6371p = i10;
    }

    public o(fo.b binding, mn.i cameraController, mn.f0 governmentIdFeed) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(cameraController, "cameraController");
        Intrinsics.checkNotNullParameter(governmentIdFeed, "governmentIdFeed");
        this.f6372b = binding;
        this.f6373c = cameraController;
        this.f6374d = governmentIdFeed;
        FrameLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        this.f6383m = new eo.g(root);
        ThemeableLottieAnimationView themeableLottieAnimationView = binding.f25318r;
        int parseColor = Color.parseColor("#43957D");
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, jp.s.d(context, f.a.f24090v, null, false, 6, null));
        FrameLayout innerContentView = binding.f25313m;
        Intrinsics.checkNotNullExpressionValue(innerContentView, "innerContentView");
        tp.f.d(innerContentView, false, false, false, false, 15, null);
        Context context2 = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        jp.f.i(context2).getLifecycle().a(new a());
        x();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void B(o oVar, f5.b bVar, View view) {
        oVar.f6383m.l(bVar.E(), bVar.k(), bVar.a());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(o oVar, m5 m5Var, fo.b bVar) {
        View view = oVar.f6377g;
        if (view != null) {
            ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
            if (layoutParams != null) {
                ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
                ((ViewGroup.MarginLayoutParams) layoutParams2).height = 0;
                ((ViewGroup.MarginLayoutParams) layoutParams2).width = 0;
                layoutParams2.f2422i = bVar.f25316p.getId();
                layoutParams2.f2428l = bVar.f25316p.getId();
                layoutParams2.f2444t = bVar.f25316p.getId();
                layoutParams2.f2448v = bVar.f25316p.getId();
                view.setLayoutParams(layoutParams2);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
            }
        }
        m5Var.c();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(f5.b bVar) {
        bVar.f().invoke();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(f5.b bVar) {
        bVar.m().invoke();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void F(o oVar, CompoundButton compoundButton, boolean z10) {
        oVar.f6373c.a(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void G(o oVar, f5.b bVar, androidx.lifecycle.j jVar, View view) {
        Job d10;
        if (!oVar.u()) {
            oVar.J(bVar, bVar.u());
            bVar.s().invoke();
            d10 = gs.i.d(jVar, gs.m0.c(), null, new g(bVar, oVar, null), 2, null);
            oVar.f6376f = d10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void H(o oVar, View view) {
        oVar.f6373c.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I(o oVar) {
        mn.f0 f0Var = oVar.f6374d;
        mn.i iVar = oVar.f6373c;
        View overlay = oVar.f6372b.f25315o;
        Intrinsics.checkNotNullExpressionValue(overlay, "overlay");
        pn.b.a(f0Var, iVar, overlay);
        return Unit.f33298a;
    }

    private final void J(f5.b bVar, long j10) {
        if (bVar.G() == sn.a.f49107e) {
            Context context = this.f6372b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            androidx.lifecycle.j a10 = androidx.lifecycle.p.a(jp.f.i(context));
            gs.i.d(a10, gs.m0.c(), null, new i(bVar, a10, j10, null), 2, null);
        }
    }

    private final void r(final View view, final float f10) {
        if (view.getAlpha() == f10) {
            if (f10 <= 0.0f) {
                view.setVisibility(4);
                return;
            }
            return;
        }
        if (view.getVisibility() != 0) {
            if (f10 <= 0.0f) {
                return;
            }
            view.setVisibility(0);
            view.setAlpha(0.0f);
        }
        view.animate().alpha(f10).withEndAction(new Runnable() { // from class: ao.m
            @Override // java.lang.Runnable
            public final void run() {
                o.s(f10, view);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(float f10, View view) {
        if (f10 == 0.0f) {
            view.setVisibility(4);
        }
    }

    private final Unit t(StepStyles.GovernmentIdStepStyle governmentIdStepStyle) {
        String str;
        StyleElements.FontWeight fontWeight;
        StepStyles.StepTextBasedComponentStyleContainer base;
        TextBasedComponentStyle base2;
        StepStyles.StepTextBasedComponentStyleContainer base3;
        TextBasedComponentStyle base4;
        fo.b bVar = this.f6372b;
        float a10 = (float) jp.h.a(8.0d);
        int a11 = (int) jp.h.a(3.0d);
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView title = this.f6372b.D;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            cq.f0.n(title, titleStyleValue, null, 2, null);
            this.f6372b.D.setTextColor(-1);
        }
        Integer governmentIdCaptureFeedBoxBorderColorValue = governmentIdStepStyle.getGovernmentIdCaptureFeedBoxBorderColorValue();
        if (governmentIdCaptureFeedBoxBorderColorValue != null) {
            bVar.B.setBorderColor(governmentIdCaptureFeedBoxBorderColorValue.intValue());
        }
        Double governmentIdCaptureFeedBoxBorderRadiusValue = governmentIdStepStyle.getGovernmentIdCaptureFeedBoxBorderRadiusValue();
        if (governmentIdCaptureFeedBoxBorderRadiusValue != null) {
            a10 = (float) jp.h.a(governmentIdCaptureFeedBoxBorderRadiusValue.doubleValue());
        }
        Double governmentIdCaptureFeedBoxBorderWidthValue = governmentIdStepStyle.getGovernmentIdCaptureFeedBoxBorderWidthValue();
        if (governmentIdCaptureFeedBoxBorderWidthValue != null) {
            a11 = (int) Math.ceil(jp.h.a(governmentIdCaptureFeedBoxBorderWidthValue.doubleValue()));
            ImageView imageView = bVar.f25316p;
            imageView.setPadding(imageView.getPaddingLeft(), ((int) jp.h.a(8.0d)) + a11, bVar.f25316p.getPaddingRight(), bVar.f25316p.getPaddingBottom());
        }
        float f10 = a11;
        bVar.C.setRadius(a10 + f10);
        TextBasedComponentStyle governmentIdCaptureHintTextStyle = governmentIdStepStyle.getGovernmentIdCaptureHintTextStyle();
        if (governmentIdCaptureHintTextStyle != null) {
            TextView overlayText = this.f6372b.f25320t;
            Intrinsics.checkNotNullExpressionValue(overlayText, "overlayText");
            cq.f0.m(overlayText, governmentIdCaptureHintTextStyle, kotlin.collections.x0.c(cq.b0.f21016d));
        }
        TextView disclaimer = this.f6372b.f25309i;
        Intrinsics.checkNotNullExpressionValue(disclaimer, "disclaimer");
        StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle = governmentIdStepStyle.getTextStyle();
        if (textStyle != null && (base3 = textStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
            str = base4.getFontNameValue();
        } else {
            str = null;
        }
        StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle2 = governmentIdStepStyle.getTextStyle();
        if (textStyle2 == null || (base = textStyle2.getBase()) == null || (base2 = base.getBase()) == null || (fontWeight = base2.getFontWeightValue()) == null) {
            fontWeight = StyleElements.FontWeight.NORMAL;
        }
        cq.f0.j(disclaimer, str, fontWeight, null, 4, null);
        View view = bVar.f25315o;
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setCornerRadius(a10);
        gradientDrawable.setStroke(a11, bVar.B.getBorderColor());
        view.setBackground(gradientDrawable);
        ConstraintLayout constraintLayout = bVar.f25317q;
        GradientDrawable gradientDrawable2 = new GradientDrawable();
        gradientDrawable2.setColor(-1);
        gradientDrawable2.setCornerRadii(new float[]{0.0f, 0.0f, 0.0f, 0.0f, a10, a10, a10, a10});
        constraintLayout.setBackground(new InsetDrawable((Drawable) gradientDrawable2, (int) jp.h.a(6.0d)));
        Integer captureHintIconStrokeColor = governmentIdStepStyle.getCaptureHintIconStrokeColor();
        if (captureHintIconStrokeColor != null) {
            this.f6372b.f25318r.I(Color.parseColor("#000000"), captureHintIconStrokeColor.intValue());
        }
        Integer captureHintIconFillColor = governmentIdStepStyle.getCaptureHintIconFillColor();
        if (captureHintIconFillColor != null) {
            this.f6372b.f25318r.I(Color.parseColor("#43957D"), captureHintIconFillColor.intValue());
        }
        bVar.B.setStrokeWidth(f10);
        bVar.B.setCornerRadius(a10);
        Integer governmentIdCaptureFeedBoxStrokeColorValue = governmentIdStepStyle.getGovernmentIdCaptureFeedBoxStrokeColorValue();
        if (governmentIdCaptureFeedBoxStrokeColorValue != null) {
            bVar.B.setHighlightColor(governmentIdCaptureFeedBoxStrokeColorValue.intValue());
        }
        Integer capturePageHeaderIconColorValue = governmentIdStepStyle.getCapturePageHeaderIconColorValue();
        if (capturePageHeaderIconColorValue == null) {
            return null;
        }
        this.f6372b.f25314n.setControlsColor(capturePageHeaderIconColorValue.intValue());
        return Unit.f33298a;
    }

    private final boolean u() {
        Job job = this.f6376f;
        if (job != null && job.a()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void v() {
        fo.b bVar = this.f6372b;
        bVar.getRoot().setHapticFeedbackEnabled(true);
        bVar.getRoot().performHapticFeedback(f6371p, 2);
    }

    private final void w(f5.b bVar) {
        fo.b bVar2 = this.f6372b;
        if (bVar.C()) {
            View previewDim = bVar2.f25323w;
            Intrinsics.checkNotNullExpressionValue(previewDim, "previewDim");
            r(previewDim, 0.66f);
            LottieAnimationView scanningAnimation = bVar2.A;
            Intrinsics.checkNotNullExpressionValue(scanningAnimation, "scanningAnimation");
            r(scanningAnimation, 0.0f);
            ImageView overlayGuide = bVar2.f25316p;
            Intrinsics.checkNotNullExpressionValue(overlayGuide, "overlayGuide");
            r(overlayGuide, 0.0f);
            ConstraintLayout overlayHint = bVar2.f25317q;
            Intrinsics.checkNotNullExpressionValue(overlayHint, "overlayHint");
            r(overlayHint, 0.0f);
            ProgressBar progressBar = bVar2.f25326z;
            Intrinsics.checkNotNullExpressionValue(progressBar, "progressBar");
            r(progressBar, 1.0f);
            bVar2.B.setScanningAnimationEnabled(false);
            return;
        }
        View previewDim2 = bVar2.f25323w;
        Intrinsics.checkNotNullExpressionValue(previewDim2, "previewDim");
        r(previewDim2, 0.0f);
        LottieAnimationView scanningAnimation2 = bVar2.A;
        Intrinsics.checkNotNullExpressionValue(scanningAnimation2, "scanningAnimation");
        r(scanningAnimation2, 1.0f);
        ImageView overlayGuide2 = bVar2.f25316p;
        Intrinsics.checkNotNullExpressionValue(overlayGuide2, "overlayGuide");
        r(overlayGuide2, 1.0f);
        ImageView overlayGuide3 = bVar2.f25316p;
        Intrinsics.checkNotNullExpressionValue(overlayGuide3, "overlayGuide");
        r(overlayGuide3, 1.0f);
        ProgressBar progressBar2 = bVar2.f25326z;
        Intrinsics.checkNotNullExpressionValue(progressBar2, "progressBar");
        r(progressBar2, 0.0f);
        bVar2.B.setScanningAnimationEnabled(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void x() {
        Job d10;
        Job job = this.f6381k;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        Context context = this.f6372b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        d10 = gs.i.d(androidx.lifecycle.p.a(jp.f.i(context)), null, null, new d(null), 3, null);
        this.f6381k = d10;
    }

    private final void y(f5.b bVar, View view, TextView textView) {
        AccessibilityEvent obtain = AccessibilityEvent.obtain(16384);
        if (bVar.q() != null) {
            obtain.getText().add(bVar.q());
        } else {
            int i10 = c.f6387b[bVar.j().ordinal()];
            if (i10 != 1 && i10 != 2 && i10 != 3) {
                if (i10 != 4) {
                    if (i10 == 5) {
                        obtain.getText().add(textView.getContext().getString(bp.e.f7660u));
                    } else {
                        throw new ir.p();
                    }
                } else {
                    obtain.getText().add(textView.getContext().getString(bp.e.f7659t));
                }
            } else {
                obtain.getText().add(textView.getContext().getString(bp.e.f7661v));
            }
            obtain.getText().add(view.getContext().getString(bp.e.f7662w));
        }
        textView.getParent().requestSendAccessibilityEvent(textView, obtain);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void z(f5.b bVar, androidx.lifecycle.j jVar, long j10) {
        Job d10;
        Job job = this.f6378h;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        d10 = gs.i.d(jVar, gs.m0.b(), null, new e(j10, this, bVar, null), 2, null);
        this.f6378h = d10;
    }

    @Override // vm.k
    /* renamed from: A */
    public void a(final f5.b rendering, vm.a0 viewEnvironment) {
        boolean z10;
        t0.c b10;
        int i10;
        int i11;
        RemoteImage remoteImage;
        androidx.lifecycle.j jVar;
        Job job;
        Job d10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        final fo.b bVar = this.f6372b;
        Context context = bVar.getRoot().getContext();
        Intrinsics.checkNotNull(context);
        final androidx.lifecycle.j a10 = androidx.lifecycle.p.a(jp.f.i(context));
        this.f6373c.d();
        if ((rendering.D() instanceof n1.l) && rendering.G() == sn.a.f49106d && ((n1.l) rendering.D()).D() != jo.t.f32287e) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            bVar.f25305e.setVisibility(4);
            bVar.f25304d.setVisibility(0);
            z(rendering, a10, rendering.u());
        } else {
            bVar.f25305e.setVisibility(0);
            bVar.f25304d.setVisibility(4);
            this.f6373c.e().setVisibility(0);
        }
        this.f6373c.h(rendering.o());
        sp.c.a(viewEnvironment, androidx.core.content.a.c(this.f6372b.getRoot().getContext(), jp.j.f32319a));
        Integer num = this.f6382l;
        int d11 = rendering.d();
        if (num == null || num.intValue() != d11) {
            mn.f0 f0Var = this.f6374d;
            b10 = p.b(rendering.j());
            f0Var.m(b10, rendering.c(), CollectionsKt.e(new nn.j()));
            this.f6382l = Integer.valueOf(rendering.d());
        }
        this.f6379i = rendering.x();
        this.f6380j = rendering.l();
        bVar.f25320t.setText(rendering.v());
        bVar.f25309i.setText(rendering.n());
        bVar.D.setText(rendering.F());
        TextView textView = bVar.D;
        CharSequence text = textView.getText();
        Intrinsics.checkNotNullExpressionValue(text, "getText(...)");
        if (text.length() == 0) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        textView.setVisibility(i10);
        if (StringsKt.k0(rendering.n())) {
            bVar.f25310j.setVisibility(8);
        } else {
            bVar.f25310j.setVisibility(0);
        }
        if (rendering.q() != null && !z10) {
            bVar.f25312l.setVisibility(0);
            bVar.f25312l.setText(rendering.q());
        } else {
            bVar.f25312l.setVisibility(8);
        }
        Context context2 = bVar.f25320t.getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        if (jp.f.g(context2) && bVar.f25320t.getParent() != null) {
            View overlay = bVar.f25315o;
            Intrinsics.checkNotNullExpressionValue(overlay, "overlay");
            TextView overlayText = bVar.f25320t;
            Intrinsics.checkNotNullExpressionValue(overlayText, "overlayText");
            y(rendering, overlay, overlayText);
        }
        int i12 = c.f6386a[rendering.i().ordinal()];
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 == 3) {
                    bVar.f25306f.setVisibility(4);
                } else {
                    throw new ir.p();
                }
            } else {
                bVar.f25306f.setVisibility(0);
                bVar.f25306f.setEnabled(true);
            }
        } else {
            bVar.f25306f.setEnabled(false);
        }
        if (!rendering.J()) {
            bVar.f25306f.setEnabled(false);
        }
        if (jp.s.b(context, bp.a.f7616h, null, false, false, 14, null)) {
            bVar.f25320t.setGravity(17);
            TextView overlayText2 = bVar.f25320t;
            Intrinsics.checkNotNullExpressionValue(overlayText2, "overlayText");
            ViewGroup.LayoutParams layoutParams = overlayText2.getLayoutParams();
            if (layoutParams != null) {
                ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
                marginLayoutParams.setMarginStart(0);
                overlayText2.setLayoutParams(marginLayoutParams);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
            }
        }
        Integer f10 = jp.s.f(context, bp.a.f7624p, null, false, 6, null);
        if (f10 != null) {
            i11 = f10.intValue();
        } else {
            i11 = l4.f6180l;
        }
        bVar.f25309i.setCompoundDrawablesRelativeWithIntrinsicBounds(i11, 0, 0, 0);
        i4 b11 = f4.b(context, rendering.A());
        NextStep.GovernmentId.AssetConfig.CapturePage a11 = rendering.a();
        if (a11 != null) {
            remoteImage = ao.a.a(a11, rendering.r(), rendering.j());
        } else {
            remoteImage = null;
        }
        if (remoteImage != null) {
            if (this.f6384n == null) {
                ConstraintLayout overlayIconContainer = bVar.f25319s;
                Intrinsics.checkNotNullExpressionValue(overlayIconContainer, "overlayIconContainer");
                this.f6384n = eq.b.c(remoteImage, overlayIconContainer, false, 2, null);
                bVar.f25318r.setVisibility(8);
            }
        } else if (this.f6375e != b11.b()) {
            this.f6375e = b11.b();
            bVar.f25318r.setAnimation(b11.b());
            bVar.f25318r.setVisibility(0);
        }
        bVar.f25316p.setImageResource(b11.a());
        bVar.f25315o.setBackground(f4.a(context, bp.a.f7615g));
        Integer f11 = jp.s.f(context, bp.a.f7620l, null, false, 6, null);
        if (f11 != null) {
            bVar.A.setAnimation(f11.intValue());
            bVar.f25315o.setVisibility(0);
            bVar.B.setVisibility(8);
        } else {
            bVar.A.setVisibility(4);
            bVar.f25315o.setVisibility(4);
            bVar.B.setVisibility(0);
        }
        if ((rendering.A() instanceof f5.d.c) && this.f6377g == null) {
            final m5 m5Var = new m5(context);
            View m10 = xp.r4.m(((f5.d.c) rendering.A()).b(), m5Var, ((f5.d.c) rendering.A()).a());
            this.f6377g = m10;
            bVar.f25305e.addView(m10);
            bVar.A.setVisibility(4);
            bVar.f25316p.setVisibility(4);
            View view = this.f6377g;
            if (view != null) {
                tp.s.b(view, new Function0() { // from class: ao.e
                    @Override // kotlin.jvm.functions.Function0
                    public final Object invoke() {
                        Unit C;
                        C = o.C(o.this, m5Var, bVar);
                        return C;
                    }
                });
            }
        }
        StepStyles.GovernmentIdStepStyle E = rendering.E();
        if (E != null) {
            t(E);
        }
        rp.a w10 = rendering.w();
        Function0 function0 = new Function0() { // from class: ao.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit D;
                D = o.D(f5.b.this);
                return D;
            }
        };
        Function0 function02 = new Function0() { // from class: ao.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit E2;
                E2 = o.E(f5.b.this);
                return E2;
            }
        };
        Pi2NavigationBar navigationBar = bVar.f25314n;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        FrameLayout root = bVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(w10, function0, function02, navigationBar, root);
        bVar.f25311k.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() { // from class: ao.h
            @Override // android.widget.CompoundButton.OnCheckedChangeListener
            public final void onCheckedChanged(CompoundButton compoundButton, boolean z11) {
                o.F(o.this, compoundButton, z11);
            }
        });
        bVar.f25306f.setOnClickListener(new View.OnClickListener() { // from class: ao.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                o.G(o.this, rendering, a10, view2);
            }
        });
        this.f6373c.e().setOnClickListener(new View.OnClickListener() { // from class: ao.j
            @Override // android.view.View.OnClickListener
            public final void onClick(View view2) {
                o.H(o.this, view2);
            }
        });
        if (rendering.e() && !u()) {
            J(rendering, rendering.u());
            jVar = a10;
            d10 = gs.i.d(jVar, gs.m0.c(), null, new h(rendering, this, null), 2, null);
            this.f6376f = d10;
        } else {
            jVar = a10;
        }
        tp.s.b(this.f6373c.e(), new Function0() { // from class: ao.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit I;
                I = o.I(o.this);
                return I;
            }
        });
        w(rendering);
        if (rendering.k() != null && rendering.k().b().length() != 0) {
            bVar.f25308h.setVisibility(0);
            bVar.f25308h.setText(rendering.k().b());
            bVar.f25308h.setOnClickListener(new View.OnClickListener() { // from class: ao.l
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    o.B(o.this, rendering, view2);
                }
            });
        } else {
            bVar.f25308h.setVisibility(4);
        }
        this.f6383m.o();
        if (((rendering.D() instanceof n1.f) || rendering.p()) && (job = this.f6378h) != null) {
            Job.a.a(job, null, 1, null);
        }
        if (rendering.p()) {
            gs.i.d(jVar, gs.m0.c(), null, new f(rendering, null), 2, null);
        }
        if (rendering.v().length() == 0) {
            bVar.f25317q.setVisibility(8);
        } else {
            bVar.f25317q.setVisibility(0);
        }
    }
}
