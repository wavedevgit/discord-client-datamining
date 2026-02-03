package le;

import com.google.android.exoplayer2.upstream.DataSource;
import java.util.ArrayList;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f37320a;

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f37321b = new ArrayList(1);

    /* renamed from: c  reason: collision with root package name */
    private int f37322c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f37323d;

    /* JADX INFO: Access modifiers changed from: protected */
    public f(boolean z10) {
        this.f37320a = z10;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public final void j(c0 c0Var) {
        ne.a.e(c0Var);
        if (!this.f37321b.contains(c0Var)) {
            this.f37321b.add(c0Var);
            this.f37322c++;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void o(int i10) {
        com.google.android.exoplayer2.upstream.a aVar = (com.google.android.exoplayer2.upstream.a) w0.j(this.f37323d);
        for (int i11 = 0; i11 < this.f37322c; i11++) {
            ((c0) this.f37321b.get(i11)).g(this, aVar, this.f37320a, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void p() {
        com.google.android.exoplayer2.upstream.a aVar = (com.google.android.exoplayer2.upstream.a) w0.j(this.f37323d);
        for (int i10 = 0; i10 < this.f37322c; i10++) {
            ((c0) this.f37321b.get(i10)).d(this, aVar, this.f37320a);
        }
        this.f37323d = null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void q(com.google.android.exoplayer2.upstream.a aVar) {
        for (int i10 = 0; i10 < this.f37322c; i10++) {
            ((c0) this.f37321b.get(i10)).i(this, aVar, this.f37320a);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void r(com.google.android.exoplayer2.upstream.a aVar) {
        this.f37323d = aVar;
        for (int i10 = 0; i10 < this.f37322c; i10++) {
            ((c0) this.f37321b.get(i10)).h(this, aVar, this.f37320a);
        }
    }
}
