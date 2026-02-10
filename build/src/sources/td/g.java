package td;

import com.google.android.exoplayer2.Format;
import java.util.List;
import nc.t1;
import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        g a(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        b0 c(int i10, int i11);
    }

    boolean a(uc.l lVar);

    void b(b bVar, long j10, long j11);

    uc.c d();

    Format[] e();

    void release();
}
