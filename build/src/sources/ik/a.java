package ik;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: h  reason: collision with root package name */
    public static final a f28442h = new a(4201, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 1);

    /* renamed from: i  reason: collision with root package name */
    public static final a f28443i = new a(1033, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, 1);

    /* renamed from: j  reason: collision with root package name */
    public static final a f28444j;

    /* renamed from: k  reason: collision with root package name */
    public static final a f28445k;

    /* renamed from: l  reason: collision with root package name */
    public static final a f28446l;

    /* renamed from: m  reason: collision with root package name */
    public static final a f28447m;

    /* renamed from: n  reason: collision with root package name */
    public static final a f28448n;

    /* renamed from: o  reason: collision with root package name */
    public static final a f28449o;

    /* renamed from: a  reason: collision with root package name */
    private final int[] f28450a;

    /* renamed from: b  reason: collision with root package name */
    private final int[] f28451b;

    /* renamed from: c  reason: collision with root package name */
    private final b f28452c;

    /* renamed from: d  reason: collision with root package name */
    private final b f28453d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28454e;

    /* renamed from: f  reason: collision with root package name */
    private final int f28455f;

    /* renamed from: g  reason: collision with root package name */
    private final int f28456g;

    static {
        a aVar = new a(67, 64, 1);
        f28444j = aVar;
        f28445k = new a(19, 16, 1);
        f28446l = new a(285, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 0);
        a aVar2 = new a(301, IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, 1);
        f28447m = aVar2;
        f28448n = aVar2;
        f28449o = aVar;
    }

    public a(int i10, int i11, int i12) {
        this.f28455f = i10;
        this.f28454e = i11;
        this.f28456g = i12;
        this.f28450a = new int[i11];
        this.f28451b = new int[i11];
        int i13 = 1;
        for (int i14 = 0; i14 < i11; i14++) {
            this.f28450a[i14] = i13;
            i13 *= 2;
            if (i13 >= i11) {
                i13 = (i13 ^ i10) & (i11 - 1);
            }
        }
        for (int i15 = 0; i15 < i11 - 1; i15++) {
            this.f28451b[this.f28450a[i15]] = i15;
        }
        this.f28452c = new b(this, new int[]{0});
        this.f28453d = new b(this, new int[]{1});
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int a(int i10, int i11) {
        return i10 ^ i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b b(int i10, int i11) {
        if (i10 >= 0) {
            if (i11 == 0) {
                return this.f28452c;
            }
            int[] iArr = new int[i10 + 1];
            iArr[0] = i11;
            return new b(this, iArr);
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        return this.f28450a[i10];
    }

    public int d() {
        return this.f28456g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b e() {
        return this.f28453d;
    }

    public int f() {
        return this.f28454e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b g() {
        return this.f28452c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int h(int i10) {
        if (i10 != 0) {
            return this.f28450a[(this.f28454e - this.f28451b[i10]) - 1];
        }
        throw new ArithmeticException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int i(int i10) {
        if (i10 != 0) {
            return this.f28451b[i10];
        }
        throw new IllegalArgumentException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int j(int i10, int i11) {
        if (i10 != 0 && i11 != 0) {
            int[] iArr = this.f28450a;
            int[] iArr2 = this.f28451b;
            return iArr[(iArr2[i10] + iArr2[i11]) % (this.f28454e - 1)];
        }
        return 0;
    }

    public String toString() {
        return "GF(0x" + Integer.toHexString(this.f28455f) + ',' + this.f28454e + ')';
    }
}
