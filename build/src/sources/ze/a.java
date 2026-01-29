package ze;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends hf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    final int f55633d;

    /* renamed from: e  reason: collision with root package name */
    private int f55634e;

    /* renamed from: i  reason: collision with root package name */
    private Bundle f55635i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, Bundle bundle) {
        this.f55633d = i10;
        this.f55634e = i11;
        this.f55635i = bundle;
    }

    public int b() {
        return this.f55634e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f55633d);
        hf.c.l(parcel, 2, b());
        hf.c.e(parcel, 3, this.f55635i, false);
        hf.c.b(parcel, a10);
    }
}
