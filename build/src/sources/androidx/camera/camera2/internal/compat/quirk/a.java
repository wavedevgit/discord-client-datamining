package androidx.camera.camera2.internal.compat.quirk;

import a0.a2;
import a0.d2;
import a0.z1;
import java.util.ArrayList;
import r.a0;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {
    public static d2 a(String str, a0 a0Var) {
        z1 a10 = a2.b().a();
        ArrayList arrayList = new ArrayList();
        if (a10.a(AeFpsRangeLegacyQuirk.class, AeFpsRangeLegacyQuirk.e(a0Var))) {
            arrayList.add(new AeFpsRangeLegacyQuirk(a0Var));
        }
        if (a10.a(AspectRatioLegacyApi21Quirk.class, AspectRatioLegacyApi21Quirk.d(a0Var))) {
            arrayList.add(new AspectRatioLegacyApi21Quirk());
        }
        if (a10.a(JpegHalCorruptImageQuirk.class, JpegHalCorruptImageQuirk.c(a0Var))) {
            arrayList.add(new JpegHalCorruptImageQuirk());
        }
        if (a10.a(JpegCaptureDownsizingQuirk.class, JpegCaptureDownsizingQuirk.c(a0Var))) {
            arrayList.add(new JpegCaptureDownsizingQuirk());
        }
        if (a10.a(CamcorderProfileResolutionQuirk.class, CamcorderProfileResolutionQuirk.c(a0Var))) {
            arrayList.add(new CamcorderProfileResolutionQuirk(a0Var));
        }
        if (a10.a(CaptureNoResponseQuirk.class, CaptureNoResponseQuirk.c(a0Var))) {
            arrayList.add(new CaptureNoResponseQuirk());
        }
        if (a10.a(LegacyCameraOutputConfigNullPointerQuirk.class, LegacyCameraOutputConfigNullPointerQuirk.c(a0Var))) {
            arrayList.add(new LegacyCameraOutputConfigNullPointerQuirk());
        }
        if (a10.a(LegacyCameraSurfaceCleanupQuirk.class, LegacyCameraSurfaceCleanupQuirk.d(a0Var))) {
            arrayList.add(new LegacyCameraSurfaceCleanupQuirk());
        }
        if (a10.a(ImageCaptureWashedOutImageQuirk.class, ImageCaptureWashedOutImageQuirk.c(a0Var))) {
            arrayList.add(new ImageCaptureWashedOutImageQuirk());
        }
        if (a10.a(CameraNoResponseWhenEnablingFlashQuirk.class, CameraNoResponseWhenEnablingFlashQuirk.c(a0Var))) {
            arrayList.add(new CameraNoResponseWhenEnablingFlashQuirk());
        }
        if (a10.a(YuvImageOnePixelShiftQuirk.class, YuvImageOnePixelShiftQuirk.i(a0Var))) {
            arrayList.add(new YuvImageOnePixelShiftQuirk());
        }
        if (a10.a(FlashTooSlowQuirk.class, FlashTooSlowQuirk.d(a0Var))) {
            arrayList.add(new FlashTooSlowQuirk());
        }
        if (a10.a(AfRegionFlipHorizontallyQuirk.class, AfRegionFlipHorizontallyQuirk.c(a0Var))) {
            arrayList.add(new AfRegionFlipHorizontallyQuirk());
        }
        if (a10.a(ConfigureSurfaceToSecondarySessionFailQuirk.class, ConfigureSurfaceToSecondarySessionFailQuirk.c(a0Var))) {
            arrayList.add(new ConfigureSurfaceToSecondarySessionFailQuirk());
        }
        if (a10.a(PreviewOrientationIncorrectQuirk.class, PreviewOrientationIncorrectQuirk.c(a0Var))) {
            arrayList.add(new PreviewOrientationIncorrectQuirk());
        }
        if (a10.a(CaptureSessionStuckQuirk.class, CaptureSessionStuckQuirk.c(a0Var))) {
            arrayList.add(new CaptureSessionStuckQuirk());
        }
        if (a10.a(ImageCaptureFlashNotFireQuirk.class, ImageCaptureFlashNotFireQuirk.c(a0Var))) {
            arrayList.add(new ImageCaptureFlashNotFireQuirk());
        }
        if (a10.a(ImageCaptureWithFlashUnderexposureQuirk.class, ImageCaptureWithFlashUnderexposureQuirk.c(a0Var))) {
            arrayList.add(new ImageCaptureWithFlashUnderexposureQuirk());
        }
        if (a10.a(ImageCaptureFailWithAutoFlashQuirk.class, ImageCaptureFailWithAutoFlashQuirk.c(a0Var))) {
            arrayList.add(new ImageCaptureFailWithAutoFlashQuirk());
        }
        if (a10.a(IncorrectCaptureStateQuirk.class, IncorrectCaptureStateQuirk.c(a0Var))) {
            arrayList.add(new IncorrectCaptureStateQuirk());
        }
        if (a10.a(TorchFlashRequiredFor3aUpdateQuirk.class, TorchFlashRequiredFor3aUpdateQuirk.h(a0Var))) {
            arrayList.add(new TorchFlashRequiredFor3aUpdateQuirk(a0Var));
        }
        if (a10.a(PreviewStretchWhenVideoCaptureIsBoundQuirk.class, PreviewStretchWhenVideoCaptureIsBoundQuirk.i())) {
            arrayList.add(new PreviewStretchWhenVideoCaptureIsBoundQuirk());
        }
        if (a10.a(PreviewDelayWhenVideoCaptureIsBoundQuirk.class, PreviewDelayWhenVideoCaptureIsBoundQuirk.c())) {
            arrayList.add(new PreviewDelayWhenVideoCaptureIsBoundQuirk());
        }
        if (a10.a(ImageCaptureFailedWhenVideoCaptureIsBoundQuirk.class, ImageCaptureFailedWhenVideoCaptureIsBoundQuirk.j())) {
            arrayList.add(new ImageCaptureFailedWhenVideoCaptureIsBoundQuirk());
        }
        if (a10.a(TemporalNoiseQuirk.class, TemporalNoiseQuirk.d(a0Var))) {
            arrayList.add(new TemporalNoiseQuirk());
        }
        if (a10.a(ImageCaptureFailedForVideoSnapshotQuirk.class, ImageCaptureFailedForVideoSnapshotQuirk.e())) {
            arrayList.add(new ImageCaptureFailedForVideoSnapshotQuirk());
        }
        if (a10.a(AbnormalStreamWhenImageAnalysisBindWithTemplateRecordQuirk.class, AbnormalStreamWhenImageAnalysisBindWithTemplateRecordQuirk.d())) {
            arrayList.add(new AbnormalStreamWhenImageAnalysisBindWithTemplateRecordQuirk());
        }
        d2 d2Var = new d2(arrayList);
        y0.a("CameraQuirks", "camera2 CameraQuirks = " + d2.d(d2Var));
        return d2Var;
    }
}
