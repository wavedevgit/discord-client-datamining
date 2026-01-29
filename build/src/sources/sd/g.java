package sd;

import com.google.android.exoplayer2.Format;
import java.util.List;
import mc.t1;
import tc.b0;
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

    boolean a(tc.l lVar);

    tc.c b();

    Format[] d();

    void e(b bVar, long j10, long j11);

    void release();
}
