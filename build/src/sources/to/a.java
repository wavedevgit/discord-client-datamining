package to;

import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import kotlin.jvm.internal.Intrinsics;
import to.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final RemoteImage a(NextStep.GovernmentId.AssetConfig.CapturePage capturePage, ap.e idClass, c4.e side) {
        Intrinsics.checkNotNullParameter(capturePage, "<this>");
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        if (idClass == ap.e.f5951u && side == c4.e.f49013o) {
            RemoteImage passportFrontPictograph = capturePage.getPassportFrontPictograph();
            if (passportFrontPictograph == null) {
                return capturePage.getIdFrontPictograph();
            }
            return passportFrontPictograph;
        } else if (side == c4.e.f49013o) {
            return capturePage.getIdFrontPictograph();
        } else {
            if (side == c4.e.f49014p) {
                return capturePage.getIdBackPictograph();
            }
            if (side == c4.e.f49017s) {
                return capturePage.getPassportSignaturePictograph();
            }
            if (side == c4.e.f49016r) {
                return capturePage.getBarcodePdf417Pictograph();
            }
            return null;
        }
    }
}
