package androidx.camera.camera2.internal.compat.quirk;

import a0.z1;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static List a(z1 z1Var) {
        ArrayList arrayList = new ArrayList();
        if (z1Var.a(ImageCapturePixelHDRPlusQuirk.class, ImageCapturePixelHDRPlusQuirk.c())) {
            arrayList.add(new ImageCapturePixelHDRPlusQuirk());
        }
        if (z1Var.a(ExtraCroppingQuirk.class, ExtraCroppingQuirk.e())) {
            arrayList.add(new ExtraCroppingQuirk());
        }
        if (z1Var.a(Nexus4AndroidLTargetAspectRatioQuirk.class, Nexus4AndroidLTargetAspectRatioQuirk.d())) {
            arrayList.add(new Nexus4AndroidLTargetAspectRatioQuirk());
        }
        if (z1Var.a(ExcludedSupportedSizesQuirk.class, ExcludedSupportedSizesQuirk.p())) {
            arrayList.add(new ExcludedSupportedSizesQuirk());
        }
        if (z1Var.a(CrashWhenTakingPhotoWithAutoFlashAEModeQuirk.class, CrashWhenTakingPhotoWithAutoFlashAEModeQuirk.c())) {
            arrayList.add(new CrashWhenTakingPhotoWithAutoFlashAEModeQuirk());
        }
        if (z1Var.a(PreviewPixelHDRnetQuirk.class, PreviewPixelHDRnetQuirk.c())) {
            arrayList.add(new PreviewPixelHDRnetQuirk());
        }
        if (z1Var.a(StillCaptureFlashStopRepeatingQuirk.class, StillCaptureFlashStopRepeatingQuirk.c())) {
            arrayList.add(new StillCaptureFlashStopRepeatingQuirk());
        }
        if (z1Var.a(ExtraSupportedSurfaceCombinationsQuirk.class, ExtraSupportedSurfaceCombinationsQuirk.h())) {
            arrayList.add(new ExtraSupportedSurfaceCombinationsQuirk());
        }
        if (z1Var.a(FlashAvailabilityBufferUnderflowQuirk.class, FlashAvailabilityBufferUnderflowQuirk.d())) {
            arrayList.add(new FlashAvailabilityBufferUnderflowQuirk());
        }
        if (z1Var.a(RepeatingStreamConstraintForVideoRecordingQuirk.class, RepeatingStreamConstraintForVideoRecordingQuirk.d())) {
            arrayList.add(new RepeatingStreamConstraintForVideoRecordingQuirk());
        }
        if (z1Var.a(TextureViewIsClosedQuirk.class, TextureViewIsClosedQuirk.c())) {
            arrayList.add(new TextureViewIsClosedQuirk());
        }
        if (z1Var.a(CaptureSessionOnClosedNotCalledQuirk.class, CaptureSessionOnClosedNotCalledQuirk.c())) {
            arrayList.add(new CaptureSessionOnClosedNotCalledQuirk());
        }
        if (z1Var.a(TorchIsClosedAfterImageCapturingQuirk.class, TorchIsClosedAfterImageCapturingQuirk.c())) {
            arrayList.add(new TorchIsClosedAfterImageCapturingQuirk());
        }
        if (z1Var.a(ZslDisablerQuirk.class, ZslDisablerQuirk.f())) {
            arrayList.add(new ZslDisablerQuirk());
        }
        if (z1Var.a(ExtraSupportedOutputSizeQuirk.class, ExtraSupportedOutputSizeQuirk.f())) {
            arrayList.add(new ExtraSupportedOutputSizeQuirk());
        }
        if (z1Var.a(InvalidVideoProfilesQuirk.class, InvalidVideoProfilesQuirk.p())) {
            arrayList.add(new InvalidVideoProfilesQuirk());
        }
        if (z1Var.a(Preview3AThreadCrashQuirk.class, Preview3AThreadCrashQuirk.c())) {
            arrayList.add(new Preview3AThreadCrashQuirk());
        }
        if (z1Var.a(SmallDisplaySizeQuirk.class, SmallDisplaySizeQuirk.d())) {
            arrayList.add(new SmallDisplaySizeQuirk());
        }
        if (z1Var.a(CaptureSessionShouldUseMrirQuirk.class, CaptureSessionShouldUseMrirQuirk.c())) {
            arrayList.add(new CaptureSessionShouldUseMrirQuirk());
        }
        return arrayList;
    }
}
