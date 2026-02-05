package fp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import bn.k;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import fp.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements bn.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f23296d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23297e;

    /* renamed from: i  reason: collision with root package name */
    private final String f23298i;

    /* renamed from: o  reason: collision with root package name */
    private final StepStyle f23299o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f23300p;

    /* renamed from: q  reason: collision with root package name */
    private final String f23301q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f23302r;

    /* renamed from: s  reason: collision with root package name */
    private final bn.c0 f23303s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f23304d;

        a(BottomSheetBehavior bottomSheetBehavior) {
            this.f23304d = bottomSheetBehavior;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(BottomSheetBehavior bottomSheetBehavior) {
            bottomSheetBehavior.Y0(3);
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            final BottomSheetBehavior bottomSheetBehavior = this.f23304d;
            view.postDelayed(new Runnable() { // from class: fp.j
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
        public static final b f23305d = new b();

        b() {
            super(3, gp.b.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/permissions/databinding/Pi2RequestPermissionRationaleBinding;", 0);
        }

        public final gp.b a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return gp.b.c(p02, viewGroup, z10);
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
        this.f23296d = titleText;
        this.f23297e = messageText;
        this.f23298i = positiveButtonText;
        this.f23299o = stepStyle;
        this.f23300p = onPositiveButtonClick;
        this.f23301q = negativeButtonText;
        this.f23302r = onNegativeButtonClick;
        k.a aVar = bn.k.f6590a;
        this.f23303s = new bn.z(Reflection.getOrCreateKotlinClass(k.class), b.f23305d, new Function1() { // from class: fp.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.k u10;
                u10 = k.u(k.this, (gp.b) obj);
                return u10;
            }
        });
    }

    private final void k(StepStyle stepStyle, gp.b bVar, boolean z10) {
        ButtonCancelComponentStyle buttonSecondaryStyleValue;
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        FrameLayout bottomSheet = bVar.f25040b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        ConstraintLayout bottomSheetContent = bVar.f25041c;
        Intrinsics.checkNotNullExpressionValue(bottomSheetContent, "bottomSheetContent");
        iq.c.c(bottomSheet, stepStyle, bottomSheetContent, null, 4, null);
        if (stepStyle != null && (titleStyleValue = stepStyle.getTitleStyleValue()) != null) {
            TextView title = bVar.f25047i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            iq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (stepStyle != null && (textStyleValue = stepStyle.getTextStyleValue()) != null) {
            TextView message = bVar.f25043e;
            Intrinsics.checkNotNullExpressionValue(message, "message");
            iq.f0.n(message, textStyleValue, null, 2, null);
        }
        if (stepStyle != null && (buttonPrimaryStyleValue = stepStyle.getButtonPrimaryStyleValue()) != null) {
            Button positiveButton = bVar.f25045g;
            Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
            iq.e.f(positiveButton, buttonPrimaryStyleValue, false, !z10, 2, null);
        }
        if (stepStyle != null && (buttonSecondaryStyleValue = stepStyle.getButtonSecondaryStyleValue()) != null) {
            Button negativeButton = bVar.f25044f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            iq.e.f(negativeButton, buttonSecondaryStyleValue, false, !z10, 2, null);
        }
    }

    private final void l(gp.b bVar) {
        int d10;
        Integer backgroundColorValue;
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(bVar.f25040b);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        Function0 function0 = new Function0() { // from class: fp.g
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = k.m(k.this);
                return m10;
            }
        };
        FrameLayout bottomSheet = bVar.f25040b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        zp.b.b(q02, function0, bottomSheet, null, bVar.f25046h);
        bVar.getRoot().addOnAttachStateChangeListener(new a(q02));
        bVar.f25040b.setOnClickListener(new View.OnClickListener() { // from class: fp.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.n(view);
            }
        });
        bVar.f25046h.setOnClickListener(new View.OnClickListener() { // from class: fp.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.o(BottomSheetBehavior.this, view);
            }
        });
        StepStyle stepStyle = this.f23299o;
        if (stepStyle != null && (backgroundColorValue = stepStyle.getBackgroundColorValue()) != null) {
            d10 = backgroundColorValue.intValue();
        } else {
            Context context = bVar.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            d10 = pp.s.d(context, zg.b.f55558o, null, false, 6, null);
        }
        bVar.getRoot().setTag(cp.g.f20003a, Integer.valueOf(d10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(k kVar) {
        kVar.f23302r.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void o(BottomSheetBehavior bottomSheetBehavior, View view) {
        bottomSheetBehavior.Y0(5);
    }

    private final void p(final gp.b bVar, final k kVar, bn.a0 a0Var) {
        if (this.f23296d.length() > 0) {
            TextView title = bVar.f25047i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            eq.f.d(title, this.f23296d);
        } else {
            bVar.f25047i.setVisibility(8);
        }
        TextView message = bVar.f25043e;
        Intrinsics.checkNotNullExpressionValue(message, "message");
        eq.f.d(message, this.f23297e);
        bVar.f25045g.setText(kVar.f23298i);
        bVar.f25045g.setOnClickListener(new View.OnClickListener() { // from class: fp.c
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.r(k.this, view);
            }
        });
        bVar.f25044f.setText(kVar.f23301q);
        bVar.f25044f.setOnClickListener(new View.OnClickListener() { // from class: fp.d
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                k.s(k.this, view);
            }
        });
        FrameLayout bottomSheet = bVar.f25040b;
        Intrinsics.checkNotNullExpressionValue(bottomSheet, "bottomSheet");
        bn.e.c(bottomSheet, new Function0() { // from class: fp.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit t10;
                t10 = k.t(k.this);
                return t10;
            }
        });
        Button negativeButton = bVar.f25044f;
        Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
        zp.s.b(negativeButton, new Function0() { // from class: fp.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit q10;
                q10 = k.q(gp.b.this, this);
                return q10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(gp.b bVar, k kVar) {
        boolean z10 = true;
        if (bVar.f25044f.getLineCount() <= 1 && bVar.f25045g.getLineCount() <= 1) {
            z10 = false;
        } else {
            Button negativeButton = bVar.f25044f;
            Intrinsics.checkNotNullExpressionValue(negativeButton, "negativeButton");
            ViewGroup.LayoutParams layoutParams = negativeButton.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = bVar.f25042d.getWidth();
                negativeButton.setLayoutParams(layoutParams);
                Button positiveButton = bVar.f25045g;
                Intrinsics.checkNotNullExpressionValue(positiveButton, "positiveButton");
                ViewGroup.LayoutParams layoutParams2 = positiveButton.getLayoutParams();
                if (layoutParams2 != null) {
                    layoutParams2.width = bVar.f25042d.getWidth();
                    positiveButton.setLayoutParams(layoutParams2);
                    bVar.f25042d.setReferencedIds(new int[]{bVar.f25045g.getId(), bVar.f25044f.getId()});
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
                }
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
            }
        }
        kVar.k(kVar.f23299o, bVar, z10);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(k kVar, View view) {
        kVar.f23300p.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(k kVar, View view) {
        kVar.f23302r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(k kVar) {
        kVar.f23302r.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.k u(final k kVar, final gp.b it) {
        Intrinsics.checkNotNullParameter(it, "it");
        kVar.l(it);
        return new bn.k() { // from class: fp.b
            @Override // bn.k
            public final void a(Object obj, bn.a0 a0Var) {
                k.v(k.this, it, (k) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(k kVar, gp.b bVar, k rendering, bn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Intrinsics.checkNotNull(bVar);
        kVar.p(bVar, rendering, viewEnvironment);
    }

    @Override // bn.b
    public bn.c0 a() {
        return this.f23303s;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(View view) {
    }
}
