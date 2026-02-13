package xf;

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
import xf.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s extends jf.a {
    @NonNull
    public static final Parcelable.Creator<s> CREATOR;

    /* renamed from: d  reason: collision with root package name */
    private final v f55300d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f55301e;

    /* renamed from: i  reason: collision with root package name */
    private final List f55302i;

    static {
        com.google.android.gms.internal.fido.h1.q(e4.f14673a, e4.f14674b);
        CREATOR = new u0();
    }

    public s(String str, v4 v4Var, List list) {
        hf.q.l(str);
        try {
            this.f55300d = v.a(str);
            this.f55301e = (v4) hf.q.l(v4Var);
            this.f55302i = list;
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
        return this.f55301e.p();
    }

    public List c() {
        return this.f55302i;
    }

    public String d() {
        return this.f55300d.toString();
    }

    public boolean equals(Object obj) {
        List list;
        if (!(obj instanceof s)) {
            return false;
        }
        s sVar = (s) obj;
        if (!this.f55300d.equals(sVar.f55300d) || !hf.o.a(this.f55301e, sVar.f55301e)) {
            return false;
        }
        List list2 = this.f55302i;
        if (list2 == null && sVar.f55302i == null) {
            return true;
        }
        if (list2 == null || (list = sVar.f55302i) == null || !list2.containsAll(list) || !sVar.f55302i.containsAll(this.f55302i)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(this.f55300d, this.f55301e, this.f55302i);
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f55300d);
        String b10 = com.google.android.gms.common.util.c.b(b());
        String valueOf2 = String.valueOf(this.f55302i);
        return "PublicKeyCredentialDescriptor{\n type=" + valueOf + ", \n id=" + b10 + ", \n transports=" + valueOf2 + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, d(), false);
        jf.c.f(parcel, 3, b(), false);
        jf.c.w(parcel, 4, c(), false);
        jf.c.b(parcel, a10);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public s(String str, byte[] bArr, List list) {
        this(str, v4.o(bArr, 0, bArr.length), list);
        v4 v4Var = v4.f14817e;
    }
}
