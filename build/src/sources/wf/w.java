package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class w extends hf.a {
    @NonNull
    public static final Parcelable.Creator<w> CREATOR = new y0();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f52577d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52578e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52579i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52580o;

    public w(v4 v4Var, String str, String str2, String str3) {
        this.f52577d = (v4) gf.q.l(v4Var);
        this.f52578e = (String) gf.q.l(str);
        this.f52579i = str2;
        this.f52580o = (String) gf.q.l(str3);
    }

    public String b() {
        return this.f52580o;
    }

    public String c() {
        return this.f52579i;
    }

    public byte[] d() {
        return this.f52577d.n();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof w)) {
            return false;
        }
        w wVar = (w) obj;
        if (!gf.o.a(this.f52577d, wVar.f52577d) || !gf.o.a(this.f52578e, wVar.f52578e) || !gf.o.a(this.f52579i, wVar.f52579i) || !gf.o.a(this.f52580o, wVar.f52580o)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f52578e;
    }

    public int hashCode() {
        return gf.o.b(this.f52577d, this.f52578e, this.f52579i, this.f52580o);
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(this.f52577d.n());
        return "PublicKeyCredentialUserEntity{\n id=" + b10 + ", \n name='" + this.f52578e + "', \n icon='" + this.f52579i + "', \n displayName='" + this.f52580o + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.f(parcel, 2, d(), false);
        hf.c.s(parcel, 3, getName(), false);
        hf.c.s(parcel, 4, c(), false);
        hf.c.s(parcel, 5, b(), false);
        hf.c.b(parcel, a10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public w(byte[] r3, java.lang.String r4, java.lang.String r5, java.lang.String r6) {
        /*
            r2 = this;
            java.lang.Object r3 = gf.q.l(r3)
            byte[] r3 = (byte[]) r3
            com.google.android.gms.internal.fido.v4 r0 = com.google.android.gms.internal.fido.v4.f15145e
            int r0 = r3.length
            r1 = 0
            com.google.android.gms.internal.fido.v4 r3 = com.google.android.gms.internal.fido.v4.m(r3, r1, r0)
            r2.<init>(r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: wf.w.<init>(byte[], java.lang.String, java.lang.String, java.lang.String):void");
    }
}
