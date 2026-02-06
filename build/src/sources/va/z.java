package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f52361a;

    /* renamed from: b  reason: collision with root package name */
    public final int f52362b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f52363c;

    /* renamed from: d  reason: collision with root package name */
    public final int f52364d;

    /* renamed from: e  reason: collision with root package name */
    public final int f52365e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f52366f;

    /* renamed from: g  reason: collision with root package name */
    public final int f52367g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f52362b = i10;
        this.f52361a = i11;
        this.f52363c = sparseIntArray;
        this.f52364d = i12;
        this.f52365e = i13;
        this.f52367g = i14;
    }
}
