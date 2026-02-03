package eq;

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
import aq.b4;
import aq.c2;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import fq.f0;
import js.c1;
import js.i0;
import js.j1;
import js.m0;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f22538a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f22539b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f22540c;

    /* renamed from: d  reason: collision with root package name */
    private Function1 f22541d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f22542d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f22543e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function0 f22545o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: eq.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0300a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f22546d;

            /* renamed from: e  reason: collision with root package name */
            int f22547e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f22548i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ k f22549o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Function0 f22550p;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: eq.k$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0301a implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Ref.BooleanRef f22551d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f22552e;

                C0301a(Ref.BooleanRef booleanRef, CancellableContinuation cancellableContinuation) {
                    this.f22551d = booleanRef;
                    this.f22552e = cancellableContinuation;
                }

                public final void a(WindowInsetsCompat insets) {
                    Intrinsics.checkNotNullParameter(insets, "insets");
                    if (!this.f22551d.element) {
                        Insets f10 = insets.f(WindowInsetsCompat.p.c());
                        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                        if (f10.f3166d > 0) {
                            this.f22551d.element = true;
                            CancellableContinuation cancellableContinuation = this.f22552e;
                            Result.a aVar = Result.f32461e;
                            cancellableContinuation.resumeWith(Result.b(Unit.f32464a));
                        }
                    }
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((WindowInsetsCompat) obj);
                    return Unit.f32464a;
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: eq.k$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f22553d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f22554e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                b(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f22554e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new b(this.f22554e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    rr.b.f();
                    if (this.f22553d == 0) {
                        kotlin.c.b(obj);
                        this.f22554e.invoke();
                        return Unit.f32464a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0300a(CompletableJob completableJob, k kVar, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f22548i = completableJob;
                this.f22549o = kVar;
                this.f22550p = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0300a(this.f22548i, this.f22549o, this.f22550p, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x005f, code lost:
                if (r8 == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:16:0x0075, code lost:
                if (js.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = rr.b.f()
                    int r1 = r7.f22547e
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
                    java.lang.Object r1 = r7.f22546d
                    eq.k r1 = (eq.k) r1
                    kotlin.c.b(r8)
                    goto L62
                L23:
                    kotlin.c.b(r8)
                    eq.k r8 = r7.f22549o
                    r7.f22546d = r8
                    r7.f22547e = r4
                    kotlinx.coroutines.e r1 = new kotlinx.coroutines.e
                    kotlin.coroutines.Continuation r5 = rr.b.c(r7)
                    r1.<init>(r5, r4)
                    r1.H()
                    kotlin.jvm.internal.Ref$BooleanRef r5 = new kotlin.jvm.internal.Ref$BooleanRef
                    r5.<init>()
                    dq.a r8 = eq.k.k(r8)
                    android.widget.FrameLayout r8 = r8.getRoot()
                    java.lang.String r6 = "getRoot(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r6)
                    eq.k$a$a$a r6 = new eq.k$a$a$a
                    r6.<init>(r5, r1)
                    wp.f.g(r8, r6)
                    java.lang.Object r8 = r1.B()
                    java.lang.Object r1 = rr.b.f()
                    if (r8 != r1) goto L5f
                    kotlin.coroutines.jvm.internal.g.c(r7)
                L5f:
                    if (r8 != r0) goto L62
                    goto L77
                L62:
                    js.c1 r8 = js.m0.c()
                    eq.k$a$a$b r1 = new eq.k$a$a$b
                    kotlin.jvm.functions.Function0 r5 = r7.f22550p
                    r1.<init>(r5, r3)
                    r7.f22546d = r3
                    r7.f22547e = r2
                    java.lang.Object r8 = js.g.g(r8, r1, r7)
                    if (r8 != r0) goto L78
                L77:
                    return r0
                L78:
                    kotlinx.coroutines.CompletableJob r8 = r7.f22548i
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f32464a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: eq.k.a.C0300a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0300a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f22555d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f22556e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f22557i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Function0 f22558o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: eq.k$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0302a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f22559d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f22560e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0302a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f22560e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0302a(this.f22560e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    rr.b.f();
                    if (this.f22559d == 0) {
                        kotlin.c.b(obj);
                        this.f22560e.invoke();
                        return Unit.f32464a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0302a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(k kVar, CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f22556e = kVar;
                this.f22557i = completableJob;
                this.f22558o = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f22556e, this.f22557i, this.f22558o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f22555d;
                if (i10 != 0 && i10 != 1) {
                    if (i10 == 2) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    while (true) {
                        WindowInsetsCompat G = h0.G(this.f22556e.o().getRoot());
                        if (G != null && G.u(WindowInsetsCompat.p.c())) {
                            c1 c10 = m0.c();
                            C0302a c0302a = new C0302a(this.f22558o, null);
                            this.f22555d = 2;
                            if (js.g.g(c10, c0302a, this) == f10) {
                                break;
                            }
                        } else {
                            this.f22555d = 1;
                            if (i0.a(100L, this) == f10) {
                                break;
                            }
                        }
                    }
                    return f10;
                }
                Job.a.a(this.f22557i, null, 1, null);
                return Unit.f32464a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f22561d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CompletableJob f22562e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function0 f22563i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: eq.k$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0303a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f22564d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f22565e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0303a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f22565e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0303a(this.f22565e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    rr.b.f();
                    if (this.f22564d == 0) {
                        kotlin.c.b(obj);
                        this.f22565e.invoke();
                        return Unit.f32464a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0303a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f22562e = completableJob;
                this.f22563i = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new c(this.f22562e, this.f22563i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x002a, code lost:
                if (js.i0.a(1000, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:14:0x003e, code lost:
                if (js.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = rr.b.f()
                    int r1 = r7.f22561d
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
                    r7.f22561d = r4
                    r5 = 1000(0x3e8, double:4.94E-321)
                    java.lang.Object r8 = js.i0.a(r5, r7)
                    if (r8 != r0) goto L2d
                    goto L40
                L2d:
                    js.c1 r8 = js.m0.c()
                    eq.k$a$c$a r1 = new eq.k$a$c$a
                    kotlin.jvm.functions.Function0 r5 = r7.f22563i
                    r1.<init>(r5, r3)
                    r7.f22561d = r2
                    java.lang.Object r8 = js.g.g(r8, r1, r7)
                    if (r8 != r0) goto L41
                L40:
                    return r0
                L41:
                    kotlinx.coroutines.CompletableJob r8 = r7.f22562e
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f32464a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: eq.k.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0, Continuation continuation) {
            super(2, continuation);
            this.f22545o = function0;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f22545o, continuation);
            aVar.f22543e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f22542d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f22543e;
                CompletableJob b10 = j1.b(null, 1, null);
                js.i.d(coroutineScope, b10, null, new C0300a(b10, k.this, this.f22545o, null), 2, null);
                js.i.d(coroutineScope, b10, null, new b(k.this, b10, this.f22545o, null), 2, null);
                js.i.d(coroutineScope, b10, null, new c(b10, this.f22545o, null), 2, null);
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
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
            Function1 function1 = k.this.f22541d;
            if (function1 != null) {
                function1.invoke(Integer.valueOf(i10));
            }
        }
    }

    public k(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f22538a = contentView;
        this.f22539b = lr.l.a(new Function0() { // from class: eq.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                dq.a p10;
                p10 = k.p(k.this);
                return p10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean A(k kVar, boolean z10, MenuItem menuItem) {
        if (menuItem.getItemId() == yp.e.F) {
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
    public final dq.a o() {
        return (dq.a) this.f22539b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dq.a p(k kVar) {
        return dq.a.c(LayoutInflater.from(kVar.f22538a.getContext()), kVar.f22538a, true);
    }

    private final void q(Function0 function0) {
        Context context = this.f22538a.getContext();
        Intrinsics.checkNotNull(context);
        AppCompatActivity a10 = mp.f.a(context);
        if (a10 != null) {
            js.i.d(p.a(a10), null, null, new a(function0, null), 3, null);
        }
    }

    private final void r(boolean z10, boolean z11) {
        if (z10) {
            o().f20732i.setVisibility(8);
            o().f20730g.setVisibility(0);
            o().f20733j.getMenu().setGroupVisible(0, false);
            o().f20729f.requestFocus();
            Context context = o().f20729f.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            mp.f.j(context);
        } else {
            Context context2 = o().f20729f.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            mp.f.d(context2);
            o().f20730g.setVisibility(8);
            o().f20732i.setVisibility(0);
            o().f20733j.getMenu().setGroupVisible(0, true);
            o().f20729f.setText("");
        }
        if (z10 && z11) {
            o().f20733j.setNavigationIcon(mp.l.f38987t);
        } else {
            o().f20733j.setNavigationIcon(mp.l.f38988u);
        }
    }

    private final void s() {
        if (this.f22540c) {
            return;
        }
        this.f22540c = true;
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f20725b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.a1(true);
        Function0 function0 = new Function0() { // from class: eq.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t();
                return t10;
            }
        };
        FrameLayout bottomSheet = o().f20725b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        wp.b.b(q02, function0, bottomSheet, o().f20726c, o().f20731h);
        q02.c0(new b());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t() {
        return Unit.f32464a;
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void w(boolean z10, k kVar, View view) {
        if (z10) {
            TextInputLayout searchBarTextInput = kVar.o().f20730g;
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
            kVar.q(new Function0() { // from class: eq.i
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
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(Ref.ObjectRef objectRef, n nVar, k kVar, int i10) {
        if (i10 == 5) {
            Function1 function1 = (Function1) objectRef.element;
            if (function1 != null) {
                function1.invoke(CollectionsKt.h1(nVar.c()));
            }
            objectRef.element = null;
            Context context = kVar.f22538a.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            mp.f.d(context);
        }
        return Unit.f32464a;
    }

    public final boolean m() {
        if (!this.f22539b.isInitialized()) {
            return false;
        }
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f20725b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = this.f22538a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        mp.f.d(context);
        this.f22538a.postDelayed(new Runnable() { // from class: eq.h
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
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f20725b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = o().f20728e.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final n nVar = new n(context, component.b(), component.getStyles(), component.c(), component.f(), new Function1() { // from class: eq.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = k.v(c2.this, objectRef, this, (b4) obj);
                return v10;
            }
        });
        this.f22541d = new Function1() { // from class: eq.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = k.z(Ref.ObjectRef.this, nVar, this, ((Integer) obj).intValue());
                return z12;
            }
        };
        r(z10, z11);
        o().f20733j.setOnMenuItemClickListener(new Toolbar.h() { // from class: eq.d
            @Override // androidx.appcompat.widget.Toolbar.h
            public final boolean onMenuItemClick(MenuItem menuItem) {
                boolean A;
                A = k.A(k.this, z11, menuItem);
                return A;
            }
        });
        o().f20732i.setText(component.getLabel());
        o().f20728e.setAdapter(nVar);
        o().f20731h.setOnClickListener(new View.OnClickListener() { // from class: eq.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.B(BottomSheetBehavior.this, view);
            }
        });
        InputSelectBoxComponentStyle styles = component.getStyles();
        if (styles != null) {
            TextView textviewInputSelectSheetTitle = o().f20732i;
            Intrinsics.checkNotNullExpressionValue(textviewInputSelectSheetTitle, "textviewInputSelectSheetTitle");
            f0.n(textviewInputSelectSheetTitle, styles.getTextBasedStyle(), null, 2, null);
            Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
            if (baseBackgroundColorValue != null) {
                int intValue = baseBackgroundColorValue.intValue();
                o().f20726c.setBackgroundColor(intValue);
                o().f20728e.setBackgroundColor(intValue);
            }
            Integer baseBorderColorValue = styles.getBaseBorderColorValue();
            if (baseBorderColorValue != null) {
                o().f20727d.setBackgroundColor(baseBorderColorValue.intValue());
            }
            Integer headerCancelButtonColor = styles.getHeaderCancelButtonColor();
            if (headerCancelButtonColor != null) {
                int intValue2 = headerCancelButtonColor.intValue();
                o().f20733j.setNavigationIconTint(intValue2);
                o().f20730g.setEndIconTintList(ColorStateList.valueOf(intValue2));
            }
            Integer baseTextColor = styles.getBaseTextColor();
            if (baseTextColor != null) {
                int intValue3 = baseTextColor.intValue();
                ColorStateList valueOf = ColorStateList.valueOf(r1.c.l(intValue3, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                Intrinsics.checkNotNullExpressionValue(valueOf, "valueOf(...)");
                o().f20729f.setHintTextColor(valueOf);
                o().f20729f.setTextColor(intValue3);
            }
        }
        o().f20728e.setLayoutManager(new LinearLayoutManager(o().getRoot().getContext()));
        o().f20728e.setHasFixedSize(true);
        o().f20729f.addTextChangedListener(new c(nVar));
        o().f20733j.setNavigationOnClickListener(new View.OnClickListener() { // from class: eq.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.w(z11, this, view);
            }
        });
        o().f20729f.setText("");
        o().f20725b.setTranslationY(0.0f);
        this.f22538a.postDelayed(new Runnable() { // from class: eq.g
            @Override // java.lang.Runnable
            public final void run() {
                k.x(z10, this, q02);
            }
        }, 100L);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f22567d;

        c(n nVar) {
            this.f22567d = nVar;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            this.f22567d.g(String.valueOf(editable));
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
