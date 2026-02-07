package ju;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m {

    /* renamed from: c  reason: collision with root package name */
    public static final a f31348c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private int f31349a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f31350b = new int[10];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final int a(int i10) {
        return this.f31350b[i10];
    }

    public final int b() {
        if ((this.f31349a & 2) != 0) {
            return this.f31350b[1];
        }
        return -1;
    }

    public final int c() {
        if ((this.f31349a & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            return this.f31350b[7];
        }
        return 65535;
    }

    public final int d() {
        if ((this.f31349a & 16) != 0) {
            return this.f31350b[4];
        }
        return Integer.MAX_VALUE;
    }

    public final int e(int i10) {
        if ((this.f31349a & 32) != 0) {
            return this.f31350b[5];
        }
        return i10;
    }

    public final boolean f(int i10) {
        if (((1 << i10) & this.f31349a) != 0) {
            return true;
        }
        return false;
    }

    public final void g(m other) {
        Intrinsics.checkNotNullParameter(other, "other");
        for (int i10 = 0; i10 < 10; i10++) {
            if (other.f(i10)) {
                h(i10, other.a(i10));
            }
        }
    }

    public final m h(int i10, int i11) {
        if (i10 >= 0) {
            int[] iArr = this.f31350b;
            if (i10 < iArr.length) {
                this.f31349a = (1 << i10) | this.f31349a;
                iArr[i10] = i11;
            }
        }
        return this;
    }

    public final int i() {
        return Integer.bitCount(this.f31349a);
    }
}
