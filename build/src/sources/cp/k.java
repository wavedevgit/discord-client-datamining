package cp;

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
import cp.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements ym.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f19685d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19686e;

    /* renamed from: i  reason: collision with root package name */
    private final String f19687i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f19688o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f19689p;

    /* renamed from: q  reason: collision with root package name */
    private final String f19690q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f19691r;

    /* renamed from: s  reason: collision with root package name */
    private final ym.c0 f19692s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f19693d;

        a(BottomSheetBehavior bottomSheetBehavior) {
            this.f19693d = bottomSheetBehavior;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(BottomSheetBehavior bottomSheetBehavior) {
            bottomSheetBehavior.Y0(3);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            final BottomSheetBehavior bottomSheetBehavior = this.f19693d;
            view.postDelayed(new Runnable() { // from class: cp.j
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
        public static final b f19694d = new b();

        b() {
            super(3, dp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2RequestPermissionRationaleBinding;", 0);
        }

        public final dp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return dp.b.c(p02, viewGroup, z10);
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
        this.f19685d = titleText;
        this.f19686e = messageText;
        this.f19687i = positiveButtonText;
        this.f19688o = stepStyle;
        this.f19689p = onPositiveButtonClick;
        this.f19690q = negativeButtonText;
        this.f19691r = onNegativeButtonClick;
        k.a aVar = ym.k.f54648a;
        this.f19692s = new ym.z(Reflection.getOrCreateKotlinClass(k.class), b.f19694d, new Function1() { // from class: cp.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ym.k u10;
                u10 = k.u(k.this, (dp.b) obj);
                return u10;
            }
        });
    }

    private final void k(StepStyle stepStyle, dp.b bVar, boolean z10) {
        ButtonCancelComponentStyle buttonSecondaryStyleValue;
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        FrameLayout bottomSheet = bVar.f20716b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ConstraintLayout bottomSheetContent = bVar.f20717c;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        fq.c.c(bottomSheet, stepStyle, bottomSheetContent, null, 4, null);
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView title = bVar.f20723i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            fq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView message = bVar.f20719e;
            Intrinsics.checkNotNullExpressionValue(message, "message");
            fq.f0.n(message, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (buttonPrimaryStyleValue = stepStyle.getButtonPrimaryStyleValue()) != null) {
            Button positiveButton = bVar.f20721g;
            Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
            fq.e.f(positiveButton, buttonPrimaryStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (buttonSecondaryStyleValue = stepStyle.getButtonSecondaryStyleValue()) != null) {
            Button negativeButton = bVar.f20720f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            fq.e.f(negativeButton, buttonSecondaryStyleValue, false, !z10, 2, null);
        }
    }

    private final void l(dp.b bVar) {
        int d10;
        Integer backgroundColorValue;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(bVar.f20716b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: cp.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = k.m(k.this);
                return m10;
            }
        };
        FrameLayout bottomSheet = bVar.f20716b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        wp.b.b(q02, function0, bottomSheet, null, bVar.f20722h);
        bVar.getRoot().addOnAttachStateChangeListener(new a(q02));
        bVar.f20716b.setOnClickListener(new View.OnClickListener() { // from class: cp.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.n(view);
            }
        });
        bVar.f20722h.setOnClickListener(new View.OnClickListener() { // from class: cp.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.o(BottomSheetBehavior.this, view);
            }
        });
        StepStyle stepStyle = this.f19688o;
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = bVar.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = mp.s.d(context, yg.b.f54103o, null, false, 6, null);
        }
        bVar.getRoot().setTag(zo.g.f56120a, Integer.valueOf(d10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k kVar) {
        kVar.f19691r.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    private final void p(final dp.b bVar, final k kVar, ym.a0 a0Var) {
        if (this.f19685d.length() > 0) {
            TextView title = bVar.f20723i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            bq.f.d(title, this.f19685d);
        } else {
            bVar.f20723i.setVisibility(8);
        }
        TextView message = bVar.f20719e;
        Intrinsics.checkNotNullExpressionValue(message, "message");
        bq.f.d(message, this.f19686e);
        bVar.f20721g.setText(kVar.f19687i);
        bVar.f20721g.setOnClickListener(new View.OnClickListener() { // from class: cp.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.r(k.this, view);
            }
        });
        bVar.f20720f.setText(kVar.f19690q);
        bVar.f20720f.setOnClickListener(new View.OnClickListener() { // from class: cp.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.s(k.this, view);
            }
        });
        FrameLayout bottomSheet = bVar.f20716b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ym.e.c(bottomSheet, new Function0() { // from class: cp.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t(k.this);
                return t10;
            }
        });
        Button negativeButton = bVar.f20720f;
        Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
        wp.s.b(negativeButton, new Function0() { // from class: cp.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = k.q(dp.b.this, this);
                return q10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(dp.b bVar, k kVar) {
        boolean z10 = true;
        if (bVar.f20720f.getLineCount() <= 1 && bVar.f20721g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button negativeButton = bVar.f20720f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            ViewGroup.LayoutParams layoutParams = negativeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = bVar.f20718d.getWidth();
                negativeButton.setLayoutParams(layoutParams);
                Button positiveButton = bVar.f20721g;
                Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
                ViewGroup.LayoutParams layoutParams2 = positiveButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = bVar.f20718d.getWidth();
                    positiveButton.setLayoutParams(layoutParams2);
                    bVar.f20718d.setReferencedIds(new int[]{bVar.f20721g.getId(), bVar.f20720f.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        kVar.k(kVar.f19688o, bVar, z10);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(k kVar, View view) {
        kVar.f19689p.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(k kVar, View view) {
        kVar.f19691r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(k kVar) {
        kVar.f19691r.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ym.k u(final k kVar, final dp.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        kVar.l(it);
        return new ym.k() { // from class: cp.b
            @Override // ym.k
            public final void a(Object obj, ym.a0 a0Var) {
                k.v(k.this, it, (k) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(k kVar, dp.b bVar, k rendering, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNull(bVar);
        kVar.p(bVar, rendering, viewEnvironment);
    }

    @Override // ym.b
    public ym.c0 a() {
        return this.f19692s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(View view) {
    }
}
