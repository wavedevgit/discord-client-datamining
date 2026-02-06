package nk;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: h  reason: collision with root package name */
    public static final a f40873h = new a(4201, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f40874i = new a(1033, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 1);

    /* renamed from: j  reason: collision with root package name */
    public static final a f40875j;

    /* renamed from: k  reason: collision with root package name */
    public static final a f40876k;

    /* renamed from: l  reason: collision with root package name */
    public static final a f40877l;

    /* renamed from: m  reason: collision with root package name */
    public static final a f40878m;

    /* renamed from: n  reason: collision with root package name */
    public static final a f40879n;

    /* renamed from: o  reason: collision with root package name */
    public static final a f40880o;

    /* renamed from: a  reason: collision with root package name */
    private final int[] f40881a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f40882b;

    /* renamed from: c  reason: collision with root package name */
    private final b f40883c;

    /* renamed from: d  reason: collision with root package name */
    private final b f40884d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40885e;

    /* renamed from: f  reason: collision with root package name */
    private final int f40886f;

    /* renamed from: g  reason: collision with root package name */
    private final int f40887g;

    static {
        a aVar = new a(67, 64, 1);
        f40875j = aVar;
        f40876k = new a(19, 16, 1);
        f40877l = new a(285, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 0);
        a aVar2 = new a(301, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 1);
        f40878m = aVar2;
        f40879n = aVar2;
        f40880o = aVar;
    }

    public a(int i10, int i11, int i12) {
        this.f40886f = i10;
        this.f40885e = i11;
        this.f40887g = i12;
        this.f40881a = new int[i11];
        this.f40882b = new int[i11];
        int i13 = 1;
        for (int i14 = 0; i14 < i11; i14++) {
            this.f40881a[i14] = i13;
            i13 *= 2;
            if (i13 >= i11) {
                i13 = (i13 ^ i10) & (i11 - 1);
            }
        }
        for (int i15 = 0; i15 < i11 - 1; i15++) {
            this.f40882b[this.f40881a[i15]] = i15;
        }
        this.f40883c = new b(this, new int[]{0});
        this.f40884d = new b(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(int i10, int i11) {
        return i10 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f40883c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new b(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f40881a[i10];
    }

    public int d() {
        return this.f40887g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b e() {
        return this.f40884d;
    }

    public int f() {
        return this.f40885e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b g() {
        return this.f40883c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f40881a[(this.f40885e - this.f40882b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10) {
        if (i10 != 0) {
            return this.f40882b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f40881a;
            int[] iArr2 = this.f40882b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f40885e - 1)];
        }
        return 0;
    }

    public String toString() {
        return "GF(0x" + Integer.toHexString(this.f40886f) + ',' + this.f40885e + ')';
    }
}
