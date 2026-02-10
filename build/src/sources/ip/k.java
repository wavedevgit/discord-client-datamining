package ip;

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
import en.k;
import ip.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements en.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f29509d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29510e;

    /* renamed from: i  reason: collision with root package name */
    private final String f29511i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f29512o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f29513p;

    /* renamed from: q  reason: collision with root package name */
    private final String f29514q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f29515r;

    /* renamed from: s  reason: collision with root package name */
    private final en.c0 f29516s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f29517d;

        a(BottomSheetBehavior bottomSheetBehavior) {
            this.f29517d = bottomSheetBehavior;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(BottomSheetBehavior bottomSheetBehavior) {
            bottomSheetBehavior.Y0(3);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            final BottomSheetBehavior bottomSheetBehavior = this.f29517d;
            view.postDelayed(new Runnable() { // from class: ip.j
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
        public static final b f29518d = new b();

        b() {
            super(3, jp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2RequestPermissionRationaleBinding;", 0);
        }

        public final jp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return jp.b.c(p02, viewGroup, z10);
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
        this.f29509d = titleText;
        this.f29510e = messageText;
        this.f29511i = positiveButtonText;
        this.f29512o = stepStyle;
        this.f29513p = onPositiveButtonClick;
        this.f29514q = negativeButtonText;
        this.f29515r = onNegativeButtonClick;
        k.a aVar = en.k.f21834a;
        this.f29516s = new en.z(Reflection.getOrCreateKotlinClass(k.class), b.f29518d, new Function1() { // from class: ip.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.k u10;
                u10 = k.u(k.this, (jp.b) obj);
                return u10;
            }
        });
    }

    private final void k(StepStyle stepStyle, jp.b bVar, boolean z10) {
        ButtonCancelComponentStyle buttonSecondaryStyleValue;
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        FrameLayout bottomSheet = bVar.f30294b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ConstraintLayout bottomSheetContent = bVar.f30295c;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        lq.c.c(bottomSheet, stepStyle, bottomSheetContent, null, 4, null);
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView title = bVar.f30301i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            lq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView message = bVar.f30297e;
            Intrinsics.checkNotNullExpressionValue(message, "message");
            lq.f0.n(message, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (buttonPrimaryStyleValue = stepStyle.getButtonPrimaryStyleValue()) != null) {
            Button positiveButton = bVar.f30299g;
            Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
            lq.e.f(positiveButton, buttonPrimaryStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (buttonSecondaryStyleValue = stepStyle.getButtonSecondaryStyleValue()) != null) {
            Button negativeButton = bVar.f30298f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            lq.e.f(negativeButton, buttonSecondaryStyleValue, false, !z10, 2, null);
        }
    }

    private final void l(jp.b bVar) {
        int d10;
        Integer backgroundColorValue;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(bVar.f30294b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: ip.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = k.m(k.this);
                return m10;
            }
        };
        FrameLayout bottomSheet = bVar.f30294b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        cq.b.b(q02, function0, bottomSheet, null, bVar.f30300h);
        bVar.getRoot().addOnAttachStateChangeListener(new a(q02));
        bVar.f30294b.setOnClickListener(new View.OnClickListener() { // from class: ip.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.n(view);
            }
        });
        bVar.f30300h.setOnClickListener(new View.OnClickListener() { // from class: ip.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.o(BottomSheetBehavior.this, view);
            }
        });
        StepStyle stepStyle = this.f29512o;
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = bVar.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = sp.s.d(context, bh.b.f6641o, null, false, 6, null);
        }
        bVar.getRoot().setTag(fp.g.f23176a, Integer.valueOf(d10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k kVar) {
        kVar.f29515r.invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    private final void p(final jp.b bVar, final k kVar, en.a0 a0Var) {
        if (this.f29509d.length() > 0) {
            TextView title = bVar.f30301i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            hq.f.d(title, this.f29509d);
        } else {
            bVar.f30301i.setVisibility(8);
        }
        TextView message = bVar.f30297e;
        Intrinsics.checkNotNullExpressionValue(message, "message");
        hq.f.d(message, this.f29510e);
        bVar.f30299g.setText(kVar.f29511i);
        bVar.f30299g.setOnClickListener(new View.OnClickListener() { // from class: ip.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.r(k.this, view);
            }
        });
        bVar.f30298f.setText(kVar.f29514q);
        bVar.f30298f.setOnClickListener(new View.OnClickListener() { // from class: ip.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.s(k.this, view);
            }
        });
        FrameLayout bottomSheet = bVar.f30294b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        en.e.c(bottomSheet, new Function0() { // from class: ip.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t(k.this);
                return t10;
            }
        });
        Button negativeButton = bVar.f30298f;
        Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
        cq.s.b(negativeButton, new Function0() { // from class: ip.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = k.q(jp.b.this, this);
                return q10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(jp.b bVar, k kVar) {
        boolean z10 = true;
        if (bVar.f30298f.getLineCount() <= 1 && bVar.f30299g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button negativeButton = bVar.f30298f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            ViewGroup.LayoutParams layoutParams = negativeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = bVar.f30296d.getWidth();
                negativeButton.setLayoutParams(layoutParams);
                Button positiveButton = bVar.f30299g;
                Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
                ViewGroup.LayoutParams layoutParams2 = positiveButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = bVar.f30296d.getWidth();
                    positiveButton.setLayoutParams(layoutParams2);
                    bVar.f30296d.setReferencedIds(new int[]{bVar.f30299g.getId(), bVar.f30298f.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        kVar.k(kVar.f29512o, bVar, z10);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(k kVar, View view) {
        kVar.f29513p.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(k kVar, View view) {
        kVar.f29515r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(k kVar) {
        kVar.f29515r.invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.k u(final k kVar, final jp.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        kVar.l(it);
        return new en.k() { // from class: ip.b
            @Override // en.k
            public final void a(Object obj, en.a0 a0Var) {
                k.v(k.this, it, (k) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(k kVar, jp.b bVar, k rendering, en.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNull(bVar);
        kVar.p(bVar, rendering, viewEnvironment);
    }

    @Override // en.b
    public en.c0 a() {
        return this.f29516s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(View view) {
    }
}
