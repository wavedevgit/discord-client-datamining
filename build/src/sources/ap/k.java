package ap;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import ap.k;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import wm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements wm.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f5912d;

    /* renamed from: e  reason: collision with root package name */
    private final String f5913e;

    /* renamed from: i  reason: collision with root package name */
    private final String f5914i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f5915o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f5916p;

    /* renamed from: q  reason: collision with root package name */
    private final String f5917q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f5918r;

    /* renamed from: s  reason: collision with root package name */
    private final wm.c0 f5919s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f5920d;

        a(BottomSheetBehavior bottomSheetBehavior) {
            this.f5920d = bottomSheetBehavior;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(BottomSheetBehavior bottomSheetBehavior) {
            bottomSheetBehavior.Y0(3);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            final BottomSheetBehavior bottomSheetBehavior = this.f5920d;
            view.postDelayed(new Runnable() { // from class: ap.j
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
        public static final b f5921d = new b();

        b() {
            super(3, bp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2RequestPermissionRationaleBinding;", 0);
        }

        public final bp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return bp.b.c(p02, viewGroup, z10);
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
        this.f5912d = titleText;
        this.f5913e = messageText;
        this.f5914i = positiveButtonText;
        this.f5915o = stepStyle;
        this.f5916p = onPositiveButtonClick;
        this.f5917q = negativeButtonText;
        this.f5918r = onNegativeButtonClick;
        k.a aVar = wm.k.f52359a;
        this.f5919s = new wm.z(Reflection.getOrCreateKotlinClass(k.class), b.f5921d, new Function1() { // from class: ap.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.k u10;
                u10 = k.u(k.this, (bp.b) obj);
                return u10;
            }
        });
    }

    private final void k(StepStyle stepStyle, bp.b bVar, boolean z10) {
        ButtonCancelComponentStyle buttonSecondaryStyleValue;
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        FrameLayout bottomSheet = bVar.f7400b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ConstraintLayout bottomSheetContent = bVar.f7401c;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        dq.c.c(bottomSheet, stepStyle, bottomSheetContent, null, 4, null);
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView title = bVar.f7407i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            dq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView message = bVar.f7403e;
            Intrinsics.checkNotNullExpressionValue(message, "message");
            dq.f0.n(message, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (buttonPrimaryStyleValue = stepStyle.getButtonPrimaryStyleValue()) != null) {
            Button positiveButton = bVar.f7405g;
            Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
            dq.e.f(positiveButton, buttonPrimaryStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (buttonSecondaryStyleValue = stepStyle.getButtonSecondaryStyleValue()) != null) {
            Button negativeButton = bVar.f7404f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            dq.e.f(negativeButton, buttonSecondaryStyleValue, false, !z10, 2, null);
        }
    }

    private final void l(bp.b bVar) {
        int d10;
        Integer backgroundColorValue;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(bVar.f7400b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: ap.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = k.m(k.this);
                return m10;
            }
        };
        FrameLayout bottomSheet = bVar.f7400b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        up.b.b(q02, function0, bottomSheet, null, bVar.f7406h);
        bVar.getRoot().addOnAttachStateChangeListener(new a(q02));
        bVar.f7400b.setOnClickListener(new View.OnClickListener() { // from class: ap.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.n(view);
            }
        });
        bVar.f7406h.setOnClickListener(new View.OnClickListener() { // from class: ap.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.o(BottomSheetBehavior.this, view);
            }
        });
        StepStyle stepStyle = this.f5915o;
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = bVar.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = kp.s.d(context, yg.b.f54345o, null, false, 6, null);
        }
        bVar.getRoot().setTag(xo.g.f53732a, Integer.valueOf(d10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k kVar) {
        kVar.f5918r.invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    private final void p(final bp.b bVar, final k kVar, wm.a0 a0Var) {
        if (this.f5912d.length() > 0) {
            TextView title = bVar.f7407i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            zp.f.d(title, this.f5912d);
        } else {
            bVar.f7407i.setVisibility(8);
        }
        TextView message = bVar.f7403e;
        Intrinsics.checkNotNullExpressionValue(message, "message");
        zp.f.d(message, this.f5913e);
        bVar.f7405g.setText(kVar.f5914i);
        bVar.f7405g.setOnClickListener(new View.OnClickListener() { // from class: ap.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.r(k.this, view);
            }
        });
        bVar.f7404f.setText(kVar.f5917q);
        bVar.f7404f.setOnClickListener(new View.OnClickListener() { // from class: ap.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.s(k.this, view);
            }
        });
        FrameLayout bottomSheet = bVar.f7400b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        wm.e.c(bottomSheet, new Function0() { // from class: ap.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t(k.this);
                return t10;
            }
        });
        Button negativeButton = bVar.f7404f;
        Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
        up.s.b(negativeButton, new Function0() { // from class: ap.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = k.q(bp.b.this, this);
                return q10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(bp.b bVar, k kVar) {
        boolean z10 = true;
        if (bVar.f7404f.getLineCount() <= 1 && bVar.f7405g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button negativeButton = bVar.f7404f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            ViewGroup.LayoutParams layoutParams = negativeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = bVar.f7402d.getWidth();
                negativeButton.setLayoutParams(layoutParams);
                Button positiveButton = bVar.f7405g;
                Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
                ViewGroup.LayoutParams layoutParams2 = positiveButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = bVar.f7402d.getWidth();
                    positiveButton.setLayoutParams(layoutParams2);
                    bVar.f7402d.setReferencedIds(new int[]{bVar.f7405g.getId(), bVar.f7404f.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        kVar.k(kVar.f5915o, bVar, z10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(k kVar, View view) {
        kVar.f5916p.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(k kVar, View view) {
        kVar.f5918r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(k kVar) {
        kVar.f5918r.invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.k u(final k kVar, final bp.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        kVar.l(it);
        return new wm.k() { // from class: ap.b
            @Override // wm.k
            public final void a(Object obj, wm.a0 a0Var) {
                k.v(k.this, it, (k) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(k kVar, bp.b bVar, k rendering, wm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNull(bVar);
        kVar.p(bVar, rendering, viewEnvironment);
    }

    @Override // wm.b
    public wm.c0 a() {
        return this.f5919s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(View view) {
    }
}
