package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.util.ArrayList;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f36157a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f36158b = new ArrayList(1);

    /* renamed from: c  reason: collision with root package name */
    private int f36159c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f36160d;

    /* JADX INFO: Access modifiers changed from: protected */
    public f(boolean z10) {
        this.f36157a = z10;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public final void j(c0 c0Var) {
        ne.a.e(c0Var);
        if (!this.f36158b.contains(c0Var)) {
            this.f36158b.add(c0Var);
            this.f36159c++;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void o(int i10) {
        com.google.android.exoplayer2.upstream.a aVar = (com.google.android.exoplayer2.upstream.a) w0.j(this.f36160d);
        for (int i11 = 0; i11 < this.f36159c; i11++) {
            ((c0) this.f36158b.get(i11)).g(this, aVar, this.f36157a, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void p() {
        com.google.android.exoplayer2.upstream.a aVar = (com.google.android.exoplayer2.upstream.a) w0.j(this.f36160d);
        for (int i10 = 0; i10 < this.f36159c; i10++) {
            ((c0) this.f36158b.get(i10)).d(this, aVar, this.f36157a);
        }
        this.f36160d = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void q(com.google.android.exoplayer2.upstream.a aVar) {
        for (int i10 = 0; i10 < this.f36159c; i10++) {
            ((c0) this.f36158b.get(i10)).i(this, aVar, this.f36157a);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void r(com.google.android.exoplayer2.upstream.a aVar) {
        this.f36160d = aVar;
        for (int i10 = 0; i10 < this.f36159c; i10++) {
            ((c0) this.f36158b.get(i10)).h(this, aVar, this.f36157a);
        }
    }
}
