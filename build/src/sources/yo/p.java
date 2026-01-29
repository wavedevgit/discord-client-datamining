package yo;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f54909a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f54910b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f54911c;

    public p(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f54909a = hVar;
        this.f54910b = hVar2;
        this.f54911c = hVar3;
    }

    public static p a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new p(hVar, hVar2, hVar3);
    }

    public static o c(ActivityResultLauncher activityResultLauncher, Context context, cp.c cVar, String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return new o(activityResultLauncher, context, cVar, str, bVar, mVar, list, uiStepStyle, num);
    }

    public o b(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return c((ActivityResultLauncher) this.f54909a.get(), (Context) this.f54910b.get(), (cp.c) this.f54911c.get(), str, bVar, mVar, list, uiStepStyle, num);
    }
}
