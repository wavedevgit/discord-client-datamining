package va;

import android.util.SparseIntArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    public final int f50858a;

    /* renamed from: b  reason: collision with root package name */
    public final int f50859b;

    /* renamed from: c  reason: collision with root package name */
    public final SparseIntArray f50860c;

    /* renamed from: d  reason: collision with root package name */
    public final int f50861d;

    /* renamed from: e  reason: collision with root package name */
    public final int f50862e;

    /* renamed from: f  reason: collision with root package name */
    public boolean f50863f;

    /* renamed from: g  reason: collision with root package name */
    public final int f50864g;

    public z(int i10, int i11, SparseIntArray sparseIntArray) {
        this(i10, i11, sparseIntArray, 0, Integer.MAX_VALUE, -1);
    }

    public z(int i10, int i11, SparseIntArray sparseIntArray, int i12, int i13, int i14) {
        o8.j.i(i10 >= 0 && i11 >= i10);
        this.f50859b = i10;
        this.f50858a = i11;
        this.f50860c = sparseIntArray;
        this.f50861d = i12;
        this.f50862e = i13;
        this.f50864g = i14;
    }
}
