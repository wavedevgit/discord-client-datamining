package ko;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import dn.k;
import fq.b4;
import fq.c2;
import java.util.List;
import jo.f5;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements dn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f32005d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final no.i f32006b;

    /* renamed from: c  reason: collision with root package name */
    private final jq.k f32007c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.c0 f32008a;

        /* renamed from: ko.f0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0453a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0453a f32009d = new C0453a();

            C0453a() {
                super(3, no.i.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSelectCountryAndIdClassBinding;", 0);
            }

            public final no.i a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return no.i.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f32010d = new b();

            b() {
                super(1, f0.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSelectCountryAndIdClassBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final f0 invoke(no.i p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new f0(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(f5.a initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f32008a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f32008a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f32008a = new dn.z(Reflection.getOrCreateKotlinClass(f5.a.class), C0453a.f32009d, b.f32010d);
        }
    }

    public f0(no.i binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f32006b = binding;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        this.f32007c = new jq.k(root);
        LinearLayout contentView = binding.f41102b;
        Intrinsics.checkNotNullExpressionValue(contentView, "contentView");
        bq.f.d(contentView, false, false, false, false, 15, null);
    }

    private final void j(no.i iVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, dn.a0 a0Var) {
        StepStyles.StepSubmitButtonComponentStyleContainer base;
        ButtonSubmitComponentStyle base2;
        StepStyles.InputSelectStyleContainer base3;
        InputSelectComponentStyle base4;
        StepStyles.StepTextBasedComponentStyleContainer base5;
        TextBasedComponentStyle base6;
        StepStyles.StepTextBasedComponentStyleContainer base7;
        TextBasedComponentStyle base8;
        if (governmentIdStepStyle != null) {
            Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
            if (backgroundColorValue != null) {
                int intValue = backgroundColorValue.intValue();
                iVar.getRoot().setBackgroundColor(intValue);
                aq.c.a(a0Var, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base7 = titleStyle.getBase()) != null && (base8 = base7.getBase()) != null) {
                TextView title = iVar.f41109i;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                kq.f0.n(title, base8, null, 2, null);
            }
            StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle = governmentIdStepStyle.getTextStyle();
            if (textStyle != null && (base5 = textStyle.getBase()) != null && (base6 = base5.getBase()) != null) {
                TextView countrySelectorText = iVar.f41105e;
                Intrinsics.checkNotNullExpressionValue(countrySelectorText, "countrySelectorText");
                kq.f0.n(countrySelectorText, base6, null, 2, null);
                TextView idClassSelectorText = iVar.f41107g;
                Intrinsics.checkNotNullExpressionValue(idClassSelectorText, "idClassSelectorText");
                kq.f0.n(idClassSelectorText, base6, null, 2, null);
            }
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle = governmentIdStepStyle.getInputSelectStyle();
            if (inputSelectStyle != null && (base3 = inputSelectStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextInputLayout countrySelector = iVar.f41104d;
                Intrinsics.checkNotNullExpressionValue(countrySelector, "countrySelector");
                kq.o.i(countrySelector, base4);
                TextInputLayout idClassSelector = iVar.f41106f;
                Intrinsics.checkNotNullExpressionValue(idClassSelector, "idClassSelector");
                kq.o.i(idClassSelector, base4);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = iVar.f41103c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                kq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }

    private final void k(c2 c2Var, final Function1 function1) {
        this.f32007c.u(c2Var, new Function1() { // from class: ko.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = f0.l(Function1.this, (List) obj);
                return l10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(Function1 function1, List selectedItems) {
        Intrinsics.checkNotNullParameter(selectedItems, "selectedItems");
        b4 b4Var = (b4) CollectionsKt.firstOrNull(selectedItems);
        if (b4Var == null) {
            return Unit.f32056a;
        }
        function1.invoke(b4Var);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(f5.a aVar) {
        aVar.g().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(f5.a aVar) {
        aVar.h().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.c(), aVar.j());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.c(), aVar.j());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.e(), aVar.k());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.e(), aVar.k());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t(f5.a aVar, View view) {
        aVar.i().invoke();
    }

    @Override // dn.k
    /* renamed from: m */
    public void a(final f5.a rendering, dn.a0 viewEnvironment) {
        String str;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        no.i iVar = this.f32006b;
        zp.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: ko.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = f0.n(f5.a.this);
                return n10;
            }
        };
        Function0 function02 = new Function0() { // from class: ko.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = f0.o(f5.a.this);
                return o10;
            }
        };
        Pi2NavigationBar navigationBar = iVar.f41108h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = iVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(f10, function0, function02, navigationBar, root);
        iVar.f41109i.setText(rendering.m());
        b4 b4Var = (b4) CollectionsKt.firstOrNull(rendering.c().f());
        String str2 = null;
        if (b4Var != null) {
            str = b4Var.getText();
        } else {
            str = null;
        }
        iVar.f41104d.setOnClickListener(new View.OnClickListener() { // from class: ko.z
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f0.p(f0.this, rendering, view);
            }
        });
        EditText editText = iVar.f41104d.getEditText();
        if (editText != null) {
            editText.setOnClickListener(new View.OnClickListener() { // from class: ko.a0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    f0.q(f0.this, rendering, view);
                }
            });
        }
        EditText editText2 = iVar.f41104d.getEditText();
        if (editText2 != null) {
            editText2.setText(str);
        }
        if (str != null) {
            iVar.f41106f.setEnabled(true);
            EditText editText3 = iVar.f41106f.getEditText();
            if (editText3 != null) {
                editText3.setEnabled(true);
            }
            iVar.f41106f.setOnClickListener(new View.OnClickListener() { // from class: ko.b0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    f0.r(f0.this, rendering, view);
                }
            });
            EditText editText4 = iVar.f41106f.getEditText();
            if (editText4 != null) {
                editText4.setOnClickListener(new View.OnClickListener() { // from class: ko.c0
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        f0.s(f0.this, rendering, view);
                    }
                });
            }
            EditText editText5 = iVar.f41106f.getEditText();
            if (editText5 != null) {
                b4 b4Var2 = (b4) CollectionsKt.firstOrNull(rendering.e().f());
                if (b4Var2 != null) {
                    str2 = b4Var2.getText();
                }
                editText5.setText(str2);
            }
        } else {
            iVar.f41106f.setEnabled(false);
            EditText editText6 = iVar.f41106f.getEditText();
            if (editText6 != null) {
                editText6.setEnabled(false);
            }
        }
        iVar.f41105e.setText(rendering.b());
        iVar.f41107g.setText(rendering.d());
        iVar.f41103c.setEnabled(rendering.n());
        iVar.f41103c.setOnClickListener(new View.OnClickListener() { // from class: ko.d0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f0.t(f5.a.this, view);
            }
        });
        iVar.f41103c.setText(rendering.a());
        j(iVar, rendering.l(), viewEnvironment);
    }
}
