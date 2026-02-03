package zo;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f56005a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f56006b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f56007c;

    public p(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f56005a = hVar;
        this.f56006b = hVar2;
        this.f56007c = hVar3;
    }

    public static p a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new p(hVar, hVar2, hVar3);
    }

    public static o c(ActivityResultLauncher activityResultLauncher, Context context, dp.c cVar, String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return new o(activityResultLauncher, context, cVar, str, bVar, mVar, list, uiStepStyle, num);
    }

    public o b(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return c((ActivityResultLauncher) this.f56005a.get(), (Context) this.f56006b.get(), (dp.c) this.f56007c.get(), str, bVar, mVar, list, uiStepStyle, num);
    }
}
