package fo;

import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {
    /* JADX INFO: Access modifiers changed from: private */
    public static final String b(List list, String str, String str2, String str3) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : list) {
            NextStep.GovernmentId.LocalizationOverride localizationOverride = (NextStep.GovernmentId.LocalizationOverride) obj;
            if (StringsKt.A(localizationOverride.getCountryCode(), str, true) && Intrinsics.areEqual(localizationOverride.getPage(), str3) && (Intrinsics.areEqual(localizationOverride.getIdClass(), str2) || localizationOverride.getIdClass() == null)) {
                if (Intrinsics.areEqual(localizationOverride.getKey(), str2)) {
                    arrayList.add(obj);
                }
            }
        }
        NextStep.GovernmentId.LocalizationOverride localizationOverride2 = (NextStep.GovernmentId.LocalizationOverride) CollectionsKt.firstOrNull(arrayList);
        if (localizationOverride2 != null) {
            return localizationOverride2.getText();
        }
        return null;
    }
}
