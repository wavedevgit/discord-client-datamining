package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hl extends hf.a {
    public static final Parcelable.Creator<hl> CREATOR = new xl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39866d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39867e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39868i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39869o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39870p;

    /* renamed from: q  reason: collision with root package name */
    private final gl f39871q;

    /* renamed from: r  reason: collision with root package name */
    private final gl f39872r;

    public hl(String str, String str2, String str3, String str4, String str5, gl glVar, gl glVar2) {
        this.f39866d = str;
        this.f39867e = str2;
        this.f39868i = str3;
        this.f39869o = str4;
        this.f39870p = str5;
        this.f39871q = glVar;
        this.f39872r = glVar2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39866d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f39867e, false);
        hf.c.s(parcel, 3, this.f39868i, false);
        hf.c.s(parcel, 4, this.f39869o, false);
        hf.c.s(parcel, 5, this.f39870p, false);
        hf.c.q(parcel, 6, this.f39871q, i10, false);
        hf.c.q(parcel, 7, this.f39872r, i10, false);
        hf.c.b(parcel, a10);
    }
}
