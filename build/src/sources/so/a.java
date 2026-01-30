package so;

import ao.c4;
import ao.g3;
import ao.j4;
import ao.z;
import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.internal.l;
import com.withpersona.sdk2.inquiry.network.dto.CheckInquiryResponse;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPositionKt;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CaptureOptionNativeMobile;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import com.withpersona.sdk2.inquiry.network.dto.selfie.PoseConfig;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.UiComponentConfig;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import ep.a1;
import ep.b0;
import ep.r0;
import ep.s0;
import ep.x5;
import ir.v;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import vn.b3;
import vn.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    private static final Map a(NextStep.GovernmentId.RequestPage requestPage) {
        return o0.m(v.a(new Pair(c4.e.f5836o, "descriptionFront"), requestPage.getDescriptionFront()), v.a(new Pair(c4.e.f5837p, "descriptionBack"), requestPage.getDescriptionBack()), v.a(new Pair(c4.e.f5839r, "descriptionPdf417"), requestPage.getDescriptionPdf417()), v.a(new Pair(c4.e.f5840s, "descriptionPassportSignature"), requestPage.getDescriptionPassportSignature()));
    }

    private static final Map b(NextStep.GovernmentId.ReviewUploadPage reviewUploadPage) {
        return o0.m(v.a(c4.e.f5836o, reviewUploadPage.getDescriptionFront()), v.a(c4.e.f5837p, reviewUploadPage.getDescriptionBack()), v.a(c4.e.f5839r, reviewUploadPage.getDescriptionPdf417()), v.a(c4.e.f5840s, reviewUploadPage.getDescriptionPassportSignature()));
    }

    private static final Map c(NextStep.GovernmentId.CapturePage capturePage) {
        return o0.m(v.a(new Pair(c4.e.f5836o, "scanFront"), capturePage.getScanFront()), v.a(new Pair(c4.e.f5837p, "scanBack"), capturePage.getScanBack()), v.a(new Pair(c4.e.f5839r, "scanPdf417"), capturePage.getScanPdf417()), v.a(new Pair(c4.e.f5840s, "scanSignature"), capturePage.getScanSignature()), v.a(new Pair(c4.e.f5838q, "scanFrontOrBack"), capturePage.getScanFrontOrBack()));
    }

    private static final Map d(NextStep.GovernmentId.RequestPage requestPage) {
        return o0.m(v.a(new Pair(c4.e.f5836o, "titleFront"), requestPage.getTitleFront()), v.a(new Pair(c4.e.f5837p, "titleBack"), requestPage.getTitleBack()), v.a(new Pair(c4.e.f5839r, "titlePdf417"), requestPage.getTitlePdf417()), v.a(new Pair(c4.e.f5840s, "titlePassportSignature"), requestPage.getTitlePassportSignature()));
    }

    private static final Map e(NextStep.GovernmentId.ReviewUploadPage reviewUploadPage) {
        return o0.m(v.a(c4.e.f5836o, reviewUploadPage.getTitleFront()), v.a(c4.e.f5837p, reviewUploadPage.getTitleBack()), v.a(c4.e.f5839r, reviewUploadPage.getTitlePdf417()), v.a(c4.e.f5840s, reviewUploadPage.getTitlePassportSignature()));
    }

    public static final g3.a.C0089a f(NextStep.GovernmentId.Localizations localizations, String countryCode, List list) {
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        String str7;
        String str8;
        Intrinsics.checkNotNullParameter(localizations, "<this>");
        Intrinsics.checkNotNullParameter(countryCode, "countryCode");
        String title = localizations.getSelectPage().getTitle();
        String prompt = localizations.getSelectPage().getPrompt();
        String choose = localizations.getSelectPage().getChoose();
        String disclaimer = localizations.getSelectPage().getDisclaimer();
        String str9 = "";
        if (disclaimer == null) {
            disclaimer = "";
        }
        j4 k10 = k(list, localizations.getCapturePage().getTitle(), "title", "capturePage");
        j4 m10 = m(list, "capturePage", c(localizations.getCapturePage()));
        String capturing = localizations.getCapturePage().getCapturing();
        j4 k11 = k(list, localizations.getCapturePage().getConfirmCapture(), "confirmCapture", "capturePage");
        String disclaimer2 = localizations.getCapturePage().getDisclaimer();
        if (disclaimer2 != null) {
            str9 = disclaimer2;
        }
        String buttonSubmit = localizations.getCheckPage().getButtonSubmit();
        String buttonRetake = localizations.getCheckPage().getButtonRetake();
        j4 k12 = k(list, localizations.getCheckPage().getTitleConfirmCapture(), "titleConfirmCapture", "checkPage");
        String title2 = localizations.getPendingPage().getTitle();
        String description = localizations.getPendingPage().getDescription();
        Map l10 = l(list, countryCode, localizations.getSelectPage().getIdClassToName());
        j4 m11 = m(list, "requestPage", d(localizations.getRequestPage()));
        j4 m12 = m(list, "requestPage", a(localizations.getRequestPage()));
        String liveUploadButtonText = localizations.getRequestPage().getLiveUploadButtonText();
        String choosePhotoButtonText = localizations.getRequestPage().getChoosePhotoButtonText();
        Map e10 = e(localizations.getReviewUploadPage());
        Map b10 = b(localizations.getReviewUploadPage());
        String confirmButtonText = localizations.getReviewUploadPage().getConfirmButtonText();
        String chooseAnotherButtonText = localizations.getReviewUploadPage().getChooseAnotherButtonText();
        String cameraPermissionsTitle = localizations.getPromptPage().getCameraPermissionsTitle();
        String cameraPermissionsPrompt = localizations.getPromptPage().getCameraPermissionsPrompt();
        String cameraPermissionsAllowButtonText = localizations.getPromptPage().getCameraPermissionsAllowButtonText();
        String cameraPermissionsCancelButtonText = localizations.getPromptPage().getCameraPermissionsCancelButtonText();
        String microphonePermissionsTitle = localizations.getPromptPage().getMicrophonePermissionsTitle();
        String microphonePermissionsPrompt = localizations.getPromptPage().getMicrophonePermissionsPrompt();
        String microphonePermissionsBtnContinueMobile = localizations.getPromptPage().getMicrophonePermissionsBtnContinueMobile();
        String microphonePermissionsBtnCancel = localizations.getPromptPage().getMicrophonePermissionsBtnCancel();
        String hintHoldStill = localizations.getCapturePage().getHintHoldStill();
        String hintLowLight = localizations.getCapturePage().getHintLowLight();
        String btnHelp = localizations.getCapturePage().getBtnHelp();
        String barcodeHelpModalTitle = localizations.getCapturePage().getBarcodeHelpModalTitle();
        String barcodeHelpModalPrompt = localizations.getCapturePage().getBarcodeHelpModalPrompt();
        String barcodeHelpModalHints = localizations.getCapturePage().getBarcodeHelpModalHints();
        String barcodeHelpModalContinueBtn = localizations.getCapturePage().getBarcodeHelpModalContinueBtn();
        String idFrontHelpModalTitle = localizations.getCapturePage().getIdFrontHelpModalTitle();
        String idFrontHelpModalPrompt = localizations.getCapturePage().getIdFrontHelpModalPrompt();
        String idFrontHelpModalHintsMobile = localizations.getCapturePage().getIdFrontHelpModalHintsMobile();
        String idFrontHelpModalContinueBtn = localizations.getCapturePage().getIdFrontHelpModalContinueBtn();
        String idBackHelpModalTitle = localizations.getCapturePage().getIdBackHelpModalTitle();
        String idBackHelpModalPrompt = localizations.getCapturePage().getIdBackHelpModalPrompt();
        String idBackHelpModalHintsMobile = localizations.getCapturePage().getIdBackHelpModalHintsMobile();
        String idBackHelpModalContinueBtn = localizations.getCapturePage().getIdBackHelpModalContinueBtn();
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage = localizations.getAutoClassificationPage();
        String str10 = null;
        if (autoClassificationPage != null) {
            str = autoClassificationPage.getUnableToClassifyDocumentTitle();
        } else {
            str = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage2 = localizations.getAutoClassificationPage();
        if (autoClassificationPage2 != null) {
            str2 = autoClassificationPage2.getUnableToClassifyDocumentContinueButtonText();
        } else {
            str2 = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage3 = localizations.getAutoClassificationPage();
        if (autoClassificationPage3 != null) {
            str3 = autoClassificationPage3.getIdClassRejectedTitle();
        } else {
            str3 = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage4 = localizations.getAutoClassificationPage();
        if (autoClassificationPage4 != null) {
            str4 = autoClassificationPage4.getIdClassRejectedContinueButtonText();
        } else {
            str4 = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage5 = localizations.getAutoClassificationPage();
        if (autoClassificationPage5 != null) {
            str5 = autoClassificationPage5.getCountryInputTitle();
        } else {
            str5 = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage6 = localizations.getAutoClassificationPage();
        if (autoClassificationPage6 != null) {
            str6 = autoClassificationPage6.getIdClassInputTitle();
        } else {
            str6 = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage7 = localizations.getAutoClassificationPage();
        if (autoClassificationPage7 != null) {
            str7 = autoClassificationPage7.getManualClassificationTitle();
        } else {
            str7 = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage8 = localizations.getAutoClassificationPage();
        if (autoClassificationPage8 != null) {
            str8 = autoClassificationPage8.getManualClassificationContinueButtonText();
        } else {
            str8 = null;
        }
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage9 = localizations.getAutoClassificationPage();
        if (autoClassificationPage9 != null) {
            str10 = autoClassificationPage9.getAutoClassificationCaptureTipText();
        }
        return new g3.a.C0089a(title, prompt, choose, disclaimer, k10, m10, capturing, k11, str9, buttonSubmit, buttonRetake, k12, title2, description, l10, m11, m12, liveUploadButtonText, choosePhotoButtonText, e10, b10, confirmButtonText, chooseAnotherButtonText, cameraPermissionsTitle, cameraPermissionsPrompt, cameraPermissionsAllowButtonText, cameraPermissionsCancelButtonText, microphonePermissionsTitle, microphonePermissionsPrompt, microphonePermissionsBtnContinueMobile, microphonePermissionsBtnCancel, hintHoldStill, hintLowLight, btnHelp, barcodeHelpModalTitle, barcodeHelpModalPrompt, barcodeHelpModalHints, barcodeHelpModalContinueBtn, idFrontHelpModalTitle, idFrontHelpModalPrompt, idFrontHelpModalHintsMobile, idFrontHelpModalContinueBtn, idBackHelpModalTitle, idBackHelpModalPrompt, idBackHelpModalHintsMobile, idBackHelpModalContinueBtn, str, str2, str3, str4, str5, str6, str7, str8, str10, list);
    }

    public static final x5.b.a g(NextStep.Selfie.Localizations localizations, boolean z10) {
        String prompt;
        String str;
        String str2;
        String str3;
        String str4;
        String str5;
        String str6;
        Intrinsics.checkNotNullParameter(localizations, "<this>");
        String title = localizations.getPromptPage().getTitle();
        if (z10) {
            prompt = localizations.getPromptPage().getPromptCenter();
        } else {
            prompt = localizations.getPromptPage().getPrompt();
        }
        String str7 = prompt;
        String disclosure = localizations.getPromptPage().getDisclosure();
        String buttonSubmit = localizations.getPromptPage().getButtonSubmit();
        String title2 = localizations.getCapturePage().getTitle();
        if (title2 == null) {
            title2 = "";
        }
        String str8 = title2;
        String selfieHintTakePhoto = localizations.getCapturePage().getSelfieHintTakePhoto();
        String selfieHintCenterFace = localizations.getCapturePage().getSelfieHintCenterFace();
        String selfieHintFaceTooClose = localizations.getCapturePage().getSelfieHintFaceTooClose();
        String selfieHintFaceTooFar = localizations.getCapturePage().getSelfieHintFaceTooFar();
        String selfieHintFaceIncomplete = localizations.getCapturePage().getSelfieHintFaceIncomplete();
        String selfieHintMultipleFaces = localizations.getCapturePage().getSelfieHintMultipleFaces();
        String selfieHintPoseNotCenter = localizations.getCapturePage().getSelfieHintPoseNotCenter();
        String selfieHintLookLeft = localizations.getCapturePage().getSelfieHintLookLeft();
        String selfieHintLookRight = localizations.getCapturePage().getSelfieHintLookRight();
        String selfieHintHoldStill = localizations.getCapturePage().getSelfieHintHoldStill();
        String title3 = localizations.getPendingPage().getTitle();
        String description = localizations.getPendingPage().getDescription();
        NextStep.Selfie.CheckPage checkPage = localizations.getCheckPage();
        String str9 = null;
        if (checkPage != null) {
            str = checkPage.getTitle();
        } else {
            str = null;
        }
        NextStep.Selfie.CheckPage checkPage2 = localizations.getCheckPage();
        if (checkPage2 != null) {
            str2 = checkPage2.getDescription();
        } else {
            str2 = null;
        }
        NextStep.Selfie.CheckPage checkPage3 = localizations.getCheckPage();
        if (checkPage3 != null) {
            str3 = checkPage3.getSelfieLabelFront();
        } else {
            str3 = null;
        }
        NextStep.Selfie.CheckPage checkPage4 = localizations.getCheckPage();
        if (checkPage4 != null) {
            str4 = checkPage4.getSelfieLabelLeft();
        } else {
            str4 = null;
        }
        NextStep.Selfie.CheckPage checkPage5 = localizations.getCheckPage();
        if (checkPage5 != null) {
            str5 = checkPage5.getSelfieLabelRight();
        } else {
            str5 = null;
        }
        NextStep.Selfie.CheckPage checkPage6 = localizations.getCheckPage();
        if (checkPage6 != null) {
            str6 = checkPage6.getBtnSubmit();
        } else {
            str6 = null;
        }
        NextStep.Selfie.CheckPage checkPage7 = localizations.getCheckPage();
        if (checkPage7 != null) {
            str9 = checkPage7.getBtnRetake();
        }
        return new x5.b.a(title, str7, disclosure, buttonSubmit, str8, selfieHintTakePhoto, selfieHintCenterFace, selfieHintFaceTooClose, selfieHintFaceTooFar, selfieHintMultipleFaces, selfieHintFaceIncomplete, selfieHintPoseNotCenter, selfieHintLookLeft, selfieHintLookRight, selfieHintHoldStill, title3, description, str, str2, str3, str4, str5, str6, str9, localizations.getCapturePage().getAutoCaptureOn(), localizations.getCapturePage().getCaptureSuccess(), localizations.getCapturePage().getSelfieHintCenterFaceDescription(), localizations.getCapturePage().getSelfieHintLookLeftDescription(), localizations.getCapturePage().getSelfieHintLookRightDescription(), localizations.getCapturePage().getCameraLoadingTitle());
    }

    public static final vn.l h(NextStep.Document.Pages pages, NextStep.Document.Localizations localizations, StepStyles.DocumentStepStyle documentStepStyle) {
        StepStyles.DocumentStepStyle documentStepStyle2;
        u a10;
        b3 a11;
        NextStep.Document.Pages.DocumentPages document;
        NextStep.Document.Pages.UploadOptionsDialog uploadOptionsDialog;
        NextStep.Document.Pages.DocumentPages document2;
        NextStep.Document.Pages.DocumentStartPage prompt;
        Intrinsics.checkNotNullParameter(localizations, "localizations");
        if (pages != null && (document2 = pages.getDocument()) != null && (prompt = document2.getPrompt()) != null && (a10 = i(prompt)) != null) {
            documentStepStyle2 = documentStepStyle;
        } else {
            documentStepStyle2 = documentStepStyle;
            a10 = u.f51665s.a(localizations.getPromptPage().getTitle(), localizations.getPromptPage().getPrompt(), localizations.getPromptPage().getBtnUpload(), localizations.getPromptPage().getBtnCapture(), documentStepStyle2);
        }
        if (pages == null || (document = pages.getDocument()) == null || (uploadOptionsDialog = document.getUploadOptionsDialog()) == null || (a11 = j(uploadOptionsDialog)) == null) {
            a11 = b3.f51368s.a(localizations.getPromptPage().getCaptureOptionsDialogTitle(), localizations.getPromptPage().getBtnCapture(), localizations.getPromptPage().getBtnUpload(), documentStepStyle2);
        }
        return new vn.l(a10, a11);
    }

    private static final u i(NextStep.Document.Pages.DocumentStartPage documentStartPage) {
        List list;
        String str;
        String str2;
        String str3;
        List<UiComponentConfig> components = documentStartPage.getUiStep().getConfig().getComponents();
        String str4 = null;
        if (components != null) {
            list = com.withpersona.sdk2.inquiry.steps.ui.components.f.i(components);
        } else {
            list = null;
        }
        List<UiComponentConfig> components2 = documentStartPage.getUiStep().getConfig().getComponents();
        if (components2 == null) {
            components2 = CollectionsKt.l();
        }
        List<UiComponentConfig> list2 = components2;
        StepStyles.UiStepStyle styles = documentStartPage.getUiStep().getStyles();
        NextStep.Document.Pages.DocumentStartPage.ComponentNameMapping componentNameMapping = documentStartPage.getComponentNameMapping();
        if (componentNameMapping != null) {
            str = componentNameMapping.getButtonPhotoLibrary();
        } else {
            str = null;
        }
        NextStep.Document.Pages.DocumentStartPage.ComponentNameMapping componentNameMapping2 = documentStartPage.getComponentNameMapping();
        if (componentNameMapping2 != null) {
            str2 = componentNameMapping2.getButtonFilePicker();
        } else {
            str2 = null;
        }
        NextStep.Document.Pages.DocumentStartPage.ComponentNameMapping componentNameMapping3 = documentStartPage.getComponentNameMapping();
        if (componentNameMapping3 != null) {
            str3 = componentNameMapping3.getButtonCamera();
        } else {
            str3 = null;
        }
        NextStep.Document.Pages.DocumentStartPage.ComponentNameMapping componentNameMapping4 = documentStartPage.getComponentNameMapping();
        if (componentNameMapping4 != null) {
            str4 = componentNameMapping4.getButtonUploadOptions();
        }
        return new u(list, list2, styles, str2, str, str3, str4);
    }

    private static final b3 j(NextStep.Document.Pages.UploadOptionsDialog uploadOptionsDialog) {
        List list;
        String str;
        String str2;
        String str3;
        List<UiComponentConfig> components = uploadOptionsDialog.getUiStep().getConfig().getComponents();
        String str4 = null;
        if (components != null) {
            list = com.withpersona.sdk2.inquiry.steps.ui.components.f.i(components);
        } else {
            list = null;
        }
        List<UiComponentConfig> components2 = uploadOptionsDialog.getUiStep().getConfig().getComponents();
        if (components2 == null) {
            components2 = CollectionsKt.l();
        }
        List<UiComponentConfig> list2 = components2;
        StepStyles.UiStepStyle styles = uploadOptionsDialog.getUiStep().getStyles();
        NextStep.Document.Pages.UploadOptionsDialog.ComponentNameMapping componentNameMapping = uploadOptionsDialog.getComponentNameMapping();
        if (componentNameMapping != null) {
            str = componentNameMapping.getButtonPhotoLibrary();
        } else {
            str = null;
        }
        NextStep.Document.Pages.UploadOptionsDialog.ComponentNameMapping componentNameMapping2 = uploadOptionsDialog.getComponentNameMapping();
        if (componentNameMapping2 != null) {
            str2 = componentNameMapping2.getButtonFilePicker();
        } else {
            str2 = null;
        }
        NextStep.Document.Pages.UploadOptionsDialog.ComponentNameMapping componentNameMapping3 = uploadOptionsDialog.getComponentNameMapping();
        if (componentNameMapping3 != null) {
            str3 = componentNameMapping3.getButtonCamera();
        } else {
            str3 = null;
        }
        NextStep.Document.Pages.UploadOptionsDialog.ComponentNameMapping componentNameMapping4 = uploadOptionsDialog.getComponentNameMapping();
        if (componentNameMapping4 != null) {
            str4 = componentNameMapping4.getButtonCancel();
        }
        return new b3(list, list2, styles, str2, str, str3, str4);
    }

    private static final j4 k(List list, String str, String str2, String str3) {
        if (str == null) {
            str = "";
        }
        EnumEntries<c4.e> f10 = c4.e.f();
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(f10, 10)), 16));
        for (c4.e eVar : f10) {
            Pair a10 = v.a(new Pair(eVar, str2), str);
            linkedHashMap.put(a10.c(), a10.d());
        }
        return m(list, str3, linkedHashMap);
    }

    private static final Map l(List list, String str, Map map) {
        ArrayList arrayList;
        Object obj;
        String text;
        if (list != null) {
            arrayList = new ArrayList();
            for (Object obj2 : list) {
                if (Intrinsics.areEqual(((NextStep.GovernmentId.LocalizationOverride) obj2).getPage(), "selectPage")) {
                    arrayList.add(obj2);
                }
            }
        } else {
            arrayList = null;
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap(o0.e(map.size()));
        for (Map.Entry entry : map.entrySet()) {
            Object key = entry.getKey();
            String str2 = (String) entry.getKey();
            String str3 = (String) entry.getValue();
            if (arrayList != null) {
                Iterator it = arrayList.iterator();
                while (true) {
                    if (it.hasNext()) {
                        obj = it.next();
                        NextStep.GovernmentId.LocalizationOverride localizationOverride = (NextStep.GovernmentId.LocalizationOverride) obj;
                        if (Intrinsics.areEqual(localizationOverride.getCountryCode(), str) && (Intrinsics.areEqual(localizationOverride.getIdClass(), str2) || localizationOverride.getIdClass() == null)) {
                            if (Intrinsics.areEqual(localizationOverride.getKey(), str2)) {
                                break;
                            }
                        }
                    } else {
                        obj = null;
                        break;
                    }
                }
                NextStep.GovernmentId.LocalizationOverride localizationOverride2 = (NextStep.GovernmentId.LocalizationOverride) obj;
                if (localizationOverride2 != null && (text = localizationOverride2.getText()) != null) {
                    str3 = text;
                }
            }
            linkedHashMap.put(key, str3);
        }
        return linkedHashMap;
    }

    private static final j4 m(List list, String str, Map map) {
        ArrayList arrayList;
        ArrayList<NextStep.GovernmentId.LocalizationOverride> arrayList2;
        if (list != null) {
            arrayList = new ArrayList();
            for (Object obj : list) {
                if (Intrinsics.areEqual(((NextStep.GovernmentId.LocalizationOverride) obj).getPage(), str)) {
                    arrayList.add(obj);
                }
            }
        } else {
            arrayList = null;
        }
        j4.a aVar = new j4.a();
        for (Map.Entry entry : map.entrySet()) {
            Pair pair = (Pair) entry.getKey();
            String str2 = (String) entry.getValue();
            c4.e eVar = (c4.e) pair.c();
            String str3 = (String) pair.d();
            if (arrayList != null) {
                arrayList2 = new ArrayList();
                for (Object obj2 : arrayList) {
                    NextStep.GovernmentId.LocalizationOverride localizationOverride = (NextStep.GovernmentId.LocalizationOverride) obj2;
                    if (Intrinsics.areEqual(localizationOverride.getSide(), eVar.g()) || localizationOverride.getSide() == null) {
                        if (Intrinsics.areEqual(localizationOverride.getKey(), str3)) {
                            arrayList2.add(obj2);
                        }
                    }
                }
            } else {
                arrayList2 = null;
            }
            aVar.b(null, null, eVar, str2);
            if (arrayList2 != null) {
                for (NextStep.GovernmentId.LocalizationOverride localizationOverride2 : arrayList2) {
                    aVar.b(localizationOverride2.getCountryCode(), localizationOverride2.getIdClass(), eVar, localizationOverride2.getText());
                }
            }
        }
        return aVar.a();
    }

    public static final com.withpersona.sdk2.inquiry.internal.l n(CheckInquiryResponse checkInquiryResponse, String sessionToken, qp.g inquirySessionConfig) {
        Intrinsics.checkNotNullParameter(checkInquiryResponse, "<this>");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
        String id2 = checkInquiryResponse.getData().getId();
        NextStep nextStep = checkInquiryResponse.getData().getAttributes().getNextStep();
        if (nextStep instanceof NextStep.Ui) {
            return s((NextStep.Ui) nextStep, sessionToken, id2, checkInquiryResponse.getData().getAttributes().getStatus(), checkInquiryResponse.getData().getAttributes().getFields(), inquirySessionConfig);
        }
        if (nextStep instanceof NextStep.GovernmentId) {
            return q((NextStep.GovernmentId) nextStep, sessionToken, id2, checkInquiryResponse.getData().getAttributes().getSelectedCountryCode());
        }
        if (nextStep instanceof NextStep.Selfie) {
            return r((NextStep.Selfie) nextStep, sessionToken, id2);
        }
        if (nextStep instanceof NextStep.Document) {
            return p((NextStep.Document) nextStep, sessionToken, id2);
        }
        if (nextStep instanceof NextStep.Complete) {
            return o((NextStep.Complete) nextStep, sessionToken, id2, checkInquiryResponse.getData().getAttributes().getStatus(), checkInquiryResponse.getData().getAttributes().getFields());
        }
        if (Intrinsics.areEqual(nextStep, NextStep.Unknown.INSTANCE)) {
            String name = nextStep.getName();
            throw new IllegalArgumentException("Unknown type for step " + name);
        }
        throw new ir.p();
    }

    public static final com.withpersona.sdk2.inquiry.internal.l o(NextStep.Complete complete, String sessionToken, String inquiryId, String str, Map map) {
        Intrinsics.checkNotNullParameter(complete, "<this>");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        if (str == null) {
            str = "";
        }
        String str2 = str;
        if (map == null) {
            map = o0.i();
        }
        return new l.a(inquiryId, sessionToken, null, str2, map, 4, null);
    }

    public static final com.withpersona.sdk2.inquiry.internal.l p(NextStep.Document document, String sessionToken, String inquiryId) {
        Intrinsics.checkNotNullParameter(document, "<this>");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        return new l.d(inquiryId, sessionToken, null, document.getStyles(), document.getConfig().getLocalizations().getCancelDialog(), document, document.getName(), h(document.getConfig().getPages(), document.getConfig().getLocalizations(), document.getStyles()), document.getConfig().getAssets(), document.getName(), 4, null);
    }

    public static final com.withpersona.sdk2.inquiry.internal.l q(NextStep.GovernmentId governmentId, String sessionToken, String inquiryId, String str) {
        long j10;
        boolean z10;
        boolean z11;
        int i10;
        Intrinsics.checkNotNullParameter(governmentId, "<this>");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Long nativeMobileCameraManualCaptureDelayMs = governmentId.getConfig().getNativeMobileCameraManualCaptureDelayMs();
        if (nativeMobileCameraManualCaptureDelayMs != null) {
            j10 = nativeMobileCameraManualCaptureDelayMs.longValue();
        } else {
            j10 = 8000;
        }
        List<Id> idclasses = governmentId.getConfig().getIdclasses();
        if (idclasses == null) {
            idclasses = CollectionsKt.l();
        }
        List<Id> list = idclasses;
        String name = governmentId.getName();
        String name2 = governmentId.getName();
        Boolean backStepEnabled = governmentId.getConfig().getBackStepEnabled();
        boolean z12 = false;
        if (backStepEnabled != null) {
            z10 = backStepEnabled.booleanValue();
        } else {
            z10 = false;
        }
        Boolean cancelButtonEnabled = governmentId.getConfig().getCancelButtonEnabled();
        boolean z13 = true;
        if (cancelButtonEnabled != null) {
            z11 = cancelButtonEnabled.booleanValue();
        } else {
            z11 = true;
        }
        NextStep.GovernmentId.Localizations localizations = governmentId.getConfig().getLocalizations();
        List<NextStep.GovernmentId.LocalizationOverride> localizationOverrides = governmentId.getConfig().getLocalizationOverrides();
        List<CaptureOptionNativeMobile> enabledCaptureOptionsNativeMobile = governmentId.getConfig().getEnabledCaptureOptionsNativeMobile();
        if (enabledCaptureOptionsNativeMobile == null) {
            enabledCaptureOptionsNativeMobile = CollectionsKt.e(CaptureOptionNativeMobile.MOBILE_CAMERA);
        }
        List<CaptureOptionNativeMobile> list2 = enabledCaptureOptionsNativeMobile;
        StepStyles.GovernmentIdStepStyle styles = governmentId.getStyles();
        Integer imageCaptureCount = governmentId.getConfig().getImageCaptureCount();
        if (imageCaptureCount != null) {
            i10 = imageCaptureCount.intValue();
        } else {
            i10 = 3;
        }
        String fieldKeyDocument = governmentId.getConfig().getFieldKeyDocument();
        String fieldKeyIdclass = governmentId.getConfig().getFieldKeyIdclass();
        NextStep.CancelDialog cancelDialog = governmentId.getConfig().getLocalizations().getCancelDialog();
        Boolean shouldSkipReviewScreen = governmentId.getConfig().getShouldSkipReviewScreen();
        if (shouldSkipReviewScreen != null) {
            z12 = shouldSkipReviewScreen.booleanValue();
        }
        boolean z14 = z12;
        List<NextStep.GovernmentId.CaptureFileType> enabledCaptureFileTypes = governmentId.getConfig().getEnabledCaptureFileTypes();
        if (enabledCaptureFileTypes == null) {
            enabledCaptureFileTypes = CollectionsKt.l();
        }
        List<NextStep.GovernmentId.CaptureFileType> list3 = enabledCaptureFileTypes;
        List<NextStep.GovernmentId.VideoCaptureMethod> videoCaptureMethods = governmentId.getConfig().getVideoCaptureMethods();
        if (videoCaptureMethods == null) {
            videoCaptureMethods = CollectionsKt.l();
        }
        List<NextStep.GovernmentId.VideoCaptureMethod> list4 = videoCaptureMethods;
        String videoSessionJwt = governmentId.getConfig().getVideoSessionJwt();
        NextStep.GovernmentId.AssetConfig assets = governmentId.getConfig().getAssets();
        bo.a i11 = z.i(governmentId.getConfig().getAutoClassificationConfig(), j10);
        StyleElements.Axis reviewCaptureButtonsAxis = governmentId.getConfig().getReviewCaptureButtonsAxis();
        if (reviewCaptureButtonsAxis == null) {
            reviewCaptureButtonsAxis = StyleElements.Axis.HORIZONTAL;
        }
        StyleElements.Axis axis = reviewCaptureButtonsAxis;
        PendingPageTextPosition pendingPageTextVerticalPosition = governmentId.getConfig().getPendingPageTextVerticalPosition();
        if (pendingPageTextVerticalPosition == null) {
            pendingPageTextVerticalPosition = PendingPageTextPositionKt.getDEFAULT_PROCESSING_TEXT_POSITION();
        }
        PendingPageTextPosition pendingPageTextPosition = pendingPageTextVerticalPosition;
        Boolean audioEnabled = governmentId.getConfig().getAudioEnabled();
        if (audioEnabled != null) {
            z13 = audioEnabled.booleanValue();
        }
        return new l.f(inquiryId, sessionToken, null, styles, cancelDialog, str, list, name, name2, z10, z11, localizations, localizationOverrides, list2, i10, j10, fieldKeyDocument, fieldKeyIdclass, z14, list3, list4, videoSessionJwt, assets, i11, axis, pendingPageTextPosition, z13, null, 4, null);
    }

    public static final com.withpersona.sdk2.inquiry.internal.l r(NextStep.Selfie selfie, String sessionToken, String inquiryId) {
        boolean z10;
        boolean z11;
        b0 b0Var;
        Integer designVersion;
        Intrinsics.checkNotNullParameter(selfie, "<this>");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        NextStep.Selfie.CaptureMethod selfieType = selfie.getConfig().getSelfieType();
        String name = selfie.getName();
        String name2 = selfie.getName();
        Boolean backStepEnabled = selfie.getConfig().getBackStepEnabled();
        boolean z12 = false;
        if (backStepEnabled != null) {
            z10 = backStepEnabled.booleanValue();
        } else {
            z10 = false;
        }
        Boolean cancelButtonEnabled = selfie.getConfig().getCancelButtonEnabled();
        if (cancelButtonEnabled != null) {
            z11 = cancelButtonEnabled.booleanValue();
        } else {
            z11 = true;
        }
        String fieldKeySelfie = selfie.getConfig().getFieldKeySelfie();
        boolean requireStrictSelfieCapture = selfie.getConfig().getRequireStrictSelfieCapture();
        Boolean skipPromptPage = selfie.getConfig().getSkipPromptPage();
        if (skipPromptPage != null) {
            z12 = skipPromptPage.booleanValue();
        }
        boolean z13 = z12;
        NextStep.Selfie.Localizations localizations = selfie.getConfig().getLocalizations();
        boolean z14 = true;
        StepStyles.SelfieStepStyle styles = selfie.getStyles();
        NextStep.CancelDialog cancelDialog = selfie.getConfig().getLocalizations().getCancelDialog();
        List<NextStep.Selfie.CaptureFileType> enabledCaptureFileTypes = selfie.getConfig().getEnabledCaptureFileTypes();
        if (enabledCaptureFileTypes == null) {
            enabledCaptureFileTypes = CollectionsKt.l();
        }
        List<NextStep.Selfie.CaptureFileType> list = enabledCaptureFileTypes;
        List<NextStep.Selfie.VideoCaptureMethod> videoCaptureMethods = selfie.getConfig().getVideoCaptureMethods();
        if (videoCaptureMethods == null) {
            videoCaptureMethods = CollectionsKt.l();
        }
        List<NextStep.Selfie.VideoCaptureMethod> list2 = videoCaptureMethods;
        NextStep.Selfie.AssetConfig assets = selfie.getConfig().getAssets();
        String videoSessionJwt = selfie.getConfig().getVideoSessionJwt();
        List<NextStep.Selfie.SelfiePose> orderedPoses = selfie.getConfig().getOrderedPoses();
        PendingPageTextPosition pendingPageTextVerticalPosition = selfie.getConfig().getPendingPageTextVerticalPosition();
        if (pendingPageTextVerticalPosition == null) {
            pendingPageTextVerticalPosition = PendingPageTextPositionKt.getDEFAULT_PROCESSING_TEXT_POSITION();
        }
        PendingPageTextPosition pendingPageTextPosition = pendingPageTextVerticalPosition;
        Boolean audioEnabled = selfie.getConfig().getAudioEnabled();
        if (audioEnabled != null) {
            z14 = audioEnabled.booleanValue();
        }
        boolean z15 = z14;
        s0 u10 = u(selfie.getConfig().getPoseConfigs());
        if (selfie.getConfig().getDesignVersion() != null && ((designVersion = selfie.getConfig().getDesignVersion()) == null || designVersion.intValue() != 0)) {
            b0Var = b0.f23031e;
        } else {
            b0Var = b0.f23030d;
        }
        return new l.h(inquiryId, sessionToken, null, styles, cancelDialog, selfieType, name, name2, z10, z11, fieldKeySelfie, requireStrictSelfieCapture, z13, localizations, list, list2, assets, videoSessionJwt, orderedPoses, pendingPageTextPosition, z15, u10, b0Var, 4, null);
    }

    public static final com.withpersona.sdk2.inquiry.internal.l s(NextStep.Ui ui2, String sessionToken, String inquiryId, String str, Map map, qp.g inquirySessionConfig) {
        String str2;
        boolean z10;
        boolean z11;
        Map map2;
        NextStep.CancelDialog cancelDialog;
        Intrinsics.checkNotNullParameter(ui2, "<this>");
        Intrinsics.checkNotNullParameter(sessionToken, "sessionToken");
        Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
        Intrinsics.checkNotNullParameter(inquirySessionConfig, "inquirySessionConfig");
        if (str == null) {
            str2 = "";
        } else {
            str2 = str;
        }
        String name = ui2.getName();
        List<UiComponentConfig> components = ui2.getConfig().getComponents();
        if (components == null) {
            components = CollectionsKt.l();
        }
        List<UiComponentConfig> list = components;
        Boolean backStepEnabled = ui2.getConfig().getBackStepEnabled();
        boolean z12 = false;
        if (backStepEnabled != null) {
            z10 = backStepEnabled.booleanValue();
        } else {
            z10 = false;
        }
        Boolean cancelButtonEnabled = ui2.getConfig().getCancelButtonEnabled();
        if (cancelButtonEnabled != null) {
            z11 = cancelButtonEnabled.booleanValue();
        } else {
            z11 = true;
        }
        boolean z13 = z11;
        Boolean terminal = ui2.getConfig().getTerminal();
        if (terminal != null) {
            z12 = terminal.booleanValue();
        }
        boolean z14 = z12;
        if (map == null) {
            map2 = o0.i();
        } else {
            map2 = map;
        }
        StepStyles.UiStepStyle styles = ui2.getStyles();
        String uuid = UUID.randomUUID().toString();
        Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
        NextStep.Ui.Localizations localizations = ui2.getConfig().getLocalizations();
        if (localizations != null) {
            cancelDialog = localizations.getCancelDialog();
        } else {
            cancelDialog = null;
        }
        return new l.j(inquiryId, sessionToken, null, styles, cancelDialog, ui2.getConfig().getLocalizations(), str2, name, list, z10, z13, z14, map2, uuid, ui2.getConfig().getServerComponentErrors(), null, inquirySessionConfig, false, 32772, null);
    }

    private static final r0 t(PoseConfig poseConfig) {
        boolean b10;
        boolean e10;
        long d10;
        boolean c10;
        r0 a10 = r0.f23359p.a();
        Boolean allowReview = poseConfig.getAllowReview();
        if (allowReview != null) {
            b10 = allowReview.booleanValue();
        } else {
            b10 = a10.b();
        }
        Boolean manualCaptureEnabled = poseConfig.getManualCaptureEnabled();
        if (manualCaptureEnabled != null) {
            e10 = manualCaptureEnabled.booleanValue();
        } else {
            e10 = a10.e();
        }
        Long manualCaptureDelayMs = poseConfig.getManualCaptureDelayMs();
        if (manualCaptureDelayMs != null) {
            d10 = manualCaptureDelayMs.longValue();
        } else {
            d10 = a10.d();
        }
        Boolean autoCaptureEnabled = poseConfig.getAutoCaptureEnabled();
        if (autoCaptureEnabled != null) {
            c10 = autoCaptureEnabled.booleanValue();
        } else {
            c10 = a10.c();
        }
        return new r0(b10, e10, d10, c10);
    }

    private static final s0 u(List list) {
        a1.b v10;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        if (list == null) {
            list = CollectionsKt.l();
        }
        for (PoseConfig poseConfig : list) {
            String pose = poseConfig.getPose();
            if (pose != null && (v10 = v(pose)) != null) {
                linkedHashMap.put(v10, t(poseConfig));
            }
        }
        return new s0(linkedHashMap);
    }

    private static final a1.b v(String str) {
        int hashCode = str.hashCode();
        if (hashCode != -1364013995) {
            if (hashCode != 3317767) {
                if (hashCode == 108511772 && str.equals(ViewProps.RIGHT)) {
                    return a1.b.f23014i;
                }
                return null;
            } else if (str.equals(ViewProps.LEFT)) {
                return a1.b.f23013e;
            } else {
                return null;
            }
        } else if (!str.equals("center")) {
            return null;
        } else {
            return a1.b.f23012d;
        }
    }
}
