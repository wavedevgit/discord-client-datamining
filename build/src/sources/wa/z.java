package wa;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f52465a;

    /* renamed from: b  reason: collision with root package name */
    public final int f52466b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f52467c;

    /* renamed from: d  reason: collision with root package name */
    public final int f52468d;

    /* renamed from: e  reason: collision with root package name */
    public final int f52469e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f52470f;

    /* renamed from: g  reason: collision with root package name */
    public final int f52471g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        p8.j.i(i10 >= 0 && i11 >= i10);
        this.f52466b = i10;
        this.f52465a = i11;
        this.f52467c = sparseIntArray;
        this.f52468d = i12;
        this.f52469e = i13;
        this.f52471g = i14;
    }
}
