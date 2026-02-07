package jq;

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
import fq.b4;
import fq.c2;
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
import kq.f0;
import os.c1;
import os.i0;
import os.j1;
import os.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f30894a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f30895b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f30896c;

    /* renamed from: d  reason: collision with root package name */
    private Function1 f30897d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f30898d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f30899e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function0 f30901o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: jq.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0435a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f30902d;

            /* renamed from: e  reason: collision with root package name */
            int f30903e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f30904i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ k f30905o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Function0 f30906p;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: jq.k$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0436a implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Ref.BooleanRef f30907d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f30908e;

                C0436a(Ref.BooleanRef booleanRef, CancellableContinuation cancellableContinuation) {
                    this.f30907d = booleanRef;
                    this.f30908e = cancellableContinuation;
                }

                public final void a(WindowInsetsCompat insets) {
                    Intrinsics.checkNotNullParameter(insets, "insets");
                    if (!this.f30907d.element) {
                        Insets f10 = insets.f(WindowInsetsCompat.p.c());
                        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                        if (f10.f3607d > 0) {
                            this.f30907d.element = true;
                            CancellableContinuation cancellableContinuation = this.f30908e;
                            Result.a aVar = Result.f32053e;
                            cancellableContinuation.resumeWith(Result.b(Unit.f32056a));
                        }
                    }
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((WindowInsetsCompat) obj);
                    return Unit.f32056a;
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: jq.k$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f30909d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f30910e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                b(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f30910e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new b(this.f30910e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    wr.b.f();
                    if (this.f30909d == 0) {
                        kotlin.c.b(obj);
                        this.f30910e.invoke();
                        return Unit.f32056a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0435a(CompletableJob completableJob, k kVar, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f30904i = completableJob;
                this.f30905o = kVar;
                this.f30906p = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0435a(this.f30904i, this.f30905o, this.f30906p, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x005f, code lost:
                if (r8 == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:16:0x0075, code lost:
                if (os.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = wr.b.f()
                    int r1 = r7.f30903e
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
                    java.lang.Object r1 = r7.f30902d
                    jq.k r1 = (jq.k) r1
                    kotlin.c.b(r8)
                    goto L62
                L23:
                    kotlin.c.b(r8)
                    jq.k r8 = r7.f30905o
                    r7.f30902d = r8
                    r7.f30903e = r4
                    kotlinx.coroutines.e r1 = new kotlinx.coroutines.e
                    kotlin.coroutines.Continuation r5 = wr.b.c(r7)
                    r1.<init>(r5, r4)
                    r1.H()
                    kotlin.jvm.internal.Ref$BooleanRef r5 = new kotlin.jvm.internal.Ref$BooleanRef
                    r5.<init>()
                    iq.a r8 = jq.k.k(r8)
                    android.widget.FrameLayout r8 = r8.getRoot()
                    java.lang.String r6 = "getRoot(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r6)
                    jq.k$a$a$a r6 = new jq.k$a$a$a
                    r6.<init>(r5, r1)
                    bq.f.g(r8, r6)
                    java.lang.Object r8 = r1.B()
                    java.lang.Object r1 = wr.b.f()
                    if (r8 != r1) goto L5f
                    kotlin.coroutines.jvm.internal.g.c(r7)
                L5f:
                    if (r8 != r0) goto L62
                    goto L77
                L62:
                    os.c1 r8 = os.m0.c()
                    jq.k$a$a$b r1 = new jq.k$a$a$b
                    kotlin.jvm.functions.Function0 r5 = r7.f30906p
                    r1.<init>(r5, r3)
                    r7.f30902d = r3
                    r7.f30903e = r2
                    java.lang.Object r8 = os.g.g(r8, r1, r7)
                    if (r8 != r0) goto L78
                L77:
                    return r0
                L78:
                    kotlinx.coroutines.CompletableJob r8 = r7.f30904i
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f32056a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: jq.k.a.C0435a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0435a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f30911d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f30912e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f30913i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Function0 f30914o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: jq.k$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0437a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f30915d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f30916e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0437a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f30916e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0437a(this.f30916e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    wr.b.f();
                    if (this.f30915d == 0) {
                        kotlin.c.b(obj);
                        this.f30916e.invoke();
                        return Unit.f32056a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0437a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(k kVar, CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f30912e = kVar;
                this.f30913i = completableJob;
                this.f30914o = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f30912e, this.f30913i, this.f30914o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f30911d;
                if (i10 != 0 && i10 != 1) {
                    if (i10 == 2) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    while (true) {
                        WindowInsetsCompat G = h0.G(this.f30912e.o().getRoot());
                        if (G != null && G.u(WindowInsetsCompat.p.c())) {
                            c1 c10 = m0.c();
                            C0437a c0437a = new C0437a(this.f30914o, null);
                            this.f30911d = 2;
                            if (os.g.g(c10, c0437a, this) == f10) {
                                break;
                            }
                        } else {
                            this.f30911d = 1;
                            if (i0.a(100L, this) == f10) {
                                break;
                            }
                        }
                    }
                    return f10;
                }
                Job.a.a(this.f30913i, null, 1, null);
                return Unit.f32056a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f30917d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CompletableJob f30918e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function0 f30919i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: jq.k$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0438a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f30920d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f30921e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0438a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f30921e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0438a(this.f30921e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    wr.b.f();
                    if (this.f30920d == 0) {
                        kotlin.c.b(obj);
                        this.f30921e.invoke();
                        return Unit.f32056a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0438a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f30918e = completableJob;
                this.f30919i = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new c(this.f30918e, this.f30919i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x002a, code lost:
                if (os.i0.a(1000, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:14:0x003e, code lost:
                if (os.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = wr.b.f()
                    int r1 = r7.f30917d
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
                    r7.f30917d = r4
                    r5 = 1000(0x3e8, double:4.94E-321)
                    java.lang.Object r8 = os.i0.a(r5, r7)
                    if (r8 != r0) goto L2d
                    goto L40
                L2d:
                    os.c1 r8 = os.m0.c()
                    jq.k$a$c$a r1 = new jq.k$a$c$a
                    kotlin.jvm.functions.Function0 r5 = r7.f30919i
                    r1.<init>(r5, r3)
                    r7.f30917d = r2
                    java.lang.Object r8 = os.g.g(r8, r1, r7)
                    if (r8 != r0) goto L41
                L40:
                    return r0
                L41:
                    kotlinx.coroutines.CompletableJob r8 = r7.f30918e
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f32056a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: jq.k.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0, Continuation continuation) {
            super(2, continuation);
            this.f30901o = function0;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f30901o, continuation);
            aVar.f30899e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f30898d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f30899e;
                CompletableJob b10 = j1.b(null, 1, null);
                os.i.d(coroutineScope, b10, null, new C0435a(b10, k.this, this.f30901o, null), 2, null);
                os.i.d(coroutineScope, b10, null, new b(k.this, b10, this.f30901o, null), 2, null);
                os.i.d(coroutineScope, b10, null, new c(b10, this.f30901o, null), 2, null);
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
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
            Function1 function1 = k.this.f30897d;
            if (function1 != null) {
                function1.invoke(Integer.valueOf(i10));
            }
        }
    }

    public k(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f30894a = contentView;
        this.f30895b = qr.l.a(new Function0() { // from class: jq.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                iq.a p10;
                p10 = k.p(k.this);
                return p10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean A(k kVar, boolean z10, MenuItem menuItem) {
        if (menuItem.getItemId() == dq.e.F) {
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
    public final iq.a o() {
        return (iq.a) this.f30895b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final iq.a p(k kVar) {
        return iq.a.c(LayoutInflater.from(kVar.f30894a.getContext()), kVar.f30894a, true);
    }

    private final void q(Function0 function0) {
        Context context = this.f30894a.getContext();
        Intrinsics.checkNotNull(context);
        AppCompatActivity a10 = rp.f.a(context);
        if (a10 != null) {
            os.i.d(p.a(a10), null, null, new a(function0, null), 3, null);
        }
    }

    private final void r(boolean z10, boolean z11) {
        if (z10) {
            o().f29231i.setVisibility(8);
            o().f29229g.setVisibility(0);
            o().f29232j.getMenu().setGroupVisible(0, false);
            o().f29228f.requestFocus();
            Context context = o().f29228f.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            rp.f.j(context);
        } else {
            Context context2 = o().f29228f.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            rp.f.d(context2);
            o().f29229g.setVisibility(8);
            o().f29231i.setVisibility(0);
            o().f29232j.getMenu().setGroupVisible(0, true);
            o().f29228f.setText("");
        }
        if (z10 && z11) {
            o().f29232j.setNavigationIcon(rp.l.f49133t);
        } else {
            o().f29232j.setNavigationIcon(rp.l.f49134u);
        }
    }

    private final void s() {
        if (this.f30896c) {
            return;
        }
        this.f30896c = true;
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f29224b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.a1(true);
        Function0 function0 = new Function0() { // from class: jq.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t();
                return t10;
            }
        };
        FrameLayout bottomSheet = o().f29224b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        bq.b.b(q02, function0, bottomSheet, o().f29225c, o().f29230h);
        q02.c0(new b());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t() {
        return Unit.f32056a;
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
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void w(boolean z10, k kVar, View view) {
        if (z10) {
            TextInputLayout searchBarTextInput = kVar.o().f29229g;
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
            kVar.q(new Function0() { // from class: jq.i
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
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(Ref.ObjectRef objectRef, n nVar, k kVar, int i10) {
        if (i10 == 5) {
            Function1 function1 = (Function1) objectRef.element;
            if (function1 != null) {
                function1.invoke(CollectionsKt.h1(nVar.c()));
            }
            objectRef.element = null;
            Context context = kVar.f30894a.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            rp.f.d(context);
        }
        return Unit.f32056a;
    }

    public final boolean m() {
        if (!this.f30895b.isInitialized()) {
            return false;
        }
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f29224b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = this.f30894a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        rp.f.d(context);
        this.f30894a.postDelayed(new Runnable() { // from class: jq.h
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
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f29224b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = o().f29227e.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final n nVar = new n(context, component.b(), component.getStyles(), component.c(), component.f(), new Function1() { // from class: jq.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = k.v(c2.this, objectRef, this, (b4) obj);
                return v10;
            }
        });
        this.f30897d = new Function1() { // from class: jq.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = k.z(Ref.ObjectRef.this, nVar, this, ((Integer) obj).intValue());
                return z12;
            }
        };
        r(z10, z11);
        o().f29232j.setOnMenuItemClickListener(new Toolbar.h() { // from class: jq.d
            @Override // androidx.appcompat.widget.Toolbar.h
            public final boolean onMenuItemClick(MenuItem menuItem) {
                boolean A;
                A = k.A(k.this, z11, menuItem);
                return A;
            }
        });
        o().f29231i.setText(component.getLabel());
        o().f29227e.setAdapter(nVar);
        o().f29230h.setOnClickListener(new View.OnClickListener() { // from class: jq.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.B(BottomSheetBehavior.this, view);
            }
        });
        InputSelectBoxComponentStyle styles = component.getStyles();
        if (styles != null) {
            TextView textviewInputSelectSheetTitle = o().f29231i;
            Intrinsics.checkNotNullExpressionValue(textviewInputSelectSheetTitle, "textviewInputSelectSheetTitle");
            f0.n(textviewInputSelectSheetTitle, styles.getTextBasedStyle(), null, 2, null);
            Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
            if (baseBackgroundColorValue != null) {
                int intValue = baseBackgroundColorValue.intValue();
                o().f29225c.setBackgroundColor(intValue);
                o().f29227e.setBackgroundColor(intValue);
            }
            Integer baseBorderColorValue = styles.getBaseBorderColorValue();
            if (baseBorderColorValue != null) {
                o().f29226d.setBackgroundColor(baseBorderColorValue.intValue());
            }
            Integer headerCancelButtonColor = styles.getHeaderCancelButtonColor();
            if (headerCancelButtonColor != null) {
                int intValue2 = headerCancelButtonColor.intValue();
                o().f29232j.setNavigationIconTint(intValue2);
                o().f29229g.setEndIconTintList(ColorStateList.valueOf(intValue2));
            }
            Integer baseTextColor = styles.getBaseTextColor();
            if (baseTextColor != null) {
                int intValue3 = baseTextColor.intValue();
                ColorStateList valueOf = ColorStateList.valueOf(r1.c.l(intValue3, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                Intrinsics.checkNotNullExpressionValue(valueOf, "valueOf(...)");
                o().f29228f.setHintTextColor(valueOf);
                o().f29228f.setTextColor(intValue3);
            }
        }
        o().f29227e.setLayoutManager(new LinearLayoutManager(o().getRoot().getContext()));
        o().f29227e.setHasFixedSize(true);
        o().f29228f.addTextChangedListener(new c(nVar));
        o().f29232j.setNavigationOnClickListener(new View.OnClickListener() { // from class: jq.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.w(z11, this, view);
            }
        });
        o().f29228f.setText("");
        o().f29224b.setTranslationY(0.0f);
        this.f30894a.postDelayed(new Runnable() { // from class: jq.g
            @Override // java.lang.Runnable
            public final void run() {
                k.x(z10, this, q02);
            }
        }, 100L);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f30923d;

        c(n nVar) {
            this.f30923d = nVar;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            this.f30923d.g(String.valueOf(editable));
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
