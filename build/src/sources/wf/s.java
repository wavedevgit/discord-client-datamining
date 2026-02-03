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
    private final v f52355d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f52356e;

    /* renamed from: i  reason: collision with root package name */
    private final List f52357i;

    static {
        com.google.android.gms.internal.fido.h1.o(e4.f13598a, e4.f13599b);
        CREATOR = new u0();
    }

    public s(String str, v4 v4Var, List list) {
        gf.q.l(str);
        try {
            this.f52355d = v.a(str);
            this.f52356e = (v4) gf.q.l(v4Var);
            this.f52357i = list;
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
        return this.f52356e.n();
    }

    public List c() {
        return this.f52357i;
    }

    public String d() {
        return this.f52355d.toString();
    }

    public boolean equals(Object obj) {
        List list;
        if (!(obj instanceof s)) {
            return false;
        }
        s sVar = (s) obj;
        if (!this.f52355d.equals(sVar.f52355d) || !gf.o.a(this.f52356e, sVar.f52356e)) {
            return false;
        }
        List list2 = this.f52357i;
        if (list2 == null && sVar.f52357i == null) {
            return true;
        }
        if (list2 == null || (list = sVar.f52357i) == null || !list2.containsAll(list) || !sVar.f52357i.containsAll(this.f52357i)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52355d, this.f52356e, this.f52357i);
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f52355d);
        String b10 = com.google.android.gms.common.util.c.b(b());
        String valueOf2 = String.valueOf(this.f52357i);
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
        v4 v4Var = v4.f13742e;
    }
}
