package hp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f26459a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f26460b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f26461c;

    public p(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f26459a = hVar;
        this.f26460b = hVar2;
        this.f26461c = hVar3;
    }

    public static p a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new p(hVar, hVar2, hVar3);
    }

    public static o c(ActivityResultLauncher activityResultLauncher, Context context, lp.c cVar, String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return new o(activityResultLauncher, context, cVar, str, bVar, mVar, list, uiStepStyle, num);
    }

    public o b(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return c((ActivityResultLauncher) this.f26459a.get(), (Context) this.f26460b.get(), (lp.c) this.f26461c.get(), str, bVar, mVar, list, uiStepStyle, num);
    }
}
