package tq;

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
import androidx.core.view.i0;
import androidx.lifecycle.p;
import androidx.recyclerview.widget.LinearLayoutManager;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
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
import pq.b4;
import pq.c2;
import uq.f0;
import ys.c1;
import ys.j1;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f50406a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f50407b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50408c;

    /* renamed from: d  reason: collision with root package name */
    private Function1 f50409d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50410d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f50411e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function0 f50413o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: tq.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0679a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f50414d;

            /* renamed from: e  reason: collision with root package name */
            int f50415e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f50416i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ k f50417o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Function0 f50418p;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: tq.k$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0680a implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Ref.BooleanRef f50419d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f50420e;

                C0680a(Ref.BooleanRef booleanRef, CancellableContinuation cancellableContinuation) {
                    this.f50419d = booleanRef;
                    this.f50420e = cancellableContinuation;
                }

                public final void a(WindowInsetsCompat insets) {
                    Intrinsics.checkNotNullParameter(insets, "insets");
                    if (!this.f50419d.element) {
                        Insets f10 = insets.f(WindowInsetsCompat.p.c());
                        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                        if (f10.f3307d > 0) {
                            this.f50419d.element = true;
                            CancellableContinuation cancellableContinuation = this.f50420e;
                            Result.a aVar = Result.f32553e;
                            cancellableContinuation.resumeWith(Result.b(Unit.f32556a));
                        }
                    }
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((WindowInsetsCompat) obj);
                    return Unit.f32556a;
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: tq.k$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f50421d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f50422e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                b(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f50422e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new b(this.f50422e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    gs.b.f();
                    if (this.f50421d == 0) {
                        kotlin.c.b(obj);
                        this.f50422e.invoke();
                        return Unit.f32556a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0679a(CompletableJob completableJob, k kVar, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f50416i = completableJob;
                this.f50417o = kVar;
                this.f50418p = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0679a(this.f50416i, this.f50417o, this.f50418p, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x005f, code lost:
                if (r8 == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:16:0x0075, code lost:
                if (ys.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = gs.b.f()
                    int r1 = r7.f50415e
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
                    java.lang.Object r1 = r7.f50414d
                    tq.k r1 = (tq.k) r1
                    kotlin.c.b(r8)
                    goto L62
                L23:
                    kotlin.c.b(r8)
                    tq.k r8 = r7.f50417o
                    r7.f50414d = r8
                    r7.f50415e = r4
                    kotlinx.coroutines.e r1 = new kotlinx.coroutines.e
                    kotlin.coroutines.Continuation r5 = gs.b.c(r7)
                    r1.<init>(r5, r4)
                    r1.H()
                    kotlin.jvm.internal.Ref$BooleanRef r5 = new kotlin.jvm.internal.Ref$BooleanRef
                    r5.<init>()
                    sq.a r8 = tq.k.k(r8)
                    android.widget.FrameLayout r8 = r8.getRoot()
                    java.lang.String r6 = "getRoot(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r6)
                    tq.k$a$a$a r6 = new tq.k$a$a$a
                    r6.<init>(r5, r1)
                    lq.f.g(r8, r6)
                    java.lang.Object r8 = r1.B()
                    java.lang.Object r1 = gs.b.f()
                    if (r8 != r1) goto L5f
                    kotlin.coroutines.jvm.internal.g.c(r7)
                L5f:
                    if (r8 != r0) goto L62
                    goto L77
                L62:
                    ys.c1 r8 = ys.m0.c()
                    tq.k$a$a$b r1 = new tq.k$a$a$b
                    kotlin.jvm.functions.Function0 r5 = r7.f50418p
                    r1.<init>(r5, r3)
                    r7.f50414d = r3
                    r7.f50415e = r2
                    java.lang.Object r8 = ys.g.g(r8, r1, r7)
                    if (r8 != r0) goto L78
                L77:
                    return r0
                L78:
                    kotlinx.coroutines.CompletableJob r8 = r7.f50416i
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f32556a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: tq.k.a.C0679a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0679a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f50423d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f50424e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f50425i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Function0 f50426o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: tq.k$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0681a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f50427d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f50428e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0681a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f50428e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0681a(this.f50428e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    gs.b.f();
                    if (this.f50427d == 0) {
                        kotlin.c.b(obj);
                        this.f50428e.invoke();
                        return Unit.f32556a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0681a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(k kVar, CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f50424e = kVar;
                this.f50425i = completableJob;
                this.f50426o = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f50424e, this.f50425i, this.f50426o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = gs.b.f();
                int i10 = this.f50423d;
                if (i10 != 0 && i10 != 1) {
                    if (i10 == 2) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    while (true) {
                        WindowInsetsCompat F = i0.F(this.f50424e.o().getRoot());
                        if (F != null && F.u(WindowInsetsCompat.p.c())) {
                            c1 c10 = m0.c();
                            C0681a c0681a = new C0681a(this.f50426o, null);
                            this.f50423d = 2;
                            if (ys.g.g(c10, c0681a, this) == f10) {
                                break;
                            }
                        } else {
                            this.f50423d = 1;
                            if (ys.i0.a(100L, this) == f10) {
                                break;
                            }
                        }
                    }
                    return f10;
                }
                Job.a.a(this.f50425i, null, 1, null);
                return Unit.f32556a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f50429d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CompletableJob f50430e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function0 f50431i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: tq.k$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0682a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f50432d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f50433e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0682a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f50433e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0682a(this.f50433e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    gs.b.f();
                    if (this.f50432d == 0) {
                        kotlin.c.b(obj);
                        this.f50433e.invoke();
                        return Unit.f32556a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0682a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f50430e = completableJob;
                this.f50431i = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new c(this.f50430e, this.f50431i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x002a, code lost:
                if (ys.i0.a(1000, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:14:0x003e, code lost:
                if (ys.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = gs.b.f()
                    int r1 = r7.f50429d
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
                    r7.f50429d = r4
                    r5 = 1000(0x3e8, double:4.94E-321)
                    java.lang.Object r8 = ys.i0.a(r5, r7)
                    if (r8 != r0) goto L2d
                    goto L40
                L2d:
                    ys.c1 r8 = ys.m0.c()
                    tq.k$a$c$a r1 = new tq.k$a$c$a
                    kotlin.jvm.functions.Function0 r5 = r7.f50431i
                    r1.<init>(r5, r3)
                    r7.f50429d = r2
                    java.lang.Object r8 = ys.g.g(r8, r1, r7)
                    if (r8 != r0) goto L41
                L40:
                    return r0
                L41:
                    kotlinx.coroutines.CompletableJob r8 = r7.f50430e
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f32556a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: tq.k.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0, Continuation continuation) {
            super(2, continuation);
            this.f50413o = function0;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f50413o, continuation);
            aVar.f50411e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            gs.b.f();
            if (this.f50410d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f50411e;
                CompletableJob b10 = j1.b(null, 1, null);
                ys.i.d(coroutineScope, b10, null, new C0679a(b10, k.this, this.f50413o, null), 2, null);
                ys.i.d(coroutineScope, b10, null, new b(k.this, b10, this.f50413o, null), 2, null);
                ys.i.d(coroutineScope, b10, null, new c(b10, this.f50413o, null), 2, null);
                return Unit.f32556a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32556a);
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
            Function1 function1 = k.this.f50409d;
            if (function1 != null) {
                function1.invoke(Integer.valueOf(i10));
            }
        }
    }

    public k(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f50406a = contentView;
        this.f50407b = as.l.b(new Function0() { // from class: tq.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                sq.a p10;
                p10 = k.p(k.this);
                return p10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean A(k kVar, boolean z10, MenuItem menuItem) {
        if (menuItem.getItemId() == nq.e.F) {
            kVar.r(true, z10);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void B(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.c1(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.c1(5);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final sq.a o() {
        return (sq.a) this.f50407b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final sq.a p(k kVar) {
        return sq.a.c(LayoutInflater.from(kVar.f50406a.getContext()), kVar.f50406a, true);
    }

    private final void q(Function0 function0) {
        Context context = this.f50406a.getContext();
        Intrinsics.checkNotNull(context);
        AppCompatActivity a10 = bq.f.a(context);
        if (a10 != null) {
            ys.i.d(p.a(a10), null, null, new a(function0, null), 3, null);
        }
    }

    private final void r(boolean z10, boolean z11) {
        if (z10) {
            o().f48763i.setVisibility(8);
            o().f48761g.setVisibility(0);
            o().f48764j.getMenu().setGroupVisible(0, false);
            o().f48760f.requestFocus();
            Context context = o().f48760f.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            bq.f.j(context);
        } else {
            Context context2 = o().f48760f.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            bq.f.d(context2);
            o().f48761g.setVisibility(8);
            o().f48763i.setVisibility(0);
            o().f48764j.getMenu().setGroupVisible(0, true);
            o().f48760f.setText("");
        }
        if (z10 && z11) {
            o().f48764j.setNavigationIcon(bq.l.f7387t);
        } else {
            o().f48764j.setNavigationIcon(bq.l.f7388u);
        }
    }

    private final void s() {
        if (this.f50408c) {
            return;
        }
        this.f50408c = true;
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f48756b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.e1(true);
        Function0 function0 = new Function0() { // from class: tq.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t();
                return t10;
            }
        };
        FrameLayout bottomSheet = o().f48756b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        lq.b.b(q02, function0, bottomSheet, o().f48757c, o().f48762h);
        q02.c0(new b());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t() {
        return Unit.f32556a;
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
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void w(boolean z10, k kVar, View view) {
        if (z10) {
            TextInputLayout searchBarTextInput = kVar.o().f48761g;
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
            kVar.q(new Function0() { // from class: tq.i
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit y10;
                    y10 = k.y(BottomSheetBehavior.this);
                    return y10;
                }
            });
        } else {
            bottomSheetBehavior.c1(3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(BottomSheetBehavior bottomSheetBehavior) {
        bottomSheetBehavior.c1(3);
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(Ref.ObjectRef objectRef, n nVar, k kVar, int i10) {
        if (i10 == 5) {
            Function1 function1 = (Function1) objectRef.element;
            if (function1 != null) {
                function1.invoke(CollectionsKt.h1(nVar.c()));
            }
            objectRef.element = null;
            Context context = kVar.f50406a.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            bq.f.d(context);
        }
        return Unit.f32556a;
    }

    public final boolean m() {
        if (!this.f50407b.isInitialized()) {
            return false;
        }
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f48756b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = this.f50406a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        bq.f.d(context);
        this.f50406a.postDelayed(new Runnable() { // from class: tq.h
            @Override // java.lang.Runnable
            public final void run() {
                k.n(BottomSheetBehavior.this);
            }
        }, 100L);
        if (q02.x0() == 5) {
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
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f48756b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = o().f48759e.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final n nVar = new n(context, component.b(), component.getStyles(), component.c(), component.f(), new Function1() { // from class: tq.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = k.v(c2.this, objectRef, this, (b4) obj);
                return v10;
            }
        });
        this.f50409d = new Function1() { // from class: tq.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = k.z(Ref.ObjectRef.this, nVar, this, ((Integer) obj).intValue());
                return z12;
            }
        };
        r(z10, z11);
        o().f48764j.setOnMenuItemClickListener(new Toolbar.h() { // from class: tq.d
            @Override // androidx.appcompat.widget.Toolbar.h
            public final boolean onMenuItemClick(MenuItem menuItem) {
                boolean A;
                A = k.A(k.this, z11, menuItem);
                return A;
            }
        });
        o().f48763i.setText(component.getLabel());
        o().f48759e.setAdapter(nVar);
        o().f48762h.setOnClickListener(new View.OnClickListener() { // from class: tq.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.B(BottomSheetBehavior.this, view);
            }
        });
        InputSelectBoxComponentStyle styles = component.getStyles();
        if (styles != null) {
            TextView textviewInputSelectSheetTitle = o().f48763i;
            Intrinsics.checkNotNullExpressionValue(textviewInputSelectSheetTitle, "textviewInputSelectSheetTitle");
            f0.n(textviewInputSelectSheetTitle, styles.getTextBasedStyle(), null, 2, null);
            Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
            if (baseBackgroundColorValue != null) {
                int intValue = baseBackgroundColorValue.intValue();
                o().f48757c.setBackgroundColor(intValue);
                o().f48759e.setBackgroundColor(intValue);
            }
            Integer baseBorderColorValue = styles.getBaseBorderColorValue();
            if (baseBorderColorValue != null) {
                o().f48758d.setBackgroundColor(baseBorderColorValue.intValue());
            }
            Integer headerCancelButtonColor = styles.getHeaderCancelButtonColor();
            if (headerCancelButtonColor != null) {
                int intValue2 = headerCancelButtonColor.intValue();
                o().f48764j.setNavigationIconTint(intValue2);
                o().f48761g.setEndIconTintList(ColorStateList.valueOf(intValue2));
            }
            Integer baseTextColor = styles.getBaseTextColor();
            if (baseTextColor != null) {
                int intValue3 = baseTextColor.intValue();
                ColorStateList valueOf = ColorStateList.valueOf(r1.c.l(intValue3, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                Intrinsics.checkNotNullExpressionValue(valueOf, "valueOf(...)");
                o().f48760f.setHintTextColor(valueOf);
                o().f48760f.setTextColor(intValue3);
            }
        }
        o().f48759e.setLayoutManager(new LinearLayoutManager(o().getRoot().getContext()));
        o().f48759e.setHasFixedSize(true);
        o().f48760f.addTextChangedListener(new c(nVar));
        o().f48764j.setNavigationOnClickListener(new View.OnClickListener() { // from class: tq.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.w(z11, this, view);
            }
        });
        o().f48760f.setText("");
        o().f48756b.setTranslationY(0.0f);
        this.f50406a.postDelayed(new Runnable() { // from class: tq.g
            @Override // java.lang.Runnable
            public final void run() {
                k.x(z10, this, q02);
            }
        }, 100L);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f50435d;

        c(n nVar) {
            this.f50435d = nVar;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            this.f50435d.g(String.valueOf(editable));
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
