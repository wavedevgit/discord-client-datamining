package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f52409a;

    /* renamed from: b  reason: collision with root package name */
    public final int f52410b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f52411c;

    /* renamed from: d  reason: collision with root package name */
    public final int f52412d;

    /* renamed from: e  reason: collision with root package name */
    public final int f52413e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f52414f;

    /* renamed from: g  reason: collision with root package name */
    public final int f52415g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f52410b = i10;
        this.f52409a = i11;
        this.f52411c = sparseIntArray;
        this.f52412d = i12;
        this.f52413e = i13;
        this.f52415g = i14;
    }
}
