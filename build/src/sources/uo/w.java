package uo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.LocalImageComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import gn.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements gn.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f50864d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50865e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f50866i;

    /* renamed from: o  reason: collision with root package name */
    private final jq.a f50867o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f50868p;

    /* renamed from: q  reason: collision with root package name */
    private final Function0 f50869q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f50870r;

    /* renamed from: s  reason: collision with root package name */
    private final gn.c0 f50871s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f50872d = new a();

        a() {
            super(3, xo.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2ErrorBinding;", 0);
        }

        public final xo.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return xo.a.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public w(String str, String str2, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, jq.a navigationState, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
        Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
        Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
        this.f50864d = str;
        this.f50865e = str2;
        this.f50866i = governmentIdStepStyle;
        this.f50867o = navigationState;
        this.f50868p = onContinueClick;
        this.f50869q = onBackClick;
        this.f50870r = onCancelClick;
        k.a aVar = gn.k.f25849a;
        this.f50871s = new gn.z(Reflection.getOrCreateKotlinClass(w.class), a.f50872d, new Function1() { // from class: uo.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                gn.k i10;
                i10 = w.i(w.this, (xo.a) obj);
                return i10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gn.k i(final w wVar, final xo.a binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
        return new gn.k() { // from class: uo.r
            @Override // gn.k
            public final void a(Object obj, gn.a0 a0Var) {
                w.j(xo.a.this, wVar, (w) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final xo.a aVar, final w wVar, final w rendering, gn.a0 viewEnvironment) {
        final LocalImageComponentStyle localImageComponentStyle;
        StepStyles.GovernmentIdStepImageLocalStyle imageLocalStyle;
        StepStyles.GovernmentIdStepImageLocalStyleContainer illustration;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        jq.a aVar2 = rendering.f50867o;
        Function0 function0 = new Function0() { // from class: uo.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = w.k(w.this);
                return k10;
            }
        };
        Function0 function02 = new Function0() { // from class: uo.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = w.l(w.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f54951e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(aVar2, function0, function02, navigationBar, root);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = rendering.f50866i;
        if (governmentIdStepStyle != null && (imageLocalStyle = governmentIdStepStyle.getImageLocalStyle()) != null && (illustration = imageLocalStyle.getIllustration()) != null) {
            localImageComponentStyle = illustration.getBase();
        } else {
            localImageComponentStyle = null;
        }
        aVar.f54950d.setAnimation(bq.o.f7416i);
        if (localImageComponentStyle != null) {
            CoordinatorLayout root2 = aVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
            lq.s.b(root2, new Function0() { // from class: uo.u
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m10;
                    m10 = w.m(xo.a.this, localImageComponentStyle);
                    return m10;
                }
            });
        }
        aVar.f54952f.setText(rendering.f50864d);
        aVar.f54949c.setText(rendering.f50865e);
        aVar.f54949c.setOnClickListener(new View.OnClickListener() { // from class: uo.v
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                w.n(w.this, view);
            }
        });
        Intrinsics.checkNotNull(aVar);
        wVar.h(aVar, rendering.f50866i, viewEnvironment);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(w wVar) {
        wVar.f50869q.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(w wVar) {
        wVar.f50870r.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(xo.a aVar, LocalImageComponentStyle localImageComponentStyle) {
        ThemeableLottieAnimationView illustration = aVar.f54950d;
        Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
        uq.g.c(illustration, localImageComponentStyle, new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(w wVar, View view) {
        wVar.f50868p.invoke();
    }

    @Override // gn.b
    public gn.c0 a() {
        return this.f50871s;
    }

    public final void h(xo.a aVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, gn.a0 viewEnvironment) {
        StepStyles.StepSubmitButtonComponentStyleContainer base;
        ButtonSubmitComponentStyle base2;
        StepStyles.StepTextBasedComponentStyleContainer base3;
        TextBasedComponentStyle base4;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        if (governmentIdStepStyle != null) {
            Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
            if (backgroundColorValue != null) {
                int intValue = backgroundColorValue.intValue();
                aVar.getRoot().setBackgroundColor(intValue);
                kq.c.a(viewEnvironment, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base3 = titleStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextView title = aVar.f54952f;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                uq.f0.n(title, base4, null, 2, null);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = aVar.f54949c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                uq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }
}
