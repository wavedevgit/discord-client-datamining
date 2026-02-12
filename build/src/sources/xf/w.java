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
    private final v4 f54743d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54744e;

    /* renamed from: i  reason: collision with root package name */
    private final String f54745i;

    /* renamed from: o  reason: collision with root package name */
    private final String f54746o;

    public w(v4 v4Var, String str, String str2, String str3) {
        this.f54743d = (v4) hf.q.l(v4Var);
        this.f54744e = (String) hf.q.l(str);
        this.f54745i = str2;
        this.f54746o = (String) hf.q.l(str3);
    }

    public String b() {
        return this.f54746o;
    }

    public String c() {
        return this.f54745i;
    }

    public byte[] d() {
        return this.f54743d.p();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof w)) {
            return false;
        }
        w wVar = (w) obj;
        if (!hf.o.a(this.f54743d, wVar.f54743d) || !hf.o.a(this.f54744e, wVar.f54744e) || !hf.o.a(this.f54745i, wVar.f54745i) || !hf.o.a(this.f54746o, wVar.f54746o)) {
            return false;
        }
        return true;
    }

    public String getName() {
        return this.f54744e;
    }

    public int hashCode() {
        return hf.o.b(this.f54743d, this.f54744e, this.f54745i, this.f54746o);
    }

    public final String toString() {
        String b10 = com.google.android.gms.common.util.c.b(this.f54743d.p());
        return "PublicKeyCredentialUserEntity{\n id=" + b10 + ", \n name='" + this.f54744e + "', \n icon='" + this.f54745i + "', \n displayName='" + this.f54746o + "'}";
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
