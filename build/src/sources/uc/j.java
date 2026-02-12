package uc;

import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import java.io.EOFException;
import oe.h0;
import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50685a = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];

    @Override // uc.b0
    public int b(me.j jVar, int i10, boolean z10, int i11) {
        int read = jVar.read(this.f50685a, 0, Math.min(this.f50685a.length, i10));
        if (read == -1) {
            if (z10) {
                return -1;
            }
            throw new EOFException();
        }
        return read;
    }

    @Override // uc.b0
    public void d(h0 h0Var, int i10, int i11) {
        h0Var.V(i10);
    }

    @Override // uc.b0
    public void c(Format format) {
    }

    @Override // uc.b0
    public void a(long j10, int i10, int i11, int i12, b0.a aVar) {
    }
}
