package rp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import gn.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import rp.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements gn.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f47616d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47617e;

    /* renamed from: i  reason: collision with root package name */
    private final String f47618i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f47619o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f47620p;

    /* renamed from: q  reason: collision with root package name */
    private final String f47621q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f47622r;

    /* renamed from: s  reason: collision with root package name */
    private final gn.c0 f47623s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f47624d;

        a(BottomSheetBehavior bottomSheetBehavior) {
            this.f47624d = bottomSheetBehavior;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(BottomSheetBehavior bottomSheetBehavior) {
            bottomSheetBehavior.c1(3);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            final BottomSheetBehavior bottomSheetBehavior = this.f47624d;
            view.postDelayed(new Runnable() { // from class: rp.j
                @Override // java.lang.Runnable
                public final void run() {
                    k.a.b(BottomSheetBehavior.this);
                }
            }, 100L);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f47625d = new b();

        b() {
            super(3, sp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2RequestPermissionRationaleBinding;", 0);
        }

        public final sp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return sp.b.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public k(String titleText, String messageText, String positiveButtonText, StepStyle stepStyle, Function0 onPositiveButtonClick, String negativeButtonText, Function0 onNegativeButtonClick) {
        Intrinsics.checkNotNullParameter(titleText, "titleText");
        Intrinsics.checkNotNullParameter(messageText, "messageText");
        Intrinsics.checkNotNullParameter(positiveButtonText, "positiveButtonText");
        Intrinsics.checkNotNullParameter(onPositiveButtonClick, "onPositiveButtonClick");
        Intrinsics.checkNotNullParameter(negativeButtonText, "negativeButtonText");
        Intrinsics.checkNotNullParameter(onNegativeButtonClick, "onNegativeButtonClick");
        this.f47616d = titleText;
        this.f47617e = messageText;
        this.f47618i = positiveButtonText;
        this.f47619o = stepStyle;
        this.f47620p = onPositiveButtonClick;
        this.f47621q = negativeButtonText;
        this.f47622r = onNegativeButtonClick;
        k.a aVar = gn.k.f25849a;
        this.f47623s = new gn.z(Reflection.getOrCreateKotlinClass(k.class), b.f47625d, new Function1() { // from class: rp.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                gn.k u10;
                u10 = k.u(k.this, (sp.b) obj);
                return u10;
            }
        });
    }

    private final void k(StepStyle stepStyle, sp.b bVar, boolean z10) {
        ButtonCancelComponentStyle buttonSecondaryStyleValue;
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        FrameLayout bottomSheet = bVar.f48179b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ConstraintLayout bottomSheetContent = bVar.f48180c;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        uq.c.c(bottomSheet, stepStyle, bottomSheetContent, null, 4, null);
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView title = bVar.f48186i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            uq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView message = bVar.f48182e;
            Intrinsics.checkNotNullExpressionValue(message, "message");
            uq.f0.n(message, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (buttonPrimaryStyleValue = stepStyle.getButtonPrimaryStyleValue()) != null) {
            Button positiveButton = bVar.f48184g;
            Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
            uq.e.f(positiveButton, buttonPrimaryStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (buttonSecondaryStyleValue = stepStyle.getButtonSecondaryStyleValue()) != null) {
            Button negativeButton = bVar.f48183f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            uq.e.f(negativeButton, buttonSecondaryStyleValue, false, !z10, 2, null);
        }
    }

    private final void l(sp.b bVar) {
        int d10;
        Integer backgroundColorValue;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(bVar.f48179b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: rp.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = k.m(k.this);
                return m10;
            }
        };
        FrameLayout bottomSheet = bVar.f48179b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        lq.b.b(q02, function0, bottomSheet, null, bVar.f48185h);
        bVar.getRoot().addOnAttachStateChangeListener(new a(q02));
        bVar.f48179b.setOnClickListener(new View.OnClickListener() { // from class: rp.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.n(view);
            }
        });
        bVar.f48185h.setOnClickListener(new View.OnClickListener() { // from class: rp.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.o(BottomSheetBehavior.this, view);
            }
        });
        StepStyle stepStyle = this.f47619o;
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = bVar.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = bq.s.d(context, bh.b.f6751o, null, false, 6, null);
        }
        bVar.getRoot().setTag(op.g.f41085a, Integer.valueOf(d10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k kVar) {
        kVar.f47622r.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.c1(5);
    }

    private final void p(final sp.b bVar, final k kVar, gn.a0 a0Var) {
        if (this.f47616d.length() > 0) {
            TextView title = bVar.f48186i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            qq.f.d(title, this.f47616d);
        } else {
            bVar.f48186i.setVisibility(8);
        }
        TextView message = bVar.f48182e;
        Intrinsics.checkNotNullExpressionValue(message, "message");
        qq.f.d(message, this.f47617e);
        bVar.f48184g.setText(kVar.f47618i);
        bVar.f48184g.setOnClickListener(new View.OnClickListener() { // from class: rp.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.r(k.this, view);
            }
        });
        bVar.f48183f.setText(kVar.f47621q);
        bVar.f48183f.setOnClickListener(new View.OnClickListener() { // from class: rp.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.s(k.this, view);
            }
        });
        FrameLayout bottomSheet = bVar.f48179b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        gn.e.c(bottomSheet, new Function0() { // from class: rp.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t(k.this);
                return t10;
            }
        });
        Button negativeButton = bVar.f48183f;
        Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
        lq.s.b(negativeButton, new Function0() { // from class: rp.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = k.q(sp.b.this, this);
                return q10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(sp.b bVar, k kVar) {
        boolean z10 = true;
        if (bVar.f48183f.getLineCount() <= 1 && bVar.f48184g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button negativeButton = bVar.f48183f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            ViewGroup.LayoutParams layoutParams = negativeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = bVar.f48181d.getWidth();
                negativeButton.setLayoutParams(layoutParams);
                Button positiveButton = bVar.f48184g;
                Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
                ViewGroup.LayoutParams layoutParams2 = positiveButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = bVar.f48181d.getWidth();
                    positiveButton.setLayoutParams(layoutParams2);
                    bVar.f48181d.setReferencedIds(new int[]{bVar.f48184g.getId(), bVar.f48183f.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        kVar.k(kVar.f47619o, bVar, z10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(k kVar, View view) {
        kVar.f47620p.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(k kVar, View view) {
        kVar.f47622r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(k kVar) {
        kVar.f47622r.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gn.k u(final k kVar, final sp.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        kVar.l(it);
        return new gn.k() { // from class: rp.b
            @Override // gn.k
            public final void a(Object obj, gn.a0 a0Var) {
                k.v(k.this, it, (k) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(k kVar, sp.b bVar, k rendering, gn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNull(bVar);
        kVar.p(bVar, rendering, viewEnvironment);
    }

    @Override // gn.b
    public gn.c0 a() {
        return this.f47623s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(View view) {
    }
}
