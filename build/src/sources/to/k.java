package to;

import androidx.lifecycle.b0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f50201a;

    public k(wq.h hVar) {
        this.f50201a = hVar;
    }

    public static k a(wq.h hVar) {
        return new k(hVar);
    }

    public static com.withpersona.sdk2.inquiry.internal.fallbackmode.i c(List list, String str, b0 b0Var) {
        return new com.withpersona.sdk2.inquiry.internal.fallbackmode.i(list, str, b0Var);
    }

    public com.withpersona.sdk2.inquiry.internal.fallbackmode.i b(List list, String str) {
        return c(list, str, (b0) this.f50201a.get());
    }
}
