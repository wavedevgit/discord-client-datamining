package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f50842a;

    /* renamed from: b  reason: collision with root package name */
    public final int f50843b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f50844c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50845d;

    /* renamed from: e  reason: collision with root package name */
    public final int f50846e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f50847f;

    /* renamed from: g  reason: collision with root package name */
    public final int f50848g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f50843b = i10;
        this.f50842a = i11;
        this.f50844c = sparseIntArray;
        this.f50845d = i12;
        this.f50846e = i13;
        this.f50848g = i14;
    }
}
