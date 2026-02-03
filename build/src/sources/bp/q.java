package bp;

import bp.o;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements o.a {

    /* renamed from: a  reason: collision with root package name */
    private final p f6722a;

    q(p pVar) {
        this.f6722a = pVar;
    }

    public static wq.h b(p pVar) {
        return wq.e.a(new q(pVar));
    }

    @Override // bp.o.a
    public o a(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return this.f6722a.b(str, bVar, mVar, list, uiStepStyle, num);
    }
}
