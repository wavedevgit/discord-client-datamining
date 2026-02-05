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
    private final v4 f53020d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53021e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53022i;

    /* renamed from: o  reason: collision with root package name */
    private final String f53023o;

    public w(v4 v4Var, String str, String str2, String str3) {
        this.f53020d = (v4) gf.q.l(v4Var);
        this.f53021e = (String) gf.q.l(str);
        this.f53022i = str2;
        this.f53023o = (String) gf.q.l(str3);
    }

    public String b() {
        return this.f53023o;
    }

    public String c() {
        return this.f53022i;
    }

    public byte[] d() {
        return this.f53020d.o();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof w)) {
            return false;
        }
        w wVar = (w) obj;
        if (!gf.o.a(this.f53020d, wVar.f53020d) || !gf.o.a(this.f53021e, wVar.f53021e) || !gf.o.a(this.f53022i, wVar.f53022i) || !gf.o.a(this.f53023o, wVar.f53023o)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f53021e;
    }

    public int hashCode() {
        return gf.o.b(this.f53020d, this.f53021e, this.f53022i, this.f53023o);
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(this.f53020d.o());
        return "PublicKeyCredentialUserEntity{\n id=" + b10 + ", \n name='" + this.f53021e + "', \n icon='" + this.f53022i + "', \n displayName='" + this.f53023o + "'}";
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
            com.google.android.gms.internal.fido.v4 r0 = com.google.android.gms.internal.fido.v4.f14136e
            int r0 = r3.length
            r1 = 0
            com.google.android.gms.internal.fido.v4 r3 = com.google.android.gms.internal.fido.v4.n(r3, r1, r0)
            r2.<init>(r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: wf.w.<init>(byte[], java.lang.String, java.lang.String, java.lang.String):void");
    }
}
