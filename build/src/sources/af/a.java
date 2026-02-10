package af;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends jf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    final int f752d;

    /* renamed from: e  reason: collision with root package name */
    private int f753e;

    /* renamed from: i  reason: collision with root package name */
    private Bundle f754i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, Bundle bundle) {
        this.f752d = i10;
        this.f753e = i11;
        this.f754i = bundle;
    }

    public int b() {
        return this.f753e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f752d);
        jf.c.l(parcel, 2, b());
        jf.c.e(parcel, 3, this.f754i, false);
        jf.c.b(parcel, a10);
    }
}
