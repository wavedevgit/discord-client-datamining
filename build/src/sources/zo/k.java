package zo;

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
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import vm.k;
import zo.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements vm.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f55934d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55935e;

    /* renamed from: i  reason: collision with root package name */
    private final String f55936i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f55937o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f55938p;

    /* renamed from: q  reason: collision with root package name */
    private final String f55939q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f55940r;

    /* renamed from: s  reason: collision with root package name */
    private final vm.c0 f55941s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f55942d;

        a(BottomSheetBehavior bottomSheetBehavior) {
            this.f55942d = bottomSheetBehavior;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(BottomSheetBehavior bottomSheetBehavior) {
            bottomSheetBehavior.Y0(3);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            final BottomSheetBehavior bottomSheetBehavior = this.f55942d;
            view.postDelayed(new Runnable() { // from class: zo.j
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
        public static final b f55943d = new b();

        b() {
            super(3, ap.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2RequestPermissionRationaleBinding;", 0);
        }

        public final ap.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ap.b.c(p02, viewGroup, z10);
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
        this.f55934d = titleText;
        this.f55935e = messageText;
        this.f55936i = positiveButtonText;
        this.f55937o = stepStyle;
        this.f55938p = onPositiveButtonClick;
        this.f55939q = negativeButtonText;
        this.f55940r = onNegativeButtonClick;
        k.a aVar = vm.k.f51267a;
        this.f55941s = new vm.z(Reflection.getOrCreateKotlinClass(k.class), b.f55943d, new Function1() { // from class: zo.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                vm.k u10;
                u10 = k.u(k.this, (ap.b) obj);
                return u10;
            }
        });
    }

    private final void k(StepStyle stepStyle, ap.b bVar, boolean z10) {
        ButtonCancelComponentStyle buttonSecondaryStyleValue;
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        FrameLayout bottomSheet = bVar.f6577b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ConstraintLayout bottomSheetContent = bVar.f6578c;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        cq.c.c(bottomSheet, stepStyle, bottomSheetContent, null, 4, null);
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView title = bVar.f6584i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            cq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView message = bVar.f6580e;
            Intrinsics.checkNotNullExpressionValue(message, "message");
            cq.f0.n(message, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (buttonPrimaryStyleValue = stepStyle.getButtonPrimaryStyleValue()) != null) {
            Button positiveButton = bVar.f6582g;
            Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
            cq.e.f(positiveButton, buttonPrimaryStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (buttonSecondaryStyleValue = stepStyle.getButtonSecondaryStyleValue()) != null) {
            Button negativeButton = bVar.f6581f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            cq.e.f(negativeButton, buttonSecondaryStyleValue, false, !z10, 2, null);
        }
    }

    private final void l(ap.b bVar) {
        int d10;
        Integer backgroundColorValue;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(bVar.f6577b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: zo.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = k.m(k.this);
                return m10;
            }
        };
        FrameLayout bottomSheet = bVar.f6577b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        tp.b.b(q02, function0, bottomSheet, null, bVar.f6583h);
        bVar.getRoot().addOnAttachStateChangeListener(new a(q02));
        bVar.f6577b.setOnClickListener(new View.OnClickListener() { // from class: zo.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.n(view);
            }
        });
        bVar.f6583h.setOnClickListener(new View.OnClickListener() { // from class: zo.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.o(BottomSheetBehavior.this, view);
            }
        });
        StepStyle stepStyle = this.f55937o;
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = bVar.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = jp.s.d(context, yg.b.f54354o, null, false, 6, null);
        }
        bVar.getRoot().setTag(wo.g.f52736a, Integer.valueOf(d10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k kVar) {
        kVar.f55940r.invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    private final void p(final ap.b bVar, final k kVar, vm.a0 a0Var) {
        if (this.f55934d.length() > 0) {
            TextView title = bVar.f6584i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            yp.f.d(title, this.f55934d);
        } else {
            bVar.f6584i.setVisibility(8);
        }
        TextView message = bVar.f6580e;
        Intrinsics.checkNotNullExpressionValue(message, "message");
        yp.f.d(message, this.f55935e);
        bVar.f6582g.setText(kVar.f55936i);
        bVar.f6582g.setOnClickListener(new View.OnClickListener() { // from class: zo.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.r(k.this, view);
            }
        });
        bVar.f6581f.setText(kVar.f55939q);
        bVar.f6581f.setOnClickListener(new View.OnClickListener() { // from class: zo.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.s(k.this, view);
            }
        });
        FrameLayout bottomSheet = bVar.f6577b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        vm.e.c(bottomSheet, new Function0() { // from class: zo.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t(k.this);
                return t10;
            }
        });
        Button negativeButton = bVar.f6581f;
        Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
        tp.s.b(negativeButton, new Function0() { // from class: zo.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = k.q(ap.b.this, this);
                return q10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(ap.b bVar, k kVar) {
        boolean z10 = true;
        if (bVar.f6581f.getLineCount() <= 1 && bVar.f6582g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button negativeButton = bVar.f6581f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            ViewGroup.LayoutParams layoutParams = negativeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = bVar.f6579d.getWidth();
                negativeButton.setLayoutParams(layoutParams);
                Button positiveButton = bVar.f6582g;
                Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
                ViewGroup.LayoutParams layoutParams2 = positiveButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = bVar.f6579d.getWidth();
                    positiveButton.setLayoutParams(layoutParams2);
                    bVar.f6579d.setReferencedIds(new int[]{bVar.f6582g.getId(), bVar.f6581f.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        kVar.k(kVar.f55937o, bVar, z10);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(k kVar, View view) {
        kVar.f55938p.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(k kVar, View view) {
        kVar.f55940r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(k kVar) {
        kVar.f55940r.invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final vm.k u(final k kVar, final ap.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        kVar.l(it);
        return new vm.k() { // from class: zo.b
            @Override // vm.k
            public final void a(Object obj, vm.a0 a0Var) {
                k.v(k.this, it, (k) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(k kVar, ap.b bVar, k rendering, vm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNull(bVar);
        kVar.p(bVar, rendering, viewEnvironment);
    }

    @Override // vm.b
    public vm.c0 a() {
        return this.f55941s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(View view) {
    }
}
