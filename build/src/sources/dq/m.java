package dq;

import android.content.Context;
import android.text.Editable;
import android.view.View;
import android.view.ViewGroup;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.FrameLayout;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ActionButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CancelButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepImagePreview;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CompleteButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMultiSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputPhoneNumber;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputRadioGroup;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputTextArea;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.PrivacyPolicy;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.SubmitButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Text;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Title;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
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
import fq.a1;
import fq.b2;
import fq.c0;
import fq.c1;
import fq.c4;
import fq.c5;
import fq.d5;
import fq.e1;
import fq.e2;
import fq.e4;
import fq.e5;
import fq.f0;
import fq.f4;
import fq.g2;
import fq.g5;
import fq.h0;
import fq.h4;
import fq.h5;
import fq.i0;
import fq.i2;
import fq.i4;
import fq.j5;
import fq.k0;
import fq.k2;
import fq.k5;
import fq.m5;
import fq.n;
import fq.n0;
import fq.o;
import fq.o1;
import fq.p;
import fq.q;
import fq.q1;
import fq.q5;
import fq.r0;
import fq.r4;
import fq.r5;
import fq.s1;
import fq.u0;
import fq.v1;
import fq.w3;
import fq.x;
import fq.x4;
import fq.y;
import fq.z;
import fq.z4;
import iq.s;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a */
    public static final m f21130a = new m();

    private m() {
    }

    public static final void d(View view) {
        InputMethodManager inputMethodManager = (InputMethodManager) view.getContext().getSystemService("input_method");
        if (inputMethodManager != null) {
            inputMethodManager.showSoftInput(view, 1);
        }
    }

    private final View e(Context context, y yVar, Map map, boolean z10, Map map2, m5 m5Var) {
        ArrayList arrayList = new ArrayList();
        List k10 = k(CollectionsKt.e(yVar), map, context, z10, arrayList, m5Var);
        for (Object obj : arrayList) {
            map2.put(((a) obj).c().getName(), obj);
        }
        return (View) CollectionsKt.o0(k10);
    }

    private final View f(Context context, g gVar, boolean z10, Map map, m5 m5Var, boolean z11, boolean z12) {
        List l10;
        int i10;
        a aVar;
        View d10;
        s c10 = s.c(m5Var.b());
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        List components = gVar.getComponents();
        if (components != null) {
            l10 = new ArrayList();
            for (Object obj : components) {
                if (!(((k5) obj) instanceof y)) {
                    l10.add(obj);
                }
            }
        } else {
            l10 = CollectionsKt.l();
        }
        List<k5> list = l10;
        ArrayList arrayList = new ArrayList();
        List k10 = k(list, com.withpersona.sdk2.inquiry.steps.ui.components.f.j(gVar.P()), context, z10, arrayList, m5Var);
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(root);
        Iterator it = k10.iterator();
        while (true) {
            i10 = 0;
            if (!it.hasNext()) {
                break;
            }
            View view = (View) it.next();
            view.setId(View.generateViewId());
            view.setSaveEnabled(false);
            root.addView(view);
            constraintSet.g(view.getId(), 6, 0, 6);
            constraintSet.g(view.getId(), 7, 0, 7);
            constraintSet.k(view.getId(), -2);
            constraintSet.j(view.getId(), 0);
            constraintSet.D(view.getId(), 0.5f);
        }
        for (Object obj2 : arrayList) {
            map.put(((a) obj2).c().getName(), obj2);
        }
        if (k10.size() > 1) {
            List<View> list2 = k10;
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
            for (View view2 : list2) {
                arrayList2.add(Integer.valueOf(view2.getId()));
            }
            constraintSet.p(0, 3, 0, 4, CollectionsKt.g1(arrayList2), null, 3);
            if (gVar.getStyles() == null) {
                for (k5 k5Var : list) {
                    int i11 = i10 + 1;
                    if (!(k5Var instanceof x4) && (aVar = (a) map.get(k5Var.getName())) != null && (d10 = aVar.d()) != null && i10 != CollectionsKt.n(list)) {
                        constraintSet.C(d10.getId(), 4, (int) rp.h.a(16.0d));
                    }
                    i10 = i11;
                }
            }
        }
        if (!z11) {
            root.setPadding(root.getPaddingLeft(), root.getPaddingTop(), root.getPaddingRight(), (int) rp.h.a(24.0d));
        }
        constraintSet.c(root);
        Context context2 = c10.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        if (!rp.f.g(context2) && z12) {
            c(root);
        }
        ConstraintLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        return root2;
    }

    public static /* synthetic */ h h(m mVar, Context context, g gVar, boolean z10, boolean z11, boolean z12, int i10, Object obj) {
        if ((i10 & 16) != 0) {
            z12 = true;
        }
        return mVar.g(context, gVar, z10, z11, z12);
    }

    public static final Unit i(m5 m5Var) {
        m5Var.c();
        return Unit.f32008a;
    }

    private final List k(List list, Map map, Context context, boolean z10, List list2, m5 m5Var) {
        View j10;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            k5 k5Var = (k5) it.next();
            if (k5Var instanceof fq.a) {
                fq.a aVar = (fq.a) k5Var;
                Object obj = map.get(aVar.getName());
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.ActionButton");
                j10 = fq.b.a(aVar, m5Var, (ActionButton) obj);
            } else if (k5Var instanceof fq.i) {
                fq.i iVar = (fq.i) k5Var;
                Object obj2 = map.get(iVar.getName());
                Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.CancelButton");
                j10 = fq.j.a(iVar, m5Var, (CancelButton) obj2);
            } else if (k5Var instanceof fq.m) {
                fq.m mVar = (fq.m) k5Var;
                Object obj3 = map.get(mVar.getName());
                Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton");
                j10 = n.a(mVar, m5Var, (CombinedStepButton) obj3);
            } else if (k5Var instanceof o) {
                o oVar = (o) k5Var;
                Object obj4 = map.get(oVar.getName());
                Intrinsics.checkNotNull(obj4, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.CompleteButton");
                j10 = p.a(oVar, m5Var, (CompleteButton) obj4);
            } else if (k5Var instanceof c5) {
                c5 c5Var = (c5) k5Var;
                Object obj5 = map.get(c5Var.getName());
                Intrinsics.checkNotNull(obj5, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.SubmitButton");
                j10 = d5.a(c5Var, m5Var, (SubmitButton) obj5);
            } else if (k5Var instanceof ESignatureComponent) {
                ESignatureComponent eSignatureComponent = (ESignatureComponent) k5Var;
                Object obj6 = map.get(eSignatureComponent.getName());
                Intrinsics.checkNotNull(obj6, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature");
                j10 = x.c(eSignatureComponent, m5Var, (ESignature) obj6);
            } else if (k5Var instanceof GovernmentIdNfcScanComponent) {
                GovernmentIdNfcScanComponent governmentIdNfcScanComponent = (GovernmentIdNfcScanComponent) k5Var;
                Object obj7 = map.get(governmentIdNfcScanComponent.getName());
                Intrinsics.checkNotNull(obj7, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan");
                j10 = c0.c(governmentIdNfcScanComponent, m5Var, (GovernmentIdNfcScan) obj7);
            } else if (k5Var instanceof i0) {
                i0 i0Var = (i0) k5Var;
                Object obj8 = map.get(i0Var.getName());
                Intrinsics.checkNotNull(obj8, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepImagePreview");
                j10 = k0.b(i0Var, m5Var, (CombinedStepImagePreview) obj8);
            } else if (k5Var instanceof InputAddressComponent) {
                InputAddressComponent inputAddressComponent = (InputAddressComponent) k5Var;
                Object obj9 = map.get(inputAddressComponent.getName());
                Intrinsics.checkNotNull(obj9, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress");
                j10 = n0.e(inputAddressComponent, m5Var, (InputAddress) obj9);
            } else if (k5Var instanceof InputCheckboxComponent) {
                InputCheckboxComponent inputCheckboxComponent = (InputCheckboxComponent) k5Var;
                Object obj10 = map.get(inputCheckboxComponent.getName());
                Intrinsics.checkNotNull(obj10, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox");
                j10 = r0.d(inputCheckboxComponent, m5Var, (InputCheckbox) obj10);
            } else if (k5Var instanceof InputCheckboxGroupComponent) {
                InputCheckboxGroupComponent inputCheckboxGroupComponent = (InputCheckboxGroupComponent) k5Var;
                Object obj11 = map.get(inputCheckboxGroupComponent.getName());
                Intrinsics.checkNotNull(obj11, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup");
                j10 = u0.c(inputCheckboxGroupComponent, m5Var, (InputCheckboxGroup) obj11);
            } else if (k5Var instanceof InputConfirmationCodeComponent) {
                InputConfirmationCodeComponent inputConfirmationCodeComponent = (InputConfirmationCodeComponent) k5Var;
                Object obj12 = map.get(inputConfirmationCodeComponent.getName());
                Intrinsics.checkNotNull(obj12, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputConfirmationCode");
                j10 = a1.f(inputConfirmationCodeComponent, m5Var, (InputConfirmationCode) obj12);
            } else if (k5Var instanceof InputDateComponent) {
                InputDateComponent inputDateComponent = (InputDateComponent) k5Var;
                Object obj13 = map.get(inputDateComponent.getName());
                Intrinsics.checkNotNull(obj13, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate");
                j10 = e1.c(inputDateComponent, m5Var, null, (InputDate) obj13, 2, null);
            } else if (k5Var instanceof InputMaskedTextComponent) {
                InputMaskedTextComponent inputMaskedTextComponent = (InputMaskedTextComponent) k5Var;
                Object obj14 = map.get(inputMaskedTextComponent.getName());
                Intrinsics.checkNotNull(obj14, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMaskedText");
                j10 = o1.g(inputMaskedTextComponent, m5Var, (InputMaskedText) obj14);
            } else if (k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.d) {
                com.withpersona.sdk2.inquiry.steps.ui.components.d dVar = (com.withpersona.sdk2.inquiry.steps.ui.components.d) k5Var;
                Object obj15 = map.get(dVar.getName());
                Intrinsics.checkNotNull(obj15, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMultiSelect");
                j10 = q1.b(dVar, m5Var, (InputMultiSelect) obj15);
            } else if (k5Var instanceof InputNumberComponent) {
                InputNumberComponent inputNumberComponent = (InputNumberComponent) k5Var;
                Object obj16 = map.get(inputNumberComponent.getName());
                Intrinsics.checkNotNull(obj16, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputNumber");
                j10 = s1.b(inputNumberComponent, m5Var, (InputNumber) obj16);
            } else if (k5Var instanceof InputPhoneNumberComponent) {
                InputPhoneNumberComponent inputPhoneNumberComponent = (InputPhoneNumberComponent) k5Var;
                Object obj17 = map.get(inputPhoneNumberComponent.getName());
                Intrinsics.checkNotNull(obj17, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputPhoneNumber");
                j10 = v1.c(inputPhoneNumberComponent, m5Var, (InputPhoneNumber) obj17);
            } else if (k5Var instanceof InputRadioGroupComponent) {
                InputRadioGroupComponent inputRadioGroupComponent = (InputRadioGroupComponent) k5Var;
                Object obj18 = map.get(inputRadioGroupComponent.getName());
                Intrinsics.checkNotNull(obj18, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputRadioGroup");
                j10 = b2.f(inputRadioGroupComponent, m5Var, (InputRadioGroup) obj18);
            } else if (k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.e) {
                com.withpersona.sdk2.inquiry.steps.ui.components.e eVar = (com.withpersona.sdk2.inquiry.steps.ui.components.e) k5Var;
                Object obj19 = map.get(eVar.getName());
                Intrinsics.checkNotNull(obj19, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputSelect");
                j10 = e2.b(eVar, m5Var, (InputSelect) obj19);
            } else if (k5Var instanceof InputTextComponent) {
                InputTextComponent inputTextComponent = (InputTextComponent) k5Var;
                Object obj20 = map.get(inputTextComponent.getName());
                Intrinsics.checkNotNull(obj20, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText");
                j10 = i2.c(inputTextComponent, m5Var, (InputText) obj20, null, 4, null);
            } else if (k5Var instanceof k2) {
                k2 k2Var = (k2) k5Var;
                Object obj21 = map.get(k2Var.getName());
                Intrinsics.checkNotNull(obj21, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.LocalImage");
                j10 = w3.O(k2Var, m5Var, (LocalImage) obj21);
            } else if (k5Var instanceof c4) {
                c4 c4Var = (c4) k5Var;
                Object obj22 = map.get(c4Var.getName());
                Intrinsics.checkNotNull(obj22, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.PrivacyPolicy");
                j10 = e4.b(c4Var, m5Var, (PrivacyPolicy) obj22);
            } else if (k5Var instanceof f4) {
                f4 f4Var = (f4) k5Var;
                Object obj23 = map.get(f4Var.getName());
                Intrinsics.checkNotNull(obj23, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode");
                j10 = h4.b(f4Var, m5Var, (QRCode) obj23);
            } else if (k5Var instanceof i4) {
                i4 i4Var = (i4) k5Var;
                Object obj24 = map.get(i4Var.getName());
                Intrinsics.checkNotNull(obj24, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage");
                j10 = r4.m(i4Var, m5Var, (RemoteImage) obj24);
            } else if (k5Var instanceof x4) {
                j10 = z4.b((x4) k5Var, m5Var);
            } else if (k5Var instanceof e5) {
                e5 e5Var = (e5) k5Var;
                Object obj25 = map.get(e5Var.getName());
                Intrinsics.checkNotNull(obj25, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.Text");
                j10 = g5.b(e5Var, m5Var, (Text) obj25);
            } else if (k5Var instanceof h5) {
                h5 h5Var = (h5) k5Var;
                Object obj26 = map.get(h5Var.getName());
                Intrinsics.checkNotNull(obj26, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.Title");
                j10 = j5.b(h5Var, m5Var, (Title) obj26);
            } else if (k5Var instanceof InputTextAreaComponent) {
                InputTextAreaComponent inputTextAreaComponent = (InputTextAreaComponent) k5Var;
                Object obj27 = map.get(inputTextAreaComponent.getName());
                Intrinsics.checkNotNull(obj27, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputTextArea");
                j10 = g2.b(inputTextAreaComponent, m5Var, (InputTextArea) obj27);
            } else if (k5Var instanceof fq.e) {
                j10 = fq.g.b((fq.e) k5Var, m5Var);
            } else if (k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.a) {
                j10 = q.a((com.withpersona.sdk2.inquiry.steps.ui.components.a) k5Var, m5Var);
            } else if (k5Var instanceof q5) {
                q5 q5Var = (q5) k5Var;
                Object obj28 = map.get(q5Var.getName());
                Intrinsics.checkNotNull(obj28, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton");
                j10 = r5.a(q5Var, m5Var, (VerifyPersonaButton) obj28);
            } else if (k5Var instanceof ClickableStackComponent) {
                ClickableStackComponent clickableStackComponent = (ClickableStackComponent) k5Var;
                List k10 = f21130a.k(clickableStackComponent.getChildren(), map, context, z10, list2, m5Var);
                Object obj29 = map.get(clickableStackComponent.getName());
                Intrinsics.checkNotNull(obj29, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack");
                j10 = fq.l.b(clickableStackComponent, m5Var, list2, k10, (ClickableStack) obj29);
            } else if (k5Var instanceof f0) {
                f0 f0Var = (f0) k5Var;
                List k11 = f21130a.k(f0Var.getChildren(), map, context, z10, list2, m5Var);
                Object obj30 = map.get(f0Var.getName());
                Intrinsics.checkNotNull(obj30, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack");
                j10 = h0.b(f0Var, m5Var, list2, k11, (HorizontalStack) obj30);
            } else if (k5Var instanceof y) {
                y yVar = (y) k5Var;
                List k12 = f21130a.k(yVar.getChildren(), map, context, z10, list2, m5Var);
                Object obj31 = map.get(yVar.getName());
                Intrinsics.checkNotNull(obj31, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer");
                j10 = z.a(yVar, m5Var, list2, k12, (Footer) obj31);
            } else if (k5Var instanceof InputCurrencyComponent) {
                InputCurrencyComponent inputCurrencyComponent = (InputCurrencyComponent) k5Var;
                Object obj32 = map.get(inputCurrencyComponent.getName());
                Intrinsics.checkNotNull(obj32, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCurrency");
                j10 = c1.b(inputCurrencyComponent, m5Var, (InputCurrency) obj32);
            } else if (k5Var instanceof com.withpersona.sdk2.inquiry.steps.ui.components.b) {
                com.withpersona.sdk2.inquiry.steps.ui.components.b bVar = (com.withpersona.sdk2.inquiry.steps.ui.components.b) k5Var;
                Object obj33 = map.get(bVar.getName());
                Intrinsics.checkNotNull(obj33, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.network.dto.ui.components.InputInternationalDb");
                j10 = com.withpersona.sdk2.inquiry.steps.ui.components.c.j(bVar, m5Var, (InputInternationalDb) obj33);
            } else {
                throw new qr.p();
            }
            if (j10 != null) {
                list2.add(new a(k5Var, j10));
            }
            if (j10 != null) {
                arrayList.add(j10);
            }
        }
        return arrayList;
    }

    public final void c(ConstraintLayout parentView) {
        Object obj;
        Editable text;
        Intrinsics.checkNotNullParameter(parentView, "parentView");
        ArrayList<View> focusables = parentView.getFocusables(2);
        Intrinsics.checkNotNullExpressionValue(focusables, "getFocusables(...)");
        Iterator<T> it = focusables.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                View view = (View) obj;
                if ((view instanceof EditText) && ((text = ((EditText) view).getText()) == null || StringsKt.k0(text))) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        final View view2 = (View) obj;
        if (view2 != null) {
            view2.requestFocus();
            view2.post(new Runnable() { // from class: dq.l
                @Override // java.lang.Runnable
                public final void run() {
                    m.d(view2);
                }
            });
        }
    }

    public final h g(Context context, g uiScreen, boolean z10, boolean z11, boolean z12) {
        y yVar;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        final m5 m5Var = new m5(context);
        View f10 = f(context, uiScreen, z10, linkedHashMap, m5Var, z11, z12);
        List components = uiScreen.getComponents();
        View view = null;
        if (components != null) {
            ArrayList arrayList = new ArrayList();
            for (Object obj : components) {
                if (obj instanceof y) {
                    arrayList.add(obj);
                }
            }
            yVar = (y) CollectionsKt.firstOrNull(arrayList);
        } else {
            yVar = null;
        }
        if (yVar != null) {
            view = e(context, yVar, com.withpersona.sdk2.inquiry.steps.ui.components.f.j(uiScreen.P()), z10, linkedHashMap, m5Var);
            linkedHashMap = linkedHashMap;
            m5Var = m5Var;
        }
        bq.s.b(f10, new Function0() { // from class: dq.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = m.i(m5.this);
                return i10;
            }
        });
        return new h(new i(linkedHashMap), f10, view);
    }

    public final j j(g uiScreen, List componentNamesToActions, Function0 onCancelled, String str) {
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Intrinsics.checkNotNullParameter(componentNamesToActions, "componentNamesToActions");
        Intrinsics.checkNotNullParameter(onCancelled, "onCancelled");
        return new j(uiScreen, componentNamesToActions, onCancelled, str, false, 16, null);
    }

    public final h l(tp.b binding, g uiScreen, Function2 function2, boolean z10) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(uiScreen, "uiScreen");
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNull(context);
        h h10 = h(this, context, uiScreen, false, z10, false, 16, null);
        if (uiScreen.f() == StyleElements.PositionType.CENTER) {
            binding.f50795c.setFillViewport(true);
            h10.a().setLayoutParams(new FrameLayout.LayoutParams(-1, -2));
            View a10 = h10.a();
            ViewGroup.LayoutParams layoutParams = a10.getLayoutParams();
            if (layoutParams != null) {
                FrameLayout.LayoutParams layoutParams2 = (FrameLayout.LayoutParams) layoutParams;
                layoutParams2.gravity = 16;
                a10.setLayoutParams(layoutParams2);
            } else {
                throw new NullPointerException("null cannot be cast to non-null type android.widget.FrameLayout.LayoutParams");
            }
        }
        binding.f50794b.addView(h10.a());
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 13, null);
        if (h10.b() != null) {
            binding.f50796d.addView(h10.b());
            bq.f.d(h10.b(), false, false, false, false, 2, null);
        }
        if (function2 != null) {
            function2.invoke(binding, h10.c().a());
        }
        Integer e10 = uiScreen.e();
        if (e10 != null) {
            binding.f50797e.setControlsColor(e10.intValue());
        }
        return h10;
    }
}
