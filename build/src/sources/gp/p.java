package gp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f25548a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f25549b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f25550c;

    public p(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f25548a = hVar;
        this.f25549b = hVar2;
        this.f25550c = hVar3;
    }

    public static p a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new p(hVar, hVar2, hVar3);
    }

    public static o c(ActivityResultLauncher activityResultLauncher, Context context, kp.c cVar, String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return new o(activityResultLauncher, context, cVar, str, bVar, mVar, list, uiStepStyle, num);
    }

    public o b(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return c((ActivityResultLauncher) this.f25548a.get(), (Context) this.f25549b.get(), (kp.c) this.f25550c.get(), str, bVar, mVar, list, uiStepStyle, num);
    }
}
