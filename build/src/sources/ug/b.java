package ug;

import android.content.Intent;
import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends hf.a implements ef.k {
    public static final Parcelable.Creator<b> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    final int f50265d;

    /* renamed from: e  reason: collision with root package name */
    private int f50266e;

    /* renamed from: i  reason: collision with root package name */
    private Intent f50267i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(int i10, int i11, Intent intent) {
        this.f50265d = i10;
        this.f50266e = i11;
        this.f50267i = intent;
    }

    @Override // ef.k
    public final Status a() {
        if (this.f50266e == 0) {
            return Status.f14789q;
        }
        return Status.f14793u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f50265d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f50266e);
        hf.c.q(parcel, 3, this.f50267i, i10, false);
        hf.c.b(parcel, a10);
    }
}
