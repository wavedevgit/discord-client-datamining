package gp;

import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import gp.o;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements o.a {

    /* renamed from: a  reason: collision with root package name */
    private final p f25503a;

    q(p pVar) {
        this.f25503a = pVar;
    }

    public static br.h b(p pVar) {
        return br.e.a(new q(pVar));
    }

    @Override // gp.o.a
    public o a(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return this.f25503a.b(str, bVar, mVar, list, uiStepStyle, num);
    }
}
