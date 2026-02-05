package ep;

import android.content.Context;
import androidx.activity.result.ActivityResultLauncher;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f21745a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f21746b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f21747c;

    public p(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f21745a = hVar;
        this.f21746b = hVar2;
        this.f21747c = hVar3;
    }

    public static p a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new p(hVar, hVar2, hVar3);
    }

    public static o c(ActivityResultLauncher activityResultLauncher, Context context, ip.c cVar, String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return new o(activityResultLauncher, context, cVar, str, bVar, mVar, list, uiStepStyle, num);
    }

    public o b(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return c((ActivityResultLauncher) this.f21745a.get(), (Context) this.f21746b.get(), (ip.c) this.f21747c.get(), str, bVar, mVar, list, uiStepStyle, num);
    }
}
