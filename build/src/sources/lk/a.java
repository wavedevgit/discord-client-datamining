package lk;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: h  reason: collision with root package name */
    public static final a f36917h = new a(4201, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f36918i = new a(1033, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 1);

    /* renamed from: j  reason: collision with root package name */
    public static final a f36919j;

    /* renamed from: k  reason: collision with root package name */
    public static final a f36920k;

    /* renamed from: l  reason: collision with root package name */
    public static final a f36921l;

    /* renamed from: m  reason: collision with root package name */
    public static final a f36922m;

    /* renamed from: n  reason: collision with root package name */
    public static final a f36923n;

    /* renamed from: o  reason: collision with root package name */
    public static final a f36924o;

    /* renamed from: a  reason: collision with root package name */
    private final int[] f36925a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f36926b;

    /* renamed from: c  reason: collision with root package name */
    private final b f36927c;

    /* renamed from: d  reason: collision with root package name */
    private final b f36928d;

    /* renamed from: e  reason: collision with root package name */
    private final int f36929e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36930f;

    /* renamed from: g  reason: collision with root package name */
    private final int f36931g;

    static {
        a aVar = new a(67, 64, 1);
        f36919j = aVar;
        f36920k = new a(19, 16, 1);
        f36921l = new a(285, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 0);
        a aVar2 = new a(301, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 1);
        f36922m = aVar2;
        f36923n = aVar2;
        f36924o = aVar;
    }

    public a(int i10, int i11, int i12) {
        this.f36930f = i10;
        this.f36929e = i11;
        this.f36931g = i12;
        this.f36925a = new int[i11];
        this.f36926b = new int[i11];
        int i13 = 1;
        for (int i14 = 0; i14 < i11; i14++) {
            this.f36925a[i14] = i13;
            i13 *= 2;
            if (i13 >= i11) {
                i13 = (i13 ^ i10) & (i11 - 1);
            }
        }
        for (int i15 = 0; i15 < i11 - 1; i15++) {
            this.f36926b[this.f36925a[i15]] = i15;
        }
        this.f36927c = new b(this, new int[]{0});
        this.f36928d = new b(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(int i10, int i11) {
        return i10 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f36927c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new b(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f36925a[i10];
    }

    public int d() {
        return this.f36931g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b e() {
        return this.f36928d;
    }

    public int f() {
        return this.f36929e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b g() {
        return this.f36927c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f36925a[(this.f36929e - this.f36926b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10) {
        if (i10 != 0) {
            return this.f36926b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f36925a;
            int[] iArr2 = this.f36926b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f36929e - 1)];
        }
        return 0;
    }

    public String toString() {
        return "GF(0x" + Integer.toHexString(this.f36930f) + ',' + this.f36929e + ')';
    }
}
