package wa;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f52466a;

    /* renamed from: b  reason: collision with root package name */
    public final int f52467b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f52468c;

    /* renamed from: d  reason: collision with root package name */
    public final int f52469d;

    /* renamed from: e  reason: collision with root package name */
    public final int f52470e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f52471f;

    /* renamed from: g  reason: collision with root package name */
    public final int f52472g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        p8.j.i(i10 >= 0 && i11 >= i10);
        this.f52467b = i10;
        this.f52466a = i11;
        this.f52468c = sparseIntArray;
        this.f52469d = i12;
        this.f52470e = i13;
        this.f52472g = i14;
    }
}
