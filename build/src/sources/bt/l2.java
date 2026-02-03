package bt;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l2 extends d2 {

    /* renamed from: a  reason: collision with root package name */
    private short[] f7650a;

    /* renamed from: b  reason: collision with root package name */
    private int f7651b;

    public l2(short[] bufferWithData) {
        Intrinsics.checkNotNullParameter(bufferWithData, "bufferWithData");
        this.f7650a = bufferWithData;
        this.f7651b = bufferWithData.length;
        b(10);
    }

    @Override // bt.d2
    public void b(int i10) {
        short[] sArr = this.f7650a;
        if (sArr.length < i10) {
            short[] copyOf = Arrays.copyOf(sArr, kotlin.ranges.d.d(i10, sArr.length * 2));
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            this.f7650a = copyOf;
        }
    }

    @Override // bt.d2
    public int d() {
        return this.f7651b;
    }

    public final void e(short s10) {
        d2.c(this, 0, 1, null);
        short[] sArr = this.f7650a;
        int d10 = d();
        this.f7651b = d10 + 1;
        sArr[d10] = s10;
    }

    @Override // bt.d2
    /* renamed from: f */
    public short[] a() {
        short[] copyOf = Arrays.copyOf(this.f7650a, d());
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }
}
