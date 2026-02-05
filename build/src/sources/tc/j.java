package tc;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import java.io.EOFException;
import ne.h0;
import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50573a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    @Override // tc.b0
    public int c(le.j jVar, int i10, boolean z10, int i11) {
        int read = jVar.read(this.f50573a, 0, Math.min(this.f50573a.length, i10));
        if (read == -1) {
            if (z10) {
                return -1;
            }
            throw new EOFException();
        }
        return read;
    }

    @Override // tc.b0
    public void e(h0 h0Var, int i10, int i11) {
        h0Var.V(i10);
    }

    @Override // tc.b0
    public void b(Format format) {
    }

    @Override // tc.b0
    public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
    }
}
