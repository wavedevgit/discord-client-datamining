package zo;

import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
import zo.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements o.a {

    /* renamed from: a  reason: collision with root package name */
    private final p f56008a;

    q(p pVar) {
        this.f56008a = pVar;
    }

    public static uq.h b(p pVar) {
        return uq.e.a(new q(pVar));
    }

    @Override // zo.o.a
    public o a(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return this.f56008a.b(str, bVar, mVar, list, uiStepStyle, num);
    }
}
