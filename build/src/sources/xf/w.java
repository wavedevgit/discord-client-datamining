package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import com.google.android.gms.internal.fido.v4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class w extends jf.a {
    @NonNull
    public static final Parcelable.Creator<w> CREATOR = new y0();

    /* renamed from: d  reason: collision with root package name */
    private final v4 f55311d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55312e;

    /* renamed from: i  reason: collision with root package name */
    private final String f55313i;

    /* renamed from: o  reason: collision with root package name */
    private final String f55314o;

    public w(v4 v4Var, String str, String str2, String str3) {
        this.f55311d = (v4) hf.q.l(v4Var);
        this.f55312e = (String) hf.q.l(str);
        this.f55313i = str2;
        this.f55314o = (String) hf.q.l(str3);
    }

    public String b() {
        return this.f55314o;
    }

    public String c() {
        return this.f55313i;
    }

    public byte[] d() {
        return this.f55311d.p();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof w)) {
            return false;
        }
        w wVar = (w) obj;
        if (!hf.o.a(this.f55311d, wVar.f55311d) || !hf.o.a(this.f55312e, wVar.f55312e) || !hf.o.a(this.f55313i, wVar.f55313i) || !hf.o.a(this.f55314o, wVar.f55314o)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f55312e;
    }

    public int hashCode() {
        return hf.o.b(this.f55311d, this.f55312e, this.f55313i, this.f55314o);
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(this.f55311d.p());
        return "PublicKeyCredentialUserEntity{\n id=" + b10 + ", \n name='" + this.f55312e + "', \n icon='" + this.f55313i + "', \n displayName='" + this.f55314o + "'}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.f(parcel, 2, d(), false);
        jf.c.s(parcel, 3, getName(), false);
        jf.c.s(parcel, 4, c(), false);
        jf.c.s(parcel, 5, b(), false);
        jf.c.b(parcel, a10);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public w(byte[] r3, java.lang.String r4, java.lang.String r5, java.lang.String r6) {
        /*
            r2 = this;
            java.lang.Object r3 = hf.q.l(r3)
            byte[] r3 = (byte[]) r3
            com.google.android.gms.internal.fido.v4 r0 = com.google.android.gms.internal.fido.v4.f14817e
            int r0 = r3.length
            r1 = 0
            com.google.android.gms.internal.fido.v4 r3 = com.google.android.gms.internal.fido.v4.o(r3, r1, r0)
            r2.<init>(r3, r4, r5, r6)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: xf.w.<init>(byte[], java.lang.String, java.lang.String, java.lang.String):void");
    }
}
