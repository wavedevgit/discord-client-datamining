package q5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: c  reason: collision with root package name */
    public static final e f46585c = new e("COMPOSITION");

    /* renamed from: a  reason: collision with root package name */
    private final List f46586a;

    /* renamed from: b  reason: collision with root package name */
    private f f46587b;

    public e(String... strArr) {
        this.f46586a = Arrays.asList(strArr);
    }

    private boolean b() {
        List list = this.f46586a;
        return ((String) list.get(list.size() - 1)).equals("**");
    }

    private boolean f(String str) {
        return "__container".equals(str);
    }

    public e a(String str) {
        e eVar = new e(this);
        eVar.f46586a.add(str);
        return eVar;
    }

    public boolean c(String str, int i10) {
        boolean z10;
        boolean z11;
        if (i10 >= this.f46586a.size()) {
            return false;
        }
        if (i10 == this.f46586a.size() - 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        String str2 = (String) this.f46586a.get(i10);
        if (!str2.equals("**")) {
            if (!str2.equals(str) && !str2.equals("*")) {
                z11 = false;
            } else {
                z11 = true;
            }
            if ((!z10 && (i10 != this.f46586a.size() - 2 || !b())) || !z11) {
                return false;
            }
            return true;
        } else if (!z10 && ((String) this.f46586a.get(i10 + 1)).equals(str)) {
            if (i10 != this.f46586a.size() - 2 && (i10 != this.f46586a.size() - 3 || !b())) {
                return false;
            }
            return true;
        } else if (z10) {
            return true;
        } else {
            int i11 = i10 + 1;
            if (i11 < this.f46586a.size() - 1) {
                return false;
            }
            return ((String) this.f46586a.get(i11)).equals(str);
        }
    }

    public f d() {
        return this.f46587b;
    }

    public int e(String str, int i10) {
        if (f(str)) {
            return 0;
        }
        if (!((String) this.f46586a.get(i10)).equals("**")) {
            return 1;
        }
        if (i10 == this.f46586a.size() - 1 || !((String) this.f46586a.get(i10 + 1)).equals(str)) {
            return 0;
        }
        return 2;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            e eVar = (e) obj;
            if (!this.f46586a.equals(eVar.f46586a)) {
                return false;
            }
            f fVar = this.f46587b;
            f fVar2 = eVar.f46587b;
            if (fVar != null) {
                return fVar.equals(fVar2);
            }
            if (fVar2 == null) {
                return true;
            }
        }
        return false;
    }

    public boolean g(String str, int i10) {
        if (f(str)) {
            return true;
        }
        if (i10 >= this.f46586a.size()) {
            return false;
        }
        if (((String) this.f46586a.get(i10)).equals(str) || ((String) this.f46586a.get(i10)).equals("**") || ((String) this.f46586a.get(i10)).equals("*")) {
            return true;
        }
        return false;
    }

    public boolean h(String str, int i10) {
        if ("__container".equals(str) || i10 < this.f46586a.size() - 1 || ((String) this.f46586a.get(i10)).equals("**")) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f46586a.hashCode() * 31;
        f fVar = this.f46587b;
        if (fVar != null) {
            i10 = fVar.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode + i10;
    }

    public e i(f fVar) {
        e eVar = new e(this);
        eVar.f46587b = fVar;
        return eVar;
    }

    public String toString() {
        boolean z10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("KeyPath{keys=");
        sb2.append(this.f46586a);
        sb2.append(",resolved=");
        if (this.f46587b != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        sb2.append(z10);
        sb2.append('}');
        return sb2.toString();
    }

    private e(e eVar) {
        this.f46586a = new ArrayList(eVar.f46586a);
        this.f46587b = eVar.f46587b;
    }
}
