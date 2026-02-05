package hq;

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
import dq.b4;
import dq.c2;
import iq.f0;
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
import ms.c1;
import ms.i0;
import ms.j1;
import ms.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f26850a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f26851b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f26852c;

    /* renamed from: d  reason: collision with root package name */
    private Function1 f26853d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f26854d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f26855e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function0 f26857o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: hq.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0368a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f26858d;

            /* renamed from: e  reason: collision with root package name */
            int f26859e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f26860i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ k f26861o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Function0 f26862p;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: hq.k$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0369a implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Ref.BooleanRef f26863d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f26864e;

                C0369a(Ref.BooleanRef booleanRef, CancellableContinuation cancellableContinuation) {
                    this.f26863d = booleanRef;
                    this.f26864e = cancellableContinuation;
                }

                public final void a(WindowInsetsCompat insets) {
                    Intrinsics.checkNotNullParameter(insets, "insets");
                    if (!this.f26863d.element) {
                        Insets f10 = insets.f(WindowInsetsCompat.p.c());
                        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                        if (f10.f3278d > 0) {
                            this.f26863d.element = true;
                            CancellableContinuation cancellableContinuation = this.f26864e;
                            Result.a aVar = Result.f31985e;
                            cancellableContinuation.resumeWith(Result.b(Unit.f31988a));
                        }
                    }
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((WindowInsetsCompat) obj);
                    return Unit.f31988a;
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: hq.k$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f26865d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f26866e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                b(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f26866e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new b(this.f26866e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    ur.b.f();
                    if (this.f26865d == 0) {
                        kotlin.c.b(obj);
                        this.f26866e.invoke();
                        return Unit.f31988a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0368a(CompletableJob completableJob, k kVar, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f26860i = completableJob;
                this.f26861o = kVar;
                this.f26862p = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0368a(this.f26860i, this.f26861o, this.f26862p, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x005f, code lost:
                if (r8 == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:16:0x0075, code lost:
                if (ms.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = ur.b.f()
                    int r1 = r7.f26859e
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
                    java.lang.Object r1 = r7.f26858d
                    hq.k r1 = (hq.k) r1
                    kotlin.c.b(r8)
                    goto L62
                L23:
                    kotlin.c.b(r8)
                    hq.k r8 = r7.f26861o
                    r7.f26858d = r8
                    r7.f26859e = r4
                    kotlinx.coroutines.e r1 = new kotlinx.coroutines.e
                    kotlin.coroutines.Continuation r5 = ur.b.c(r7)
                    r1.<init>(r5, r4)
                    r1.H()
                    kotlin.jvm.internal.Ref$BooleanRef r5 = new kotlin.jvm.internal.Ref$BooleanRef
                    r5.<init>()
                    gq.a r8 = hq.k.k(r8)
                    android.widget.FrameLayout r8 = r8.getRoot()
                    java.lang.String r6 = "getRoot(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r6)
                    hq.k$a$a$a r6 = new hq.k$a$a$a
                    r6.<init>(r5, r1)
                    zp.f.g(r8, r6)
                    java.lang.Object r8 = r1.B()
                    java.lang.Object r1 = ur.b.f()
                    if (r8 != r1) goto L5f
                    kotlin.coroutines.jvm.internal.g.c(r7)
                L5f:
                    if (r8 != r0) goto L62
                    goto L77
                L62:
                    ms.c1 r8 = ms.m0.c()
                    hq.k$a$a$b r1 = new hq.k$a$a$b
                    kotlin.jvm.functions.Function0 r5 = r7.f26862p
                    r1.<init>(r5, r3)
                    r7.f26858d = r3
                    r7.f26859e = r2
                    java.lang.Object r8 = ms.g.g(r8, r1, r7)
                    if (r8 != r0) goto L78
                L77:
                    return r0
                L78:
                    kotlinx.coroutines.CompletableJob r8 = r7.f26860i
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f31988a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: hq.k.a.C0368a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0368a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f26867d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f26868e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f26869i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Function0 f26870o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: hq.k$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0370a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f26871d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f26872e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0370a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f26872e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0370a(this.f26872e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    ur.b.f();
                    if (this.f26871d == 0) {
                        kotlin.c.b(obj);
                        this.f26872e.invoke();
                        return Unit.f31988a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0370a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(k kVar, CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f26868e = kVar;
                this.f26869i = completableJob;
                this.f26870o = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f26868e, this.f26869i, this.f26870o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = ur.b.f();
                int i10 = this.f26867d;
                if (i10 != 0 && i10 != 1) {
                    if (i10 == 2) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    while (true) {
                        WindowInsetsCompat G = h0.G(this.f26868e.o().getRoot());
                        if (G != null && G.u(WindowInsetsCompat.p.c())) {
                            c1 c10 = m0.c();
                            C0370a c0370a = new C0370a(this.f26870o, null);
                            this.f26867d = 2;
                            if (ms.g.g(c10, c0370a, this) == f10) {
                                break;
                            }
                        } else {
                            this.f26867d = 1;
                            if (i0.a(100L, this) == f10) {
                                break;
                            }
                        }
                    }
                    return f10;
                }
                Job.a.a(this.f26869i, null, 1, null);
                return Unit.f31988a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f26873d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CompletableJob f26874e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function0 f26875i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: hq.k$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0371a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f26876d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f26877e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0371a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f26877e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0371a(this.f26877e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    ur.b.f();
                    if (this.f26876d == 0) {
                        kotlin.c.b(obj);
                        this.f26877e.invoke();
                        return Unit.f31988a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0371a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f26874e = completableJob;
                this.f26875i = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new c(this.f26874e, this.f26875i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x002a, code lost:
                if (ms.i0.a(1000, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:14:0x003e, code lost:
                if (ms.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = ur.b.f()
                    int r1 = r7.f26873d
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
                    r7.f26873d = r4
                    r5 = 1000(0x3e8, double:4.94E-321)
                    java.lang.Object r8 = ms.i0.a(r5, r7)
                    if (r8 != r0) goto L2d
                    goto L40
                L2d:
                    ms.c1 r8 = ms.m0.c()
                    hq.k$a$c$a r1 = new hq.k$a$c$a
                    kotlin.jvm.functions.Function0 r5 = r7.f26875i
                    r1.<init>(r5, r3)
                    r7.f26873d = r2
                    java.lang.Object r8 = ms.g.g(r8, r1, r7)
                    if (r8 != r0) goto L41
                L40:
                    return r0
                L41:
                    kotlinx.coroutines.CompletableJob r8 = r7.f26874e
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f31988a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: hq.k.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0, Continuation continuation) {
            super(2, continuation);
            this.f26857o = function0;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f26857o, continuation);
            aVar.f26855e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f26854d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f26855e;
                CompletableJob b10 = j1.b(null, 1, null);
                ms.i.d(coroutineScope, b10, null, new C0368a(b10, k.this, this.f26857o, null), 2, null);
                ms.i.d(coroutineScope, b10, null, new b(k.this, b10, this.f26857o, null), 2, null);
                ms.i.d(coroutineScope, b10, null, new c(b10, this.f26857o, null), 2, null);
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
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
            Function1 function1 = k.this.f26853d;
            if (function1 != null) {
                function1.invoke(Integer.valueOf(i10));
            }
        }
    }

    public k(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f26850a = contentView;
        this.f26851b = or.l.a(new Function0() { // from class: hq.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                gq.a p10;
                p10 = k.p(k.this);
                return p10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean A(k kVar, boolean z10, MenuItem menuItem) {
        if (menuItem.getItemId() == bq.e.F) {
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
    public final gq.a o() {
        return (gq.a) this.f26851b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gq.a p(k kVar) {
        return gq.a.c(LayoutInflater.from(kVar.f26850a.getContext()), kVar.f26850a, true);
    }

    private final void q(Function0 function0) {
        Context context = this.f26850a.getContext();
        Intrinsics.checkNotNull(context);
        AppCompatActivity a10 = pp.f.a(context);
        if (a10 != null) {
            ms.i.d(p.a(a10), null, null, new a(function0, null), 3, null);
        }
    }

    private final void r(boolean z10, boolean z11) {
        if (z10) {
            o().f25056i.setVisibility(8);
            o().f25054g.setVisibility(0);
            o().f25057j.getMenu().setGroupVisible(0, false);
            o().f25053f.requestFocus();
            Context context = o().f25053f.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            pp.f.j(context);
        } else {
            Context context2 = o().f25053f.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            pp.f.d(context2);
            o().f25054g.setVisibility(8);
            o().f25056i.setVisibility(0);
            o().f25057j.getMenu().setGroupVisible(0, true);
            o().f25053f.setText("");
        }
        if (z10 && z11) {
            o().f25057j.setNavigationIcon(pp.l.f46184t);
        } else {
            o().f25057j.setNavigationIcon(pp.l.f46185u);
        }
    }

    private final void s() {
        if (this.f26852c) {
            return;
        }
        this.f26852c = true;
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f25049b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.a1(true);
        Function0 function0 = new Function0() { // from class: hq.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t();
                return t10;
            }
        };
        FrameLayout bottomSheet = o().f25049b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        zp.b.b(q02, function0, bottomSheet, o().f25050c, o().f25055h);
        q02.c0(new b());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t() {
        return Unit.f31988a;
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void w(boolean z10, k kVar, View view) {
        if (z10) {
            TextInputLayout searchBarTextInput = kVar.o().f25054g;
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
            kVar.q(new Function0() { // from class: hq.i
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(Ref.ObjectRef objectRef, n nVar, k kVar, int i10) {
        if (i10 == 5) {
            Function1 function1 = (Function1) objectRef.element;
            if (function1 != null) {
                function1.invoke(CollectionsKt.h1(nVar.c()));
            }
            objectRef.element = null;
            Context context = kVar.f26850a.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            pp.f.d(context);
        }
        return Unit.f31988a;
    }

    public final boolean m() {
        if (!this.f26851b.isInitialized()) {
            return false;
        }
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f25049b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = this.f26850a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        pp.f.d(context);
        this.f26850a.postDelayed(new Runnable() { // from class: hq.h
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
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f25049b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = o().f25052e.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final n nVar = new n(context, component.b(), component.getStyles(), component.c(), component.f(), new Function1() { // from class: hq.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = k.v(c2.this, objectRef, this, (b4) obj);
                return v10;
            }
        });
        this.f26853d = new Function1() { // from class: hq.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = k.z(Ref.ObjectRef.this, nVar, this, ((Integer) obj).intValue());
                return z12;
            }
        };
        r(z10, z11);
        o().f25057j.setOnMenuItemClickListener(new Toolbar.h() { // from class: hq.d
            @Override // androidx.appcompat.widget.Toolbar.h
            public final boolean onMenuItemClick(MenuItem menuItem) {
                boolean A;
                A = k.A(k.this, z11, menuItem);
                return A;
            }
        });
        o().f25056i.setText(component.getLabel());
        o().f25052e.setAdapter(nVar);
        o().f25055h.setOnClickListener(new View.OnClickListener() { // from class: hq.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.B(BottomSheetBehavior.this, view);
            }
        });
        InputSelectBoxComponentStyle styles = component.getStyles();
        if (styles != null) {
            TextView textviewInputSelectSheetTitle = o().f25056i;
            Intrinsics.checkNotNullExpressionValue(textviewInputSelectSheetTitle, "textviewInputSelectSheetTitle");
            f0.n(textviewInputSelectSheetTitle, styles.getTextBasedStyle(), null, 2, null);
            Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
            if (baseBackgroundColorValue != null) {
                int intValue = baseBackgroundColorValue.intValue();
                o().f25050c.setBackgroundColor(intValue);
                o().f25052e.setBackgroundColor(intValue);
            }
            Integer baseBorderColorValue = styles.getBaseBorderColorValue();
            if (baseBorderColorValue != null) {
                o().f25051d.setBackgroundColor(baseBorderColorValue.intValue());
            }
            Integer headerCancelButtonColor = styles.getHeaderCancelButtonColor();
            if (headerCancelButtonColor != null) {
                int intValue2 = headerCancelButtonColor.intValue();
                o().f25057j.setNavigationIconTint(intValue2);
                o().f25054g.setEndIconTintList(ColorStateList.valueOf(intValue2));
            }
            Integer baseTextColor = styles.getBaseTextColor();
            if (baseTextColor != null) {
                int intValue3 = baseTextColor.intValue();
                ColorStateList valueOf = ColorStateList.valueOf(r1.c.l(intValue3, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                Intrinsics.checkNotNullExpressionValue(valueOf, "valueOf(...)");
                o().f25053f.setHintTextColor(valueOf);
                o().f25053f.setTextColor(intValue3);
            }
        }
        o().f25052e.setLayoutManager(new LinearLayoutManager(o().getRoot().getContext()));
        o().f25052e.setHasFixedSize(true);
        o().f25053f.addTextChangedListener(new c(nVar));
        o().f25057j.setNavigationOnClickListener(new View.OnClickListener() { // from class: hq.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.w(z11, this, view);
            }
        });
        o().f25053f.setText("");
        o().f25049b.setTranslationY(0.0f);
        this.f26850a.postDelayed(new Runnable() { // from class: hq.g
            @Override // java.lang.Runnable
            public final void run() {
                k.x(z10, this, q02);
            }
        }, 100L);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f26879d;

        c(n nVar) {
            this.f26879d = nVar;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            this.f26879d.g(String.valueOf(editable));
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
