package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f51996a;

    /* renamed from: b  reason: collision with root package name */
    public final int f51997b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f51998c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51999d;

    /* renamed from: e  reason: collision with root package name */
    public final int f52000e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f52001f;

    /* renamed from: g  reason: collision with root package name */
    public final int f52002g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f51997b = i10;
        this.f51996a = i11;
        this.f51998c = sparseIntArray;
        this.f51999d = i12;
        this.f52000e = i13;
        this.f52002g = i14;
    }
}
