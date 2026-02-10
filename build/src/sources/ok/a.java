package ok;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: h  reason: collision with root package name */
    public static final a f41946h = new a(4201, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f41947i = new a(1033, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 1);

    /* renamed from: j  reason: collision with root package name */
    public static final a f41948j;

    /* renamed from: k  reason: collision with root package name */
    public static final a f41949k;

    /* renamed from: l  reason: collision with root package name */
    public static final a f41950l;

    /* renamed from: m  reason: collision with root package name */
    public static final a f41951m;

    /* renamed from: n  reason: collision with root package name */
    public static final a f41952n;

    /* renamed from: o  reason: collision with root package name */
    public static final a f41953o;

    /* renamed from: a  reason: collision with root package name */
    private final int[] f41954a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f41955b;

    /* renamed from: c  reason: collision with root package name */
    private final b f41956c;

    /* renamed from: d  reason: collision with root package name */
    private final b f41957d;

    /* renamed from: e  reason: collision with root package name */
    private final int f41958e;

    /* renamed from: f  reason: collision with root package name */
    private final int f41959f;

    /* renamed from: g  reason: collision with root package name */
    private final int f41960g;

    static {
        a aVar = new a(67, 64, 1);
        f41948j = aVar;
        f41949k = new a(19, 16, 1);
        f41950l = new a(285, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 0);
        a aVar2 = new a(301, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 1);
        f41951m = aVar2;
        f41952n = aVar2;
        f41953o = aVar;
    }

    public a(int i10, int i11, int i12) {
        this.f41959f = i10;
        this.f41958e = i11;
        this.f41960g = i12;
        this.f41954a = new int[i11];
        this.f41955b = new int[i11];
        int i13 = 1;
        for (int i14 = 0; i14 < i11; i14++) {
            this.f41954a[i14] = i13;
            i13 *= 2;
            if (i13 >= i11) {
                i13 = (i13 ^ i10) & (i11 - 1);
            }
        }
        for (int i15 = 0; i15 < i11 - 1; i15++) {
            this.f41955b[this.f41954a[i15]] = i15;
        }
        this.f41956c = new b(this, new int[]{0});
        this.f41957d = new b(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(int i10, int i11) {
        return i10 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f41956c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new b(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f41954a[i10];
    }

    public int d() {
        return this.f41960g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b e() {
        return this.f41957d;
    }

    public int f() {
        return this.f41958e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b g() {
        return this.f41956c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f41954a[(this.f41958e - this.f41955b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10) {
        if (i10 != 0) {
            return this.f41955b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f41954a;
            int[] iArr2 = this.f41955b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f41958e - 1)];
        }
        return 0;
    }

    public String toString() {
        return "GF(0x" + Integer.toHexString(this.f41959f) + ',' + this.f41958e + ')';
    }
}
