package qp;

import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import java.util.List;
import qp.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements o.a {

    /* renamed from: a  reason: collision with root package name */
    private final p f45604a;

    q(p pVar) {
        this.f45604a = pVar;
    }

    public static lr.h b(p pVar) {
        return lr.e.a(new q(pVar));
    }

    @Override // qp.o.a
    public o a(String str, b bVar, m mVar, List list, StepStyles.UiStepStyle uiStepStyle, Integer num) {
        return this.f45604a.b(str, bVar, mVar, list, uiStepStyle, num);
    }
}
