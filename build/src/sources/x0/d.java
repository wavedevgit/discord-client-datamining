package x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f53605a;

    /* renamed from: b  reason: collision with root package name */
    private final long[] f53606b;

    /* renamed from: c  reason: collision with root package name */
    private final Object[] f53607c;

    public d(int i10, long[] jArr, Object[] objArr) {
        this.f53605a = i10;
        this.f53606b = jArr;
        this.f53607c = objArr;
    }

    private final int a(long j10) {
        int i10 = this.f53605a - 1;
        if (i10 != -1) {
            int i11 = 0;
            if (i10 != 0) {
                while (i11 <= i10) {
                    int i12 = (i11 + i10) >>> 1;
                    int i13 = ((this.f53606b[i12] - j10) > 0L ? 1 : ((this.f53606b[i12] - j10) == 0L ? 0 : -1));
                    if (i13 < 0) {
                        i11 = i12 + 1;
                    } else if (i13 > 0) {
                        i10 = i12 - 1;
                    } else {
                        return i12;
                    }
                }
                return -(i11 + 1);
            }
            long j11 = this.f53606b[0];
            if (j11 == j10) {
                return 0;
            }
            if (j11 > j10) {
                return -2;
            }
        }
        return -1;
    }

    public final Object b(long j10) {
        int a10 = a(j10);
        if (a10 >= 0) {
            return this.f53607c[a10];
        }
        return null;
    }
}
