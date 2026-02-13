package wa;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f53034a;

    /* renamed from: b  reason: collision with root package name */
    public final int f53035b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f53036c;

    /* renamed from: d  reason: collision with root package name */
    public final int f53037d;

    /* renamed from: e  reason: collision with root package name */
    public final int f53038e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f53039f;

    /* renamed from: g  reason: collision with root package name */
    public final int f53040g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        p8.j.i(i10 >= 0 && i11 >= i10);
        this.f53035b = i10;
        this.f53034a = i11;
        this.f53036c = sparseIntArray;
        this.f53037d = i12;
        this.f53038e = i13;
        this.f53040g = i14;
    }
}
