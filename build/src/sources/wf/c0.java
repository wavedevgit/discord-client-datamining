package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import java.util.HashSet;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c0 extends hf.a {
    @NonNull
    public static final Parcelable.Creator<c0> CREATOR = new e1();

    /* renamed from: d  reason: collision with root package name */
    private final List f53683d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(List list) {
        this.f53683d = list;
    }

    public List b() {
        return this.f53683d;
    }

    public final JSONArray c() {
        try {
            JSONArray jSONArray = new JSONArray();
            if (this.f53683d != null) {
                for (int i10 = 0; i10 < this.f53683d.size(); i10++) {
                    d0 d0Var = (d0) this.f53683d.get(i10);
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
        List list2 = this.f53683d;
        if (list2 == null && c0Var.f53683d == null) {
            return true;
        }
        if (list2 == null || (list = c0Var.f53683d) == null || !list2.containsAll(list) || !c0Var.f53683d.containsAll(this.f53683d)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        HashSet hashSet;
        List list = this.f53683d;
        if (list == null) {
            hashSet = null;
        } else {
            hashSet = new HashSet(list);
        }
        return gf.o.b(hashSet);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, b(), false);
        hf.c.b(parcel, a10);
    }
}
