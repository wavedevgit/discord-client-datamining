package ep;

import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import ep.o;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements o.a {

    /* renamed from: a  reason: collision with root package name */
    private final p f21748a;

    q(p pVar) {
        this.f21748a = pVar;
    }

    public static zq.h b(p pVar) {
        return zq.e.a(new q(pVar));
    }

    @Override // ep.o.a
    public o a(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return this.f21748a.b(str, bVar, mVar, list, uiStepStyle, num);
    }
}
