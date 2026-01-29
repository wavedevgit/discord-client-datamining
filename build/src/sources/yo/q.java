package yo;

import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
import yo.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements o.a {

    /* renamed from: a  reason: collision with root package name */
    private final p f54912a;

    q(p pVar) {
        this.f54912a = pVar;
    }

    public static tq.h b(p pVar) {
        return tq.e.a(new q(pVar));
    }

    @Override // yo.o.a
    public o a(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return this.f54912a.b(str, bVar, mVar, list, uiStepStyle, num);
    }
}
