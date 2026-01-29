package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class n extends f {

    /* renamed from: j  reason: collision with root package name */
    public final long f48981j;

    public n(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, long j10, long j11, long j12) {
        super(dataSource, aVar, 1, format, i10, obj, j10, j11);
        ne.a.e(format);
        this.f48981j = j12;
    }

    public long g() {
        long j10 = this.f48981j;
        if (j10 == -1) {
            return -1L;
        }
        return j10 + 1;
    }

    public abstract boolean h();
}
