package zc;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ne.h0;
import tc.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: a  reason: collision with root package name */
    private final h0 f56232a = new h0(8);

    /* renamed from: b  reason: collision with root package name */
    private int f56233b;

    private long a(l lVar) {
        int i10 = 0;
        lVar.n(this.f56232a.e(), 0, 1);
        int i11 = this.f56232a.e()[0] & 255;
        if (i11 == 0) {
            return Long.MIN_VALUE;
        }
        int i12 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        int i13 = 0;
        while ((i11 & i12) == 0) {
            i12 >>= 1;
            i13++;
        }
        int i14 = i11 & (~i12);
        lVar.n(this.f56232a.e(), 1, i13);
        while (i10 < i13) {
            i10++;
            i14 = (this.f56232a.e()[i10] & 255) + (i14 << 8);
        }
        this.f56233b += i13 + 1;
        return i14;
    }

    public boolean b(l lVar) {
        long a10;
        int i10;
        long length = lVar.getLength();
        int i11 = (length > (-1L) ? 1 : (length == (-1L) ? 0 : -1));
        long j10 = 1024;
        if (i11 != 0 && length <= 1024) {
            j10 = length;
        }
        int i12 = (int) j10;
        lVar.n(this.f56232a.e(), 0, 4);
        long J = this.f56232a.J();
        this.f56233b = 4;
        while (J != 440786851) {
            int i13 = this.f56233b + 1;
            this.f56233b = i13;
            if (i13 == i12) {
                return false;
            }
            lVar.n(this.f56232a.e(), 0, 1);
            J = ((J << 8) & (-256)) | (this.f56232a.e()[0] & 255);
        }
        long a11 = a(lVar);
        long j11 = this.f56233b;
        if (a11 != Long.MIN_VALUE && (i11 == 0 || j11 + a11 < length)) {
            while (true) {
                int i14 = this.f56233b;
                long j12 = j11 + a11;
                if (i14 < j12) {
                    if (a(lVar) != Long.MIN_VALUE && (a(lVar)) >= 0 && a10 <= 2147483647L) {
                        if (i10 != 0) {
                            int i15 = (int) a10;
                            lVar.h(i15);
                            this.f56233b += i15;
                        }
                    }
                } else if (i14 == j12) {
                    return true;
                }
            }
        }
        return false;
    }
}
