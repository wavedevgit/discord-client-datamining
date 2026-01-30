package ao;

import ao.c4;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final RemoteImage a(NextStep.GovernmentId.AssetConfig.CapturePage capturePage, io.e idClass, c4.e side) {
        Intrinsics.checkNotNullParameter(capturePage, "<this>");
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        if (idClass == io.e.f28672u && side == c4.e.f5836o) {
            RemoteImage passportFrontPictograph = capturePage.getPassportFrontPictograph();
            if (passportFrontPictograph == null) {
                return capturePage.getIdFrontPictograph();
            }
            return passportFrontPictograph;
        } else if (side == c4.e.f5836o) {
            return capturePage.getIdFrontPictograph();
        } else {
            if (side == c4.e.f5837p) {
                return capturePage.getIdBackPictograph();
            }
            if (side == c4.e.f5840s) {
                return capturePage.getPassportSignaturePictograph();
            }
            if (side == c4.e.f5839r) {
                return capturePage.getBarcodePdf417Pictograph();
            }
            return null;
        }
    }
}
