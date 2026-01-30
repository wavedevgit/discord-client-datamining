package bq;

import android.content.Context;
import android.content.res.ColorStateList;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.lifecycle.p;
import androidx.recyclerview.widget.LinearLayoutManager;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import cq.f0;
import gs.c1;
import gs.i0;
import gs.j1;
import gs.m0;
import kotlin.Lazy;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import xp.b4;
import xp.c2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f7694a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f7695b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7696c;

    /* renamed from: d  reason: collision with root package name */
    private Function1 f7697d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7698d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f7699e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function0 f7701o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: bq.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0119a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f7702d;

            /* renamed from: e  reason: collision with root package name */
            int f7703e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f7704i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ k f7705o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Function0 f7706p;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: bq.k$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0120a implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Ref.BooleanRef f7707d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f7708e;

                C0120a(Ref.BooleanRef booleanRef, CancellableContinuation cancellableContinuation) {
                    this.f7707d = booleanRef;
                    this.f7708e = cancellableContinuation;
                }

                public final void a(WindowInsetsCompat insets) {
                    Intrinsics.checkNotNullParameter(insets, "insets");
                    if (!this.f7707d.element) {
                        Insets f10 = insets.f(WindowInsetsCompat.p.c());
                        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                        if (f10.f3153d > 0) {
                            this.f7707d.element = true;
                            CancellableContinuation cancellableContinuation = this.f7708e;
                            Result.a aVar = Result.f33295e;
                            cancellableContinuation.resumeWith(Result.b(Unit.f33298a));
                        }
                    }
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((WindowInsetsCompat) obj);
                    return Unit.f33298a;
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: bq.k$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f7709d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f7710e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                b(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f7710e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new b(this.f7710e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    or.b.f();
                    if (this.f7709d == 0) {
                        kotlin.c.b(obj);
                        this.f7710e.invoke();
                        return Unit.f33298a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0119a(CompletableJob completableJob, k kVar, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f7704i = completableJob;
                this.f7705o = kVar;
                this.f7706p = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0119a(this.f7704i, this.f7705o, this.f7706p, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x005f, code lost:
                if (r8 == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:16:0x0075, code lost:
                if (gs.g.g(r8, r1, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:17:0x0077, code lost:
                return r0;
             */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r8) {
                /*
                    r7 = this;
                    java.lang.Object r0 = or.b.f()
                    int r1 = r7.f7703e
                    r2 = 2
                    r3 = 0
                    r4 = 1
                    if (r1 == 0) goto L23
                    if (r1 == r4) goto L1b
                    if (r1 != r2) goto L13
                    kotlin.c.b(r8)
                    goto L78
                L13:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r0)
                    throw r8
                L1b:
                    java.lang.Object r1 = r7.f7702d
                    bq.k r1 = (bq.k) r1
                    kotlin.c.b(r8)
                    goto L62
                L23:
                    kotlin.c.b(r8)
                    bq.k r8 = r7.f7705o
                    r7.f7702d = r8
                    r7.f7703e = r4
                    kotlinx.coroutines.e r1 = new kotlinx.coroutines.e
                    kotlin.coroutines.Continuation r5 = or.b.c(r7)
                    r1.<init>(r5, r4)
                    r1.H()
                    kotlin.jvm.internal.Ref$BooleanRef r5 = new kotlin.jvm.internal.Ref$BooleanRef
                    r5.<init>()
                    aq.a r8 = bq.k.k(r8)
                    android.widget.FrameLayout r8 = r8.getRoot()
                    java.lang.String r6 = "getRoot(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r6)
                    bq.k$a$a$a r6 = new bq.k$a$a$a
                    r6.<init>(r5, r1)
                    tp.f.g(r8, r6)
                    java.lang.Object r8 = r1.B()
                    java.lang.Object r1 = or.b.f()
                    if (r8 != r1) goto L5f
                    kotlin.coroutines.jvm.internal.g.c(r7)
                L5f:
                    if (r8 != r0) goto L62
                    goto L77
                L62:
                    gs.c1 r8 = gs.m0.c()
                    bq.k$a$a$b r1 = new bq.k$a$a$b
                    kotlin.jvm.functions.Function0 r5 = r7.f7706p
                    r1.<init>(r5, r3)
                    r7.f7702d = r3
                    r7.f7703e = r2
                    java.lang.Object r8 = gs.g.g(r8, r1, r7)
                    if (r8 != r0) goto L78
                L77:
                    return r0
                L78:
                    kotlinx.coroutines.CompletableJob r8 = r7.f7704i
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f33298a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: bq.k.a.C0119a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0119a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f7711d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f7712e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f7713i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Function0 f7714o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: bq.k$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0121a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f7715d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f7716e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0121a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f7716e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0121a(this.f7716e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    or.b.f();
                    if (this.f7715d == 0) {
                        kotlin.c.b(obj);
                        this.f7716e.invoke();
                        return Unit.f33298a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0121a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(k kVar, CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f7712e = kVar;
                this.f7713i = completableJob;
                this.f7714o = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f7712e, this.f7713i, this.f7714o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f7711d;
                if (i10 != 0 && i10 != 1) {
                    if (i10 == 2) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    while (true) {
                        WindowInsetsCompat G = h0.G(this.f7712e.o().getRoot());
                        if (G != null && G.u(WindowInsetsCompat.p.c())) {
                            c1 c10 = m0.c();
                            C0121a c0121a = new C0121a(this.f7714o, null);
                            this.f7711d = 2;
                            if (gs.g.g(c10, c0121a, this) == f10) {
                                break;
                            }
                        } else {
                            this.f7711d = 1;
                            if (i0.a(100L, this) == f10) {
                                break;
                            }
                        }
                    }
                    return f10;
                }
                Job.a.a(this.f7713i, null, 1, null);
                return Unit.f33298a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f7717d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CompletableJob f7718e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function0 f7719i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: bq.k$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0122a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f7720d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f7721e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0122a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f7721e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0122a(this.f7721e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    or.b.f();
                    if (this.f7720d == 0) {
                        kotlin.c.b(obj);
                        this.f7721e.invoke();
                        return Unit.f33298a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0122a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f7718e = completableJob;
                this.f7719i = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new c(this.f7718e, this.f7719i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x002a, code lost:
                if (gs.i0.a(1000, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:14:0x003e, code lost:
                if (gs.g.g(r8, r1, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:15:0x0040, code lost:
                return r0;
             */
            @Override // kotlin.coroutines.jvm.internal.a
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object invokeSuspend(java.lang.Object r8) {
                /*
                    r7 = this;
                    java.lang.Object r0 = or.b.f()
                    int r1 = r7.f7717d
                    r2 = 2
                    r3 = 0
                    r4 = 1
                    if (r1 == 0) goto L1f
                    if (r1 == r4) goto L1b
                    if (r1 != r2) goto L13
                    kotlin.c.b(r8)
                    goto L41
                L13:
                    java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                    java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                    r8.<init>(r0)
                    throw r8
                L1b:
                    kotlin.c.b(r8)
                    goto L2d
                L1f:
                    kotlin.c.b(r8)
                    r7.f7717d = r4
                    r5 = 1000(0x3e8, double:4.94E-321)
                    java.lang.Object r8 = gs.i0.a(r5, r7)
                    if (r8 != r0) goto L2d
                    goto L40
                L2d:
                    gs.c1 r8 = gs.m0.c()
                    bq.k$a$c$a r1 = new bq.k$a$c$a
                    kotlin.jvm.functions.Function0 r5 = r7.f7719i
                    r1.<init>(r5, r3)
                    r7.f7717d = r2
                    java.lang.Object r8 = gs.g.g(r8, r1, r7)
                    if (r8 != r0) goto L41
                L40:
                    return r0
                L41:
                    kotlinx.coroutines.CompletableJob r8 = r7.f7718e
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f33298a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: bq.k.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0, Continuation continuation) {
            super(2, continuation);
            this.f7701o = function0;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f7701o, continuation);
            aVar.f7699e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f7698d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f7699e;
                CompletableJob b10 = j1.b(null, 1, null);
                gs.i.d(coroutineScope, b10, null, new C0119a(b10, k.this, this.f7701o, null), 2, null);
                gs.i.d(coroutineScope, b10, null, new b(k.this, b10, this.f7701o, null), 2, null);
                gs.i.d(coroutineScope, b10, null, new c(b10, this.f7701o, null), 2, null);
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends BottomSheetBehavior.g {
        b() {
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            Function1 function1 = k.this.f7697d;
            if (function1 != null) {
                function1.invoke(Integer.valueOf(i10));
            }
        }
    }

    public k(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f7694a = contentView;
        this.f7695b = ir.l.b(new Function0() { // from class: bq.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                aq.a p10;
                p10 = k.p(k.this);
                return p10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean A(k kVar, boolean z10, MenuItem menuItem) {
        if (menuItem.getItemId() == vp.e.F) {
            kVar.r(true, z10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void B(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.Y0(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final aq.a o() {
        return (aq.a) this.f7695b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final aq.a p(k kVar) {
        return aq.a.c(LayoutInflater.from(kVar.f7694a.getContext()), kVar.f7694a, true);
    }

    private final void q(Function0 function0) {
        Context context = this.f7694a.getContext();
        Intrinsics.checkNotNull(context);
        AppCompatActivity a10 = jp.f.a(context);
        if (a10 != null) {
            gs.i.d(p.a(a10), null, null, new a(function0, null), 3, null);
        }
    }

    private final void r(boolean z10, boolean z11) {
        if (z10) {
            o().f6602i.setVisibility(8);
            o().f6600g.setVisibility(0);
            o().f6603j.getMenu().setGroupVisible(0, false);
            o().f6599f.requestFocus();
            Context context = o().f6599f.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            jp.f.j(context);
        } else {
            Context context2 = o().f6599f.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            jp.f.d(context2);
            o().f6600g.setVisibility(8);
            o().f6602i.setVisibility(0);
            o().f6603j.getMenu().setGroupVisible(0, true);
            o().f6599f.setText("");
        }
        if (z10 && z11) {
            o().f6603j.setNavigationIcon(jp.l.f32341t);
        } else {
            o().f6603j.setNavigationIcon(jp.l.f32342u);
        }
    }

    private final void s() {
        if (this.f7696c) {
            return;
        }
        this.f7696c = true;
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f6595b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.a1(true);
        Function0 function0 = new Function0() { // from class: bq.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t();
                return t10;
            }
        };
        FrameLayout bottomSheet = o().f6595b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        tp.b.b(q02, function0, bottomSheet, o().f6596c, o().f6601h);
        q02.c0(new b());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t() {
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(c2 c2Var, Ref.ObjectRef objectRef, k kVar, b4 selectedItem) {
        Intrinsics.checkNotNullParameter(selectedItem, "selectedItem");
        if (!c2Var.c()) {
            Function1 function1 = (Function1) objectRef.element;
            if (function1 != null) {
                function1.invoke(CollectionsKt.e(selectedItem));
            }
            objectRef.element = null;
            kVar.m();
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void w(boolean z10, k kVar, View view) {
        if (z10) {
            TextInputLayout searchBarTextInput = kVar.o().f6600g;
            Intrinsics.checkNotNullExpressionValue(searchBarTextInput, "searchBarTextInput");
            if (searchBarTextInput.getVisibility() == 0) {
                kVar.r(false, z10);
                return;
            }
        }
        kVar.m();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(boolean z10, k kVar, final BottomSheetBehavior bottomSheetBehavior) {
        if (z10) {
            kVar.q(new Function0() { // from class: bq.i
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = k.y(BottomSheetBehavior.this);
                    return y10;
                }
            });
        } else {
            bottomSheetBehavior.Y0(3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.Y0(3);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(Ref.ObjectRef objectRef, n nVar, k kVar, int i10) {
        if (i10 == 5) {
            Function1 function1 = (Function1) objectRef.element;
            if (function1 != null) {
                function1.invoke(CollectionsKt.h1(nVar.c()));
            }
            objectRef.element = null;
            Context context = kVar.f7694a.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            jp.f.d(context);
        }
        return Unit.f33298a;
    }

    public final boolean m() {
        if (!this.f7695b.isInitialized()) {
            return false;
        }
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f6595b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = this.f7694a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        jp.f.d(context);
        this.f7694a.postDelayed(new Runnable() { // from class: bq.h
            @Override // java.lang.Runnable
            public final void run() {
                k.n(BottomSheetBehavior.this);
            }
        }, 100L);
        if (q02.w0() == 5) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final void u(final c2 component, Function1 onItemsSelectedListener) {
        final boolean z10;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(onItemsSelectedListener, "onItemsSelectedListener");
        s();
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = onItemsSelectedListener;
        String label = component.getLabel();
        if (label != null && !StringsKt.k0(label)) {
            z10 = false;
        } else {
            z10 = true;
        }
        final boolean z11 = !z10;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f6595b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = o().f6598e.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final n nVar = new n(context, component.b(), component.getStyles(), component.c(), component.f(), new Function1() { // from class: bq.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = k.v(c2.this, objectRef, this, (b4) obj);
                return v10;
            }
        });
        this.f7697d = new Function1() { // from class: bq.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = k.z(Ref.ObjectRef.this, nVar, this, ((Integer) obj).intValue());
                return z12;
            }
        };
        r(z10, z11);
        o().f6603j.setOnMenuItemClickListener(new Toolbar.h() { // from class: bq.d
            @Override // androidx.appcompat.widget.Toolbar.h
            public final boolean onMenuItemClick(MenuItem menuItem) {
                boolean A;
                A = k.A(k.this, z11, menuItem);
                return A;
            }
        });
        o().f6602i.setText(component.getLabel());
        o().f6598e.setAdapter(nVar);
        o().f6601h.setOnClickListener(new View.OnClickListener() { // from class: bq.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.B(BottomSheetBehavior.this, view);
            }
        });
        InputSelectBoxComponentStyle styles = component.getStyles();
        if (styles != null) {
            TextView textviewInputSelectSheetTitle = o().f6602i;
            Intrinsics.checkNotNullExpressionValue(textviewInputSelectSheetTitle, "textviewInputSelectSheetTitle");
            f0.n(textviewInputSelectSheetTitle, styles.getTextBasedStyle(), null, 2, null);
            Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
            if (baseBackgroundColorValue != null) {
                int intValue = baseBackgroundColorValue.intValue();
                o().f6596c.setBackgroundColor(intValue);
                o().f6598e.setBackgroundColor(intValue);
            }
            Integer baseBorderColorValue = styles.getBaseBorderColorValue();
            if (baseBorderColorValue != null) {
                o().f6597d.setBackgroundColor(baseBorderColorValue.intValue());
            }
            Integer headerCancelButtonColor = styles.getHeaderCancelButtonColor();
            if (headerCancelButtonColor != null) {
                int intValue2 = headerCancelButtonColor.intValue();
                o().f6603j.setNavigationIconTint(intValue2);
                o().f6600g.setEndIconTintList(ColorStateList.valueOf(intValue2));
            }
            Integer baseTextColor = styles.getBaseTextColor();
            if (baseTextColor != null) {
                int intValue3 = baseTextColor.intValue();
                ColorStateList valueOf = ColorStateList.valueOf(r1.c.l(intValue3, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                Intrinsics.checkNotNullExpressionValue(valueOf, "valueOf(...)");
                o().f6599f.setHintTextColor(valueOf);
                o().f6599f.setTextColor(intValue3);
            }
        }
        o().f6598e.setLayoutManager(new LinearLayoutManager(o().getRoot().getContext()));
        o().f6598e.setHasFixedSize(true);
        o().f6599f.addTextChangedListener(new c(nVar));
        o().f6603j.setNavigationOnClickListener(new View.OnClickListener() { // from class: bq.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.w(z11, this, view);
            }
        });
        o().f6599f.setText("");
        o().f6595b.setTranslationY(0.0f);
        this.f7694a.postDelayed(new Runnable() { // from class: bq.g
            @Override // java.lang.Runnable
            public final void run() {
                k.x(z10, this, q02);
            }
        }, 100L);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f7723d;

        c(n nVar) {
            this.f7723d = nVar;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            this.f7723d.g(String.valueOf(editable));
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
