package je;

import java.util.List;
import qd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends b {

    /* renamed from: h  reason: collision with root package name */
    private final int f30880h;

    /* renamed from: i  reason: collision with root package name */
    private final Object f30881i;

    public k(u0 u0Var, int i10, int i11) {
        this(u0Var, i10, i11, 0, null);
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int c() {
        return 0;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public Object h() {
        return this.f30881i;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int r() {
        return this.f30880h;
    }

    public k(u0 u0Var, int i10, int i11, int i12, Object obj) {
        super(u0Var, new int[]{i10}, i11);
        this.f30880h = i12;
        this.f30881i = obj;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public void l(long j10, long j11, long j12, List list, sd.o[] oVarArr) {
    }
}
