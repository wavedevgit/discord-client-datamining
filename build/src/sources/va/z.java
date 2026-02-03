package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f50982a;

    /* renamed from: b  reason: collision with root package name */
    public final int f50983b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f50984c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50985d;

    /* renamed from: e  reason: collision with root package name */
    public final int f50986e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f50987f;

    /* renamed from: g  reason: collision with root package name */
    public final int f50988g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f50983b = i10;
        this.f50982a = i11;
        this.f50984c = sparseIntArray;
        this.f50985d = i12;
        this.f50986e = i13;
        this.f50988g = i14;
    }
}
