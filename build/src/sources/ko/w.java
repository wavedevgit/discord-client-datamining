package ko;

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
import dn.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements dn.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f31990d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31991e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f31992i;

    /* renamed from: o  reason: collision with root package name */
    private final zp.a f31993o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f31994p;

    /* renamed from: q  reason: collision with root package name */
    private final Function0 f31995q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f31996r;

    /* renamed from: s  reason: collision with root package name */
    private final dn.c0 f31997s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31998d = new a();

        a() {
            super(3, no.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2ErrorBinding;", 0);
        }

        public final no.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return no.a.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public w(String str, String str2, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, zp.a navigationState, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
        Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
        Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
        this.f31990d = str;
        this.f31991e = str2;
        this.f31992i = governmentIdStepStyle;
        this.f31993o = navigationState;
        this.f31994p = onContinueClick;
        this.f31995q = onBackClick;
        this.f31996r = onCancelClick;
        k.a aVar = dn.k.f20913a;
        this.f31997s = new dn.z(Reflection.getOrCreateKotlinClass(w.class), a.f31998d, new Function1() { // from class: ko.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                dn.k i10;
                i10 = w.i(w.this, (no.a) obj);
                return i10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dn.k i(final w wVar, final no.a binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
        return new dn.k() { // from class: ko.r
            @Override // dn.k
            public final void a(Object obj, dn.a0 a0Var) {
                w.j(no.a.this, wVar, (w) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final no.a aVar, final w wVar, final w rendering, dn.a0 viewEnvironment) {
        final LocalImageComponentStyle localImageComponentStyle;
        StepStyles.GovernmentIdStepImageLocalStyle imageLocalStyle;
        StepStyles.GovernmentIdStepImageLocalStyleContainer illustration;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        zp.a aVar2 = rendering.f31993o;
        Function0 function0 = new Function0() { // from class: ko.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = w.k(w.this);
                return k10;
            }
        };
        Function0 function02 = new Function0() { // from class: ko.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = w.l(w.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f40952e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(aVar2, function0, function02, navigationBar, root);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = rendering.f31992i;
        if (governmentIdStepStyle != null && (imageLocalStyle = governmentIdStepStyle.getImageLocalStyle()) != null && (illustration = imageLocalStyle.getIllustration()) != null) {
            localImageComponentStyle = illustration.getBase();
        } else {
            localImageComponentStyle = null;
        }
        aVar.f40951d.setAnimation(rp.o.f49114i);
        if (localImageComponentStyle != null) {
            CoordinatorLayout root2 = aVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
            bq.s.b(root2, new Function0() { // from class: ko.u
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m10;
                    m10 = w.m(no.a.this, localImageComponentStyle);
                    return m10;
                }
            });
        }
        aVar.f40953f.setText(rendering.f31990d);
        aVar.f40950c.setText(rendering.f31991e);
        aVar.f40950c.setOnClickListener(new View.OnClickListener() { // from class: ko.v
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                w.n(w.this, view);
            }
        });
        Intrinsics.checkNotNull(aVar);
        wVar.h(aVar, rendering.f31992i, viewEnvironment);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(w wVar) {
        wVar.f31995q.invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(w wVar) {
        wVar.f31996r.invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(no.a aVar, LocalImageComponentStyle localImageComponentStyle) {
        ThemeableLottieAnimationView illustration = aVar.f40951d;
        Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
        kq.g.c(illustration, localImageComponentStyle, new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(w wVar, View view) {
        wVar.f31994p.invoke();
    }

    @Override // dn.b
    public dn.c0 a() {
        return this.f31997s;
    }

    public final void h(no.a aVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, dn.a0 viewEnvironment) {
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
                aq.c.a(viewEnvironment, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base3 = titleStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextView title = aVar.f40953f;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                kq.f0.n(title, base4, null, 2, null);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = aVar.f40950c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                kq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }
}
