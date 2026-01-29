package wf;

import android.os.Parcel;
import android.os.Parcelable;
import android.util.Base64;
import androidx.annotation.NonNull;
import com.facebook.react.devsupport.StackTraceHelper;
import com.google.android.gms.fido.common.Transport;
import com.google.android.gms.internal.fido.e4;
import com.google.android.gms.internal.fido.v4;
import java.util.List;
import org.json.JSONObject;
import wf.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s extends hf.a {
    @NonNull
    public static final Parcelable.Creator<s> CREATOR;

    /* renamed from: d  reason: collision with root package name */
    private final v f52550d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f52551e;

    /* renamed from: i  reason: collision with root package name */
    private final List f52552i;

    static {
        com.google.android.gms.internal.fido.h1.o(e4.f15001a, e4.f15002b);
        CREATOR = new u0();
    }

    public s(String str, v4 v4Var, List list) {
        gf.q.l(str);
        try {
            this.f52550d = v.a(str);
            this.f52551e = (v4) gf.q.l(v4Var);
            this.f52552i = list;
        } catch (v.a e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public static s e(JSONObject jSONObject) {
        List list;
        String string = jSONObject.getString("type");
        byte[] decode = Base64.decode(jSONObject.getString(StackTraceHelper.ID_KEY), 11);
        if (jSONObject.has("transports")) {
            list = Transport.d(jSONObject.getJSONArray("transports"));
        } else {
            list = null;
        }
        return new s(string, decode, list);
    }

    public byte[] b() {
        return this.f52551e.n();
    }

    public List c() {
        return this.f52552i;
    }

    public String d() {
        return this.f52550d.toString();
    }

    public boolean equals(Object obj) {
        List list;
        if (!(obj instanceof s)) {
            return false;
        }
        s sVar = (s) obj;
        if (!this.f52550d.equals(sVar.f52550d) || !gf.o.a(this.f52551e, sVar.f52551e)) {
            return false;
        }
        List list2 = this.f52552i;
        if (list2 == null && sVar.f52552i == null) {
            return true;
        }
        if (list2 == null || (list = sVar.f52552i) == null || !list2.containsAll(list) || !sVar.f52552i.containsAll(this.f52552i)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52550d, this.f52551e, this.f52552i);
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f52550d);
        String b10 = com.google.android.gms.common.util.c.b(b());
        String valueOf2 = String.valueOf(this.f52552i);
        return "PublicKeyCredentialDescriptor{\n type=" + valueOf + ", \n id=" + b10 + ", \n transports=" + valueOf2 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, d(), false);
        hf.c.f(parcel, 3, b(), false);
        hf.c.w(parcel, 4, c(), false);
        hf.c.b(parcel, a10);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public s(String str, byte[] bArr, List list) {
        this(str, v4.m(bArr, 0, bArr.length), list);
        v4 v4Var = v4.f15145e;
    }
}
