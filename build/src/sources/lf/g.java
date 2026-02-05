package lf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends hf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    private final int f36804d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f36805e;

    public g(int i10) {
        this(i10, false);
    }

    public int b() {
        return this.f36804d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, b());
        hf.c.c(parcel, 2, this.f36805e);
        hf.c.b(parcel, a10);
    }

    public g(int i10, boolean z10) {
        this.f36804d = i10;
        this.f36805e = z10;
    }
}
