package kq;

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
import gq.b4;
import gq.c2;
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
import lq.f0;
import ps.c1;
import ps.i0;
import ps.j1;
import ps.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final ViewGroup f34986a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f34987b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f34988c;

    /* renamed from: d  reason: collision with root package name */
    private Function1 f34989d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f34990d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f34991e;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function0 f34993o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: kq.k$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0494a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f34994d;

            /* renamed from: e  reason: collision with root package name */
            int f34995e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f34996i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ k f34997o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Function0 f34998p;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: kq.k$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0495a implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ Ref.BooleanRef f34999d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ CancellableContinuation f35000e;

                C0495a(Ref.BooleanRef booleanRef, CancellableContinuation cancellableContinuation) {
                    this.f34999d = booleanRef;
                    this.f35000e = cancellableContinuation;
                }

                public final void a(WindowInsetsCompat insets) {
                    Intrinsics.checkNotNullParameter(insets, "insets");
                    if (!this.f34999d.element) {
                        Insets f10 = insets.f(WindowInsetsCompat.p.c());
                        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
                        if (f10.f3304d > 0) {
                            this.f34999d.element = true;
                            CancellableContinuation cancellableContinuation = this.f35000e;
                            Result.a aVar = Result.f31762e;
                            cancellableContinuation.resumeWith(Result.b(Unit.f31765a));
                        }
                    }
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                    a((WindowInsetsCompat) obj);
                    return Unit.f31765a;
                }
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: kq.k$a$a$b */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f35001d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f35002e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                b(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f35002e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new b(this.f35002e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    xr.b.f();
                    if (this.f35001d == 0) {
                        kotlin.c.b(obj);
                        this.f35002e.invoke();
                        return Unit.f31765a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0494a(CompletableJob completableJob, k kVar, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f34996i = completableJob;
                this.f34997o = kVar;
                this.f34998p = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0494a(this.f34996i, this.f34997o, this.f34998p, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:13:0x005f, code lost:
                if (r8 == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:16:0x0075, code lost:
                if (ps.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = xr.b.f()
                    int r1 = r7.f34995e
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
                    java.lang.Object r1 = r7.f34994d
                    kq.k r1 = (kq.k) r1
                    kotlin.c.b(r8)
                    goto L62
                L23:
                    kotlin.c.b(r8)
                    kq.k r8 = r7.f34997o
                    r7.f34994d = r8
                    r7.f34995e = r4
                    kotlinx.coroutines.e r1 = new kotlinx.coroutines.e
                    kotlin.coroutines.Continuation r5 = xr.b.c(r7)
                    r1.<init>(r5, r4)
                    r1.H()
                    kotlin.jvm.internal.Ref$BooleanRef r5 = new kotlin.jvm.internal.Ref$BooleanRef
                    r5.<init>()
                    jq.a r8 = kq.k.k(r8)
                    android.widget.FrameLayout r8 = r8.getRoot()
                    java.lang.String r6 = "getRoot(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r6)
                    kq.k$a$a$a r6 = new kq.k$a$a$a
                    r6.<init>(r5, r1)
                    cq.f.g(r8, r6)
                    java.lang.Object r8 = r1.B()
                    java.lang.Object r1 = xr.b.f()
                    if (r8 != r1) goto L5f
                    kotlin.coroutines.jvm.internal.g.c(r7)
                L5f:
                    if (r8 != r0) goto L62
                    goto L77
                L62:
                    ps.c1 r8 = ps.m0.c()
                    kq.k$a$a$b r1 = new kq.k$a$a$b
                    kotlin.jvm.functions.Function0 r5 = r7.f34998p
                    r1.<init>(r5, r3)
                    r7.f34994d = r3
                    r7.f34995e = r2
                    java.lang.Object r8 = ps.g.g(r8, r1, r7)
                    if (r8 != r0) goto L78
                L77:
                    return r0
                L78:
                    kotlinx.coroutines.CompletableJob r8 = r7.f34996i
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f31765a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: kq.k.a.C0494a.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0494a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f35003d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ k f35004e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ CompletableJob f35005i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ Function0 f35006o;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: kq.k$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0496a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f35007d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f35008e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0496a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f35008e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0496a(this.f35008e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    xr.b.f();
                    if (this.f35007d == 0) {
                        kotlin.c.b(obj);
                        this.f35008e.invoke();
                        return Unit.f31765a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0496a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(k kVar, CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f35004e = kVar;
                this.f35005i = completableJob;
                this.f35006o = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new b(this.f35004e, this.f35005i, this.f35006o, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f35003d;
                if (i10 != 0 && i10 != 1) {
                    if (i10 == 2) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    while (true) {
                        WindowInsetsCompat G = h0.G(this.f35004e.o().getRoot());
                        if (G != null && G.u(WindowInsetsCompat.p.c())) {
                            c1 c10 = m0.c();
                            C0496a c0496a = new C0496a(this.f35006o, null);
                            this.f35003d = 2;
                            if (ps.g.g(c10, c0496a, this) == f10) {
                                break;
                            }
                        } else {
                            this.f35003d = 1;
                            if (i0.a(100L, this) == f10) {
                                break;
                            }
                        }
                    }
                    return f10;
                }
                Job.a.a(this.f35005i, null, 1, null);
                return Unit.f31765a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f35009d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ CompletableJob f35010e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function0 f35011i;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: kq.k$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0497a extends kotlin.coroutines.jvm.internal.k implements Function2 {

                /* renamed from: d  reason: collision with root package name */
                int f35012d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ Function0 f35013e;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                C0497a(Function0 function0, Continuation continuation) {
                    super(2, continuation);
                    this.f35013e = function0;
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Object obj, Continuation continuation) {
                    return new C0497a(this.f35013e, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    xr.b.f();
                    if (this.f35012d == 0) {
                        kotlin.c.b(obj);
                        this.f35013e.invoke();
                        return Unit.f31765a;
                    }
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }

                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                    return ((C0497a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(CompletableJob completableJob, Function0 function0, Continuation continuation) {
                super(2, continuation);
                this.f35010e = completableJob;
                this.f35011i = function0;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new c(this.f35010e, this.f35011i, continuation);
            }

            /* JADX WARN: Code restructure failed: missing block: B:11:0x002a, code lost:
                if (ps.i0.a(1000, r7) == r0) goto L14;
             */
            /* JADX WARN: Code restructure failed: missing block: B:14:0x003e, code lost:
                if (ps.g.g(r8, r1, r7) == r0) goto L14;
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
                    java.lang.Object r0 = xr.b.f()
                    int r1 = r7.f35009d
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
                    r7.f35009d = r4
                    r5 = 1000(0x3e8, double:4.94E-321)
                    java.lang.Object r8 = ps.i0.a(r5, r7)
                    if (r8 != r0) goto L2d
                    goto L40
                L2d:
                    ps.c1 r8 = ps.m0.c()
                    kq.k$a$c$a r1 = new kq.k$a$c$a
                    kotlin.jvm.functions.Function0 r5 = r7.f35011i
                    r1.<init>(r5, r3)
                    r7.f35009d = r2
                    java.lang.Object r8 = ps.g.g(r8, r1, r7)
                    if (r8 != r0) goto L41
                L40:
                    return r0
                L41:
                    kotlinx.coroutines.CompletableJob r8 = r7.f35010e
                    kotlinx.coroutines.Job.a.a(r8, r3, r4, r3)
                    kotlin.Unit r8 = kotlin.Unit.f31765a
                    return r8
                */
                throw new UnsupportedOperationException("Method not decompiled: kq.k.a.c.invokeSuspend(java.lang.Object):java.lang.Object");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0, Continuation continuation) {
            super(2, continuation);
            this.f34993o = function0;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f34993o, continuation);
            aVar.f34991e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f34990d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f34991e;
                CompletableJob b10 = j1.b(null, 1, null);
                ps.i.d(coroutineScope, b10, null, new C0494a(b10, k.this, this.f34993o, null), 2, null);
                ps.i.d(coroutineScope, b10, null, new b(k.this, b10, this.f34993o, null), 2, null);
                ps.i.d(coroutineScope, b10, null, new c(b10, this.f34993o, null), 2, null);
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
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
            Function1 function1 = k.this.f34989d;
            if (function1 != null) {
                function1.invoke(Integer.valueOf(i10));
            }
        }
    }

    public k(ViewGroup contentView) {
        Intrinsics.checkNotNullParameter(contentView, "contentView");
        this.f34986a = contentView;
        this.f34987b = rr.l.a(new Function0() { // from class: kq.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                jq.a p10;
                p10 = k.p(k.this);
                return p10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean A(k kVar, boolean z10, MenuItem menuItem) {
        if (menuItem.getItemId() == eq.e.F) {
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
    public final jq.a o() {
        return (jq.a) this.f34987b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final jq.a p(k kVar) {
        return jq.a.c(LayoutInflater.from(kVar.f34986a.getContext()), kVar.f34986a, true);
    }

    private final void q(Function0 function0) {
        Context context = this.f34986a.getContext();
        Intrinsics.checkNotNull(context);
        AppCompatActivity a10 = sp.f.a(context);
        if (a10 != null) {
            ps.i.d(p.a(a10), null, null, new a(function0, null), 3, null);
        }
    }

    private final void r(boolean z10, boolean z11) {
        if (z10) {
            o().f30310i.setVisibility(8);
            o().f30308g.setVisibility(0);
            o().f30311j.getMenu().setGroupVisible(0, false);
            o().f30307f.requestFocus();
            Context context = o().f30307f.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            sp.f.j(context);
        } else {
            Context context2 = o().f30307f.getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            sp.f.d(context2);
            o().f30308g.setVisibility(8);
            o().f30310i.setVisibility(0);
            o().f30311j.getMenu().setGroupVisible(0, true);
            o().f30307f.setText("");
        }
        if (z10 && z11) {
            o().f30311j.setNavigationIcon(sp.l.f49958t);
        } else {
            o().f30311j.setNavigationIcon(sp.l.f49959u);
        }
    }

    private final void s() {
        if (this.f34988c) {
            return;
        }
        this.f34988c = true;
        BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f30303b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        q02.a1(true);
        Function0 function0 = new Function0() { // from class: kq.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t();
                return t10;
            }
        };
        FrameLayout bottomSheet = o().f30303b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        cq.b.b(q02, function0, bottomSheet, o().f30304c, o().f30309h);
        q02.c0(new b());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t() {
        return Unit.f31765a;
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void w(boolean z10, k kVar, View view) {
        if (z10) {
            TextInputLayout searchBarTextInput = kVar.o().f30308g;
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
            kVar.q(new Function0() { // from class: kq.i
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(Ref.ObjectRef objectRef, n nVar, k kVar, int i10) {
        if (i10 == 5) {
            Function1 function1 = (Function1) objectRef.element;
            if (function1 != null) {
                function1.invoke(CollectionsKt.h1(nVar.c()));
            }
            objectRef.element = null;
            Context context = kVar.f34986a.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            sp.f.d(context);
        }
        return Unit.f31765a;
    }

    public final boolean m() {
        if (!this.f34987b.isInitialized()) {
            return false;
        }
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f30303b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = this.f34986a.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        sp.f.d(context);
        this.f34986a.postDelayed(new Runnable() { // from class: kq.h
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
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(o().f30303b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Context context = o().f30306e.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        final n nVar = new n(context, component.b(), component.getStyles(), component.c(), component.f(), new Function1() { // from class: kq.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit v10;
                v10 = k.v(c2.this, objectRef, this, (b4) obj);
                return v10;
            }
        });
        this.f34989d = new Function1() { // from class: kq.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit z12;
                z12 = k.z(Ref.ObjectRef.this, nVar, this, ((Integer) obj).intValue());
                return z12;
            }
        };
        r(z10, z11);
        o().f30311j.setOnMenuItemClickListener(new Toolbar.h() { // from class: kq.d
            @Override // androidx.appcompat.widget.Toolbar.h
            public final boolean onMenuItemClick(MenuItem menuItem) {
                boolean A;
                A = k.A(k.this, z11, menuItem);
                return A;
            }
        });
        o().f30310i.setText(component.getLabel());
        o().f30306e.setAdapter(nVar);
        o().f30309h.setOnClickListener(new View.OnClickListener() { // from class: kq.e
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.B(BottomSheetBehavior.this, view);
            }
        });
        InputSelectBoxComponentStyle styles = component.getStyles();
        if (styles != null) {
            TextView textviewInputSelectSheetTitle = o().f30310i;
            Intrinsics.checkNotNullExpressionValue(textviewInputSelectSheetTitle, "textviewInputSelectSheetTitle");
            f0.n(textviewInputSelectSheetTitle, styles.getTextBasedStyle(), null, 2, null);
            Integer baseBackgroundColorValue = styles.getBaseBackgroundColorValue();
            if (baseBackgroundColorValue != null) {
                int intValue = baseBackgroundColorValue.intValue();
                o().f30304c.setBackgroundColor(intValue);
                o().f30306e.setBackgroundColor(intValue);
            }
            Integer baseBorderColorValue = styles.getBaseBorderColorValue();
            if (baseBorderColorValue != null) {
                o().f30305d.setBackgroundColor(baseBorderColorValue.intValue());
            }
            Integer headerCancelButtonColor = styles.getHeaderCancelButtonColor();
            if (headerCancelButtonColor != null) {
                int intValue2 = headerCancelButtonColor.intValue();
                o().f30311j.setNavigationIconTint(intValue2);
                o().f30308g.setEndIconTintList(ColorStateList.valueOf(intValue2));
            }
            Integer baseTextColor = styles.getBaseTextColor();
            if (baseTextColor != null) {
                int intValue3 = baseTextColor.intValue();
                ColorStateList valueOf = ColorStateList.valueOf(r1.c.l(intValue3, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                Intrinsics.checkNotNullExpressionValue(valueOf, "valueOf(...)");
                o().f30307f.setHintTextColor(valueOf);
                o().f30307f.setTextColor(intValue3);
            }
        }
        o().f30306e.setLayoutManager(new LinearLayoutManager(o().getRoot().getContext()));
        o().f30306e.setHasFixedSize(true);
        o().f30307f.addTextChangedListener(new c(nVar));
        o().f30311j.setNavigationOnClickListener(new View.OnClickListener() { // from class: kq.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.w(z11, this, view);
            }
        });
        o().f30307f.setText("");
        o().f30303b.setTranslationY(0.0f);
        this.f34986a.postDelayed(new Runnable() { // from class: kq.g
            @Override // java.lang.Runnable
            public final void run() {
                k.x(z10, this, q02);
            }
        }, 100L);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ n f35015d;

        c(n nVar) {
            this.f35015d = nVar;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            this.f35015d.g(String.valueOf(editable));
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
