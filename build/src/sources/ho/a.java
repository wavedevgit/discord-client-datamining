package ho;

import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import ho.c4;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final RemoteImage a(NextStep.GovernmentId.AssetConfig.CapturePage capturePage, oo.e idClass, c4.e side) {
        Intrinsics.checkNotNullParameter(capturePage, "<this>");
        Intrinsics.checkNotNullParameter(idClass, "idClass");
        Intrinsics.checkNotNullParameter(side, "side");
        if (idClass == oo.e.f44110u && side == c4.e.f26026o) {
            RemoteImage passportFrontPictograph = capturePage.getPassportFrontPictograph();
            if (passportFrontPictograph == null) {
                return capturePage.getIdFrontPictograph();
            }
            return passportFrontPictograph;
        } else if (side == c4.e.f26026o) {
            return capturePage.getIdFrontPictograph();
        } else {
            if (side == c4.e.f26027p) {
                return capturePage.getIdBackPictograph();
            }
            if (side == c4.e.f26030s) {
                return capturePage.getPassportSignaturePictograph();
            }
            if (side == c4.e.f26029r) {
                return capturePage.getBarcodePdf417Pictograph();
            }
            return null;
        }
    }
}
