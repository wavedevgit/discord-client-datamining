package io;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import bn.k;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.LocalImageComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements bn.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f30025d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30026e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f30027i;

    /* renamed from: o  reason: collision with root package name */
    private final xp.a f30028o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f30029p;

    /* renamed from: q  reason: collision with root package name */
    private final Function0 f30030q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f30031r;

    /* renamed from: s  reason: collision with root package name */
    private final bn.c0 f30032s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f30033d = new a();

        a() {
            super(3, lo.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2ErrorBinding;", 0);
        }

        public final lo.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return lo.a.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public w(String str, String str2, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, xp.a navigationState, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
        Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
        Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
        this.f30025d = str;
        this.f30026e = str2;
        this.f30027i = governmentIdStepStyle;
        this.f30028o = navigationState;
        this.f30029p = onContinueClick;
        this.f30030q = onBackClick;
        this.f30031r = onCancelClick;
        k.a aVar = bn.k.f6590a;
        this.f30032s = new bn.z(Reflection.getOrCreateKotlinClass(w.class), a.f30033d, new Function1() { // from class: io.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.k i10;
                i10 = w.i(w.this, (lo.a) obj);
                return i10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.k i(final w wVar, final lo.a binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
        return new bn.k() { // from class: io.r
            @Override // bn.k
            public final void a(Object obj, bn.a0 a0Var) {
                w.j(lo.a.this, wVar, (w) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final lo.a aVar, final w wVar, final w rendering, bn.a0 viewEnvironment) {
        final LocalImageComponentStyle localImageComponentStyle;
        StepStyles.GovernmentIdStepImageLocalStyle imageLocalStyle;
        StepStyles.GovernmentIdStepImageLocalStyleContainer illustration;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        xp.a aVar2 = rendering.f30028o;
        Function0 function0 = new Function0() { // from class: io.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = w.k(w.this);
                return k10;
            }
        };
        Function0 function02 = new Function0() { // from class: io.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = w.l(w.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f36996e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(aVar2, function0, function02, navigationBar, root);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = rendering.f30027i;
        if (governmentIdStepStyle != null && (imageLocalStyle = governmentIdStepStyle.getImageLocalStyle()) != null && (illustration = imageLocalStyle.getIllustration()) != null) {
            localImageComponentStyle = illustration.getBase();
        } else {
            localImageComponentStyle = null;
        }
        aVar.f36995d.setAnimation(pp.o.f46213i);
        if (localImageComponentStyle != null) {
            CoordinatorLayout root2 = aVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
            zp.s.b(root2, new Function0() { // from class: io.u
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m10;
                    m10 = w.m(lo.a.this, localImageComponentStyle);
                    return m10;
                }
            });
        }
        aVar.f36997f.setText(rendering.f30025d);
        aVar.f36994c.setText(rendering.f30026e);
        aVar.f36994c.setOnClickListener(new View.OnClickListener() { // from class: io.v
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                w.n(w.this, view);
            }
        });
        Intrinsics.checkNotNull(aVar);
        wVar.h(aVar, rendering.f30027i, viewEnvironment);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(w wVar) {
        wVar.f30030q.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(w wVar) {
        wVar.f30031r.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(lo.a aVar, LocalImageComponentStyle localImageComponentStyle) {
        ThemeableLottieAnimationView illustration = aVar.f36995d;
        Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
        iq.g.c(illustration, localImageComponentStyle, new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(w wVar, View view) {
        wVar.f30029p.invoke();
    }

    @Override // bn.b
    public bn.c0 a() {
        return this.f30032s;
    }

    public final void h(lo.a aVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, bn.a0 viewEnvironment) {
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
                yp.c.a(viewEnvironment, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base3 = titleStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextView title = aVar.f36997f;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                iq.f0.n(title, base4, null, 2, null);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = aVar.f36994c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                iq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }
}
