package hp;

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
import dn.k;
import hp.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements dn.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f26369d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26370e;

    /* renamed from: i  reason: collision with root package name */
    private final String f26371i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f26372o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f26373p;

    /* renamed from: q  reason: collision with root package name */
    private final String f26374q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f26375r;

    /* renamed from: s  reason: collision with root package name */
    private final dn.c0 f26376s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f26377d;

        a(BottomSheetBehavior bottomSheetBehavior) {
            this.f26377d = bottomSheetBehavior;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(BottomSheetBehavior bottomSheetBehavior) {
            bottomSheetBehavior.Y0(3);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            final BottomSheetBehavior bottomSheetBehavior = this.f26377d;
            view.postDelayed(new Runnable() { // from class: hp.j
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
        public static final b f26378d = new b();

        b() {
            super(3, ip.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2RequestPermissionRationaleBinding;", 0);
        }

        public final ip.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return ip.b.c(p02, viewGroup, z10);
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
        this.f26369d = titleText;
        this.f26370e = messageText;
        this.f26371i = positiveButtonText;
        this.f26372o = stepStyle;
        this.f26373p = onPositiveButtonClick;
        this.f26374q = negativeButtonText;
        this.f26375r = onNegativeButtonClick;
        k.a aVar = dn.k.f20913a;
        this.f26376s = new dn.z(Reflection.getOrCreateKotlinClass(k.class), b.f26378d, new Function1() { // from class: hp.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                dn.k u10;
                u10 = k.u(k.this, (ip.b) obj);
                return u10;
            }
        });
    }

    private final void k(StepStyle stepStyle, ip.b bVar, boolean z10) {
        ButtonCancelComponentStyle buttonSecondaryStyleValue;
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        FrameLayout bottomSheet = bVar.f29215b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ConstraintLayout bottomSheetContent = bVar.f29216c;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        kq.c.c(bottomSheet, stepStyle, bottomSheetContent, null, 4, null);
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView title = bVar.f29222i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            kq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView message = bVar.f29218e;
            Intrinsics.checkNotNullExpressionValue(message, "message");
            kq.f0.n(message, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (buttonPrimaryStyleValue = stepStyle.getButtonPrimaryStyleValue()) != null) {
            Button positiveButton = bVar.f29220g;
            Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
            kq.e.f(positiveButton, buttonPrimaryStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (buttonSecondaryStyleValue = stepStyle.getButtonSecondaryStyleValue()) != null) {
            Button negativeButton = bVar.f29219f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            kq.e.f(negativeButton, buttonSecondaryStyleValue, false, !z10, 2, null);
        }
    }

    private final void l(ip.b bVar) {
        int d10;
        Integer backgroundColorValue;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(bVar.f29215b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: hp.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = k.m(k.this);
                return m10;
            }
        };
        FrameLayout bottomSheet = bVar.f29215b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        bq.b.b(q02, function0, bottomSheet, null, bVar.f29221h);
        bVar.getRoot().addOnAttachStateChangeListener(new a(q02));
        bVar.f29215b.setOnClickListener(new View.OnClickListener() { // from class: hp.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.n(view);
            }
        });
        bVar.f29221h.setOnClickListener(new View.OnClickListener() { // from class: hp.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.o(BottomSheetBehavior.this, view);
            }
        });
        StepStyle stepStyle = this.f26372o;
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = bVar.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = rp.s.d(context, ah.b.f653o, null, false, 6, null);
        }
        bVar.getRoot().setTag(ep.g.f22100a, Integer.valueOf(d10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k kVar) {
        kVar.f26375r.invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    private final void p(final ip.b bVar, final k kVar, dn.a0 a0Var) {
        if (this.f26369d.length() > 0) {
            TextView title = bVar.f29222i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            gq.f.d(title, this.f26369d);
        } else {
            bVar.f29222i.setVisibility(8);
        }
        TextView message = bVar.f29218e;
        Intrinsics.checkNotNullExpressionValue(message, "message");
        gq.f.d(message, this.f26370e);
        bVar.f29220g.setText(kVar.f26371i);
        bVar.f29220g.setOnClickListener(new View.OnClickListener() { // from class: hp.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.r(k.this, view);
            }
        });
        bVar.f29219f.setText(kVar.f26374q);
        bVar.f29219f.setOnClickListener(new View.OnClickListener() { // from class: hp.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.s(k.this, view);
            }
        });
        FrameLayout bottomSheet = bVar.f29215b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        dn.e.c(bottomSheet, new Function0() { // from class: hp.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t(k.this);
                return t10;
            }
        });
        Button negativeButton = bVar.f29219f;
        Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
        bq.s.b(negativeButton, new Function0() { // from class: hp.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = k.q(ip.b.this, this);
                return q10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(ip.b bVar, k kVar) {
        boolean z10 = true;
        if (bVar.f29219f.getLineCount() <= 1 && bVar.f29220g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button negativeButton = bVar.f29219f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            ViewGroup.LayoutParams layoutParams = negativeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = bVar.f29217d.getWidth();
                negativeButton.setLayoutParams(layoutParams);
                Button positiveButton = bVar.f29220g;
                Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
                ViewGroup.LayoutParams layoutParams2 = positiveButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = bVar.f29217d.getWidth();
                    positiveButton.setLayoutParams(layoutParams2);
                    bVar.f29217d.setReferencedIds(new int[]{bVar.f29220g.getId(), bVar.f29219f.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        kVar.k(kVar.f26372o, bVar, z10);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(k kVar, View view) {
        kVar.f26373p.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(k kVar, View view) {
        kVar.f26375r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(k kVar) {
        kVar.f26375r.invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dn.k u(final k kVar, final ip.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        kVar.l(it);
        return new dn.k() { // from class: hp.b
            @Override // dn.k
            public final void a(Object obj, dn.a0 a0Var) {
                k.v(k.this, it, (k) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(k kVar, ip.b bVar, k rendering, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNull(bVar);
        kVar.p(bVar, rendering, viewEnvironment);
    }

    @Override // dn.b
    public dn.c0 a() {
        return this.f26376s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(View view) {
    }
}
