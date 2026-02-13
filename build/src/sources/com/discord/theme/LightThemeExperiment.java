package com.discord.theme;

import android.content.res.Resources;
import as.l;
import com.discord.theme.LightThemeExperiment;
import com.discord.theme.utils.ColorUtilsKt;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000!\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0003\b×\u0001\b\u0000\u0018\u00002\u00020\u0001B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\u0010\u0004\u001a\u00060\u0005R\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007R\u001b\u0010\b\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\f\u0010\r\u001a\u0004\b\n\u0010\u000bR\u001b\u0010\u000e\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0010\u0010\r\u001a\u0004\b\u000f\u0010\u000bR\u001b\u0010\u0011\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0013\u0010\r\u001a\u0004\b\u0012\u0010\u000bR\u001b\u0010\u0014\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0016\u0010\r\u001a\u0004\b\u0015\u0010\u000bR\u001b\u0010\u0017\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0019\u0010\r\u001a\u0004\b\u0018\u0010\u000bR\u001b\u0010\u001a\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u001c\u0010\r\u001a\u0004\b\u001b\u0010\u000bR\u001b\u0010\u001d\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u001f\u0010\r\u001a\u0004\b\u001e\u0010\u000bR\u001b\u0010 \u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\"\u0010\r\u001a\u0004\b!\u0010\u000bR\u001b\u0010#\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b%\u0010\r\u001a\u0004\b$\u0010\u000bR\u001b\u0010&\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b(\u0010\r\u001a\u0004\b'\u0010\u000bR\u001b\u0010)\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b+\u0010\r\u001a\u0004\b*\u0010\u000bR\u001b\u0010,\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b.\u0010\r\u001a\u0004\b-\u0010\u000bR\u001b\u0010/\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b1\u0010\r\u001a\u0004\b0\u0010\u000bR\u001b\u00102\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b4\u0010\r\u001a\u0004\b3\u0010\u000bR\u001b\u00105\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b7\u0010\r\u001a\u0004\b6\u0010\u000bR\u001b\u00108\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b:\u0010\r\u001a\u0004\b9\u0010\u000bR\u001b\u0010;\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b=\u0010\r\u001a\u0004\b<\u0010\u000bR\u001b\u0010>\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b@\u0010\r\u001a\u0004\b?\u0010\u000bR\u001b\u0010A\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bC\u0010\r\u001a\u0004\bB\u0010\u000bR\u001b\u0010D\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bF\u0010\r\u001a\u0004\bE\u0010\u000bR\u001b\u0010G\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bI\u0010\r\u001a\u0004\bH\u0010\u000bR\u001b\u0010J\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bL\u0010\r\u001a\u0004\bK\u0010\u000bR\u001b\u0010M\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bO\u0010\r\u001a\u0004\bN\u0010\u000bR\u001b\u0010P\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bR\u0010\r\u001a\u0004\bQ\u0010\u000bR\u001b\u0010S\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bU\u0010\r\u001a\u0004\bT\u0010\u000bR\u001b\u0010V\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bX\u0010\r\u001a\u0004\bW\u0010\u000bR\u001b\u0010Y\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b[\u0010\r\u001a\u0004\bZ\u0010\u000bR\u001b\u0010\\\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b^\u0010\r\u001a\u0004\b]\u0010\u000bR\u001b\u0010_\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\ba\u0010\r\u001a\u0004\b`\u0010\u000bR\u001b\u0010b\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bd\u0010\r\u001a\u0004\bc\u0010\u000bR\u001b\u0010e\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bg\u0010\r\u001a\u0004\bf\u0010\u000bR\u001b\u0010h\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bj\u0010\r\u001a\u0004\bi\u0010\u000bR\u001b\u0010k\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bm\u0010\r\u001a\u0004\bl\u0010\u000bR\u001b\u0010n\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bp\u0010\r\u001a\u0004\bo\u0010\u000bR\u001b\u0010q\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bs\u0010\r\u001a\u0004\br\u0010\u000bR\u001b\u0010t\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bv\u0010\r\u001a\u0004\bu\u0010\u000bR\u001b\u0010w\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\by\u0010\r\u001a\u0004\bx\u0010\u000bR\u001b\u0010z\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b|\u0010\r\u001a\u0004\b{\u0010\u000bR\u001b\u0010}\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u007f\u0010\r\u001a\u0004\b~\u0010\u000bR\u001e\u0010\u0080\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0082\u0001\u0010\r\u001a\u0005\b\u0081\u0001\u0010\u000bR\u001e\u0010\u0083\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0085\u0001\u0010\r\u001a\u0005\b\u0084\u0001\u0010\u000bR\u001e\u0010\u0086\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0088\u0001\u0010\r\u001a\u0005\b\u0087\u0001\u0010\u000bR\u001e\u0010\u0089\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008b\u0001\u0010\r\u001a\u0005\b\u008a\u0001\u0010\u000bR\u001e\u0010\u008c\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008e\u0001\u0010\r\u001a\u0005\b\u008d\u0001\u0010\u000bR\u001e\u0010\u008f\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0091\u0001\u0010\r\u001a\u0005\b\u0090\u0001\u0010\u000bR\u001e\u0010\u0092\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0094\u0001\u0010\r\u001a\u0005\b\u0093\u0001\u0010\u000bR\u001e\u0010\u0095\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0097\u0001\u0010\r\u001a\u0005\b\u0096\u0001\u0010\u000bR\u001e\u0010\u0098\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009a\u0001\u0010\r\u001a\u0005\b\u0099\u0001\u0010\u000bR\u001e\u0010\u009b\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009d\u0001\u0010\r\u001a\u0005\b\u009c\u0001\u0010\u000bR\u001e\u0010\u009e\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b \u0001\u0010\r\u001a\u0005\b\u009f\u0001\u0010\u000bR\u001e\u0010¡\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b£\u0001\u0010\r\u001a\u0005\b¢\u0001\u0010\u000bR\u001e\u0010¤\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¦\u0001\u0010\r\u001a\u0005\b¥\u0001\u0010\u000bR\u001e\u0010§\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b©\u0001\u0010\r\u001a\u0005\b¨\u0001\u0010\u000bR\u001e\u0010ª\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¬\u0001\u0010\r\u001a\u0005\b«\u0001\u0010\u000bR\u001e\u0010\u00ad\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¯\u0001\u0010\r\u001a\u0005\b®\u0001\u0010\u000bR\u001e\u0010°\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b²\u0001\u0010\r\u001a\u0005\b±\u0001\u0010\u000bR\u001e\u0010³\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bµ\u0001\u0010\r\u001a\u0005\b´\u0001\u0010\u000bR\u001e\u0010¶\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¸\u0001\u0010\r\u001a\u0005\b·\u0001\u0010\u000bR\u001e\u0010¹\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b»\u0001\u0010\r\u001a\u0005\bº\u0001\u0010\u000bR\u001e\u0010¼\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¾\u0001\u0010\r\u001a\u0005\b½\u0001\u0010\u000bR\u001e\u0010¿\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÁ\u0001\u0010\r\u001a\u0005\bÀ\u0001\u0010\u000bR\u001e\u0010Â\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÄ\u0001\u0010\r\u001a\u0005\bÃ\u0001\u0010\u000bR\u001e\u0010Å\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÇ\u0001\u0010\r\u001a\u0005\bÆ\u0001\u0010\u000bR\u001e\u0010È\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÊ\u0001\u0010\r\u001a\u0005\bÉ\u0001\u0010\u000bR\u001e\u0010Ë\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÍ\u0001\u0010\r\u001a\u0005\bÌ\u0001\u0010\u000bR\u001e\u0010Î\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÐ\u0001\u0010\r\u001a\u0005\bÏ\u0001\u0010\u000bR\u001e\u0010Ñ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÓ\u0001\u0010\r\u001a\u0005\bÒ\u0001\u0010\u000bR\u001e\u0010Ô\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÖ\u0001\u0010\r\u001a\u0005\bÕ\u0001\u0010\u000bR\u001e\u0010×\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÙ\u0001\u0010\r\u001a\u0005\bØ\u0001\u0010\u000bR\u001e\u0010Ú\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÜ\u0001\u0010\r\u001a\u0005\bÛ\u0001\u0010\u000bR\u001e\u0010Ý\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bß\u0001\u0010\r\u001a\u0005\bÞ\u0001\u0010\u000b¨\u0006à\u0001"}, d2 = {"Lcom/discord/theme/LightThemeExperiment;", "Lcom/discord/theme/LightTheme;", "resources", "Landroid/content/res/Resources;", "theme", "Landroid/content/res/Resources$Theme;", "<init>", "(Landroid/content/res/Resources;Landroid/content/res/Resources$Theme;)V", "backgroundBaseLow", "", "getBackgroundBaseLow", "()I", "backgroundBaseLow$delegate", "Lkotlin/Lazy;", "backgroundBaseLower", "getBackgroundBaseLower", "backgroundBaseLower$delegate", "backgroundBaseLowest", "getBackgroundBaseLowest", "backgroundBaseLowest$delegate", "backgroundFeedbackCritical", "getBackgroundFeedbackCritical", "backgroundFeedbackCritical$delegate", "backgroundFeedbackNotification", "getBackgroundFeedbackNotification", "backgroundFeedbackNotification$delegate", "backgroundModMuted", "getBackgroundModMuted", "backgroundModMuted$delegate", "backgroundModNormal", "getBackgroundModNormal", "backgroundModNormal$delegate", "backgroundModStrong", "getBackgroundModStrong", "backgroundModStrong$delegate", "backgroundModSubtle", "getBackgroundModSubtle", "backgroundModSubtle$delegate", "backgroundScrim", "getBackgroundScrim", "backgroundScrim$delegate", "backgroundScrimLightbox", "getBackgroundScrimLightbox", "backgroundScrimLightbox$delegate", "backgroundSurfaceHigh", "getBackgroundSurfaceHigh", "backgroundSurfaceHigh$delegate", "backgroundSurfaceHighest", "getBackgroundSurfaceHighest", "backgroundSurfaceHighest$delegate", "badgeNotificationBackground", "getBadgeNotificationBackground", "badgeNotificationBackground$delegate", "borderStrong", "getBorderStrong", "borderStrong$delegate", "borderSubtle", "getBorderSubtle", "borderSubtle$delegate", "cardBackgroundDefault", "getCardBackgroundDefault", "cardBackgroundDefault$delegate", "controlConnectedBackgroundActive", "getControlConnectedBackgroundActive", "controlConnectedBackgroundActive$delegate", "controlConnectedBackgroundDefault", "getControlConnectedBackgroundDefault", "controlConnectedBackgroundDefault$delegate", "controlConnectedBorderDefault", "getControlConnectedBorderDefault", "controlConnectedBorderDefault$delegate", "controlConnectedTextDefault", "getControlConnectedTextDefault", "controlConnectedTextDefault$delegate", "controlCriticalPrimaryBackgroundActive", "getControlCriticalPrimaryBackgroundActive", "controlCriticalPrimaryBackgroundActive$delegate", "controlCriticalPrimaryBackgroundDefault", "getControlCriticalPrimaryBackgroundDefault", "controlCriticalPrimaryBackgroundDefault$delegate", "controlCriticalPrimaryBorderDefault", "getControlCriticalPrimaryBorderDefault", "controlCriticalPrimaryBorderDefault$delegate", "controlCriticalPrimaryTextDefault", "getControlCriticalPrimaryTextDefault", "controlCriticalPrimaryTextDefault$delegate", "controlOverlayPrimaryBackgroundActive", "getControlOverlayPrimaryBackgroundActive", "controlOverlayPrimaryBackgroundActive$delegate", "controlOverlayPrimaryBackgroundDefault", "getControlOverlayPrimaryBackgroundDefault", "controlOverlayPrimaryBackgroundDefault$delegate", "controlOverlayPrimaryBorderDefault", "getControlOverlayPrimaryBorderDefault", "controlOverlayPrimaryBorderDefault$delegate", "controlOverlayPrimaryTextDefault", "getControlOverlayPrimaryTextDefault", "controlOverlayPrimaryTextDefault$delegate", "controlOverlaySecondaryBackgroundActive", "getControlOverlaySecondaryBackgroundActive", "controlOverlaySecondaryBackgroundActive$delegate", "controlOverlaySecondaryBackgroundDefault", "getControlOverlaySecondaryBackgroundDefault", "controlOverlaySecondaryBackgroundDefault$delegate", "controlOverlaySecondaryBorderDefault", "getControlOverlaySecondaryBorderDefault", "controlOverlaySecondaryBorderDefault$delegate", "controlOverlaySecondaryTextDefault", "getControlOverlaySecondaryTextDefault", "controlOverlaySecondaryTextDefault$delegate", "controlPrimaryBackgroundActive", "getControlPrimaryBackgroundActive", "controlPrimaryBackgroundActive$delegate", "controlPrimaryBackgroundDefault", "getControlPrimaryBackgroundDefault", "controlPrimaryBackgroundDefault$delegate", "controlPrimaryBorderDefault", "getControlPrimaryBorderDefault", "controlPrimaryBorderDefault$delegate", "controlPrimaryTextDefault", "getControlPrimaryTextDefault", "controlPrimaryTextDefault$delegate", "controlSecondaryBackgroundActive", "getControlSecondaryBackgroundActive", "controlSecondaryBackgroundActive$delegate", "controlSecondaryBackgroundDefault", "getControlSecondaryBackgroundDefault", "controlSecondaryBackgroundDefault$delegate", "controlSecondaryBorderActive", "getControlSecondaryBorderActive", "controlSecondaryBorderActive$delegate", "controlSecondaryBorderDefault", "getControlSecondaryBorderDefault", "controlSecondaryBorderDefault$delegate", "controlSecondaryTextDefault", "getControlSecondaryTextDefault", "controlSecondaryTextDefault$delegate", "iconFeedbackCritical", "getIconFeedbackCritical", "iconFeedbackCritical$delegate", "iconFeedbackInfo", "getIconFeedbackInfo", "iconFeedbackInfo$delegate", "iconFeedbackNotification", "getIconFeedbackNotification", "iconFeedbackNotification$delegate", "iconFeedbackWarning", "getIconFeedbackWarning", "iconFeedbackWarning$delegate", "inputBackgroundDefault", "getInputBackgroundDefault", "inputBackgroundDefault$delegate", "inputBorderDefault", "getInputBorderDefault", "inputBorderDefault$delegate", "interactiveBackgroundSelected", "getInteractiveBackgroundSelected", "interactiveBackgroundSelected$delegate", "interactiveIconActive", "getInteractiveIconActive", "interactiveIconActive$delegate", "interactiveIconDefault", "getInteractiveIconDefault", "interactiveIconDefault$delegate", "interactiveTextActive", "getInteractiveTextActive", "interactiveTextActive$delegate", "interactiveTextDefault", "getInteractiveTextDefault", "interactiveTextDefault$delegate", "messageHighlightBackgroundDefault", "getMessageHighlightBackgroundDefault", "messageHighlightBackgroundDefault$delegate", "mobileTextHeadingPrimary", "getMobileTextHeadingPrimary", "mobileTextHeadingPrimary$delegate", "progressbarIndicatorBackground", "getProgressbarIndicatorBackground", "progressbarIndicatorBackground$delegate", "spineDefault", "getSpineDefault", "spineDefault$delegate", "spoilerHiddenBackground", "getSpoilerHiddenBackground", "spoilerHiddenBackground$delegate", "textBrand", "getTextBrand", "textBrand$delegate", "textDefault", "getTextDefault", "textDefault$delegate", "textFeedbackCritical", "getTextFeedbackCritical", "textFeedbackCritical$delegate", "textFeedbackInfo", "getTextFeedbackInfo", "textFeedbackInfo$delegate", "textFeedbackPositive", "getTextFeedbackPositive", "textFeedbackPositive$delegate", "textFeedbackWarning", "getTextFeedbackWarning", "textFeedbackWarning$delegate", "textLink", "getTextLink", "textLink$delegate", "textMuted", "getTextMuted", "textMuted$delegate", "textStrong", "getTextStrong", "textStrong$delegate", "textSubtle", "getTextSubtle", "textSubtle$delegate", "textVoiceConnected", "getTextVoiceConnected", "textVoiceConnected$delegate", "textVoiceDisconnected", "getTextVoiceDisconnected", "textVoiceDisconnected$delegate", "textVoiceSpeaking", "getTextVoiceSpeaking", "textVoiceSpeaking$delegate", "theme_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LightThemeExperiment extends LightTheme {
    @NotNull
    private final Lazy backgroundBaseLow$delegate;
    @NotNull
    private final Lazy backgroundBaseLower$delegate;
    @NotNull
    private final Lazy backgroundBaseLowest$delegate;
    @NotNull
    private final Lazy backgroundFeedbackCritical$delegate;
    @NotNull
    private final Lazy backgroundFeedbackNotification$delegate;
    @NotNull
    private final Lazy backgroundModMuted$delegate;
    @NotNull
    private final Lazy backgroundModNormal$delegate;
    @NotNull
    private final Lazy backgroundModStrong$delegate;
    @NotNull
    private final Lazy backgroundModSubtle$delegate;
    @NotNull
    private final Lazy backgroundScrim$delegate;
    @NotNull
    private final Lazy backgroundScrimLightbox$delegate;
    @NotNull
    private final Lazy backgroundSurfaceHigh$delegate;
    @NotNull
    private final Lazy backgroundSurfaceHighest$delegate;
    @NotNull
    private final Lazy badgeNotificationBackground$delegate;
    @NotNull
    private final Lazy borderStrong$delegate;
    @NotNull
    private final Lazy borderSubtle$delegate;
    @NotNull
    private final Lazy cardBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlConnectedBackgroundActive$delegate;
    @NotNull
    private final Lazy controlConnectedBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlConnectedBorderDefault$delegate;
    @NotNull
    private final Lazy controlConnectedTextDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryTextDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlSecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryBorderActive$delegate;
    @NotNull
    private final Lazy controlSecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryTextDefault$delegate;
    @NotNull
    private final Lazy iconFeedbackCritical$delegate;
    @NotNull
    private final Lazy iconFeedbackInfo$delegate;
    @NotNull
    private final Lazy iconFeedbackNotification$delegate;
    @NotNull
    private final Lazy iconFeedbackWarning$delegate;
    @NotNull
    private final Lazy inputBackgroundDefault$delegate;
    @NotNull
    private final Lazy inputBorderDefault$delegate;
    @NotNull
    private final Lazy interactiveBackgroundSelected$delegate;
    @NotNull
    private final Lazy interactiveIconActive$delegate;
    @NotNull
    private final Lazy interactiveIconDefault$delegate;
    @NotNull
    private final Lazy interactiveTextActive$delegate;
    @NotNull
    private final Lazy interactiveTextDefault$delegate;
    @NotNull
    private final Lazy messageHighlightBackgroundDefault$delegate;
    @NotNull
    private final Lazy mobileTextHeadingPrimary$delegate;
    @NotNull
    private final Lazy progressbarIndicatorBackground$delegate;
    @NotNull
    private final Lazy spineDefault$delegate;
    @NotNull
    private final Lazy spoilerHiddenBackground$delegate;
    @NotNull
    private final Lazy textBrand$delegate;
    @NotNull
    private final Lazy textDefault$delegate;
    @NotNull
    private final Lazy textFeedbackCritical$delegate;
    @NotNull
    private final Lazy textFeedbackInfo$delegate;
    @NotNull
    private final Lazy textFeedbackPositive$delegate;
    @NotNull
    private final Lazy textFeedbackWarning$delegate;
    @NotNull
    private final Lazy textLink$delegate;
    @NotNull
    private final Lazy textMuted$delegate;
    @NotNull
    private final Lazy textStrong$delegate;
    @NotNull
    private final Lazy textSubtle$delegate;
    @NotNull
    private final Lazy textVoiceConnected$delegate;
    @NotNull
    private final Lazy textVoiceDisconnected$delegate;
    @NotNull
    private final Lazy textVoiceSpeaking$delegate;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LightThemeExperiment(@NotNull final Resources resources, @NotNull final Resources.Theme theme) {
        super(resources, theme);
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(theme, "theme");
        this.backgroundBaseLow$delegate = l.b(new Function0() { // from class: h8.vf
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLow_delegate$lambda$0;
                backgroundBaseLow_delegate$lambda$0 = LightThemeExperiment.backgroundBaseLow_delegate$lambda$0(resources, theme);
                return Integer.valueOf(backgroundBaseLow_delegate$lambda$0);
            }
        });
        this.backgroundBaseLower$delegate = l.b(new Function0() { // from class: h8.xf
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLower_delegate$lambda$1;
                backgroundBaseLower_delegate$lambda$1 = LightThemeExperiment.backgroundBaseLower_delegate$lambda$1(resources, theme);
                return Integer.valueOf(backgroundBaseLower_delegate$lambda$1);
            }
        });
        this.backgroundBaseLowest$delegate = l.b(new Function0() { // from class: h8.jg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLowest_delegate$lambda$2;
                backgroundBaseLowest_delegate$lambda$2 = LightThemeExperiment.backgroundBaseLowest_delegate$lambda$2(resources, theme);
                return Integer.valueOf(backgroundBaseLowest_delegate$lambda$2);
            }
        });
        this.backgroundFeedbackCritical$delegate = l.b(new Function0() { // from class: h8.vg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundFeedbackCritical_delegate$lambda$3;
                backgroundFeedbackCritical_delegate$lambda$3 = LightThemeExperiment.backgroundFeedbackCritical_delegate$lambda$3(resources, theme);
                return Integer.valueOf(backgroundFeedbackCritical_delegate$lambda$3);
            }
        });
        this.backgroundFeedbackNotification$delegate = l.b(new Function0() { // from class: h8.hh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundFeedbackNotification_delegate$lambda$4;
                backgroundFeedbackNotification_delegate$lambda$4 = LightThemeExperiment.backgroundFeedbackNotification_delegate$lambda$4(resources, theme);
                return Integer.valueOf(backgroundFeedbackNotification_delegate$lambda$4);
            }
        });
        this.backgroundModMuted$delegate = l.b(new Function0() { // from class: h8.th
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModMuted_delegate$lambda$5;
                backgroundModMuted_delegate$lambda$5 = LightThemeExperiment.backgroundModMuted_delegate$lambda$5(resources, theme);
                return Integer.valueOf(backgroundModMuted_delegate$lambda$5);
            }
        });
        this.backgroundModNormal$delegate = l.b(new Function0() { // from class: h8.fi
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModNormal_delegate$lambda$6;
                backgroundModNormal_delegate$lambda$6 = LightThemeExperiment.backgroundModNormal_delegate$lambda$6(resources, theme);
                return Integer.valueOf(backgroundModNormal_delegate$lambda$6);
            }
        });
        this.backgroundModStrong$delegate = l.b(new Function0() { // from class: h8.hi
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModStrong_delegate$lambda$7;
                backgroundModStrong_delegate$lambda$7 = LightThemeExperiment.backgroundModStrong_delegate$lambda$7(resources, theme);
                return Integer.valueOf(backgroundModStrong_delegate$lambda$7);
            }
        });
        this.backgroundModSubtle$delegate = l.b(new Function0() { // from class: h8.ii
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModSubtle_delegate$lambda$8;
                backgroundModSubtle_delegate$lambda$8 = LightThemeExperiment.backgroundModSubtle_delegate$lambda$8(resources, theme);
                return Integer.valueOf(backgroundModSubtle_delegate$lambda$8);
            }
        });
        this.backgroundScrim$delegate = l.b(new Function0() { // from class: h8.ki
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundScrim_delegate$lambda$9;
                backgroundScrim_delegate$lambda$9 = LightThemeExperiment.backgroundScrim_delegate$lambda$9(resources, theme);
                return Integer.valueOf(backgroundScrim_delegate$lambda$9);
            }
        });
        this.backgroundScrimLightbox$delegate = l.b(new Function0() { // from class: h8.gg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundScrimLightbox_delegate$lambda$10;
                backgroundScrimLightbox_delegate$lambda$10 = LightThemeExperiment.backgroundScrimLightbox_delegate$lambda$10(resources, theme);
                return Integer.valueOf(backgroundScrimLightbox_delegate$lambda$10);
            }
        });
        this.backgroundSurfaceHigh$delegate = l.b(new Function0() { // from class: h8.rg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSurfaceHigh_delegate$lambda$11;
                backgroundSurfaceHigh_delegate$lambda$11 = LightThemeExperiment.backgroundSurfaceHigh_delegate$lambda$11(resources, theme);
                return Integer.valueOf(backgroundSurfaceHigh_delegate$lambda$11);
            }
        });
        this.backgroundSurfaceHighest$delegate = l.b(new Function0() { // from class: h8.ch
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSurfaceHighest_delegate$lambda$12;
                backgroundSurfaceHighest_delegate$lambda$12 = LightThemeExperiment.backgroundSurfaceHighest_delegate$lambda$12(resources, theme);
                return Integer.valueOf(backgroundSurfaceHighest_delegate$lambda$12);
            }
        });
        this.badgeNotificationBackground$delegate = l.b(new Function0() { // from class: h8.nh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int badgeNotificationBackground_delegate$lambda$13;
                badgeNotificationBackground_delegate$lambda$13 = LightThemeExperiment.badgeNotificationBackground_delegate$lambda$13(resources, theme);
                return Integer.valueOf(badgeNotificationBackground_delegate$lambda$13);
            }
        });
        this.borderStrong$delegate = l.b(new Function0() { // from class: h8.yh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int borderStrong_delegate$lambda$14;
                borderStrong_delegate$lambda$14 = LightThemeExperiment.borderStrong_delegate$lambda$14(resources, theme);
                return Integer.valueOf(borderStrong_delegate$lambda$14);
            }
        });
        this.borderSubtle$delegate = l.b(new Function0() { // from class: h8.ji
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int borderSubtle_delegate$lambda$15;
                borderSubtle_delegate$lambda$15 = LightThemeExperiment.borderSubtle_delegate$lambda$15(resources, theme);
                return Integer.valueOf(borderSubtle_delegate$lambda$15);
            }
        });
        this.cardBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.li
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int cardBackgroundDefault_delegate$lambda$16;
                cardBackgroundDefault_delegate$lambda$16 = LightThemeExperiment.cardBackgroundDefault_delegate$lambda$16(resources, theme);
                return Integer.valueOf(cardBackgroundDefault_delegate$lambda$16);
            }
        });
        this.controlConnectedBackgroundActive$delegate = l.b(new Function0() { // from class: h8.mi
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBackgroundActive_delegate$lambda$17;
                controlConnectedBackgroundActive_delegate$lambda$17 = LightThemeExperiment.controlConnectedBackgroundActive_delegate$lambda$17(resources, theme);
                return Integer.valueOf(controlConnectedBackgroundActive_delegate$lambda$17);
            }
        });
        this.controlConnectedBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.ni
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBackgroundDefault_delegate$lambda$18;
                controlConnectedBackgroundDefault_delegate$lambda$18 = LightThemeExperiment.controlConnectedBackgroundDefault_delegate$lambda$18(resources, theme);
                return Integer.valueOf(controlConnectedBackgroundDefault_delegate$lambda$18);
            }
        });
        this.controlConnectedBorderDefault$delegate = l.b(new Function0() { // from class: h8.wf
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBorderDefault_delegate$lambda$19;
                controlConnectedBorderDefault_delegate$lambda$19 = LightThemeExperiment.controlConnectedBorderDefault_delegate$lambda$19(resources, theme);
                return Integer.valueOf(controlConnectedBorderDefault_delegate$lambda$19);
            }
        });
        this.controlConnectedTextDefault$delegate = l.b(new Function0() { // from class: h8.yf
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedTextDefault_delegate$lambda$20;
                controlConnectedTextDefault_delegate$lambda$20 = LightThemeExperiment.controlConnectedTextDefault_delegate$lambda$20(resources, theme);
                return Integer.valueOf(controlConnectedTextDefault_delegate$lambda$20);
            }
        });
        this.controlCriticalPrimaryBackgroundActive$delegate = l.b(new Function0() { // from class: h8.zf
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBackgroundActive_delegate$lambda$21;
                controlCriticalPrimaryBackgroundActive_delegate$lambda$21 = LightThemeExperiment.controlCriticalPrimaryBackgroundActive_delegate$lambda$21(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBackgroundActive_delegate$lambda$21);
            }
        });
        this.controlCriticalPrimaryBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.ag
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBackgroundDefault_delegate$lambda$22;
                controlCriticalPrimaryBackgroundDefault_delegate$lambda$22 = LightThemeExperiment.controlCriticalPrimaryBackgroundDefault_delegate$lambda$22(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBackgroundDefault_delegate$lambda$22);
            }
        });
        this.controlCriticalPrimaryBorderDefault$delegate = l.b(new Function0() { // from class: h8.bg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBorderDefault_delegate$lambda$23;
                controlCriticalPrimaryBorderDefault_delegate$lambda$23 = LightThemeExperiment.controlCriticalPrimaryBorderDefault_delegate$lambda$23(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBorderDefault_delegate$lambda$23);
            }
        });
        this.controlCriticalPrimaryTextDefault$delegate = l.b(new Function0() { // from class: h8.cg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryTextDefault_delegate$lambda$24;
                controlCriticalPrimaryTextDefault_delegate$lambda$24 = LightThemeExperiment.controlCriticalPrimaryTextDefault_delegate$lambda$24(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryTextDefault_delegate$lambda$24);
            }
        });
        this.controlOverlayPrimaryBackgroundActive$delegate = l.b(new Function0() { // from class: h8.dg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBackgroundActive_delegate$lambda$25;
                controlOverlayPrimaryBackgroundActive_delegate$lambda$25 = LightThemeExperiment.controlOverlayPrimaryBackgroundActive_delegate$lambda$25(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBackgroundActive_delegate$lambda$25);
            }
        });
        this.controlOverlayPrimaryBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.eg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBackgroundDefault_delegate$lambda$26;
                controlOverlayPrimaryBackgroundDefault_delegate$lambda$26 = LightThemeExperiment.controlOverlayPrimaryBackgroundDefault_delegate$lambda$26(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBackgroundDefault_delegate$lambda$26);
            }
        });
        this.controlOverlayPrimaryBorderDefault$delegate = l.b(new Function0() { // from class: h8.fg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBorderDefault_delegate$lambda$27;
                controlOverlayPrimaryBorderDefault_delegate$lambda$27 = LightThemeExperiment.controlOverlayPrimaryBorderDefault_delegate$lambda$27(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBorderDefault_delegate$lambda$27);
            }
        });
        this.controlOverlayPrimaryTextDefault$delegate = l.b(new Function0() { // from class: h8.hg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryTextDefault_delegate$lambda$28;
                controlOverlayPrimaryTextDefault_delegate$lambda$28 = LightThemeExperiment.controlOverlayPrimaryTextDefault_delegate$lambda$28(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryTextDefault_delegate$lambda$28);
            }
        });
        this.controlOverlaySecondaryBackgroundActive$delegate = l.b(new Function0() { // from class: h8.ig
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBackgroundActive_delegate$lambda$29;
                controlOverlaySecondaryBackgroundActive_delegate$lambda$29 = LightThemeExperiment.controlOverlaySecondaryBackgroundActive_delegate$lambda$29(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBackgroundActive_delegate$lambda$29);
            }
        });
        this.controlOverlaySecondaryBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.kg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBackgroundDefault_delegate$lambda$30;
                controlOverlaySecondaryBackgroundDefault_delegate$lambda$30 = LightThemeExperiment.controlOverlaySecondaryBackgroundDefault_delegate$lambda$30(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBackgroundDefault_delegate$lambda$30);
            }
        });
        this.controlOverlaySecondaryBorderDefault$delegate = l.b(new Function0() { // from class: h8.lg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBorderDefault_delegate$lambda$31;
                controlOverlaySecondaryBorderDefault_delegate$lambda$31 = LightThemeExperiment.controlOverlaySecondaryBorderDefault_delegate$lambda$31(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBorderDefault_delegate$lambda$31);
            }
        });
        this.controlOverlaySecondaryTextDefault$delegate = l.b(new Function0() { // from class: h8.mg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryTextDefault_delegate$lambda$32;
                controlOverlaySecondaryTextDefault_delegate$lambda$32 = LightThemeExperiment.controlOverlaySecondaryTextDefault_delegate$lambda$32(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryTextDefault_delegate$lambda$32);
            }
        });
        this.controlPrimaryBackgroundActive$delegate = l.b(new Function0() { // from class: h8.ng
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBackgroundActive_delegate$lambda$33;
                controlPrimaryBackgroundActive_delegate$lambda$33 = LightThemeExperiment.controlPrimaryBackgroundActive_delegate$lambda$33(resources, theme);
                return Integer.valueOf(controlPrimaryBackgroundActive_delegate$lambda$33);
            }
        });
        this.controlPrimaryBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.og
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBackgroundDefault_delegate$lambda$34;
                controlPrimaryBackgroundDefault_delegate$lambda$34 = LightThemeExperiment.controlPrimaryBackgroundDefault_delegate$lambda$34(resources, theme);
                return Integer.valueOf(controlPrimaryBackgroundDefault_delegate$lambda$34);
            }
        });
        this.controlPrimaryBorderDefault$delegate = l.b(new Function0() { // from class: h8.pg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBorderDefault_delegate$lambda$35;
                controlPrimaryBorderDefault_delegate$lambda$35 = LightThemeExperiment.controlPrimaryBorderDefault_delegate$lambda$35(resources, theme);
                return Integer.valueOf(controlPrimaryBorderDefault_delegate$lambda$35);
            }
        });
        this.controlPrimaryTextDefault$delegate = l.b(new Function0() { // from class: h8.qg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryTextDefault_delegate$lambda$36;
                controlPrimaryTextDefault_delegate$lambda$36 = LightThemeExperiment.controlPrimaryTextDefault_delegate$lambda$36(resources, theme);
                return Integer.valueOf(controlPrimaryTextDefault_delegate$lambda$36);
            }
        });
        this.controlSecondaryBackgroundActive$delegate = l.b(new Function0() { // from class: h8.sg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBackgroundActive_delegate$lambda$37;
                controlSecondaryBackgroundActive_delegate$lambda$37 = LightThemeExperiment.controlSecondaryBackgroundActive_delegate$lambda$37(resources, theme);
                return Integer.valueOf(controlSecondaryBackgroundActive_delegate$lambda$37);
            }
        });
        this.controlSecondaryBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.tg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBackgroundDefault_delegate$lambda$38;
                controlSecondaryBackgroundDefault_delegate$lambda$38 = LightThemeExperiment.controlSecondaryBackgroundDefault_delegate$lambda$38(resources, theme);
                return Integer.valueOf(controlSecondaryBackgroundDefault_delegate$lambda$38);
            }
        });
        this.controlSecondaryBorderActive$delegate = l.b(new Function0() { // from class: h8.ug
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBorderActive_delegate$lambda$39;
                controlSecondaryBorderActive_delegate$lambda$39 = LightThemeExperiment.controlSecondaryBorderActive_delegate$lambda$39(resources, theme);
                return Integer.valueOf(controlSecondaryBorderActive_delegate$lambda$39);
            }
        });
        this.controlSecondaryBorderDefault$delegate = l.b(new Function0() { // from class: h8.wg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBorderDefault_delegate$lambda$40;
                controlSecondaryBorderDefault_delegate$lambda$40 = LightThemeExperiment.controlSecondaryBorderDefault_delegate$lambda$40(resources, theme);
                return Integer.valueOf(controlSecondaryBorderDefault_delegate$lambda$40);
            }
        });
        this.controlSecondaryTextDefault$delegate = l.b(new Function0() { // from class: h8.xg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryTextDefault_delegate$lambda$41;
                controlSecondaryTextDefault_delegate$lambda$41 = LightThemeExperiment.controlSecondaryTextDefault_delegate$lambda$41(resources, theme);
                return Integer.valueOf(controlSecondaryTextDefault_delegate$lambda$41);
            }
        });
        this.iconFeedbackCritical$delegate = l.b(new Function0() { // from class: h8.yg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackCritical_delegate$lambda$42;
                iconFeedbackCritical_delegate$lambda$42 = LightThemeExperiment.iconFeedbackCritical_delegate$lambda$42(resources, theme);
                return Integer.valueOf(iconFeedbackCritical_delegate$lambda$42);
            }
        });
        this.iconFeedbackInfo$delegate = l.b(new Function0() { // from class: h8.zg
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackInfo_delegate$lambda$43;
                iconFeedbackInfo_delegate$lambda$43 = LightThemeExperiment.iconFeedbackInfo_delegate$lambda$43(resources, theme);
                return Integer.valueOf(iconFeedbackInfo_delegate$lambda$43);
            }
        });
        this.iconFeedbackNotification$delegate = l.b(new Function0() { // from class: h8.ah
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackNotification_delegate$lambda$44;
                iconFeedbackNotification_delegate$lambda$44 = LightThemeExperiment.iconFeedbackNotification_delegate$lambda$44(resources, theme);
                return Integer.valueOf(iconFeedbackNotification_delegate$lambda$44);
            }
        });
        this.iconFeedbackWarning$delegate = l.b(new Function0() { // from class: h8.bh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackWarning_delegate$lambda$45;
                iconFeedbackWarning_delegate$lambda$45 = LightThemeExperiment.iconFeedbackWarning_delegate$lambda$45(resources, theme);
                return Integer.valueOf(iconFeedbackWarning_delegate$lambda$45);
            }
        });
        this.inputBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.dh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int inputBackgroundDefault_delegate$lambda$46;
                inputBackgroundDefault_delegate$lambda$46 = LightThemeExperiment.inputBackgroundDefault_delegate$lambda$46(resources, theme);
                return Integer.valueOf(inputBackgroundDefault_delegate$lambda$46);
            }
        });
        this.inputBorderDefault$delegate = l.b(new Function0() { // from class: h8.eh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int inputBorderDefault_delegate$lambda$47;
                inputBorderDefault_delegate$lambda$47 = LightThemeExperiment.inputBorderDefault_delegate$lambda$47(resources, theme);
                return Integer.valueOf(inputBorderDefault_delegate$lambda$47);
            }
        });
        this.interactiveBackgroundSelected$delegate = l.b(new Function0() { // from class: h8.fh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveBackgroundSelected_delegate$lambda$48;
                interactiveBackgroundSelected_delegate$lambda$48 = LightThemeExperiment.interactiveBackgroundSelected_delegate$lambda$48(resources, theme);
                return Integer.valueOf(interactiveBackgroundSelected_delegate$lambda$48);
            }
        });
        this.interactiveIconActive$delegate = l.b(new Function0() { // from class: h8.gh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveIconActive_delegate$lambda$49;
                interactiveIconActive_delegate$lambda$49 = LightThemeExperiment.interactiveIconActive_delegate$lambda$49(resources, theme);
                return Integer.valueOf(interactiveIconActive_delegate$lambda$49);
            }
        });
        this.interactiveIconDefault$delegate = l.b(new Function0() { // from class: h8.ih
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveIconDefault_delegate$lambda$50;
                interactiveIconDefault_delegate$lambda$50 = LightThemeExperiment.interactiveIconDefault_delegate$lambda$50(resources, theme);
                return Integer.valueOf(interactiveIconDefault_delegate$lambda$50);
            }
        });
        this.interactiveTextActive$delegate = l.b(new Function0() { // from class: h8.jh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveTextActive_delegate$lambda$51;
                interactiveTextActive_delegate$lambda$51 = LightThemeExperiment.interactiveTextActive_delegate$lambda$51(resources, theme);
                return Integer.valueOf(interactiveTextActive_delegate$lambda$51);
            }
        });
        this.interactiveTextDefault$delegate = l.b(new Function0() { // from class: h8.kh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveTextDefault_delegate$lambda$52;
                interactiveTextDefault_delegate$lambda$52 = LightThemeExperiment.interactiveTextDefault_delegate$lambda$52(resources, theme);
                return Integer.valueOf(interactiveTextDefault_delegate$lambda$52);
            }
        });
        this.messageHighlightBackgroundDefault$delegate = l.b(new Function0() { // from class: h8.lh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int messageHighlightBackgroundDefault_delegate$lambda$53;
                messageHighlightBackgroundDefault_delegate$lambda$53 = LightThemeExperiment.messageHighlightBackgroundDefault_delegate$lambda$53(resources, theme);
                return Integer.valueOf(messageHighlightBackgroundDefault_delegate$lambda$53);
            }
        });
        this.mobileTextHeadingPrimary$delegate = l.b(new Function0() { // from class: h8.mh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileTextHeadingPrimary_delegate$lambda$54;
                mobileTextHeadingPrimary_delegate$lambda$54 = LightThemeExperiment.mobileTextHeadingPrimary_delegate$lambda$54(resources, theme);
                return Integer.valueOf(mobileTextHeadingPrimary_delegate$lambda$54);
            }
        });
        this.progressbarIndicatorBackground$delegate = l.b(new Function0() { // from class: h8.oh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int progressbarIndicatorBackground_delegate$lambda$55;
                progressbarIndicatorBackground_delegate$lambda$55 = LightThemeExperiment.progressbarIndicatorBackground_delegate$lambda$55(resources, theme);
                return Integer.valueOf(progressbarIndicatorBackground_delegate$lambda$55);
            }
        });
        this.spineDefault$delegate = l.b(new Function0() { // from class: h8.ph
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spineDefault_delegate$lambda$56;
                spineDefault_delegate$lambda$56 = LightThemeExperiment.spineDefault_delegate$lambda$56(resources, theme);
                return Integer.valueOf(spineDefault_delegate$lambda$56);
            }
        });
        this.spoilerHiddenBackground$delegate = l.b(new Function0() { // from class: h8.qh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spoilerHiddenBackground_delegate$lambda$57;
                spoilerHiddenBackground_delegate$lambda$57 = LightThemeExperiment.spoilerHiddenBackground_delegate$lambda$57(resources, theme);
                return Integer.valueOf(spoilerHiddenBackground_delegate$lambda$57);
            }
        });
        this.textBrand$delegate = l.b(new Function0() { // from class: h8.rh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textBrand_delegate$lambda$58;
                textBrand_delegate$lambda$58 = LightThemeExperiment.textBrand_delegate$lambda$58(resources, theme);
                return Integer.valueOf(textBrand_delegate$lambda$58);
            }
        });
        this.textDefault$delegate = l.b(new Function0() { // from class: h8.sh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textDefault_delegate$lambda$59;
                textDefault_delegate$lambda$59 = LightThemeExperiment.textDefault_delegate$lambda$59(resources, theme);
                return Integer.valueOf(textDefault_delegate$lambda$59);
            }
        });
        this.textFeedbackCritical$delegate = l.b(new Function0() { // from class: h8.uh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackCritical_delegate$lambda$60;
                textFeedbackCritical_delegate$lambda$60 = LightThemeExperiment.textFeedbackCritical_delegate$lambda$60(resources, theme);
                return Integer.valueOf(textFeedbackCritical_delegate$lambda$60);
            }
        });
        this.textFeedbackInfo$delegate = l.b(new Function0() { // from class: h8.vh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackInfo_delegate$lambda$61;
                textFeedbackInfo_delegate$lambda$61 = LightThemeExperiment.textFeedbackInfo_delegate$lambda$61(resources, theme);
                return Integer.valueOf(textFeedbackInfo_delegate$lambda$61);
            }
        });
        this.textFeedbackPositive$delegate = l.b(new Function0() { // from class: h8.wh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackPositive_delegate$lambda$62;
                textFeedbackPositive_delegate$lambda$62 = LightThemeExperiment.textFeedbackPositive_delegate$lambda$62(resources, theme);
                return Integer.valueOf(textFeedbackPositive_delegate$lambda$62);
            }
        });
        this.textFeedbackWarning$delegate = l.b(new Function0() { // from class: h8.xh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackWarning_delegate$lambda$63;
                textFeedbackWarning_delegate$lambda$63 = LightThemeExperiment.textFeedbackWarning_delegate$lambda$63(resources, theme);
                return Integer.valueOf(textFeedbackWarning_delegate$lambda$63);
            }
        });
        this.textLink$delegate = l.b(new Function0() { // from class: h8.zh
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textLink_delegate$lambda$64;
                textLink_delegate$lambda$64 = LightThemeExperiment.textLink_delegate$lambda$64(resources, theme);
                return Integer.valueOf(textLink_delegate$lambda$64);
            }
        });
        this.textMuted$delegate = l.b(new Function0() { // from class: h8.ai
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textMuted_delegate$lambda$65;
                textMuted_delegate$lambda$65 = LightThemeExperiment.textMuted_delegate$lambda$65(resources, theme);
                return Integer.valueOf(textMuted_delegate$lambda$65);
            }
        });
        this.textStrong$delegate = l.b(new Function0() { // from class: h8.bi
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textStrong_delegate$lambda$66;
                textStrong_delegate$lambda$66 = LightThemeExperiment.textStrong_delegate$lambda$66(resources, theme);
                return Integer.valueOf(textStrong_delegate$lambda$66);
            }
        });
        this.textSubtle$delegate = l.b(new Function0() { // from class: h8.ci
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textSubtle_delegate$lambda$67;
                textSubtle_delegate$lambda$67 = LightThemeExperiment.textSubtle_delegate$lambda$67(resources, theme);
                return Integer.valueOf(textSubtle_delegate$lambda$67);
            }
        });
        this.textVoiceConnected$delegate = l.b(new Function0() { // from class: h8.di
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textVoiceConnected_delegate$lambda$68;
                textVoiceConnected_delegate$lambda$68 = LightThemeExperiment.textVoiceConnected_delegate$lambda$68(resources, theme);
                return Integer.valueOf(textVoiceConnected_delegate$lambda$68);
            }
        });
        this.textVoiceDisconnected$delegate = l.b(new Function0() { // from class: h8.ei
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textVoiceDisconnected_delegate$lambda$69;
                textVoiceDisconnected_delegate$lambda$69 = LightThemeExperiment.textVoiceDisconnected_delegate$lambda$69(resources, theme);
                return Integer.valueOf(textVoiceDisconnected_delegate$lambda$69);
            }
        });
        this.textVoiceSpeaking$delegate = l.b(new Function0() { // from class: h8.gi
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textVoiceSpeaking_delegate$lambda$70;
                textVoiceSpeaking_delegate$lambda$70 = LightThemeExperiment.textVoiceSpeaking_delegate$lambda$70(resources, theme);
                return Integer.valueOf(textVoiceSpeaking_delegate$lambda$70);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLow_delegate$lambda$0(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_2, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLower_delegate$lambda$1(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_2, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLowest_delegate$lambda$2(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_4, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundFeedbackCritical_delegate$lambda$3(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_feedback_critical_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundFeedbackNotification_delegate$lambda$4(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModMuted_delegate$lambda$5(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_muted_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModNormal_delegate$lambda$6(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_normal_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModStrong_delegate$lambda$7(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_strong_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModSubtle_delegate$lambda$8(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_subtle_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundScrimLightbox_delegate$lambda$10(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_scrim_lightbox_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundScrim_delegate$lambda$9(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_scrim_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSurfaceHigh_delegate$lambda$11(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSurfaceHighest_delegate$lambda$12(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int badgeNotificationBackground_delegate$lambda$13(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int borderStrong_delegate$lambda$14(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.border_strong_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int borderSubtle_delegate$lambda$15(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.border_subtle_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int cardBackgroundDefault_delegate$lambda$16(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBackgroundActive_delegate$lambda$17(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_new_65, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBackgroundDefault_delegate$lambda$18(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_new_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBorderDefault_delegate$lambda$19(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_connected_border_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedTextDefault_delegate$lambda$20(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBackgroundActive_delegate$lambda$21(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_65, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBackgroundDefault_delegate$lambda$22(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBorderDefault_delegate$lambda$23(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_critical_primary_border_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryTextDefault_delegate$lambda$24(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBackgroundActive_delegate$lambda$25(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_17, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBackgroundDefault_delegate$lambda$26(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBorderDefault_delegate$lambda$27(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_primary_border_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryTextDefault_delegate$lambda$28(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_100, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBackgroundActive_delegate$lambda$29(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_background_active_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBackgroundDefault_delegate$lambda$30(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_background_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBorderDefault_delegate$lambda$31(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_border_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryTextDefault_delegate$lambda$32(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBackgroundActive_delegate$lambda$33(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blurple_65, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBackgroundDefault_delegate$lambda$34(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blurple_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBorderDefault_delegate$lambda$35(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_primary_border_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryTextDefault_delegate$lambda$36(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_1, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBackgroundActive_delegate$lambda$37(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_background_active_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBackgroundDefault_delegate$lambda$38(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_background_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBorderActive_delegate$lambda$39(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_border_active_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBorderDefault_delegate$lambda$40(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_border_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryTextDefault_delegate$lambda$41(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_71, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackCritical_delegate$lambda$42(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_53, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackInfo_delegate$lambda$43(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_new_56, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackNotification_delegate$lambda$44(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackWarning_delegate$lambda$45(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_new_70, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int inputBackgroundDefault_delegate$lambda$46(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.input_background_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int inputBorderDefault_delegate$lambda$47(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.input_border_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveBackgroundSelected_delegate$lambda$48(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.interactive_background_selected_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveIconActive_delegate$lambda$49(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_71, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveIconDefault_delegate$lambda$50(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_44, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveTextActive_delegate$lambda$51(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_71, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveTextDefault_delegate$lambda$52(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_44, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int messageHighlightBackgroundDefault_delegate$lambda$53(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.message_highlight_background_default_experiment_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileTextHeadingPrimary_delegate$lambda$54(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_71, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int progressbarIndicatorBackground_delegate$lambda$55(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blurple_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spineDefault_delegate$lambda$56(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_16, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spoilerHiddenBackground_delegate$lambda$57(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_31, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textBrand_delegate$lambda$58(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blurple_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textDefault_delegate$lambda$59(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_69, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackCritical_delegate$lambda$60(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_53, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackInfo_delegate$lambda$61(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_new_56, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackPositive_delegate$lambda$62(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_new_55, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackWarning_delegate$lambda$63(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_new_70, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textLink_delegate$lambda$64(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_new_50, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textMuted_delegate$lambda$65(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_41, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textStrong_delegate$lambda$66(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_71, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textSubtle_delegate$lambda$67(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.neutral_44, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textVoiceConnected_delegate$lambda$68(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_new_55, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textVoiceDisconnected_delegate$lambda$69(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_new_53, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textVoiceSpeaking_delegate$lambda$70(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_new_45, theme);
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLow() {
        return ((Number) this.backgroundBaseLow$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLower() {
        return ((Number) this.backgroundBaseLower$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLowest() {
        return ((Number) this.backgroundBaseLowest$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundFeedbackCritical() {
        return ((Number) this.backgroundFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundFeedbackNotification() {
        return ((Number) this.backgroundFeedbackNotification$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundModMuted() {
        return ((Number) this.backgroundModMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundModNormal() {
        return ((Number) this.backgroundModNormal$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundModStrong() {
        return ((Number) this.backgroundModStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundModSubtle() {
        return ((Number) this.backgroundModSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundScrim() {
        return ((Number) this.backgroundScrim$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundScrimLightbox() {
        return ((Number) this.backgroundScrimLightbox$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundSurfaceHigh() {
        return ((Number) this.backgroundSurfaceHigh$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBackgroundSurfaceHighest() {
        return ((Number) this.backgroundSurfaceHighest$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBadgeNotificationBackground() {
        return ((Number) this.badgeNotificationBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBorderStrong() {
        return ((Number) this.borderStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getBorderSubtle() {
        return ((Number) this.borderSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getCardBackgroundDefault() {
        return ((Number) this.cardBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlConnectedBackgroundActive() {
        return ((Number) this.controlConnectedBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlConnectedBackgroundDefault() {
        return ((Number) this.controlConnectedBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlConnectedBorderDefault() {
        return ((Number) this.controlConnectedBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlConnectedTextDefault() {
        return ((Number) this.controlConnectedTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBackgroundActive() {
        return ((Number) this.controlCriticalPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBackgroundDefault() {
        return ((Number) this.controlCriticalPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBorderDefault() {
        return ((Number) this.controlCriticalPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryTextDefault() {
        return ((Number) this.controlCriticalPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBackgroundActive() {
        return ((Number) this.controlOverlayPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBackgroundDefault() {
        return ((Number) this.controlOverlayPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBorderDefault() {
        return ((Number) this.controlOverlayPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryTextDefault() {
        return ((Number) this.controlOverlayPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBackgroundActive() {
        return ((Number) this.controlOverlaySecondaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBackgroundDefault() {
        return ((Number) this.controlOverlaySecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBorderDefault() {
        return ((Number) this.controlOverlaySecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryTextDefault() {
        return ((Number) this.controlOverlaySecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBackgroundActive() {
        return ((Number) this.controlPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBackgroundDefault() {
        return ((Number) this.controlPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBorderDefault() {
        return ((Number) this.controlPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlPrimaryTextDefault() {
        return ((Number) this.controlPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBackgroundActive() {
        return ((Number) this.controlSecondaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBackgroundDefault() {
        return ((Number) this.controlSecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBorderActive() {
        return ((Number) this.controlSecondaryBorderActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBorderDefault() {
        return ((Number) this.controlSecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getControlSecondaryTextDefault() {
        return ((Number) this.controlSecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getIconFeedbackCritical() {
        return ((Number) this.iconFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getIconFeedbackInfo() {
        return ((Number) this.iconFeedbackInfo$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getIconFeedbackNotification() {
        return ((Number) this.iconFeedbackNotification$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getIconFeedbackWarning() {
        return ((Number) this.iconFeedbackWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getInputBackgroundDefault() {
        return ((Number) this.inputBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getInputBorderDefault() {
        return ((Number) this.inputBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getInteractiveBackgroundSelected() {
        return ((Number) this.interactiveBackgroundSelected$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getInteractiveIconActive() {
        return ((Number) this.interactiveIconActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getInteractiveIconDefault() {
        return ((Number) this.interactiveIconDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getInteractiveTextActive() {
        return ((Number) this.interactiveTextActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getInteractiveTextDefault() {
        return ((Number) this.interactiveTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getMessageHighlightBackgroundDefault() {
        return ((Number) this.messageHighlightBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getMobileTextHeadingPrimary() {
        return ((Number) this.mobileTextHeadingPrimary$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getProgressbarIndicatorBackground() {
        return ((Number) this.progressbarIndicatorBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getSpineDefault() {
        return ((Number) this.spineDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getSpoilerHiddenBackground() {
        return ((Number) this.spoilerHiddenBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextBrand() {
        return ((Number) this.textBrand$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextDefault() {
        return ((Number) this.textDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextFeedbackCritical() {
        return ((Number) this.textFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextFeedbackInfo() {
        return ((Number) this.textFeedbackInfo$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextFeedbackPositive() {
        return ((Number) this.textFeedbackPositive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextFeedbackWarning() {
        return ((Number) this.textFeedbackWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextLink() {
        return ((Number) this.textLink$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextMuted() {
        return ((Number) this.textMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextStrong() {
        return ((Number) this.textStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextSubtle() {
        return ((Number) this.textSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextVoiceConnected() {
        return ((Number) this.textVoiceConnected$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextVoiceDisconnected() {
        return ((Number) this.textVoiceDisconnected$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.LightTheme, com.discord.theme.DiscordThemeObject
    public int getTextVoiceSpeaking() {
        return ((Number) this.textVoiceSpeaking$delegate.getValue()).intValue();
    }
}
