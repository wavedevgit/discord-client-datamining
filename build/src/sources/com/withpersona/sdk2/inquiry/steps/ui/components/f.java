package com.withpersona.sdk2.inquiry.steps.ui.components;

import aq.c4;
import aq.c5;
import aq.e5;
import aq.f0;
import aq.f4;
import aq.h;
import aq.h5;
import aq.i;
import aq.i0;
import aq.i4;
import aq.k2;
import aq.k5;
import aq.l5;
import aq.m;
import aq.m5;
import aq.o;
import aq.q5;
import aq.x4;
import aq.y;
import com.google.android.material.button.MaterialButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.BaseButtonAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ActionButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Branding;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Button;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CancelButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepImagePreview;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CompleteButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CreatePersonaSheet;
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
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Spacer;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.SubmitButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Text;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Title;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentContainerConfig;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.UnknownComponentConfig;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.BaseButtonComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import lr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19359a;

        static {
            int[] iArr = new int[Button.ButtonType.values().length];
            try {
                iArr[Button.ButtonType.PRIMARY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Button.ButtonType.SECONDARY.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            f19359a = iArr;
        }
    }

    private static final boolean c(InputAddress inputAddress) {
        String str;
        String str2;
        String str3;
        String str4;
        InputAddress.Attributes attributes = inputAddress.getAttributes();
        String str5 = null;
        if (attributes != null) {
            str = attributes.getPrefillAddressStreet1();
        } else {
            str = null;
        }
        if (str == null || StringsKt.k0(str)) {
            InputAddress.Attributes attributes2 = inputAddress.getAttributes();
            if (attributes2 != null) {
                str2 = attributes2.getPrefillAddressStreet2();
            } else {
                str2 = null;
            }
            if (str2 == null || StringsKt.k0(str2)) {
                InputAddress.Attributes attributes3 = inputAddress.getAttributes();
                if (attributes3 != null) {
                    str3 = attributes3.getPrefillAddressCity();
                } else {
                    str3 = null;
                }
                if (str3 == null || StringsKt.k0(str3)) {
                    InputAddress.Attributes attributes4 = inputAddress.getAttributes();
                    if (attributes4 != null) {
                        str4 = attributes4.getPrefillAddressPostalCode();
                    } else {
                        str4 = null;
                    }
                    if (str4 == null || StringsKt.k0(str4)) {
                        InputAddress.Attributes attributes5 = inputAddress.getAttributes();
                        if (attributes5 != null) {
                            str5 = attributes5.getPrefillAddressSubdivision();
                        }
                        if (str5 != null && !StringsKt.k0(str5)) {
                            return false;
                        }
                        return true;
                    }
                    return false;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    public static final MaterialButton d(h hVar, m5 uiComponentHelper, Button config) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final BaseButtonComponentStyle styles = config.getStyles();
        if (styles != null) {
            final MaterialButton materialButton = new MaterialButton(uiComponentHelper.a());
            BaseButtonAttributes attributes = config.getAttributes();
            if (attributes != null) {
                materialButton.setText(attributes.getText());
            }
            uiComponentHelper.d(new Function0() { // from class: aq.o5
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e10;
                    e10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.e(MaterialButton.this, styles);
                    return e10;
                }
            });
            return materialButton;
        }
        MaterialButton materialButton2 = new MaterialButton(uiComponentHelper.a(), null, h(config));
        BaseButtonAttributes attributes2 = config.getAttributes();
        if (attributes2 != null) {
            materialButton2.setText(attributes2.getText());
        }
        return materialButton2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e(MaterialButton materialButton, BaseButtonComponentStyle baseButtonComponentStyle) {
        fq.e.f(materialButton, baseButtonComponentStyle, false, false, 6, null);
        return Unit.f32464a;
    }

    public static final ButtonWithLoadingIndicator f(h hVar, m5 uiComponentHelper, Button config) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final BaseButtonComponentStyle styles = config.getStyles();
        if (styles != null) {
            final ButtonWithLoadingIndicator buttonWithLoadingIndicator = new ButtonWithLoadingIndicator(uiComponentHelper.a(), 0);
            BaseButtonAttributes attributes = config.getAttributes();
            if (attributes != null) {
                buttonWithLoadingIndicator.setText(attributes.getText());
            }
            uiComponentHelper.d(new Function0() { // from class: aq.n5
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit g10;
                    g10 = com.withpersona.sdk2.inquiry.steps.ui.components.f.g(ButtonWithLoadingIndicator.this, styles);
                    return g10;
                }
            });
            return buttonWithLoadingIndicator;
        }
        ButtonWithLoadingIndicator buttonWithLoadingIndicator2 = new ButtonWithLoadingIndicator(uiComponentHelper.a(), h(config));
        BaseButtonAttributes attributes2 = config.getAttributes();
        if (attributes2 != null) {
            buttonWithLoadingIndicator2.setText(attributes2.getText());
        }
        return buttonWithLoadingIndicator2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(ButtonWithLoadingIndicator buttonWithLoadingIndicator, BaseButtonComponentStyle baseButtonComponentStyle) {
        fq.e.d(buttonWithLoadingIndicator, baseButtonComponentStyle);
        return Unit.f32464a;
    }

    private static final int h(Button button) {
        Button.ButtonType buttonType;
        int i10;
        BaseButtonAttributes attributes = button.getAttributes();
        if (attributes != null) {
            buttonType = attributes.getButtonType();
        } else {
            buttonType = null;
        }
        if (buttonType == null) {
            i10 = -1;
        } else {
            i10 = a.f19359a[buttonType.ordinal()];
        }
        if (i10 != -1) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return ep.a.f22453a;
                }
                throw new p();
            }
            return yg.b.f54112x;
        }
        return yg.b.f54112x;
    }

    public static final List i(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            k5 l10 = l((UiComponentConfig) it.next());
            if (l10 != null) {
                arrayList.add(l10);
            }
        }
        return arrayList;
    }

    public static final Map j(List list) {
        UiComponentConfig uiComponentConfig;
        Intrinsics.checkNotNullParameter(list, "<this>");
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        LinkedList linkedList = new LinkedList();
        linkedList.addAll(list);
        while (!linkedList.isEmpty() && (uiComponentConfig = (UiComponentConfig) linkedList.poll()) != null) {
            if (uiComponentConfig instanceof UiComponentContainerConfig) {
                linkedHashMap.put(uiComponentConfig.getName(), uiComponentConfig);
                List<UiComponentConfig> children = ((UiComponentContainerConfig) uiComponentConfig).getChildren();
                if (children == null) {
                    children = CollectionsKt.l();
                }
                linkedList.addAll(children);
            } else {
                linkedHashMap.put(uiComponentConfig.getName(), uiComponentConfig);
            }
        }
        return linkedHashMap;
    }

    public static final i4 k(RemoteImage remoteImage) {
        Intrinsics.checkNotNullParameter(remoteImage, "<this>");
        return new i4(remoteImage);
    }

    public static final k5 l(UiComponentConfig uiComponentConfig) {
        Intrinsics.checkNotNullParameter(uiComponentConfig, "<this>");
        if (uiComponentConfig instanceof Branding) {
            return new aq.e((Branding) uiComponentConfig);
        }
        if (uiComponentConfig instanceof Button) {
            Button button = (Button) uiComponentConfig;
            if (button instanceof ActionButton) {
                return new aq.a((ActionButton) uiComponentConfig);
            }
            if (button instanceof CancelButton) {
                return new i((CancelButton) uiComponentConfig);
            }
            if (button instanceof CombinedStepButton) {
                return new m((CombinedStepButton) uiComponentConfig);
            }
            if (button instanceof CompleteButton) {
                return new o((CompleteButton) uiComponentConfig);
            }
            if (button instanceof SubmitButton) {
                return new c5((SubmitButton) uiComponentConfig);
            }
            if (button instanceof VerifyPersonaButton) {
                return new q5((VerifyPersonaButton) uiComponentConfig);
            }
            throw new p();
        } else if (uiComponentConfig instanceof UiComponentContainerConfig) {
            UiComponentContainerConfig uiComponentContainerConfig = (UiComponentContainerConfig) uiComponentConfig;
            if (uiComponentContainerConfig instanceof ClickableStack) {
                return new ClickableStackComponent((ClickableStack) uiComponentConfig);
            }
            if (uiComponentContainerConfig instanceof Footer) {
                return new y((Footer) uiComponentConfig);
            }
            if (uiComponentContainerConfig instanceof HorizontalStack) {
                return new f0((HorizontalStack) uiComponentConfig);
            }
            throw new p();
        } else if (uiComponentConfig instanceof CombinedStepImagePreview) {
            return new i0((CombinedStepImagePreview) uiComponentConfig);
        } else {
            if (uiComponentConfig instanceof ESignature) {
                return new ESignatureComponent((ESignature) uiComponentConfig);
            }
            if (uiComponentConfig instanceof GovernmentIdNfcScan) {
                return new GovernmentIdNfcScanComponent((GovernmentIdNfcScan) uiComponentConfig);
            }
            if (uiComponentConfig instanceof InputAddress) {
                InputAddress inputAddress = (InputAddress) uiComponentConfig;
                return new InputAddressComponent(inputAddress, c(inputAddress));
            } else if (uiComponentConfig instanceof InputCheckbox) {
                return new InputCheckboxComponent((InputCheckbox) uiComponentConfig, false, 2, (DefaultConstructorMarker) null);
            } else {
                if (uiComponentConfig instanceof InputCheckboxGroup) {
                    return new InputCheckboxGroupComponent((InputCheckboxGroup) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputConfirmationCode) {
                    return new InputConfirmationCodeComponent((InputConfirmationCode) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputDate) {
                    return new InputDateComponent((InputDate) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputMaskedText) {
                    return new InputMaskedTextComponent((InputMaskedText) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputMultiSelect) {
                    return d.f19335w.a((InputMultiSelect) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputNumber) {
                    return new InputNumberComponent((InputNumber) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputPhoneNumber) {
                    return InputPhoneNumberComponent.f19270w.a((InputPhoneNumber) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputRadioGroup) {
                    return new InputRadioGroupComponent((InputRadioGroup) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputSelect) {
                    return e.f19347w.a((InputSelect) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputText) {
                    return new InputTextComponent((InputText) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputTextArea) {
                    return new InputTextAreaComponent((InputTextArea) uiComponentConfig);
                }
                if (uiComponentConfig instanceof LocalImage) {
                    return new k2((LocalImage) uiComponentConfig);
                }
                if (uiComponentConfig instanceof PrivacyPolicy) {
                    return new c4((PrivacyPolicy) uiComponentConfig);
                }
                if (uiComponentConfig instanceof QRCode) {
                    return new f4((QRCode) uiComponentConfig);
                }
                if (uiComponentConfig instanceof RemoteImage) {
                    return k((RemoteImage) uiComponentConfig);
                }
                if (uiComponentConfig instanceof Spacer) {
                    return new x4((Spacer) uiComponentConfig);
                }
                if (uiComponentConfig instanceof Text) {
                    return new e5((Text) uiComponentConfig);
                }
                if (uiComponentConfig instanceof Title) {
                    return new h5((Title) uiComponentConfig);
                }
                if (uiComponentConfig instanceof CreatePersonaSheet) {
                    return com.withpersona.sdk2.inquiry.steps.ui.components.a.f19303t.a((CreatePersonaSheet) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputCurrency) {
                    return new InputCurrencyComponent((InputCurrency) uiComponentConfig);
                }
                if (uiComponentConfig instanceof InputInternationalDb) {
                    return b.E.a((InputInternationalDb) uiComponentConfig);
                }
                if (Intrinsics.areEqual(uiComponentConfig, UnknownComponentConfig.INSTANCE)) {
                    return null;
                }
                throw new p();
            }
        }
    }

    public static final List m(List list, k5 old, k5 k5Var) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        Intrinsics.checkNotNullParameter(old, "old");
        Intrinsics.checkNotNullParameter(k5Var, "new");
        List<k5> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (k5 k5Var2 : list2) {
            if (k5Var2 instanceof l5) {
                if (!Intrinsics.areEqual(k5Var2, old)) {
                    l5 l5Var = (l5) k5Var2;
                    k5Var2 = l5Var.R0(m(l5Var.getChildren(), old, k5Var));
                    arrayList.add(k5Var2);
                }
                k5Var2 = k5Var;
                arrayList.add(k5Var2);
            } else {
                if (!Intrinsics.areEqual(k5Var2, old)) {
                    arrayList.add(k5Var2);
                }
                k5Var2 = k5Var;
                arrayList.add(k5Var2);
            }
        }
        return arrayList;
    }
}
