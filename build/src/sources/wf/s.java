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
    private final v f53009d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f53010e;

    /* renamed from: i  reason: collision with root package name */
    private final List f53011i;

    static {
        com.google.android.gms.internal.fido.h1.p(e4.f13992a, e4.f13993b);
        CREATOR = new u0();
    }

    public s(String str, v4 v4Var, List list) {
        gf.q.l(str);
        try {
            this.f53009d = v.a(str);
            this.f53010e = (v4) gf.q.l(v4Var);
            this.f53011i = list;
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
        return this.f53010e.o();
    }

    public List c() {
        return this.f53011i;
    }

    public String d() {
        return this.f53009d.toString();
    }

    public boolean equals(Object obj) {
        List list;
        if (!(obj instanceof s)) {
            return false;
        }
        s sVar = (s) obj;
        if (!this.f53009d.equals(sVar.f53009d) || !gf.o.a(this.f53010e, sVar.f53010e)) {
            return false;
        }
        List list2 = this.f53011i;
        if (list2 == null && sVar.f53011i == null) {
            return true;
        }
        if (list2 == null || (list = sVar.f53011i) == null || !list2.containsAll(list) || !sVar.f53011i.containsAll(this.f53011i)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f53009d, this.f53010e, this.f53011i);
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f53009d);
        String b10 = com.google.android.gms.common.util.c.b(b());
        String valueOf2 = String.valueOf(this.f53011i);
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
        this(str, v4.n(bArr, 0, bArr.length), list);
        v4 v4Var = v4.f14136e;
    }
}
