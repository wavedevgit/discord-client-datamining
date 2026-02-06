package pg;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xe {

    /* renamed from: a  reason: collision with root package name */
    private final String f44936a;

    /* renamed from: b  reason: collision with root package name */
    private final we f44937b;

    /* renamed from: c  reason: collision with root package name */
    private we f44938c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ xe(String str, ue ueVar) {
        we weVar = new we(null);
        this.f44937b = weVar;
        this.f44938c = weVar;
        this.f44936a = str;
    }

    private final xe e(String str, Object obj) {
        ve veVar = new ve(null);
        this.f44938c.f44890c = veVar;
        this.f44938c = veVar;
        veVar.f44889b = obj;
        veVar.f44888a = str;
        return this;
    }

    public final xe a(String str, float f10) {
        e(str, String.valueOf(f10));
        return this;
    }

    public final xe b(String str, int i10) {
        e(str, String.valueOf(i10));
        return this;
    }

    public final xe c(String str, Object obj) {
        we weVar = new we(null);
        this.f44938c.f44890c = weVar;
        this.f44938c = weVar;
        weVar.f44889b = obj;
        weVar.f44888a = str;
        return this;
    }

    public final xe d(String str, boolean z10) {
        e("trackingEnabled", String.valueOf(z10));
        return this;
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(this.f44936a);
        sb2.append('{');
        we weVar = this.f44937b.f44890c;
        String str = "";
        while (weVar != null) {
            Object obj = weVar.f44889b;
            sb2.append(str);
            String str2 = weVar.f44888a;
            if (str2 != null) {
                sb2.append(str2);
                sb2.append('=');
            }
            if (obj != null && obj.getClass().isArray()) {
                String deepToString = Arrays.deepToString(new Object[]{obj});
                sb2.append((CharSequence) deepToString, 1, deepToString.length() - 1);
            } else {
                sb2.append(obj);
            }
            weVar = weVar.f44890c;
            str = ", ";
        }
        sb2.append('}');
        return sb2.toString();
    }
}
