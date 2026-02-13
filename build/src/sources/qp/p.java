package qp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f46169a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f46170b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f46171c;

    public p(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f46169a = hVar;
        this.f46170b = hVar2;
        this.f46171c = hVar3;
    }

    public static p a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new p(hVar, hVar2, hVar3);
    }

    public static o c(ActivityResultLauncher activityResultLauncher, Context context, up.c cVar, String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return new o(activityResultLauncher, context, cVar, str, bVar, mVar, list, uiStepStyle, num);
    }

    public o b(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return c((ActivityResultLauncher) this.f46169a.get(), (Context) this.f46170b.get(), (up.c) this.f46171c.get(), str, bVar, mVar, list, uiStepStyle, num);
    }
}
