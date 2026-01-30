package bo;

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
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements vm.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f7596d;

    /* renamed from: e  reason: collision with root package name */
    private final String f7597e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f7598i;

    /* renamed from: o  reason: collision with root package name */
    private final rp.a f7599o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f7600p;

    /* renamed from: q  reason: collision with root package name */
    private final Function0 f7601q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f7602r;

    /* renamed from: s  reason: collision with root package name */
    private final vm.c0 f7603s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f7604d = new a();

        a() {
            super(3, fo.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2ErrorBinding;", 0);
        }

        public final fo.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return fo.a.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public w(String str, String str2, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, rp.a navigationState, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
        Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
        Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
        this.f7596d = str;
        this.f7597e = str2;
        this.f7598i = governmentIdStepStyle;
        this.f7599o = navigationState;
        this.f7600p = onContinueClick;
        this.f7601q = onBackClick;
        this.f7602r = onCancelClick;
        k.a aVar = vm.k.f51283a;
        this.f7603s = new vm.z(Reflection.getOrCreateKotlinClass(w.class), a.f7604d, new Function1() { // from class: bo.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                vm.k i10;
                i10 = w.i(w.this, (fo.a) obj);
                return i10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final vm.k i(final w wVar, final fo.a binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
        return new vm.k() { // from class: bo.r
            @Override // vm.k
            public final void a(Object obj, vm.a0 a0Var) {
                w.j(fo.a.this, wVar, (w) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final fo.a aVar, final w wVar, final w rendering, vm.a0 viewEnvironment) {
        final LocalImageComponentStyle localImageComponentStyle;
        StepStyles.GovernmentIdStepImageLocalStyle imageLocalStyle;
        StepStyles.GovernmentIdStepImageLocalStyleContainer illustration;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        rp.a aVar2 = rendering.f7599o;
        Function0 function0 = new Function0() { // from class: bo.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = w.k(w.this);
                return k10;
            }
        };
        Function0 function02 = new Function0() { // from class: bo.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = w.l(w.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f25299e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(aVar2, function0, function02, navigationBar, root);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = rendering.f7598i;
        if (governmentIdStepStyle != null && (imageLocalStyle = governmentIdStepStyle.getImageLocalStyle()) != null && (illustration = imageLocalStyle.getIllustration()) != null) {
            localImageComponentStyle = illustration.getBase();
        } else {
            localImageComponentStyle = null;
        }
        aVar.f25298d.setAnimation(jp.o.f32370i);
        if (localImageComponentStyle != null) {
            CoordinatorLayout root2 = aVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
            tp.s.b(root2, new Function0() { // from class: bo.u
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m10;
                    m10 = w.m(fo.a.this, localImageComponentStyle);
                    return m10;
                }
            });
        }
        aVar.f25300f.setText(rendering.f7596d);
        aVar.f25297c.setText(rendering.f7597e);
        aVar.f25297c.setOnClickListener(new View.OnClickListener() { // from class: bo.v
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                w.n(w.this, view);
            }
        });
        Intrinsics.checkNotNull(aVar);
        wVar.h(aVar, rendering.f7598i, viewEnvironment);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(w wVar) {
        wVar.f7601q.invoke();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(w wVar) {
        wVar.f7602r.invoke();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(fo.a aVar, LocalImageComponentStyle localImageComponentStyle) {
        ThemeableLottieAnimationView illustration = aVar.f25298d;
        Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
        cq.g.c(illustration, localImageComponentStyle, new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(w wVar, View view) {
        wVar.f7600p.invoke();
    }

    @Override // vm.b
    public vm.c0 a() {
        return this.f7603s;
    }

    public final void h(fo.a aVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, vm.a0 viewEnvironment) {
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
                sp.c.a(viewEnvironment, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base3 = titleStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextView title = aVar.f25300f;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                cq.f0.n(title, base4, null, 2, null);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = aVar.f25297c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                cq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }
}
