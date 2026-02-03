package og;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xe {

    /* renamed from: a  reason: collision with root package name */
    private final String f43888a;

    /* renamed from: b  reason: collision with root package name */
    private final we f43889b;

    /* renamed from: c  reason: collision with root package name */
    private we f43890c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ xe(String str, ue ueVar) {
        we weVar = new we(null);
        this.f43889b = weVar;
        this.f43890c = weVar;
        this.f43888a = str;
    }

    private final xe e(String str, Object obj) {
        ve veVar = new ve(null);
        this.f43890c.f43842c = veVar;
        this.f43890c = veVar;
        veVar.f43841b = obj;
        veVar.f43840a = str;
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
        this.f43890c.f43842c = weVar;
        this.f43890c = weVar;
        weVar.f43841b = obj;
        weVar.f43840a = str;
        return this;
    }

    public final xe d(String str, boolean z10) {
        e("trackingEnabled", String.valueOf(z10));
        return this;
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(this.f43888a);
        sb2.append('{');
        we weVar = this.f43889b.f43842c;
        String str = "";
        while (weVar != null) {
            Object obj = weVar.f43841b;
            sb2.append(str);
            String str2 = weVar.f43840a;
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
            weVar = weVar.f43842c;
            str = ", ";
        }
        sb2.append('}');
        return sb2.toString();
    }
}
