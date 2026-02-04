package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f51307a;

    /* renamed from: b  reason: collision with root package name */
    public final int f51308b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f51309c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51310d;

    /* renamed from: e  reason: collision with root package name */
    public final int f51311e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f51312f;

    /* renamed from: g  reason: collision with root package name */
    public final int f51313g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f51308b = i10;
        this.f51307a = i11;
        this.f51309c = sparseIntArray;
        this.f51310d = i12;
        this.f51311e = i13;
        this.f51313g = i14;
    }
}
