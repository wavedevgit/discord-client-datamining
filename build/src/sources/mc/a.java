package mc;

import android.os.Looper;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import java.util.List;
import le.e;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends Player.b, qd.y, e.a, rc.u {
    void B(AnalyticsListener analyticsListener);

    void E(List list, r.b bVar);

    void a(Exception exc);

    void b(String str);

    void c(DecoderCounters decoderCounters);

    void d(String str, long j10, long j11);

    void e(String str);

    void f(String str, long j10, long j11);

    void h(Format format, DecoderReuseEvaluation decoderReuseEvaluation);

    void i(long j10);

    void j(Exception exc);

    void k(DecoderCounters decoderCounters);

    void l(DecoderCounters decoderCounters);

    void m(int i10, long j10);

    void n(Format format, DecoderReuseEvaluation decoderReuseEvaluation);

    void o(Object obj, long j10);

    void p(DecoderCounters decoderCounters);

    void q(Exception exc);

    void r(int i10, long j10, long j11);

    void release();

    void s(long j10, int i10);

    void v();

    void y(Player player, Looper looper);
}
