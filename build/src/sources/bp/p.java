package bp;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f6719a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f6720b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f6721c;

    public p(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f6719a = hVar;
        this.f6720b = hVar2;
        this.f6721c = hVar3;
    }

    public static p a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new p(hVar, hVar2, hVar3);
    }

    public static o c(ActivityResultLauncher activityResultLauncher, Context context, fp.c cVar, String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return new o(activityResultLauncher, context, cVar, str, bVar, mVar, list, uiStepStyle, num);
    }

    public o b(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return c((ActivityResultLauncher) this.f6719a.get(), (Context) this.f6720b.get(), (fp.c) this.f6721c.get(), str, bVar, mVar, list, uiStepStyle, num);
    }
}
