package wa;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f53436a;

    /* renamed from: b  reason: collision with root package name */
    public final int f53437b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f53438c;

    /* renamed from: d  reason: collision with root package name */
    public final int f53439d;

    /* renamed from: e  reason: collision with root package name */
    public final int f53440e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f53441f;

    /* renamed from: g  reason: collision with root package name */
    public final int f53442g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        p8.j.i(i10 >= 0 && i11 >= i10);
        this.f53437b = i10;
        this.f53436a = i11;
        this.f53438c = sparseIntArray;
        this.f53439d = i12;
        this.f53440e = i13;
        this.f53442g = i14;
    }
}
