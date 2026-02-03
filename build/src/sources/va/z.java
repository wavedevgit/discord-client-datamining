package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f51310a;

    /* renamed from: b  reason: collision with root package name */
    public final int f51311b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f51312c;

    /* renamed from: d  reason: collision with root package name */
    public final int f51313d;

    /* renamed from: e  reason: collision with root package name */
    public final int f51314e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f51315f;

    /* renamed from: g  reason: collision with root package name */
    public final int f51316g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f51311b = i10;
        this.f51310a = i11;
        this.f51312c = sparseIntArray;
        this.f51313d = i12;
        this.f51314e = i13;
        this.f51316g = i14;
    }
}
