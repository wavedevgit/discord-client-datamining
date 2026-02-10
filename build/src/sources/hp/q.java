package hp;

import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import hp.o;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements o.a {

    /* renamed from: a  reason: collision with root package name */
    private final p f26462a;

    q(p pVar) {
        this.f26462a = pVar;
    }

    public static cr.h b(p pVar) {
        return cr.e.a(new q(pVar));
    }

    @Override // hp.o.a
    public o a(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return this.f26462a.b(str, bVar, mVar, list, uiStepStyle, num);
    }
}
