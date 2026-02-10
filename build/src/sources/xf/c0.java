package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import java.util.HashSet;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c0 extends jf.a {
    @NonNull
    public static final Parcelable.Creator<c0> CREATOR = new e1();

    /* renamed from: d  reason: collision with root package name */
    private final List f54626d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(List list) {
        this.f54626d = list;
    }

    public List b() {
        return this.f54626d;
    }

    public final JSONArray c() {
        try {
            JSONArray jSONArray = new JSONArray();
            if (this.f54626d != null) {
                for (int i10 = 0; i10 < this.f54626d.size(); i10++) {
                    d0 d0Var = (d0) this.f54626d.get(i10);
                    JSONArray jSONArray2 = new JSONArray();
                    jSONArray2.put(d0Var.d());
                    jSONArray2.put(Short.toString(d0Var.b()));
                    jSONArray2.put(Short.toString(d0Var.c()));
                    jSONArray.put(i10, jSONArray2);
                }
            }
            return jSONArray;
        } catch (JSONException e10) {
            throw new RuntimeException("Error encoding UvmEntries to JSON object", e10);
        }
    }

    public boolean equals(Object obj) {
        List list;
        if (!(obj instanceof c0)) {
            return false;
        }
        c0 c0Var = (c0) obj;
        List list2 = this.f54626d;
        if (list2 == null && c0Var.f54626d == null) {
            return true;
        }
        if (list2 == null || (list = c0Var.f54626d) == null || !list2.containsAll(list) || !c0Var.f54626d.containsAll(this.f54626d)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        HashSet hashSet;
        List list = this.f54626d;
        if (list == null) {
            hashSet = null;
        } else {
            hashSet = new HashSet(list);
        }
        return hf.o.b(hashSet);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.w(parcel, 1, b(), false);
        jf.c.b(parcel, a10);
    }
}
