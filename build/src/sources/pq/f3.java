package pq;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.LayerDrawable;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import com.google.android.material.button.MaterialButton;
import com.google.android.material.divider.MaterialDivider;
import com.google.android.material.textfield.MaterialAutoCompleteTextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.InputSelectBoxComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.steps.ui.components.ClickableStackComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.ESignatureComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputAddressComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxGroupComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputConfirmationCodeComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputCurrencyComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputDateComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputMaskedTextComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputNumberComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputPhoneNumberComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputRadioGroupComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputTextAreaComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputTextComponent;
import com.withpersona.sdk2.inquiry.steps.ui.network.Suggestion;
import com.withpersona.sdk2.inquiry.steps.ui.view.ShadowedNestedScrollView;
import com.withpersona.sdk2.inquiry.ui.network.ComponentParam;
import dq.b;
import fq.c5;
import fq.e5;
import fq.h5;
import fq.k5;
import fq.l5;
import fq.q5;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.text.StringsKt;
import pq.f3;
import pq.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f3 implements dn.k {

    /* renamed from: m  reason: collision with root package name */
    public static final a f45259m = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final qq.a f45260b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f45261c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f45262d;

    /* renamed from: e  reason: collision with root package name */
    private final jq.k f45263e;

    /* renamed from: f  reason: collision with root package name */
    private final o1 f45264f;

    /* renamed from: g  reason: collision with root package name */
    private final e1 f45265g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f45266h;

    /* renamed from: i  reason: collision with root package name */
    private Function0 f45267i;

    /* renamed from: j  reason: collision with root package name */
    private Function2 f45268j;

    /* renamed from: k  reason: collision with root package name */
    private Function1 f45269k;

    /* renamed from: l  reason: collision with root package name */
    private Function1 f45270l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.f f45271a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: pq.f3$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0583a extends FunctionReferenceImpl implements Function2 {
            C0583a(Object obj) {
                super(2, obj, f3.class, "showRendering", "showRendering(Lcom/withpersona/sdk2/inquiry/ui/UiWorkflow$Screen$EntryScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
            }

            public final void a(v4.d.a p02, dn.a0 p12) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                Intrinsics.checkNotNullParameter(p12, "p1");
                ((f3) this.receiver).a(p02, p12);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((v4.d.a) obj, (dn.a0) obj2);
                return Unit.f32056a;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final View c(v4.d.a initialRendering, dn.a0 initialViewEnvironment, Context context, ViewGroup viewGroup) {
            Context context2;
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(context, "context");
            if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
                context2 = context;
            }
            qq.a c10 = qq.a.c(LayoutInflater.from(context2).cloneInContext(context));
            CoordinatorLayout root = c10.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            Intrinsics.checkNotNull(c10);
            dn.g0.a(root, initialRendering, initialViewEnvironment, new C0583a(new f3(c10, initialRendering)));
            CoordinatorLayout root2 = c10.getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "let(...)");
            return root2;
        }

        @Override // dn.c0
        /* renamed from: d */
        public View a(v4.d.a initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f45271a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f45271a.getType();
        }

        private a() {
            this.f45271a = new dn.f(Reflection.getOrCreateKotlinClass(v4.d.a.class), new Function4() { // from class: pq.e3
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    View c10;
                    c10 = f3.a.c((v4.d.a) obj, (dn.a0) obj2, (Context) obj3, (ViewGroup) obj4);
                    return c10;
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends BottomSheetBehavior.g {

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ BottomSheetBehavior f45273b;

        b(BottomSheetBehavior bottomSheetBehavior) {
            this.f45273b = bottomSheetBehavior;
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            f3.this.f45260b.f48046j.setPadding(f3.this.f45260b.f48046j.getPaddingLeft(), f3.this.f45260b.f48046j.getPaddingTop(), f3.this.f45260b.f48046j.getPaddingRight(), this.f45273b.v0() + ((int) (f10 * (f3.this.f45260b.f48044h.getHeight() - this.f45273b.v0()))));
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f45274d = new c();

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(k5 it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.TRUE;
        }
    }

    public f3(qq.a binding, v4.d.a initialRendering) {
        Map i10;
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
        this.f45260b = binding;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        this.f45263e = new jq.k(root);
        CoordinatorLayout root2 = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        this.f45264f = new o1(root2);
        CoordinatorLayout root3 = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
        this.f45265g = new e1(root3);
        this.f45266h = new Function0() { // from class: pq.r1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit Y;
                Y = f3.Y();
                return Y;
            }
        };
        this.f45267i = new Function0() { // from class: pq.c2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit W;
                W = f3.W();
                return W;
            }
        };
        this.f45268j = new Function2() { // from class: pq.n2
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit X;
                X = f3.X((k5) obj, ((Boolean) obj2).booleanValue());
                return X;
            }
        };
        this.f45269k = new Function1() { // from class: pq.x2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit V;
                V = f3.V((GovernmentIdNfcScanComponent) obj);
                return V;
            }
        };
        this.f45270l = new Function1() { // from class: pq.y2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit Z;
                Z = f3.Z((q5) obj);
                return Z;
            }
        };
        Context context = binding.getRoot().getContext();
        dq.m mVar = dq.m.f21130a;
        Intrinsics.checkNotNull(context);
        List f10 = initialRendering.f();
        List d10 = initialRendering.d();
        final dq.h h10 = dq.m.h(mVar, context, new dq.g(f10, d10 == null ? CollectionsKt.l() : d10, initialRendering.t()), initialRendering.u(), false, false, 16, null);
        Integer c10 = initialRendering.c();
        if (c10 != null) {
            binding.f48047k.setBackgroundColor(c10.intValue());
        }
        Drawable a10 = initialRendering.a(context);
        if (a10 != null) {
            binding.f48047k.setBackground(a10);
            binding.f48039c.setBackgroundColor(0);
        }
        Integer h11 = initialRendering.h();
        if (h11 != null) {
            binding.f48045i.setControlsColor(h11.intValue());
        }
        List d11 = initialRendering.d();
        this.f45262d = (d11 == null || (i10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.j(d11)) == null) ? kotlin.collections.o0.i() : i10;
        Set<Map.Entry> entrySet = h10.c().a().entrySet();
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(entrySet, 10)), 16));
        for (Map.Entry entry : entrySet) {
            Pair a11 = qr.v.a(entry.getKey(), ((dq.a) entry.getValue()).d());
            linkedHashMap.put(a11.c(), a11.d());
        }
        this.f45261c = linkedHashMap;
        this.f45260b.f48048l.addView(h10.a());
        if (initialRendering.s() == StyleElements.PositionType.CENTER) {
            ConstraintSet constraintSet = new ConstraintSet();
            constraintSet.f(this.f45260b.f48038b);
            constraintSet.g(this.f45260b.f48048l.getId(), 4, this.f45260b.f48038b.getId(), 4);
            constraintSet.c(this.f45260b.f48038b);
        }
        if (h10.b() != null) {
            T(h10, initialRendering.f());
        }
        CoordinatorLayout root4 = this.f45260b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root4, "getRoot(...)");
        bq.f.g(root4, new Function1() { // from class: pq.z2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit O;
                O = f3.O(dq.h.this, this, (WindowInsetsCompat) obj);
                return O;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A0(f3 f3Var, TextInputLayout textInputLayout, fq.c2 c2Var, fq.a4 a4Var, View view) {
        Q0(f3Var, textInputLayout, c2Var, a4Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence B0(fq.b4 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.getText();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void C0(f3 f3Var, k5 k5Var, View view, View view2) {
        boolean z10;
        Function2 function2 = f3Var.f45268j;
        if (view.getVisibility() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        function2.invoke(k5Var, Boolean.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D0(final k5 k5Var, f3 f3Var) {
        H0(f3Var, ((com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var).h(), new Function1() { // from class: pq.p2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit E0;
                E0 = f3.E0(k5.this, (List) obj);
                return E0;
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E0(k5 k5Var, List it) {
        Intrinsics.checkNotNullParameter(it, "it");
        com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var;
        bVar.f().c(it);
        bVar.q().c(CollectionsKt.l());
        bVar.u().c("");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F0(final k5 k5Var, f3 f3Var) {
        H0(f3Var, ((com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var).r(), new Function1() { // from class: pq.u2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit G0;
                G0 = f3.G0(k5.this, (List) obj);
                return G0;
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G0(k5 k5Var, List it) {
        Intrinsics.checkNotNullParameter(it, "it");
        com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var;
        bVar.q().c(it);
        bVar.u().c("");
        return Unit.f32056a;
    }

    private static final void H0(final f3 f3Var, fq.c2 c2Var, final Function1 function1) {
        if (c2Var == null) {
            return;
        }
        f3Var.f45260b.f48045i.getBackButton().setEnabled(false);
        f3Var.f45260b.f48045i.setImportantForAccessibility(4);
        f3Var.f45260b.f48048l.setImportantForAccessibility(4);
        f3Var.f45263e.u(c2Var, new Function1() { // from class: pq.w2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit I0;
                I0 = f3.I0(f3.this, function1, (List) obj);
                return I0;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I0(f3 f3Var, Function1 function1, List selectedItems) {
        Intrinsics.checkNotNullParameter(selectedItems, "selectedItems");
        f3Var.f45260b.f48045i.getBackButton().setEnabled(true);
        f3Var.f45260b.f48045i.setImportantForAccessibility(1);
        f3Var.f45260b.f48048l.setImportantForAccessibility(1);
        if (!selectedItems.isEmpty()) {
            function1.invoke(selectedItems);
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J0(final k5 k5Var, f3 f3Var) {
        L0(f3Var, ((InputPhoneNumberComponent) k5Var).i(), new Function1() { // from class: pq.o2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit K0;
                K0 = f3.K0(k5.this, (List) obj);
                return K0;
            }
        });
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K0(k5 k5Var, List it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ((InputPhoneNumberComponent) k5Var).h().c(it);
        return Unit.f32056a;
    }

    private static final void L0(final f3 f3Var, fq.c2 c2Var, final Function1 function1) {
        if (c2Var == null) {
            return;
        }
        f3Var.f45260b.f48045i.getBackButton().setEnabled(false);
        f3Var.f45260b.f48045i.setImportantForAccessibility(4);
        f3Var.f45260b.f48048l.setImportantForAccessibility(4);
        f3Var.f45263e.u(c2Var, new Function1() { // from class: pq.v2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit M0;
                M0 = f3.M0(f3.this, function1, (List) obj);
                return M0;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M0(f3 f3Var, Function1 function1, List selectedItems) {
        Intrinsics.checkNotNullParameter(selectedItems, "selectedItems");
        f3Var.f45260b.f48045i.getBackButton().setEnabled(true);
        f3Var.f45260b.f48045i.setImportantForAccessibility(1);
        f3Var.f45260b.f48048l.setImportantForAccessibility(1);
        if (!selectedItems.isEmpty()) {
            function1.invoke(selectedItems);
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void N0(final f3 f3Var, final k5 k5Var, ESignature eSignature, v4.d.a aVar, dn.a0 a0Var, View view) {
        f3Var.f45260b.f48045i.getBackButton().setEnabled(false);
        f3Var.f45260b.f48045i.setImportantForAccessibility(4);
        f3Var.f45260b.f48048l.setImportantForAccessibility(4);
        f3Var.f45264f.p((ESignatureComponent) k5Var, eSignature, aVar.t(), a0Var, new Function2() { // from class: pq.s2
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit O0;
                O0 = f3.O0(f3.this, k5Var, ((Boolean) obj).booleanValue(), (Bitmap) obj2);
                return O0;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(dq.h hVar, f3 f3Var, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        Insets f10 = insets.f(WindowInsetsCompat.p.c());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        int i10 = f10.f3607d;
        int i11 = g10.f3605b;
        int max = Integer.max(g10.f3607d, i10);
        int i12 = g10.f3604a;
        int i13 = g10.f3606c;
        View b10 = hVar.b();
        if (b10 == null) {
            f3Var.f45260b.f48046j.setPadding(i12, i11, i13, max);
        } else {
            ShadowedNestedScrollView nestedScroll = f3Var.f45260b.f48046j;
            Intrinsics.checkNotNullExpressionValue(nestedScroll, "nestedScroll");
            nestedScroll.setPadding(i12, i11, i13, nestedScroll.getPaddingBottom());
            b10.setPadding(i12, b10.getPaddingTop(), i13, max);
        }
        MaterialDivider footerDivider = f3Var.f45260b.f48040d;
        Intrinsics.checkNotNullExpressionValue(footerDivider, "footerDivider");
        ViewGroup.LayoutParams layoutParams = footerDivider.getLayoutParams();
        if (layoutParams != null) {
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
            marginLayoutParams.bottomMargin = g10.f3607d;
            footerDivider.setLayoutParams(marginLayoutParams);
            CoordinatorLayout footerSheetCoordinatorLayout = f3Var.f45260b.f48042f;
            Intrinsics.checkNotNullExpressionValue(footerSheetCoordinatorLayout, "footerSheetCoordinatorLayout");
            footerSheetCoordinatorLayout.setPadding(i12, footerSheetCoordinatorLayout.getPaddingTop(), i13, max);
            return Unit.f32056a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O0(f3 f3Var, k5 k5Var, boolean z10, Bitmap bitmap) {
        f3Var.f45260b.f48045i.getBackButton().setEnabled(true);
        f3Var.f45260b.f48045i.setImportantForAccessibility(1);
        f3Var.f45260b.f48048l.setImportantForAccessibility(1);
        if (!z10) {
            ((ESignatureComponent) k5Var).a().c(bitmap);
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void P0(f3 f3Var, k5 k5Var, View view) {
        f3Var.f45269k.invoke(k5Var);
    }

    private final void Q(View view, Map map, k5 k5Var, boolean z10) {
        S(view, map, k5Var);
        R(view, map, k5Var, z10);
    }

    private static final void Q0(final f3 f3Var, final TextInputLayout textInputLayout, fq.c2 c2Var, final fq.a4 a4Var) {
        f3Var.f45260b.f48045i.getBackButton().setEnabled(false);
        textInputLayout.setEnabled(false);
        f3Var.f45260b.f48045i.setImportantForAccessibility(4);
        f3Var.f45260b.f48048l.setImportantForAccessibility(4);
        f3Var.f45263e.u(c2Var, new Function1() { // from class: pq.q2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit R0;
                R0 = f3.R0(f3.this, textInputLayout, a4Var, (List) obj);
                return R0;
            }
        });
    }

    private final void R(View view, Map map, k5 k5Var, boolean z10) {
        boolean z11;
        Boolean value;
        if (!(k5Var instanceof fq.v)) {
            return;
        }
        JsonLogicBoolean disabled = ((fq.v) k5Var).getDisabled();
        boolean z12 = false;
        if (disabled != null && (value = disabled.getValue(map, map.get(k5Var.getName()))) != null) {
            z11 = value.booleanValue();
        } else {
            z11 = false;
        }
        if (!z10 && !z11) {
            z12 = true;
        }
        view.setEnabled(z12);
        view.requestLayout();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R0(f3 f3Var, TextInputLayout textInputLayout, fq.a4 a4Var, List selectedItems) {
        Intrinsics.checkNotNullParameter(selectedItems, "selectedItems");
        f3Var.f45260b.f48045i.getBackButton().setEnabled(true);
        textInputLayout.setEnabled(true);
        textInputLayout.requestLayout();
        f3Var.f45260b.f48045i.setImportantForAccessibility(1);
        f3Var.f45260b.f48048l.setImportantForAccessibility(1);
        a4Var.a().c(selectedItems);
        return Unit.f32056a;
    }

    private final void S(View view, Map map, k5 k5Var) {
        boolean z10;
        Boolean value;
        if (k5Var instanceof fq.e0) {
            fq.e0 e0Var = (fq.e0) k5Var;
            JsonLogicBoolean hidden = e0Var.getHidden();
            int i10 = 0;
            if (hidden != null && (value = hidden.getValue(map, map.get(k5Var.getName()))) != null) {
                z10 = value.booleanValue();
            } else {
                z10 = false;
            }
            if (z10) {
                i10 = 8;
            }
            view.setVisibility(i10);
            for (nq.a aVar : e0Var.d()) {
                aVar.a(map, z10);
            }
        }
    }

    private final void S0(final v4.d.a aVar, dn.a0 a0Var, final fq.t4 t4Var, Map map, Map map2) {
        String str;
        dq.i c10;
        Map a10;
        if (t4Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.a) {
            CreatePersonaSheet.CardCtaPage.ComponentNameMapping componentNameMapping = ((com.withpersona.sdk2.inquiry.steps.ui.components.a) t4Var).d().getComponentNameMapping();
            b.a aVar2 = new b.a();
            String str2 = null;
            if (componentNameMapping != null) {
                str = componentNameMapping.getStartButton();
            } else {
                str = null;
            }
            b.a a11 = aVar2.a(str, new Function1() { // from class: pq.s1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit T0;
                    T0 = f3.T0(v4.d.a.this, t4Var, (k5) obj);
                    return T0;
                }
            });
            if (componentNameMapping != null) {
                str2 = componentNameMapping.getDismissButton();
            }
            List<Pair> b10 = a11.a(str2, new Function1() { // from class: pq.t1
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit U0;
                    U0 = f3.U0(f3.this, (k5) obj);
                    return U0;
                }
            }).b();
            dq.h e10 = this.f45265g.e();
            if (e10 != null && (c10 = e10.c()) != null && (a10 = c10.a()) != null) {
                for (Map.Entry entry : a10.entrySet()) {
                    q0(aVar, ((dq.a) entry.getValue()).c(), ((dq.a) entry.getValue()).d(), map, map2, a0Var, this.f45262d);
                }
                for (Pair pair : b10) {
                    final Function1 function1 = (Function1) pair.d();
                    final dq.a aVar3 = (dq.a) a10.get((String) pair.c());
                    if (aVar3 != null) {
                        aVar3.d().setOnClickListener(new View.OnClickListener() { // from class: pq.u1
                            @Override // android.view.View.OnClickListener
                            public final void onClick(View view) {
                                f3.V0(Function1.this, aVar3, view);
                            }
                        });
                    }
                }
                return;
            }
            return;
        }
        throw new qr.p();
    }

    private final void T(dq.h hVar, List list) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : list) {
            if (obj instanceof fq.y) {
                arrayList.add(obj);
            }
        }
        fq.y yVar = (fq.y) CollectionsKt.firstOrNull(arrayList);
        if (yVar == null) {
            return;
        }
        Integer c10 = yVar.c();
        if (c10 != null) {
            e0(hVar, c10.intValue(), yVar);
        } else {
            this.f45260b.f48039c.addView(hVar.b());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit T0(v4.d.a aVar, fq.t4 t4Var, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        aVar.o().invoke(t4Var, it);
        return Unit.f32056a;
    }

    private final Map U(List list) {
        LinkedHashMap linkedHashMap;
        Map i10 = kotlin.collections.o0.i();
        int i11 = 0;
        while (true) {
            linkedHashMap = new LinkedHashMap();
            a0(i10, linkedHashMap, list);
            Map p02 = p0(linkedHashMap);
            if (Intrinsics.areEqual(i10, p02) || i11 >= 20) {
                break;
            }
            i11++;
            i10 = p02;
        }
        return linkedHashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit U0(f3 f3Var, k5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        f3Var.f45265g.f();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit V(GovernmentIdNfcScanComponent governmentIdNfcScanComponent) {
        Intrinsics.checkNotNullParameter(governmentIdNfcScanComponent, "<unused var>");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void V0(Function1 function1, dq.a aVar, View view) {
        function1.invoke(aVar.c());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit W() {
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit X(k5 k5Var, boolean z10) {
        Intrinsics.checkNotNullParameter(k5Var, "<unused var>");
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Y() {
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Z(q5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f32056a;
    }

    private final void a0(Map map, Map map2, List list) {
        fq.e0 e0Var;
        JsonLogicBoolean jsonLogicBoolean;
        boolean z10;
        dq.a aVar;
        Boolean value;
        Iterator it = list.iterator();
        while (it.hasNext()) {
            dq.a aVar2 = (dq.a) it.next();
            k5 a10 = aVar2.a();
            aVar2.b();
            String str = null;
            if (a10 instanceof fq.e0) {
                e0Var = (fq.e0) a10;
            } else {
                e0Var = null;
            }
            if (e0Var != null) {
                jsonLogicBoolean = e0Var.getHidden();
            } else {
                jsonLogicBoolean = null;
            }
            if (jsonLogicBoolean != null && (value = jsonLogicBoolean.getValue(map, map.get(a10.getName()))) != null) {
                z10 = value.booleanValue();
            } else {
                z10 = false;
            }
            if (!z10) {
                if (a10 instanceof InputTextComponent) {
                    InputTextComponent inputTextComponent = (InputTextComponent) a10;
                    map2.put(inputTextComponent.getName(), n0(inputTextComponent.b().b()));
                } else if (a10 instanceof InputTextAreaComponent) {
                    InputTextAreaComponent inputTextAreaComponent = (InputTextAreaComponent) a10;
                    map2.put(inputTextAreaComponent.getName(), n0(inputTextAreaComponent.b().b()));
                } else if (a10 instanceof InputPhoneNumberComponent) {
                    InputPhoneNumberComponent inputPhoneNumberComponent = (InputPhoneNumberComponent) a10;
                    String h10 = gq.d.f25558a.h((fq.b4) CollectionsKt.o0(inputPhoneNumberComponent.h().b()));
                    map2.put(inputPhoneNumberComponent.getName(), n0(h10 + " " + inputPhoneNumberComponent.b().b()));
                } else if (a10 instanceof InputConfirmationCodeComponent) {
                    InputConfirmationCodeComponent inputConfirmationCodeComponent = (InputConfirmationCodeComponent) a10;
                    map2.put(inputConfirmationCodeComponent.getName(), n0(inputConfirmationCodeComponent.b().b()));
                } else if (a10 instanceof InputDateComponent) {
                    InputDateComponent inputDateComponent = (InputDateComponent) a10;
                    map2.put(inputDateComponent.getName(), n0(inputDateComponent.b().f()));
                } else if (a10 instanceof com.withpersona.sdk2.inquiry.steps.ui.components.b) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) a10;
                    map2.put(bVar.getName(), new ComponentParam.h(bVar.w(), bVar.x(), bVar.t()));
                } else if (a10 instanceof InputMaskedTextComponent) {
                    InputMaskedTextComponent inputMaskedTextComponent = (InputMaskedTextComponent) a10;
                    map2.put(inputMaskedTextComponent.getName(), n0(inputMaskedTextComponent.b().b()));
                } else if (a10 instanceof com.withpersona.sdk2.inquiry.steps.ui.components.e) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.e eVar = (com.withpersona.sdk2.inquiry.steps.ui.components.e) a10;
                    if (!eVar.f().isEmpty()) {
                        map2.put(eVar.getName(), n0(((fq.b4) CollectionsKt.o0(eVar.f())).a()));
                    }
                } else if (a10 instanceof com.withpersona.sdk2.inquiry.steps.ui.components.d) {
                    com.withpersona.sdk2.inquiry.steps.ui.components.d dVar = (com.withpersona.sdk2.inquiry.steps.ui.components.d) a10;
                    if (!dVar.f().isEmpty()) {
                        String name = dVar.getName();
                        List<fq.b4> f10 = dVar.f();
                        ArrayList arrayList = new ArrayList(CollectionsKt.w(f10, 10));
                        for (fq.b4 b4Var : f10) {
                            arrayList.add(b4Var.a());
                        }
                        map2.put(name, o0(arrayList));
                    }
                } else if (a10 instanceof InputAddressComponent) {
                    InputAddressComponent inputAddressComponent = (InputAddressComponent) a10;
                    map2.put(inputAddressComponent.getName(), new ComponentParam.a(inputAddressComponent.h().b(), inputAddressComponent.i().b(), inputAddressComponent.a().b(), inputAddressComponent.c().b(), inputAddressComponent.b().b()));
                } else if (a10 instanceof l5) {
                    ArrayList arrayList2 = new ArrayList();
                    for (k5 k5Var : ((l5) a10).getChildren()) {
                        View view = (View) this.f45261c.get(k5Var.getName());
                        if (view == null) {
                            aVar = null;
                        } else {
                            aVar = new dq.a(k5Var, view);
                        }
                        if (aVar != null) {
                            arrayList2.add(aVar);
                        }
                    }
                    a0(map, map2, arrayList2);
                } else if (a10 instanceof InputCheckboxComponent) {
                    InputCheckboxComponent inputCheckboxComponent = (InputCheckboxComponent) a10;
                    map2.put(inputCheckboxComponent.getName(), new ComponentParam.b(inputCheckboxComponent.a().b()));
                } else if (a10 instanceof InputCheckboxGroupComponent) {
                    InputCheckboxGroupComponent inputCheckboxGroupComponent = (InputCheckboxGroupComponent) a10;
                    map2.put(inputCheckboxGroupComponent.getName(), o0(CollectionsKt.h1(inputCheckboxGroupComponent.f())));
                } else if (a10 instanceof InputRadioGroupComponent) {
                    InputRadioGroupComponent inputRadioGroupComponent = (InputRadioGroupComponent) a10;
                    map2.put(inputRadioGroupComponent.getName(), new ComponentParam.d(inputRadioGroupComponent.b().b()));
                } else if (a10 instanceof InputNumberComponent) {
                    InputNumberComponent inputNumberComponent = (InputNumberComponent) a10;
                    Number b10 = inputNumberComponent.b().b();
                    if (b10 != null) {
                        map2.put(inputNumberComponent.getName(), m0(b10));
                    }
                } else if (a10 instanceof InputCurrencyComponent) {
                    InputCurrencyComponent inputCurrencyComponent = (InputCurrencyComponent) a10;
                    Number b11 = inputCurrencyComponent.b().b();
                    if (b11 != null) {
                        map2.put(inputCurrencyComponent.getName(), m0(b11));
                    }
                } else if (a10 instanceof ESignatureComponent) {
                    ESignatureComponent eSignatureComponent = (ESignatureComponent) a10;
                    Bitmap b12 = eSignatureComponent.a().b();
                    if (b12 != null) {
                        str = gq.f.e(b12);
                    }
                    map2.put(eSignatureComponent.getName(), new ComponentParam.f(str));
                } else if (a10 instanceof GovernmentIdNfcScanComponent) {
                    GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) a10;
                    gq.g b13 = governmentIdNfcScanComponent.j().b();
                    if (b13 != null) {
                        map2.put(governmentIdNfcScanComponent.getName(), new ComponentParam.g(Base64.encodeToString(bs.j.h(v1.c.a(b13.b())), 0), Base64.encodeToString(bs.j.h(v1.c.a(b13.c())), 0), Base64.encodeToString(bs.j.h(v1.c.a(b13.d())), 0), b13.a()));
                    }
                } else if (!(a10 instanceof fq.a) && !(a10 instanceof fq.i) && !(a10 instanceof fq.m) && !(a10 instanceof fq.o) && !(a10 instanceof c5) && !(a10 instanceof fq.i0) && !(a10 instanceof fq.k2) && !(a10 instanceof fq.c4) && !(a10 instanceof fq.f4) && !(a10 instanceof fq.i4) && !(a10 instanceof fq.x4) && !(a10 instanceof e5) && !(a10 instanceof h5) && !(a10 instanceof fq.e) && !(a10 instanceof com.withpersona.sdk2.inquiry.steps.ui.components.a) && !(a10 instanceof q5)) {
                    throw new qr.p();
                }
            }
        }
    }

    private final void b0(v4.d.a aVar, final ClickableStackComponent clickableStackComponent, final ConstraintLayout constraintLayout) {
        constraintLayout.setOnClickListener(new View.OnClickListener() { // from class: pq.r2
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f3.c0(ClickableStackComponent.this, this, constraintLayout, view);
            }
        });
        if (clickableStackComponent.e()) {
            kq.q.a(constraintLayout, clickableStackComponent.c());
        } else if (aVar.u()) {
            kq.q.d(constraintLayout, clickableStackComponent.c());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c0(ClickableStackComponent clickableStackComponent, f3 f3Var, ConstraintLayout constraintLayout, View view) {
        boolean z10 = true;
        clickableStackComponent.f(true);
        Function2 function2 = f3Var.f45268j;
        if (constraintLayout.getVisibility() != 0) {
            z10 = false;
        }
        function2.invoke(clickableStackComponent, Boolean.valueOf(z10));
    }

    private final void d0(v4.d.a aVar, dn.a0 a0Var, Map map, Map map2) {
        Object obj;
        ArrayList arrayList = new ArrayList();
        for (Object obj2 : aVar.f()) {
            if (obj2 instanceof fq.t4) {
                arrayList.add(obj2);
            }
        }
        fq.t4 d10 = this.f45265g.d();
        if (d10 != null) {
            Iterator it = arrayList.iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((fq.t4) obj).getName(), d10.getName())) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            fq.t4 t4Var = (fq.t4) obj;
            if (t4Var != null && !t4Var.Y0()) {
                this.f45265g.f();
            }
        }
        if (this.f45265g.d() == null) {
            Iterator it2 = arrayList.iterator();
            while (true) {
                if (!it2.hasNext()) {
                    break;
                }
                fq.t4 t4Var2 = (fq.t4) it2.next();
                if (!t4Var2.V1()) {
                    t4Var2.x1(true);
                    this.f45265g.g(t4Var2, a0Var);
                    break;
                }
            }
        }
        fq.t4 d11 = this.f45265g.d();
        if (d11 != null) {
            S0(aVar, a0Var, d11, map, map2);
        }
    }

    private final void e0(dq.h hVar, int i10, fq.y yVar) {
        Drawable drawable;
        ColorDrawable colorDrawable;
        int i11;
        LayerDrawable layerDrawable;
        Drawable drawable2;
        GradientDrawable gradientDrawable;
        this.f45260b.f48040d.setVisibility(0);
        this.f45260b.f48042f.setVisibility(0);
        View b10 = hVar.b();
        String str = null;
        if (b10 != null) {
            drawable = b10.getBackground();
        } else {
            drawable = null;
        }
        if (drawable instanceof ColorDrawable) {
            colorDrawable = (ColorDrawable) drawable;
        } else {
            colorDrawable = null;
        }
        if (colorDrawable != null) {
            i11 = colorDrawable.getColor();
        } else {
            i11 = 0;
        }
        Drawable background = this.f45260b.f48044h.getBackground();
        if (background instanceof LayerDrawable) {
            layerDrawable = (LayerDrawable) background;
        } else {
            layerDrawable = null;
        }
        if (layerDrawable != null) {
            drawable2 = layerDrawable.findDrawableByLayerId(f1.f45245k);
        } else {
            drawable2 = null;
        }
        if (drawable2 instanceof GradientDrawable) {
            gradientDrawable = (GradientDrawable) drawable2;
        } else {
            gradientDrawable = null;
        }
        if (gradientDrawable != null) {
            gradientDrawable.setColor(i11);
        }
        this.f45260b.f48041e.addView(hVar.b());
        k5 k5Var = (k5) CollectionsKt.q0(yVar.getChildren(), i10);
        if (k5Var != null) {
            str = k5Var.getName();
        }
        final View view = (View) this.f45261c.get(str);
        final BottomSheetBehavior q02 = BottomSheetBehavior.q0(this.f45260b.f48044h);
        Intrinsics.checkNotNullExpressionValue(q02, "from(...)");
        this.f45260b.f48046j.setVerticalFadingEdgeEnabled(false);
        if (view != null) {
            this.f45260b.f48043g.setVisibility(0);
            this.f45260b.f48041e.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: pq.l2
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view2, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19) {
                    f3.f0(f3.this, view, q02, view2, i12, i13, i14, i15, i16, i17, i18, i19);
                }
            });
        } else {
            this.f45260b.f48043g.setVisibility(4);
            this.f45260b.f48041e.addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: pq.m2
                @Override // android.view.View.OnLayoutChangeListener
                public final void onLayoutChange(View view2, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19) {
                    f3.g0(f3.this, q02, view2, i12, i13, i14, i15, i16, i17, i18, i19);
                }
            });
        }
        q02.c0(new b(q02));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f0(f3 f3Var, View view, BottomSheetBehavior bottomSheetBehavior, View view2, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        int bottom = f3Var.f45260b.f48041e.getBottom();
        Rect rect = new Rect();
        view.getDrawingRect(rect);
        f3Var.f45260b.f48044h.offsetDescendantRectToMyCoords(view, rect);
        int v02 = bottomSheetBehavior.v0();
        bottomSheetBehavior.T0(rect.top);
        if (v02 != bottomSheetBehavior.v0()) {
            ShadowedNestedScrollView shadowedNestedScrollView = f3Var.f45260b.f48046j;
            shadowedNestedScrollView.setPadding(shadowedNestedScrollView.getPaddingLeft(), f3Var.f45260b.f48046j.getPaddingTop(), f3Var.f45260b.f48046j.getPaddingRight(), bottomSheetBehavior.v0());
        }
        bottomSheetBehavior.R0(bottom);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g0(f3 f3Var, BottomSheetBehavior bottomSheetBehavior, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        int bottom = f3Var.f45260b.f48041e.getBottom();
        bottomSheetBehavior.T0(bottom);
        bottomSheetBehavior.R0(bottom);
        ShadowedNestedScrollView shadowedNestedScrollView = f3Var.f45260b.f48046j;
        shadowedNestedScrollView.setPadding(shadowedNestedScrollView.getPaddingLeft(), f3Var.f45260b.f48046j.getPaddingTop(), f3Var.f45260b.f48046j.getPaddingRight(), bottom);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i0(f3 f3Var, v4.d.a aVar) {
        if (!f3Var.f45263e.m() && !f3Var.f45264f.h()) {
            if (aVar.j().b()) {
                aVar.k().invoke();
            } else {
                aVar.l().invoke();
            }
        }
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j0(v4.d.a aVar) {
        aVar.l().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k0(v4.d.a aVar, f3 f3Var, List list, k5 tappedComponent, boolean z10) {
        Intrinsics.checkNotNullParameter(tappedComponent, "tappedComponent");
        aVar.m().invoke(tappedComponent, Boolean.valueOf(z10), f3Var.U(list));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l0(v4.d.a aVar, f3 f3Var, List list, q5 it) {
        Intrinsics.checkNotNullParameter(it, "it");
        aVar.r().invoke(it, f3Var.U(list));
        return Unit.f32056a;
    }

    private final ComponentParam.c m0(Number number) {
        return new ComponentParam.c(number);
    }

    private final ComponentParam.d n0(String str) {
        return new ComponentParam.d(str);
    }

    private final ComponentParam.e o0(List list) {
        return new ComponentParam.e(list);
    }

    private final Map p0(Map map) {
        Set<Map.Entry> entrySet = map.entrySet();
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(entrySet, 10)), 16));
        for (Map.Entry entry : entrySet) {
            Pair a10 = qr.v.a(entry.getKey(), com.withpersona.sdk2.inquiry.ui.network.a.a((ComponentParam) entry.getValue()));
            linkedHashMap.put(a10.c(), a10.d());
        }
        return linkedHashMap;
    }

    private final void q0(final v4.d.a aVar, final k5 k5Var, final View view, Map map, Map map2, final dn.a0 a0Var, Map map3) {
        InputTextBasedComponentStyle documentNumberStyle;
        InputTextBasedComponentStyle cardAccessNumberStyle;
        InputTextBasedComponentStyle styles;
        Map map4;
        InputTextBasedComponentStyle inputTextStyle;
        InputTextBasedComponentStyle inputTextStyle2;
        Map map5 = map2;
        if (k5Var instanceof fq.o) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.Button");
            ((Button) view).setOnClickListener(new View.OnClickListener() { // from class: pq.v1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    f3.r0(f3.this, view2);
                }
            });
            Q(view, map, k5Var, aVar.u());
        } else if (k5Var instanceof c5) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator");
            ButtonWithLoadingIndicator buttonWithLoadingIndicator = (ButtonWithLoadingIndicator) view;
            buttonWithLoadingIndicator.setOnClickListener(new View.OnClickListener() { // from class: pq.b2
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    f3.s0(f3.this, k5Var, view, view2);
                }
            });
            buttonWithLoadingIndicator.setIsLoading(aVar.u() && ((c5) k5Var).E0());
            Q(view, map, k5Var, aVar.u());
        } else if (k5Var instanceof fq.a) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator");
            ButtonWithLoadingIndicator buttonWithLoadingIndicator2 = (ButtonWithLoadingIndicator) view;
            buttonWithLoadingIndicator2.setOnClickListener(new View.OnClickListener() { // from class: pq.d2
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    f3.t0(f3.this, k5Var, view, view2);
                }
            });
            buttonWithLoadingIndicator2.setIsLoading(aVar.u() && ((fq.a) k5Var).E0());
            Q(view, map, k5Var, aVar.u());
        } else if (k5Var instanceof fq.i) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type android.widget.Button");
            ((Button) view).setOnClickListener(new View.OnClickListener() { // from class: pq.e2
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    f3.u0(f3.this, view2);
                }
            });
            Q(view, map, k5Var, aVar.u());
        } else if (k5Var instanceof q5) {
            view.setOnClickListener(new View.OnClickListener() { // from class: pq.f2
                @Override // android.view.View.OnClickListener
                public final void onClick(View view2) {
                    f3.v0(f3.this, k5Var, view2);
                }
            });
            ButtonWithLoadingIndicator buttonWithLoadingIndicator3 = view instanceof ButtonWithLoadingIndicator ? (ButtonWithLoadingIndicator) view : null;
            if (buttonWithLoadingIndicator3 != null) {
                buttonWithLoadingIndicator3.setIsLoading(aVar.u() && ((q5) k5Var).E0());
            }
            Q(view, map, k5Var, aVar.u());
            Unit unit = Unit.f32056a;
        } else if (k5Var instanceof InputTextComponent) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.google.android.material.textfield.TextInputLayout");
            TextInputLayout textInputLayout = (TextInputLayout) view;
            InputTextComponent inputTextComponent = (InputTextComponent) k5Var;
            Object obj = map5.get(inputTextComponent.getName());
            UiComponentError.UiInputComponentError uiInputComponentError = obj instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj : null;
            nq.d.d(textInputLayout, uiInputComponentError != null ? uiInputComponentError.getMessage() : null, inputTextComponent.f());
            Q(view, map, k5Var, aVar.u());
            Unit unit2 = Unit.f32056a;
        } else if (k5Var instanceof InputTextAreaComponent) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.google.android.material.textfield.TextInputLayout");
            TextInputLayout textInputLayout2 = (TextInputLayout) view;
            InputTextAreaComponent inputTextAreaComponent = (InputTextAreaComponent) k5Var;
            Object obj2 = map5.get(inputTextAreaComponent.getName());
            UiComponentError.UiInputComponentError uiInputComponentError2 = obj2 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj2 : null;
            nq.d.d(textInputLayout2, uiInputComponentError2 != null ? uiInputComponentError2.getMessage() : null, inputTextAreaComponent.f());
            Q(view, map, k5Var, aVar.u());
            Unit unit3 = Unit.f32056a;
        } else if (k5Var instanceof InputConfirmationCodeComponent) {
            ((InputConfirmationCodeComponent) k5Var).f().c(new Function0() { // from class: pq.g2
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit w02;
                    w02 = f3.w0(view, aVar, this);
                    return w02;
                }
            });
            Q(view, map, k5Var, aVar.u());
            Unit unit4 = Unit.f32056a;
        } else if (k5Var instanceof InputAddressComponent) {
            Object tag = view.getTag();
            Intrinsics.checkNotNull(tag, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiAddressFieldBinding");
            iq.d dVar = (iq.d) tag;
            List<TextInputLayout> o10 = CollectionsKt.o(dVar.f29249f, dVar.f29257n, dVar.f29245b, dVar.f29256m, dVar.f29255l);
            InputAddressComponent inputAddressComponent = (InputAddressComponent) k5Var;
            Object obj3 = map3.get(inputAddressComponent.getName());
            Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress");
            InputAddress inputAddress = (InputAddress) obj3;
            Object obj4 = map5.get(inputAddressComponent.getName());
            UiComponentError.UiInputAddressComponentError uiInputAddressComponentError = obj4 instanceof UiComponentError.UiInputAddressComponentError ? (UiComponentError.UiInputAddressComponentError) obj4 : null;
            inputAddressComponent.h().c(inputAddressComponent.B());
            Unit unit5 = Unit.f32056a;
            inputAddressComponent.i().c(inputAddressComponent.D());
            inputAddressComponent.a().c(inputAddressComponent.u());
            inputAddressComponent.c().c(inputAddressComponent.E());
            inputAddressComponent.b().c(inputAddressComponent.v());
            List x10 = inputAddressComponent.x();
            if (x10 == null) {
                x10 = CollectionsKt.l();
            }
            List list = x10;
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            List<Suggestion> list2 = list;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
            for (Suggestion suggestion : list2) {
                arrayList.add(suggestion.toString());
            }
            List h12 = CollectionsKt.h1(arrayList);
            InputAddress.AddressComponentStyle styles2 = inputAddress.getStyles();
            eq.a aVar2 = new eq.a(context, 17367043, h12, (styles2 == null || (inputTextStyle2 = styles2.getInputTextStyle()) == null) ? null : inputTextStyle2.getFocusedTextBasedStyle());
            MaterialAutoCompleteTextView addressFieldExpandedTextView = dVar.f29250g;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpandedTextView, "addressFieldExpandedTextView");
            x0(addressFieldExpandedTextView, aVar2, o10, dVar, aVar, k5Var, list);
            MaterialAutoCompleteTextView addressFieldCollapsedTextView = dVar.f29248e;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsedTextView, "addressFieldCollapsedTextView");
            x0(addressFieldCollapsedTextView, aVar2, o10, dVar, aVar, k5Var, list);
            if (Intrinsics.areEqual(inputAddressComponent.F(), Boolean.FALSE)) {
                for (TextInputLayout textInputLayout3 : o10) {
                    textInputLayout3.setEnabled(true);
                }
                dVar.f29262s.setVisibility(8);
            }
            if (uiInputAddressComponentError != null) {
                inputAddressComponent.H(Boolean.FALSE);
            }
            if (Intrinsics.areEqual(inputAddressComponent.G(), Boolean.FALSE)) {
                dVar.f29252i.setVisibility(8);
                dVar.f29253j.setVisibility(0);
                dVar.f29254k.setLabelFor(dVar.f29253j.getId());
            } else if (Intrinsics.areEqual(inputAddressComponent.G(), Boolean.TRUE) || inputAddressComponent.G() == null) {
                dVar.f29252i.setVisibility(0);
                dVar.f29253j.setVisibility(8);
                dVar.f29254k.setLabelFor(dVar.f29252i.getId());
            }
            S(view, map, k5Var);
            for (View view2 : o10) {
                Intrinsics.checkNotNull(view2);
                R(view2, map, k5Var, aVar.u());
            }
            InputAddress.AddressComponentStyle styles3 = inputAddress.getStyles();
            TextBasedComponentStyle errorTextStyle = (styles3 == null || (inputTextStyle = styles3.getInputTextStyle()) == null) ? null : inputTextStyle.getErrorTextStyle();
            TextInputLayout addressFieldCollapsed = dVar.f29247d;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsed, "addressFieldCollapsed");
            nq.d.d(addressFieldCollapsed, uiInputAddressComponentError != null ? uiInputAddressComponentError.getMessage().get("street_1") : null, errorTextStyle);
            TextInputLayout addressFieldExpanded = dVar.f29249f;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpanded, "addressFieldExpanded");
            nq.d.d(addressFieldExpanded, uiInputAddressComponentError != null ? uiInputAddressComponentError.getMessage().get("street_1") : null, errorTextStyle);
            TextInputLayout addressSuite = dVar.f29257n;
            Intrinsics.checkNotNullExpressionValue(addressSuite, "addressSuite");
            nq.d.d(addressSuite, uiInputAddressComponentError != null ? uiInputAddressComponentError.getMessage().get("street_2") : null, errorTextStyle);
            TextInputLayout addressCity = dVar.f29245b;
            Intrinsics.checkNotNullExpressionValue(addressCity, "addressCity");
            nq.d.d(addressCity, uiInputAddressComponentError != null ? uiInputAddressComponentError.getMessage().get("city") : null, errorTextStyle);
            TextInputLayout addressSubdivision = dVar.f29256m;
            Intrinsics.checkNotNullExpressionValue(addressSubdivision, "addressSubdivision");
            nq.d.d(addressSubdivision, uiInputAddressComponentError != null ? uiInputAddressComponentError.getMessage().get("subdivision") : null, errorTextStyle);
            TextInputLayout addressPostalCode = dVar.f29255l;
            Intrinsics.checkNotNullExpressionValue(addressPostalCode, "addressPostalCode");
            nq.d.d(addressPostalCode, uiInputAddressComponentError != null ? uiInputAddressComponentError.getMessage().get("postal_code") : null, errorTextStyle);
            Unit unit6 = Unit.f32056a;
        } else {
            boolean z10 = true;
            if (!(k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.e) && !(k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.d)) {
                if (k5Var instanceof InputRadioGroupComponent) {
                    Object tag2 = view.getTag();
                    Intrinsics.checkNotNull(tag2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiInputRadioGroupBinding");
                    iq.m mVar = (iq.m) tag2;
                    Object obj5 = map5.get(((InputRadioGroupComponent) k5Var).getName());
                    UiComponentError.UiInputComponentError uiInputComponentError3 = obj5 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj5 : null;
                    String message = uiInputComponentError3 != null ? uiInputComponentError3.getMessage() : null;
                    TextView radioGroupError = mVar.f29298c;
                    Intrinsics.checkNotNullExpressionValue(radioGroupError, "radioGroupError");
                    if (message != null && !StringsKt.k0(message)) {
                        radioGroupError.setVisibility(0);
                        radioGroupError.setText(message);
                    } else {
                        radioGroupError.setVisibility(8);
                        radioGroupError.setText("");
                    }
                    Q(view, map, k5Var, aVar.u());
                    View findViewById = view.findViewById(dq.e.f21047l0);
                    Intrinsics.checkNotNullExpressionValue(findViewById, "findViewById(...)");
                    for (View view3 : androidx.core.view.n0.a((ViewGroup) findViewById)) {
                        R(view3, map, k5Var, aVar.u());
                    }
                    Unit unit7 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof l5) {
                    for (k5 k5Var2 : ((l5) k5Var).getChildren()) {
                        View view4 = (View) this.f45261c.get(k5Var2.getName());
                        if (view4 != null) {
                            Map map6 = map5;
                            q0(aVar, k5Var2, view4, map, map6, a0Var, map3);
                            map4 = map6;
                        } else {
                            map4 = map5;
                        }
                        map5 = map4;
                    }
                    if ((k5Var instanceof ClickableStackComponent) && (view instanceof ConstraintLayout)) {
                        b0(aVar, (ClickableStackComponent) k5Var, (ConstraintLayout) view);
                    }
                    Q(view, map, k5Var, aVar.u());
                    Unit unit8 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof fq.h) {
                    view.setOnClickListener(new View.OnClickListener() { // from class: pq.k2
                        @Override // android.view.View.OnClickListener
                        public final void onClick(View view5) {
                            f3.C0(f3.this, k5Var, view, view5);
                        }
                    });
                    ButtonWithLoadingIndicator buttonWithLoadingIndicator4 = view instanceof ButtonWithLoadingIndicator ? (ButtonWithLoadingIndicator) view : null;
                    if (buttonWithLoadingIndicator4 != null) {
                        buttonWithLoadingIndicator4.setIsLoading((aVar.u() && ((fq.h) k5Var).E0()) ? false : false);
                    }
                    Q(view, map, k5Var, aVar.u());
                    Unit unit9 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof InputDateComponent) {
                    Object tag3 = view.getTag();
                    Intrinsics.checkNotNull(tag3, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiDateFieldBinding");
                    iq.f fVar = (iq.f) tag3;
                    Object obj6 = map5.get(((InputDateComponent) k5Var).getName());
                    UiComponentError.UiInputComponentError uiInputComponentError4 = obj6 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj6 : null;
                    if (uiInputComponentError4 != null) {
                        fVar.f29271f.setError(uiInputComponentError4.getMessage());
                        fVar.f29268c.setError(uiInputComponentError4.getMessage());
                        fVar.f29273h.setError(uiInputComponentError4.getMessage());
                        fVar.f29270e.setText(uiInputComponentError4.getMessage());
                        fVar.f29270e.setVisibility(0);
                    } else {
                        fVar.f29271f.setError("");
                        fVar.f29268c.setError("");
                        fVar.f29273h.setError("");
                        fVar.f29270e.setText("");
                        fVar.f29270e.setVisibility(8);
                    }
                    S(view, map, k5Var);
                    View month = fVar.f29271f;
                    Intrinsics.checkNotNullExpressionValue(month, "month");
                    R(month, map, k5Var, aVar.u());
                    View day = fVar.f29268c;
                    Intrinsics.checkNotNullExpressionValue(day, "day");
                    R(day, map, k5Var, aVar.u());
                    View year = fVar.f29273h;
                    Intrinsics.checkNotNullExpressionValue(year, "year");
                    R(year, map, k5Var, aVar.u());
                    Unit unit10 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.b) {
                    Object tag4 = view.getTag();
                    Intrinsics.checkNotNull(tag4, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiInternationalDbFieldBinding");
                    iq.p pVar = (iq.p) tag4;
                    com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var;
                    Object obj7 = map5.get(bVar.getName());
                    UiComponentError.UiInputInternationalDbComponentError uiInputInternationalDbComponentError = obj7 instanceof UiComponentError.UiInputInternationalDbComponentError ? (UiComponentError.UiInputInternationalDbComponentError) obj7 : null;
                    Map<String, String> message2 = uiInputInternationalDbComponentError != null ? uiInputInternationalDbComponentError.getMessage() : null;
                    com.withpersona.sdk2.inquiry.steps.ui.components.c.n(bVar, pVar, new Function0() { // from class: pq.w1
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit D0;
                            D0 = f3.D0(k5.this, this);
                            return D0;
                        }
                    }, new Function0() { // from class: pq.x1
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit F0;
                            F0 = f3.F0(k5.this, this);
                            return F0;
                        }
                    }, message2 != null ? message2.get("idb_country") : null, message2 != null ? message2.get("idb_type") : null, message2 != null ? message2.get("idb_value") : null);
                    Q(view, map, k5Var, aVar.u());
                    Unit unit11 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof InputMaskedTextComponent) {
                    InputMaskedTextComponent inputMaskedTextComponent = (InputMaskedTextComponent) k5Var;
                    Object obj8 = map5.get(inputMaskedTextComponent.getName());
                    UiComponentError.UiInputComponentError uiInputComponentError5 = obj8 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj8 : null;
                    Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.google.android.material.textfield.TextInputLayout");
                    TextInputLayout textInputLayout4 = (TextInputLayout) view;
                    String message3 = uiInputComponentError5 != null ? uiInputComponentError5.getMessage() : null;
                    InputTextBasedComponentStyle f10 = inputMaskedTextComponent.f();
                    nq.d.d(textInputLayout4, message3, f10 != null ? f10.getErrorTextStyle() : null);
                    Q(view, map, k5Var, aVar.u());
                    Unit unit12 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof InputPhoneNumberComponent) {
                    Object tag5 = view.getTag();
                    Intrinsics.checkNotNull(tag5, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiInputPhoneNumberBinding");
                    iq.l lVar = (iq.l) tag5;
                    InputPhoneNumberComponent inputPhoneNumberComponent = (InputPhoneNumberComponent) k5Var;
                    Object obj9 = map5.get(inputPhoneNumberComponent.getName());
                    UiComponentError.UiInputComponentError uiInputComponentError6 = obj9 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj9 : null;
                    TextInputLayout inputLayout = lVar.f29295b;
                    Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                    nq.d.d(inputLayout, uiInputComponentError6 != null ? uiInputComponentError6.getMessage() : null, inputPhoneNumberComponent.j());
                    fq.v1.e(inputPhoneNumberComponent, lVar, new Function0() { // from class: pq.y1
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit J0;
                            J0 = f3.J0(k5.this, this);
                            return J0;
                        }
                    });
                    Q(view, map, k5Var, aVar.u());
                    Unit unit13 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof InputNumberComponent) {
                    InputNumberComponent inputNumberComponent = (InputNumberComponent) k5Var;
                    Object obj10 = map5.get(inputNumberComponent.getName());
                    UiComponentError.UiInputComponentError uiInputComponentError7 = obj10 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj10 : null;
                    Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.google.android.material.textfield.TextInputLayout");
                    TextInputLayout textInputLayout5 = (TextInputLayout) view;
                    String message4 = uiInputComponentError7 != null ? uiInputComponentError7.getMessage() : null;
                    Object obj11 = map3.get(inputNumberComponent.getName());
                    InputNumber inputNumber = obj11 instanceof InputNumber ? (InputNumber) obj11 : null;
                    nq.d.d(textInputLayout5, message4, (inputNumber == null || (styles = inputNumber.getStyles()) == null) ? null : styles.getErrorTextStyle());
                    Q(view, map, k5Var, aVar.u());
                    Unit unit14 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof InputCurrencyComponent) {
                    InputCurrencyComponent inputCurrencyComponent = (InputCurrencyComponent) k5Var;
                    Object obj12 = map5.get(inputCurrencyComponent.getName());
                    UiComponentError.UiInputComponentError uiInputComponentError8 = obj12 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj12 : null;
                    Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.google.android.material.textfield.TextInputLayout");
                    nq.d.d((TextInputLayout) view, uiInputComponentError8 != null ? uiInputComponentError8.getMessage() : null, inputCurrencyComponent.f());
                    Q(view, map, k5Var, aVar.u());
                    Unit unit15 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof InputCheckboxComponent) {
                    Object tag6 = view.getTag();
                    Intrinsics.checkNotNull(tag6, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiInputCheckboxBinding");
                    iq.i iVar = (iq.i) tag6;
                    Object obj13 = map5.get(((InputCheckboxComponent) k5Var).getName());
                    UiComponentError.UiInputComponentError uiInputComponentError9 = obj13 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj13 : null;
                    if (uiInputComponentError9 != null) {
                        iVar.f29285d.setText(uiInputComponentError9.getMessage());
                        iVar.f29285d.setVisibility(0);
                    } else {
                        iVar.f29285d.setText("");
                        iVar.f29285d.setVisibility(8);
                    }
                    Q(view, map, k5Var, aVar.u());
                    Unit unit16 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof InputCheckboxGroupComponent) {
                    Object tag7 = view.getTag();
                    Intrinsics.checkNotNull(tag7, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiInputCheckboxGroupBinding");
                    iq.j jVar = (iq.j) tag7;
                    Object obj14 = map5.get(((InputCheckboxGroupComponent) k5Var).getName());
                    UiComponentError.UiInputComponentError uiInputComponentError10 = obj14 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj14 : null;
                    if (uiInputComponentError10 != null) {
                        jVar.f29289c.setText(uiInputComponentError10.getMessage());
                        jVar.f29289c.setVisibility(0);
                    } else {
                        jVar.f29289c.setText("");
                        jVar.f29289c.setVisibility(8);
                    }
                    Q(view, map, k5Var, aVar.u());
                    View findViewById2 = view.findViewById(dq.e.f21058r);
                    Intrinsics.checkNotNullExpressionValue(findViewById2, "findViewById(...)");
                    for (View view5 : androidx.core.view.n0.a((ViewGroup) findViewById2)) {
                        R(view5, map, k5Var, aVar.u());
                    }
                    Unit unit17 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof ESignatureComponent) {
                    Object tag8 = view.getTag();
                    Intrinsics.checkNotNull(tag8, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                    iq.v vVar = (iq.v) tag8;
                    ESignatureComponent eSignatureComponent = (ESignatureComponent) k5Var;
                    Object obj15 = map3.get(eSignatureComponent.getName());
                    Intrinsics.checkNotNull(obj15, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature");
                    final ESignature eSignature = (ESignature) obj15;
                    Object obj16 = map5.get(eSignatureComponent.getName());
                    UiComponentError.UiInputComponentError uiInputComponentError11 = obj16 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj16 : null;
                    if (uiInputComponentError11 != null) {
                        vVar.f29330d.setText(uiInputComponentError11.getMessage());
                        vVar.f29330d.setVisibility(0);
                    } else {
                        vVar.f29330d.setText("");
                        vVar.f29330d.setVisibility(8);
                    }
                    ESignature.Attributes attributes = eSignature.getAttributes();
                    if ((attributes != null ? attributes.getLabel() : null) != null) {
                        TextView textView = vVar.f29331e;
                        ESignature.Attributes attributes2 = eSignature.getAttributes();
                        textView.setText(attributes2 != null ? attributes2.getLabel() : null);
                        vVar.f29331e.setVisibility(0);
                    } else {
                        vVar.f29331e.setText("");
                        vVar.f29331e.setVisibility(8);
                    }
                    Bitmap b10 = eSignatureComponent.a().b();
                    if (b10 == null) {
                        Object tag9 = view.getTag();
                        Intrinsics.checkNotNull(tag9, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        ((iq.v) tag9).f29328b.setVisibility(0);
                        Object tag10 = view.getTag();
                        Intrinsics.checkNotNull(tag10, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        TextView textView2 = ((iq.v) tag10).f29328b;
                        ESignature.Attributes attributes3 = eSignature.getAttributes();
                        textView2.setText((attributes3 == null || (r3 = attributes3.getPlaceholder()) == null) ? "+ Add signature" : "+ Add signature");
                        Object tag11 = view.getTag();
                        Intrinsics.checkNotNull(tag11, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        ((iq.v) tag11).f29333g.setVisibility(8);
                        Object tag12 = view.getTag();
                        Intrinsics.checkNotNull(tag12, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        ((iq.v) tag12).f29329c.setVisibility(8);
                    } else {
                        Object tag13 = view.getTag();
                        Intrinsics.checkNotNull(tag13, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        ((iq.v) tag13).f29333g.setImageBitmap(b10);
                        Object tag14 = view.getTag();
                        Intrinsics.checkNotNull(tag14, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        ((iq.v) tag14).f29328b.setVisibility(8);
                        Object tag15 = view.getTag();
                        Intrinsics.checkNotNull(tag15, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        ((iq.v) tag15).f29333g.setVisibility(0);
                        Object tag16 = view.getTag();
                        Intrinsics.checkNotNull(tag16, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiSignatureFieldBinding");
                        ((iq.v) tag16).f29329c.setVisibility(0);
                    }
                    vVar.f29332f.setOnClickListener(new View.OnClickListener() { // from class: pq.z1
                        @Override // android.view.View.OnClickListener
                        public final void onClick(View view6) {
                            f3.N0(f3.this, k5Var, eSignature, aVar, a0Var, view6);
                        }
                    });
                    S(view, map, k5Var);
                    View signatureContainer = vVar.f29332f;
                    Intrinsics.checkNotNullExpressionValue(signatureContainer, "signatureContainer");
                    R(signatureContainer, map, k5Var, aVar.u());
                    Unit unit18 = Unit.f32056a;
                    return;
                } else if (k5Var instanceof GovernmentIdNfcScanComponent) {
                    Object tag17 = view.getTag();
                    Intrinsics.checkNotNull(tag17, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanViewHolder");
                    fq.d0 d0Var = (fq.d0) tag17;
                    ButtonWithLoadingIndicator f11 = d0Var.f();
                    f11.setIsLoading((aVar.u() && ((GovernmentIdNfcScanComponent) k5Var).E0()) ? false : false);
                    Q(f11, map, k5Var, aVar.u());
                    f11.setOnClickListener(new View.OnClickListener() { // from class: pq.a2
                        @Override // android.view.View.OnClickListener
                        public final void onClick(View view6) {
                            f3.P0(f3.this, k5Var, view6);
                        }
                    });
                    GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) k5Var;
                    UiComponentError uiComponentError = (UiComponentError) map5.get(governmentIdNfcScanComponent.getName());
                    if (uiComponentError != null) {
                        if (uiComponentError instanceof UiComponentError.UiInputComponentError) {
                            TextView d10 = d0Var.d();
                            d10.setText(((UiComponentError.UiInputComponentError) uiComponentError).getMessage());
                            d10.setVisibility(0);
                            return;
                        } else if (uiComponentError instanceof UiComponentError.UiGovernmentIdNfcScanComponentError) {
                            TextInputLayout a10 = d0Var.a();
                            UiComponentError.UiGovernmentIdNfcScanComponentError uiGovernmentIdNfcScanComponentError = (UiComponentError.UiGovernmentIdNfcScanComponentError) uiComponentError;
                            String str = uiGovernmentIdNfcScanComponentError.getMessage().get(GovernmentIdNfcScan.cardAccessNumberName);
                            GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles4 = governmentIdNfcScanComponent.e().getStyles();
                            nq.d.d(a10, str, (styles4 == null || (cardAccessNumberStyle = styles4.getCardAccessNumberStyle()) == null) ? null : cardAccessNumberStyle.getErrorTextStyle());
                            TextInputLayout c10 = d0Var.c();
                            String str2 = uiGovernmentIdNfcScanComponentError.getMessage().get(GovernmentIdNfcScan.documentNumberName);
                            GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles5 = governmentIdNfcScanComponent.e().getStyles();
                            nq.d.d(c10, str2, (styles5 == null || (documentNumberStyle = styles5.getDocumentNumberStyle()) == null) ? null : documentNumberStyle.getErrorTextStyle());
                            d0Var.b().f29270e.setText(uiGovernmentIdNfcScanComponentError.getMessage().get(GovernmentIdNfcScan.dateOfBirthName));
                            d0Var.b().f29270e.setVisibility(0);
                            d0Var.e().f29270e.setText(uiGovernmentIdNfcScanComponentError.getMessage().get(GovernmentIdNfcScan.expirationDateName));
                            d0Var.e().f29270e.setVisibility(0);
                            Unit unit19 = Unit.f32056a;
                            return;
                        } else {
                            Unit unit20 = Unit.f32056a;
                            return;
                        }
                    }
                    return;
                } else if (!(k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.a) && !(k5Var instanceof fq.i0) && !(k5Var instanceof fq.k2) && !(k5Var instanceof fq.c4) && !(k5Var instanceof fq.f4) && !(k5Var instanceof fq.i4) && !(k5Var instanceof fq.x4) && !(k5Var instanceof e5) && !(k5Var instanceof h5) && !(k5Var instanceof fq.e)) {
                    throw new qr.p();
                } else {
                    Q(view, map, k5Var, aVar.u());
                    Unit unit21 = Unit.f32056a;
                    return;
                }
            }
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.google.android.material.textfield.TextInputLayout");
            final TextInputLayout textInputLayout6 = (TextInputLayout) view;
            Intrinsics.checkNotNull(k5Var, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.components.InputSelectBoxComponent");
            final fq.c2 c2Var = (fq.c2) k5Var;
            final fq.a4 a4Var = (fq.a4) k5Var;
            textInputLayout6.setOnClickListener(new View.OnClickListener() { // from class: pq.h2
                @Override // android.view.View.OnClickListener
                public final void onClick(View view6) {
                    f3.z0(f3.this, textInputLayout6, c2Var, a4Var, view6);
                }
            });
            EditText editText = textInputLayout6.getEditText();
            if (editText != null) {
                editText.setOnClickListener(new View.OnClickListener() { // from class: pq.i2
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view6) {
                        f3.A0(f3.this, textInputLayout6, c2Var, a4Var, view6);
                    }
                });
                Unit unit22 = Unit.f32056a;
            }
            EditText editText2 = textInputLayout6.getEditText();
            if (editText2 != null) {
                editText2.setText(CollectionsKt.x0(a4Var.a().b(), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: pq.j2
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj17) {
                        CharSequence B0;
                        B0 = f3.B0((fq.b4) obj17);
                        return B0;
                    }
                }, 30, null));
                Unit unit23 = Unit.f32056a;
            }
            Object obj17 = map5.get(k5Var.getName());
            UiComponentError.UiInputComponentError uiInputComponentError12 = obj17 instanceof UiComponentError.UiInputComponentError ? (UiComponentError.UiInputComponentError) obj17 : null;
            String message5 = uiInputComponentError12 != null ? uiInputComponentError12.getMessage() : null;
            InputSelectBoxComponentStyle styles6 = c2Var.getStyles();
            nq.d.d(textInputLayout6, message5, styles6 != null ? styles6.getErrorTextStyle() : null);
            Q(view, map, k5Var, aVar.u());
            Unit unit24 = Unit.f32056a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r0(f3 f3Var, View view) {
        f3Var.f45266h.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s0(f3 f3Var, k5 k5Var, View view, View view2) {
        boolean z10;
        Function2 function2 = f3Var.f45268j;
        if (view.getVisibility() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        function2.invoke(k5Var, Boolean.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t0(f3 f3Var, k5 k5Var, View view, View view2) {
        boolean z10;
        Function2 function2 = f3Var.f45268j;
        if (view.getVisibility() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        function2.invoke(k5Var, Boolean.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void u0(f3 f3Var, View view) {
        f3Var.f45267i.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v0(f3 f3Var, k5 k5Var, View view) {
        f3Var.f45270l.invoke(k5Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w0(View view, v4.d.a aVar, f3 f3Var) {
        boolean z10;
        if (hq.a.f26489a.b(view)) {
            c5 c5Var = (c5) gq.f.a(aVar.f(), Reflection.getOrCreateKotlinClass(c5.class), c.f45274d);
            if (c5Var != null) {
                Function2 function2 = f3Var.f45268j;
                if (view.getVisibility() == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                function2.invoke(c5Var, Boolean.valueOf(z10));
            }
        }
        return Unit.f32056a;
    }

    private static final void x0(final MaterialAutoCompleteTextView materialAutoCompleteTextView, eq.a aVar, final List list, final iq.d dVar, final v4.d.a aVar2, final k5 k5Var, final List list2) {
        materialAutoCompleteTextView.setAdapter(aVar);
        aVar.notifyDataSetChanged();
        materialAutoCompleteTextView.setThreshold(1);
        materialAutoCompleteTextView.setOnItemClickListener(new AdapterView.OnItemClickListener() { // from class: pq.t2
            @Override // android.widget.AdapterView.OnItemClickListener
            public final void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
                f3.y0(list, dVar, materialAutoCompleteTextView, aVar2, k5Var, list2, adapterView, view, i10, j10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void y0(List list, iq.d dVar, MaterialAutoCompleteTextView materialAutoCompleteTextView, v4.d.a aVar, k5 k5Var, List list2, AdapterView adapterView, View view, int i10, long j10) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            ((TextInputLayout) it.next()).setEnabled(false);
        }
        dVar.f29262s.setVisibility(0);
        Context context = materialAutoCompleteTextView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        rp.f.d(context);
        aVar.q().invoke(k5Var, ((Suggestion) list2.get(i10)).b());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z0(f3 f3Var, TextInputLayout textInputLayout, fq.c2 c2Var, fq.a4 a4Var, View view) {
        Q0(f3Var, textInputLayout, c2Var, a4Var);
    }

    @Override // dn.k
    /* renamed from: h0 */
    public void a(final v4.d.a rendering, dn.a0 viewEnvironment) {
        int d10;
        dq.a aVar;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = this.f45260b.getRoot().getContext();
        final ArrayList<dq.a> arrayList = new ArrayList();
        for (k5 k5Var : rendering.f()) {
            View view = (View) this.f45261c.get(k5Var.getName());
            if (view == null) {
                aVar = null;
            } else {
                aVar = new dq.a(k5Var, view);
            }
            if (aVar != null) {
                arrayList.add(aVar);
            }
        }
        Map U = U(arrayList);
        Map p02 = p0(U);
        List e10 = rendering.e();
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(e10, 10)), 16));
        for (Object obj : e10) {
            linkedHashMap.put(((UiComponentError) obj).getName(), obj);
        }
        Integer c10 = rendering.c();
        if (c10 != null && c10.intValue() != 0) {
            d10 = c10.intValue();
        } else {
            Intrinsics.checkNotNull(context);
            d10 = rp.s.d(context, 16842801, null, false, 6, null);
        }
        aq.c.a(viewEnvironment, d10);
        for (dq.a aVar2 : arrayList) {
            q0(rendering, aVar2.a(), aVar2.b(), p02, linkedHashMap, viewEnvironment, this.f45262d);
        }
        zp.a j10 = rendering.j();
        Function0 function0 = new Function0() { // from class: pq.a3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i02;
                i02 = f3.i0(f3.this, rendering);
                return i02;
            }
        };
        Function0 function02 = new Function0() { // from class: pq.b3
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j02;
                j02 = f3.j0(v4.d.a.this);
                return j02;
            }
        };
        Pi2NavigationBar navigationBar = this.f45260b.f48045i;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = this.f45260b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(j10, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = this.f45260b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        rp.z.b(root2, rendering.g(), rendering.p(), null, 0, 0, 56, null);
        this.f45266h = rendering.n();
        this.f45267i = rendering.l();
        this.f45268j = new Function2() { // from class: pq.c3
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit k02;
                k02 = f3.k0(v4.d.a.this, this, arrayList, (k5) obj2, ((Boolean) obj3).booleanValue());
                return k02;
            }
        };
        this.f45269k = rendering.i();
        this.f45270l = new Function1() { // from class: pq.d3
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit l02;
                l02 = f3.l0(v4.d.a.this, this, arrayList, (q5) obj2);
                return l02;
            }
        };
        v4.d.a.C0590a b10 = rendering.b();
        if (b10 != null) {
            if (b10.c()) {
                fq.h a10 = b10.a();
                if (!(a10 instanceof fq.a) && !(a10 instanceof c5)) {
                    if (a10 instanceof fq.i) {
                        this.f45267i.invoke();
                    } else if (a10 instanceof fq.o) {
                        this.f45266h.invoke();
                    }
                } else {
                    Function2 function2 = this.f45268j;
                    View view2 = (View) this.f45261c.get(a10.getName());
                    boolean z10 = false;
                    if (view2 != null && view2.getVisibility() == 0) {
                        z10 = true;
                    }
                    function2.invoke(a10, Boolean.valueOf(z10));
                }
            } else if (b10.b() != null) {
                View view3 = (View) this.f45261c.get(b10.a().getName());
                if (view3 instanceof ButtonWithLoadingIndicator) {
                    ((ButtonWithLoadingIndicator) view3).setText(b10.b());
                } else if (view3 instanceof MaterialButton) {
                    ((MaterialButton) view3).setText(b10.b());
                }
            }
        }
        d0(rendering, viewEnvironment, U, linkedHashMap);
    }
}
